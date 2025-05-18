import DearGuest2 from "@components/DearGuest2";
import Location from "@components/Location";
import Petals from "@components/Petals";
import Program from "@components/Program";
import WeddingIntro from "@components/WeddingIntro";
import styles from "./App.module.scss";

import Greetings from "./components/Greetings";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Greetings></Greetings>
      <DearGuest2
        id="dearGuest"
        day={9}
        month="августа"
        year={2025}
        time="14:00"
      />
      <Location></Location>
      <Program></Program>
      <WeddingIntro></WeddingIntro>
      <Petals></Petals>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
