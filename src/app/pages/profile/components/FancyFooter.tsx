export const FancyFooter = () => {
    return (
        <>
            <div className={'separator separator-solid separator-backlight-bottom backlight-red my-20 '}/>
            <div className={'row g-5 g-xl-8 '}>
                <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                    <h3 className='fs-2hx fw-bolder'>kofi k.</h3>

                    <div className='mt-10 fs-6 fw-light me-20 '>
                        A skilled android and a full-stack software developer, UI designer and
                        chess lover from Accra, Ghana.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                        cursus ante dapibus diam. Sed nisi.
                    </div>

                    <div className={'d-flex flex-column mt-10'}>
                        <span className={'text-uppercase fw-bolder'}>Follow me</span>
                        {/*    todo socials*/}

                    </div>

                </div>

                <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                    <div className={'d-flex flex-row justify-content-between gap-5'}>
                        {
                            footerItems.map((item, index) => (
                                <FooterItems title={item.title} items={item.items}/>
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className={'separator separator-solid separator-backlight-bottom backlight-red my-20 '}/>

        </>
    );
};

type FooterItemsProps = {
    title: string;
    items: string[];
}

export const footerItems: FooterItemsProps[] = [
    {
        title: 'Services',
        items: ['Web Development', 'Mobile Development', 'UI/UX Design']
    },
    {
        title: 'Tech Stack',
        items: ['React', 'TypeScript', 'DotNet', 'Kotlin', 'Jetpack Compose']
    },
    {
        title: 'Contact',
        items: []
    },
]

export const FooterItems: React.FC<FooterItemsProps> = ({title, items}) => {
    return (
        <div className={'d-flex flex-column'}>
            <span className={' text-start px-2 py-2 text-start fs-2 fw-bolder'}>{title}</span>
            <div className={'d-flex flex-column align-items-start'}>
                {
                    items.map((item, index) => (
                        <span className='bg-hover-light rounded-1 text-start px-2 py-2 text-gray-700'>
                            {item}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};