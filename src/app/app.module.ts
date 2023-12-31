import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';
import { AppMaterialModule } from './app-material.module';
import { APP_CONFIG, Config } from './config/app.config';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateCardComponent,
    CreateCandidateComponent,
    CandidateFormComponent,
    EditCandidateComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule, // <-- insertado
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: Config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
