'use client'

import { useRouter } from 'next/navigation'
import Button from '../Button/Button'
import { useAppContext } from '@/context/AppContext'

type ButtonGroupTeams = {
  link: string
}

export default function ButtonGroupTeams({ link }: ButtonGroupTeams) {
  const { push } = useRouter()
  const { setTeamLinkSelect, setModalVisible } = useAppContext()

  const handleQrCodeClick = () => {
    setTeamLinkSelect(link)
    setModalVisible('qrcode')
  }
  return (
    <div className="flex md:gap-[15px] gap-[3px] md:mr-[12px] mr-[8px]">
      <Button title={'CADASTRE-SE'} onClick={() => push(link)} />
      <Button title={'VER QR CODE'} onClick={() => handleQrCodeClick()} />
    </div>
  )
}
