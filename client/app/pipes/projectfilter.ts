import {Injectable, Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'projectfilter',
   // pure:false
})
export class ProjectFilter implements PipeTransform {
        transform(projects: any[], arg1: any): any {
        if(projects!=undefined){

         //arg1 -> category of project

         return projects.filter((project) => project.category==arg1);
        
        }
    }

}


//<div *ngFor="let item of items| myfilter: actualPage:maxItems let idx=index">