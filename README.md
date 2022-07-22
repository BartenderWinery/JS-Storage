## [Cookie.js](https://github.com/BartenderWinery/JS-Storage/blob/main/cookies.js)
```javascript
var _cookies=Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]}))
var Cookies={
    set:function(k,v){return _cookies[k]=v},
    get:function(k){return _cookies[k]},
    remove:function(k){return delete _cookies["CONSENT"]}}
```
An extremely elegant, simple, and fast API for cookies. This is a minimal implication of the widely known [js-cookie](https://github.com/js-cookie/js-cookie) for any of uses.
### How do you use it?
* Internal
> Copy and paste the code from [cookie.js](https://github.com/BartenderWinery/JS-Storage/blob/main/cookies.js) anywhere in your code.
* <script src="-Not uploaded yet-"></script>
> Simply link the online page of the script to your <script> source; can be very insecure as I could change the code to anything i'd like. It's recommended to use internal.
* Imported - Coming in the future
> This method is not yet done, it's just too simple to import by itself 
