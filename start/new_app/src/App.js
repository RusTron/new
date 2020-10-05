import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {LayoutBase } from './layouts';
import { Content } from './pages/Content';
import { actionCreators } from './store/reducers/peopleReducer';
import { getData } from './api/api';
import logo from './logo.svg';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  // useEffect(()=> {
  //   debugger;
  //   getData()
  //     .then(data=> {
  //       const action  = actionCreators.setData(data.results);
  //       dispatch(action);
  //   })
  // }, []);

  return (
    
    // <div className="App">
    <>
      <LayoutBase>
        <Content />
       {/* <Header /><Authetification /> */}
      </LayoutBase>
    </>
  );
}


export default App;
