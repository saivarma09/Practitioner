import { Component } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-clinical-notes',
  templateUrl: './clinical-notes.component.html',
  styleUrls: ['./clinical-notes.component.scss'],
  standalone: true,
  imports: [IonIcon, ButtonComponent]
})
export class ClinicalNotesComponent {}
 