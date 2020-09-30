import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Logo } from '../../logo';
import { NavBar } from '../../navbar';
// import logo from './logo.svg';
import './Header.scss';

export const Header = () => {
  const x = useSelector(state=> state.x);
  const y = useSelector(state=> state.y);
  const dispatch = useDispatch();

  const increase = () => {dispatch({type: 'INCREASE'})};
  return (
    <div className={'header'}>
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
              <Link to='/'>
                <Button
                  type={'link'}
                  htmlType={'button'}
                  icon={<LoginOutlined />}
                  // onClick={()=>!visibleAuth}
                >
                  Sign In
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      
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
      </div>
  )}