import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import './Align.css';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default class ClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={count1:0};
    }
    handleIncrement=()=>{
        return(
          this.setState(prevState=>({count1:prevState.count1+1}))
        )
    }
    handleDecrement=()=>{  
        if (this.state.count1>0){
            return(this.setState(prevState=>({count1:prevState.count1-1})))
        }
        else{
            return(this.setState(prevState=>({count1:prevState.count1=0})))
        }
    }
    handleCart = () => {
      alert( this.state.count1+" "  + 'dress added');
  };
    
  render() {
    
    return (
      <>
        <table>
        <tbody>
        <tr>
        Wishlist
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <td width="700px">{this.props.item}</td>
        

      <button onClick={this.handleIncrement}> + </button>
      {this.state.count1}
      <button onClick={this.handleDecrement}> - </button>
      
      
      <td width="700px" height="2px">{this.props.desc}</td>
      <td><button onClick={this.handleCart}>Add to Cart</button></td>
      </tr>
      </tbody>
      </table>
      <div className='second'>
  </div>
      </>
    )
  }
}