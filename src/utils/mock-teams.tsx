import Celeste from '../../public/celeste-fc.png'
import Tiradentes from '../../public/tiradentes-fc.png'
import Ajax from '../../public/ajax-fc.png'
import X from '../../public/x-fc.png'
import { StaticImageData } from 'next/image'

export type TeamsProps = {
  name: string
  deposit: string
  link: string
  image: StaticImageData
}

export const teams: TeamsProps[] = [
  {
    name: 'Batti Fácil',
    deposit:
      'https://go.aff.esportesdasorte.com/uq6dlpfr?utm_source=BattiloukuraHP',
    link: 'http://bit.ly/battif%C3%A1cil',
    image: X,
  },
  {
    name: 'Celeste',
    deposit:
      'https://go.aff.esportesdasorte.com/wb5u59zl?utm_source=ForcaCelesteHP',
    link: 'http://bit.ly/celestefc',
    image: Celeste,
  },
  {
    name: 'Ajax 1973',
    deposit:
      'https://go.aff.esportesdasorte.com/8my1i7if?utm_source=FanaticosAjax1973HP',
    link: 'http://bit.ly/ajaxoficial',
    image: Ajax,
  },
  {
    name: 'Arsenal',
    deposit:
      'https://go.aff.esportesdasorte.com/hyl49nbs?utm_source=ArseloucosHP',
    link: 'http://bit.ly/arsenalguarulhos',
    image: X,
  },
  {
    name: 'Tiradentes Vila Curuça',
    deposit:
      'https://go.aff.esportesdasorte.com/nbe8kh10?utm_source=ChapaQuenteHP',
    link: 'http://bit.ly/tiradentesvc',
    image: Tiradentes,
  },
  {
    name: 'X do Morro',
    deposit:
      'https://go.aff.esportesdasorte.com/snrg5a0o?utm_source=BattiFacilTorcidaFemininaHP',
    link: 'http://bit.ly/xdomorro',
    image: X,
  },
]
