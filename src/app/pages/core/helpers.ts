import {useRef, useState} from 'react';

export const useMousePosition = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top});
    };

    return {divRef, position, handleMouseMove};
};