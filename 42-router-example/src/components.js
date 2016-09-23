import React from 'react';
import { Link } from 'react-router';

export function Home() {
  return <div>
    <h1>Home</h1>
    <p>Wilkommen zur React Router Beispiel Anwendung</p>
    <Link to='/about'>Mehr über uns</Link>
  </div>;
}

export function About() {
  return <div>
    <h1>About</h1>
    <Link to='/home'>Zurück zur Startseite</Link>
  </div>
}
