import { NestedTreeControl } from "@angular/cdk/tree";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Famille } from "src/model/Famillle";
import { ModelPaie } from "src/model/ModelPaie";
// import { TreeNode } from 'primeng/api';


@Injectable({

    providedIn: 'root'

})

export class TreeService{
  getDiect() {
    throw new Error('Method not implemented.');
  }


  private apiServiceUrl= environment.apiBaseUrl +"api/logicielPaie/v1";
 
 

  constructor(private http:HttpClient){}

  getDirect(){
    // return this.http
    //     .get<any>(`${this.apiServiceUrl}/listDirection`)
    //     .toPromise()
    //     .then((res) => <TreeNode[]>res.data);
}
}
  