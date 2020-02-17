import { Horario } from './../../core/model/Horario';
import { ServiceSQLiteService } from './../../service/service-sqlite.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  private dia = [0, 1, 2, 3, 4];
  private hora = [0, 1, 2, 3, 4, 5];
  private horario: Horario;
  private matrias: any[];

  constructor(private service: ServiceSQLiteService, public toastController: ToastController) {
    this.horario = this.service.horario;
    this.matrias = this.service.asignaturas;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

  }

  async presentToast(i) {
    let mensage = '';
    i.forEach(element => {
      mensage = mensage + '/' + element.completo;
    });
    const toast = await this.toastController.create({
      message: mensage,
      duration: 2000
    });
    toast.present();
  }

}
