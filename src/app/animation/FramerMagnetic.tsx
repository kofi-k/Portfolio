import {MouseEvent, ReactNode, useRef, useState} from 'react';
import {motion} from 'framer-motion';

interface FramerProps {
    children: ReactNode;
    className: string;
}

export default function FramerMagnetic({children, className}: FramerProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const {clientX, clientY} = e;
            const {height, width, left, top} = ref.current.getBoundingClientRect();
            setPosition({
                x: clientX - (left + width / 2),
                y: clientY - (top + height / 2),
            });
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => setPosition({x: 0, y: 0})}
            animate={position}
            transition={{type: 'spring', stiffness: 260, damping: 5, mass: 0.1}}
            className={className}
        >
            {children}
        </motion.div>
    );
}