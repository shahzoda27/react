import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth';
import Cars from './components/Cars';
import CarsSingle from './components/CarsSingle';
export default class App extends Component {
  render() {
    return (<div className='container-fluid'>
    <Routes>
      <Route path="/" element={<Auth/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/cars_single" element={<CarsSingle/>} />
    </Routes>
</div>)
  }
}
