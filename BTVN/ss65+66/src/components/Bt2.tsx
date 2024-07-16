import { useSelector } from "react-redux";
import { StoreInterface } from "../store/bt2";

const Bt2 = () => {
  const sv = useSelector((state: StoreInterface) => state.userStore2);

  return (
    <div>
      {sv.map((a) => (
        <>
          <p>ID: {a.id}</p>
          <p>Name: {a.name}</p>
          <p>Gender: {a.sex ? "Male" : "Female"}</p>
          <p>Date: {a.date}</p>
          <p>Address: {a.address}</p>
        </>
      ))}
    </div>
  );
};

export default Bt2;