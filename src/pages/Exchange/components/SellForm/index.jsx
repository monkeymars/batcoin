/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Icon } from 'antd'
import formatCurrency from 'format-currency'

const SellFormComponent = ({ priceSell }) => {
  const optsIDR = { format: '%v %c', code: 'IDR' }
  const [priceValue, setPriceValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const total = totalValue * priceValue
  const fee = total - total * (0.15 / 100)
  const netAmount = total - (total - total * (0.15 / 100))

  useEffect(() => {
    setPriceValue(priceSell)
  }, [priceSell])

  return (
    <div className="buyBox">
      <div>
        <Form>
          <Form.Item>
            <div>
              <div className="text-label">Amount (BTC)</div>
              <Input
                type="number"
                placeholder=""
                min={0}
                onChange={event => {
                  setTotalValue(event.target.value)
                }}
                value={totalValue}
              />
            </div>
            <div>
              <div className="text-label">Price IDR</div>
              <Input
                type="number"
                placeholder=""
                onChange={event => {
                  setPriceValue(event.target.value)
                }}
                value={priceValue}
              />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="detail-info">
              <section className="desc-group">
                <span className="est-btc-amount text-bold">Total</span>
                <span className="btc-amount text-bold">
                  {formatCurrency(total, optsIDR)}
                </span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">
                  Fee (Maker 0.15% - Taker 0.15%) <Icon type="info-circle" />
                </span>
                <span className="btc-amount">
                  {formatCurrency(total - fee, optsIDR)}
                </span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">Net selling amount</span>
                <span className="btc-amount">
                  {formatCurrency(netAmount, optsIDR)}
                </span>
              </section>
            </div>
            <Button
              style={{ marginTop: 20 }}
              type="danger"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                if (netAmount <= 0 || isNaN(netAmount)) {
                  alert('Oops! cant order zero net amount or less')
                } else {
                  alert(
                    JSON.stringify({
                      estimatedAmount: formatCurrency(total, optsIDR),
                      fee: formatCurrency(fee, optsIDR),
                      netBuyingAmount: formatCurrency(netAmount, optsIDR)
                    })
                  )
                }
              }}
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
