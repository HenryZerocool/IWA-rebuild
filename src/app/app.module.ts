import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { PostEffect } from "./effects/post.effects";
import { reducer } from "./reducer/post.reducer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { PostsComponent } from "./posts/posts.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    PostsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: reducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PostEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
