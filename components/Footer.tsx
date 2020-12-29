export default function footer() {
  return <footer>
    <div className="sponsors">
      <p>Avec la participation de :</p>
      <div className="flex">
        <img src={require('../assets/images/meuse.png')} alt="meuse logo" />
        <img src={require('../assets/images/grand-est.jpg')} alt="grand est logo" />
        <img src={require('../assets/images/dreal.jpg')} alt="dreal logo" />
      </div>
    </div>
  </footer>;
}