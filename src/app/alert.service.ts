import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  // Limit alert when counter reaches 5
  async presentAlertForLimit(confirmHandler: () => void) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Item Limit Reached',
      message:
        'You cannot add more than 5 items of this type. A new item with the same details will be added to the bottom of the list.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            confirmHandler();
          },
        },
      ],
    });

    await alert.present();
  }

  // Deletion alert when counter reaches 0
  async presentAlertForDeletion(
    item: any,
    cancelHandler: () => void,
    confirmHandler: () => void
  ) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message:
        'The item counter has reached zero. Do you want to remove this item from your cart?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: cancelHandler,
        },
        {
          text: 'Yes',
          handler: confirmHandler,
        },
      ],
    });

    await alert.present();
  }
}
