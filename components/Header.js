import './Header.css';
import Link from 'next/link'

export default function header () {
    return (
        <div className='imagecontainer'>
                    <h1 className='sandy'>Sandy Shores Cottages</h1>
                    <h2 className='location'>Escanaba, MI</h2>
                    <Link href='/reserveyourstay'>
                    <button className='booking'> Book now!</button>
                    </Link>

            </div>
    )
}