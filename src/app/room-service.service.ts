import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  rooms ={};
  room=[]

  constructor() { }
  createRooms(data){
   this.rooms=data;
   console.log(this.rooms);
  }
  getRoomDetails(data){
    this.room=this.rooms[data];
    return this.room
    console.log(this.room);
  }
}
