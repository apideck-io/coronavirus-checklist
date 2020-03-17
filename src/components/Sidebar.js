import React from 'react'
import { steps } from '../data.js'
import logo from '../images/logo.svg'
import { url, title, newsletterUrl } from '../shared/meta'
import Scrollspy from 'react-scrollspy'
import { FacebookButton, TwitterButton } from './SocialButtons'

console.log(FacebookButton)

const Sidebar = props => (
  <div className="fixed">
    <a href="/" >
      <img src={logo} alt={title} className="logo" />
    </a>
    <nav>
      <Scrollspy items={Object.keys(steps[0].items)} currentClassName="is-current">
        { steps[0].items.slice(0, 7).map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        <li key='more'><a>+ 15 More items</a></li>
      </Scrollspy>

      <div className='social-icons'>
        <FacebookButton />
        <TwitterButton />
      </div>

      <h4 style={{ marginTop: '20px' }}><a href='#footer'>Made in Belgium 🇧🇪</a></h4>
    </nav>
    <div className='newsletter-sidebar'>
      <a href={newsletterUrl} className="submit-button" style={{ marginTop: '10px' }}>Stay updated</a>
    </div>
    <div>
      <a href='#disclaimer' style={{ marginTop: '10px' }}>Disclaimer</a>
    </div>
  </div>
)

export default Sidebar