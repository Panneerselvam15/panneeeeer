import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../participant/participant.model';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = 'https://localhost:7004/api/Participants';

  constructor(private http: HttpClient) { }

  registerParticipant(participantData: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl, participantData);
  }
  

  }


