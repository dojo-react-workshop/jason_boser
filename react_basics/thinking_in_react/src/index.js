'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component {
    constructor(){
        super();

        this.state ={
            searchText:"",
            inStockFilter:false
        }
    }

    updateSearchText = (text) => {
        console.log('updating search text to ' + text);
        this.setState({
            searchText:text
        })
    }

    updateInStockFilter = (filter) => {
        console.log('updating filter to ' + filter);
        this.setState({
            inStockFilter:filter
        })
    }

    render(){
        let products = this.props.products.filter((current) => {
            if(current.name.toUpperCase().startsWith(this.state.searchText.toUpperCase())){
                //search text matches
                if(this.state.inStockFilter){
                    //display only if in stock
                    return current.stocked;
                }else{
                    //display everything
                    return true;
                }
            }else{
                //search text didn't match, don't display
                return false;
            }
        })

        return (
            <div id='container'>
                <SearchBar 
                    updateSearchText={this.updateSearchText}
                    updateInStockFilter={this.updateInStockFilter}
                />
                <ProductTable products={products}/>
            </div>
        )
    }
}

const SearchBar = (props) => {

    return (
        <div id='search-bar'>
            <input type='text' 
                placeholder='Search...' 
                onChange={(input) => props.updateSearchText(input.target.value)}
            />
            <br />
            <input type='checkbox' 
                onChange={(input) => props.updateInStockFilter(input.target.checked)}
            />
            <label>Only show products in stock</label>
        </div>
    )
}

const ProductTable = (props) => {

    let currentCategory = "";
    let outputRows = [];

    for(let i=0; i<props.products.length; i++){
        let product = props.products[i];

        if(product.category != currentCategory){
            currentCategory = product.category;
            outputRows.push(
                <ProductCategoryRow 
                    key={Math.random()*10000}
                    category_name={product.category}
                />
            );
        }

        outputRows.push(
            <ProductRow 
                key={Math.random()*10000}
                className={product.stocked? 'in-stock' : 'out-of-stock'}
                product={product.name} 
                price={product.price}
            />
        );
    }

    return (
        <div id='product-table'>
            <h3>Name</h3>
            <h3>Price</h3>
            {outputRows}
        </div>
    )
}

const ProductCategoryRow = (props) => {
    return (
        <h4>{props.category_name}</h4>
    )
}

const ProductRow = (props) => {
    return (
        <div>
            <p className={props.className}>{props.product}</p>
            <p className={props.className}>{props.price}</p>
        </div>
    )
}

ReactDOM.render(
    <FilterableProductTable products={products}/>,
    document.getElementById('root')
)