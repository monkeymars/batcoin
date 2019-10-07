import React from 'react'
import formatCurrency from 'format-currency'

const opts = { format: '%v' }

export const columnsBuy = [
  {
    title: 'Total (IDR)',
    dataIndex: 'total'
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
          href="#"
          onClick={e => {
            e.stopPropagation()
            // eslint-disable-next-line no-console
            console.log(price)
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

export const dataBuy = [
  {
    key: '1',
    total: 34312924,
    amount: 0.2931,
    price: 117069000
  },
  {
    key: '2',
    total: 2165795,
    amount: 0.0185,
    price: 117070000
  },
  {
    key: '3',
    total: 106827609,
    amount: 0.903,
    price: 118303000
  },
  {
    key: '4',
    total: 36486749,
    amount: 0.3054,
    price: 119472000
  },
  {
    key: '5',
    total: 48000,
    amount: 0.0004,
    price: 120000000
  },
  {
    key: '6',
    total: 60500,
    amount: 0.0005,
    price: 120999000
  }
]
