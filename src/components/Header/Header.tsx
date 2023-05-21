import React, { FC, useState } from 'react';
import './Header.scss';

type Props = {
  amount: number;
}

export const Header: FC<Props> = ({amount}) => {
  const [viewPercentage, setViewPercentage] = useState(100);

  const handleChangePercentage = (action: 'decrease' | 'increase', percentage: number) => {
    switch (action) {
      case 'increase':
        setViewPercentage(viewPercentage + percentage);
        break;

      case 'decrease':
        if (viewPercentage <= 0) {
          setViewPercentage(0);
        } else {
          setViewPercentage(viewPercentage - percentage);
        }
        break;
    }
  }
  
  return (
    <header className='header'>
      <div className='categories'>
        <h2>Categories</h2>
        <div className='amount-circle'>{amount}</div>
      </div>

      <div className='btns-container'>
        <button className='btn list-view'>list view</button>
        <button className='btn to-center'>\/</button>
        <div className='zoom-btns-container'>
          <button onClick={() => handleChangePercentage('decrease', 20)} className='btn btn-minus'>-</button>
          <div className='percentage'>{viewPercentage}</div>
          <button onClick={() => handleChangePercentage('increase', 20)} className='btn btn-plus'>+</button>
        </div>
      </div>
    </header>
  );
}