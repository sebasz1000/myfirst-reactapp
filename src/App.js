import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
const element = (

  <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

);*/
class ProductRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const price = this.props.product.price;
    const stocked = this.props.product.stocked;
    var name = stocked ? 
       this.props.product.name : 
        <span style={{color:'red'}}>
          {this.props.product.name}
        </span>
        
    return(
      <li>
        {name} - {price}
      </li>
    );
  }
}

function ProductCategoryRow(props){
  return(
  <li><strong>{props.category}</strong></li>
  );
}


class ProductTable extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    var rows = [];
    var products = this.props.products;
    var lastCategory = null;
    var filterWorld = this.props.filterText;
    var inStockOnly = this.props.inStockOnly;
    products.forEach(function(product){
        var productCategoryRow, productRow;
        if(!product.name.includes(filterWorld) || (inStockOnly && !product.stocked)){
           return console.log(product);    
        }
        if(product.category !== lastCategory){
            productCategoryRow = <ProductCategoryRow category={product.category} key={product.category} />;
            rows.push(productCategoryRow);
          }
          productRow = <ProductRow product={product} key={product.name}/>;
          rows.push(productRow);
          lastCategory = product.category;
    });
    return(
      <ul>
      <li>
        <span style={{color:'#888'}}>Name - Price</span>
      </li>
        {rows}
      </ul>
    );
  
  }
}
                     
    


class SearchBar extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
    <form>
      
        <input type="text" id="searchValue" name="filterText" placeholder="Search..." onChange={this.props.onChange} value={this.props.filterText} />
        <br/>
        <input type="checkbox" id="showinStock" name="inStockOnly" checked={this.props.inStockOnly} onChange={this.props.onChange}/>
        {' '}
        <label htmlFor="showinStock"> Only show products in stock</label>
    </form>
    );
  }
}


const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterText : '',
      inStockOnly : false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    const target = event.target;
    //alert(target.type);
    var value = target.type === 'text' ? target.value : target.checked;
    this.setState( { [target.name] : value } );
  }
  alertMessage(event){
    alert(event.target.type);
  }
  render(){
  return(
  <div id="filterableProductTable">
    <SearchBar 
      filterText={this.state.filterText} 
      inStockOnly={this.state.inStockOnly}
      onChange={this.handleChange}
    />
    <ProductTable 
      products={this.props.products}
      filterText={this.state.filterText}
      inStockOnly={this.state.inStockOnly}/>
    <button id="piiiindee" className="weaa" onClick={this.alertMessage}>Alert!</button>
  </div>
  );
}
}
    

function App(){
  return <FilterableProductTable products={PRODUCTS}/>;
}




/*class Clock extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { date : new Date() };
  }
  
  componentDidMount(){
     this.timer = setInterval(
      () => this.thick()
      ,1000
    );
  }
  
  componentDidUnmount(){
    clearInterval(this.timer);
  }
  
  thick(){
    this.setState( { date : new Date() } );
  }
  
  render(){
    return (
    <div>
      <h1>This is the time { this.state.date.toLocaleTimeString() }</h1>
    </div>
    )
  }
}*/

export default App;
