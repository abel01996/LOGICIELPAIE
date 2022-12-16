import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from 'src/model/Employe';
import { ModelPaie } from 'src/model/ModelPaie';
import { SituaFamille } from 'src/model/SituaFamille';



@Injectable({

    providedIn: 'root'

})

export class SituaFamilleService{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getSituaFamille():Observable<SituaFamille[]>{
        return this.http.get<SituaFamille[]>(`${this.apiServiceUrl}/listSituaFamille`);
    }
    
    public postSituaFamille(employer: SituaFamille){
        return this.http.post(`${this.apiServiceUrl}/saveSituaFamille`, employer);
    }
     public getIdSituaFamille(id:number){
        return this.http.get<SituaFamille[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putSituaFamille(data:any,id:number):Observable<SituaFamille[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateSituaFamille/`+id,data);
    }

    public deleteSituaFamille(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteSituaFamille/`+id);
    }
    
    }