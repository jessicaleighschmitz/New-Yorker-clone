import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { routing } from './app.routing';
import { ShowComponent } from './show/show.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CategoryPoliticsPipe } from './categoryPolitics.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CultureComponent } from './culture/culture.component';
import { BooksComponent } from './books/books.component';
import { PoliticsComponent } from './politics/politics.component';
import { CategoryCulturePipe } from './categoryCulture.pipe';
import { CategoryBooksPipe } from './categoryBooks.pipe'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ShowComponent,
    SubscribeComponent,
    CultureComponent,
    BooksComponent,
    PoliticsComponent,
    CategoryPoliticsPipe,
    CategoryCulturePipe,
    CategoryBooksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
