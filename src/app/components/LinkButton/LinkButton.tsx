import { Button } from '@nextui-org/react'
import Link from 'next/link'

type ButtonType = {
  link: string
}

export default function LinkButton({ link }: ButtonType) {
  return (
    <div>
      <Button
        as={Link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        radius="full"
        className="bg-[#00E46F] max-w-28 text-[#003B9C]  py-3 px-8 font-headingBold text-[16px]"
      >
        ACESSAR
      </Button>
    </div>
  )
}
