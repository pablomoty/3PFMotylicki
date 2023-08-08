import { Injectable } from '@angular/core';
import { CrearAlumnoData, UpdateAlumnoData, Alumno } from './models/modelalumno';
import { BehaviorSubject, Observable, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

const USER_DB: Observable<Alumno[]> = of([
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanperez@gmail.com',
    curso: 'JavaScript',
    genero: 'Masculino',
  },
  {
    id: 2,
    nombre: 'Jose',
    apellido: 'Alvarez',
    email: 'josealvarez@gmail.com',
    curso: 'Angular',
    genero: 'Masculino',
  },
]).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private _users$ = new BehaviorSubject<Alumno[]>([]);
  private users$ = this._users$.asObservable();

  constructor(private notifier: NotifierService) {}

  loadUsers(): void {
    USER_DB.subscribe({
      next: (usuariosFromDb) => this._users$.next(usuariosFromDb),
    });
  }

  getUsers(): Observable<Alumno[]> {
    return this.users$;
  }

  getUserById(id: number) {
    return this.users$.pipe(
      take(1),
      map(( users ) =>  users.find((u) => u.id === id)),
    )
  }

  createUser(user: CrearAlumnoData): void {
    
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._users$.next([
          ...arrayActual,
          { ...user, id: arrayActual.length + 1 },
        ]);
        this.notifier.showSuccess('Alumno creado');
      },
    });
  }

  updateUserById(id: number, usuarioActualizado: UpdateAlumnoData): void {
    this.users$.pipe(take(1)).subscribe({

      next: (arrayActual) => {

        this._users$.next(
          arrayActual.map((u) =>
            u.id === id ? { ...u, ...usuarioActualizado } : u
          )
        );

        this.notifier.showSuccess('Alumno Actualizado');
      },
    });
  }

  deleteUserById(id: number): void {
    this._users$.pipe(take(1)).subscribe({

      next: (arrayActual) => {
        this._users$.next(arrayActual.filter((u) => u.id !== id));
        this.notifier.showSuccess('Alumno eliminado');

      },
    });
  }
}

  

