/**
 * Expense Tracker
 * App.js
 * Ryan Isler - 2017
 *
 * This application accounts for all of your expensing needs.
 * Enter in your product name, and price and see a total
 * price.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  // App constructor
  constructor(props) {
    
    super(props);
    
    // Initialize state
    this.state = {
      
      // Product name
      pName: "",
      
      // Product price
      pPrice: "",
      
      // Total price
      total: Number(0),
      
      // Purchases made
      //  [Product-name, Product-pricie]
      purchases: []
    };
    
    // Bind
    this.nameHandler = this.nameHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
  }
  
  // Handle changing product name field
  nameHandler(e) {
    this.setState({pName: e.target.value });
  }
  
  // Handle changing product name field
  priceHandler(e) {
    this.setState({pPrice: e.target.value });
  }
  
  // Detect if is a number
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  // Adds new product object to list and updates UI
  //purchase() {
  purchase = () => {
    
    // User error checking
    if(this.state.pName == "") {
      alert("Product cannot be empty");
      return;
    }
    
    if(this.state.pPrice == "") {
      alert("Price cannot be empty");
      return;
    }
    
    if(!this.isNumeric(this.state.pPrice)) {
      alert("Price must be number");
      return;
    }
    
    // List update
    this.state.purchases.push({pName: this.state.pName, pPrice: this.state.pPrice});
    
    this.setState({total: Number(this.state.total + Number(this.state.pPrice))});
    this.setState({pName: ""});
    this.setState({pPrice: ""});
    
    // Re-focus for fast entry (form allows enter functionality)
    document.getElementsByClassName("product-name")[0].focus();
    
    //this.forceUpdate();
    
    //console.log(this.state.purchases);
  }
  
  // Render view
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Expense Tracker</h1>
          <hr/>
        </div>
        <div className="in">
          <form action="javascript: void(0);" onSubmit={this.purchase}>
            <input className="product-name" title="Please enter the name of your product" type="text" value={this.state.pName} onChange={this.nameHandler} name="product-name" placeholder="Product" />
            <input className="product-price" title="Please enter the price of your product (e.g. 2500)" type="text" value={this.state.pPrice} onChange={this.priceHandler} name="product-price" placeholder="$" />
            <p id="expense-total">${this.state.total}</p>
            <input className="product-submit" title="Add to expense" type="submit" value="Purchase" />
          </form>
        </div>
        <hr/>
        <div className="product-list">
        {
          this.state.purchases.map( (currentProduct) => 
            (
              <div className="product-list-item">
                <p className="product-list-left">{currentProduct.pName}</p>
                <p className="product-list-right">${currentProduct.pPrice}</p>
              </div>
            )
          )
        }
        </div>
      </div>
    );
  }
}

// Export react component application
export default App;
