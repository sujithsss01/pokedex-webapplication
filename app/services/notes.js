import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NotesService extends Service {
@tracked noteCollection =[];
addNote(note){
this.noteCollection.addObject(note);
console.log(this.noteCollection);
}
}
