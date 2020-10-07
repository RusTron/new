import React from 'react';
import { reduxForm } from 'redux-form'
import { Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined, CloseOutlined} from '@ant-design/icons';
import './LoginReduxForm.scss';

export let LoginReduxForm = ({onSubmit}) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          component="input"
          type="email"
          name="email"
       />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          component="input"
          name="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <CloseOutlined className="redicon"/>
      </Form.Item>
    </Form>
  );
};

LoginReduxForm = reduxForm({
  form: 'contact'
})(LoginReduxForm)
