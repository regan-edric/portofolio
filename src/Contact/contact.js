import React from "react";

function Contact() {
    return (
        <>
            <section id="contact" className="pt-36 pb-32">
                <div class="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary">Contact</h4>
                            <h2 className="text-dark font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
                            <p className="font-medium text-md text-slate-500 md:text-lg">Daftar dan hubungi Kami dengan forum di bawah ini untuk mendapatkan pelayanan terbaik Kami.</p>
                        </div>
                    </div>
                    <form>
                        <div className="w-full lg:w-2/3 lg:mx-auto">
                            <div className="w-full px-4 mb-8">
                                <label for="name" className="text-base font-bold text-dark">Nama</label>
                                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus-within:ring-primary focus:ring-1 focus:border-primary"></input>
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label for="email" className="text-base font-bold text-dark">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus-within:ring-primary focus:ring-1 focus:border-primary"></input>
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label for="phone" className="text-base font-bold text-dark">No. Telp</label>
                                <input type="phone" id="phone" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus-within:ring-primary focus:ring-1 focus:border-primary"></input>
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label for="message" className="text-base font-bold text-dark">Pesan</label>
                                <textarea type="text" id="message" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus-within:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                            </div>
                            <div className="w-full px-4 justify-center flex">
                                <button className="text-base bg-primary py-3 px-8 rounded-full font-semibold text-white w-1/2">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;