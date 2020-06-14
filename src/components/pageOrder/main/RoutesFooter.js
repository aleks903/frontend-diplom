import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

export default function RoutesFooter() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const { total_count } = routes;
  const { limit, offset } = filtr;

  const [activePage, setActivePage] = useState();
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

  const selectPage = (index) => {
    console.log(index);
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
          {[...Array(amountPage)].map((i, index) => (
            <li
              className={index === activePage ? 'active-page' : 'page'}
              key={index}
              onClick={()=>selectNumPage(index)}
            >
                {index + 1}
              </li>
          ))}
        </ul>
        <button className="angle-forward" onClick={()=>changeNumPage(1)}></button>
      </section>}
    </React.Fragment>
  );
}
