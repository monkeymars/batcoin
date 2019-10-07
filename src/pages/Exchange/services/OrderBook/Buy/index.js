import React from 'react'

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
          <b style={{ color: 'rgb(255, 88, 88)' }}>{price}</b>
        </a>
      </span>
    )
  }
]

export const dataBuy = [
  {
    key: '1',
    total: '34,312,924',
    amount: '0.2931',
    price: '117,069,000'
  },
  {
    key: '2',
    total: '2,165,795',
    amount: '0.0185',
    price: '117,070,000'
  },
  {
    key: '3',
    total: '106,827,609',
    amount: '0.9030',
    price: '118,303,000'
  },
  {
    key: '4',
    total: '36,486,749',
    amount: '0.3054',
    price: '119,472,000'
  },
  {
    key: '5',
    total: '48,000',
    amount: '0.0004',
    price: '120,000,000'
  },
  {
    key: '6',
    total: '60,500',
    amount: '0.0005',
    price: '120,999,000'
  }
]
