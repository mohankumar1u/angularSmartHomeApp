import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  [x: string]: any;
  rooms ={};
  room=[]

  constructor(private http: HTTP) { }
  createRooms(data){
   this.rooms=data;
   console.log(this.rooms[0]);
  
  //  this.http.get('https://api.trello.com/1/boards/5ce8e2e82a761b7a70cad644/lists/?key=7e905c16c547dc4b2b3c08cafc47e3c7&token=be01ed7434db82cb66e8b1610a43aa7854aa9cff1c5a1b62f85ce76942357e1f',{},{})
  // .then(data => {

  //   alert(data+"--http");
  //   alert(data.data); // data received by server
  //   alert(data.headers);

  // })
  // .catch(error => {

  //   alert(error.status+"--error ");
  //   alert(error.error); // error message as string
  //   alert(error.headers);

  // });
  }
  getRoomDetails(data){
    this.room=this.rooms[data];
    console.log(this.room["livingRoom"]);
    return this.room
    
  }
  getTest(){
    this.http.post('tachyon_mqtt.com',{},{headers: { 'Content-Type': 'application/json' }})
  .then(data => {
    alert("working");
  })
  .catch(error => {

    alert("--error ");
  });
  }
}
