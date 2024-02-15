import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { ValidationHtmlConfiguration } from '@aurelia/validation-html';

Aurelia
  .register(ValidationHtmlConfiguration.customize((options) => {
    options.SubscriberCustomElementTemplate = `
  <slot></slot>
  <slot name='secondary'>
    <span style="color:red; font-size: 10px;" repeat.for="error of errors">
      \${error.result.message}
    </span>
  </slot>
`;
  }))
  .app(MyApp)
  .start();
