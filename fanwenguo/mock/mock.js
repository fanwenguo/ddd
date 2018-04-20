import axios from 'axios';
import mockadapter from 'axios-mock-adapter';
import products from './data/product';
const mock = new mockadapter(axios);
mock.onGet('/products').reply(200, products);