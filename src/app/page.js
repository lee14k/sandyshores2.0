import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Slideshow from '../../components/Slideshow'
import Cottagegrid from '../../components/Cottagegrid'
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
   
   <h1>Located just minutes outside of downtown Escanaba</h1>
      
     <Slideshow images={images}  style={{objectFit: "cover"}} autoplayDelay={2500}/>

     <h2>Perfect private beach resort for a relaxing getaway</h2>
     <h3>No lifeguard on duty, swim at your own risk</h3>
<Cottagegrid/>
    </div>
  )
}
