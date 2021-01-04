import React from 'react'
import "animate.css";
// import "aos";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const LandingPage = () => {
    return (
        
            <section class="intro-section"> 
                <h1>Outlook</h1>
                <article class="intro-content">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Connect. Organize.</h2>
                    <h2 data-aos="fade-up" data-aos-duration="1600">Get things done.</h2>
                    <hr/>
                    <div>
                        <span data-aos="fade-up" data-aos-duration="1000">Free Outlook email and calender</span>
                        <button>Create free account</button>
                    </div>
                </article>
            </section>    
        
    )
}

export {LandingPage}
