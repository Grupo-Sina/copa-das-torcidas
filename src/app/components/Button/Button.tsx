import { Button as ButtonUI, ButtonProps } from '@nextui-org/react'

type ButtonPropsUI = ButtonProps & {
  title: string
  full?: boolean
}

export default function Button({ title, full, ...rest }: ButtonPropsUI) {
  return (
    <ButtonUI
      as="button"
      {...rest}
      className={`${full && 'w-full '} height-thin font-headingExtraBold sm:py-[12px]  sm:px-[32px] px-[32px] text-tiny text-[12px] md:text-[12px] lg:text-[16px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]`}
    >
      {title}
    </ButtonUI>
  )
}
