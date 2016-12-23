import { Component } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../../Project';

@Component({
moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
})

export class TasksComponent { 
    projects: Project[];
    constructor(private ProjectService:ProjectService){
        this.ProjectService.getProjects()
        .subscribe(projects =>{
            this.projects=projects;
            //console.log(projects);
        });
    }

}
