import { OnChanges, Component, Input, EventEmitter, Output } from "@angular/core";


@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    //this is nested component, so we takie rating from product list component; it comes from 
    //[rating]='product.starRating' in product list comp html
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
//outup allows to pass data from nested component by making new instance of generic event
    ngOnChanges(): void {
        this.starWidth = Math.floor(this.rating) * 15;
    }
//every time data changes, onchanges recalculate width and sets it to [style.width.px]="starWidth"
    onClick(): void {
        this.ratingClicked.emit(`Rating ${this.rating} was clicked!`)
    }
//when item is clicked ( (click)="onClick()" in html ) sets the message and emits with emit method
}