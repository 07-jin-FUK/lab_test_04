import { useState } from "react";

import "./App.css";
import Test from "./Test";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [test, setTest] = useState(100);
  const [flag, setFlag] = useState(false);

  //更新の処理の練習です
  const handleClick = () => {
    setTest("変更してみた！！！");
  };

  const handleFlagClick = () => {
    setFlag(!flag);
  };

  // const handleFalseFlagCliick = () => {
  //   setFlag(false);
  // };
  const [num, setNum] = useState(0);

  // 新しくおまじないを作ります🤗
  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3); //0,1,2
    setNum(random); //ボタンが押されるたびにランダムな数字が作られて、それが設定される
  };

  return (
    <>
      <Form />
      <br />
      <br />

      {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}

      <h1>{num}</h1>
      <button onClick={handleNumClick}>ボタン</button>
      {/* 条件分岐の練習 */}
      {flag && <h1>今はtrueです</h1>}
      {!flag && <h1>今はfalseです</h1>}

      <div>{test}</div>
      <button onClick={handleFlagClick}>ボタンを押してみましょう</button>
      <Test
        gs="07月30日react2回目"
        lab="07月123react2回目"
        react="目じるしの練習をしています"
      />

      <Button text="送信" />
      <br />
      <Button text="登録" />
    </>
  );
}

export default App;
