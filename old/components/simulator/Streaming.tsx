import React from 'react';
import values from '../../values';
import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';
import { formatGES, formatKWh } from '../../utils';

type Props = {
  youtubeMinutes: number,
  netflixMinutes: number,
  spotifyMinutes: number,
  onUpdateYoutube: (value: number) => void,
  onUpdateNetflix: (value: number) => void,
  onUpdateSpotify: (value: number) => void,
}

export default function Streaming(props: Props) {
  return <Section
    title="Vos vidéos et votre musique"
    description={<>
      <p>Chaque heure passée sur une vidéo en streaming consomme {formatKWh((values.kwh.youtube + values.kwh.netflix) / 2 * 60)} et émet environ {formatGES((values.ges.youtube + values.ges.netflix) / 2 * 60)} ! C'est de loin l'usage d'internet qui a le plus d'impact environnemental.</p>
      <p>Une heure de musique écoutée en ligne (et sans vidéo) consomme {formatKWh(values.kwh.spotify * 60)} et entraine l'émission de {formatGES(values.ges.spotify * 60)}.</p>
    </>}
    animation={require('../../assets/animations/streaming.json')}
    counters={<>
      <Counter title="Minutes passé sur Youtube par jour" description="Indiquez ici le temps que vous y passez chaque jour" value={props.youtubeMinutes} onUpdate={value => props.onUpdateYoutube(value)} step={10} />
      <Counter title="Minutes passé sur Netflix par jour" description="Indiquez ici le temps que vous y passez chaque jour" value={props.netflixMinutes} onUpdate={value => props.onUpdateNetflix(value)} step={10} />
      <Counter title="Minutes de musique écoutées par jour" description="Sur des services comme Spotify, Deezer, Youtube Musique (et non Youtube), etc." value={props.spotifyMinutes} onUpdate={value => props.onUpdateSpotify(value)} step={20} />
    </>}
    footer={
      <>
        <p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
        <Sum kwh={props.youtubeMinutes * values.kwh.youtube + props.netflixMinutes * values.kwh.netflix + props.spotifyMinutes * values.kwh.spotify} ges={props.youtubeMinutes * values.ges.youtube + props.netflixMinutes * values.ges.netflix + props.spotifyMinutes * values.ges.spotify} />
      </>
    }
  >
    <p>Chaque année, dans le monde, YouTube et les plateformes de vidéos en ligne génèrent <b>65 millions</b> de tonnes de CO<sub>2</sub>.</p>
    <p>Les services de VOD comme Netflix ou Amazon prime en génèrent, quant à eux, <b>102 millions</b>.</p>
    <p>Combinés, ils dégagent plus de <b>170 millions</b> de tonnes de CO<sub>2</sub> sur une année.</p>
  </Section>;
}
