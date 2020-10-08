import React from 'react';
import 'antd/dist/antd.css';
import { Tag, Avatar, Typography } from 'antd';
import {AsYouType} from 'libphonenumber-js/min';
import './Table.scss';

const { Paragraph } = Typography;

export const columns = [
  {
    title: 'Avatar',
    dataIndex: 'picture',
    key: 'picture',
    render: picture => <Avatar size="large" src={picture.thumbnail} />,
  },
  {
    title: 'Full-name',
    dataIndex: 'name',
    key: 'name',
    render: name=> <a>{name}</a>,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Birthday',
    dataIndex: 'dob',
    key: 'dob',
    render: dob=>{
    const weekday = new Date(dob.date)
      .toLocaleTimeString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    
    return (
      <>
        <span>{`${weekday}`}</span>
        <p>{`${dob.age} years`}</p>
      </>
    );
  }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: email=> (
    <div className="one_row">
      <Paragraph copyable={{text: email}} ></Paragraph>
      <a>{email}</a>
    </div>
    )
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    text: 'location',
    render: (phone, row)=>{
      console.log(row);
      const newPhone = new AsYouType(row.nat).input(phone);
      return (
        <div className="one_row">
          <Paragraph copyable={{text: newPhone}} ></Paragraph>
          <a>{newPhone}</a>
        </div>
        );
    }
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: ({country, street, city, state, postcode}) => 
      <>
        <Paragraph 
          copyable={{text: `${street.number} ${street.name}, ${city}, ${state} ${postcode}`}}
          className="ant__location"></Paragraph>
        <div className="address">
          <p className="address-country">{`/${country}/`}</p>
          <span>{`${street.number} ${street.name}, ${city}, ${state} ${postcode}`}</span>
        </div>
      </>
  },
  {
    title: 'Nationality',
    key: 'nationality',
    dataIndex: 'nationality',
    align: 'center',
    render: tag => (
        <Tag color={tag.color}>
          {tag.name}
        </Tag>
    )
  },
];
