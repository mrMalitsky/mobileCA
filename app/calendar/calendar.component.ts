import {Component, OnInit, ViewChild} from "@angular/core";
import { Router } from '@angular/router';

import {CalendarSelectionEventData, CalendarSelectionMode, RadCalendar} from "nativescript-pro-ui/calendar";
import { RadCalendarComponent } from "nativescript-pro-ui/calendar/angular";
import { CalendarEvent } from 'nativescript-pro-ui/calendar'
import {CalendarEventsService} from "../shared/calendar-events.service";


@Component({
	selector: "Calendar",
	moduleId: module.id,
	templateUrl: "./calendar.component.html",
	styleUrls: ['./calendar.component.css'],
    providers: [CalendarEventsService]
})
export class CalendarComponent implements OnInit {
	protected router: Router;

	public startDate: Date;
    public endDate: Date;

    private _selectionMode;

    private _listItems: Array<CalendarEvent>; // delete
    private _events: Array<CalendarEvent>;

    constructor(private _calendarService: CalendarEventsService) {
        this._selectionMode = CalendarSelectionMode.Range;
    }

    @ViewChild('calendar') _calendar: RadCalendarComponent;

    get selectionMode() {
        return this._selectionMode;
    }

    get myItems(): Array<CalendarEvent> { // delete
        return this._listItems;
    }

    set myItems(value) {  // delete
        this._listItems = value;
    }


    ngOnInit() {
        this._events = this._calendarService.getCalendarEvents();
    }

    onDateSelected(args: CalendarSelectionEventData) { // delete
        const calendar: RadCalendar = args.object;
        this.startDate =  new Date(calendar.selectedDateRange.startDate);
        this.endDate = new Date(calendar.selectedDateRange.endDate);


    }

	public onNavigationButtonTap(args: any) {
		this.router.navigate(['/home']);
	}

}