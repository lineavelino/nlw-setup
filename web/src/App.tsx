import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </>
  );
}

export default App;
