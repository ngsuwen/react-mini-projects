import React, {useContext} from "react";
import LeftGrandChild from './LeftGrandChild';
import DataContext from './DataContext';

export default function LeftChild() {
  const dataContext=useContext(DataContext)
  return (
    <div>
      <p style={{color: dataContext.color, backgroundColor: dataContext.background}}>Left Child</p>
      <LeftGrandChild />
    </div>
  );
}
