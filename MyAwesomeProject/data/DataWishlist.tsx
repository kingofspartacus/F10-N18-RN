const DATA = [
    {
      id: 1,
      photo: 'https://salt.tikicdn.com/ts/product/35/f5/fe/90414a62a6455d2eb4f2fe9004150401.jpg',
      name: 'T-Shirt',
      price: '₫600.000',
      color: 'ORANGE',
      size: 'ONE SIZE',
      qty: 'QTY :3'
    },
    {
      id: 2,
      photo: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/2/19/881838/1-01.JPG',
      name: 'T-Shirt',
      price: '₫899.000',
      color: 'GREEN',
      size: 'M',
      qty: 'QTY :4'
    },
    {
      id: 3,
      photo: 'data:image/jpeg;base64,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',
      name: 'Hoodie Marvel',
      price: '₫600.000',
      color: 'BLACK',
      size: 'XL',
      qty: 'QTY :1'
    }
  ]
  export default DATA