"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var calendar_1 = require("nativescript-pro-ui/calendar");
var color_1 = require("tns-core-modules/color");
var CalendarEventsService = (function () {
    function CalendarEventsService() {
    }
    CalendarEventsService.prototype.getCalendarEvents = function () {
        var now = new Date();
        var startDate, endDate, event;
        var colors = [new color_1.Color(200, 188, 26, 214), new color_1.Color(220, 255, 109, 130), new color_1.Color(255, 55, 45, 255), new color_1.Color(199, 17, 227, 10), new color_1.Color(255, 255, 54, 3)];
        var events = new Array();
        for (var i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            event = new calendar_1.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendar_1.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        return events;
    };
    CalendarEventsService = __decorate([
        core_1.Injectable()
    ], CalendarEventsService);
    return CalendarEventsService;
}());
exports.CalendarEventsService = CalendarEventsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhci1ldmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUN6Qyx5REFBMkQ7QUFDM0QsZ0RBQTZDO0FBRzdDO0lBQUE7SUFvQkEsQ0FBQztJQW5CRyxpREFBaUIsR0FBakI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksU0FBZSxFQUNmLE9BQWEsRUFDYixLQUFvQixDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFpQixDQUFDLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0ssSUFBSSxNQUFNLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFDO1FBQzlELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRSxLQUFLLEdBQUcsSUFBSSx3QkFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLEdBQUcsSUFBSSx3QkFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQW5CUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTtPQUNBLHFCQUFxQixDQW9CakM7SUFBRCw0QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2FsZW5kYXJFdmVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvY2FsZW5kYXJcIjtcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRzU2VydmljZSB7XHJcbiAgICBnZXRDYWxlbmRhckV2ZW50cygpOiBBcnJheTxDYWxlbmRhckV2ZW50PiB7XHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XHJcbiAgICAgICAgbGV0IGNvbG9yczogQXJyYXk8Q29sb3I+ID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xyXG4gICAgICAgIGxldCBldmVudHM6IEFycmF5PENhbGVuZGFyRXZlbnQ+ID0gbmV3IEFycmF5PENhbGVuZGFyRXZlbnQ+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgaSAqIDIsIDEpO1xyXG4gICAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAoaSAqIDIpLCAzKTtcclxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgQ2FsZW5kYXJFdmVudChcImV2ZW50IFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcclxuICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgQ2FsZW5kYXJFdmVudChcInNlY29uZCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJ1ZSwgY29sb3JzW2kgKiA1ICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn0iXX0=