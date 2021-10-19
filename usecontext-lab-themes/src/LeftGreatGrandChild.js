import React, {useContext} from "react";
import DataContext from './DataContext';

export default function LeftGreatGrandChild() {
  const dataContext=useContext(DataContext)
  return (
    <div style={{backgroundColor: dataContext.background}}>
      <p style={{color: dataContext.color}}>Left Great Grandchild</p>
    </div>
  );
}
