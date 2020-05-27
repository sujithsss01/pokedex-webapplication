import Route from '@ember/routing/route';
import fetch from 'fetch';
export default class PokedexDetailsRoute extends Route {
model(params){
 return fetch('https://api.jsonbin.io/b/' + params.api_id +'/latest').then(function(response) {
      return response.json();
    });
}
}