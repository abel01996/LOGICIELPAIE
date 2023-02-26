import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { AddemployeComponent } from './employe/addemploye/addemploye.component';
import { ListemployeComponent } from './employe/listemploye/listemploye.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEmployer } from './service/ServiceEmploye';
import {MatSortModule} from '@angular/material/sort';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { ListBanqueComponent } from './banque/list-banque/list-banque.component';
import { ServicePaie } from './service/ServicePaie';
import { AddagenceComponent } from './agence/addagence/addagence.component';
import { ListagenceComponent } from './agence/listagence/listagence.component';
import { AddClasseComponent } from './classe/add-classe/add-classe.component';
import { ListClasseComponent } from './classe/list-classe/list-classe.component';
import { AddCorpsComponent } from './corps/add-corps/add-corps.component';
import { ListCorpsComponent } from './corps/list-corps/list-corps.component';
import { AddEchelonComponent } from './Echelon/add-echelon/add-echelon.component';
import { ListEchelonComponent } from './Echelon/list-echelon/list-echelon.component';
import { AddModePaieComponent } from './modePaie/add-mode-paie/add-mode-paie.component';
import { ListModePaieComponent } from './modePaie/list-mode-paie/list-mode-paie.component';
import { AddPaieServiceAppComponent } from './paiserviceapp/add-paie-service-app/add-paie-service-app.component';
import { ListPaieServiceAppComponent } from './paiserviceapp/list-paie-service-app/list-paie-service-app.component';
import { AddStatutComponent } from './statut/add-statut/add-statut.component';
import { ListStatutComponent } from './statut/list-statut/list-statut.component';
import { AddTypePaieComponent } from './typePaie/add-type-paie/add-type-paie.component';
import { ListTypePaieComponent } from './typePaie/list-type-paie/list-type-paie.component';
import { AddTypePaieReferenceComponent } from './typePaiReference/add-type-paie-reference/add-type-paie-reference.component';
import { ListTypePaieResComponent } from './typePaiReference/list-type-paie-res/list-type-paie-res.component';
import { AddHierarTypeComponent } from './hiertypeco/add-hierar-type/add-hierar-type.component';
import { ListHierartypeComponent } from './hiertypeco/list-hierartype/list-hierartype.component';
import { AddEtatCivilComponent } from './EtatCivil/add-etat-civil/add-etat-civil.component';
import { ListEtatCivilComponent } from './EtatCivil/list-etat-civil/list-etat-civil.component';
import { AddSituationFamilleComponent } from './SituationFami/add-situation-famille/add-situation-famille.component';
import { ListSituationFamiComponent } from './SituationFami/list-situation-fami/list-situation-fami.component';
import { SituaFamilleService } from './service/SituaFamilleService';
import { DirectionComponent } from './direction/direction/direction.component';
import { ListDirectionComponent } from './direction/list-direction/list-direction.component';
import { DepartementComponent } from './departement/departement/departement.component';
import { ListDepartementComponent } from './departement/list-departement/list-departement.component';
import {MatSelectModule} from '@angular/material/select';
import { ContratComponent } from './contrat/contrat/contrat.component';
import { TypeContratComponent } from './contrat/type-contrat/type-contrat.component';
import { ListTypeContratComponent } from './contrat/list-type-contrat/list-type-contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { ContratService } from './service/ContratService';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { AddFichePaieComponent } from './fichePaie/add-fiche-paie/add-fiche-paie.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddFamilleComponent } from './Famille/add-famille/add-famille.component';
import { ListFamilleComponent } from './Famille/list-famille/list-famille.component';
import { ServiceFamille } from './service/ServiceFamile';
import { EnfantComponent } from './Famille/enfant/enfant.component';
import { ListenfantComponent } from './Famille/listenfant/listenfant.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TreeModule} from 'primeng/tree';
import { ListFichePaieComponent } from './fichePaie/list-fiche-paie/list-fiche-paie.component'
import { FichePaieService } from './service/FichePaieService';
import { DetailFichePaieComponent } from './fichePaie/detail-fiche-paie/detail-fiche-paie.component';
import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RubriqueComponent } from './rubriqueFiche/rubrique/rubrique.component';
import { ListrubriqueComponent } from './rubriqueFiche/listrubrique/listrubrique.component';
import {MatBadgeModule} from '@angular/material/badge';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    AddemployeComponent,
    ListemployeComponent,
    AddBanqueComponent,
    ListBanqueComponent,
    AddagenceComponent,
    ListagenceComponent,
    AddClasseComponent,
    ListClasseComponent,
    AddCorpsComponent,
    ListCorpsComponent,
    AddEchelonComponent,
    ListEchelonComponent,
    AddModePaieComponent,
    ListModePaieComponent,
    AddPaieServiceAppComponent,
    ListPaieServiceAppComponent,
    AddStatutComponent,
    ListStatutComponent,
    AddTypePaieComponent,
    ListTypePaieComponent,
    AddTypePaieReferenceComponent,
    ListTypePaieResComponent,
    AddHierarTypeComponent,
    ListHierartypeComponent,
    AddEtatCivilComponent,
    ListEtatCivilComponent,
    AddSituationFamilleComponent,
    ListSituationFamiComponent,
    DirectionComponent,
    ListDirectionComponent,
    DepartementComponent,
    ListDepartementComponent,
    ContratComponent,
    TypeContratComponent,
    
    ListTypeContratComponent,
    ListContratComponent,
    AddFichePaieComponent,
    AddFamilleComponent,
    ListFamilleComponent,
    EnfantComponent,
    ListenfantComponent,
    ListFichePaieComponent,
    DetailFichePaieComponent,
    RubriqueComponent,
    ListrubriqueComponent,
 
   
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    MatNativeDateModule,
    TreeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    TableModule,
    DragDropModule,
    InputTextModule,
    MatTabsModule,
    MatStepperModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTreeModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],

 
  providers: [ServiceEmployer,ServicePaie,SituaFamilleService,ContratService, MessageService,
    ServiceFamille, FichePaieService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
