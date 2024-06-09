// Spotlight.tsx
import React, {useEffect} from 'react';
import './../../assets/sass/style.scss'

const Spotlight = () => {
    useEffect(() => {
        const handleMouseMove = (e: { pageX: number; pageY: number; }) => {
            document.documentElement.style.setProperty('--mouse-x', e.pageX + 'px');
            document.documentElement.style.setProperty('--mouse-y', e.pageY + 'px');
        };

        const handleMouseOut = () => {
            document.documentElement.style.setProperty('--mouse-x', '-10000px');
            document.documentElement.style.setProperty('--mouse-y', '-10000px');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <div id="spotlight"></div>;
};

export default Spotlight;