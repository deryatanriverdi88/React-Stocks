import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state ={
    stocks: [], 
    stockItem: [],
    filter: 'All'
  }

  // Fetching thes stocks, and set the state of stocks with the value is back from fetch
  componentDidMount = ()=>{
   fetch('http://localhost:3000/stocks')
   .then(res =>  res.json())
   .then(stockObject => {
    //  console.log(stockObject)
    this.setState({
      stocks: stockObject
    })
   })
  }

  // We get the object from stockcontainer by clicking it
  // We then store it in our state(stockitem) by checking with includes method
  // If we ever clicked same object
  // If we didnt, that we spread the other objects and the new one 

  handleClick =(e, stockObject)=>{
    // console.log(stockObject, stockObject.id )
    if(!this.state.stockItem.includes(stockObject)){
      this.setState({
        stockItem: [stockObject, ...this.state.stockItem]
      })
    }
  }

  handleRemove =(e, stockObject)=>{
    // console.log('handle remove')  
    // console.log(index, newStockItem)

    // We get the item when it is clicked
    // Then we check if the item in state and clicked item is same 
    // if that so, dont add in to thee state
    // Only add into state when both are not the same

    this.setState({
      stockItem : this.state.stockItem.filter(stock => stock !== stockObject)
    })
  }

  // First, we get the selected value from form
  // And we set the value we get to our state(filter)
  handleFilterButton = (e) => {
    // console.log('filter', e.target.value, e.target.name)
    this.setState({
      filter: e.target.value
    })
  }

  // Then we use that state, to check which object has a same type
  // If it is matched with all, it renders everything
  
  filteredStocks =(stocks)=> {

    if(this.state.filter === "All")
    {return this.state.stocks}
    else {
    return this.state.stocks.filter(stock =>  stock.type === this.state.filter)
    }
  }
      
   



  render() {
    console.log(this.state.filter)
    // console.log(this.state.stocks)
    // console.log(this.state.stockItem)
    return (
      <div>
        <SearchBar handleFilterButton={this.handleFilterButton}/>

          <div className="row">
            <div className="col-8">
              {/* send the state of stocks to StockContainer */}
              <StockContainer stocks={this.filteredStocks(this.state.stocks)} 
                              handleClick={this.handleClick}
                              />
            </div>
            <div className="col-4">
              {/* We send our stockItem to portofolio component, so that it can render
              the item whenever something clicked on stock component */}
              <PortfolioContainer stockItem={this.state.stockItem}
                                  handleClick={this.handleRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
