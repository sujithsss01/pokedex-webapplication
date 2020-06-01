import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PokedexDetailsController extends Controller {
	@service notes;
	@action
	addNote(note){
		this.notes.addNote(note);
	}
}
