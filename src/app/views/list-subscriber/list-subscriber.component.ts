import { Component } from '@angular/core';
import { ModelUser } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/api/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-subscriber',
  templateUrl: './list-subscriber.component.html',
  styleUrls: ['./list-subscriber.component.css']
})
export class ListSubscriberComponent {
  listRegistration: ModelUser[]=[];

  constructor(private usuarioServicio: UsersService) { }

  ngOnInit(): void {
    this.GetListRegistration();
  }
  //Llamamos al metodo
  GetListRegistration(){
    this.usuarioServicio.getUser().subscribe((datos: ModelUser[])=>{
      this.listRegistration = datos;
    })
  }

  eliminarUsuario(id: any){
    Swal.fire({
      title: '¿Seguro quiere eliminar este campo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'Su archivo ha sido eliminado.',
          'success'
        )
        this.usuarioServicio.deleteUser(id).subscribe(data => {
          this.GetListRegistration();
          
        },error => {
          console.log(error);
          
        })
      }
      
    })
  }
}
