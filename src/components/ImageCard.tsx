import Delete from './Delete'
import Stars from './Stars'

function ImageCard({imageData} : {imageData: any}) {
    return (
        <div className="card col-span-1 bg-base-100 shadow-xl border rounded-lg">
            <figure className="relative">
            <img src={imageData.imageUrl} className="aspect-square object-cover relative" alt="When it exists, image title will go here" loading="lazy" width="600"/>
            </figure>
            <div className="card-body p-4">
            <div className="flex flex-row justify-between items-start gap-2">
                <div className="text-sm text-gray-800">
                <p>Uploaded by: {imageData?.userEmail}</p>
                <p>Created on: {imageData?.createdAt.toDate().toLocaleDateString()}</p>
                <Delete imageData={imageData}/>
                </div>
                <Stars imageData={imageData}/>
            </div>
            </div>
        </div>
    )
}

export default ImageCard