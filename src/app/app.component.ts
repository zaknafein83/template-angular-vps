import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

const API_URL = '/api';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main style="font-family: system-ui, sans-serif; padding: 2rem; max-width: 40rem; margin: 0 auto;">
      <h1>myapp</h1>
      <p>{{ greeting() }}</p>
      <p style="color: #666; font-size: 0.85rem;">
        Modifica <code>src/app/app.component.ts</code> per iniziare.
      </p>
    </main>
  `,
})
export class AppComponent implements OnInit {
  greeting = signal('Loading...');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`${API_URL}/hello`, { responseType: 'text' })
      .pipe(catchError(() => of('Hello from myapp (backend non raggiungibile)')))
      .subscribe((text) => this.greeting.set(text));
  }
}
