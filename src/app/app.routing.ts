import { RouterModule, Routes } from "@angular/router";
import { CollectionComponent } from "./collection.component";
import { LibraryComponent } from "./library.component";

const APP_ROUTES: Routes = [    // array of objects

  /* In redirectTo property of the first object, a path that starts with a slash symbol '/' is an absolute path,
   *  and a path without a slash symbol is a relative path, which is appended to the end of URL*/
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'library', component: LibraryComponent },
  { path: 'collection', component: CollectionComponent }
]

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
