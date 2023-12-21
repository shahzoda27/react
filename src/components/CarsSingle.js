import React, { Component } from 'react'
export default class CarsSingle extends Component {
  state={
    cars:[
      {id:1, name:"Gentra",price:"$20000",color:"white",year:"2022",position:"3",number:"777"},
      {id:2, name:"Cobalt",price:"$10000",color:"black",year:"2019",position:"2",number:"555"},
      {id:3, name:"Monza",price:"$190000",color:"grey",year:"2023",position:"1",number:"888"},
    ],
  };
  render() {
    const url = window.location.href.split("/")
    let index = Number(url[4])
    const {cars} = this.state
    return (
      <div>
        <h1>{cars[index].name}</h1>
        <h1>{cars[index].price}</h1>
        <h1>{cars[index].color}</h1>
        <h1>{cars[index].year}</h1>
        <h1>{cars[index].position}</h1>
        <h1>{cars[index].number}</h1>
      </div>
    );
  }
}
