import { Component, OnInit } from '@angular/core';
import { KandidatenService } from '../kandidaten.service';
import { ActivatedRoute } from '@angular/router';
import { Kandidaat } from '../kandidaten.model';

@Component({
  selector: 'app-notities',
  templateUrl: './notities.component.html',
  styleUrls: ['./notities.component.css']
})
export class NotitiesComponent implements OnInit {

  public kandidaat = new Kandidaat;
  public show: boolean[] = [false];
  public notes: string[] = [];
  public addedNote = "";
  public editedNote = "";
  public noteId = 0;

  constructor(private kandidatenService: KandidatenService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  setKandidaat(){
    let id = this.route.snapshot.params['id'];
    this.kandidaat = this.kandidatenService.getKandidaat(id);
  }

  setNotes(){
    let id = this.route.snapshot.params['id'];
    this.notes = this.kandidatenService.getKandidaat(id).notes;
  }

  addNote(addedNote: string){
    let id = this.route.snapshot.params['id'];
    this.kandidatenService.addNote(id, addedNote);
    this.show.push(false);
  }

  editNote(oldNote: string, editedNote: string){
    let id = this.route.snapshot.params['id'];
    this.kandidatenService.editNote(id, oldNote, editedNote);
  }

  removeNote(removedNote: string){
    let id = this.route.snapshot.params['id'];
    this.kandidatenService.removeNote(id, removedNote);
    delete this.show[this.noteId];
  }

  toggle(id: number) {
    this.noteId = id;
    this.show[this.noteId] = !this.show[this.noteId];
    console.log(this.noteId)
  }
}
