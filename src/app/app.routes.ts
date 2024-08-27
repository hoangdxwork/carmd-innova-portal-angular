import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/authentication/login.component';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [HomeGuard],
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
