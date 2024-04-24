import React from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort";
import Categories from "../../components/Categories";
import DishBlock from "../../components/DishBlock/DishBlock";
import Skeleton from "../../components/DishBlock/Skeleton";
import { useAppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { selectPizzaData } from "../../redux/pizza/selectors";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../../redux/filter/slice";
import { fetchPizzas } from "../../redux/pizza/asyncActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

 const getPizzas = async () => {
    const sortBy = sort && sort.sortProperty.replace('-', '');
    const order = sort && sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
  
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
  
    window.scrollTo(0, 0);
  };
  

  React.useEffect(() => {
    if (sort) {
      getPizzas();
    }
  }, [categoryId, sort && sort.sortProperty, searchValue, currentPage]);
  
  

  const pizzas = items.map((obj) => <DishBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        {sort && <Sort value={sort} />}
      </div>
      <h2 className="content__title">Все блюда</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
