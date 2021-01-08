import Lottie from 'lottie-react';

export default function Intro() {
  return <header id="intro">

    <h1>Pollution Numérique</h1>
    <h3>Simulateur d'impact</h3>
    <div className="flex">
    <Lottie animationData={require('../assets/animations/booking.json')} />
      <div>
        <p>Vous êtes-vous déjà demandé si votre consommation d’internet avait un impact sur l’environnement ?</p>
        <p>Le cas échéant, avez-vous une idée de ce que cela représente ?</p>
        <p>On vous propose d'y jeter un oeil !</p>
        <a className="btn" href="#search">Faites le test !</a>
      </div>
    </div>
  </header>
}