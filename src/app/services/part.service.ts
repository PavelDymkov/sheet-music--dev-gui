import { Injectable } from "@angular/core";
import { Part } from "sheet-music/part";

@Injectable({ providedIn: "root" })
export class PartService {
    readonly part = new Part();
}
