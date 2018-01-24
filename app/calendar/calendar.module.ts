import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-pro-ui/calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-pro-ui/autocomplete/angular";
import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CalendarRoutingModule } from "./calendar-routing.module";
import { CalendarComponent } from "./calendar.component";

@NgModule({
    imports: [
        CalendarRoutingModule,
        NativeScriptUICalendarModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptModule
    ],
    declarations: [
        CalendarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CalendarModule { }
