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

  const nationalities = useSelector(({people}) =>  people.peopleData && (
    people.peopleData
      .map(person=> person.nat.name)
      .filter((nat, i , arr)=> arr.indexOf(nat) === i)
  ));

const dispatch = useDispatch();

const filterByName = (value) => {
  debugger;
  const action = actionCreators.filterByName(value);
  dispatch(action);
}

const selectGender = (value) => {
  setGenderValue(value);
  const action = actionCreators.selectGender(value);
  dispatch(action);
};

  const selectNationality = (value) => {
    debugger;
    const action = actionCreators.selectNationality(value);
    dispatch(action);
  };

  const clearForm = (value) => {
    debugger;
    setGenderValue('');
    const action = actionCreators.clearForm(value.isTrusted);
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
        size="large"
      >

        <Row col={5} gutter={{ xs: 0, sm: 0, md: 0, lg: 0 } }>
          <Col className="gutter-row" span={6}>
            <Form.Item>
            <Search
              placeholder="Search by full name"
              value={query}
              onChange={({target})=> {
                setQuery(target.value)
                filterByName(target.value)
              }}
            />
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={6}>
            <Form.Item>
              <Select 
                placeholder="Gender"
                allowClear
                value={genderValue}
                onChange={selectGender}>
                <Option value="male">Male</Option>
                <Option value="female">Famale</Option>
                <Option value="inderterminate">Identerminate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={4}>
            <Form.Item>
              <Select
                mode="multiple"
                placeholder="select one country"
                onChange={selectNationality}
                optionLabelProp="label"
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

          <Col className="gutter-row" span={4}>
            <Form.Item >
              <Button type="link" onClick={clearForm} htmlType="submit">
                <CloseOutlined className="blue-icon"/>
                  Clear
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
