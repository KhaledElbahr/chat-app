import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend.model';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  selectedFriend: Friend;
  toggleChat = false;

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.friendService.friendSelected.subscribe(
      (friend: Friend) => {
        this.selectedFriend = friend;
      }
    );
  }

  openChat() {
    this.toggleChat = true;
  }

  closeChat() {
    this.toggleChat = false;
  }

}
