import React from 'react';
import aboutImg from '../assets/images/about-image.jpg'

const About = () => {

    return (
        <section className="section about">
            <div className="container">
                <h3 className="section-title">
                    About Us
                </h3>
                <div className="about-wrapper">
                    <div className="about-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus iure aliquid officia assumenda nihil exercitationem pariatur saepe laborum neque corporis aut explicabo accusantium est tempore necessitatibus, consectetur consequuntur sed et dolorum atque nobis nam. Itaque enim, odit adipisci magni, at tenetur rerum excepturi placeat culpa atque quisquam, exercitationem tempora et est. Consequatur architecto est quis, nisi officia libero beatae voluptas delectus provident, vitae id, optio excepturi autem consequuntur iste. Temporibus, voluptatum iste eos repellat quos autem animi ipsum porro esse saepe aliquam minima reprehenderit minus delectus quibusdam similique fugit tempora expedita alias exercitationem facere. Facere ipsum velit iusto veritatis.</p>
                    </div>
                    <div className="about-image">
                        <img src={aboutImg} alt="about" />
                    </div>
                </div>
            </div>
    </section>
    );

}

export default About;