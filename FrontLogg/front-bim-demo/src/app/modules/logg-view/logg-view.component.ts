import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logg-view',
  templateUrl: './logg-view.component.html',
  styleUrls: ['./logg-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
