import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    comments: new FormControl('', [Validators.required, Validators.maxLength(350)]),
  });

  submitted = false;

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
    }
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get subject() { return this.form.get('subject'); }
  get comments() { return this.form.get('comments'); }
}
