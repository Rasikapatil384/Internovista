import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BigbuttonpageComponent } from './bigbuttonpage/bigbuttonpage.component';
import { AccountComponent } from './account/account.component';
import { ReviewtypeComponent } from './reviewtype/reviewtype.component';
import { PreinternshipreviewpageComponent } from './preinternshipreviewpage/preinternshipreviewpage.component';
import { PostinternshipreviewpageComponent } from './postinternshipreviewpage/postinternshipreviewpage.component';
import { GridComponent } from './grid/grid.component';
import { DifficultyAnalysisComponent } from './difficulty-analysis/difficulty-analysis.component';
import { DepartmentalanalysisComponent } from './departmentalanalysis/departmentalanalysis.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { ComputerComponent } from './computer/computer.component';
import { ItComponent } from './it/it.component';
import { EntcComponent } from './entc/entc.component';
import { InstrumentationComponent } from './instrumentation/instrumentation.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent, canActivate: [NoAuthGuard] },  // Prevent access to login if logged in
  { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] },  // Prevent access to signup if logged in
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'bigbuttonpage', component: BigbuttonpageComponent, canActivate: [AuthGuard] },
  {
    path: 'reviewtype',
    component: ReviewtypeComponent,
    children: [
      { path: 'preinternshipreviewpage', component: PreinternshipreviewpageComponent },
      { path: 'postinternshipreviewpage', component: PostinternshipreviewpageComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'grid', component: GridComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'companydetails', component: CompanydetailsComponent }
    ]
  },
  { path: 'difficulty-analysis', component: DifficultyAnalysisComponent, canActivate: [AuthGuard] },
  { path: 'departmentalanalysis', component: DepartmentalanalysisComponent, canActivate: [AuthGuard] },
  { path: 'student-search', component: StudentSearchComponent, canActivate: [AuthGuard] },
  { path: 'company-search', component: CompanySearchComponent, canActivate: [AuthGuard] },
  { path: 'computer', component: ComputerComponent, canActivate: [AuthGuard] },
  { path: 'it', component: ItComponent, canActivate: [AuthGuard] },
  { path: 'entc', component: EntcComponent, canActivate: [AuthGuard] },
  { path: 'instrumentation', component: InstrumentationComponent, canActivate: [AuthGuard] },
  { path: 'mechanical', component: MechanicalComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
