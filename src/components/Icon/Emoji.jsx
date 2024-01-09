import FontAwesome from "@/components/Icon/FontAwesome";
import React, { useState, useEffect } from "react";

const Emoji = ({ option, answer, setAnswer }) => {
    const [color, setColor] = useState("#FAC0B1");
    const [size, setSize] = useState();
    const [bounce, setBounce] = useState(false);
    useEffect(() => {
        if (answer[0] === option) {
            setColor("#7C3647");
            setSize("3x");
            setBounce(true);
        } else {
            setColor("#FAC0B1");
            setSize();
            setBounce(false);
        }
    }, [answer]);

    return (
        <>
            <label htmlFor={option}>
                <FontAwesome icon={option} color={color} size={size} bounce={bounce}></FontAwesome>
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
