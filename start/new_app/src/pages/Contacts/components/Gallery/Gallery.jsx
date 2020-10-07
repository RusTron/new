import React from 'react';
import { Avatar, List, Card, Divider } from 'antd';
import {Statistics} from '../Statistics';
import { FormForTable as Form} from '../../../../FormForTable';
import 'antd/dist/antd.css';
import './Gallery.scss';

const { Meta } = Card;

export const Gallery = ({people, title, columns}) => {
  debugger;
  return(
    <>
      <List
        grid={{ gutter: 4, column: 3 }}
        dataSource={people}
        header={<Form/>}
        footer={<Statistics people={people}/>}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6,
        }}
        className="list__card-container"
        renderItem={person => {
          const {picture, name, dob, email, phone, nat, location} = person;
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
                  {columns.find(item => item.key === "phone").render(phone, nat)}
                  {columns.find(item => item.key === "location").render(location)}
                  <Divider dashed />
                  {columns.find(item => item.key === "nat").render(nat)}
                </>
              } 
            />
          </Card>
        </List.Item>)}}
      />
    </>
  );
}