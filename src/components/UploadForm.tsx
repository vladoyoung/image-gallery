import React, { useState } from 'react'
import useStorage from '../hooks/useStorage'

function UploadForm() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { uploadImage, progress, error, successMessage } = useStorage()

  // Set the selected file state when the input file changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }
  
  // Handle the submit event of the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedFile) {
      uploadImage(selectedFile)
    }
    setSelectedFile(null)
  }

  return (
    <div className='mb-10'>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn btn-primary">Upload image</label>
      {/* The modal */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-12">
          <h3 className='sm:text-2xl text-xl font-bold sm:mb-4 mb-2'>Upload your image here</h3>
          <div className='mt-2 flex flex-col gap-2 sm:my-4 my-2'>
            {error &&
              <div className="alert alert-error flex flex-row text-left">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! {error.message}</span>
              </div>
            }
            {successMessage &&
              <div className="alert alert-success flex flex-row text-left">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{successMessage}</span>
              </div>
            }
          </div>
          <form className='flex md:flex-row flex-col items-start sm:gap-4 gap-2' onSubmit={handleSubmit}>
            <div>
              <input type="file" className="file-input file-input-bordered w-full" onChange={handleFileChange}/>
              <label className="label label-text" htmlFor="file">Choose a file, only PNG, JPEG, JPG allowed. <br/> Max 2MB filesize</label>
            </div>
            <button className={`btn btn-primary`} disabled={!selectedFile}>
              <span className={`${progress ? 'loading inline' : 'hidden'}`}></span>
              Upload
            </button>
          </form>
          <div className="modal-action m-0">
            <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadForm