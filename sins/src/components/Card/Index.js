import React, { useState } from 'react';
import '../Card/Style.css'


// fetch('http://localhost:3001/all')
//   .then(response => response.json())
//   .then(data => console.log(data));
export default class Card extends React.Component {
  state = {
    loading: true,
    sin: null
  }

  async another(){
    const url = "http://localhost:3001/random"
    const response = await fetch(url);
    const data = await response.json()
    this.setState({ sin: data.data[0].bingo, loading: false })
    console.log(data.data[0].bingo)
  }


  async componentDidMount() {
    this.another()
  }

  render() {
    return (
      <div className='cardBody'>
        {this.state.loading || !this.state.sin ?  <div>Loading</div> : <div>{this.state.sin}</div>}
      </div>
    )
  }




}







