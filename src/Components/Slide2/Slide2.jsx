import './Slide2.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export const Slide2 = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const sections = sectionRef.current

        gsap.to(sections, {
            xPercent: -100, // 100 implica desplazarse a la izda
            ease: "none",
            scrollTrigger: {
                trigger: sections,
                scrub: true,
                pin: true,
                start: "top top",
                end: "bottom top",
                markers: true,
            },
        })
    },[])

    return (
      <div className="Slide2">
        Hello from Slide 2
        <div className="Section" ref={sectionRef}>First section</div>
        <div className="Section" ref={sectionRef}>Second section</div>
      </div>
    );
}