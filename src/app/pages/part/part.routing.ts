import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PartPageComponent } from "./part.component";

const routes: Routes = [
    {
        path: "",
        component: PartPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartRoutingModule {}
