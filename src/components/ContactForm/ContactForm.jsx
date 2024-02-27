import css from "./ContactForm.module.css";

import { nanoid } from "nanoid";

import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contact/operation";



const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required name"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required number")
    .matches(/^[0-9-+]+$/, "Must be only digits"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ConctactForm = () => {
  const idName = useId();
  const idNumber = useId();
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact)); 
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <div className={css.divName}>
            <label htmlFor={idName}>Name</label>
            <Field
              type="text"
              name="name"
              id={idName}
              className={css.fieldInput}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.divNumber}>
            <label htmlFor={idNumber}>Number</label>
            <Field
              type="text"
              name="number"
              id={idNumber}
              className={css.fieldInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
