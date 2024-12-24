import React from 'react'
import "./Card.css"
import image1 from "../../assets/realme 1.webp"
import image2 from "../../assets/realme 2.webp"
import image3 from "../../assets/realme 3.webp"
import image4 from "../../assets/realme 4.webp"
import image5 from "../../assets/reame 5.webp"
import image6 from "../../assets/realme 6.webp"
import airpd from "../../assets/airpods 1.webp"
import airpd2 from "../../assets/airpods 2.webp"

const Card = () => {
    return (
        <>
            <h1 style={{ padding: "30px" }}>SmartPhones</h1>

{/* First Card */}
                <div className="CardSection">
                    <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme C75</h2>
                        <span>
                            Dhulai Horahi He</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs49,000</span></p>
                    </div>

                    <div className="imge">
                        <img src={image1} alt="" />
                    </div>
                </div>

{/* Second Card */}
                <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme 13 + 5G</h2>
                        <span>
                           Speed to Victory</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs89,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={image2} alt="" />
                    </div>
                </div>

{/* Third Card */}
                <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme GT 6</h2>
                        <span>
                            Power Meets Al</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs149,000</span></p>
                    </div>

                    <div className="imge">
                        <img src={image3} alt="" />
                    </div>
                </div>

{/* Four Card */}
                <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme Note 60</h2>
                        <span>
                            Champion Quality</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs26,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={image4} alt="" />
                    </div>
                </div>

{/* Five Card */}
            <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme 12</h2>
                        <span>
                            Power in Every Shot</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs59,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={image5} alt="" />
                    </div>
                </div>
{/* Six Card */}
                <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme 12 + 5G</h2>
                        <span>
                            Power in Every Shot</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs74,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={image6} alt="" />
                    </div>
                </div>

            </div>
            
            <div className="Accessories">
                <h1>Accessories</h1>
                <div>
                    <p className="Audio">Audio</p>
                    <p>SmartPhones</p>
                </div>
            </div>

          <div className="CardSection">
{/* AirPods 01 */}
            <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme Buds T110</h2>
                        <span>
                            Listen in Full Color</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs4,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={airpd} alt="" />
                    </div>
                </div>

                {/* AirPods 02 */}
            <div className="cards">
                    <div className="description">

                        <button style={{ marginBottom: "10px" }} className='descBtn'>New</button>
                        <h2 style={{ marginBottom: "10px" }}>realme Buds Q</h2>
                        <span>
                           Music Never Ends</span>
                        <p style={{ marginTop: "100px", color: "gray" }}>From
                            <span style={{ fontWeight: "bold", color: "black" }}> Rs7,999</span></p>
                    </div>

                    <div className="imge">
                        <img src={airpd2} alt="" />
                    </div>
                </div>
          </div>

        </>
    )
}

export default Card