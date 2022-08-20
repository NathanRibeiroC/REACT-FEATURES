import React from "react";
// Stylesheet
import "../style.css";
import { EmailButton } from "./Buttons";
import { LinkedinButton } from "./Buttons";
// Images

export default function Main() {
  return (
    <main className="main--section">
      <h1>Goku</h1>
      <h2>Professional Saiyajin</h2>
      <h3>son_goku@dbz.com</h3>
      <section className="button--section">
        <EmailButton />
        <LinkedinButton />
      </section>
      <section className="description--section">
        <h1>About</h1>
        <p className="about--p">Hi i'am Son Goku, also known as Kakarotto, during
          my journey as a Sayajin i faced a lot of bad villains
          and saved the world a lot of times. If you want someone 
          for the fight you can count on me.
        </p>

        <h1>Interests</h1>
        <p>Food. Music. Karate. Judo. Jiu-Jitsu. Fight. Traveling.
          Getting Out With Friends.
        </p>
      </section>
    </main>
  );
}
