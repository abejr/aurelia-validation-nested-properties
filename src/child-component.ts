import { IValidationRules } from "@aurelia/validation";
import { IValidationController } from "@aurelia/validation-html";
import { BindingMode, bindable } from "aurelia";
import { newInstanceForScope } from '@aurelia/kernel';

export class ChildComponent {
  @bindable({
    mode: BindingMode.twoWay,
  }) obj;
  constructor(
    @IValidationRules private validationRules: IValidationRules,
    @newInstanceForScope(IValidationController) private validationController: IValidationController) {

  }
  attached() {
    this.obj ??= {};
    this.validationRules
      .on(this.obj)
      .ensure('displayName')
      .required()
      .maxLength(10)
      .minLength(3)
      .withMessage('Name is required');
  }
  recreateObj() {
    this.obj = { displayName: 'won\'t validate anymore' }
  }

}