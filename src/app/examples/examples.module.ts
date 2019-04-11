import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { ComponentsModule } from 'app/components/components.module';
import { ExamplesComponent } from './examples.component';
import { IconsModule } from 'app/shared/icons/icons.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';

// TODO: Cleanup module imports / declarations //
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        IconsModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        ComponentsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        OverviewComponent
    ]
})
export class ExamplesModule { }
