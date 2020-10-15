import React from 'react';
import { Avatar, List, Card, Divider } from 'antd';
import {Statistics} from '../Statistics';
import { FormForTable as Form} from '../../../../FormForTable';
import 'antd/dist/antd.css';
import './Gallery.scss';

const { Meta } = Card;

export const Gallery = ({people, title, columns}) => (
  <List
    grid={{ gutter: 4, column: 3 }}
    dataSource={people}
    header={<Form/>}
    footer={<Statistics people={people}/>}
    pagination={{
      onChange: page => {
      },
      pageSize: 6,
    }}
    className="list__card-container"
    renderItem={person => {
      const {picture, name, dob, email, phone, nat, location, nationality} = person;
      return (
      <List.Item xs={5}>
        <Card
          hoverable
          width={"100%"}
          cover={<Avatar 
            className="list__avatar"
            size="large"
            src={picture.large} />}
        >
          <Meta 
            title={
              <>
                <a>{name}</a>
                <span className="list__person-age">
                  {` (${dob.age} years)`}
                </span>
                <Divider dashed />
              </>
            }
            
          description={
            <>
              {columns.find(item => item.key === "email").render(email)}
              {columns.find(item => item.key === "phone").render(phone, person)}
              {columns.find(item => item.key === "location").render(location)}
              <Divider dashed />
              {columns.find(item => item.key === "nationality").render(nationality)}
            </>
          } 
        />
      </Card>
    </List.Item>)}}
  />
);
