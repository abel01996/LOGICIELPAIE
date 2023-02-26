import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({

    providedIn: 'root'

})

export class FichePaieService{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getFichePaie():Observable<any[]>{
        return this.http.get<any>(`${this.apiServiceUrl}/listFichePaie`);
    }
    
    public postFichePaie(fiche: any){
        return this.http.post(`${this.apiServiceUrl}/saveFichePaie`, fiche);
    }
    //  public getIdFichePaie(id:number){
    //     return this.http.get<any>(`${this.apiServiceUrl}`+'/'+id);
    //  }
        
    public  getIdFichePaie(data:any,id:number):Observable<any[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/detailFiche/`+id,data);
    }

    public deleteContrat(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteFiche/`+id);
    }
    
 

}