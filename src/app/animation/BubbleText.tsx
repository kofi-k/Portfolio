import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
    return (
        <div className="grid h-screen place-content-center bg-black">
            <BubbleText/>
        </div>
    );
};

const BubbleText = () => {
    return (
        <h2 className="text-center text-5xl font-thin text-indigo-300">
            {"Bubbbbbbbble text".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
          {child}
        </span>
            ))}
        </h2>
    );
};

export default Example;


// .hoverText {
//     transition:
//         0.35s font-weight,
//         0.35s color;
// }
//
// .hoverText:hover {
//     font-weight: 900;
//     color: rgb(238, 242, 255);
// }
//
// /* To the right */
// .hoverText:hover + .hoverText {
//     font-weight: 500;
//     color: rgb(199, 210, 254);
// }
//
// .hoverText:hover + .hoverText + .hoverText {
//     font-weight: 300;
// }
//
// /* To the left */
// .hoverText:has(+ .hoverText:hover) {
//     font-weight: 500;
//     color: rgb(199, 210, 254);
// }
//
// .hoverText:has(+ .hoverText + .hoverText:hover) {
//     font-weight: 300;
// }