import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {AlbumsComponent} from './albums.component'
// import {ContactComponent} from './contact.component'
// import {AlbumComponent} from './album.component'
import {TimeComponent} from './time.component';
import {RootComponent} from './root.component';

@RouteConfig([
    // { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    // { path: '/albums/:id', name: 'Album', component: AlbumComponent },
    // { path: '/contact', name: 'Contact', component: ContactComponent },
    // { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
    { path: '/root', name: 'Root', component: RootComponent, useAsDefault: true },
    { path: '/root/:year/:month', name: "Time", component: TimeComponent },
    { path: '/*any', name: 'Other', redirectTo: ['Root']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app2.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    

}