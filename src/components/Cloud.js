import React, { useRef, useState } from "react";

export default function Cloud(props) {
    let display=""
    let message=""
    let messageSec=0
    if(props.sayFlag===true){
    message=props.lookMessage
    messageSec=props.fadeMessageSec
    }
    else if(props.thinlFlag==true){
        message=props.lookThinkMessage+"?"
    messageSec=props.fadeThinkMessageSec+"?"
    }
    if(props.displayCloud===true){
        console.log("in hide block")
        document.getElementById('cloudMessage').style.display="block"
display="block"
    }
    else{
        display="none"
    }
    const cloudStyling={
        marginTop:"-300px",
        display:display,
        marginLeft:"-60px"
        
    
    }
    
        if(props.sayFlag===true){
            if(props.fadeMessageSec!==0){
            message=props.fadeMessage
            setTimeout(() => {
                const box = document.getElementById('cloudMessage');
              
                // 👇️ removes element from DOM
                box.style.display = 'none';
             
                
              
                // 👇️ hides element (still takes up space on page)
                // box.style.visibility = 'hidden';
              }, props.fadeMessageSec*1000);
            }
            }
            else if(props.thinlFlag==true){
                if(props.fadeThinkMessageSec!==0){
                message=props.fadeThinkMessage+"?"
                setTimeout(() => {
                    const box = document.getElementById('cloudMessage');
                  
                    // 👇️ removes element from DOM
                    box.style.display = 'none';
                 
                    
                  
                    // 👇️ hides element (still takes up space on page)
                    // box.style.visibility = 'hidden';
                  }, props.fadeThinkMessageSec*1000);
            }
        
       
  
       // 👈️ time in milliseconds
       
        }
    console.log(props.fadeMessageSec)

   
  return (
  
<svg  style={cloudStyling} width="120pt" height="752pt" id="cloudMessage" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <clipPath id="a">
   <path d="m139.21 168h473.58v416h-473.58z"/>
  </clipPath>
 </defs>
 <g clip-path="url(#a)">
  <path d="m612.79 322.86c0-86.297-75.773-154.18-167.33-154.18h-138.92c-91.559 0-167.33 67.879-167.33 154.18v0.52734c0 67.355 46.305 123.66 110.5 144.71l-68.406 115.24 152.6-106.29h112.08c91.031-0.003906 166.8-67.883 166.8-154.18zm-167.33 133.13h-118.39l-86.824 65.25 42.098-65.773c-70.512-17.367-122.08-64.199-122.08-132.61 0-72.617 64.723-133.13 146.29-133.13h138.92c81.559 0 146.28 60.512 146.28 133.13 0 72.617-64.723 133.13-146.28 133.13z" fill="#676767"/>
 </g>


<text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana"  fill="black" font-size="75">{message}</text></svg>

  );
}



