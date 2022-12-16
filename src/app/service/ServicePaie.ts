import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from 'src/model/Employe';
import { ModelPaie } from 'src/model/ModelPaie';



@Injectable({

    providedIn: 'root'

})

export class ServicePaie{

  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    constructor(private http: HttpClient) {}

    public getBanque():Observable<ModelPaie[]>{
        return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listBanque`);
    }
    
    public postBanque(employer: Employe){
        return this.http.post(`${this.apiServiceUrl}/saveBanque`, employer);
    }
     public getIdBanque(id:number){
        return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
     }
        
    public putBanque(data:any,id:number):Observable<ModelPaie[]>{
        return this.http.put<any>(`${this.apiServiceUrl}/updateBanque/`+id,data);
    }

    public deleteBanque(id:number):Observable<void>{ 
        return this.http.delete<any>(`${this.apiServiceUrl}/deleteBanque/`+id);
    }
    
         ///////////////////////////////////////Service Classes/////////////////////////////////////////////

         public getClasse():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listClasse`);
        }
        
        public postClasse(Classe: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveClasse`, Classe);
        }
         public getIdClasse(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putClasse(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateClasse/`+id,data);
        }
    
        public deleteClasse(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteClasse/`+id);
        }
        ///////////////////////////////////////Service Compte/////////////////////////////////////////////

        public getNumCompte():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listCompte`);
        }
        
        public postNumCompte(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveCompte`, Compte);
        }
         public getIdNumCompte(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putNumCompte(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateCompte/`+id,data);
        }
    
        public deleteNumCompte(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteCompte/`+id);
        }

         ///////////////////////////////////////Service Compte/////////////////////////////////////////////

        public getCorps():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listCorps`);
        }
        
        public postCorps(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveCorps`, Compte);
        }
         public getIdCorps(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putCorps(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateCorps/`+id,data);
        }
    
        public deleteCorps(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteCorps/`+id);
        }

         ///////////////////////////////////////Service Echelon/////////////////////////////////////////////

         public getEchelon():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listEchelon`);
        }
        
        public postEchelon(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveEchelon`, Compte);
        }
         public getIdEchelon(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putEchelon(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateEchelon/`+id,data);
        }
    
        public deleteEchelon(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteEchelon/`+id);
        }

        
         ///////////////////////////////////////Service ModePaie/////////////////////////////////////////////

         public getModePaie():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listModePaie`);
        }
        
        public postModePaie(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveModePaie`, Compte);
        }
         public getIdModePaie(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putModePaie(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateModePaie/`+id,data);
        }
    
        public deleteModePaie(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteModePaie/`+id);
        }

        ///////////////////////////////////////Service Service/////////////////////////////////////////////

        public getService():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listService`);
        }
        
        public postService(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveService`, Compte);
        }
         public getIdService(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putService(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateService/`+id,data);
        }
    
        public deleteService(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteService/`+id);
        }


        ///////////////////////////////////////Service Statut/////////////////////////////////////////////

        public getStatut():Observable<ModelPaie[]>{
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listStatut`);
        }
        
        public postStatut(Compte: ModelPaie[]){
            return this.http.post(`${this.apiServiceUrl}/saveStatut`, Compte);
        }
         public getIdStatut(id:number){
            return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
         }
            
        public putStatut(data:any,id:number):Observable<ModelPaie[]>{
            return this.http.put<any>(`${this.apiServiceUrl}/updateStatut/`+id,data);
        }
    
        public deleteStatut(id:number):Observable<void>{ 
            return this.http.delete<any>(`${this.apiServiceUrl}/deleteStatut/`+id);
        }
///////////////////////////////////////Service TypePaie/////////////////////////////////////////////

public getTypepaie():Observable<ModelPaie[]>{
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listTypepaie`);
}

public postTypePaie(Compte: ModelPaie[]){
    return this.http.post(`${this.apiServiceUrl}/saveTypePaie`, Compte);
}
 public getIdTypePaie(id:number){
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
 }
    
public putTypePaie(data:any,id:number):Observable<ModelPaie[]>{
    return this.http.put<any>(`${this.apiServiceUrl}/updateTypepaie/`+id,data);
}

public deleteTypePaie(id:number):Observable<void>{ 
    return this.http.delete<any>(`${this.apiServiceUrl}/deleteTypePaie/`+id);
}


///////////////////////////////////////Service TypePaieREference/////////////////////////////////////////////

public getTypepaieRef():Observable<ModelPaie[]>{
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listTypepaieRef`);
}

public postTypePaieRef(Compte: ModelPaie[]){
    return this.http.post(`${this.apiServiceUrl}/saveTypePaieRef`, Compte);
}
 public getIdTypePaieRef(id:number){
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
 }
    
public putTypePaieRef(data:any,id:number):Observable<ModelPaie[]>{
    return this.http.put<any>(`${this.apiServiceUrl}/updateTypepaieRef/`+id,data);
}

public deleteTypePaieRef(id:number):Observable<void>{ 
    return this.http.delete<any>(`${this.apiServiceUrl}/deleteTypepaieRef/`+id);
}

///////////////////////////////////////Service Hierarchie/////////////////////////////////////////////

public getHierarchie():Observable<ModelPaie[]>{
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listHierarchie`);
}

public postHierarchie(Compte: ModelPaie[]){
    return this.http.post(`${this.apiServiceUrl}/saveHierarchie`, Compte);
}
 public getIdHierarchie(id:number){
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
 }
    
public putHierarchie(data:any,id:number):Observable<ModelPaie[]>{
    return this.http.put<any>(`${this.apiServiceUrl}/updateHierarchie/`+id,data);
}

public deleteHierarchie(id:number):Observable<void>{ 
    return this.http.delete<any>(`${this.apiServiceUrl}/deleteHierarchie/`+id);
}

///////////////////////////////////////Service EtatCivil/////////////////////////////////////////////

public getEtatCivil():Observable<ModelPaie[]>{
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listEtatCivil`);
}

public postEtatCivil(Compte: ModelPaie[]){
    return this.http.post(`${this.apiServiceUrl}/saveEtatCivil`, Compte);
}
 public getIdEtatCivil(id:number){
    return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}`+'/'+id);
 }
    
public putEtatCivil(data:any,id:number):Observable<ModelPaie[]>{
    return this.http.put<any>(`${this.apiServiceUrl}/updateEtatCivil/`+id,data);
}

public deleteEtatCivil(id:number):Observable<void>{ 
    return this.http.delete<any>(`${this.apiServiceUrl}/deleteEtatCivil/`+id);
}


}