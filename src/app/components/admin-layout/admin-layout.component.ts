import { Component } from "@angular/core";
import { AdminLayoutImportComponent } from "./admin-layout.declaration";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [RouterOutlet, CommonModule, ...AdminLayoutImportComponent],
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