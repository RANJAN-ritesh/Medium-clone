import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incCount, decCount } from "../../reduxStore/action";
export const Counter = () => {
  const { count } = useSelector((store) => ({ ...store.reducer }));
  const { user } = useSelector((store) => ({ ...store }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      counter = {count}
      <button
        onClick={() => {
          if (user && user.token) {
            dispatch(incCount(1));
          } else {
            navigate("/signin");
          }
        }}
      >
        Like
      </button>
      <button
        onClick={() => {
          if (user && user.token) {
             dispatch(decCount(1));
          } else {
            navigate("/signin");
          }
        }}
      >
        DisLike
      </button>
    </div>
  );
};
