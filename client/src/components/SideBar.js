import React from 'react'
import { Link as Scroll } from 'react-scroll';


function StickySideBar() {

    const linkStyle ={
        top:0,
        fontSize: '1rem',
        position: 'fixed',
        zIndex: '1',
        marginBottom : '0.3rem',
        cursor : 'pointer',
    }

    return (

        <div style={{...linkStyle, backgroundColor : '#000'}}>
            <Scroll
                to="globe"
                smooth={true}
                duration={600}
                style = {{color: 'yellow'}}
            >
                Globe
            </Scroll>
    
            <p style = {{fontSize : '0.3rem'}}></p>
    
            <Scroll
                to="graph"
                smooth={true}
                duration={600}
                style = {{color: 'yellow'}}
            >
                Graph
            </Scroll>
 
            <p style = {{fontSize : '0.3rem'}} ></p>

            <Scroll
                to="aboutUs"
                smooth={true}
                duration={600}
                style = {{color: 'yellow'}}
            >
               About Us
            </Scroll>
        </div>
    )
}

export default StickySideBar


