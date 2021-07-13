import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { setBasePath } from "@shoelace-style/shoelace";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

setBasePath("/assets/shoelace");

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
