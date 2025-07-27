
import "./App.css";
import { Heart } from './Heart.jsx';
import { Switch } from "./Switch";
import { HeartCC } from "./HeartCC";


function App() {

  return (
    <>
      {/* <Heart /> */}
      <Heart onLike={() => console.log("like!!!")} />
      <HeartCC />
      < Switch />
   
    </>
  );
}

export default App;