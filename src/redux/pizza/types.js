export const Pizza = {
  id: String,
  title: String,
  price: Number,
  imageUrl: String,
  sizes: Array,
  types: Array,
  rating: Number,
};

export const Status = {
  LOADING: 'loading',
  SUCCESS: 'completed',
  ERROR: 'error',
};

export const SearchPizzaParams = {
  sortBy: String,
  order: String,
  category: String,
  search: String,
  currentPage: String,
};

export const PizzaSliceState = {
  items: [Pizza],
  status: String,
};
