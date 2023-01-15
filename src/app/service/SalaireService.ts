import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from 'src/model/Employe';



@Injectable({

    providedIn: 'root'

})

export class SalaireService{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getSalaire():Observable<any[]>{
        return this.http.get<any[]>(`${this.apiServiceUrl}/listSalaire`);
    }
    
    public postSalaire(Salaire: any){
        return this.http.post(`${this.apiServiceUrl}/saveSalaire`, Salaire);
    }
     public getIdSalaire(id:number){
        return this.http.get<any[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putSalaire(data:any,id:number):Observable<Employe[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateSalaire/`+id,data);
    }

    public deleteSalaire(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteSalaire/`+id);
    }
    
 

}