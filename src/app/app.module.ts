import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { MatTableModule } from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatButtonModule
} from '@angular/material';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { TabePreviewService } from './tabe-preview.service';
import { AppFlowComponent } from './app-flow/app-flow.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTabeComponent,
    AppStartPageComponent,
    AppFlowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    OverlayModule,
    MatButtonModule
  ],
  providers: [TabePreviewService],
  bootstrap: [AppComponent],
  entryComponents: [
    AppStartPageComponent
  ]
})
export class AppModule { }
