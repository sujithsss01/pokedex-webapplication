import Route from '@ember/routing/route';
import fetch from 'fetch';
import { later } from '@ember/runloop';
export default class PokedexDetailsRoute extends Route {
/*afterModel(){
  return reject('error');
}*/
beforeModel(){
 return new Promise(function(resolve) {
      later(function() {
        resolve({ msg: 'LOADING' });
      }, 1000);
    });
}
model(params){
 return {name:"bulbasaur",id:1,weight:'99',height:'1m',avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",types:'grass',api_id:"5e39187dbd805113c043b181"};
}
}