import Route from '@ember/routing/route';
import fetch from 'fetch';
export default class PokedexDetailsRoute extends Route {
model(params){
 return {name:"bulbasaur",id:1,weight:'100',height:'1m',avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",types:'grass',api_id:"5e39187dbd805113c043b181"};
}
}