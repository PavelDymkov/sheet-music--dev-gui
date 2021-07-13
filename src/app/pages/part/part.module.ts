import { NgModule } from "@angular/core";

import { PartViewComponent } from "./part-view/part-view.component";
import { PartPageComponent } from "./part.component";
import { PartRoutingModule } from "./part.routing";

@NgModule({
    imports: [PartRoutingModule],
    declarations: [PartPageComponent, PartViewComponent],
})
export class PartPageModule {}
