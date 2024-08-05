import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import {KTSVG} from "../../../../_metronic/helpers";
import {useMousePosition} from "../../core/helpers.ts";
import {useEffect, useRef} from "react";
import Lenis from "lenis";


const techStackArray = [
    'devicon--kotlin.svg',
    'devicon--jepackcompose.svg',
    'devicon--typescript.svg',
    'logos--react.svg',
    'devicon--bootstrap.svg',
    'devicon-plain-dotnetcore.svg',
    'devicon--androidstudio.svg',
    'devicon--framermotion.svg',
    'devicon--figma.svg',
    'ri--copilot-fill.svg',
    'mdi--github.svg',
    'logos--datagrip.svg',
    'logos--rider.svg',
    'logos--webstorm.svg',
]

export const TechStackNTools = () => {
    const {divRef, position, handleMouseMove} = useMousePosition();
    const container = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div className={'overflow-hidden'}>
            <div ref={container}>
                <Slide
                    direction={'left'}
                    progress={scrollYProgress}
                    left={'-150px'}
                    src={techStackArray.slice(0, 7)}
                />
                <Slide
                    direction={'right'}
                    progress={scrollYProgress}
                    left={'50%'}
                    src={techStackArray.slice(7, 14)}
                />
            </div>
        </div>
    );
};


type SlideProps = {
    direction: string
    progress: MotionValue<number>
    left: string
    src: string[]
}

const Slide = (props: SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    return (
        <motion.div style={{x: translateX, left: props.left}}
                    className={"position-relative d-flex flex-row gap-5 flex-nowrap "}>
            {
                props.src.map((src, index) => (
                    <TechStack fileName={src} key={index}/>
                ))
            }
        </motion.div>
    )
}

type PhraseProps = {
    fileName: string
}

const TechStack = ({fileName}: PhraseProps) => {

    return (
        <div className={'d-flex align-items-center'}>
            <span className="position-relative overflow-hidden">
                <KTSVG path={`/media/svg/tech/${fileName}`} className={''}/>
            </span>
        </div>
    )
}