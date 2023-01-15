import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from 'src/model/Employe';



@Injectable({

    providedIn: 'root'

})

export class ServiceEmployer{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getEmployer():Observable<Employe[]>{
        return this.http.get<Employe[]>(`${this.apiServiceUrl}/listEmployer`);
    }
    
    public postEmployer(employer:any){
        return this.http.post(`${this.apiServiceUrl}/saveEmployer`, employer);
    }
     public getIdEmployer(id:number){
        return this.http.get<Employe[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putEmployer(data:any,id:number):Observable<Employe[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateEmployer/`+id,data);
    }

    public deleteEmployer(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteEmployer/`+id);
    }
    
 

}