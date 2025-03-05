import Button, { ButtonTypes } from "./components/Button";

const App = () => {
  return (
    <Button
      type={ButtonTypes.Primary}
      title={"Hello"}
      onClick={() => {
        console.log("hello");
      }}
    ></Button>
  );
};

export default App;
