import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import { carouselItemMobile } from '@/utils/carousel-items'
import { Link } from '@nextui-org/react'

export default function CarouselMobileComponent() {
  return (
    <div className="w-[85%] block md:hidden">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className=""
      >
        {carouselItemMobile.map((item, index) => (
          <div key={index}>
            <Link
              className="w-full overflow-hidden border-[#00E46F] border-[2px] border-solid h-full rounded-xl"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={380}
                height={174}
                quality={100}
                priority={true}
                className="w-full"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
