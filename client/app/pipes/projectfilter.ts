import {Injectable, Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'projectfilter',
   // pure:false
})
export class ProjectFilter implements PipeTransform {
        transform(projects: any[], arg1: any): any {
        if(projects!=undefined){

         //arg1 -> category of project
         //arg2 -> index of project
         
    
         //filter projects by chosen category(arg1) and then order them in descending index order 
         return projects.filter((project) => project.category==arg1).sort((project1, project2) => Number(project2.index) - Number(project1.index));
        
        }
    }

}


