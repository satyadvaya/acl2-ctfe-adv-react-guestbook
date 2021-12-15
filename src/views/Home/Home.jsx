import { EntryProvider } from '../../context/EntryContext';
import GuestBook from '../../components/GuestBook/GuestBook';
import EntryList from '../../components/EntryList/EntryList';

export default function Home() {
  return (
    <EntryProvider>
      <GuestBook />
      <EntryList />
    </EntryProvider>
  );
}
