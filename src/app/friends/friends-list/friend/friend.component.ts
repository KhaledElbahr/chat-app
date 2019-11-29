import { Component, Input } from '@angular/core';
import { Friend } from 'src/app/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input() friend: Friend;

  constructor(private friendService: FriendService) { }

  onSelected() {
    this.friendService.friendSelected.emit(this.friend);
  }

}
