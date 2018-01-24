import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    dataSource: { Data: { Values: IData[], Key: string }, Total: number } = {
        Data: {
            Values: [
                { Label: "00:00", Value: 944887 },
                { Label: "01:00", Value: 289774 },
                { Label: "02:00", Value: 1234661 },
                { Label: "03:00", Value: 579548 },
                { Label: "04:00", Value: 1524435 },
                { Label: "05:00", Value: 869322 },
                { Label: "06:00", Value: 214209 },
                { Label: "07:00", Value: 1159096 },
                { Label: "08:00", Value: 503983 },
                { Label: "09:00", Value: 1448870 },
                { Label: "10:00", Value: 1065255 },
                { Label: "11:00", Value: 913304 },
                { Label: "12:00", Value: 856857 },
                { Label: "13:00", Value: 895914 },
                { Label: "14:00", Value: 1030475 },
                { Label: "15:00", Value: 843791 },
                { Label: "16:00", Value: 752611 },
                { Label: "17:00", Value: 756935 },
                { Label: "18:00", Value: 856763 },
                { Label: "19:00", Value: 1052095 },
                { Label: "20:00", Value: 926182 },
                { Label: "21:00", Value: 895773 },
                { Label: "22:00", Value: 960868 },
                { Label: "23:00", Value: 1121467 }
            ],
            Key: "Monitored Interactions"
        },
        Total: 21697075
    };

    dataSource2: { Data: { Values: IData[], Key: string }, Total: number, TotalPercentage: number } = {
        Data: {
            Values: [
                { Label: "00:00", Value: 853422 },
                { Label: "01:00", Value: 230632 },
                { Label: "02:00", Value: 467073 },
                { Label: "03:00", Value: 462828 },
                { Label: "04:00", Value: 907039 },
                { Label: "05:00", Value: 559583 },
                { Label: "06:00", Value: 88105 },
                { Label: "07:00", Value: 541182 },
                { Label: "08:00", Value: 326531 },
                { Label: "09:00", Value: 1387149 },
                { Label: "10:00", Value: 512708 },
                { Label: "11:00", Value: 497843 },
                { Label: "12:00", Value: 589004 },
                { Label: "13:00", Value: 777654 },
                { Label: "14:00", Value: 333565 },
                { Label: "15:00", Value: 270520 },
                { Label: "16:00", Value: 322193 },
                { Label: "17:00", Value: 396786 },
                { Label: "18:00", Value: 779826 },
                { Label: "19:00", Value: 642094 },
                { Label: "20:00", Value: 749652 },
                { Label: "21:00", Value: 777711 },
                { Label: "22:00", Value: 794831 },
                { Label: "23:00", Value: 929584 }
            ],
            Key: "Recorded Interactions"
        },
        TotalPercentage: 65.43,
        Total: 14197515
    }


    constructor() {
    }

    ngOnInit(): void {
    }
}

export interface IData {
    Label: string;
    Value: number;
}
