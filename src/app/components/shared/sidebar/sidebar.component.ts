import { Component } from "@angular/core";
import { ROUTES } from "../../../commons/consts/route.const";

@Component({
    standalone: true,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[] = ROUTES.filter(menuItem => menuItem);
}