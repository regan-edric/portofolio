import React from "react";
import "../First/second.css";
import Main from "../Home/home";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import { useLocation } from "react-router-dom";

export default function Second(props) {
  const location = useLocation();
  const userName = location.state?.userName || "Pengunjung";

  console.log(userName);

  return (
    <>
      <section
        id="second"
        className="pt-36 w-full max-w-full mx-auto flex-wrap lg:flex"
      >
        <h1 className="text-welcome font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl text-black">
          Halo {userName}, Selamat Datang di sini
        </h1>
      </section>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
