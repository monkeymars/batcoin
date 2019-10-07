import React from 'react'
import formatCurrency from 'format-currency'

const opts = { format: '%v' }
export const columnsSell = [
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

export const dataSell = [
  {
    key: '1',
    price: 112502000,
    amount: 0.2932,
    total: 32985586
  },
  {
    key: '2',
    total: 112501000,
    amount: 0.0004,
    price: 45000
  },
  {
    key: '3',
    total: 112147000,
    amount: 0.0003,
    price: 33644
  },
  {
    key: '4',
    total: 111116000,
    amount: 0.903,
    price: 100337748
  },
  {
    key: '5',
    total: 110625000,
    amount: 0.0004,
    price: 44250
  },
  {
    key: '6',
    total: 110242000,
    amount: 0.3055,
    price: 33678931
  }
]
