import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store/reducers/peopleReducer';
import { Form, Input, Button, Row, Col, Select, Checkbox} from 'antd';
import { CloseOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './FormForTable.scss';

const { Option } = Select;

export const FormForTable = ({view}) => {
  const [query, setQuery] = useState('');
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [clearActive, setClearActive] = useState(false);

  const nationalities = useSelector(({people}) =>  people.peopleData && (
    people.peopleData
      .map(person=> person.nationality.name)
      .filter((nat, i , arr)=> arr.indexOf(nat) === i)
  ));

  const dispatch = useDispatch();

  useEffect(()=> {
    form.resetFields();
    clearSearch();
    clearData({checked: false});
  }, [view])

  const filterByName = (value) => {
    setQuery(value);
    const action = actionCreators.filterByName(value);
    dispatch(action);
  }

  const selectGender = (value) => {
    value ? setClearActive(true) : setClearActive(false);
    const action = actionCreators.selectGender(value);
    dispatch(action);
  };

  const selectNationality = (value) => {
     value.length ? setClearActive(true) : setClearActive(false);
    const action = actionCreators.selectNationality(value);
    dispatch(action);
  };

  const clearSearch = () => {
    setQuery('')
    const action = actionCreators.clearForm();
    dispatch(action);
  }

  const clearData = ({checked : value}) => {
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
                onChange={selectGender}
                className={"select-gender"}
                >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="inderterminate">Identerminate</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col className="gutter-row" >
            <Form.Item name="nationality">
              <Select
                mode="multiple"
                placeholder="Nationality"
                optionLabelProp="label"
                onChange={selectNationality}
              >
                {nationalities && (nationalities.map(nat =>
                <Option value={nat} label={nat} key={nat}>
                  <div className="demo-option-label-item" key={nat}>
                    <span role="img" aria-label={nat} key={nat}></span>
                    {nat}
                  </div>
                </Option>))}

              </Select>
            </Form.Item>
          </Col>

          <Form.Item>
            <Col className="gutter-row form-checkox" >
              <Checkbox 
                checked={checked}
                onChange={({target})=> {
                  clearData(target)
                  setChecked(!checked)}}
              >
                I am creator
              </Checkbox>
            </Col>
          </Form.Item>

            <Button type="link"
              onClick={() => {
                form.resetFields();
                clearSearch();
                setChecked(false);
                clearData({checked: false});
                setClearActive(false);
              }}
              className="clear-button"
              disabled={!clearActive && !query && !checked}
            >
              <CloseOutlined />
              Clear
            </Button>
        </Row>
      </Form>
    </div>
  );
};
