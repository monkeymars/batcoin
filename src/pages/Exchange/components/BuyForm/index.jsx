/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Icon } from 'antd'
import formatCurrency from 'format-currency'

const BuyFormComponent = ({ priceBuy }) => {
  const optsBTC = { format: '%v %c', code: 'BTC', maxFraction: 4 }
  const [priceValue, setPriceValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const estimatedAmount = totalValue / priceValue
  const fee = estimatedAmount * (0.15 / 100)
  const netAmount = estimatedAmount - fee

  useEffect(() => {
    setPriceValue(priceBuy)
  }, [priceBuy])

  return (
    <div className="buyBox">
      <div>
        <Form>
          <Form.Item>
            <div>
              <div className="text-label">Total (IDR)</div>
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
                min={0}
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
                <span className="est-btc-amount text-bold">
                  Estimated Amount
                </span>
                <span className="btc-amount text-bold">
                  {formatCurrency(estimatedAmount, optsBTC)}
                </span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">
                  Fee (Maker 0.15% - Taker 0.15%) <Icon type="info-circle" />
                </span>
                <span className="btc-amount">
                  {formatCurrency(fee, optsBTC)}
                </span>
              </section>
              <section className="desc-group">
                <span className="est-btc-amount">Net buying amount</span>
                <span className="btc-amount">
                  {formatCurrency(estimatedAmount - fee, optsBTC)}
                </span>
              </section>
            </div>
            <Button
              style={{ marginTop: 20 }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                if (netAmount <= 0 || isNaN(netAmount)) {
                  alert('Oops! cant order zero net amount or less')
                } else {
                  alert(
                    JSON.stringify({
                      estimatedAmount: formatCurrency(estimatedAmount, optsBTC),
                      fee: formatCurrency(fee, optsBTC),
                      netBuyingAmount: formatCurrency(netAmount, optsBTC)
                    })
                  )
                }
              }}
            >
              <strong>BUY</strong>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default BuyFormComponent
