import React, { FC, useState } from 'react';

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
        setViewPercentage(viewPercentage - percentage);
        break;
    }
  }
  
  return (
    <header>
      <div>
        <h2>Categories</h2>
        <div>{amount}</div>
      </div>

      <div>
        <button>list view</button>
        <button>\/</button>
        <div>
          <button onClick={() => handleChangePercentage('decrease', 20)}>-</button>
          <div>{viewPercentage}</div>
          <button onClick={() => handleChangePercentage('increase', 20)}>+</button>
        </div>
      </div>
    </header>
  );
}