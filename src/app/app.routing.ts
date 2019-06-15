import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { OverviewComponent } from './examples/overview/overview.component';

const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app',                      component: OverviewComponent },
    // { path: 'nucleoicons',           component: NucleoiconsComponent },
    // { path: 'examples/landing',      component: LandingComponent },
    // { path: 'examples/login',        component: LoginComponent },
    // { path: 'examples/profile',      component: ProfileComponent },
    // { path: 'examples/overview',     component: OverviewComponent },
    // { path: 'examples/components',   component: ComponentsComponent },
    { path: '**',                       component: OverviewComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            // scrollPositionRestoration: 'enabled',
            // anchorScrolling: 'enabled',
            // onSameUrlNavigation: 'reload',
            // scrollOffset: [0, 60], // Needed for the sticky Navbar
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
