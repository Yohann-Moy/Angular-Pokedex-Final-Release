import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PokemonModule } from './pokemon/pokemon.module';
import { RegionService } from './pokemon/services/regions.service';
import { MatDialogModule } from '@angular/material';
import { PokemonService } from './pokemon/services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    PokemonModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
  providers: [RegionService, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
