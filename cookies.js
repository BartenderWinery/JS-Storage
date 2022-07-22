var _cookies=document.cookie?Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]})):{}
var Cookies={
    set:function(k,v){
        document.cookie=k+"="+encodeURIComponent(typeof(v)!="object"?v:JSON.stringify(v))
        return _cookies[k]=v},
    get:function(k){
        return _cookies[k]},
    parse:function(k){
        return JSON.parse(this.get(k))},
    remove:function(k){
        document.cookie=k+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC"
        delete _cookies[k]}}