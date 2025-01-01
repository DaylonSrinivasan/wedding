"use client";

import React from "react";

const Header = () => {
    return (
        <main className="relative w-full">
            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-4 bg-gray-800 text-center">
                <p className="text-sm font-sans text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Made with <span className="text-red-500">&lt;3</span>. See the code on{" "}
                    <a 
                        href="https://github.com/daylonsrinivasan/wedding" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        GitHub
                    </a>
                    !
                </p>
            </footer>
        </main>
    );
};

export default Header;
