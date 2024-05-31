import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    console.log('Unauthorized access attempt');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  console.log('Session:', session);

  try {
    const email = encodeURIComponent(session.user.email);
    const apiUrl = `https://userprovider-silicon-et.azurewebsites.net/api/GetUserByEmail?code=IFqZbMytZveCRsyGi46D66XTncAcfCfgjdoCsdukZq22AzFuFsO2kg%3D%3D?email=${email}`;
    console.log('Fetching user data from:', apiUrl);

    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      console.log('Fetched user data:', data);
      res.status(200).json(data);
    } else {
      console.log('Error fetching user data, status:', response.status);
      res.status(500).json({ error: 'Error fetching user data' });
    }
  } catch (error) {
    console.log('Error occurred while fetching user data:', error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
}
