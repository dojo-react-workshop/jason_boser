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
    render(){
        return (
            <div id='container'>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    render(){
        return (
            <div id='search-bar'>
                <input type='text' placeholder='Search...' />
                <br />
                <input type='checkbox' />
                <label>Only show products in stock</label>
            </div>
        )
    }
}

class ProductTable extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        let currentCategory = "";
        let outputRows = [];

        for(let i=0; i<this.props.products.length; i++){
            let product = this.props.products[i];
            console.log(product);

            if(product.category != currentCategory){
                currentCategory = product.category;
                outputRows.push(
                    <ProductCategoryRow category_name={product.category}/>
                );
            }

            outputRows.push(
                <ProductRow 
                    className={product.stocked? 'in-stock' : 'out-of-stock'}
                    product={product.name} 
                    price={product.price}
                />
            );
        }

        return (
            <div id='product-table'>
                <h3>Name &nbsp;&nbsp;&nbsp; Price</h3>
                {outputRows}
            </div>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render(){
        return (
            <h3>{this.props.category_name}</h3>
        )
    }
}

class ProductRow extends React.Component {
    render(){
        return (
            <p className={this.props.className}>{this.props.product} {this.props.price}</p>
        )
    }
}

ReactDOM.render(
    <FilterableProductTable products={products}/>,
    document.getElementById('root')
)