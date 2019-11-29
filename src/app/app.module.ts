import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendDetailsComponent } from './friends/friend-details/friend-details.component';
import { FriendComponent } from './friends/friends-list/friend/friend.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendService } from './services/friend.service';
import { FilterFriendPipe } from './filter-friend.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendDetailsComponent,
    FriendsListComponent,
    FriendComponent,
    FilterFriendPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
