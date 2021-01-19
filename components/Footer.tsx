export default function footer() {
  return <footer id="app-footer">
    <div className="sponsors">
      <p>Sur l'initiative de <a href="https://meusenature.fr/">Meuse Nature Environnement</a>, conçu et développé par <a href="https://github.com/alexandretrichot/">Alexandre TRICHOT</a></p>

      <p>Avec la participation du département de la Meuse, de la région Grand Est et de la DREAL</p>
      <div className="flex">
        <img src={require('../assets/images/meuse.png')} alt="Logo de la Meuse" />
        <img src={require('../assets/images/grand-est.jpg')} alt="Logo du Grand-Est" />
        <img src={require('../assets/images/dreal.jpg')} alt="Logo de la DREAL" />
      </div>
    </div>
  </footer>;
}