import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent {
  msgInput: string;
  @ViewChild('MsgInput') MsgInput: ElementRef;

  @Input() friend: Friend;
  @Output() closeChat = new EventEmitter();

  constructor(
    private friendService: FriendService,
    ) { }

  onAddMsg() {
    this.friend.msg.push(this.MsgInput.nativeElement.value);
    this.friendService.addMsg(this.friend.id, this.friend).subscribe(
      (res) => this.friend = res
    );
    this.MsgInput.nativeElement.value = '';
  }

  onClose() {
    this.closeChat.emit();
  }

}
