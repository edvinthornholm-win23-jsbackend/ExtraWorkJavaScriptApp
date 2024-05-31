export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { firstName, lastName, email, phoneNumber, biography } = req.body;
  
    try {
      const response = await fetch('https://userprovider-silicon-et.azurewebsites.net/api/UpdateUser?code=CRCF64JtlscznPWA5e2XIIy8XjoGJ0X51XBqD2hect9SAzFuJP4W5g%3D%3D', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, biography }),
      });
  
      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        const result = await response.json();
        res.status(500).json({ error: result.error });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating user information' });
    }
  }
  