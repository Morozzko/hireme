import React, { useEffect } from 'react'
import StyleContainer from '../../styles/StyleContainer'
import BG from '../../components/templates/BG'
import { Paper } from '@mui/material'
import SwipeableViws from 'react-swipeable-views'
import { useActions } from '../../utils/hooks/useActions'
import { condition } from '../../features/services/condition'
import { useAppSelector } from '../../utils/hooks/useAppSelector'
import TelegramIcon from '@mui/icons-material/Telegram'
import ColorsScheme from '../../styles/ColorsScheme'
import manJSON from '../../assets/animations/man-working-on-system.json'
import styleJSON from '../../assets/animations/topset-drag-and-drop.json'
import atomJSON from '../../assets/animations/atom-css-customisible.json'
import server from '../../assets/animations/working-server-animation.json'
import code from '../../assets/animations/code-animation.json'
import webpack from '../../assets/animations/webpack.json'
import testing from '../../assets/animations/testing.json'

import rocketJSON from '../../assets/animations/rocket.json'
import Lottie from 'react-lottie'

const MainPage = () => {
  const { enqueueNotification } = useActions(condition.Actions)
  const { isMobile } = useAppSelector(state => state.mobile)

  useEffect(() => {
    enqueueNotification({
      variant: 'success',
      message: 'Свайпайте блоки пальцем или мышью'
    })
  }, [])

  const fontSize = isMobile ? '16px' : '3vh'
  const width = isMobile ? 80 : 40
  const vh = isMobile ? 60 : 80
  const animationSize = {
    width: isMobile ? 200 : 300,
    height: isMobile ? 200 : 300
  }

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: styleJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: server,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: manJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: atomJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptions7 = {
    loop: true,
    autoplay: true,
    animationData: webpack,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions8 = {
    loop: true,
    autoplay: true,
    animationData: testing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: rocketJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <StyleContainer column no-padding className={'unselectable'} onContextMenu={e => e.preventDefault()}>
      <BG />
      <StyleContainer absolute width={'100vw'} height={'100vh'} middle className={'unselectable'}>
        <SwipeableViws enableMouseEvents>
          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Привет, я React разработчик
                </StyleContainer>
                <Lottie
                  isPaused={false}
                  isStopped={false}
                  height={animationSize.height}
                  width={animationSize.width}
                  isClickToPauseDisabled
                  options={defaultOptions}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Свайпайте вправо, чтобы узнать про меня больше
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize} middle style={{ textAlign: 'center' }}>
                  Я работал с: ЦБ РФ, ВТБ, Raiffeisen, Альфабанк, Росстат, ЗИТ Инфотранс, Адамас, Газпром, Минтранс,
                  Глосав
                </StyleContainer>
                <Lottie
                  height={animationSize.height}
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  width={animationSize.width}
                  options={defaultOptions6}
                />
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Мой Core в Enterprise разработке:
                </StyleContainer>

                <Lottie
                  height={animationSize.height}
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  width={animationSize.width}
                  options={defaultOptions3}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  React / Next.js / Electron.js+React
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Typescript / Hooks (Пишу кастомные)
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  ModuleFederation / MicroFrontends
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Больше всего люблю Redux-Toolkit,
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  но в своей работе пробовал почти все:
                </StyleContainer>
                <Lottie
                  isPaused={false}
                  isStopped={false}
                  height={animationSize.height}
                  width={animationSize.width}
                  isClickToPauseDisabled
                  options={defaultOptions4}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Redux
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Redux-toolkit / Thunk / Saga
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  MobX
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Effector
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  REST, GraphQL, WS - все умею, практикую
                </StyleContainer>
                <Lottie
                  height={animationSize.height}
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  width={animationSize.width}
                  options={defaultOptions5}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Axios
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Apollo
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Socket.IO / Websockets
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Кстати в отличии от многих,
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  я могу заниматься версткой
                </StyleContainer>
                <Lottie
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  height={animationSize.height}
                  width={animationSize.width}
                  options={defaultOptions2}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Styled Components
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  module SCSS
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Пишу unit и screenshot тесты
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  и умею настраивать code style
                </StyleContainer>
                <Lottie
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  height={animationSize.height}
                  width={animationSize.width}
                  options={defaultOptions8}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Jest
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Storybook
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  es-lint / prettier
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Немного практикую Nest.js
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  и еще умею пару плюшек:
                </StyleContainer>
                <Lottie
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled
                  height={animationSize.height}
                  width={animationSize.width}
                  options={defaultOptions7}
                />
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Drag & Drop
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  Rechart / Vis / Canvas
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  yarn-workspace
                </StyleContainer>
                <StyleContainer font-weight={500} font-size={fontSize}>
                  webpack / TreeShaking
                </StyleContainer>
              </StyleContainer>
            </Paper>
          </StyleContainer>

          <StyleContainer middle>
            <Paper>
              <StyleContainer middle vw={width} vh={vh} column padding={'10vh'}>
                <a href={'https://t.me/morozzko'} style={{ fontWeight: 700, fontSize: '3vh' }} target={'_blank'}>
                  Связь со мной
                </a>
              </StyleContainer>
            </Paper>
          </StyleContainer>
        </SwipeableViws>

        <a href={'https://t.me/morozzko'} style={{ fontWeight: 700 }} target={'_blank'}>
          <StyleContainer
            middle
            background-color={ColorsScheme.RaiffeisenWhite()}
            style={{
              position: 'fixed',
              bottom: 60,
              right: 60,
              borderRadius: '100%'
              // border: `#da5f04 3px solid`
            }}
          >
            <TelegramIcon />
          </StyleContainer>
        </a>
      </StyleContainer>
    </StyleContainer>
  )
}

export default MainPage
