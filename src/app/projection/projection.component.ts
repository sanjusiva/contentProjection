import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent implements OnInit {

  @ContentChild('user')
  userTemplate:TemplateRef<any> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
// A component can get a reference to this template content 
// by using ContentChild decorator 
//ContentChild : Use to get the first element or the directive matching the selector from the content DOM.