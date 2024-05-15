import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import { carouselItemDesktop } from '@/utils/carousel-items'
import { Link } from '@nextui-org/react'

export default function CarouselLargeComponent() {
  return (
    <div className="w-[85%] h-[215px] rounded-xl hidden md:block mb-16 lg:mb-0 overflow-hidden border-[#00E46F] border-[2px] border-solid">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {carouselItemDesktop.map((item, index) => (
          <div key={index}>
            <Link
              className="w-full rounded-xl "
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1640}
                height={276}
                quality={100}
                priority={true}
                className="mx-auto mb-8 lg:mb-0 h-[210px] w-[100%] hidden md:block rounded-xl"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
