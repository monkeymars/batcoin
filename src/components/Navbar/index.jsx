import React from 'react'
import { PageHeader, Button } from 'antd'
import { Link } from 'react-router-dom'
import './styles.css'

const NavbarComponent = () => {
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
        extra={[<Button key="3">Logout</Button>]}
      />
    </>
  )
}

export default NavbarComponent
