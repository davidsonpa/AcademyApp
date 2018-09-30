import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = '';
    this.model.senha = '';
  }

  login() {

    if (this.model.email == "") {
      this.toast.create({ message: 'E-mail não informado, verifique! ', position: 'botton', duration: 3000 }).present();
      return false;
    }

    if (this.model.email.search("@") == -1) {
      this.toast.create({ message: 'Informe um E-mail válido! ', position: 'botton', duration: 3000 }).present();
      return false;
    }

    if (this.model.senha == "") {
      this.toast.create({ message: 'Senha inválida, verifique! ', position: 'botton', duration: 3000 }).present();
      return false;
    }

    if (this.model.senha.length < 3 || this.model.senha.length > 30) {
      this.toast.create({ message: 'Senha deve conter entre 3 e 30 caracteres, verifique! ', position: 'botton', duration: 3000 }).present();
      return false;
    }


    this.userProvider.login(this.model.email, this.model.senha)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso! ', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'E-mail ou Senha incorretos, verifique!. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}

export class User {
  email: string;
  senha: string;
}


