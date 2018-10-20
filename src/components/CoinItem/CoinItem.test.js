import React from 'react';
import CoinItem from './CoinItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const coin = {
  rank: '1',
  symbol: 'EC',
  name: 'ECoin',
  price_usd: '23232.32131',
  '24h_volume_usd': '312321321321'
 }

let wrapper = {}

beforeEach(() => {
  wrapper = Enzyme.shallow(
    <CoinItem coin={coin}></CoinItem>
  );
});

it('renders without crashing', () => {
  expect(wrapper.find('.coin-item__value').length).toEqual(5);
});

it('should render link', () => {
  expect(wrapper.find('.coin-item__link').length).toEqual(1);
});

it('should format number', () => {
  const coinItem = new CoinItem()
  expect(coinItem.formatAmount(coin.price_usd)).toEqual('U$23232,32');
});

it('should render link text', () => {
  expect(wrapper.find('.coin-item__link').text()).toEqual('EC');
});


