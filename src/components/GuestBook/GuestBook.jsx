import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  // const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();
  const history = useHistory();

  function updateGuestName() {
    if (!guestEntry) {
      alert('Please write an entry!');
    } else {
      // setUser(name);
      setEntries([...entries, { name: user, message: guestEntry }]);
      setGuestEntry('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  // const guestNameInput = (
  //   <div>
  //     <label htmlFor="guestName">Guest Name</label>
  //     <input
  //       id="guestName"
  //       type="text"
  //       placeholder="Guest Name..."
  //       value={name}
  //       onChange={(event) => setName(event.target.value)}
  //     />
  //   </div>
  // );

  const displayMessage = user
    ? `Thanks for Signing, ${user}!`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {/* {user ? null : guestNameInput} */}
        <label htmlFor="guestEntry">Guest Entry</label>
        <textarea
          id="guestEntry"
          value={guestEntry}
          placeholder="Your Entry!"
          onChange={(event) => setGuestEntry(event.target.value)}
        />

        <button type="submit">Sign 🖊️</button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setUser('');
              // setName('');
              history.push('/login');
            }}
          >
            Not {user}?
          </button>
        )}
      </form>
    </>
  );
}
