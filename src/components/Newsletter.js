import React from 'react'
import { newsletterUrl } from '../shared/meta.js'

const Newsletter = props => (
  <div className="newsletter">
    <h4>Stay up to date with major changes in the list.</h4>
    <a href={newsletterUrl} className="submit-button">Sign up for updates</a>
  </div>
)

export default Newsletter