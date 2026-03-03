import React from 'react';
import { Link } from 'react-router';
import logo from "../../src/assets/logo.webp"

const Logo = () => {
    return (
        <div>
            <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl">
                    <img className='w-15 h-10' src={logo} alt="logo" />
                </span>
                <span className="font-bold text-xl text-primary">
                    MarketPulse
                </span>
            </Link>
        </div>
    );
};

export default Logo;