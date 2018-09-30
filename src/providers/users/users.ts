import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersProvider {
  public API_URL = 'http://www.academyws.somee.com/api/'
  data: any;

  constructor(public http: Http, public platform: Platform) { }

  sair() {
    this.platform.exitApp();
  }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {

    this.http.get(this.API_URL + 'Alunos/Autenticar?email=' + email + '&senha=' + senha)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
 


}

