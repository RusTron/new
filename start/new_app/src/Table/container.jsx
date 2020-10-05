import React from 'react';
import 'antd/dist/antd.css';
import { Tag, Avatar, Typography } from 'antd';
import {AsYouType} from 'libphonenumber-js/min';
import { NATIONALITIES } from '../constants/nationalities';
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
    text: 'nat',
    render: (phone, row)=>{
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
    render: ({country, street, city, state, postcode}) => {
      const location = [country, street.number]
      return (
      <>
        <Paragraph copyable={{text: location}} className="ant__location"></Paragraph>
        <div className="address">
          <p className="address-country">{`/${country}/`}</p>
          <span>{`${street.number} ${street.name}, ${city}, ${state} ${postcode}`}</span>
        </div>
      </>
      )}
  },
  {
    title: 'Nationality',
    key: 'nat',
    dataIndex: 'nat',
    align: 'center',
    render: tag => (
        <Tag color={tag.color}>
          {tag.name}
        </Tag>
    )
  },
];

export const data = [
  {"gender":"male",
  "name":{"title":"Mr","first":"Torjus","last":"Rashid"},
  "location":{"street":{"number":6742,"name":"Tryvannsveien"},"city":"Fossnes","state":"Hordaland","country":"Norway","postcode":"2401","coordinates":{"latitude":"52.0255","longitude":"-145.8886"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},
  "email":"torjus.rashid@example.com",
  "login":{"uuid":"ea7ae35b-108a-4d26-88ce-77128b2047ab","username":"smalltiger510","password":"macman","salt":"gbHO1lyI","md5":"efec7d77e2114f3bf1dcd57b3856dc03","sha1":"6a3c662c18686899f24de044a401fd3e7c498b41","sha256":"c946af12c53878255d4fa2995fe1f289161dff9c6b2d00880db80cf2480f7b05"},
  "dob":{"date":"1971-05-09T02:34:35.012Z","age":49},
  "registered":{"date":"2003-09-11T05:48:43.910Z","age":17},
  "phone":"67102467",
  "cell":"93333981",
  "id":{"name":"FN","value":"09057134787"},
  "picture":{"large":"https://randomuser.me/api/portraits/men/15.jpg","medium":"https://randomuser.me/api/portraits/med/men/15.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/15.jpg"},
  "nat":"NO"},

  {"gender":"female","name":{"title":"Miss","first":"Ellen","last":"Davies"},"location":{"street":{"number":8593,"name":"Broadway"},"city":"Newry","state":"Avon","country":"United Kingdom","postcode":"U48 2HJ","coordinates":{"latitude":"13.0379","longitude":"-47.3497"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"ellen.davies@example.com","login":{"uuid":"555fd244-9e53-435d-8905-cddc5b034545","username":"goldenelephant431","password":"destiny","salt":"U11XwSbm","md5":"7cfc17180b73f03763d884a1d1672931","sha1":"e639b618324d28c024524790c53bae562c81cf7a","sha256":"49fabb13f337e37832c50d592ef8420c9f44dd013c03f660584ba79a2b33eb70"},"dob":{"date":"1978-03-25T10:00:23.265Z","age":42},"registered":{"date":"2012-02-28T15:28:09.940Z","age":8},"phone":"0111 467 6654","cell":"0729-801-633","id":{"name":"NINO","value":"HG 87 96 99 R"},"picture":{"large":"https://randomuser.me/api/portraits/women/0.jpg","medium":"https://randomuser.me/api/portraits/med/women/0.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/0.jpg"},"nat":"GB"},
];
