import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgxMqttClientModule } from 'ngx-mqtt-client';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import {
  IMqttMessage,
  MqttModule,
  MqttService,
  IMqttServiceOptions
} from 'ngx-mqtt';
//import { IonicMqttModule, MQTTService } from 'ionic-mqtt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  url: "mqtt://broker.mqttdashboard.com:8000",
  clientId:'clientId-O30Oa8xslg'
};
MQTT_SERVICE_OPTIONS.url
export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IonicMqttModule,
    IonicModule.forRoot(),
    MqttModule.forRoot(
      MQTT_SERVICE_OPTIONS),
    //   NgxMqttClientModule.withOptions({
    //     host: 'broker.hivemq.com',
    //     protocol: 'ws',
    //     port: 8000,
    //     path: '/mqtt',
    //     keepalive: 5
    // }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    //MQTTService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


