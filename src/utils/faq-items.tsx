/* eslint-disable react/no-unescaped-entities */
import LinkButton from '@/app/components/LinkButton/LinkButton'
import React from 'react'

export const faqItems = [
  {
    title: 'Como participo das missões?',
    descriptions: [
      <>
        É facin facin! É só você ficar ligado no{' '}
        <b>Instagram @copadatorcidas</b> que as missões são publicadas lá.{' '}
        <b>
          Mas fica ligado que para poder ganhar, você tem que ter um cadastro no
          Esportes da Sorte. 
        </b>
      </>,
      <>
        E se você ainda não tiver um cadastro, não tem problema!{' '}
        <b>
          Basta procurar o nome do seu time na aba "TIMES" aqui do site, clicar
          no link da sua torcida, fazer o cadastro rapidinho.
        </b>{' '}
        E o melhor, fazendo isso é mais um jeito de você acumulara pontos para a
        sua torcida!
      </>,
    ],
  },
  {
    title: 'Onde encontro o ranking dos times?',
    descriptions: [
      <div className="flex flex-col gap-5" key={2}>
        <p>
          Para descobrir qual posição seu time está, clique no botão abaixo.
        </p>
        <LinkButton link="/ranking" />
      </div>,
    ],
  },
  {
    title: 'Como faço meu cadastro na Esportes da Sorte?',
    descriptions: [
      <div className="flex flex-col gap-5" key={3}>
        <p>
          É fácil demais, mano! Basta você clicar no botão abaixo, procurar o
          link do seu time, e fazer seu cadastro. E fica ligado! Use o link do
          seu time para sua torcida acumular pontos na Copa das Torcidas e ser a
          grande vencedora.
        </p>
        <LinkButton link="/teams" />
      </div>,
    ],
  },
  {
    title: 'Como sei que meu time está participando?',
    descriptions: [
      'Basta clicar no botão abaixo que você poderá conferir todos os times cadastrados e confirmar se sua torcida está participando da Copa das Torcidas.',
      <div className="flex flex-col gap-5" key={4}>
        <p>
          Se não estiver, não tem problema. As únicas pessoas que podem
          inscrever seu time são os dirigentes, é só solicitar ao seu time que
          eles se inscrevam na copa.
        </p>
        <LinkButton link="/teams" />
      </div>,
    ],
  },
  {
    title: 'Onde vejo as missões ativas?',
    descriptions: [
      'Basta clicar no botão abaixo que você poderá conferir todos os times cadastrados e confirmar se sua torcida está participando da Copa das Torcidas.',
      <div className="flex flex-col gap-5" key={4}>
        <p>
          Se não estiver, não tem problema. As únicas pessoas que podem
          inscrever seu time são os dirigentes, é só solicitar ao seu time que
          eles se inscrevam na copa.
        </p>
        <LinkButton link="/teams" />
      </div>,
    ],
  },
]
