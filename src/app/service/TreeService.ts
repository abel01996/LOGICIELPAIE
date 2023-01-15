import { NestedTreeControl } from "@angular/cdk/tree";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Famille } from "src/model/Famillle";
import { ModelPaie } from "src/model/ModelPaie";
import { TodoItemNode } from "src/model/Treeview";

const TREE_DATA: TodoItemNode[] = [];

@Injectable({

    providedIn: 'root'

})

export class TreeService{


  // private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";
  // treeControl = new NestedTreeControl<TodoItemNode[]>(node => node.children);
  // dataSource = new MatTreeNestedDataSource<TodoItemNode[]>();
 

  constructor(private http:HttpClient){
    // this.dataSource.data = TREE_DATA
 }

    httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
        // public getTree(){
        //   this.http.get(`${this.apiServiceUrl}/listDirection`, this.httpOptions).subscribe(
        //     (res : any) => { this.TREE_DATA.push(res);console.log('Res: ', res); },
        //   );
        // }
    
  
 
    // private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";

    //  dataSource: any;
    //   TREE_DATA: TodoItemNode[] = [];
  
    //   constructor(private http: HttpClient) {
    //     this.dataSource.data = this.TREE_DATA;
    //   }

    //   
    //   hasChild = (_: number, node: TodoItemNode) => !!node.children && node.children.length > 0;
    //   };
  
      // public getDirect():Observable<ModelPaie[]>{
      //     return this.http.get<ModelPaie[]>(`${this.apiServiceUrl}/listDirection`);
      // }
      
    //   public postEpouse(Epouse:any){
    //       return this.http.post(`${this.apiServiceUrl}/saveEpouse`, Epouse);
    //   }
    //    public getIdEpouse(id:number){
    //       return this.http.get<any>(`${this.apiServiceUrl}`+'/'+id);
    //    }
          
    //   public putEpouse(data:any,id:number){
    //       return this.http.put<any>(`${this.apiServiceUrl}/updateEpouse/`+id,data);
    //   }
  
    //   public deleteEpouse(id:number):Observable<void>{ 
    //       return this.http.delete<any>(`${this.apiServiceUrl}/deleteEpouse/`+id);
    //   }
      
    //   ////////////////////////////////Enfant////////////////////////////////
   
    //   public getEnfant():Observable<Famille[]>{
    //     return this.http.get<Famille[]>(`${this.apiServiceUrl}/listEnfant`);
    // }
    
    // public postEnfant(Enfant:any){
    //     return this.http.post(`${this.apiServiceUrl}/saveEnfant`, Enfant);
    // }
    //  public getIdEnfant(id:number){
    //     return this.http.get<any>(`${this.apiServiceUrl}`+'/'+id);
    //  }
        
    // public putEnfant(data:any,id:number){
    //     return this.http.put<any>(`${this.apiServiceUrl}/updateEnfant/`+id,data);
    // }

    // public deleteEnfant(id:number):Observable<void>{ 
    //     return this.http.delete<any>(`${this.apiServiceUrl}/deleteEnfant/`+id);
    }
  