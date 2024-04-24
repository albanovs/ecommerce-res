export const CartItem = {
    id: String,
    title: String,
    price: Number,
    imageUrl: String,
    type: String,
    size: Number,
    count: Number,
  };
  
  export const CartSliceState = {
    totalPrice: Number,
    items: [CartItem],
  };
  