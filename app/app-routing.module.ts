import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "calendar", pathMatch: "full" },
    { path: "calendar", loadChildren: "./calendar/calendar.module#CalendarModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
