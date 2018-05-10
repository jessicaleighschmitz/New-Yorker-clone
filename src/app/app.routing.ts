import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SubscribeComponent }   from './subscribe/subscribe.component';
import { CultureComponent }   from './culture/culture.component';
import { BooksComponent }   from './books/books.component';
import { PoliticsComponent } from './politics/politics.component';

const appRoutes: Routes = [
{
  path: '',
  component: NewsComponent
},
{
  path: 'subscribe',
  component: SubscribeComponent
},
{
  path: 'culture',
  component: CultureComponent
},
{
  path: 'books',
  component: BooksComponent
},
{
  path: 'politics',
  component: PoliticsComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
