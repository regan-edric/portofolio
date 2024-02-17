import React from "react";
import Main from "../Home/home";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Second from "../First/second";

export default function Homepage() {
    return (
        <>
            <Second />
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}