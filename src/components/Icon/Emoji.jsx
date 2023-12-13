import FontAwesome from "@/components/Icon/FontAwesome";
import React, { useState, useEffect } from "react";

const Emoji = ({ option, answer, setAnswer }) => {
    const [color, setColor] = useState("#fbbf24");
    const [size, setSize] = useState();

    useEffect(() => {
        if (answer[0] === option) {
            setColor("#78350f");
            setSize("3x");
            
        } else {
            setColor("#fbbf24");
            setSize();
        }
    }, [answer]);

    return (
        <>
            <label htmlFor={option}>
                <FontAwesome icon={option} color={color} size={size}></FontAwesome>
            </label>
            <input
                className="hidden"
                type="radio"
                name="value"
                id={option}
                onChange={(e) => {
                    setAnswer([e.target.id]);
                }}
            />
        </>
    );
};

export default Emoji;
