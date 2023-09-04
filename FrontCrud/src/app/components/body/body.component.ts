import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  personas : Array<Persona>
  formularioPersona: FormGroup
  display: boolean
  creacion: boolean

  constructor(private fb: FormBuilder, private pService: PersonaService){
    this.personas = new Array<Persona>()
    this.display = false
    this.creacion = false
    this.formularioPersona = fb.group({
      numDocumento: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(){
    this.getPersonas();
  }

  //Crear persona
  crearPersona(){
    if(this.formularioPersona.valid){
      let persona = new Persona()
      persona.numDocumento = this.formularioPersona.get('numDocumento')?.value
      persona.nombre = this.formularioPersona.get('nombre')?.value
      persona.apellido = this.formularioPersona.get('apellido')?.value
      persona.correoElectronico = this.formularioPersona.get('correo')?.value
      this.pService.crearPersona(persona).subscribe(res => {
        this.getPersonas()
        this.formularioPersona.reset()
      })
    }
  }

  //Get personas
  getPersonas(){
    this.pService.getPersonas().subscribe(res =>{
      this.personas = res
    })
  }

  //Eliminar persona
  eliminarPersona(idPersona: number){
    this.pService.eliminarPersona(idPersona).subscribe(res => {
      this.getPersonas()
    })
  }

  //Activa el dialogo de crear
  creador(){
    this.creacion = !this.creacion
  }

  //Activa el dialogo de editar
  activador(persona: Persona){
    this.formularioPersona.get('numDocumento')?.setValue(persona.numDocumento)
    this.formularioPersona.get('nombre')?.setValue(persona.nombre)
    this.formularioPersona.get('apellido')?.setValue(persona.apellido)
    this.formularioPersona.get('correo')?.setValue(persona.correoElectronico)
    this.display = !this.display
  }

  //Actualizar persona
  actualizarPersona(){
    if(this.formularioPersona.valid){
      let persona = new Persona()
      persona.numDocumento = this.formularioPersona.get('numDocumento')?.value
      persona.nombre = this.formularioPersona.get('nombre')?.value
      persona.apellido = this.formularioPersona.get('apellido')?.value
      persona.correoElectronico = this.formularioPersona.get('correo')?.value
      this.pService.actualizarPersona(persona).subscribe(res => {
        this.getPersonas()
        this.formularioPersona.reset()
        this.display = !this.display
      })
    }
  }
}
