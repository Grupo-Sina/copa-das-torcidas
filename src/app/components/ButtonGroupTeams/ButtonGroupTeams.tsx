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
    <div className="flex lg:gap-[15px] gap-[10px] flex-wrap">
      <Button
        title={'CADASTRE-SE'}
        full
        onClick={() => window.open(link, '_blank')}
      />
      <Button full title={'VER QR CODE'} onClick={() => handleQrCodeClick()} />
      <Button
        full
        title={'DEPOSITE'}
        onClick={() => window.open(deposit, '_blank')}
      />
    </div>
  )
}
