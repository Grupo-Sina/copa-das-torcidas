import { TeamsProps } from '@/utils/mock-teams'
import ButtonGroupTeams from '../ButtonGroupTeams/ButtonGroupTeams'
import Image from 'next/image'

type TeamMobileProps = {
  team: TeamsProps
  index: number
}

export default function TeamMobile({ team, index }: TeamMobileProps) {
  return (
    <div
      key={index}
      className={`${index !== 0 && 'border-t-[0.5px] border-white'} py-4 flex w-full flex-row  justify-between gap-10 h-[170px]`}
    >
      <div className="w-[40%] flex flex-col items-center gap-3 h-full">
        <p className="line-clamp-1 text-[16px] text-[#FFFFFF] font-bold font-robotoRegular text-center ">
          {team.name}
        </p>
        {team.image && (
          <Image
            src={team.image}
            alt=""
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
            quality={100}
            priority
          />
        )}
      </div>

      <div className="w-full flex ">
        <ButtonGroupTeams link={team.link} deposit={team.deposit} />
      </div>
    </div>
  )
}
