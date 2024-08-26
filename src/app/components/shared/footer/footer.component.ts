import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
})

export class FooterComponent {
    test: Date = new Date();
}