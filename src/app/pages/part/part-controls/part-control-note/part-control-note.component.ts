import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Accidental } from "sheet-music/accidental";
import { Note } from "sheet-music/note";
import { NoteName } from "sheet-music/note-name";
import { Octave } from "sheet-music/octave";
import { PartControlAction } from "../part-controls.component";

@Component({
    selector: "app-part-control-note",
    templateUrl: "./part-control-note.component.html",
    styleUrls: ["./part-control-note.component.css"],
})
export class PartControlNoteComponent {
    @Input()
    label = "";

    @Input()
    action!: PartControlAction;

    readonly notes = [
        NoteName.A,
        NoteName.B,
        NoteName.C,
        NoteName.D,
        NoteName.E,
        NoteName.F,
        NoteName.G,
    ];

    readonly accidentals = [
        Accidental.FlatDouble,
        Accidental.Flat,
        Accidental.Natural,
        Accidental.Sharp,
        Accidental.SharpDouble,
    ];

    readonly octaves = [
        Octave.SubSubContra,
        Octave.SubContra,
        Octave.Contra,
        Octave.Great,
        Octave.Small,
        Octave.OneLined,
        Octave.TwoLined,
        Octave.ThreeLined,
        Octave.FourLined,
        Octave.FiveLined,
        Octave.SixLined,
    ];

    note = new Note({
        noteName: NoteName.C,
        accidental: Accidental.Natural,
        octave: Octave.OneLined,
        ghost: false,
    });

    noteForm = this.formBuilder.group({
        noteName: [],
        accidental: [],
        octave: [],
        ghost: [],
    });

    isOpen = false;

    constructor(private formBuilder: FormBuilder) {}

    patchNoteForm(): void {
        this.noteForm.patchValue(this.note);
    }

    setNote(): void {
        this.note = new Note(this.noteForm.value);
        this.isOpen = false;
    }

    formatAccidental(accidental: Accidental): string {
        switch (accidental) {
            case Accidental.FlatDouble:
                return "♭♭";
            case Accidental.Flat:
                return "♭";
            case Accidental.Natural:
                return "";
            case Accidental.Sharp:
                return "#";
            case Accidental.SharpDouble:
                return "x";
        }
    }
}
