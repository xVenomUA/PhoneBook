import { ErrorMessage, Field, Form, Formik } from "formik";

import { useId } from "react";

import css from "./LoginForm.module.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operation";
import toast from "react-hot-toast";
const initialValues = {
  email: "",
  password: "",
};

const CheckShema = Yup.object().shape({
  email: Yup.string().email("Pls valid email").required("Required email"),
  password: Yup.string().min(8, "Too short").max(50, "Too long"),
});

export const LogInForm = () => {
  const idEmail = useId();
  const idPassword = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Welcome to your contacts!");
      }).catch(() => {
         toast.error("Incorrect password or email");
      })
    actions.resetForm();
  };

  return (
    <>
      <h2 className={css.title}>Log in</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CheckShema}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={idEmail} className={css.label}>
              Email
            </label>
            <Field
              type="text"
              name="email"
              id={idEmail}
              className={css.input}
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor={idPassword} className={css.label}>
              Password
            </label>
            <Field
              type="text"
              name="password"
              id={idPassword}
              className={css.input}
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btn}>
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
};
