import { Component } from '@angular/core';
import {ProjectService} from "./services/project.service"

@Component({
  moduleId:module.id,   //allows use of relative path in templateUrl
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[ProjectService]
})
export class AppComponent { }
