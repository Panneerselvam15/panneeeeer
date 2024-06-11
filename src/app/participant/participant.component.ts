import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      jobTitle: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.participantForm.valid) {
      this.participantService.registerParticipant(this.participantForm.value).subscribe(
        (response) => {
          console.log('Participant registered successfully');
          // Optionally, navigate to a different page or show a success message
        },
        (error) => {
          console.error('Error registering participant:', error);
          // Handle error appropriately
        }
      );
    } else {
      console.error('Form is invalid');
      // Optionally, display validation errors to the user
    }
  }

}
