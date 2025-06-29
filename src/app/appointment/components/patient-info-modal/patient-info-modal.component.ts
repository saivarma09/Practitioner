import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-patient-info-modal',
  templateUrl: './patient-info-modal.component.html',
  styleUrls: ['./patient-info-modal.component.scss'],
  imports: [IonicModule]
})
export class PatientInfoModalComponent {
  @Input() patient: any;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
} 