import React, { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import App from '../ui'
import Providers from '../../providers'
import GlobalStyle from '../../../styles/GlobalStyle'

const Container: FC = props => {
  return (
    <HashRouter>
      <Providers>
        <App {...props} />
        <GlobalStyle />
      </Providers>
    </HashRouter>
  )
}

export default Container
