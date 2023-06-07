import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow } from 'swiper';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Slide1.scss'

export const Slide1 = () => {

    const slides = [
      { id: 0, url: "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"},
      { id: 1, url: "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg"},
      { id: 2, url: "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg"},
      { id: 3, url: "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg"},
      { id: 4, url: "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg"},
      { id: 5, url: "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpgg"},
      { id: 6, url: "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg"},
      { id: 7, url: "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg"},
    ]

    return (
      <>
        <Swiper
          grabCursor
          centeredSlides
          slidesPerView="auto"
          className='Swiper'
        //   loop
        //   effect="coverflow"
        //   coverflowEffect={{
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 2.5,
        //     slideShadows: true,
        //   }}
          modules={{ EffectCoverflow }}
        >
            {slides.map(({ id, url }) => (
                <SwiperSlide key={id} style={{ backgroundImage: `url(${url})` }}>
                {/* <img src={url} alt="car img" /> */}
                </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
}