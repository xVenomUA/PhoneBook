import { useSelector } from "react-redux";
import { GreetingHome } from "../../components/GreetingHome/GreetingHome";
import css from "./Home.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selector";
const HomePage = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  console.log(isLogged);
  return (
    <main>
      {isLogged ? (
        <GreetingHome />
      ) : (
        <h1 className={css.text}>
          Please, login or register to get your contacts!
        </h1>
      )}
    </main>
  );
};
export default HomePage;
