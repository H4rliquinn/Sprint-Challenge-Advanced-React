import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import CardList from './components/CardList.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Page Elements Showing',()=>{
  const pageRender = render(<App />);
  pageRender.getByText(/hw/i);
  pageRender.getByText(/dark mode/i);
})

test('Players showing',()=>{
  const stuff=[{
    name: "Alex Morgan",
    country: "United States",
    searches: 100,
    id: 0
    },{
    name: "Tierna Davidson",
    country: "United States",
    searches: 1,
    id: 100
    }]
  const { container, getByText } = render(<CardList data={stuff}/>)
  expect(getByText(/alex morgan/i)).toBeInTheDocument()
  expect(getByText(/Tierna Davidson/i)).toBeInTheDocument()
})