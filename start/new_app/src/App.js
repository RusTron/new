import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {LayoutBase } from './layouts';
import { Header } from './pages/Header'; 
import logo from './logo.svg';
import './App.scss';

function App() {
  const x = useSelector(state=> state.x);
  const y = useSelector(state=> state.y);
  const dispatch = useDispatch();

  const increase = () => {dispatch({type: 'INCREASE'})};

  return (
    // <div className="App">
    <LayoutBase>
      <Header />
    </LayoutBase>
  );
}

const mapState = (state) => {
  return {
    x: 1,
    y: 1,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type: 'INCREASE'})
  }
}


export default connect(mapState, mapDispatchToProps)(App);
