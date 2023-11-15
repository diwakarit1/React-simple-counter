import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((preCount) => preCount + 1);
  };
  const decrementHandler = () => {
    if (count > 0) setCount((preCount) => preCount - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <main className="text-center">
      <h1 className="text-info">COUNTER</h1>
      <h2 className="m-4">{count}</h2>

      <Button variant="primary" className="m-3" onClick={incrementHandler}>
        Increment
      </Button>
      <Button variant="warning" className="m-3" onClick={resetHandler}>
        Reset
      </Button>
      <Button variant="danger" className="m-3" onClick={decrementHandler}>
        Decrement
      </Button>
    </main>
  );
};
export default Counter;
