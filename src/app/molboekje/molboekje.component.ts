import { Component, OnInit } from '@angular/core';
import { Kandidaat } from './kandidaten.model';
import { KandidatenService } from './kandidaten.service';

@Component({
  selector: 'app-molboekje',
  templateUrl: './molboekje.component.html',
  styleUrls: ['./molboekje.component.css']
})
export class MolboekjeComponent implements OnInit {

  kandidaten: Kandidaat[] = [];
  constructor(private kandidatenService: KandidatenService) { }

  ngOnInit(): void {
    this.kandidaten = this.kandidatenService.getKandidaten();
  }

}
