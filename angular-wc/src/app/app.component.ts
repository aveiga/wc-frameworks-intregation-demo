import { Component, Input, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from "@angular/material";

interface GraphEntry {
  x: Number;
  y: Number;
}

@Component({
  selector: 'custom-angular-grid',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
})

export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['x', 'y'];
  @Input() dataSource: MatTableDataSource<GraphEntry> = new MatTableDataSource<GraphEntry>();

  // Note: this is how a custom method is specified
  @Input()
  public addValues = (v: GraphEntry) => {
    console.log(this.dataSource);
    console.log(this);
    this.dataSource.data = this.dataSource.data.concat([v]);
    this.changeDetectorRefs.detectChanges();
  };

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = [{
      x: 0,
      y: 0
    }];
  }
  

  // NOTE: This is how a Custom Event is setup
  // @Output('nameobj') nameObj: EventEmitter<NameObj> = new EventEmitter();

  setFocus(value) {
    
    
    // NOTE: This is how a custom event is dispatched
    // let obj:NameObj = {
    //   name: value,
    //   number: 1
    // };

    // this.nameObj.emit(obj);
  }
}