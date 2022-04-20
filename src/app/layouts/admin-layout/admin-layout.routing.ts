import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { EnterPriseComponent } from 'src/app/pages/enter-prise/enter-prise.component';
import { AddEnterpriseComponent } from 'src/app/pages/enter-prise/add-enterprise/add-enterprise.component';
import { EditEnterpriseComponent } from 'src/app/pages/enter-prise/edit-enterprise/edit-enterprise.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'enter-prise',    component: EnterPriseComponent},
    { path: 'add-enterprise', component: AddEnterpriseComponent},
    { path: 'edit-enterprise/:id', component: EditEnterpriseComponent}
];
