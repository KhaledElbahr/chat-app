import { Observable } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { Friend } from 'src/app/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends: Friend[] = [];

  @Output() OpenChat = new EventEmitter();

  constructor(private friendService: FriendService) {
    this.friendService.GetFriends()
    .subscribe(
      res => {
        this.friends = res;
        console.log(res);
      }
    );
  }

  openChat() {
  this.OpenChat.emit();
  }



}
