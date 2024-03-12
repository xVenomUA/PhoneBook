import { useDispatch } from "react-redux";
import { ConctactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";
import { getContacts } from "../../redux/contact/operation";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <main>
      <ConctactForm />
      <SearchBar />
      <ContactList />
    </main>
  );
};
export default Tasks;
