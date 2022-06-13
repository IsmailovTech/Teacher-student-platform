import React from 'react'
import '../styles/section.css';

const section = () => {
    return (
        <section>
            <div className="sectionContainer">
                <div className="sectionContent">
                          <h1>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem dolores animi dolor in suscipit adipisci molestiae perferendis eligendi,
                        neque beatae nesciunt esse sequi delectus temporibus quos iste voluptates?
                        Quibusdam, sunt commodi excepturi maiores exercitationem debitis nam?
                        Veniam commodi beatae quaerat fugiat,
                        excepturi aliquam necessitatibus dicta voluptatibus quod placeat cum pariatur.
                    </p>
                </div>
                <div className="serviceTitle">Our Services</div>
                <div className="serviceContent">
                        <img src="./images/mastery-based-education.png" alt="img" />
                        <div className="desc">
                            <h1>Digital Learning</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum numquam, eveniet voluptate voluptates, eum molestiae debitis sit, inventore excepturi minus. Architecto neque a quis, incidunt alias, repudiandae ipsa hic ut harum provident ex repellendus sed? Ipsum culpa facilis dolor pariatur, odit iure. At aspernatur cumque itaque excepturi rerum!</p>
                        </div>
                </div>
        </div>
        </section> 
  )
}

export default section;