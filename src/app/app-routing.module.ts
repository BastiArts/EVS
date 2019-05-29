import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthService} from '../../services/services/auth.service';
import {DefaultDashboardComponent} from './components/dashboard/default-dashboard/default-dashboard.component';
import {ProfileComponent} from './components/dashboard/profile/profile.component';
import {LogoutComponent} from './components/logout/logout.component';
import {SettingsComponent} from './components/dashboard/settings/settings.component';
import {EquipmentOverviewComponent} from './components/dashboard/equipment-overview/equipment-overview.component';

// Contains all the Routes, which can be navigated to
const routes: Routes = [
    // Fallback route if logged in
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // Dashboard with Subroutes
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthService], children: [
            // {path: '', component: this.dataservice.sessionUser.isStudent ? DefaultDashboardComponent : TeacherDashboardComponent},
            {path: '', component: DefaultDashboardComponent},
            {path: 'equipment', component: EquipmentOverviewComponent}, // NOTE: DELETE EQUIPMENT COMPONENT
            {path: 'logout', component: LogoutComponent},
            {path: 'profil', component: ProfileComponent},
            {path: 'settings', component: SettingsComponent},
            {path: '**', redirectTo: 'dashboard'}
        ]
    },
    {path: 'home', component: HomepageComponent},
    // Fallback route if not logged in
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
