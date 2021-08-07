const initState = {
  cd: 1,
  cart: [],
};
interface data {
  id: any;
  quantity: any;
  e: any;
  action: any;
}
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log('action', action) // => { type: 'ADD_CART', detail: detail }
      const checkExist = state.cart.find(e => e.id === action.detail.id)
      const newCart = checkExist ?
        // truong hợp đã có sản phẩm đấy trong list
        state.cart?.map(e => {
          if (e.id === action.detail.id) {
            return ({ ...e, quantity: e.quantity + 1 })
          }
          return e
        })
        // truong hợp sản phẩm đấy không nằm trong list
        : [...state.cart, { ...action.detail, quantity: 1 }]

      return {
        ...state,
        cart: newCart
      };
    case "REDUCE_ITEM":
      console.log(action) // => { type: 'CHANGE_QUANTITY', data: item, }
      const newCartReduce = action.detail.quantity === 1
        ? state.cart.filter(e => e.id !== action.detail.id) :
        // truong hợp đã có sản phẩm đấy trong list
        state.cart?.map(e => {
          if (e.id === action.detail.id) {
            return ({ ...e, quantity: e.quantity - 1 })
          }
          return e
        })

      return {
        ...state,
        cart: newCartReduce
      };
    case "REMOVE_ALL":
      console.log(action) // => { type: 'REMOVE_ALL' }
      return {
        ...state,
        cart: []
        // quantity: state.quantity + 1
      };
    case "REMOVE_ITEM":
      console.log(action) // => { type: 'REMOVE_ALL' }
      return {
        ...state,
        cart: state.cart.filter(e => e.id !== action.data.id)
        // quantity: state.quantity + 1
      };

    default:
      return state;
  }
}
