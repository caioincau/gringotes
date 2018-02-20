import React from 'react';
import CoinTable from './CoinTable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


let coins = [{
  id: '1',
  rank: '1',
  symbol: 'EC',
  name: 'ECoin',
  price_usd: '23232',
  '24h_volume_usd': '312321321321'
},
{
  id: '2',
  rank: '1',
  symbol: 'BTC',
  name: 'Bitcoin',
  price_usd: '23232',
  '24h_volume_usd': '312321321321'
}]

let wrapper = {}


let mountComponent = (filter= '') => {
  return Enzyme.mount(
    <CoinTable coins={coins} filter={filter}></CoinTable>
  );
}
beforeEach(() => {
  wrapper = mountComponent()
});

it('renders without crashing', () => {
  expect(wrapper.find('.coin-item').length).toEqual(2);
});

it('should filter and find one', () => {
  wrapper = mountComponent('EC')
  expect(wrapper.find('.coin-item').length).toEqual(1);
});

it('should filter and find none', () => {
  wrapper = mountComponent('XHR')
  expect(wrapper.find('.coin-item').length).toEqual(0);
});


