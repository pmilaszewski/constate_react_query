import axios from 'axios';

const LINK = 'http://127.0.0.1:8000/';
const config = {
  headers: {
    Authorization: 'Token b872e2c1e3f27dc7149c01f1c833f06112f38872',
  },
};
export const pushData = async (name: string, age: string) =>
  await axios.post(LINK, {name, age}, config).then(res => res.data);
