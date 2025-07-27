import { UsersList } from "./components/UsersList";
import { User } from "./components/User";
import { AppCounter } from "./components/AppCounter";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
     {/* <UsersList />  */}
      <User id={3} />
      <AppCounter />
    </div>
  );
}
