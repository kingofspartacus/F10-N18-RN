const initState = {
  quantity: 1,
  cart: [],
};

export default function cartReducer(state = initState, action: { type: any; detail: { _id: any; quantity: number; }; data: { _id: any; }; }) {


  return state;
}

