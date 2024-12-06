import { Routes } from '@angular/router';
import {SingleComponent} from '../single/single.component';
import {TopicEntryComponent} from '../Component/topic-entry/topic-entry.component';
import {TopicViewComponent} from '../Component/topic-view/topic-view.component';

export const routes: Routes = [
  {path:'single',component:SingleComponent},
  {path:"topicentry",component:TopicEntryComponent},
  {path:"topicview",component:TopicViewComponent}
];
