import {StatsWidgetProps} from "../profile/components/StatsWidget.tsx";

export type FooterItemsProps = {
    title: string;
    items: string[];
    contactDetails?: string[];
    index?: number;
}

export const footerItems: FooterItemsProps[] = [
    {
        title: 'Services',
        items: ['Mobile Development', 'Web Applications', 'UI/UX Design']
    },
    {
        title: 'Tech Stack',
        items: ['Kotlin', 'Jetpack Compose', 'React', 'TypeScript', 'Bootstrap', 'ASP.Net',]
    },
    {
        title: 'Contact',
        items: [
            'envelope-fill',
            'telephone-fill',
            'whatsapp',
        ],
        contactDetails: [
            'kofivincent026@gamil.com',
            '+233 50 064 4457',
            'https://wa.me/qr/5VDR6CKA7YIDM1',
        ]
    },
]


export const socials = [
    {
        icon: 'x',
        href: 'https://x.com/K_O_F_I'
    },
    {
        icon: 'linkedin',
        href: 'https://linkedin.com/in/kofi-k-vincent-516778196'
    },
    {
        icon: 'github',
        href: 'https://github.com/kofi-k'
    },
    {
        icon: 'google-developers',
        href: 'https://g.dev/kofi'
    },
    {
        icon: 'figma',
        href: 'https://figma.com/@kofi_k'
    },
    {
        icon: 'stackoverflow',
        href: 'https://stackoverflow.com/users/18136180/kofi-k'
    }
]


export const profileStats: StatsWidgetProps[] = [
    {
        className: 'bg-light-primary',
        title: 'Happy Clients',
        value: '20+',
        color: ''
    },
    {
        className: 'bg-light-danger',
        title: 'Projects Completed',
        value: '50',
        color: ''
    },
    {
        className: 'bg-light-success',
        title: 'Awards Won',
        value: '2',
        color: ''
    },
    {
        className: 'bg-light-info',
        title: 'Years of Experience',
        value: '1+',
        color: 'primary'
    }
]