import React from 'react'
import {useEffect,useRef} from "react";

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate=2;
    },[])
    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="MacBook Title"/>
            </div>
            <video src="/videos/hero.mp4" autoPlay muted playsInline />
            <button>Buy</button>
            <p>From Rs80000 or Rs7000/mo for 12 months</p>

        </section>
    )
}
export default Hero
