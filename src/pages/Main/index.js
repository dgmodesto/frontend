import React, { Component } from 'react';
import api from '../../services/api'

import "../Main/styles.css";

import logo from '../../assets/logo.svg';

import { id } from 'postcss-selector-parser';
// import { Container } from './styles';

export default class Main extends Component {
   state = {

   };
   
    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        this.props.history.push(`./Box/${ response.data._id }`);

   };

   handleInputChange= (e) => {
       this.setState({newBox:  e.target.value});
   };

   render() {
    return (
        <div id="main-container">
           <form onSubmit={ this.handleSubmit }> 
            <img src={logo} alt=""></img>   
            
            <input 
                placeholder="Criar um box" 
                value={this.state.newBox}
                onChange= {this.handleInputChange}
            />
            <button type="submit">Criar</button>
           </form>
        </div>
    );
  }
}
