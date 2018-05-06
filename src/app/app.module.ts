import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { routing } from './app.routing';
import { ShowComponent } from './show/show.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CultureComponent } from './culture/culture.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ShowComponent,
    SubscribeComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
