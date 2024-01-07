import React from 'react';
import './Change.css';

interface ChangeProps {
  re: string;
}

const Change: React.FC<ChangeProps> = (props) => {
  return (
    <div className='Change'>{props.re}</div>
  );
};

export default Change;

