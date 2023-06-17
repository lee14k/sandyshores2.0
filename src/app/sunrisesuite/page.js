'use client'
import CottagePage from '../../../components/Cottagepage'
import Gallery from '../../../components/Gallery'
import CottageBanner from '../../../components/Cottagebanner'

const images = [
    {src:'/the-lodge-1.jpg'},
    {src:'/the-lodge-2.jpg'},
    {src:'/the-lodge-3.jpg'},
    {src:'/the-lodge-4.jpg'},
    {src:'/the-lodge-5.jpg'},
    {src:'/the-lodge-6.jpg'}


]
function sunriseSuite () {
return (
    <div>
         <CottageBanner imageSrc="/sunrisexterior.jpg" />
        <CottagePage cottageName="Sunrise Suite" />
        <Gallery/>
    </div>
)
}

export default sunriseSuite