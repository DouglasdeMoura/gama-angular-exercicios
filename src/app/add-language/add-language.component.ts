import { Component, OnInit } from '@angular/core';
import { Language } from 'src/typings/Language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: Language = {
    id: null,
    name: '',
    creator: '',
    year: ''
  };

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  submit() {
    this.languageService
      .addLanguage(this.language)
      .subscribe(() => {
        alert('Linguagem adicionada com sucesso');
      });
  }

}
