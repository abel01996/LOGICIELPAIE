import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddagenceComponent } from './agence/addagence/addagence.component';
import { ListagenceComponent } from './agence/listagence/listagence.component';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { ListBanqueComponent } from './banque/list-banque/list-banque.component';
import { AddClasseComponent } from './classe/add-classe/add-classe.component';
import { ListClasseComponent } from './classe/list-classe/list-classe.component';
import { ContratComponent } from './contrat/contrat/contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { ListTypeContratComponent } from './contrat/list-type-contrat/list-type-contrat.component';
import { ListCorpsComponent } from './corps/list-corps/list-corps.component';
import { ListDepartementComponent } from './departement/list-departement/list-departement.component';
import { ListDirectionComponent } from './direction/list-direction/list-direction.component';
import { ListEchelonComponent } from './Echelon/list-echelon/list-echelon.component';
import { AddemployeComponent } from './employe/addemploye/addemploye.component';
import { ListemployeComponent } from './employe/listemploye/listemploye.component';
import { ListEtatCivilComponent } from './EtatCivil/list-etat-civil/list-etat-civil.component';
import { AddFamilleComponent } from './Famille/add-famille/add-famille.component';
import { ListFamilleComponent } from './Famille/list-famille/list-famille.component';
import { ListenfantComponent } from './Famille/listenfant/listenfant.component';
import { AddFichePaieComponent } from './fichePaie/add-fiche-paie/add-fiche-paie.component';
import { ListHierartypeComponent } from './hiertypeco/list-hierartype/list-hierartype.component';
import { HomeComponent } from './home/home.component';
import { ListModePaieComponent } from './modePaie/list-mode-paie/list-mode-paie.component';
import { ListPaieServiceAppComponent } from './paiserviceapp/list-paie-service-app/list-paie-service-app.component';
import { AddSituationFamilleComponent } from './SituationFami/add-situation-famille/add-situation-famille.component';
import { ListSituationFamiComponent } from './SituationFami/list-situation-fami/list-situation-fami.component';
import { ListStatutComponent } from './statut/list-statut/list-statut.component';
import { ListTypePaieComponent } from './typePaie/list-type-paie/list-type-paie.component';
import { ListTypePaieResComponent } from './typePaiReference/list-type-paie-res/list-type-paie-res.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'addemployer' , component:AddemployeComponent},
  {path:'listemployer' , component:ListemployeComponent},
  {path:'listBanque' , component:ListBanqueComponent},
  {path:'addBanque' , component:AddBanqueComponent},
  {path:'listAgence' , component:ListagenceComponent},
  {path:'listClasse' , component:ListClasseComponent},
  {path:'addClasse' , component:AddClasseComponent},
  {path:'listCorps' , component:ListCorpsComponent},
  {path:'listEchelon' , component:ListEchelonComponent},
  {path:'listModePaie' , component:ListModePaieComponent},
  {path:'listPaieService' , component:ListPaieServiceAppComponent},
  {path:'listStatut' , component:ListStatutComponent},
  {path:'listypepaie' , component:ListTypePaieComponent},
  {path:'listypepaieRef' , component:ListTypePaieResComponent},
  {path:'listhierarchie' , component:ListHierartypeComponent},
  {path:'listEtatCivil' , component:ListEtatCivilComponent},
  {path:'listSituFami' , component:ListSituationFamiComponent},
  {path:'addSituFami' , component:AddSituationFamilleComponent},
  {path:'listDepartement' , component:ListDepartementComponent},
  {path:'listDirection' , component:ListDirectionComponent},
  {path:'addContrat' , component:ContratComponent},
  {path:'listContrat' , component:ListContratComponent},
  {path:'listtypeContrat' , component:ListTypeContratComponent},
  {path:'addFichePaie' , component:AddFichePaieComponent},
  {path:'listEpouse' , component:ListFamilleComponent},
  {path:'listEnfant' , component:ListenfantComponent},
 
 
 
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
