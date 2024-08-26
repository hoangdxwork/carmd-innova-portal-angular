import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    standalone: true,
    imports: [RouterOutlet, CommonModule, SidebarComponent, NavbarComponent, FooterComponent],
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html'
  })
export class AdminLayoutComponent {
  
    constructor() { }
  
    public isShowSideBar(): boolean {
        // return this.roleService.hasPermission(RoleConstant.ADMIN);
        return true;
    }

}