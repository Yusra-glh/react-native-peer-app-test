import axios from 'axios';

export const getDataApi = async (params: any) => {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return data;
  } catch (error) {
    throw error;
  }
};
