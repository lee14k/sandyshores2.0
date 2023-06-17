import Image from "next/image"
import './Footer.css'
export default function Footer () { 
    return (
        
        <div className="footer">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.44466473503!2d-87.1299088589774!3d45.682047679607116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4dbc92164bf231%3A0x499a15e91a293fa0!2sSandy%20Shores%20Cottages!5e0!3m2!1sen!2sus!4v1673276314657!5m2!1sen!2sus" id="googlemaps" loading="lazy"></iframe>

            <div className="innerwrapper">
            <div className="contact">
            <h4>Contact us</h4>
           
                <Image 
                src="/smartphone.png"
                width={50}
                height={50}
                />
                <span>(906)-786-3625</span>
                </div>
                <div className="contact">
            <h4>Follow us</h4>
        
         

            <Image 
                src="/airbnb.png"
                width={60}
                height={50}
            />
           
            <Image 
                src="/flogo.png"
                width={50}
                height={50}
            />
            
            <Image 
                src="/instagramlogo.png"
                width={50}
                height={50}
            />
            </div>
            </div>
            </div>

    )
}