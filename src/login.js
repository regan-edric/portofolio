import React from "react";

function Login() {
    return (
        <>
            <div className="p-2.5 my-2.5 mx-5 h-screen">
                <nav className="flex-wrap">
                    <ul className="flex justify-left items-start gap-8">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className="mt-5">
                    <p className="text-2xl">Regan Edric Onggatta</p>
                    <h1 className="text-5xl">Full Stack Web Developer</h1>
                </div>
            </div>
        </>
    );
}

export default Login