import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

let wrapper;

const testRobots = [
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
    },
    {
        email: 'jamie@gmail.com',
        id: 4,
        name: 'Jamie'
    }
];

beforeEach(() => {
    const propsMock = {
        isPending: false,
        onRequestRobots: jest.fn(),
        robots: [],
        searchFieldValue: '',
    };
    wrapper = shallow(<MainPage { ...propsMock}/>)
});

it('should render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly when empty search field value and empty robots', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when non-empty search field value and empty robots', () => {
    const propsMock = {
        isPending: false,
        onRequestRobots: jest.fn(),
        robots: [],
        searchFieldValue: 'john',
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when empty search field value and non-empty robots', () => {
    const propsMock = {
        isPending: false,
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: '',
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual(testRobots);
});

it('filters robots correctly when non-empty search field value and non-empty robots - not matching', () => {
    const propsMock = {
        isPending: false,
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: 'elise',  // not present in the array
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly when non-empty search field value and non-empty robots - matching', () => {
    const robotsWithJa = [
        {
            email: 'jane@gmail.com',
            id: 2,
            name: 'Jane'
        },
        {
            email: 'jamie@gmail.com',
            id: 4,
            name: 'Jamie'
        }
    ];
    const propsMock = {
        isPending: false,
        onRequestRobots: jest.fn(),
        robots: testRobots,
        searchFieldValue: 'Ja',  // Jane and Jamie
    };
    wrapper = shallow(<MainPage { ...propsMock}/>);
    expect(wrapper.instance().filterRobots()).toEqual(robotsWithJa);
});