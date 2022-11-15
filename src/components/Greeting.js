import { useState } from "react";
import Output from "./output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTexthandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2> hello world</h2>
      {!changeText && <Output> good to see you !</Output>}
      {changeText && <Output> changed !</Output>}
      <button onClick={changeTexthandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
