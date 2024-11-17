import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './comp/user-list/user-list.component';
import { UserDetailComponent } from './comp/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './comp/post-list/post-list.component';
import { PostDetailComponent } from './comp/post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
