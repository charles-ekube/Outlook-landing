import React from 'react'
import { email, calender, people, task, search } from "../assets" 
const Tabs = () => {
    return (
        <section className="tabs">
            <ul className="tablets">
                <li className="tab-selector active" id="tab1" >
                    <span class="arrow"></span>
                    <img src={email} alt="email" id="email"/>
                </li>
                <li className="tab-selector" id="tab2">
                    <span class="arrow"></span>
                    <img src={calender} alt="calender" id="calender"/>
                </li>
                <li className="tab-selector" id="tab3">
                    <span class="arrow"></span>
                    <img src={people} alt="people" id="people"/>
                </li>
                <li className="tab-selector" id="tab3">
                    <span class="arrow"></span>
                    <img src={task} alt="people" id="task"/>
                </li>
                <li className="tab-selector" id="tab4">
                    <span class="arrow"></span>
                    <img src={search} alt="search" id="search"/>
                </li>
            </ul>
            <div id="tab1">
             
             <span class="arrow2"></span>
             <span class="arrow3"></span>
             <span class="arrow4"></span>
         </div>

        </section>
    )
}

export {Tabs}
