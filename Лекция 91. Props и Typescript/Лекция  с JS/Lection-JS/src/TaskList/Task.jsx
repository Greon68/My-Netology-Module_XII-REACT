

const Task = ({ done = false, children,  onDone   }) => {         
    return (
      <div className={done ? 'done' : ''}>
        {!done && <button onClick={onDone}>✅</button>}
        {children}
      </div>
    );
  }

export default Task