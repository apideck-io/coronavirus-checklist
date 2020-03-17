import React from 'react'

import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled  from 'react-emotion'
import Img from 'gatsby-image'
import { productName, footerDescription, privacyPolicy, dsar } from '../shared/meta.js'
import ReactMarkdown from 'react-markdown'

const Container = Styled('div')`
  max-width: 1200px;
  margin: 0 auto;
`

const Footer = props => (
  <footer id='footer'>
    <h5>About the {productName}</h5>
    <div className='subtitle'>
      <ReactMarkdown 
        source={footerDescription}
      />
    </div>
  </footer>
)

export default Footer
