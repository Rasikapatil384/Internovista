import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { NgChartsModule } from 'ng2-charts';
import { BigbuttonComponent } from './bigbutton/bigbutton.component';
import { BigbuttonpageComponent } from './bigbuttonpage/bigbuttonpage.component';
import { SmallbuttonsComponent } from './smallbuttons/smallbuttons.component';
import { InternheaderComponent } from './internheader/internheader.component';
import { StackedbarchartComponent } from './stackedbarchart/stackedbarchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AccountComponent } from './account/account.component';
import { ReviewtypeComponent } from './reviewtype/reviewtype.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PreinternshipreviewpageComponent } from './preinternshipreviewpage/preinternshipreviewpage.component';
import { PostinternshipreviewpageComponent } from './postinternshipreviewpage/postinternshipreviewpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
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
import { EnctBarComponent } from './enct-bar/enct-bar.component';
import { EntcpieComponent } from './entcpie/entcpie.component';
import { CompbarComponent } from './compbar/compbar.component';
import { ComppieComponent } from './comppie/comppie.component';
import { ItbarComponent } from './itbar/itbar.component';
import { ItpieComponent } from './itpie/itpie.component';
import { InstrubarComponent } from './instrubar/instrubar.component';
import { InstrupieComponent } from './instrupie/instrupie.component';
import { MechbarComponent } from './mechbar/mechbar.component';
import { MachpieComponent } from './machpie/machpie.component';
import { DiffanalysisbarComponent } from './diffanalysisbar/diffanalysisbar.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    BigbuttonComponent,
    BigbuttonpageComponent,
    SmallbuttonsComponent,
    InternheaderComponent,
    StackedbarchartComponent,
    PiechartComponent,
    LineChartComponent,
    AccountComponent,
    ReviewtypeComponent,
    PreinternshipreviewpageComponent,
    PostinternshipreviewpageComponent,
    GridComponent,
    DifficultyAnalysisComponent,
    DepartmentalanalysisComponent,
    StudentSearchComponent,
    CompanySearchComponent,
    ComputerComponent,
    ItComponent,
    EntcComponent,
    InstrumentationComponent,
    MechanicalComponent,
    EnctBarComponent,
    EntcpieComponent,
    CompbarComponent,
    ComppieComponent,
    ItbarComponent,
    ItpieComponent,
    InstrubarComponent,
    InstrupieComponent,
    MechbarComponent,
    MachpieComponent,
    DiffanalysisbarComponent,
    CompanydetailsComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot([
      { path: 'account', component: AccountComponent },
      { path: 'bigbuttonpage', component: BigbuttonpageComponent },
    ]),
    AppRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    BrowserAnimationsModule,
    AgGridModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    import('ng2-charts').then(module => {
      console.log('ng2-charts loaded dynamically');
    });
  }
}
