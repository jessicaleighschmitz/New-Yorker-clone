import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SubscribeComponent }   from './subscribe/subscribe.component';

const appRoutes: Routes = [
{
  path: '',
  component: NewsComponent
},
{
  path: 'subscribe',
  component: SubscribeComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
