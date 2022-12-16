import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Agence } from "src/model/Agence";

@Injectable({

    providedIn: 'root'

})

export class ServiceAgence{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {} public getAgence():Observable<Agence[]>{
        return this.http.get<Agence[]>(`${this.apiServiceUrl}/listAgence`);
    }
    
    public postAgence(Agence: Agence){
        return this.http.post(`${this.apiServiceUrl}/saveAgence`, Agence);
    }
     public getIdAgence(id:number){
        return this.http.get<Agence[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putAgence(data:any,id:number):Observable<Agence[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateAgence/`+id,data);
    }

    public deleteAgence(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteAgence/`+id);
    }
}