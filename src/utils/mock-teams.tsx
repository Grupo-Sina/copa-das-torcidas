import Celeste from '../../public/celeste-fc.png'
import Tiradentes from '../../public/tiradentes-fc.png'
import Ajax from '../../public/ajax-fc.png'
import X from '../../public/x-fc.png'
import Botafogo from '../../public/botafogoguaianases.png'
import DaPontePraCa from '../../public/dapontepracafc.png'
import BattiFacilLogo from '../../public/battifacillogo.png'
import ArsenalLogo from '../../public/arsenallogo.png'
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
    image: BattiFacilLogo,
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
    image: ArsenalLogo,
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
  {
    name: 'Da Ponte Pra Cá',
    deposit: 'https://go.aff.esportesdasorte.com/uxtodqsq?utm_source=DPChp',
    link: 'https://go.aff.esportesdasorte.com/tsps1mxh?utm_source=DPCPaginadeCadastro',
    image: DaPontePraCa,
  },
  {
    name: 'Botafogo Guaianases',
    deposit:
      'https://go.aff.esportesdasorte.com/w6oooogy?utm_source=BDGHomePage',
    link: 'https://go.aff.esportesdasorte.com/8pgjq2rx?utm_source=BDGPaginadeCadastro',
    image: Botafogo,
  },
]
