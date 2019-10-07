/* eslint-disable react/prop-types */
import React from 'react'
import { PageHeader, Button } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import cookie from 'js-cookie'
import './styles.css'

const NavbarComponent = ({ history }) => {
  return (
    <>
      <PageHeader
        className="navbar-header"
        subTitle="Cryptocurrency Exchange Service"
        tags={
          <div className="navbar-menu">
            <Link to="/exchange/IDR:BTC">
              <strong>Exchange</strong>
            </Link>
          </div>
        }
        title="Batcoin"
        extra={
          cookie.get('authenticated') && (
            <Button
              onClick={() => {
                cookie.remove('authenticated')
                history.push('/login')
              }}
            >
              Logout
            </Button>
          )
        }
      />
    </>
  )
}

export default withRouter(NavbarComponent)
