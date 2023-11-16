import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';

import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/login.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableComponent } from './Table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableService } from '../services/table.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LandifyModalPostComponent } from '../lib/components/landify-modal-post/landify-modal-post.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      TableComponent,
      LandifyModalPostComponent,
      HomeComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
