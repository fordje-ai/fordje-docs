import { axios } from '@/lib/axios';

export const getUser = () => {
  return axios.get('/admin/me');
};
