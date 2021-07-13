import { Injectable } from "@angular/core";
import { SheetMusic } from "sheet-music";

@Injectable({ providedIn: "root" })
export class SheetMusicService {
    readonly sheetMusic = new SheetMusic();
}
