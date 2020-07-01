import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

export default function RoutesFooter() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const { total_count } = routes;
  const { limit, offset } = filtr;

  const [activePage, setActivePage] = useState(0);
  const [arrayPages, setArrayPages] = useState();
  const amountPage = Math.ceil(total_count / limit);

  useEffect(() => {
    setActivePage(Math.ceil(offset/limit));
  }, [filtr])

  const selectNumPage = (index) => {
    selectPage(index);
  }

  const changeNumPage = (value) => {
    console.log(value);
    const numPage = activePage + value;
    console.log(numPage);
    if (numPage < 0) {
      selectPage(0);
    } else if (numPage >= amountPage) {
      selectPage(amountPage - 1);
    } else {
      selectPage(numPage);
    };
  }

  useEffect(() => {
      const sheetsABItem = 2;
      const arrNumbPage = [
        {index: 0, title: 1},
      ];
      for (let itemNum = activePage - sheetsABItem; itemNum <= activePage + sheetsABItem; itemNum += 1 ) {
        if (itemNum <= 0 || itemNum >= amountPage - 1) {
          continue;
        } else if (itemNum === activePage - sheetsABItem || itemNum === activePage + sheetsABItem) {
          arrNumbPage.push({index: itemNum, title: '...'});
          continue;
        } else {
          arrNumbPage.push({index: itemNum, title: itemNum + 1});
        } 
      }
      arrNumbPage.push({index: amountPage - 1, title: amountPage});

      setArrayPages(arrNumbPage);
  }, [activePage])

  const selectPage = (index) => {
    setActivePage(index);
    dispatch(fetchDirectionChangeFiltr({
      offset: limit * index,
    }));
  }

  return (
    <React.Fragment>
      {(amountPage > 1 ) && <section className="pagination-container">
        <button className="angle-back" onClick={()=>changeNumPage(-1)}></button>
        <ul className='pagination-list'>
        {arrayPages && arrayPages.map((item) => (
            <li
              className={item.index === activePage ? 'active-page' : 'page'}
              key={item.index}
              onClick={()=>selectNumPage(item.index)}
            >
                {item.title}
              </li>
          ))}
        </ul>
        <button className="angle-forward" onClick={()=>changeNumPage(1)}></button>
      </section>}
    </React.Fragment>
  );
}
