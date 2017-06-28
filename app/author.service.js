System.register([], function(exports_1) {
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    return ["Author Name 1", "Author Name 2", "Author Name 3"];
                };
                return AuthorService;
            })();
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=author.service.js.map