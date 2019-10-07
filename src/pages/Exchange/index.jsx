/* eslint-disable no-console */
import React from 'react'
import { Table, Row, Col, Collapse } from 'antd'
import BuyFormComponent from './components/BuyForm'
import SellFormComponent from './components/SellForm'
import { columnsBuy, dataBuy } from './services/OrderBook/Buy'
import { columnsSell, dataSell } from './services/OrderBook/Sell'
import './style.css'

const ExchangePage = () => {
  const { Panel } = Collapse

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
              <BuyFormComponent />
            </Col>

            {/* Sell */}
            <Col span={8}>
              <SellFormComponent />
            </Col>
          </Panel>
        </Collapse>
      </Row>
    </Row>
  )
}

export default ExchangePage
