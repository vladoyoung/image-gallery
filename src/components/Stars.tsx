import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Stars({ imageData } : { imageData: any }) {
  const { user } = useAuth()
  const [isStarredByThisUser, setIsStarredByThisUser] = useState(false)

  // Check if user has starred this image
  useEffect(() => {
    setIsStarredByThisUser(imageData?.likedBy?.includes(user?.email))
  }, [imageData?.likedBy, user?.email])

  // Get image reference
  const imageRef = doc(db, "images", imageData?.id);

  // Handle star button click
  const handleStar = async () => {
    await updateDoc(imageRef, {
      likedBy: isStarredByThisUser ? arrayRemove(user?.email) : arrayUnion(user?.email)
    });
    // setIsStarredByThisUser(!isStarredByThisUser)
  };

  return (
    <div className=''>
      <button className={``} onClick={handleStar}>
        <div className={`mask mask-star-2 h-6 w-6 hover:bg-primary/50 duration-300 ${isStarredByThisUser ? 'bg-primary' : 'bg-gray-300'}`}></div>
      </button>
    </div>
  )
}

export default Stars