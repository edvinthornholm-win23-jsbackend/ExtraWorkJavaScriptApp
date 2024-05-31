'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  biography: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  city: string;
}

export default function AccountDetails() {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    biography: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    city: '',
  });
  const [statusMessage, setStatusMessage] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user-data'); // Använd rätt endpoint för att hämta användaruppgifter
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setStatusMessage('An error occurred while loading user data.');
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setStatusMessage('Account updated successfully.');
      } else {
        setStatusMessage('Error updating account.');
      }
    } catch (error) {
      setStatusMessage('An error occurred while updating the account.');
    }
  };

  const handleAddressSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setStatusMessage('Account address updated successfully.');
      } else {
        setStatusMessage('Error updating account address.');
      }
    } catch (error) {
      setStatusMessage('An error occurred while updating the account address.');
    }
  };

  return (
    <div className="container">
      <section id="account-details">
        <aside>
          <div className="profile-info">
            <div className="profile-info-img">
              <img src="/images/uploads/profiles/avatar.jpg" alt="Profile image" />
            </div>

            <h5>{user.firstName} {user.lastName}</h5>
            <p>{user.email}</p>
          </div>

          <nav>
            <button className="btn-theme" onClick={() => router.push('/account/details')}>Account Details</button>
            <button className="btn-transparent" onClick={() => router.push('/account/security')}>Security</button>
            <button className="btn-transparent" onClick={() => router.push('/account/notifications')}>Notifications</button>
            <button className="btn-transparent" onClick={() => router.push('/account/messages')}>Messages</button>
            <button className="btn-transparent" onClick={() => router.push('/account/savedcourses')}>Saved Items</button>
            <button className="btn-transparent" onClick={() => router.push('/signout')}>Sign Out</button>
          </nav>
        </aside>

        <div className="details">
          <section className="basic-info">
            {statusMessage && (
              <div className="alert alert-success" role="alert">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <h2>Account Details</h2>
              <h5>Basic Info</h5>

              <div className="content">
                <div id="form-firstname" className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-lastname" className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-email" className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-phone" className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-bio" className="input-group">
                  <label>Biography</label>
                  <input
                    type="text"
                    name="biography"
                    value={user.biography}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-buttons">
                  <button className="btn-gray" type="reset">Cancel</button>
                  <button className="btn-theme" type="submit">Save changes</button>
                </div>
              </div>
            </form>
          </section>
          <hr />

          <section className="address-info">
            <form onSubmit={handleAddressSubmit}>
              <h5>Address</h5>
              <div className="content">
                <div id="form-addressline-1" className="input-group">
                  <label>Address line 1</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={user.addressLine1}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-addressline-2" className="input-group">
                  <label>Address line 2 (optional)</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={user.addressLine2}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-postalcode" className="input-group">
                  <label>Postal code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={user.postalCode}
                    onChange={handleChange}
                  />
                </div>

                <div id="form-city" className="input-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-buttons">
                  <button className="btn-gray" type="reset">Cancel</button>
                  <button className="btn-theme" type="submit">Save changes</button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}
