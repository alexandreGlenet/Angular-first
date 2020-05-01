import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // Permet de transformer le seleceteur en attribut et de l'appeler dans une div et plus en balise.<div app-server>
  // selector: '.app-servers', // Permet de changer le selecteur pour l'appeler comme une classe class="app-servers"
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
