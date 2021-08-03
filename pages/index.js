import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function HomePage() {
  const [pword, setPword] = useState("");
  // const [pwlength, setLength] = useState(8);

  const charlist =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function genPword() {
    // charlist.length = 72
    // use for loop to build 16 char string using charlist and return
    let newPW = "";
    for (let i = 0; i < 16; i++) {
      let randNum = Math.floor(Math.random() * charlist.length);
      newPW += charlist.substring(randNum, randNum + 1);
    }
    console.log(newPW);
    return newPW;
  }

  function handleGen() {
    return setPword(genPword);
  }

  function handleCopy() {
    // const copyText = pword;
    // copyText.select();
    // document.execCommand("copy");
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        <h1>Password generator!</h1>
        <div>
          <button type="button" onClick={handleGen}>
            Generate
          </button>
          <button type="button" /* onClick={handleCopy} */>Copy text</button>
        </div>
        <h3>{pword}</h3>
      </main>
    </div>
  );
}
