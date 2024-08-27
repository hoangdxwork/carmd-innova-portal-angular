export interface RouteSubInfo {
    path: string;
    title: string;
    class: string;
}

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    sub?: RouteSubInfo[];
}

export const ROUTES: RouteInfo[] = [
    {
        path:   '/dashboard',
        title:  'Dashboard',
        icon:   'bx bx-grid-alt',
        class:  'active-pro'
    },
    {
        path:   '/category',
        title:  'Category',
        icon:   'bx bx-collection',
        class:  '',
        sub:    [
            {
                path: '/category/html-css',
                title: 'HTML & CSS',
                class: ''
            },
            {
                path: '/category/javaScript',
                title: 'JavaScript',
                class: ''
            },
            {
                path: '/category/php-mysql',
                title: 'PHP & MySQL',
                class: ''
            }
        ]
    },
    {
        path:   '/posts',
        title:  'Posts',
        icon:   'bx bx-book-alt',
        class:  '',
        sub:    [
            {
                path: '/posts/web-design',
                title: 'Web Design',
                class: ''
            },
            {
                path: '/posts/login-form',
                title: 'Login Form',
                class: ''
            },
            {
                path: '/posts/card-design',
                title: 'Card Design',
                class: ''
            }
        ]
    },
    {
        path:   '/analytics',
        title:  'Analytics',
        icon:   'bx bx-pie-chart-alt-2',
        class:  ''
    },
    {
        path:   '/chart',
        title:  'Chart',
        icon:   'bx bx-line-chart',
        class:  ''
    },
    {
        path:   '/plugins',
        title:  'Plugins',
        icon:   'bx bx-plug',
        class:  '',
        sub:    [
            {
                path: '/posts/ui-face',
                title: 'UI Face',
                class: ''
            },
            {
                path: '/posts/pigments',
                title: 'Pigments',
                class: ''
            },
            {
                path: '/posts/box-icons',
                title: 'Box Icons',
                class: ''
            }
        ]
    },
    {
        path:   '/explore',
        title:  'Explore',
        icon:   'bx bx-compass',
        class:  ''
    },
    {
        path:   '/history',
        title:  'History',
        icon:   'bx bx-history',
        class:  ''
    },
    {
        path:   '/setting',
        title:  'Setting',
        icon:   'bx bx-cog',
        class:  ''
    }
];

