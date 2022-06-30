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
import { MaxSubarrayComponent } from './components/max-subarray/max-subarray.component';
import { WordCountComponent } from './components/word-count/word-count.component';
import { PalindromeCheckComponent } from './components/palindrome-check/palindrome-check.component';
import { CaesarCipherEncryptorComponent } from './components/caesar-cipher-encryptor/caesar-cipher-encryptor.component';
import { FirstNonRepeatingCharacterComponent } from './components/first-non-repeating-character/first-non-repeating-character.component';
import { UniqueMorseCodeWordsComponent } from './components/unique-morse-code-words/unique-morse-code-words.component';

@NgModule({
  declarations: [
    AppComponent,
    HaspMapComponent,
    RunLengthEncodingComponent,
    SortArrayComponent,
    MaxSubsetSumNoAdjacentComponent,
    SmallPositiveIntegerComponent,
    TestComponent,
    MaxSubarrayComponent,
    WordCountComponent,
    PalindromeCheckComponent,
    CaesarCipherEncryptorComponent,
    FirstNonRepeatingCharacterComponent,
    UniqueMorseCodeWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
