import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6012328',
      name: 'Passon Julnan',
      gender: 'Male',
      birthyear: 1998,
      email: 'passonpp@gmail.com',
      phone: '0962549363',
      img: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/p960x960/61291976_2323943464330683_4896037824362446848_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeEqO6hygJ830q7dVaCsZC-R9nAb9-6nUWL2cBv37qdRYoENtqp_MnfAXZaVN9l-ZyxVNy9enBAXcdNgfe_h6G5h&_nc_ohc=950VyFkFt4EAX-e_Mw7&_nc_ht=scontent.fbkk2-7.fna&_nc_tp=6&oh=4437652f457c7d598b153974b3dc3ebb&oe=5EDABD08',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  onUserClick($e){
    alert(this.profile.address);
  }

}
