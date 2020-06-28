import { Component, OnInit } from '@angular/core';
import { LibraryModel } from './libraryItemModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraryList : LibraryModel[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<LibraryModel[]>('http://localhost:8080/library/find/library').subscribe(
      (data: LibraryModel[]) => {
          this.libraryList = data;
      }
  )
  }

}
