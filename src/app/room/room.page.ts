import { Component, OnInit } from '@angular/core';
import{RoomServiceService} from '../room-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  room =[];
  onOff=false;

  constructor(private roomService:RoomServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   this.room =this.roomService.getRoomDetails(id)
  }
  roomChange(e ,i){
    this.room[2].forEach((element,index) => {
      if(e.value===element){
        this.room =this.roomService.getRoomDetails(index);
      }
    });
  }
  alter(device,room){
    if(device.payload== 0 ){
      this.roomService.deviceOnOff(device.topic,1).subscribe(data=>{
      })
      device.payload=1
    }
    else{
      console.log(device.topic,0)
      this.roomService.deviceOnOff(device.topic,0).subscribe(data=>{
      })
      device.payload=0
    }
    
  }

}
