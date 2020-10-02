import './style.scss';
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const View = () => {
	// const navbarRoutes = useMemo(() => [
	// 	{ name: 'Home', key: 'home' },
	// ], []);

	return (
		<div className={'navbar'}>
			<ul className={'navbar__list'}>
				{/* {navbarRoutes.map((route) => ( */}
					<li  className={'navbar__item'}>
						<NavLink to={'/home'} className={'navbar__link'}>Home</NavLink>
					</li>
				{/* ))} */}
			</ul>
		</div>
	);
};

export { View };
