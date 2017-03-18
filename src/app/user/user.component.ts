import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
    selector: 'user',
    templateUrl : './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent{
    public name:string;
    public summonerName: string
    public arr : any[];

    constructor(){
        this.name = "David";
        this.summonerName = "hi im podolsk";
        this.arr = [1,5,10,15,20];
        

        this.repetir();
    }

    repetir(){
        _.forEach(this.arr, function(item){
            console.info('Item >> ' + item);
        });
    }
}