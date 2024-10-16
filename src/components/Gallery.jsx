import { Image } from "./Image"

import milkbottlesImgMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkbottlesImgDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImgDesktop from '../assets/desktop/image-gallery-orange.jpg'
import orangeImgMobile from '../assets/mobile/image-gallery-orange.jpg'
import coneImgMobile from '../assets/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubesImgMobile from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'


export const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <Image
        imageMobile={milkbottlesImgMobile}
        imgDesktop={milkbottlesImgDesktop}
      />
       <Image
        imageMobile={orangeImgMobile}
        imgDesktop={orangeImgDesktop}
      />
       <Image
        imageMobile={coneImgMobile}
        imgDesktop={coneImgDesktop}
      />
       <Image
        imageMobile={sugarCubesImgMobile}
        imgDesktop={sugarCubesImgDesktop}
      />
    </div>
  )
}


