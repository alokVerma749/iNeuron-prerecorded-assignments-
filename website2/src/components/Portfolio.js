import React from "react";

import Card from "./Card";

function Portfolio() {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Items--> */}
                    <Card imgName="cabin" />
                    <Card imgName="cake" />
                    <Card imgName="circus" />
                    <Card imgName="game" />
                    <Card imgName="safe" />
                    <Card imgName="submarine" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;