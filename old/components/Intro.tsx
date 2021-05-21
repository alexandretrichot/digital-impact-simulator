import Lottie from 'lottie-react';
import { formatGES, formatKWh } from '../utils';
import values from '../values';

export default function Intro() {
  return <header id="intro">
    <img className="mne-logo" src={require('../assets/images/mne.png')} alt="Logo de Meuse Nature Environnement" />

    <h1>Pollution Numérique</h1>
    <h3>Simulateur d'impact</h3>
    <div className="flex">
      <Lottie className="anim" animationData={require('../assets/animations/booking.json')} />
      <div>
        <p>Vous êtes-vous déjà demandé si votre consommation d’internet avait un impact sur l’environnement ?</p>
        <p>Le cas échéant, avez-vous une idée de ce que cela représente ? Ce que cela consomme en électricité (en Wh) et en émissions de gaz à effets de serre (équivalents de g de CO<sub>2</sub>) ?</p>
        <p>Pour vous rendre compte de votre impact, nous vous proposons ce simulateur d'impact.</p>
      </div>
    </div>

    <div className="frame">
      <p>Voici un ordre de grandeur de ce que représentent les chiffres à venir :</p>
      <div className="compare">
        <img src={require('../assets/icons/fridge.svg')} alt="Fridge icon" />
        <p>{formatKWh(values.frigoPerYear)} = <b>1</b> frigo ! (consommation d'électricité par un réfrigérateur pendant 1 an)</p>
      </div>
      <div className="compare">
        <img src={require('../assets/icons/car.svg')} alt="Car icon" />
        <p><b>10</b> Km = {formatGES(values.gesPerKmInCar * 10)} (émissions de gaz à effets de serre par un véhicule thermique qui roule 10 kilomètres)</p>
      </div>
    </div>

    <p>Alors, vous voulez y jeter un oeil ?</p>
    <a className="btn" href="#search">Faites le test !</a>
  </header>
}