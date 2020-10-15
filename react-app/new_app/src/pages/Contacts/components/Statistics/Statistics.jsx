import React from 'react';
import { Statistic, Row, Col, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import './Statistics.scss';

export const Statistics = ({people}) => {

  let males = 0;
  let females = 0;
  let Indeterminate = 0;
  people.forEach(person => {
    switch(person.gender){
      case 'male':
        males++
        break;
      case 'female':
        females++
        break;
      default:
        Indeterminate++;
    }});

  const nationalities = {}
  people.forEach(person=> 
    nationalities.hasOwnProperty(person.nationality.name) 
      ? nationalities[person.nationality.name]++
      : nationalities[person.nationality.name] = 1
  );

  console.log(nationalities);

  return (
    <div className="ant-statistic-footer">
      <Row gutter={16}>
        <Col span={3}>
          <Statistic title="Collection size" value={people.length} />
        </Col>
        <Col span={6}>
          <Row gutter={16}>
            <Col span={4}>
              <Statistic title="Males" value={males} />
            </Col>
            <Col span={5}>
              <Statistic title="Females" value={females} />
            </Col>
            <Col span={4}>
              <Statistic title="Indeterminate" value={Indeterminate} />
            </Col>
          </Row>
            <div className="statistic__dominate">
              {males > females ? 'Men predominate' : 'Women predominate'}
            </div>
        </Col>
      </Row>
      <div className="ant-description-box">
        <Descriptions
          title="Nationalities"
          size="middle"
          column={6}
        >
          {Object.keys(nationalities).map(nat => 
            <Descriptions.Item label={nat} key={nat}>{nationalities[nat]}</Descriptions.Item>
          )}
        </Descriptions>
      </div>
    </div>
  )
}
