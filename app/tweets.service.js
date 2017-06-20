System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            class TweetService {
                getTweets() {
                    return [
                        { tHeading: "Tweet Heading 1", tBody: "Tweet Body 1", tImg: "http://lorempixel.com/100/100/people/?1", tLikes: 5, tUserLike: 0 },
                        { tHeading: "Tweet Heading 2", tBody: "Tweet Body 2", tImg: "http://lorempixel.com/100/100/people/?2", tLikes: 8, tUserLike: 0 },
                        { tHeading: "Tweet Heading 3", tBody: "Tweet Body 3", tImg: "http://lorempixel.com/100/100/people/?3", tLikes: 2, tUserLike: 1 }
                    ];
                }
            }
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map