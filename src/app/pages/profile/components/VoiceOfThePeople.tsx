import {KTIcon, toAbsoluteUrl} from "../../../../_metronic/helpers";

type Props = {
    nameOfClient: string;
    clientPosition: string;
    clientReview: string;
    rating: number;
    color?: string;
}
export const VoiceOfThePeople = () => {
    return (
        <>
            <div className={'d-flex flex-column mt-10'}>
                <h2 className={'display-3 fw-bold mb-5 text-center'}>Voice Of The People</h2>
                <span className={'text-center fs-3 '}>What my clients say about my work</span>
            </div>
            <div className={'row g-5 g-xl-8 mt-7 align-items-center h-100'}>
                <div className={'col-lg-6 col-md-6 col-sm-12'}>
                    <img
                        className='rounded-bottom-pill  rounded-top-circle h-100 bgi-no-repeat bgi-position-center bgi-size-cover bgi'
                        src={toAbsoluteUrl('media/img-1.jpg')}
                        alt='img'
                    />
                </div>
                <div className={'col-lg-6 col-md-6 col-sm-12 g-5 '}>
                    {
                        reviews.map((item, index) => (
                            <div className={'mb-5  '}>
                                <ReviewCard nameOfClient={item.nameOfClient} clientPosition={item.clientPosition}
                                            clientReview={item.clientReview}
                                    // color={item.color}
                                            rating={item.rating}/>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    );
};

// review card component
export const ReviewCard = (props: Props) => {
    return (
        <div
            className={`card card-custom card-stretch rounded-4 bg-light-${props.color} `}>
            <div className={'card-body'}>
                <p className={`text-start fs-5 fw-light tex text-gray-800`}>{`"${props.clientReview}"`}</p>
                <div className={'d-flex flex-row justify-content-between align-items-baseline'}>
                    <div className={'d-flex flex-column'}>
                        <h4 className={`fw-bolder fs-2 text-start mt-5 text-${props.color}`}>{props.nameOfClient}</h4>
                        <span
                            className={`text-start fs-7 text-uppercase text-${props.color}`}>{props.clientPosition}</span>
                    </div>

                    <div className={'row g-5'}>
                        {[...Array(5)].map((_, index) => (
                            <div className={'col-1'}>
                                <KTIcon
                                    key={index}
                                    iconName={'star'}
                                    className={index < props.rating ? `text-warning` : 'text-secondary'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export const reviews: Props[] = [
    {
        nameOfClient: 'John Doe',
        clientPosition: 'CEO, Doe Inc.',
        clientReview: 'Kofi is a great developer. He is very skilled and has a lot of experience in developing web and mobile applications. I highly recommend him for your development needs.',
        rating: 5,
        color: 'primary'
    },
    {
        nameOfClient: 'Jane Doe',
        clientPosition: 'CTO, Doe Inc.',
        clientReview: 'Kofi is a great designer. He has a lot of experience in designing user interfaces and user experiences for web and mobile applications. I highly recommend him for your design needs.',
        rating: 4,
        color: 'success'
    },
    {
        nameOfClient: 'Michael Doe',
        clientPosition: 'COO, Doe Inc.',
        clientReview: 'Kofi is a great chess player. He has a lot of experience in playing chess and has won many tournaments. I highly recommend him for your chess needs.',
        rating: 3,
        color: 'info'
    },
]
