import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { LibraryItemComponent } from './app/library-list/library-item/library-item.component';


const routes: Routes = [
    {path:"libraryList/:id", component: LibraryItemComponent}
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }