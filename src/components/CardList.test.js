import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

it('should render CardList component', () => {
    const robotsMock = [
        {
            email: 'john@gmail.com',
            id: 1,
            name: 'John'
        },

        {
            email: 'jane@gmail.com',
            id: 2,
            name: 'Jane'
        },

        {
            email: 'jessie@gmail.com',
            id: 3,
            name: 'Jessie'
        }
    ];
    expect(shallow(<CardList robots={robotsMock}/>)).toMatchSnapshot();
});