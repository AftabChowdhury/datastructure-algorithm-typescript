import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaspMapComponent } from './components/hasp-map/hasp-map.component';
import { RunLengthEncodingComponent } from './components/run-length-encoding/run-length-encoding.component';
import { SortArrayComponent } from './components/sort-array/sort-array.component';
import { MaxSubsetSumNoAdjacentComponent } from './components/max-subset-sum-no-adjacent/max-subset-sum-no-adjacent.component';
import { SmallPositiveIntegerComponent } from './components/small-positive-integer/small-positive-integer.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HaspMapComponent,
    RunLengthEncodingComponent,
    SortArrayComponent,
    MaxSubsetSumNoAdjacentComponent,
    SmallPositiveIntegerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
