var _cookies=document.cookie?Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]})):{}
var Cookies={
    set:function(k,v){
        _cookies[k]=v
        this.update()},
    get:function(k){return _cookies[k]},
    remove:function(k){
        delete _cookies[k]
        this.update()},
    update:function(){
        document.cookie.split(";").forEach(function(c){document.cookie=c.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")});
        for(var i=0;i<keys(_cookies).length;i++){document.cookie+=keys(_cookies)[i]+"="+_cookies[keys(_cookies)[i]]+"; "}}}