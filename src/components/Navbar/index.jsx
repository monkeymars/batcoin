import React from 'react'
import { PageHeader } from 'antd'
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
            <Link to="/exchange">
              <strong>Exchange</strong>
            </Link>
          </div>
        }
        title="Batcoin"
        extra={
          [
            // <Button key="3">Operation</Button>,
            // <Button key="2">Operation</Button>,
            // <Button key="1" type="primary">
            //   Primary
            // </Button>
          ]
        }
      />
    </>
  )
}

export default NavbarComponent
