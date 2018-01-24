import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: "Calendar",
	moduleId: module.id,
	templateUrl: "./calendar.component.html",
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	protected router: Router;

    onButtonTap(): void {
        console.log("Button was pressed");
    }

	public onNavigationButtonTap(args: any) {
		this.router.navigate(['/home']);
	}

	constructor() {
	}

	ngOnInit(): void {
	}
}