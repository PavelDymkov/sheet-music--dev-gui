import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

enum Route {
    Part = "part",
}

const routes: Routes = [
    {
        path: Route.Part,
        loadChildren: () =>
            import("./pages/part/part.module").then(m => m.PartPageModule),
    },
    {
        path: "**",
        redirectTo: Route.Part,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
