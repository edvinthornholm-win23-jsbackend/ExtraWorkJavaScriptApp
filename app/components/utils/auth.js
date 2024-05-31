'use client';

import { useRouter } from 'next/navigation';
import signOutAction from './authService';

const useLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await signOutAction();
    if (result.success) {
      router.push('/');
    } else {
      console.error('Logout failed:', result.error);
    }
  };

  return handleLogout;
};

export default useLogout;
