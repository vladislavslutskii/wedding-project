import DearGuest2 from "@components/DearGuest2";
import Location from "@components/Location";
import Petals from "@components/Petals";
import Program from "@components/Program";
import WeddingIntro from "@components/WeddingIntro";
import styles from "./App.module.scss";

import Greetings from "./components/Greetings";

const App = () => {
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
    </div>
  );
};
export default App;
