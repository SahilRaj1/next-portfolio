"use client";

import React, { useState, useEffect } from "react";
import Terminal from "./Terminal";
import Image from "next/image";

const About = () => {
    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBool1(true);
        }, 1000);
        setTimeout(() => {
            setBool2(true);
        }, 2000);
        setTimeout(() => {
            setBool3(true);
        }, 3500);
        setTimeout(() => {
            setBool4(true);
        }, 5000);
    }, []);

    return (
        <div className="h-full flex flex-col-reverse justify-around lg:flex-row pb-28">
            <div className="w-fit my-2 m-auto lg:pl-28 lg:h-full lg:w-full flex h-full">
                <div className="w-fit m-auto">
                {bool1 && (
                    <p className="heading-sm md:heading my-2">
                        <Terminal terminalText="Hi," />
                    </p>
                )}
                {bool2 && (
                    <p className="heading-sm md:heading my-2">
                        <Terminal terminalText="My name is" />
                    </p>
                )}
                {bool3 && (
                    <p className="heading-sm md:heading text-blue-500 my-2">
                        <Terminal terminalText="Sahil Raj" />
                    </p>
                )}
                {bool4 && (
                    <p className="heading-sm md:heading my-2">
                        <Terminal terminalText="I am a Developer." />
                    </p>
                )}
                </div>
            </div>
            <div className=" w-fit m-auto flex lg:h-full lg:w-full">
                <div className="w-fit lg:pr-28 m-auto">
                    <div className=" rounded-full border-blue-500 border-8">
                        <Image
                            src="/sahil.png"
                            width={350}
                            height={350}
                            alt="Picture of the author"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
