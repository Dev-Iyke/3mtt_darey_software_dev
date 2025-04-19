import { useEffect, useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const countLimit = 10
  useEffect(() => {
    setTimeout(() => {
      if(count === countLimit){
        alert(`You've reached the limit (${count}). well done!`)
        setCount(0)
      }
    },200)
  }, [count])
  return (
    <div className="count-container">
      <div className="count">
        <h2>{count}</h2>
      </div>
      <div className="button-container">
        <button
          disabled={count <= 0} 
          onClick={() => setCount(count - 1)}
        >
          - Decrease
        </button>
        <button
          disabled={count === countLimit} 
          onClick={() => setCount(count + 1)}
        >
          Increase +
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
