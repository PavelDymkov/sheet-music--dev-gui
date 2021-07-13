import { EventEmitter, Injectable } from "@angular/core";
import { Part } from "sheet-music/part";
import { view } from "sheet-music/part-viewer";

@Injectable({ providedIn: "root" })
export class PartService {
    readonly part = new Part();
    readonly update = new EventEmitter<void>();

    constructor() {
        this.update.subscribe(() => {
            console.clear();

            view(this.part);
        });
    }
}
