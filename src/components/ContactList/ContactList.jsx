import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectDataContacts } from "../../redux/contact/selector";

export const ContactList = () => {
  const dataContact = useSelector(selectDataContacts);
  // const filtQuery = useSelector(getFilter);
  // const filtData = dataContact.filter((data) => {
  //   return data.name.toLowerCase().includes(filtQuery.toLowerCase());
  // }
  // );

  return (
    <ul className={css.list}>
      {dataContact.length > 0  ? (
        dataContact.map((data) => {
          return <Contact key={data.id} dataContact={data} />;
        })
      ) : (
        <li>You have not added any contacts</li>
      )}
    </ul>
  );
};
