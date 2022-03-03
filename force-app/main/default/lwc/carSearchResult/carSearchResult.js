import { LightningElement , wire, api} from 'lwc';
import fetchCarsData from'@salesforce/apex/carSearchController.getCars';
export default class CarSearchResult extends LightningElement {

    @api carTypeId;

    // @wire(fetchCarsData)
    // carInput;
    carInput;
    @wire(fetchCarsData, {carType:'$carTypeId'})
    processOutput({data,error})
    {
        if(data){
            this.carInput = data;
        }

        else if(error){
            document.write("Something Went Wrong");
        }
    }


   
 
}