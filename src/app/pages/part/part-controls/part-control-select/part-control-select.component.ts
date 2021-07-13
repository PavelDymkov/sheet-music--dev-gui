import { Component, Input, OnInit } from "@angular/core";
import { PartControlAction } from "../part-controls.component";

export interface PartControlSelectItem<T> {
    label: string;
    value: T;
}

@Component({
    selector: "app-part-control-select",
    templateUrl: "./part-control-select.component.html",
    styleUrls: ["./part-control-select.component.css"],
})
export class PartControlSelectComponent implements OnInit {
    @Input()
    label = "";

    @Input()
    items: PartControlSelectItem<any>[] = [];

    @Input()
    defaulValue: any;

    @Input()
    action!: PartControlAction;

    selected?: PartControlSelectItem<any>;

    ngOnInit(): void {
        if (this.defaulValue) {
            this.selected = this.items.find(
                item => item.value === this.defaulValue,
            );
        } else {
            this.selected = this.items[0];
        }
    }

    onSelect(item: PartControlSelectItem<any>): void {
        this.selected = item;
    }

    onClick(): void {
        if (this.selected) this.action(this.selected.value);
    }
}
