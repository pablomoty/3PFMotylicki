import { Injectable } from "@angular/core";
import { LogueoAlumno } from "./models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { Alumno } from "../dashboard/pages/alumnos/models/modelalumno";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<Alumno | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private notifier: NotifierService, private router: Router) {}


  autenticacion(): Observable<boolean> {
    return this.authUser$.pipe(
      take(1),
      map((user) => !!user),
    );
  }

  login(logueo: LogueoAlumno): void {
    const MOCK_ALUMNO: Alumno = {
      id: 50,
      nombre: 'Carlos',
      apellido: 'Garcia',
      email: 'cgarcia@gmail.com',
      curso: 'Angular',
      genero: 'Masculino'
    }
    if (logueo.email === MOCK_ALUMNO.email && logueo.apellido === MOCK_ALUMNO.apellido) {
      
      this._authUser$.next(MOCK_ALUMNO);
      this.router.navigate(['/dashboard']);
    } 
    else {

      this.notifier.showError('Email o contrasena invalida');
      this._authUser$.next(null);
    }
  }
}
