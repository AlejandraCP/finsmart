import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {NgbdModal1Content, NgbdModal2Content, OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { BaseComponent } from './commons/base/base.component';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { BankAccountsComponent } from './pages/bank-accounts/bank-accounts.component';
import { DepositsComponent } from './pages/deposits/deposits.component';
import { NavbarMobileComponent } from './commons/navbar-mobile/navbar-mobile.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: BaseComponent, children: [
      { path: '', redirectTo: '/oportunidades', pathMatch: 'full' },
      { path: 'oportunidades', component: OpportunitiesComponent },
      { path: 'inversiones', component: InvestmentsComponent },
      { path: 'cuentas-bancarias', component: BankAccountsComponent },
      { path: 'depositar-dinero', component: DepositsComponent },
      { path: 'datos-personales', component: PersonalInfoComponent }

    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NgbdModal1Content,
    NgbdModal2Content,
    OpportunitiesComponent,
    BaseComponent,
    SidebarComponent,
    InvestmentsComponent,
    BankAccountsComponent,
    DepositsComponent,
    NavbarMobileComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModal1Content, NgbdModal2Content]
})
export class AppModule { }