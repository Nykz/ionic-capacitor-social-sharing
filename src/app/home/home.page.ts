import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageUrl = 'https://technyks.com/image.jpg';

  constructor(private socialSharing: SocialSharing) {}

  shareViaTwitter() {
    this.socialSharing.shareViaTwitter('Test twitter sharing', null, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebook('Test facebook sharing', null, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaInstagram() {
    this.socialSharing.shareViaInstagram('Test instagram sharing', this.imageUrl)
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaEmail() {
    this.socialSharing.shareViaEmail('Test email sharing', 'sharing', ['technyks@gmail.com'])
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaWhatsapp() {
    this.socialSharing.shareViaWhatsApp('Test whatsapp sharing', this.imageUrl, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaWhatsappToPhone() {
    this.socialSharing.shareViaWhatsAppToPhone(
      '+919101085890', 
      'Test whatsapp to phone sharing', 
      null,
      'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  // shareViaWhatsappToReceiver() {
  //   this.socialSharing.shareViaWhatsAppToReceiver(
  //     '+919101085890', 
  //     'Test whatsapp to phone sharing', 
  //     null,
  //     'https://youtu.be/C7pQl3VxDzE')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

}
