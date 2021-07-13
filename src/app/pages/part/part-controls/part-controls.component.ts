import { Component } from "@angular/core";
import { NoteValue } from "sheet-music/note-value";
import { Part } from "sheet-music/part";

import { PartService } from "src/app/services/part.service";
import { PartControlSelectItem } from "./part-control-select/part-control-select.component";

export type PartControlAction = (payload?: any) => void;

@Component({
    selector: "app-part-controls",
    templateUrl: "./part-controls.component.html",
    styleUrls: ["./part-controls.component.css"],
})
export class PartControlsComponent {
    readonly NoteValue = NoteValue;

    readonly noteValueItems: PartControlSelectItem<NoteValue>[] = [
        {
            label: "Maxima",
            value: NoteValue.Maxima,
        },
        {
            label: "Longa",
            value: NoteValue.Longa,
        },
        {
            label: "DoubleWhole",
            value: NoteValue.DoubleWhole,
        },
        {
            label: "Whole",
            value: NoteValue.Whole,
        },
        {
            label: "Half",
            value: NoteValue.Half,
        },
        {
            label: "Quarter",
            value: NoteValue.Quarter,
        },
        {
            label: "Eight",
            value: NoteValue.Eight,
        },
        {
            label: "Sixteenth",
            value: NoteValue.Sixteenth,
        },
        {
            label: "ThirtySecond",
            value: NoteValue.ThirtySecond,
        },
        {
            label: "SixtyFourth",
            value: NoteValue.SixtyFourth,
        },
    ];

    actionNext: PartControlAction = () => {
        this.part.cursor.next();

        this.afterAction();
    };

    actionPrev: PartControlAction = () => {
        this.part.cursor.prev();

        this.afterAction();
    };

    actionInsertNoteSet: PartControlAction = (noteValue: NoteValue) => {
        this.part.insertNoteSet(noteValue);

        this.afterAction();
    };

    get part(): Part {
        return this.partService.part;
    }

    constructor(private partService: PartService) {}

    afterAction(): void {
        this.partService.update.next();
    }
}
