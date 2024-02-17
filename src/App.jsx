import { ContactList } from "./components/ContactList/ContactList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ConctactForm } from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";
import { Loader } from "./components/Loader/Loader";
import { getLoading } from "./redux/selector";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
