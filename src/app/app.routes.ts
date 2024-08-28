import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

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
        loadComponent: () => import('./components/authentication/login.component').then(m => m.LoginComponent),
    }
];
