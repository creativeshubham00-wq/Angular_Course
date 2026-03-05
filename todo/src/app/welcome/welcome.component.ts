import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message: String = 'Some welcome message'
  name: String = ''
  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService){
  
  }
  //void is return type here
  ngOnInit(): void {
    //this.message = 5 gives compilation error
    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
   // console.log("get welcome message")
  }
}
