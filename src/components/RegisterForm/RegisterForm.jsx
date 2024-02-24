import { Formik } from "formik";
import { NavLink } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <>
      <NavLink to="/login">log</NavLink>
      <Formik>
        <form></form>
      </Formik>
    </>
  );
};
