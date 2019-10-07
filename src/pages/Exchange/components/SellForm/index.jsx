import React from 'react'
import { Form, Input, Button, Icon } from 'antd'

const SellFormComponent = () => {
  return (
    <div className="buyBox">
      <div>
        <Form>
          <Form.Item>
            <div>
              <div className="text-label">Amount (BTC)</div>
              <Input type="number" placeholder="" />
            </div>
            <div>
              <div className="text-label">Price IDR</div>
              <Input type="number" placeholder="" />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="detail-info">
              <section className="desc-group">
                <span className="est-btc-amount text-bold">
                  Estimated Amount
                </span>
                <span className="btc-amount text-bold">0 BTC</span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">
                  Fee (Maker 0.15% - Taker 0.15%) <Icon type="info-circle" />
                </span>
                <span className="btc-amount">0 BTC</span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">Net selling amount</span>
                <span className="btc-amount">0 BTC</span>
              </section>
            </div>
            <Button
              style={{ marginTop: 20 }}
              type="danger"
              htmlType="submit"
              className="login-form-button"
            >
              <strong>SELL</strong>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SellFormComponent
