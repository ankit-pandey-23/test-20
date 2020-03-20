import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule,MatButtonModule,MatDialogModule,MatTableModule} from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
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
