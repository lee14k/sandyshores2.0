'use client'
import CottagePage from '../../../components/Cottagepage'
import Gallery from '../../../components/Gallery'
import CottageBanner from '../../../components/Cottagebanner'
import Navbar from '../../../components/Navbar'

const images = [
    {src:'/the-lodge-1.jpg'},
    {src:'/the-lodge-2.jpg'},
    {src:'/the-lodge-3.jpg'},
    {src:'/the-lodge-4.jpg'},
    {src:'/the-lodge-5.jpg'},
    {src:'/the-lodge-6.jpg'}


]

function theLodge () {
return (
    <div>
        <Navbar/>
              <CottageBanner imageSrc="/lodgeexternal.jpg" />

        <CottagePage cottageName="The Lodge" />
        <Gallery images={images}/>
    </div>
)
}

export default theLodge