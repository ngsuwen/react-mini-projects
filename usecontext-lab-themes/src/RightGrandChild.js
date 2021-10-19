import React, {useContext} from "react";
import DataContext from './DataContext';

export default function RightGrandChild() {
  const dataContext=useContext(DataContext)
  return (
    <div style={{backgroundColor: dataContext.background}}>
      <p style={{color: dataContext.color}}>Right Grandchild</p>
    </div>
  );
}
