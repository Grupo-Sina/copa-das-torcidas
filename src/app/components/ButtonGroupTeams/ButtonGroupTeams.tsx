'use client'

import Button from '../Button/Button'
import { useAppContext } from '@/context/AppContext'

type ButtonGroupTeams = {
  link: string
  deposit: string
}

export default function ButtonGroupTeams({ link, deposit }: ButtonGroupTeams) {
  const { setTeamLinkSelect, setModalVisible } = useAppContext()

  const handleQrCodeClick = () => {
    setTeamLinkSelect(link)
    setModalVisible('qrcode')
  }
  return (
    <div className="flex md:gap-[15px] gap-[3px] md:mr-[12px] mr-[8px]">
      <Button
        title={'CADASTRE-SE'}
        onClick={() => window.open(link, '_blank')}
      />
      <Button title={'VER QR CODE'} onClick={() => handleQrCodeClick()} />
      <Button
        title={'DEPOSITE'}
        onClick={() => window.open(deposit, '_blank')}
      />
    </div>
  )
}
