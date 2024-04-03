import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

export const deleteUser = ({ userId }) => {
  return axios.delete(`/users/${userId}`);
};

export const useDeleteUser = ({ config } = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (deletedUser) => {
      await queryClient.cancelQueries('users');

      const previousUsers = queryClient.getQueryData('users');

      queryClient.setQueryData(
        'users',
        previousUsers?.filter((user) => user.id !== deletedUser.userId)
      );

      return { previousUsers };
    },
    onError: (_, __, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData('users', context.previousUsers);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      addNotification({
        type: 'success',
        title: 'User Deleted',
      });
    },
    ...config,
    mutationFn: deleteUser,
  });
};
