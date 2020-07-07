import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import{RoomServiceService} from '../room-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
 import * as mqtt from 'mqtt';
// import * as mosca from 'mosca';
//var mqtt = require('mqtt')
//import { MQTTService } from 'ionic-mqtt';

//var client =mqtt.connect('mqtt://broker.mqttdashboard.com:8000')
var topic ='home/fan'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  scannedCode = null;
  message = null;
  rooms = [];
  subscription = null;

  private _mqttClient: any;

  // private MQTT_CONFIG: {
  //   host: string,
  //   port: number,
  //   clientId: string,
  // } = {
  //   host: "test.mosquitto.org",
  //   port: 8081,
  //   clientId: "mqtt",
  // };
  private TOPIC: string[] = [];

  constructor(
    private barcodeScanner: BarcodeScanner,
    private mqtt: MqttService,
    private roomService:RoomServiceService,
    private router:Router
    ) {
    this.initializeApp();
  }
  // ngOnInit() {
  //   this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);
  // }
  initializeApp() {

   // this.barcodeScanner.scan().then(barcodeData => {
    //  this.scannedCode = barcodeData.text;
      this.scannedCode =`'/livingroom/light'
      '/livingroom/fun'`;
      var data = this.scannedCode.split("\n");
      let i=0;
      data.forEach(element => {
        element = element.split("/");
        if(this.rooms[element[1]] != undefined){
          this.rooms[element[1]].push(element[2])
         // console.log(this.rooms[element[1]],"yes");
        }else{
          this.rooms[element[1]]=[element[2]];
         // console.log(this.rooms[element[1]], "no");
        }
    });
    this.rooms =Object.entries(this.rooms);
    this.roomService.createRooms(this.rooms);
    var topic ='mqtt/demo'
    //var mosca = require('mosca')
 var settings = {port:1234}
// var broker =new mosca.Server(settings)
// broker.on('ready', ()=>{
//     console.log("working");
// })
    // var client = connect();
    // client.on('message',(topic,message)=>{
    //   this.message=message.toString()
    //   console.log(this.message)
    // })
    // client.on('connect',()=>{
    //   alert("client connected");
    //   client.subscribe(topic);
    // })
    

    // client.on("message", function (topic, payload) {
    //   alert([topic, payload].join(": "));
    //   client.end();
    // });

    // client.publish("mqtt/demo", "hello world!");
   // });
  //  this.mqtt.unsafePublish("home/button", "on", {qos: 0, retain: false});
  //   this.mqtt.observe('mohan/light').subscribe((message: IMqttMessage)=> {
  //  console.log(message.payload.toString());
 
    // });
    this.mqtt.onConnect.subscribe((e) => {
      console.log('hello');
      alert('onConnect');
    });

    this.mqtt.onError.subscribe((e) => {
      alert(e);
    });
  //   this.mqtt.onClose.subscribe(() => {
  //     console.log('onClose');
  //  });
  //  this.mqtt.onReconnect.subscribe(() => {
  //     console.log('onReconnect');
  //  });
  //  this.mqtt.onMessage.subscribe((e) => console.log('onMessage', e));
  //  this.subscription = this.mqtt.observe('my/topic').subscribe((message: IMqttMessage) => {
  //   alert("somthing is working");
  //   this.message = message.payload.toString();
  //      alert(this.message);
  //  });
 

  }
  openPage(i){
    console.log(i);
    this.router.navigate([`/room/${i}`]);
  }
  //           private _onConnectionLost(responseObject) {
  //             // connection listener
  //             // ...do actions when connection lost
  //             console.log('_onConnectionLost', responseObject);
  //           }

  //           private _onMessageArrived(message) {
  //             // message listener
  //             // ...do actions with arriving message
  //             console.log('message', message);
  //           }

          


  //           // public function for sending and publishing mqtt messages

  // public sendMessage() {
  //   console.log('sendMessage')
  //   this.mqttService.sendMessage('home/fan', 'msg');
  // }

  // public publishMessage() {
  //   console.log('publishMessage')
  //   this.mqttService.publishMessage('home/fan', 'msg');
  // }


}

