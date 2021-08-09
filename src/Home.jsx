import React from 'react'
import HomeImg from "../src/images/home_svg.svg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import Common from "./Common"
function Home() {
    return (
        <>
            <Common name="You are at Home Page"
                visit="contact"
                btn="Getting Started"
                imgsrc={HomeImg}
            />
        </>
    )
}

export default Home
