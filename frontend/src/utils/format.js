import { default as dayjs } from 'dayjs';

export const formatDate = (date) => dayjs(date).format('MMMM D, YYYY h:mm A');
