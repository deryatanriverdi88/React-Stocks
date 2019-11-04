import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.handleClick)
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here, do map here(always return the value!!!), 
          //send props to Stock component
          this.props.stocks.map(stock => {
           return <Stock stock={stock} key={stock.id}
                         handleClick={this.props.handleClick} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
