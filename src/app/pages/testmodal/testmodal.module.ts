import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestmodalPageRoutingModule } from './testmodal-routing.module';

import { TestmodalPage } from './testmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestmodalPageRoutingModule
  ],
  declarations: [TestmodalPage]
})
export class TestmodalPageModule {}
