import { Component, OnInit } from '@angular/core';
import { LinguagensService } from '../linguagens.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.css']
})
export class LinguagensComponent implements OnInit {

  linguagens: any = {};

  constructor(private linguagensService: LinguagensService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.linguagensService.getLanguages()
        .subscribe(value => {
          this.linguagens = value;
        })
    });
  }

}
