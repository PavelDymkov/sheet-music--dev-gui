import { Component } from "@angular/core";
import { Note } from "sheet-music/note";
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

    readonly noteValueItems = createNoteValueItems();

    next = this.action(() => {
        this.part.cursor.next();
    });

    prev = this.action(() => {
        this.part.cursor.prev();
    });

    insertNoteSet = this.action((noteValue: NoteValue) => {
        this.part.insertNoteSet(noteValue);
    });

    remove = this.action(() => {
        this.part.remove();
    });

    insertNote = this.action((note: Note) => {
        this.part.insertNote(note);
    });

    removeNote = this.action((note: Note) => {
        this.part.removeNote(note);
    });

    get part(): Part {
        return this.partService.part;
    }

    constructor(private partService: PartService) {}

    private action(beforeAction: PartControlAction): PartControlAction {
        return (payload?: any) => {
            beforeAction(payload);

            this.afterAction();
        };
    }

    private afterAction(): void {
        this.partService.update.next();
    }
}

function createNoteValueItems(): PartControlSelectItem<NoteValue>[] {
    return [
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
}
