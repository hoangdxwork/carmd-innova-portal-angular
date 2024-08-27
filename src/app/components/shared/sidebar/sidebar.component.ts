import { Component } from "@angular/core";
import { ROUTES } from "../../../commons/consts/route.const";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[] = ROUTES.filter(menuItem => menuItem);
}