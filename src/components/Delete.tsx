import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Delete({ imageData } : { imageData: any }) {
  const { user } = useAuth()
  const [isThisUserCreator, setIsThisUserCreator] = useState(false)

  // Check if user is creator of this image
  useEffect(() => {
    setIsThisUserCreator(imageData?.userEmail === (user?.email))
  }, [imageData?.userEmail, user?.email])

  // Get image reference
  const imageRef = doc(db, "images", imageData?.id);

  // Handle delete button click
  const handleDelete = async () => {
    await deleteDoc(imageRef);
  };

  return isThisUserCreator ? (
    <div className=''>
      <button
        className="btn btn-error btn-xs mt-2"
        onClick={() => {
          if (document) {
            (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
          }
        }}
      >
        Delete
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>  
          <h3 className="font-bold text-lg">Are you sure you want to delete this image?</h3>
          <p className="my-2">Deletion is irreversible!</p>
          <button className="btn btn-error mt-2" onClick={handleDelete}>Confirm deletion</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  ) : ''
}

export default Delete