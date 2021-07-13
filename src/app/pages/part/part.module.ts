import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";
import { PartControlButtonComponent } from "./part-controls/part-control-button/part-control-button.component";
import { PartControlNoteComponent } from "./part-controls/part-control-note/part-control-note.component";
import { PartControlSelectComponent } from "./part-controls/part-control-select/part-control-select.component";
import { PartControlsComponent } from "./part-controls/part-controls.component";
import { PartViewComponent } from "./part-view/part-view.component";
import { PartPageComponent } from "./part.component";
import { PartRoutingModule } from "./part.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PartRoutingModule,
        ShoelaceStyleAngularModule,
    ],
    declarations: [
        PartControlsComponent,
        PartPageComponent,
        PartViewComponent,
        PartControlButtonComponent,
        PartControlNoteComponent,
        PartControlSelectComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartPageModule {}
