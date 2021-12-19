import React, { FC } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../assets/animations/wavepattern.json'
import StyleContainer from '../../../styles/StyleContainer'

const BG: FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <StyleContainer middle no-padding style={{ position: 'fixed' }}>
      <Lottie height={window.innerHeight} width={window.innerWidth} options={defaultOptions} />
    </StyleContainer>
  )
}

export default React.memo(BG)
