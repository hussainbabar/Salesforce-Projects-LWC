import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class CarTile extends LightningElement {
    
   @api car;
   @api success;

   @wire(CurrentPageReference)
   pageRef;

   handleCarSelect(event) {
      event.preventDefault();
      const carId = this.car.Id;
      fireEvent(this.pageRef, 'carSelect', this.car);

   }
}