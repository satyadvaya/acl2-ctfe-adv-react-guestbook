import React from 'react';
import GuestBook from '../../components/GuestBook/GuestBook';
import EntryList from '../../components/EntryList/EntryList';

export default function Home() {
  return (
    <div>
      <GuestBook />
      <EntryList />
    </div>
  );
}
