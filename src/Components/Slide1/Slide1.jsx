import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow } from 'swiper';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Slide1.scss'

export const Slide1 = () => {

    const slides = [
      { id: 0, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 1, url: "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg"},
      { id: 2, url: ""},
      { id: 3, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 4, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 5, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 6, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 7, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
    ];

    return(
        // <div className="Slide1">Hello from Slide1!</div>
        <Swiper
            grabCursor
            centeredSlides
            slidesPerView="auto"
            effect='coverflow'
            loop
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={EffectCoverflow}>
            {slides.map(({ id, url })=>(
                <SwiperSlide 
                    key={id}
                    // style={{ backgroundImage: `url(${url})`}}
                    >
                    <img src={url} alt="car img" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}