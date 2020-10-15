import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormForTable } from '../../FormForTable';
import { Statistics } from './components/Statistics';
import { columns } from '../../Table/container';
import { filterPeople } from '../../store/reducers/peopleReducer';
import { actionCreators } from '../../store/reducers/peopleReducer';
import { actions } from '../../store/reducers/loadingReducer';
import { NATIONALITIES } from '../../constants/nationalities';
import { Table, Radio, Button, notification } from 'antd';
import { Gallery } from './components/Gallery'
import { getData } from '../../api/api';
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Contacts.scss';

const loadData = (dispatch) => {
  dispatch(actions.startLoading());

  return getData()
    .then(data=> {
      if (data.error) {
        openNotificationWithIcon('error');
        dispatch(actions.finishLoading());
        return;
      }
      const action  = actionCreators.setData(data.results
        .map(person=> ({ 
          ...person,
          name: `${person.name.title}. ${person.name.first} ${person.name.last}`,
          nationality: NATIONALITIES[person.nat],
        })
      ));
    dispatch(action);
    dispatch(actions.finishLoading());
  })
};

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Network Error',
      description:
        'Please, try again later',
    });
  };

export const Contacts = () => {
  const [view, setView] = useState(localStorage.getItem('view') 
    && JSON.parse(localStorage.getItem('view')) || 'table');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  const saveView = (value) => {
    localStorage.setItem('view', JSON.stringify(value));
    setView(value);
  }

  useEffect(()=> {
    dispatch(loadData);
  }, []);

  const people = useSelector(state=> filterPeople(state));

  return (
    <>
      <div className="contacts__title">
        <span><h1 className="contacts__title-text">Contacts</h1></span>
        <Button 
          shape="circle"
          icon={<ReloadOutlined />}
          onClick={()=> {
            dispatch(loadData);
          }}
          loading={loading}
          
        />
        <Radio.Group defaultValue={view}>
          <Button 
            value="table" 
            onClick={()=>saveView("table")}
            type={view==="table" && "primary"}
          >
            <UnorderedListOutlined />
          </Button>
          <Button type="button" value="gallery"
            onClick={()=>
              saveView("gallery")}
            type={view==="gallery" && "primary"}
          >
          <AppstoreOutlined />
          </Button>
        </Radio.Group>
      </div>
      {view === "table" 
      ? <Table 
        columns={columns}
        dataSource={people}
        title={() => <FormForTable view={view}/>}
        footer={() => <Statistics people={people}/>}
        />
      : <Gallery 
          people={people}
          columns={columns}
          title={() => <FormForTable view={view}/>}
          footer={() => <Statistics people={people}/>}
        />
      }
    </>
  );
}
