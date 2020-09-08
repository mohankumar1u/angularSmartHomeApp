import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  room = [];
  onOff = false;
  slider: any;
  sliderValue = 0;
  myObj

  constructor(private roomService: RoomServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myObj = {
      "color": "white",
      "background-color": "coral",
      "font-size": "60px",
      "padding": "50px"
    }

    let id = this.route.snapshot.paramMap.get('id');
    this.room = this.roomService.getRoomDetails(id)

    // slider.addEventListener("mousemove", function () {
    //   var x = slider.value;
    //   var color = `linear-gradient(linear-gradient(90deg, #333 ${x}%, #3f87 ${x}%))`;
    //   console.log(slider.style.background)
    //   slider.style.background = color;
    //   console.log(slider.style.background)
    // })
  }
  ngAfterViewChecked() {
    if (<HTMLInputElement>document.getElementById("slider") != null) {
      //var sliderPointer = document.getElementsByName("input[type=range]::-webkit-slider-thumb");
      var slider = <HTMLInputElement>document.getElementById("slider");
      var Light2output = <HTMLInputElement>document.getElementById("light2Per");
      Light2output.innerHTML = slider.value + "%";      
      slider.parentElement.parentElement.style.gridRow = 'span 3'
      
      slider.oninput = function () {
        Light2output.innerHTML = slider.value + "%";
        if (parseInt(slider.value) >= 50) {
          var x = parseInt(slider.value) - (parseInt(slider.value) / 13);
        } else if (parseInt(slider.value) >= 12 && parseInt(slider.value) <= 50) {
          var x = parseInt(slider.value) + (parseInt(slider.value) / 13)
        } else {
          var x = parseInt(slider.value) + 3
        }

        var color = `linear-gradient(90deg, #e6c991 ${x}%, #999999 ${x}%)`;
        //sliderPointer.style.width = slider.value;
        slider.style.background = color;

      }
    }
    if(<HTMLInputElement>document.getElementById("AC-slider") != null){
      var ACSlider = <HTMLInputElement>document.getElementById("AC-slider");
      var ACoutput = <HTMLInputElement>document.getElementById("ACPer");
      ACSlider.parentElement.parentElement.style.gridColumn = 'span 2'
      ACoutput.innerHTML = ACSlider.value + ".C";
      ACSlider.oninput = function () {
        ACoutput.innerHTML = ACSlider.value + ".C";
        if (parseInt(ACSlider.value) >= 22 ) {
          var x = (parseInt(ACSlider.value)+10)/50*100-5
        }
        else {
          var x = (parseInt(ACSlider.value)+10)/50*100
        }
        //var x =(parseInt(ACSlider.value)+10)/50*100
        var color = `linear-gradient(90deg, #90cce6 ${x}%, #999999 ${x}%)`;
        //sliderPointer.style.width = slider.value;
        ACSlider.style.background = color;

      }
    }
    
  }
  roomChange(e, i) {
    console.log(e, i);
    this.room[2].forEach((element, index) => {
      if (e.value === element) {
        this.room = this.roomService.getRoomDetails(index);
      }
    });
  }
  filterDevice(e) {
    var value = e.target.value;
    requestAnimationFrame(() => {
      this.room[1].forEach(item => {
        const shouldShow = item.device.toLowerCase().indexOf(value) > -1;
        item.display = shouldShow ? 'block' : 'none';
      });
    });

  }
  alter(device, room) {
    if (device.payload == 0) {
      this.roomService.deviceOnOff(device.topic, 1).subscribe(data => {
      })
      device.payload = 1
    }
    else {
      this.roomService.deviceOnOff(device.topic, 0).subscribe(data => {
      })
      device.payload = 0
    }

  }
  //  slider = document.getElementById("slider");
  //  output = document.getElementById("light2Per");



  // onslide(){
  //   console.log("")
  //   console.log("h")
  // }

}
