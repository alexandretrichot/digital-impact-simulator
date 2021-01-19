import React from 'react';
import values from '../../values';
import Sum from '../Sum';
import Counter from '../Counter';
import Section from './Section';

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
    title="Vos soirées Netfilx"
    description="[Texte pour la VOD]"
    animation={require('../../assets/animations/streaming.json')}
    counters={<>
      <Counter title="Minutes passé sur Youtube par jours" description="" value={props.youtubeMinutes} onUpdate={value => props.onUpdateYoutube(value)} step={10} />
      <Counter title="Minutes passé sur Netflix par jours" description="" value={props.netflixMinutes} onUpdate={value => props.onUpdateNetflix(value)} step={10} />
      <Counter title="Minutes de musique écoutées par jours" description="Sur des services comme Spotify, Deezer, Youtube Musique (et non Youtube), etc." value={props.spotifyMinutes} onUpdate={value => props.onUpdateSpotify(value)} step={20} />
    </>}
    footer={
      <>
        <Sum kwh={props.youtubeMinutes * values.kwh.youtube + props.netflixMinutes * values.kwh.netflix + props.spotifyMinutes * values.kwh.spotify} ges={props.youtubeMinutes * values.ges.youtube + props.netflixMinutes * values.ges.netflix + props.spotifyMinutes * values.ges.spotify} />
      </>
    }
  >
    <p>Chaque années, YouTube et les plateformes de vidéos eu lignes génèrent <b>65 millions</b> de tonnes de CO<sub>2</sub>.</p>
    <p>Les services de VOD comme Netflix ou Amazon prime en génèrent quand à eux <b>102 millions</b>.</p>
    <p>Combinés, ils dégagent plus de <b>170 millions</b> de tonnes de CO<sub>2</sub> sur une année.</p>
  </Section>;
}
