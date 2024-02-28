import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import css from "./ContactList.module.css";
import { filtData } from "../../redux/contact/selector";

export const ContactList = () => {
  const dataContact = useSelector(filtData); 
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
