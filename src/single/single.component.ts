import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import {Topic} from '../Model/topic';

@Component({
  selector: 'app-single',
  imports: [
    FormsModule
  ],
  templateUrl: './single.component.html',
  standalone: true,
  styleUrl: './single.component.css'
})
export class SingleComponent {

  topiclist:Topic[]=[]
  topic:Topic = new Topic();
  isNew:boolean=true;

  constructor(private httpclient: HttpClient) {
  }

  getList(){
       // @ts-ignore
    this.httpclient.get("http://localhost:9090/topics").subscribe((result:Topic[])=> this.topiclist = result)
  }
  saveUser()
  {
         if(this.isNew)
         {
             this.httpclient.post("http://localhost:9090/topics",this.topic).subscribe((result:any)=>{})
         }
         else{
           this.httpclient.put("http://localhost:9090/topics",this.topic).subscribe((result:any)=>{})
           this.isNew=true;
         }

       alert("Record has been saved");
       //TopicFormRef.reset();
  }

  updateTopic(topic:Topic)
  {
     this.topic=topic;
     this.isNew=false;

  }


}
