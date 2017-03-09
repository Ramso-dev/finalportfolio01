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
    category:String;



    constructor(private ProjectService:ProjectService){
        this.ProjectService.getProjects()
        .subscribe(projects =>{
            this.projects=projects;
            //console.log(projects);
            this.category="java";
            
        });

        
    }



   public  getCategory(category:String){
      // console.log("getCategory");console.log(category);
       this.category=category;
   }

}
