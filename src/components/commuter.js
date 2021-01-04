import React from 'react';
import {commuter} from "../assets";

const Commuter = () => {
    return (
        <section className="commuter-section">
            <article data-aos="fade-up" data-aos-duration="1300">
                <h2>
                    Email and calendar, together in one place
                </h2>
                <p>
                    Stay on top of your most important messages and events.
                </p>
            </article>
            <img src={commuter} alt="commuter"/>
        </section>
    )
}

export {Commuter}
