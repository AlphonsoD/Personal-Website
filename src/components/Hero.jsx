import React from 'react';

import selfPicture from '../images/website_selfie_500.png';

const Hero = () => {
    return (
        <section className='hero is-white has-text-centered'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column'>
                            <h1 className='title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>Hi, I'm Alphonso!</h1> 
                            <h2 className='subtitle is-size-4-desktop'>3rd Year Computer Engineering Student at the University of Alberta</h2>
                            <img className='avatar' src={selfPicture}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
