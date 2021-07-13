import { Component, Input } from "@angular/core";
import { PartControlAction } from "../part-controls.component";

@Component({
    selector: "app-part-control-button",
    templateUrl: "./part-control-button.component.html",
    styleUrls: ["./part-control-button.component.css"],
})
export class PartControlButtonComponent {
    @Input()
    label = "";

    @Input()
    icon = "";

    @Input()
    action!: PartControlAction;
}
