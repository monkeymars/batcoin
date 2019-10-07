import React from 'react'

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
          <b style={{ color: 'rgb(26, 203, 158)' }}>{price}</b>
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
    dataIndex: 'total'
  }
]

export const dataSell = [
  {
    key: '1',
    price: '112,502,000',
    amount: '0.2932',
    total: '32,985,586'
  },
  {
    key: '2',
    total: '112,501,000',
    amount: '0.0004',
    price: '45,000'
  },
  {
    key: '3',
    total: '112,147,000',
    amount: '0.0003',
    price: '33,644'
  },
  {
    key: '4',
    total: '111,116,000',
    amount: '0.9030',
    price: '100,337,748'
  },
  {
    key: '5',
    total: '110,625,000',
    amount: '0.0004',
    price: '44,250'
  },
  {
    key: '6',
    total: '110,242,000',
    amount: '0.3055',
    price: '33,678,931'
  }
]
