import {Injectable} from '@angular/core'; //to Inject service as dependency
import {Http, Headers} from '@angular/http'; //to use http
import 'rxjs/add/operator/map';  //to listen requests and send data as observable

@Injectable()
export class ProjectService{
    constructor(private http:Http){
        console.log('Projects service initialized...')
    }

    getProjects(){
       // return this.http.get('http://localhost:3000/api/projects')
       return this.http.get('/api/projects')
        .map(res => res.json()); //return as observable
    }

}