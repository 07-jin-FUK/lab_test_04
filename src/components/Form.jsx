import React, { useState, useEffect } from "react";
import { useForm } from "../hocks/useForm";

const Form = () => {
  const { name, email, data, handleEmailChange, handleNameChange } = useForm();
  return (
    <div>
      {/* データを表示 */}
      {data &&
        data.map((aa, zz) => (
          <div key={zz}>
            <h1>{zz}番目</h1>
            <p>{aa.id}</p>
            <p>{aa.title}</p>
            <p>{aa.userId}</p>
          </div>
        ))}
      ;{/*  */}
      {/* フォームのサンプルを記述していきます🤗 */}
      <div>
        <p>名前入力欄</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <p>メールアドレス入力欄</p>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      {/*  */}
      <br />
      <br />
      <p>名前入力：{name}</p>
      <p>email入力：{email}</p>
    </div>
  );
};

export default Form;
