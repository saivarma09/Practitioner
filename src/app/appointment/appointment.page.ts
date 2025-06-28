import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { AllergiesComponent } from './components/allergies/allergies.component';
import { VitalsComponent } from './components/vitals/vitals.component';
import { ClinicalNotesComponent } from './components/clinical-notes/clinical-notes.component';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PatientInfoComponent, AllergiesComponent, VitalsComponent,
    ClinicalNotesComponent,
    HeaderComponent
]
})
export class AppointmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
