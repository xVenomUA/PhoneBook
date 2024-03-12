import { useDispatch, useSelector } from "react-redux";
import css from "./Logout.module.css";
import { logout } from "../../redux/auth/operation";
import { selectIsToken } from "../../redux/auth/selector";
import toast from "react-hot-toast";
export const Logout = () => {
  const dispatch = useDispatch();
  const token_user = useSelector(selectIsToken);
  const name = useSelector((state) => state.auth.user.name);
  const onClick = () => {
    dispatch(logout(token_user))
      .unwrap()
      .then(() => {
        toast.success("You are logged out!");
      })
      .catch(() => {
        toast.error("Something was wrong");
      });
  };
  return (
    <div className={css.div}>
      <h2 className={css.text}>Welcome, {name}</h2>
      <button className={css.btn} onClick={onClick}>
        Log out
      </button>
    </div>
  );
};
