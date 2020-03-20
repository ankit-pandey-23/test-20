import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule,MatButtonModule,MatDialogModule,MatTableModule} from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PollsListingComponent } from './components/polls-listing/polls-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PollsListingComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: PollsListingComponent },
      { path: 'list',component: PollsListingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
