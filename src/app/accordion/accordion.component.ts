import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor(alertConfig: NgbAlertConfig, config: NgbAccordionConfig) {
    config.type = 'dark'
    alertConfig.type = 'info'
   }

  ngOnInit() {
  }

}
