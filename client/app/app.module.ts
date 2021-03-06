import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { TasksComponent }  from './components/tasks/tasks.component';
import { ProjectFilter }  from './pipes/projectfilter';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent,TasksComponent,ProjectFilter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
