import React from "react";
import {motion} from "framer-motion";


const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
    children: string;
    href: string;
    className?: string;
}

export const FlipLink = ({children, href, className}: FlipLinkProps) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className={`position-relative d-block overflow-hidden lh-1 flex-nowrap ${className}`}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="d-inline-block "
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className={"position-absolute inset-0"}>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className={"d-inline-block"}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};