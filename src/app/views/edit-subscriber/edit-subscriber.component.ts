import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelUser } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/api/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-subscriber',
  templateUrl: './edit-subscriber.component.html',
  styleUrls: ['./edit-subscriber.component.css']
})
export class EditSubscriberComponent {
  id:string = '';

  usuarioForm: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'rol':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioUsuario: UsersService,
    private router: Router,
    //invoca al id
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.SearchUser();
  }
  //para los datos de los input
  //autocompleta los campos en la vista IU
  SearchUser(){
    this.servicioUsuario.getUserById(this.id).subscribe((datos: ModelUser)=>{
      this.usuarioForm.controls["id"].setValue(datos.id);
      this.usuarioForm.controls["Name"].setValue(datos.Name);
      this.usuarioForm.controls["Email"].setValue(datos.Email);
      this.usuarioForm.controls["CountryCode"].setValue(datos.CountryCode);
      this.usuarioForm.controls["PhoneNumber"].setValue(datos.PhoneNumber);
      this.usuarioForm.controls["JobTitle"].setValue(datos.JobTitle);
      this.usuarioForm.controls["Area"].setValue(datos.Area);
      this.usuarioForm.controls["Topics"].setValue(datos.Topics);
    });
  }
  //actualización
  EditUser(){
    let cedula = this.usuarioForm.controls["cedula"].value;
    let nombre = this.usuarioForm.controls["nombre"].value;
    let apellido = this.usuarioForm.controls["apellido"].value;
    let telefono = this.usuarioForm.controls["telefono"].value;
    let correo = this.usuarioForm.controls["correo"].value;
    let rol = this.usuarioForm.controls["rol"].value;
    let p = new ModelUser();
    console.log(p);
    
    p.Name = cedula;
    p.Email = nombre;
    p.CountryCode = apellido;
    p.PhoneNumber = telefono;
    p.JobTitle = correo;
    p.Area = rol;
    p.Topics = rol;
    p.id = this.id;
    this.servicioUsuario.updateUser(p).subscribe((datos: ModelUser)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-usuario"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando usuario',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }
}
