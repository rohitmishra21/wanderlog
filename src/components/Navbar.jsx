import React from 'react';
import { Logo, navItem } from '../utils/config';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';
import Button from './Button';

const linkClasses = "font-semibold mx-5";

const Navbar = () => {
    return (
        <div className="flex pt-4  md:px-52 pb-2 items-center border-b border-b-[#dee2e6]  px-8 justify-between">
            <div className="md:flex items-center">
                <img src={Logo} width={160} alt="" />
                <div className='md:block hidden'>
                    {navItem.map((item) => (
                        <Link
                            to={item.path}
                            key={item.id}
                            className={linkClasses}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className='md:block hidden'>
                    <InputBox />
                </div>
                <Link to="/login" className={linkClasses}>
                    Log in
                </Link>
                <Button text="Sign Up" />
            </div>
        </div>
    );
};

export default Navbar;

