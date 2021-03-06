import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeService } from '../../services/filme.service';
import { Cliente } from '../../model/cliente';

/**
 * Generated class for the ListaClientesServPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-clientes-serv',
  templateUrl: 'lista-clientes-serv.html',
})
export class ListaClientesServPage {

    clientes : Cliente[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public FilmeServ: FilmeService) {
  }

  ionViewDidLoad() {
    this.FilmeServ.listaDeClientes().subscribe(response=>{
      this.clientes = response;
      console.log(this.clientes)
    }, error=>{
      console.log("Servidor não disponível")
    })
    
  }

}
