import React from 'react'
import ExamsImg from '../src/images/exams.svg'
import Common from "./Common"
function Exams() {
    return (
        <>
            <Common name="Your Exams are Scheduled"
                visit="/login"
                btn="GoToHomepage"
                imgsrc={ExamsImg} />
        </>
    );
}

export default Exams
