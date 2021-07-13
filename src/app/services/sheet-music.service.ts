import { Injectable } from "@angular/core";
import { SheetMusic } from "sheet-music/index";

@Injectable({ providedIn: "root" })
export class SheetMusicService {
    readonly sheetMusic = new SheetMusic();
}
