import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Slideshow from '../../components/Slideshow'
import Cottagegrid from '../../components/Cottagegrid'
import Footer from '../../components/Footer'
import 'src/app/globals.css'

export default function Home() {
        const images = [
          'slide1.jpg',
          'slide3.jpg',
          'slide4.jpg',
          'slide5.jpg'
        ]
  
  return (
    <div>
      <Navbar/>

<Header/>
<div className='mid'>
   <h1>Located just minutes outside of downtown Escanaba</h1>
 
      
     <Slideshow images={images} imageSize={1000}  style={{objectFit: "cover"}} autoplayDelay={3000}/>

     <h2>Perfect private beach resort for a relaxing getaway</h2>
     <h3>No lifeguard on duty, swim at your own risk</h3>
     </div>
<Cottagegrid/>
<Footer/>
    </div>
  )
}
