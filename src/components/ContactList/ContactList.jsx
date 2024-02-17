import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";
import { getContact, getFilter } from "../../redux/selector";

import css from "./ContactList.module.css";

export const ContactList = () => {
  const dataContact = useSelector(getContact);
  const filtQuery = useSelector(getFilter);
  const filtData = dataContact.filter((data) => {
    return data.name.toLowerCase().includes(filtQuery.toLowerCase());
  }
  );
  return (
    <ul className={css.list}>
      {filtData.map((data) => {
        return <Contact key={data.id} dataContact={data} />;
      })}
    </ul>
  );
};
