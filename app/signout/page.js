'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      // Anropa API-rutten för att ta bort cookien
      await fetch('/api/signout');
      // Omdirigera till startsidan
      router.push('/');
    };

    signOut();
  }, [router]);

  return null;
}
