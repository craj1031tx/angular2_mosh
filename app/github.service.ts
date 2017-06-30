import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private _rootUrl = "https://api.github.com/users/";

    constructor(private _http:Http){}

    getUser(username){
        return this._http.get(this._rootUrl+username)
            .map(res => res.json());
    }

    getFollowers(username){
        return this._http.get(this._rootUrl+username+"/followers")
            .map(res => res.json());
    }
}