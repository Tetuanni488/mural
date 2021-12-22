import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CanvasBoardComponent } from './components/canvas-board/canvas-board.component';
import { ComponentViwerComponent } from './components/component-viwer/component-viwer.component';

const routes: Routes = [
  { path: 'editor', component: CanvasBoardComponent},
  { path: 'about', component: AboutComponent },
  { path: 'about/:section', component: AboutComponent, children:[
    {path: 'overview',component: ComponentViwerComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
