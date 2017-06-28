/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', 'angular2/common', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var observable = Rx_1.Observable.fromArray([1, 2, 3]);
                    observable.subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); }, function () { return console.log("completed"); });
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map