import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../actions/directionSearchAction'

export default function CheckBox(props) {
  const { labelClass, label, paramsName } = props;
  const { filtr } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();

  const handleCecked = (event) => {
    const { checked } = event.currentTarget;
    dispatch(fetchDirectionChangeFiltr({
      [paramsName]: checked,
    }));
  }

  return (
    <li>
      <span className={labelClass}></span>
      <p>{label}</p>
      <div>
        <label className="switch">
          <input type="checkbox"
            checked={filtr[paramsName] ? filtr[paramsName] : false}
            onChange={handleCecked}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </li>
  );
}
