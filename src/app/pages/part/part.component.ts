import { Component } from "@angular/core";
import { PartService } from "src/app/services/part.service";

@Component({
    selector: "app-part-page",
    templateUrl: "./part.component.html",
    styleUrls: ["./part.component.css"],
})
export class PartPageComponent {
    constructor(private readonly partService: PartService) {
        console.log(this.partService);
    }
}
