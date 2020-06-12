import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../actions/directionSearchAction';

// import 'react-input-range/lib/css/index.css';

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
  
  const [valueMinMax, setValueMinMax] = useState({
    min: startMin,
    max: startMax,
  });

  const onRangeChange = (value) => {
    console.log(value);
    setValueMinMax(value);

    dispatch(fetchDirectionChangeFiltr({
      [paramsName.forMinValue]: value.min,
      [paramsName.forMaxValue]: value.max,
    }));
  }
console.log(classEl);
// const classEl = {
//   activeTrack: 'line-colored',
//   // disabledInputRange: string,
//   // inputRange: 'circle-container',
//   // labelContainer: 'max-cost',
//   maxLabel: 'max-cost',
//   minLabel: 'hiden-block',
//   slider: 'circle-1',
//   // sliderContainer: 'line-gray',
//   track: 'line-gray',
//   valueLabel: 'limit-cost',
// }


  return (
    <InputRange
    classNames={classEl}
    formatLabel={value => format === 'time' ? `${value}:00` : value}
    minValue={min}
    maxValue={max}
    step={step}
    value={valueMinMax}
    onChange={value => onRangeChange(value)} />
  );
}
