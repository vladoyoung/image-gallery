import { useState } from "react";
import { storage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "./useAuth";

function useStorage() {
  const [progress, setProgress] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState<string | null>("");
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth()

  const uploadImage = (file: File) => {
    // Check if file exists first
    if (!file) {
      return;
    }

    // Generate a unique id for the file
    const fileId = uuidv4();
    const fileFormat = file.type.split("/")[1];

    // allow only jpeg, jpg and png files
    if (fileFormat !== 'jpeg' && fileFormat !== 'jpg' && fileFormat !== 'png') {
        setError(new Error('Only jpeg and png files are allowed.'))
        setSuccessMessage(null);
        return
    }

    // allow max filesize of 2MB
    if (file.size > 2 * 1024 * 1024) {
        setError(new Error('File size must be less than 2MB.'))
        setSuccessMessage(null);
        return
    }

    // Create a storage reference for firebase
    const storageRef = ref(storage, `images/${fileId}.${fileFormat}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setProgress(0);

        // Add a new document with a generated uuid.
        const docRef = await addDoc(collection(db, "images"), {
            uuid: fileId,
            imageUrl: downloadURL,
            createdAt: new Date(),
            userEmail: user?.email,
            likedBy: []
        });
        setError(null);
        setSuccessMessage(`Image with ID ${docRef.id} uploaded successfully!`);
      }
    );
  };

  return { progress, error, successMessage, uploadImage };
}

export default useStorage;
