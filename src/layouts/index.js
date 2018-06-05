import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../styles/site.css'

const Layout = (props) => {
  return (
    <div id="siteWrapper">
      {props.children()}
    </div>)
}

export default Layout
