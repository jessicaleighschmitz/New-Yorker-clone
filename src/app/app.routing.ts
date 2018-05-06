import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SubscribeComponent }   from './subscribe/subscribe.component';
import { CultureComponent } from './culture/culture.component';

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
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
