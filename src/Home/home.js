import React from "react";
import Profile from "../Image/profile.png";

function Main() {
  return (
    <>
      {/* Section Hero Start */}

      <section id="hero" className="pt-36 mb-16">
        <div class="container">
          <div className="flex-warp lg:flex">
            <div className="w-full self-center px-4">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Halo Semua👋, saya
                <span className="text-dark block font-bold text-4xl lg:text-5xl mb-1">
                  Regan Edric Onggatta
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                Junior Web Developer
              </h2>
              <p className="font-medium text-dark mb-10 leading-relaxed">
                Jika kamu ingin membuat, mengubah, mendesign, segala jenis
                website, kamu bisa menghubungi saya.
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src={Profile} className="max-w-full mx-auto" />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0e7490"
                      d="M71.3,-22.9C80.5,4.9,67.6,40.2,43,57.8C18.3,75.4,-18.2,75.3,-42.2,57.9C-66.2,40.5,-77.7,5.8,-68.6,-22C-59.4,-49.8,-29.7,-70.6,0.7,-70.8C31.1,-71.1,62.2,-50.7,71.3,-22.9Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Hero End */}
    </>
  );
}

export default Main;
