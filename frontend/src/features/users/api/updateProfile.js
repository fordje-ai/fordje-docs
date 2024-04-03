import { useMutation } from 'react-query';

import { useAuth } from '@/lib/auth';
import { axios } from '@/lib/axios';
import { useNotificationStore } from '@/stores/notifications';

export const updateProfile = ({ data }) => {
  return axios.patch(`/users/profile`, data);
};

export const useUpdateProfile = ({ config } = {}) => {
  const { addNotification } = useNotificationStore();
  const { refetchUser } = useAuth();
  return useMutation({
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'User Updated',
      });
      refetchUser();
    },
    ...config,
    mutationFn: updateProfile,
  });
};
