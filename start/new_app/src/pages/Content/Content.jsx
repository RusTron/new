import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalWindow } from '../../ModalWindow';
import { FormForTable } from '../../FormForTable';
import { Statistics } from './components/Statistics';
import {columns} from '../../Table/container';
import { filterPeople } from '../../store/reducers/peopleReducer';
import { actionCreators } from '../../store/reducers/peopleReducer';
import { NATIONALITIES } from '../../constants/nationalities';
import { Table } from 'antd';
import { Gallery } from './components/Gallery'
import {getData} from '../../api/api';
import 'antd/dist/antd.css';

export const Content = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    debugger;
    getData()
      .then(data=> {
        const action  = actionCreators.setData(data.results
          .map(person=> ({ 
            ...person,
            name: `${person.name.title}. ${person.name.first} ${person.name.last}`,
            nat: NATIONALITIES[person.nat]
          })));
        dispatch(action);
    })
  }, []);

  const people = useSelector(state=> {
    debugger;
    console.log(state);
    return filterPeople(state)});
 console.log(people);

  return (
    <>
      <ModalWindow />
      <Table 
        columns={columns}
        dataSource={people}
        title={() => <FormForTable />}
        footer={() => <Statistics people={people}/>}
      />
      <Gallery 
        people={people}
        columns={columns}
        title={() => <FormForTable />}
        footer={() => <Statistics people={people}/>}
      />
    </>
  );
}
