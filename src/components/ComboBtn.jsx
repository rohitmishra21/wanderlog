import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const ComboBtn = () => {
    return (
        <div className="flex justify-center items-center">
            <Button text="Start planning" />
            <Link
                to="/get-app"
                className="flex items-center font-semibold ml-5 hover:text-blue-800 transition-all duration-300"
            >
                Get the app
                <FaArrowRight className="ml-2" />
            </Link>
        </div>
    )
}

export default ComboBtn
