import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const View = ({location}) => {
console.log(location);
	return (
		<div className={'navbar'}>
			<ul className={'navbar__list'}>
        <li  className={'navbar__item'}>
          <NavLink 
            to={'/home'} 
            className={'navbar__link'}
            activeClassName={'active-link'}
          >
            Home
          </NavLink>
          <NavLink 
            to={'/contacts'}
            className={'navbar__link'}
            activeClassName={'active-link'}
          >
            Contacts
          </NavLink>
        </li>
			</ul>
		</div>
	);
};

export { View };
