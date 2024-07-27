import React from "react";
import {useMousePosition} from "../../core/helpers.ts";

export type StatsWidgetProps = {
    className: string;
    title: string;
    value: string,
    color: string,
}

export const StatsWidget = ({className, title, value, color}: StatsWidgetProps) => {
    const {divRef, position, handleMouseMove} = useMousePosition();
    return (
        <>
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                style={{
                    background: `radial-gradient(50vw circle at ${position.x}px ${position.y}px, #F5F7FA09, transparent 50%)`,
                }}
                className={`card  ${className} bg-${color} hover-rotate-end`}>
                <div
                    className='d-flex flex-column justify-content-center align-content-center align-items-center my-10 '>
                    <span className={'display-3 fw-bolder'}>
                        {value}
                    </span>
                    <span className='fs-5 text-center'>
                        {title}
                    </span>
                </div>
            </div>
        </>
    );
};

