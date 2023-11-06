import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Laboratorio';
  value = 'Clear me';
  numeroIn: any;
  numeroIngresado: number=0;
  inputsAdicionales: number[] = [];

  crearInputs() {
    this.inputsAdicionales = Array.from({ length: this.numeroIngresado }, (_, i) => i + 1);

    if (this.numeroIngresado) {
      this.inputsAdicionales.push(this.numeroIngresado);
      this.numeroIn = null; // Clear the input field after adding data
    }
  }

}


