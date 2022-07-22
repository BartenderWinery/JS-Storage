var _cookies=Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]}))
var Cookies={
    set:function(k,v){return _cookies[k]=v},
    get:function(k){return _cookies[k]},
    remove:function(k){return delete _cookies["CONSENT"]}}