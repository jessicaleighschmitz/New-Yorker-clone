import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
{
  path: '',
  component: NewsComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
