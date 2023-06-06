import { LightningElement } from 'lwc';
import NotificationBanner from 'c/notificationBanner';

export default class NotificationBannerContainer extends LightningElement {
  handleClose() {
    // Custom logic to handle the close event
    console.log('Notification banner closed!');
  }
}
