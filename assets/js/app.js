import React from 'react'
import PropTypes from 'prop-types'

import styles from './app.scss'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <h1 className={styles.example}>Sails + Webpack</h1>
    )
  }
}


export default App
