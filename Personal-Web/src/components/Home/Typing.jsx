import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  const [firstTypewriterDone, setFirstTypewriterDone] = useState(false);

  return (
    <>
      {!firstTypewriterDone && (
        <Typewriter
          options={{
            strings: ["Welcome To My Blog"],
            autoStart: true,
            loop: false,
            deleteSpeed: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hope You Enjoyed Reading This Blog")
              .pauseFor(1500)
              .deleteAll()
              .typeString("I'm Indonesian, I'm Currently Interested In")
              .pauseFor(1500)
              .callFunction(() => {
                setFirstTypewriterDone(true);
              })
              .start();
          }}
        />
      )}
      {firstTypewriterDone && (
        <Typewriter
          options={{
            strings: [
              "Web Developer",
              "MERN Stack Developer",
              "Data Scientist",
              "Data Analyst",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )}
    </>
  );
}

export default Typing;
