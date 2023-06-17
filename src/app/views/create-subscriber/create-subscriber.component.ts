import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelUser } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/api/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-subscriber',
  templateUrl: './create-subscriber.component.html',
  styleUrls: ['./create-subscriber.component.css']
})
export class CreateSubscriberComponent {
  usuarioForm: FormGroup = this.fb.group({
    'Name':['', [Validators.required]],
    'Email':['', [Validators.required]],
    'ContryCode':['', [Validators.required]],
    'PhoneNumber':['', [Validators.required]],
    'JobTitle':['', [Validators.required]],
    'Area':['', [Validators.required]],
    'Topics':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioUsuario: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  SaveUser(){
    let Name = this.usuarioForm.controls["Name"].value;
    let Email = this.usuarioForm.controls["Email"].value;
    let CountryCode = this.usuarioForm.controls["CountryNumber"].value;
    let PhoneNumber = this.usuarioForm.controls["PhoneNumber"].value;
    let JobTitle = this.usuarioForm.controls["JobTitle"].value;
    let Area = this.usuarioForm.controls["Area"].value;
    let Topics = this.usuarioForm.controls["Topics"].value;
    let p = new ModelUser();
    p.Name = Name;
    p.Email = Email;
    p.CountryCode = CountryCode;
    p.PhoneNumber = PhoneNumber;
    p.JobTitle = JobTitle;
    p.Area = Area;
    p.Topics = Topics;
    this.servicioUsuario.createUser(p).subscribe((datos: ModelUser)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-usuario"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando usuario',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
