import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SocialsComponent } from './shared/socials/socials.component';
import { DrawerDirective } from './shared/directives/drawer.directive';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { PopupComponent } from './shared/popup/popup.component';
import { HighlightService } from './shared/services/highlight.service';

import { ParticleEffectButtonModule } from "angular-particle-effect-button";
import { NgxPaginationModule } from 'ngx-pagination';

export const routes: Routes = [
  { path: '', 
    component: HomeComponent, 
  },
  { path: 'about', 
    component: AboutComponent
  },
  { path: 'contact', 
    component: ContactComponent
  },
  { path: 'portfolio', 
    component: PortfolioComponent
  },
  { path: 'blog', 
    component: BlogComponent
  },
  { path: 'blog/:post/:id', 
    component: PostComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    SocialsComponent,
    DrawerDirective,
    BlogComponent,
    PostComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ParticleEffectButtonModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'disabled',
    }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    NgxPaginationModule
  ],
  exports: [ RouterModule ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    HighlightService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
