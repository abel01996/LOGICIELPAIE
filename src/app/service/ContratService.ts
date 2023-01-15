import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from 'src/model/Contrat';
import { Employe } from 'src/model/Employe';



@Injectable({

    providedIn: 'root'

})

export class ContratService{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getContrat():Observable<Contrat[]>{
        return this.http.get<Contrat[]>(`${this.apiServiceUrl}/listContrat`);
    }
    
    public postContrat(contrat: any){
        return this.http.post(`${this.apiServiceUrl}/saveContrat`, contrat);
    }
     public getIdContrat(id:number){
        return this.http.get<Contrat[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putContrat(data:any,id:number):Observable<Contrat[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateContrat/`+id,data);
    }

    public deleteContrat(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteContrat/`+id);
    }
    
 

}