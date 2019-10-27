import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-html-input',
  templateUrl: './html-input.component.html',
  styleUrls: ['./html-input.component.css']
})
export class HtmlInputComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}
