import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncreaseComponent } from './number-view/increase/increase.component';
import { numberReducer } from './ngrx/reducer/numberreducer';
import { ShowComponent } from './number-view/show/show.component';
import { PostComponent } from './post-view/post/post.component';
import { PostviewComponent } from './post-view/postview/postview.component';
import { postReducer } from './ngrx/reducer/postreducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IncreaseComponent,
    ShowComponent,
    PostComponent,
    PostviewComponent
  ],
  imports: [
    StoreModule.forRoot({ numberSharedState: numberReducer, postSharedState: postReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
