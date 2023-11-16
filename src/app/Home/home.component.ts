import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landidify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  features: { icon: string; title: string; description: string; }[];
  
  constructor(
    private router: Router
  ) {
    this.features = [
      {
        icon: '../../assets/icons/Base.svg',
        title: 'Robust workflow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
      {
        icon: '../../assets/icons/Flex.svg',
        title: 'Flexibility',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
      {
        icon: '../../assets/icons/User.svg',
        title: 'User friendly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
      {
        icon: '../../assets/icons/Multiple.svg',
        title: 'Multiple layouts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
      {
        icon: '../../assets/icons/Better.svg',
        title: 'Better components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
      {
        icon: '../../assets/icons/Well.svg',
        title: 'Well organised',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
      },
    ]
  }

  goLogin(){
    this.router.navigate(['/login'])
  }

}
