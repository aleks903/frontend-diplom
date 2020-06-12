import React, { useState } from 'react';

export default function DropDownFiltr(props) {
  const [hideBlock, setHideBlock] = useState(true);
  const { title, classIcon } = props;

  const handleChange = () => {
    setHideBlock(!hideBlock);
  };


  return (
    <React.Fragment>
      <div className="time-filter_title-container">
        <p className="time-filter-main_title">
          <span className={classIcon}></span>{title}
        </p>
        <span className={hideBlock ? 'closeDown-vector' : 'closeUp-vector'} onClick={handleChange}></span>
      </div>
      <div className={hideBlock ? 'hiden-block' : ''}>
        {props.children}
      </div>
    </React.Fragment>
  );
}