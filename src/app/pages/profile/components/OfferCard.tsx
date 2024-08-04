import React, {useRef} from "react";
import {motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;


type OfferCardProps = {
    title: string;
    description: string;
}
export const OfferCard = ({title, description}: OfferCardProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={'card card-custom card-stretch border shadow bg-light '}>
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className={'card-body'}>
                <h3 className={'card-title fw-bolder fs-2 text-start'}>{title}<span
                    className={'text-primary fs-1'}>.</span></h3>
                <div className={'my-20'}/>
                <div
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className={'align-items-baseline align-bottom align-text-bottom '}>
                    <p className={'text-start '}>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};