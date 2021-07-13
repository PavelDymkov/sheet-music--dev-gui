import { Component } from "@angular/core";
import { PartService } from "src/app/services/part.service";

@Component({
    selector: "app-part-view",
    templateUrl: "./part-view.component.html",
    styleUrls: ["./part-view.component.css"],
})
export class PartViewComponent {
    constructor(private readonly partService: PartService) {
        console.log(this.partService);
    }
}
