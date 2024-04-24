export const SortPropertyEnum = {
  RATING_DESC: 'rating',
  RATING_ASC: '-rating',
  TITLE_DESC: 'title',
  TITLE_ASC: '-title',
  PRICE_DESC: 'price',
  PRICE_ASC: '-price',
};

export const Sort = {
  name: String,
  sortProperty: String,
};

export const FilterSliceState = {
  searchValue: String,
  categoryId: Number,
  currentPage: Number,
  sort: Sort,
};
