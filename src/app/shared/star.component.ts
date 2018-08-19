import { OnChanges, Component, Input, EventEmitter, Output } from "@angular/core";


@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = Math.floor(this.rating) * 15;
    }

    onClick(): void {
        this.ratingClicked.emit(`Rating ${this.rating} was clicked`)
    }
}