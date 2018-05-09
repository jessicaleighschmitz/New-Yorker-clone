import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { routing } from './app.routing';
import { ShowComponent } from './show/show.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CategoryPipe } from './category.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ShowComponent,
    SubscribeComponent,
    CategoryPipe
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
