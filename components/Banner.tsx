import React from "react";

const Banner = () => {
    return (
        <div className="max-w-contentContainer mx-auto py-24 flex flex-col gap-8 px-4">
            <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
                Hi, my name is
            </h3>
            <h1 className="text-6xl font-titleFont font-semibold flex flex-col">
                Noor Mohammad.
                <span className="text-textDark mt-4">I build things for the web.</span>
            </h1>
            <p className="text-base max-w-[600px] text-textDark font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo
                voluptatibus, expedita accusantium magnam assumenda! Tenetur ipsum,
                exercitationem atque fugit nostrum porro consequatur{" "}
                <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                    Aspernatur
                    <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>
                .
            </p>
            <button className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
                Check out my project!
            </button>
        </div>
    );
};

export default Banner;