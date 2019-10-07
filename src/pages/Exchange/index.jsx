/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { Table, Row, Col, Collapse } from 'antd'
import formatCurrency from 'format-currency'
import BuyFormComponent from './components/BuyForm'
import SellFormComponent from './components/SellForm'
import dataBuy from './services/OrderBook/Buy'
import dataSell from './services/OrderBook/Sell'
import './style.css'

const ExchangePage = () => {
  const { Panel } = Collapse
  const [priceBuy, setPriceBuy] = useState(0)
  const [priceSell, setPriceSell] = useState(0)

  const opts = { format: '%v' }
  const columnsBuy = [
    {
      title: 'Total (IDR)',
      dataIndex: 'total',
      render: total => <span>{formatCurrency(total, opts)}</span>
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Price (IDR)',
      dataIndex: 'price',
      render: price => (
        <span>
          <a
            href="true"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              // eslint-disable-next-line no-console
              console.log(price)
              setPriceBuy(price)
            }}
          >
            <b style={{ color: 'rgb(255, 88, 88)' }}>
              {formatCurrency(price, opts)}
            </b>
          </a>
        </span>
      )
    }
  ]

  const columnsSell = [
    {
      title: 'Price (IDR)',
      dataIndex: 'price',
      render: price => (
        <span>
          <a
            href="true"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              // eslint-disable-next-line no-console
              console.log(price)
              setPriceSell(price)
            }}
          >
            <b style={{ color: 'rgb(26, 203, 158)' }}>
              {formatCurrency(price, opts)}
            </b>
          </a>
        </span>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Total (IDR)',
      dataIndex: 'total',
      render: total => <span>{formatCurrency(total, opts)}</span>
    }
  ]

  return (
    <Row>
      <Row>
        {/* Order Book */}
        <Collapse defaultActiveKey={['1']}>
          <Panel header={<strong>Order Book</strong>} key="1">
            <Col span={12}>
              <Table
                columns={columnsBuy}
                dataSource={dataBuy}
                pagination={false}
              />
            </Col>
            <Col span={12}>
              <Table
                columns={columnsSell}
                dataSource={dataSell}
                pagination={false}
              />
            </Col>
          </Panel>
        </Collapse>
      </Row>
      <Row>
        {/* Order */}
        <Collapse defaultActiveKey={['1']}>
          <Panel header={<strong>Order</strong>} key="1">
            <Col span={8}>
              <BuyFormComponent priceBuy={priceBuy} />
            </Col>

            {/* Sell */}
            <Col span={8}>
              <SellFormComponent priceSell={priceSell} />
            </Col>
          </Panel>
        </Collapse>
      </Row>
    </Row>
  )
}

export default ExchangePage
