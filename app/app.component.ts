/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})
export class AppComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){

        this.form = fb.group({
            search:[]
        });

        
        var observable = Observable.fromArray([1,2,3])

        observable.subscribe(
            x => console.log(x),
            err => console.log(err),
            () => console.log("completed")
        );
        
        // var secondDataStream = Observable.of([1,2,3]).delay(5000);

        // secondDataStream
        //     .timeout(1000)
        //     .subscribe(x => console.log(x), err => console.log(err))

        // var remoteDateStream = Observable.of([4,5,6]);

        // remoteDateStream
        //     .catch(err=>{
        //         var localDataStream = Observable.of([1,2,3]);
        //         return localDataStream
        //     })
        //     .subscribe(x=>console.log(x))
        
        // var counter = 0;

        // var ajaxCall = Observable.of('url')
        //     .flatMap(()=>{
        //         if(++counter <2){
        //             return Observable.throw(new Error("request failed..."))
        //         }

        //         return Observable.of([1,2,3])
        //     })

        //     ajaxCall.retry(3).subscribe(x=>console.log(x),
        //     error => console.log(error))

        // var userStream = Observable.of({
        //     userId: 1, userName: "chetan"
        // }).delay(2000);

        // var tweetsStream = Observable.of([1,2,3]).delay(1500);

        // Observable.forkJoin(userStream, tweetsStream)
        // .map(joined => new Object({user: joined[0], tweets: joined[1]}))
        // .subscribe(result=>console.log(result));

        

        // var observable = Observable.interval(1000);
        // observable
        // .map(x=>{
        //     console.log("calling the server to get the latest news");
        //     return [1,2,3];
        // })
        // .subscribe(news=>console.log(news));
        
        // var observable = Observable.range(1,5);
        // console.log('range')
        // observable.subscribe(x=>console.log(x))

        // var observable = Observable.fromArray([1,2,3]);
        // console.log('fromArray')
        // observable.subscribe(x=>console.log(x))

        // var observable = Observable.of([1,2,3]);
        // console.log('of an array...')
        // observable.subscribe(x=>console.log(x))


        // var startDates = [];
        // var startDate = new Date();

        // for (var day = -2; day<=2;day++){
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate()+day
        //     )
        //     startDates.push(date);
        // }

        // Observable
        // .fromArray(startDates)
        // .map(date => {
        //     console.log("Getting deals for date" + date);
        //     return [1,2,3];
        // })
        // .subscribe(x=>console.log("x is"+x))





        // var search = this.form.find('search');
        // search
        // .valueChanges
        // .debounceTime(400)
        // .map(str=>(<string>str).replace(' ','-'))
        // .subscribe(x=>console.log(x));




        // var keyups = Observable.fromEvent($("#search"), "keyup")
        //     .map(e => e.target.value)
        //     .filter(text => text.length >= 3)
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     .flatMap(searchTerm => {
        //         var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
        //         var promise = $.getJSON(url);
        //         return Observable.fromPromise(promise);
        //     })

        // var subscription = keyups.subscribe(data => console.log(data));
        // subscription.unsubscribe();
        

        // var debounced = _.debounce(function(text){
        //     
        // }, 400)

        // $("#search").keyup(function(e){
        //     var text = e.target.value;

        //     if(text.length < 3){
        //         return;
        //     }

        //     debounced(text)
        // })
    }
}