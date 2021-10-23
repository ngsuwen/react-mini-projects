import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"

const stockArr = ['AAPL', 'MSFT', 'GOOGL', 'FB', 'ORCL', 'INTL']


function Main() {
  const [state, setState] = useState([])

  useEffect(() => {
    async function display() {
      const newArr = []
      for (let stock of stockArr) {
        const activeStocks = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=bfee204fee91f7409e1d3bf35ddbc93f`
        const res = await fetch(activeStocks)
        const json = await res.json()
        newArr.push(json[0])
      }
      setState(newArr)
    }
    display();
  }, [])

  const stockList = state.map((element, index) => <Dashboard key={index} stock={element} />)

  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/stocks">
        <table>
          <tbody>
            <tr>
              <th>Company Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
            {stockList}
          </tbody>
        </table>
      </Route>
      <Route exact path="/stocks/:stock">
        <Stock list={state} />
      </Route>
      <Route exact path="/about" component={About} />
    </main>
  )
}

export default Main
