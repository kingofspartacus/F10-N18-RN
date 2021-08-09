const initState = {
    count: 1,
    cart: [],
};
interface data {
    id: any;
    quantity: any;
    e: any;
    action: any;
  }

export default function Cart(state = initState, action) {
    switch (action.type) {
        case "ADD_CART":
          console.log(action) // => { type: 'ADD_CART', detail: detail }
        //   const checkExist = state.cart.find(e => e.id === action.ProductDescrible.id)
        //   const newCart = checkExist ?
        //     // truong hợp đã có sản phẩm đấy trong list
        //     state.cart?.map(e => {
        //       if (e.id === action.ProductDescrible.id) {
        //         return ({ ...e, quantity: e.quantity + 1 })
        //       }
        //       return e
        //     })
        //     // truong hợp đã có sản phẩm đấy không nằm trong list
        //     : [...state.cart, { ...action.detail, quantity: 1 }]
    
        //   return {
        //     ...state,
        //     cart: newCart
        //   };
}
