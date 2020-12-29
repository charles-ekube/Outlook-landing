import React from 'react';
import "./style.css";

const Nav = () => {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector(".opening-nav").className = "me";
        } else {
          document.querySelector(".opening-nav").className = "us";
        }
      };
    return (
        <>
         <nav class="opening-nav">
             <aside class="opening-nav-logo">
                 <div class="microsoft-cube">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                 </div>
                 <a href="https://www.microsoft.com/">Microsoft</a>
             </aside>
             <ul class="main-nav">
                 <li>
                    <button class="prem-btn">Try premium</button>
                 </li>
                 <li>
                    <button class="signin-btn">Sign in</button>
                 </li>
             </ul>
         </nav>
         <nav class="overlay-nav">
             <div class="overlay-nav-content">
                <a href="#" class="logo">
                    <img src="images/outlook-icon.jpg" alt="outlook-icon"/>
                </a>
                <ul>
                    <li>
                       <button class="prem-btn2">Try premium</button>
                    </li>
                    <li>
                       <button class="signin-btn2">Sign in</button>
                    </li>
                    <li>
                       <button class="create-btn1">Create free account</button>
                    </li>
                </ul>
             </div>
        </nav>
     </>
    )
}

export {Nav}
