import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import {MODAL1VISIBLE, MODAL1INVISIBLE } from '../variables/forHome';
import { LoginReduxForm } from './LoginReduxForm';
import './ModalWindow.scss';

export const ModalWindow = () => {
  const modal1Visible = useSelector(state=> state.modal.modal1Visible);

  const dispatch = useDispatch();
  
  const setModal1Visible = () => dispatch({type: MODAL1VISIBLE});
  const setModal1InVisible = () => dispatch({type: MODAL1INVISIBLE});

  console.log(modal1Visible);

  return (
    <>
      <Modal
        title="Sign in"
        style={{ top: 20 }}
        centered
        visible={modal1Visible}
      >
        <LoginReduxForm onSubmit={()=>setModal1InVisible()}/>
      </Modal>
      {/* <Button type="primary" onClick={() => this.setModal2Visible(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={this.state.modal2Visible}
        onOk={() => this.setModal2Visible(false)}
        onCancel={() => this.setModal2Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal> */}
    </>
  );
}
