import React from "react";

export interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className = "" }) => {
    return (
        <button className={className}>
            <p>Button</p>
        </button>
    );
};

export default Button;
