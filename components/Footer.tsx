export default function footer() {
  return <footer id="app-footer">
    <div className="sponsors">
      <p>Ce site à été conçu sur l'initiative de <a href="https://meusenature.fr/">Meuse Nature Environnement</a> par <a href="https://github.com/alexandretrichot/">Alexandre TRICHOT</a></p>

      <p>Avec la participation de :</p>
      <div className="flex">
        <img src={require('../assets/images/meuse.png')} alt="Logo de la Meuse" />
        <img src={require('../assets/images/grand-est.jpg')} alt="Logo du Grand-Est" />
        <img src={require('../assets/images/dreal.jpg')} alt="Logo de la DREAL" />
      </div>
    </div>
  </footer>;
}