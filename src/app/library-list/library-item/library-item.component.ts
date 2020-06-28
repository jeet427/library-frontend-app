import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { BookModel } from './bookModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.css']
})
export class LibraryItemComponent implements OnInit {

  selectedLId : number;
  filteredBookList: BookModel[] = [

  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.selectedLId = +this.route.snapshot.params['id'];
    this.route.params.subscribe (
      (data: Data) => {
        this.selectedLId = data['id'];
        this.getFilteredBookList(this.selectedLId);
      }
    )
  }

  getFilteredBookList(lId: number) {
    this.filteredBookList = [];
    this.http.get<BookModel[]>('http://localhost:8080/book/find/library/'+lId)
                            .subscribe(
                              (data: BookModel[]) => {
                                this.filteredBookList = data;
                              }
                            )
  }


}
