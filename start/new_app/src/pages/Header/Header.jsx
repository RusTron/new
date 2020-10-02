import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Logo } from '../../logo';
import { NavBar } from '../../navbar';
import {MODAL1VISIBLE, MODAL2VISIBLE} from '../../variables/forHome';
// import logo from './logo.svg';
import './Header.scss';
import '../../assets/styles/page.scss';

export const Header = () => {
  const modal1Visible = useSelector(state=> state.modal1Visible);
  const modal2Visible = useSelector(state=> state.modal2Visible);  
console.log(modal1Visible);
  const dispatch = useDispatch();

const setModal1Visible = () => dispatch({type: MODAL1VISIBLE});
const setModal2Visible = () => dispatch({type: MODAL2VISIBLE});
  debugger;
  const increase = () => {dispatch({type: 'INCREASE'})};
  return (
    // <div className={'header'}>
      <Row type={'flex'} gutter={36} align={'middle'}>
        <Col>
          <Logo />
        </Col>
        <Col className={'_flex-grow'}>
          <Row type={'flex'} gutter={16} align={'middle'}>
            <Col className={'_flex-grow'}>
              <NavBar />
            </Col>
            <Col>
              <Button
                type={'link'}
                htmlType={'button'}
                icon={<LoginOutlined />}
                onClick={setModal1Visible}
              >
                Sign In
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
        )}
      {/* </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={increase}>
          Edit <code>src/App.js</code> and save to reload. {x}, {y}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
      // </div>
