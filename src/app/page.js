import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Slideshow from '../../components/Slideshow'
import Cottagegrid from '../../components/Cottagegrid'
import Footer from '../../components/Footer'
import 'src/app/globals.css'
import Image from 'next/image'

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
<div className="midwrap">
  <div className='headliners'>
<h3 className='breakfast'>Enjoy your breakfast</h3> <h3 className='bythebay'>by the bay</h3>
<p>Beachside views from our beautiful cabins</p>
<button className='bookinvert'> Reserve your stay</button>

</div>


<Image 
  src="/baypic.jpg"
  className='baypic'
  width={500}
  height={350}
/>

</div>

<div className='mid'>
<div className="custom-shape-divider-top-1686970544">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
   <h1>Located just minutes outside of downtown Escanaba</h1>
 
      
     <Slideshow images={images} imageSize={1000}  style={{objectFit: "cover"}} autoplayDelay={3000}/>
     <div className="custom-shape-divider-bottom-1686971308">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
</div>
<div className="midwrap midtwo">

<Image 
className='baypic'
src="/bay2pic.jpg"
width={500}
height={350}
/>
<div className='headliners'>

    <h2 className='breakfast'>Perfect private beach resort for a  </h2>< h3 className='bythebay'>relaxing getaway</h3>
     <h3 className='lifeguard'>No lifeguard on duty, swim at your own risk</h3>
     <button className='bookinvert'> Reserve your stay</button>
     </div>
     </div>
<Cottagegrid/>

<Footer/>
    </div>

  )
}
