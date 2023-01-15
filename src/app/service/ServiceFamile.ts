import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Famille } from "src/model/Famillle";

@Injectable({

    providedIn: 'root'

})

export class ServiceFamille{

    private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";
  
      constructor(private http: HttpClient) {}
  
      public getEpouse():Observable<Famille[]>{
          return this.http.get<Famille[]>(`${this.apiServiceUrl}/listEpouse`);
      }
      
      public postEpouse(Epouse:any){
          return this.http.post(`${this.apiServiceUrl}/saveEpouse`, Epouse);
      }
       public getIdEpouse(id:number){
          return this.http.get<any>(`${this.apiServiceUrl}`+'/'+id);
       }
          
      public putEpouse(data:any,id:number){
          return this.http.put<any>(`${this.apiServiceUrl}/updateEpouse/`+id,data);
      }
  
      public deleteEpouse(id:number):Observable<void>{ 
          return this.http.delete<any>(`${this.apiServiceUrl}/deleteEpouse/`+id);
      }
      
      ////////////////////////////////Enfant////////////////////////////////
   
      public getEnfant():Observable<Famille[]>{
        return this.http.get<Famille[]>(`${this.apiServiceUrl}/listEnfant`);
    }
    
    public postEnfant(Enfant:any){
        return this.http.post(`${this.apiServiceUrl}/saveEnfant`, Enfant);
    }
     public getIdEnfant(id:number){
        return this.http.get<any>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putEnfant(data:any,id:number){
        return this.http.put<any>(`${this.apiServiceUrl}/updateEnfant/`+id,data);
    }

    public deleteEnfant(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteEnfant/`+id);
    }
  }