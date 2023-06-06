import { LightningElement, api } from 'lwc';

export default class NotificationBanner extends LightningElement {
  @api message;
  @api type;
  @api closeHandler;

  get bannerStyle() {
    // Customize the banner style based on the notification type
    let style = '';
    switch (this.type) {
      case 'success':
        style = 'background-color: green; color: white;';
        break;
      case 'error':
        style = 'background-color: red; color: white;';
        break;
      case 'warning':
        style = 'background-color: orange; color: white;';
        break;
      default:
        style = 'background-color: gray; color: white;';
        break;
    }
    return style;
  }

  get icon() {
    // Customize the icon based on the notification type
    switch (this.type) {
      case 'success':
        return '✔️';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return '';
    }
  }

  dismissNotification() {
    // Trigger the onClose callback function
    if (typeof this.closeHandler === 'function') {
      this.closeHandler();
    }
  }
}
