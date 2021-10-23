import React from "react";
import { Link } from 'react-router-dom';

function Dashboard(props) {
  const styles={
    color: props.stock.changesPercentage>0?'green':'red'
  }
  return (
    <>
      <tr>
        <td><Link to={`/stocks/${props.stock.symbol}`}>{`${props.stock.name} (${props.stock.symbol})`}</Link></td>
        <td>{props.stock.price}</td>
        <td style={styles}>{`${Number(props.stock.change).toFixed(2)} (${Number(props.stock.changesPercentage).toFixed(2)}%)`}</td>
      </tr>
    </>
  );
}

export default Dashboard