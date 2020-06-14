import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

export default function RoutesHead() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const [titleSortBy, setTitleSortBy] = useState('времени');
  const [hideBlock, setHideBlock] = useState(true);
  const [showBy, setShowBy] = useState();

  const { total_count } = routes;
  const arrSortBy = [
    { name: 'date', title: 'времени'},
    { name: 'price', title: 'стоимости'},
    { name: 'duration', title: 'длительности'},
  ];

  const arrShowBy = [5, 10, 20];

  useEffect(() => {
    setShowBy(filtr.limit);
  }, [filtr])

  const clickSortBy = () => {
    console.log('clickkk');
    setHideBlock(false);
  }

  const changeSortBy = (value) => {
    const { name, title } = value;
    setHideBlock(true);
    dispatch(fetchDirectionChangeFiltr({
      sort: name,
    }));
    setTitleSortBy(title);
  }

  const changeShowBy = (value) => {
    setShowBy(value);
    dispatch(fetchDirectionChangeFiltr({
      limit: value,
      offset: 0,
    }));
  }

  return (
    <section className="trains main-block">
      <section className="trains_head">
        <div className="trains-list_section-title">
          <p className="section-name">найдено: </p><span className="trains-amount">{total_count}</span>
        </div>

        <div className="trains-list_sort-by">
          <p className="sort-by">сортировать по: </p>
          <div className="sorting">
            <span onClick={clickSortBy}>{titleSortBy}</span>
            <ul className={`sorting-list ${hideBlock ? 'hiden-block' : ''}`}>
              {arrSortBy.map((itemSort, index) => (
                <li className="sorting-list-item" name={itemSort.name} onClick={()=>changeSortBy({ name: itemSort.name, title: itemSort.title})} key={index}>{itemSort.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="trains-list_show-by">
          <p className="show-by">показывать по:</p>
          <ul className="show-by-list">
            {arrShowBy.map((item, index) => (
              <li className={showBy === Number(item) ? 'active' : ''} onClick={() => changeShowBy(item)} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
