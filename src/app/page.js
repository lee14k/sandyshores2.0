import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Slideshow from '../../components/Slideshow'
export default function Home() {
        const images = [
          'slide1.jpg',
          'slide2.jpg'
        ]
  
  return (
    <div>
      <Navbar/>

<Header/>
   
   <h1>Located just minutes outside of downtown Escanaba</h1>
      
     <Slideshow images={images} imageSize='500px'/>

     <h2>Perfect private beach resort for a relaxing getaway</h2>
    </div>
  )
}
