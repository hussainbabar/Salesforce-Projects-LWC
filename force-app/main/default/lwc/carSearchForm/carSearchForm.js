import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/carSearchFormController.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {
  value =  'Compact';
    carTypeList;
  @wire(getCars)
  processCarTypes({data,error})

  {
      if(data){
          this.carTypeList = [{label:'All Types',value:''}];
          data.forEach(element =>
            {
            const carType = {};
            carType.label = element.Name;
            carType.value = element.Id;
            this.carTypeList.push(carType);

          });
          // carType.sort((a,b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
    //   this.carTypeList = data;
  }   

  else if(error){
      console.log(error);
  }
}

clickTheNew() {
  this[NavigationMixin.Navigate](
    {
      type:'standard__objectPage',
      attributes:{
        objectApiName: 'Car_Type__c',
        actionName: 'new'
      }
    }
  );
}

handleCarTypeChangeEvent(event) {
  const carTypeId = event.detail.value;
  // to send data from child to parent we using custom events method

  const carTypeChangeEvent = new CustomEvent('cartypeselect',{detail:carTypeId});
  this.dispatchEvent(carTypeChangeEvent);


}

}