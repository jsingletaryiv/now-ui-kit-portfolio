import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './examples/overview/overview.component';

const routes: Routes = [
    { path: 'app', component: OverviewComponent },
    // { path: 'app', component: OverviewComponent },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: '**', component: OverviewComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            // enableTracing: true,
            useHash: true,
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'ignore'
            // scrollOffset: [0, 60], // Needed for the sticky Navbar
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
