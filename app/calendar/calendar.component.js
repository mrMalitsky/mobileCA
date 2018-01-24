"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_1 = require("nativescript-pro-ui/calendar");
var angular_1 = require("nativescript-pro-ui/calendar/angular");
var calendar_events_service_1 = require("../shared/calendar-events.service");
var CalendarComponent = (function () {
    function CalendarComponent(_calendarService) {
        this._calendarService = _calendarService;
        this._selectionMode = calendar_1.CalendarSelectionMode.Range;
    }
    Object.defineProperty(CalendarComponent.prototype, "selectionMode", {
        get: function () {
            return this._selectionMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "myItems", {
        get: function () {
            return this._listItems;
        },
        set: function (value) {
            this._listItems = value;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this._events = this._calendarService.getCalendarEvents();
    };
    CalendarComponent.prototype.onDateSelected = function (args) {
        var calendar = args.object;
        this.startDate = new Date(calendar.selectedDateRange.startDate);
        this.endDate = new Date(calendar.selectedDateRange.endDate);
    };
    CalendarComponent.prototype.onNavigationButtonTap = function (args) {
        this.router.navigate(['/home']);
    };
    __decorate([
        core_1.ViewChild('calendar'),
        __metadata("design:type", angular_1.RadCalendarComponent)
    ], CalendarComponent.prototype, "_calendar", void 0);
    CalendarComponent = __decorate([
        core_1.Component({
            selector: "Calendar",
            moduleId: module.id,
            templateUrl: "./calendar.component.html",
            styleUrls: ['./calendar.component.css'],
            providers: [calendar_events_service_1.CalendarEventsService]
        }),
        __metadata("design:paramtypes", [calendar_events_service_1.CalendarEventsService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRzNELHlEQUE0RztBQUM1RyxnRUFBNEU7QUFFNUUsNkVBQXdFO0FBVXhFO0lBV0ksMkJBQW9CLGdCQUF1QztRQUF2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVCO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsZ0NBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFJRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFZLEtBQUs7WUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU9ELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsSUFBZ0M7UUFDM0MsSUFBTSxRQUFRLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHaEUsQ0FBQztJQUVHLGlEQUFxQixHQUE1QixVQUE2QixJQUFTO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0J5QjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBWSw4QkFBb0I7d0RBQUM7SUFmOUMsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQVl3QywrQ0FBcUI7T0FYbEQsaUJBQWlCLENBOEM3QjtJQUFELHdCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtDYWxlbmRhclNlbGVjdGlvbkV2ZW50RGF0YSwgQ2FsZW5kYXJTZWxlY3Rpb25Nb2RlLCBSYWRDYWxlbmRhcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgUmFkQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9jYWxlbmRhci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2NhbGVuZGFyJ1xyXG5pbXBvcnQge0NhbGVuZGFyRXZlbnRzU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9jYWxlbmRhci1ldmVudHMuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkNhbGVuZGFyXCIsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2FsZW5kYXJFdmVudHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcclxuXHJcblx0cHVibGljIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICAgIHB1YmxpYyBlbmREYXRlOiBEYXRlO1xyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGlvbk1vZGU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGlzdEl0ZW1zOiBBcnJheTxDYWxlbmRhckV2ZW50PjsgLy8gZGVsZXRlXHJcbiAgICBwcml2YXRlIF9ldmVudHM6IEFycmF5PENhbGVuZGFyRXZlbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJFdmVudHNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZSA9IENhbGVuZGFyU2VsZWN0aW9uTW9kZS5SYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdjYWxlbmRhcicpIF9jYWxlbmRhcjogUmFkQ2FsZW5kYXJDb21wb25lbnQ7XHJcblxyXG4gICAgZ2V0IHNlbGVjdGlvbk1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG15SXRlbXMoKTogQXJyYXk8Q2FsZW5kYXJFdmVudD4geyAvLyBkZWxldGVcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBteUl0ZW1zKHZhbHVlKSB7ICAvLyBkZWxldGVcclxuICAgICAgICB0aGlzLl9saXN0SXRlbXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlU2VsZWN0ZWQoYXJnczogQ2FsZW5kYXJTZWxlY3Rpb25FdmVudERhdGEpIHsgLy8gZGVsZXRlXHJcbiAgICAgICAgY29uc3QgY2FsZW5kYXI6IFJhZENhbGVuZGFyID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSAgbmV3IERhdGUoY2FsZW5kYXIuc2VsZWN0ZWREYXRlUmFuZ2Uuc3RhcnREYXRlKTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZShjYWxlbmRhci5zZWxlY3RlZERhdGVSYW5nZS5lbmREYXRlKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKGFyZ3M6IGFueSkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuXHR9XHJcblxyXG59Il19