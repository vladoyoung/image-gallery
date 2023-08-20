import Navbar from '../components/Navbar'
import UploadForm from '../components/UploadForm'
import ImageGallery from '../components/ImageGallery'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto px-6 my-10'>
        <UploadForm/>
        <ImageGallery/>
      </div>
    </div>
  )
}

export default Home