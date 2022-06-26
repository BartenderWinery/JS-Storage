var appdata={
    set:function(n){
        if(!document.cookie)document.cookie=n+"={}"
        else document.cookie=document.cookie+"; "+String(n)},
    encode:function(n,d,v){
        if(!document.cookie.includes(n+"="))document.cookie=n+"={"+d.replaceAll("]","").replaceAll("[","").split(",").join(":{},")+":{}}"
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        var m=t[p].replaceAll(n+"=","")
        console.log(JSON.parse(m)[d[0]][d[1]]) //TODO: add layers of complexity, for now you have to manually set it
        return JSON.parse(m.replace(JSON.parse(m)[d[0]][d[1]],v))},
    get:function(n){
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        return p==-1?undefined:JSON.parse(t[p].replaceAll(n+"=",""))}}