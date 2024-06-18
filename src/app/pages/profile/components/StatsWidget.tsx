export type StatsWidgetProps = {
    className: string;
    title: string;
    value: string,
    color: string,
}

export const StatsWidget = ({className, title, value, color}: StatsWidgetProps) => {
    return (
        <>
            <div className={`card  ${className} bg-${color}`}>
                <div className='d-flex flex-column justify-content-center align-content-center align-items-center my-10'>
                    <span className={'display-3 fw-bolder'}>
                        {value}
                    </span>
                    <span className='fs-5'>
                        {title}
                    </span>
                </div>
            </div>
        </>
    );
};

