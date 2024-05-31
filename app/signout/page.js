'use client';

import { useEffect } from 'react';
import useLogout from '../components/utils/auth'; 

const SignOutPage = () => {
  const handleLogout = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <p>Logging out...</p>;
};

export default SignOutPage;
