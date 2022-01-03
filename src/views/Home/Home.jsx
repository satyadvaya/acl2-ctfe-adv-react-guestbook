import React from 'react';
import GuestBook from '../../components/GuestBook/GuestBook';
import EntryList from '../../components/EntryList/EntryList';

// const Home = () => {
// export default function Home() {
function Home() {
  return (
    <div>
      <GuestBook />
      <EntryList />
    </div>
  );
}

export default Home;
