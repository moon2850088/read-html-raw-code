import { Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlContent: string;
  constructor(private view: ViewContainerRef){
    setTimeout(() => this.htmlContent = (view.element.nativeElement as HTMLElement).innerHTML);
  }
}
