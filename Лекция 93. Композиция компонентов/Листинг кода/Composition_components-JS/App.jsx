import { Modal } from "./components/Modal";
// import { Message } from "./components/Message";
// import { ErrorMessage } from "./components/ErrorMessage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Modal>
        <h1>Modal title</h1>
       <p>Modal content</p>
       <button>CTA button</button>

        {/* <a href="/">Link-1</a>
        <a href="/">Link-1</a>
        <a href="/">Link-1</a> */}
      </Modal>

      {/* <Message
        type="info"
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      />
      <Message
        type="success"
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      />
      <ErrorMessage
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      /> */}
    </div>
  );
}
