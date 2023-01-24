import { Injectable } from '@angular/core';
import { Kandidaat } from './kandidaten.model';

@Injectable({
  providedIn: 'root'
})
export class KandidatenService {
  private kandidaten = [
    {
      id: 0,
      name: 'Yens',
      img: '../../../assets/Kandidaten-pics/Yens.jpg',
      description: '27 jaar, Accountmanager',
      notes: [
        'Yens doet wel heel raar in aflevering 5.',
        'Zou Yens de mol kunnen zijn ?'
      ]
    },
    {
      id: 1,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 2,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 3,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 4,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 5,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 6,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 7,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 8,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 9,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 10,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
    {
      id: 11,
      name: 'Jens',
      img: '../../../assets/Kandidaten-pics/Jens.jpg',
      description: '31 jaar, Schrijnwerker',
      notes: [
        'Jens doet wel heel raar in aflevering 5.'
      ]
    },
  ]
  
  constructor() { 
  }
  
  ngOnInit(){
  }

  getKandidaten(): Kandidaat[] {
    return this.kandidaten;
  }

  getKandidaat(id: number){
    return this.kandidaten[id];
  }

  addNote(id: number, note: string){
    this.kandidaten[id].notes.push(note);
  }

  editNote(id: number, note: string, newNote: string){
    let oldNoteId = this.kandidaten[id].notes.indexOf(note);
    this.kandidaten[id].notes[oldNoteId] = newNote;
    console.log(oldNoteId)
  }

  removeNote(id: number, note: string){
    let noteId = this.kandidaten[id].notes.indexOf(note);
    delete this.kandidaten[id].notes[noteId];
  }
}
