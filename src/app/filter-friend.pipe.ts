import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from './friend.model';

@Pipe({
  name: 'filterFriend'
})
export class FilterFriendPipe implements PipeTransform {


  transform(friends: Friend[], name?: any): any {

    if (name === undefined) {
      return friends;
    }
    return friends.filter(
      (friend) => {
        return friend.name.toLowerCase().includes(name.toLowerCase());
      });
  }

}
