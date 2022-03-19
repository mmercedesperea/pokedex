interface ServiceInit {
  status: 'init';
}

interface ServiceLoading {
  status: 'loading';
}

interface ServiceLoaded<P> {
  status: 'loaded';
  payload: P;
}
interface ServiceError {
  status: 'error';
  error: Error;
}
export type IService<P> = ServiceInit | ServiceLoading | ServiceLoaded<P> | ServiceError;

export interface IPokemon {
  name: string;
  url: string;
}
export interface IPokemons {
  results: IPokemon[];
}

interface Abilities {
  ability: Ability;
}
interface Ability {
  name: string;
}
interface Move {
  name: string;
}

interface Moves {
  move: Move;
}
interface Stat {
  name: string;
}

interface Stats {
  base_stat: number;
  stat: Stat;
}
interface Types {
  type: Type;
}

interface Type {
  name: string;
}

interface sprite {
  front_default: string;
}
export interface IPokemonDetail {
  name: string;
  height: number;
  id: number;
  weight: number;
  sprites: sprite;
  moves: Moves[];
  abilities: Abilities[];
  stats: Stats[];
  types: Types[];
}

export interface IDParams {
  id: string;
}

export interface IPagination {
  data: IPokemon[];
  dataLimit: number;
}
