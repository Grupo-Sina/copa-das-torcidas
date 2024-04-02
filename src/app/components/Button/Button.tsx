import { Button as ButtonUI, ButtonProps } from '@nextui-org/react'

type ButtonPropsUI = ButtonProps & {
  title: string
}

export default function Button({ title, ...rest }: ButtonPropsUI) {
  return (
    <ButtonUI
      as="button"
      {...rest}
      className="font-headingExtraBold py-[12px] sm:px-[32px] px-[24px] text-tiny text-[10px] md:text-[12px] lg:text-[16px] rounded-[100px] bg-[#00E46F]  text-[#001F6D]"
    >
      {title}
    </ButtonUI>
  )
}
