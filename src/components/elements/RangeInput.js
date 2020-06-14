import React from 'react';
import InputRange from 'react-input-range';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../actions/directionSearchAction';

export default function RangeInput(props) {
  const { filtr } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const {
    min,
    max,
    step,
    format,
    startMin,
    startMax,
    classEl,
    paramsName,
  } = props;

  const onRangeChange = (value) => {
    dispatch(fetchDirectionChangeFiltr({
      [paramsName.forMinValue]: value.min,
      [paramsName.forMaxValue]: value.max,
    }));
  }

  return (
    <InputRange
    classNames={classEl}
    formatLabel={value => format === 'time' ? `${value}:00` : value}
    minValue={min}
    maxValue={max}
    step={step}
    value={{
        min: filtr[paramsName.forMinValue] || startMin,
        max: filtr[paramsName.forMaxValue] || startMax,
    }}
    onChange={value => onRangeChange(value)} />
  );
}
