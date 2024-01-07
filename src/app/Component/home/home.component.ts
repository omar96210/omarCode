import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public screenWidth: any;  
  public screenHeight: any;  
    
  ngOnInit() {  
      this.screenWidth = window.innerWidth;  
      this.screenHeight = window.innerHeight;  
  }  

  divToShowText:any='home'
  divToShow(stringText:any){
this.divToShowText=stringText
  }




  projectList=[

    {
      title:'Up World ',
      underline:'Private',
      descreption:'This Site is for Acadamy located in alexandria to show there courses and to register student and view prices and there locations.',
      imgSrc:'../../../assets/img/upWorld.png',
      link:'/upWorld'
    },
    {
      title:'El-Kassas ',
      underline:'Globisoft',
      descreption:'This Site was developed to present the project for Kassas company and represent their work field for anyone interested to contact them. ',
      imgSrc:'../../../assets/img/kc.png',
      link:'https://kc-egypt.com/#/'
    },
    {
      title:'Menus More',
      underline:'Globisoft',
      descreption:'Menus in new Prespective Menu with View and order and delivery make your resturent alive with Menu More',
      imgSrc:'../../../assets/img/menusmore.png',
      link:'https://saudi-sas.com/#/plan/1'
    },
    {
      title:'Bloom',
      underline:'Globisoft',
      descreption:'Real State Site to sell Unites in Egypt and UAE Show all your compounds project and any selling units.',
      imgSrc:'../../../assets/img/bloom.png',
      link:'http://bloomwealthproperties.com/#/home'
    }
  ]



  goToLink(url: string){
    window.open(url, "_blank");
}
}



