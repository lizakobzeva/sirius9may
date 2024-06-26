import { useSwiper } from 'swiper/react';

export function HeroSwiperPrev() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className='swiper-button-prev'>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" transform="matrix(-1 0 0 1 50 0)" fill="#52575D" />
      <path d="M32.1042 34.5625L22.5626 25L32.1042 15.4375L29.1667 12.5L16.6667 25L29.1667 37.5L32.1042 34.5625Z" fill="white" fillOpacity="0.87" />
    </svg>
  </button>
  );
}
