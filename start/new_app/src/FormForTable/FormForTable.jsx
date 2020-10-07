import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store/reducers/peopleReducer';
import { filterPeople } from '../store/reducers/peopleReducer';
import { Form, Input, Button, Row, Col, Select, Checkbox} from 'antd';
import { CloseOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './FormForTable.scss';

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
  setQuery(value);
  const action = actionCreators.filterByName(value);
  dispatch(action);
}

const selectGender = (value) => {
  const action = actionCreators.selectGender(value);
  dispatch(action);
};

  const selectNationality = (value) => {
    const action = actionCreators.selectNationality(value);
    dispatch(action);
  };

  const clearSearch = () => {
    setQuery('')
    const action = actionCreators.clearForm();
    dispatch(action);
  }

  const clearData = ({checked : value}) => {
    debugger;
    const action = actionCreators.clearData(value);
    dispatch(action);
  }

   return (
    <div className="contacts-form">
      <Form
        layout="horizontal"
        form={form}
      >

        <Row>
          <Col className="gutter-row" >
            <Form.Item name="query">
            <Input.Search
              placeholder="Search by full name"
              value={query}
              onChange={({target})=> filterByName(target.value)}
              allowClear
            />
            </Form.Item>
          </Col>

          <Col className="gutter-row">
            <Form.Item
              name="gender">
              <Select 
                placeholder="Gender"
                allowClear
                onSelect={selectGender}
                >
                <Option value="male">Male</Option>
                <Option value="female">Famale</Option>
                <Option value="inderterminate">Identerminate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col className="gutter-row" >
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
                    <span role="img" aria-label={nat} key={nat}></span>
                    {nat}
                  </div>
                </Option>))}

              </Select>
            </Form.Item>
          </Col>

          <Form.Item>
            <Col className="gutter-row" >
              <Checkbox onChange={({target})=>clearData(target)}>I am creator</Checkbox>
            </Col>
          </Form.Item>

            <Button type="link"
              onClick={() => {
                form.resetFields();
                clearSearch()}} 
            >
              <CloseOutlined className="blue-icon"/>
              Clear
            </Button>
        </Row>
      </Form>
    </div>
  );
};
