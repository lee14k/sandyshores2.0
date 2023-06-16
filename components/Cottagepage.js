import React from 'react'

const Cottage = (props)=> {
    const {cottageName, rate, blurb, guests, bedrooms, beds} = props

    return (
        <div>
            <h2>{cottageName}</h2>
            <iframe width="100%" height="425" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=A0508F4E69CB67B5%21295&amp;authkey=%21AGP_zRjV-CBkBKA&amp;em=2&amp;wdAllowInteractivity=False&amp;ActiveCell='Sheet1'!A2&amp;wdHideGridlines=True&amp;wdHideHeaders=True&amp;wdDownloadButton=True&amp;wdInConfigurator=True&amp;wdInConfigurator=True&amp;edesNext=true&amp;resen=false&amp;ed1JS=false"></iframe>
        </div>
    )

    
}