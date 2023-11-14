import { useState } from "react";

const Background = ({color}) => {
    const [style, setStyle] = useState(() => `bg-${color} absolute left-0 top-0 w-full h-full object-cover z-[-50]`);

    return (
        <>
            <div className={style} />
        </>
    );
};

export default Background;
