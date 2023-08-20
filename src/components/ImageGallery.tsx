import usePaginateCollection from "../hooks/usePaginateCollection";
import { collection } from "firebase/firestore"; 
import { db } from "../firebase/config";
import ImageCard from "./ImageCard";

function ImageGallery() {
  
  const collectionRef = collection(db, "images");
  const [images, loadMore, loading, finished] = usePaginateCollection<any>(collectionRef, {
      orderKey: 'createdAt',
      direction: 'desc',
      pageLimit: 6
  })

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center'>
        {images.map((image) => (
          <ImageCard imageData={image} key={image.id}/>
        ))}
      </div>
      {loading &&
        <div className='text-center mx-auto my-10'>
          <progress className="progress w-56"></progress>
        </div>
      }
      <div className="text-center md:mt-10 mt-6">
        {!finished ?
          <button onClick={loadMore} disabled={loading} className="btn btn-primary">
            Load more
          </button>
          : <p className="text-center text-gray-500">No more images to load</p>
        }
      </div>
    </div>
  )
}

export default ImageGallery