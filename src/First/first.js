import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function First() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <section id="first" className="pt-36">
        <div className="container">
          <div className="flex-wrap lg:flex">
            <div className="w-full self-center px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary">Kenalan</h4>
                <h2 className="text-dark font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  ISI DATA DIRI
                </h2>
                <label
                  htmlFor="nameInputId"
                  className="font-medium text-md text-slate-500 md:text-lg"
                >
                  Tulis nama Anda untuk melihat website ini lebih lanjut
                </label>
                <div className="w-full px-4 justify-center flex">
                  <input
                    className="border border-slate-800 rounded p-1 mt-10 mb-10 text-center"
                    value={userName}
                    id="nameInputId"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="w-full px-4 justify-center flex">
                  <button onClick={() => navigate("/second", { state: { userName } })} type="submit" className="text-base bg-primary py-3 px-8 rounded-full font-semibold text-white w-1/2">
                      Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
