export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',       title: 'Dashboard',         icon: 'nc-bank',                class: '' },
    { path: '/icon',            title: 'Icon',              icon: 'nc-bank',                class: '' },
    { path: '/ui',              title: 'UI',                icon: 'nc-bank',                class: '' },
    { path: '/setting',         title: 'Setting',           icon: 'nc-settings-gear-65',    class: 'active-pro' },
];