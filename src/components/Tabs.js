import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Dropdown from 'react-dropdown'
import { Link } from 'react-scroll'
import { PALETTE } from '../App'

const Tabs = ({ mode, color, children }) => {
  const edition = localStorage.getItem('edition')
  return (
    <TabsBox mode={mode} color={color}>
      {children}
      {/* <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        <FormattedMessage id="navbar.about" />
      </Link>
      <Link
        to={edition === 'buenos-aires' ? 'speakers' : 'speakersBog'}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <FormattedMessage id="navbar.speakers" />
      </Link>
      {edition === 'buenos-aires' && (
        <>
          <Link
            to="sponsors"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <FormattedMessage id="navbar.sponsors" />
          </Link>
        </>
      )}
      <Link to="venue" spy={true} smooth={true} offset={50} duration={500}>
        <FormattedMessage id="navbar.venue" />
      </Link>
      <Link
        to={edition === 'buenos-aires' ? 'agenda' : 'agendaBog'}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <FormattedMessage id="navbar.schedule" />
      </Link>
      {edition === 'buenos-aires' && (
        <>
          <Link
            to="theOtherSide"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Side events
          </Link>
        </>
      )}
      <Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>
        <FormattedMessage id="navbar.faqs" />
      </Link> */}
    </TabsBox>
  )
}

const TabsBox = styled.div`
  display: ${props => (props.mode == 'large' ? 'flex' : 'block')};
  margin: 0 auto;
  text-align: center;
  a {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #4d4d4d;
    text-align: left;
    padding: ${props => (props.mode == 'large' ? '0 13px' : '20px 0')};
    background: transparent;
    border: 0px solid;
    display: block;
    margin: auto;
    height: 38px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      border-bottom: solid 4px ${props => (props.color ?? PALETTE.GREEN)};
    }
  }

  .dropdown-div {
    position: 'fixed';
    margin-top: 15%;
    margin-left: -14%;
  }

  .dropdown-div > a {
    color: white !important;
  }
`

export default Tabs
