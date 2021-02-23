import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './componets/car/car.component';
import { KontaktiComponent } from './componets/kontakti/kontakti.component';
import { MainscreenComponent } from './componets/mainscreen/mainscreen.component';

const appRoutes: Routes = [
  {path: '', component:MainscreenComponent},
  {path: 'main', component: CarComponent},
  {path: 'about', component: KontaktiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent,
    MainscreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
