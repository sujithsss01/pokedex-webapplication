import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
export default class PokedexRoute extends Route {
	beforeModel(){
 return new Promise(function(resolve) {
      later(function() {
        resolve({ msg: 'LOADING' });
      }, 1000);
    });
}
model(){
return [
	{name:"bulbasaur",id:1,avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",api_id:"5e39187dbd805113c043b181"},
	{name:"ivysaur",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",api_id:"5e39191df47af813bace6615",id:2},
	{name:"venusaur",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",api_id:"5e39154bf47af813bace647a",id:3},
	{name:"charmander",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",api_id:"5e39156479afb813dc197c4c",id:4},
	{name:"charmeleon",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",api_id:"5e391581bd805113c043b06b",id:5},
	{name:"charizard",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",api_id:"5e39159c79afb813dc197c5b",id:6},
	{name:"squirtle",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",api_id:"5e3915c9bd805113c043b087",id:7},
	{name:"wartortle",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",api_id:"5e3915dfbd805113c043b08e",id:8},
	{name:"blastoise",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",api_id:"5e3915f9f47af813bace64ad",id:9},
	{name:"caterpie",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",api_id:"5e391621f47af813bace64ba",id:10},
	{name:"metapod",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",api_id:"5e39163cf47af813bace64c7",id:11},
	{name:"butterfree",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",api_id:"5e391652f47af813bace64d1",id:12},
	{name:"weedle",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",api_id:"5e391687bd805113c043b0c2",id:13},
	{name:"kakuna",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",api_id:"5e39173779afb813dc197ce6",id:14},
	{name:"beedrill",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",api_id:"5e39177d79afb813dc197d05",id:15},
	{name:"pidgey",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",api_id:"5e39179379afb813dc197d0e",id:16},
	{name:"pidgeotto",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",api_id:"5e3917a779afb813dc197d17",id:17},
	{name:"pidgeot",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",api_id:"5e3917c179afb813dc197d20",id:18},
	{name:"rattata",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",api_id:"5e3917e179afb813dc197d2b",id:19},
	{name:"raticate",avatar:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",api_id:"5e3917f2f47af813bace6565",id:20}
];
}
	
}
