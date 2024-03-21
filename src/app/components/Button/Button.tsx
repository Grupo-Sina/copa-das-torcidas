type ButtonProps = JSX.IntrinsicElements['button'] & {
  title: string
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="font-headingBold rounded-[100px] border-[#00E46F] border-[1px] py-[12px] sm:px-[32px] px-[24px] text-[12px] md:text-[12px] lg:text-[16px] text-[#00E46F] transition ease-in-out delay-150  md:hover:scale-110 duration-300 padding-button-small"
    >
      {title}
    </button>
  )
}
