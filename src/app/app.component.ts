import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( @Inject(DOCUMENT) private document: any,
                 private renderer: Renderer, private router: Router,
                 private element: ElementRef, public location: Location ) { }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        const navbarLogo = navbar.getElementsByClassName('app-navbar-logo')[0];

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
            this.renderer.listenGlobal('window', 'scroll', (evt: Event) => {
                const number = window.scrollY;
                let _location = this.location.path();

                _location = _location.split('/')[2];

                // console.log(evt + ' Event : ', number);

                if (number > 650 || window.pageYOffset > 650) {
                    navbar.classList.remove('navbar-transparent');
                    // navbarLogo.classList.remove('app-navbar-fade-out');
                    navbarLogo.classList.add('app-navbar-fade-in');

                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                    navbarLogo.classList.remove('app-navbar-fade-in');
                    // navbarLogo.classList.add('app-navbar-fade-out');
                }
            });
        });
    }
}
