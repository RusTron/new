import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store/reducers/peopleReducer';
import { filterPeople } from '../store/reducers/peopleReducer';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select
} from 'antd';
import { CloseOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Option } = Select;

export const FormForTable = () => {
  const [query, setQuery] = useState('');
  const [genderValue, setGenderValue] = useState('')
  const [form] = Form.useForm();

  const nationalities = useSelector(({people}) =>  people.peopleData && (
    people.peopleData
      .map(person=> person.nat.name)
      .filter((nat, i , arr)=> arr.indexOf(nat) === i)
  ));

const dispatch = useDispatch();

const filterByName = (value) => {
  console.log(value)
  const action = actionCreators.filterByName(value);
  dispatch(action);
}

const selectGender = (value) => {
  setGenderValue(value);
  const action = actionCreators.selectGender(value);
  dispatch(action);
};

  const selectNationality = (value, par) => {
    const action = actionCreators.selectNationality(value);
    dispatch(action);
  };

  const clearSearch = () => {
    const action = actionCreators.clearForm();
    dispatch(action);
  }

   return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        form={form}
      >

        <Row col={5}>
          <Col className="gutter-row" span={6}>
            <Form.Item name="query">
            <Input.Search
              placeholder="Search by full name"
              value={query}
              onChange={(value)=>filterByName(value)}
            />
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={6}>
            <Form.Item
              name="gender">
              <Select 
                placeholder="Gender"
                allowClear
                >
                <Option value="male">Male</Option>
                <Option value="female">Famale</Option>
                <Option value="inderterminate">Identerminate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={4}>
            <Form.Item name="nationality">
              <Select
                mode="multiple"
                placeholder="select one country"
                optionLabelProp="label"
                onSelect={selectNationality}
              >
                {nationalities && (nationalities.map(nat =>
                <Option value={nat} label={nat}>
                  <div className="demo-option-label-item" key={nat}>
                    <span role="img" aria-label={nat} key={nat}>
                    
                    </span>
                    {nat}
                  </div>
                </Option>))}
                
              </Select>
            </Form.Item>
          </Col>

          {/* <Col className="gutter-row" span={4}>
          <Checkbox onChange={clearData}>Checkbox</Checkbox>
          </Col> */}

          <Col span={4}>
            <Button type="link"
              onClick={() => {
                form.resetFields();
                clearSearch()}} 
            >
              <CloseOutlined className="blue-icon"/>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
