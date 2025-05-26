import React from 'react';

const Hero : React.FC = () => {
    return (
        <section className="container position-relative mx-auto flex flex-col items-center justify-center h-screen text-center">
           <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="/assets/hero.mp4"
                type="video/mp4" 
            />  
        </section>
    )
}