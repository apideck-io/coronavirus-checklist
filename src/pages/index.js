import React from 'react'
import { Persist } from "react-persist"
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter'
import { steps, roles, resourceLinks } from '../data.js'
import meta, { productName, primaryColor, privacyPolicy, dsar, githubRepo } from '../shared/meta.js'
import Arrow from '../images/arrow-bottom.svg'
import Footer from '../components/Footer'
import Disclaimer from '../components/Disclaimer'
import Scrollspy from 'react-scrollspy'
import ReactMarkdown from 'react-markdown'

class Li extends React.Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isExpanded: false,
    }
  }

  handleExpand = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !prevState.isExpanded
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isChecked: !prevState.isChecked
    }))
  }

  render () {
    const { id, paragraphs, links } = this.props

    return (
      <li key={id} id={id} className={`seed ${this.state.isExpanded ? 'expand' : ''}`}>
        <div className="header">
          <div className={`check ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="evenodd" strokeWidth="3" transform="translate(2 2)">
                <path stroke={primaryColor} d="M6 11.402l2.874 2.934L16.06 7"></path>
                <circle cx="11" cy="11" r="11"></circle>
              </g>
            </svg>
          </div>
          <div className={`expand-bar ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleExpand}>
            <p>{this.props.title}</p>
            <ul className='roles'>
              {this.props.role.map(function(role, index){
                return <li className={`${role}`} key={ index }>{roles[role]}</li>;
              })}
            </ul>
          </div>
          <div className="btn">
            <img src={Arrow} alt="" className="arrow" onClick={this.handleExpand} />
          </div>
        </div>
        <div className='body' style={{ display: this.state.isExpanded ? 'block' : 'none' }} >
        {paragraphs && paragraphs.map(paragraph => <p><ReactMarkdown source={paragraph} /></p>)}
          {/* {this.props.paragraphs.length === 0 && <p>Read More:</p>} */}
          {links && (<p>Sources, references, and tools:</p>)}
          <ul className='links'>
            {links && links.map((l, index) => <li key={index}><a href={l.href} target="_blank">{l.title || l.href}</a></li>)}
          </ul>
        </div>
        <Persist
          name={this.props.section + ":item-" + this.props.id}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </li>
    )
  }
}

class Section extends React.Component {
  render () {
    return (
        <div>
        {

        this.props.list.map(function(item, index){
          var filtered_list = [];
          item.items.map( function(l, index)
            {
              if(
                (this.props.individualSelected && l.role.includes('individual')) ||
                (this.props.businessSelected && l.role.includes('business'))
              ) {
                filtered_list.push( l );
              }
            }.bind(this)
          )

          if (!filtered_list.length == 0) {
          return <div className="scrollspy" id={[item.id]} key={index}>
                  <h3>{item.title}</h3>
                  <p className='description small'>{item.description}</p>
                  <ul className="checklist">
                    { filtered_list.map( function(l, index)
                        {
                          if (
                            (this.props.individualSelected  && l.role.includes('individual')) ||
                            (this.props.businessSelected  && l.role.includes('business'))
                          ) {
                              return <Li {...l} key={index} top={index * 70} section={item.id} />
                          }
                        }.bind(this)
                    )}
                  </ul>
                </div>
          }
          }.bind(this) )}
        </div>
    )
  }

}

class IndexPage extends React.Component {

  constructor() {
    super()
    this.state = {
      individualSelected: true,
      businessSelected: true
    }
  }

  toggleBusiness = () => {
     this.setState({ businessSelected : !this.state.businessSelected } );
  }

  toggleIndividual = () => {
    this.setState({ individualSelected : !this.state.individualSelected } );
  }

  render () {
    return (
      <div>
        <div className='wrapper'>
          <div className='columns'>
            <Sidebar
              individualSelected={this.state.individualSelected}
              businessSelected={this.state.businessSelected}
            />
            <div className="col-9">
              <h1>{productName}</h1>
              <h2 className="description first">Helping companies and individuals cope with COVID-19.</h2>

              <p className="small description">The Coronavirus is sadly currently hijacking 2020, leaving a massive impact on our society. Follow the steps below to navigate the Coronavirus crisis. This list is far from an exhaustive list; it merely tries to help you discover the right information to help you and your loved ones stay healthy and informed.</p>

              <p className="small description">
                Let's all work together to help <a href='https://www.flattenthecurve.com/'>flatten the curve</a>. #flattenthecurve
              </p>

              <p className="small description">
                Feel free to <a href={githubRepo} target="_blank">contribute directly</a> to GitHub!
              </p>

              <img className='gif' src='https://media1.tenor.com/images/f6f8da2a4ae343b47e598b06c58f86ad/tenor.gif?itemid=16533560' />

              <div className="filter-bar">
                <h3>Select what applies to you:</h3>
                <ul className="selected-three">
                  <li onClick={this.toggleIndividual} className={this.state.individualSelected ? 'individual' : ''}><h2>Individuals, Households and Families</h2></li>
                  <li onClick={this.toggleBusiness} className={this.state.businessSelected ? 'business' : ''}><h2>Business or Startup</h2></li>
                </ul>
              </div>
                { steps.map( (function(s)
                    {
                    return <Section
                      key={s.id}
                      list={[s]}
                      individualSelected={this.state.individualSelected}
                      businessSelected={this.state.businessSelected}
                    />
                    }).bind(this)
                    ) }
              <Newsletter />
              <div className='resource-links'>
                <h4>Other helpful resources</h4>
                {Object.keys(resourceLinks).map((key) => 
                  <ResourceLinkSection 
                    title={key}
                    links={resourceLinks[key]}
                  />)}
              </div>
              <Footer />
              <Disclaimer />
              <p className='description' style={{ fontSize: '1em' }}>
                <a href={privacyPolicy}>Privacy Policy</a> | 
                <a href={dsar}>Exercise your rights</a> |
                <a href="javascript:window.Metomic('ConsentManager:show')">Manage cookies</a>
              </p>
            </div>
          </div>
        </div>
        <Persist
          name={"index-page"}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </div>
  )}
}

const ResourceLinkSection = ({ title, links }) => (
  <div>
    {title && <h4>{title}</h4>}
    <ul>
      {links.map(link => <li>
        <a href={link} target='_blank'>{link}</a>
      </li>)}
    </ul>
  </div>
)

export default IndexPage
