import React, { useEffect, useState } from 'react'
import "../Assets/Style/gridviewbrand.css"
import {motion} from "framer-motion"
import Card1 from "../Assets/Images/card1.jpg"
import Card2 from "../Assets/Images/card2.jpg"
import Card3 from "../Assets/Images/card3.jpg"

const franchises = [
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card3 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card3 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card1 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card3 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card1 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card3 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
    { name: "DAMS", investmentRange: "₹5lac - 10lac", imageUrl: Card2 },
];

function GridViewBrand() {
    const [showGrid, setShowGrid] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGrid(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <h1>Featured Franchise Companies</h1>
        {!showGrid ? (
                <div className="spinner">
                    <div className="outer">
                        <div className="inner tl"></div>
                        <div className="inner tr"></div>
                        <div className="inner br"></div>
                        <div className="inner bl"></div>
                    </div>
                </div>
            ) : (
                <motion.div
                className="card"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                <p><span>HOVER ME</span></p>
                </motion.div>
            )}
            
            <div className={`multi-grid ${showGrid ? "show" : ""}`}>
                    {franchises.map((franchise, index) => (
                        <div key={index} className="grid-item">
                            <img src={franchise.imageUrl} alt={franchise.name} className="franchise-image" />
                            <div className="franchise-name">{franchise.name}</div>
                            <div className="investment-range">Investment Range - {franchise.investmentRange}</div>
                            <hr />
                            <button className='visit-btn'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Visit</span>
                            </button>
                        </div>
                    ))}
                </div>
            
        </>
    )
}

export default GridViewBrand