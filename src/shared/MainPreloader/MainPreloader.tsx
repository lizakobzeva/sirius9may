import './mainpreloader.css';
import bg1 from '../../assets/preloaderBackgrounds/bg1.jpg'
import bg2 from '../../assets/preloaderBackgrounds/bg2.jpg'
import bg3 from '../../assets/preloaderBackgrounds/bg3.jpg'
import bg4 from '../../assets/preloaderBackgrounds/bg4.jpg'
import bg5 from '../../assets/preloaderBackgrounds/bg5.jpg'
import bg6 from '../../assets/preloaderBackgrounds/bg6.jpg'
import bg7 from '../../assets/preloaderBackgrounds/bg7.jpg'
import { useLayoutEffect, useState } from 'react';
const backgrounds: string[] = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
]
export function MainPreloader() {
  const [bg, setBg] = useState(bg1)
  useLayoutEffect(() => {
    setBg(backgrounds[Math.floor(Math.random() * 6)])
  }, [])
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='preloader__main'>
      <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="220" height="220" stroke="black" stroke-width="10" />
        <path d="M183.71 40C183.71 40 172.95 40.022 167.496 40.0001C148.886 39.9852 130.664 45.2105 115.002 55.0533C99.3003 45.3398 81.0813 40.2427 62.5088 40.3673C57.0543 40.3892 52.3021 40.367 46.2949 40.3673C44.4177 40.3673 42.165 40.3675 40.0117 40.3673C40.0114 42.5991 39.9856 47.3561 40.0116 49.1054V137.221C39.9955 138.3 40.0124 139.505 40.012 140.248C40.0112 141.733 40.0116 145.446 40.0116 146.188L44.4175 145.446L48.7855 144.564C59.5318 142.742 70.5418 143.045 81.1669 145.453C91.7921 147.862 110.653 158.589 110.653 158.589L111.553 159.103L112.374 159.617L115.002 161.04L117.63 159.617L118.452 159.103L119.352 158.589C119.352 158.589 138.122 147.577 148.749 145.03C159.376 142.482 170.418 142.049 181.219 143.757L186.338 144.703L189.993 145.446V139.505C189.993 139.505 190.009 137.493 189.993 136.414V48.2977C189.915 46.6246 189.993 40.0005 189.993 40.0005L183.71 40ZM107.503 138.984C93.629 131.837 78.1857 128.107 62.5088 128.116C60.0341 128.116 57.5594 128.116 55.0097 128.116V54.6861C57.5073 54.5452 60.0112 54.5452 62.5088 54.6861C78.5072 54.6688 94.1564 59.2659 107.503 67.9035V138.984ZM174.995 128.41C172.445 128.41 169.97 128.41 167.496 128.41C151.819 128.4 136.375 132.13 122.501 139.277V67.9035C135.848 59.2659 151.497 54.6688 167.496 54.6861C169.993 54.5452 172.497 54.5452 174.995 54.6861V128.41ZM183.769 158.883C178.393 157.977 172.95 157.51 167.496 157.488C148.886 157.473 130.664 162.698 115.002 172.541C99.3405 162.698 81.1187 157.473 62.5088 157.488C57.0543 157.51 51.6112 157.977 46.2358 158.883C45.2596 159.035 43.2911 159.554 43.2911 159.554L40.0116 160.297L40.0116 164.381V167.328V174.777C40.0116 174.777 46.8368 173.495 48.7855 173.129C59.5318 171.307 70.5418 171.609 81.1669 174.018C91.7921 176.426 101.818 180.893 110.653 187.154C111.923 188.039 115.002 190 115.002 190C115.002 190 118.082 188.039 119.352 187.154C128.187 180.893 138.212 176.426 148.838 174.018C159.463 171.609 170.473 171.307 181.219 173.129C183.168 173.495 189.993 174.777 189.993 174.777V167.328V164.381V160.297L187.089 159.554C187.089 159.554 184.745 159.035 183.769 158.883Z" fill="black" />
      </svg>

    </div>
  );
}
