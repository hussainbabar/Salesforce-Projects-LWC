import { LightningElement } from 'lwc';

export default class TryOuts extends LightningElement {
//   value="Instagram";
    PicklistItems = [
        {label:'New', value:'New'},
        {label:"Twitter", value:"Twitter"},
        {label:"Instagram", value:"Instagram"}
        
    ];

    imageURL = "/resource/cars/luxury/mercedes_benz_gls.jpg";
    OwnerName ="Babar";
}
