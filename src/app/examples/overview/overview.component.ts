import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
// TODO: Update `rellax` package after all updates have been made //
import * as Rellax from 'rellax';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    // focus;
    // focus1;
    // focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    // Environment
    // serverUrl = ENVIRONMENT.serverUrl;
    // parallaxPath = ENVIRONMENT.assets.parallax;
    // Overview Images
    // imagesPath = this.serverUrl + this.parallaxPath + '/overview/';

    // Page Header
    pageTitle = 'Welcome';
    pageSubTitle = 'Application / UI Developer';
    // pageSubTitle = 'Since MCMXCVIII';

    // Section 1
    section1Title = 'Forging Concepts into Creation //';
    section1Text = '';
    missionTitle = 'Mission Statement //';
    missionText = '';

    // Section 2

    // Section 3

    // Section 4

    constructor( private renderer: Renderer, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        const rellaxHeader = new Rellax('.rellax-header');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}