import { LightningElement, api } from 'lwc';
    
// overriding the base lightning-button for Jest tests

export default class Button extends LightningElement {
  @api disabled;
  @api iconName;
  @api iconPosition;
  @api label;
  @api name;
  @api type;
  @api value;
  @api variant;
}