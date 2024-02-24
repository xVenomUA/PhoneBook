import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import { Loader } from "./Loader/Loader";
import { getLoading } from "../redux/selector";
import { Route, Routes } from "react-router-dom";
import { Layuot } from "./Layout";
import { Suspense } from "react";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getLoading);
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layuot />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};
