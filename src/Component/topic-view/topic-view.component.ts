import {Component, inject} from '@angular/core';
import {TopicService} from '../../Service/topic.service';

@Component({
  selector: 'app-topic-view',
  imports: [],
  templateUrl: './topic-view.component.html',
  standalone: true,
  styleUrl: './topic-view.component.css'
})
export class TopicViewComponent
{
   topicservice=inject(TopicService);


}
