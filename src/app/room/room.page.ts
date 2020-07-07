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

  constructor(private roomService:RoomServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   this.room =this.roomService.getRoomDetails(id)
  }

}