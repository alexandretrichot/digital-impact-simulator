export default function footer() {
  return <footer id="app-footer">
    <hr />
    <div className="sponsors">
      <p>Sur l'initiative de <a href="https://meusenature.fr/">Meuse Nature Environnement</a>, conçu et développé par <a href="https://github.com/alexandretrichot/">Alexandre TRICHOT</a></p>
      <p>Animations de <a href="https://lottiefiles.com/">LottieFiles</a> et icons de <a href="https://flaticon.com/">Flaticon</a>.</p>

      <p>Sources des données disponibles sur <a href="https://github.com/alexandretrichot/digital-impact-simulator#sources">GitHub</a>.</p>

      <p>Avec la participation du Département de la Meuse, de la Région Grand Est et de la DREAL Grand Est</p>
      <div className="flex">
        <div>
          {/* <img src={require('../assets/images/meuse.png')} alt="Logo de la Meuse" /> */}
          <img src={require('../assets/images/grand-est.jpg')} alt="Logo du Grand-Est" />
          {/* <img src={require('../assets/images/dreal.jpg')} alt="Logo de la DREAL" /> */}
        </div>
      </div>
    </div>
  </footer>;
}