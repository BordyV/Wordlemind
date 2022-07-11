import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { LineComponent } from './game/line/line.component';
import { LineHintComponent } from './game/line-hint/line-hint.component';
import { KeyboardKeyComponent } from './keyboard-key/keyboard-key.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalEndGameComponent } from './game/modal-end-game/modal-end-game.component';
import { ModalHelpComponent } from './modal-help/modal-help.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LineComponent,
    LineHintComponent,
    KeyboardKeyComponent,
    ModalEndGameComponent,
    ModalHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
