import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map';  

@Injectable()
export class ProjectService{
    constructor(private http:Http){
        console.log('Projects service initialized...')
    }

    getProjects(){
       return this.http.get('/api/projects')
        .map(res => res.json()); 
    }

}