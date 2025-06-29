import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { PatientInfoModalComponent } from '../patient-info-modal/patient-info-modal.component';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
  imports: [IonicModule]
})
export class PatientInfoComponent {
  patient = {
    name: 'Olivia Bennett',
    address: '123 Main St, Springfield',
    age: 29,
    email: 'olivia.bennett@example.com',
    phone: '+1 555-123-4567'
  };

  constructor(private modalCtrl: ModalController) {}

  async openPatientInfoModal() {
    const modal = await this.modalCtrl.create({
      component: PatientInfoModalComponent,
      componentProps: { patient: this.patient },
      // breakpoints: [0, 0.75],
      initialBreakpoint: 0.45,
      backdropDismiss: true
    });
    await modal.present();
  }
} 