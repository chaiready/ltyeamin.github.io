!function(t){var e=function(e,n,a){function r(){M<11?M++:(M=0,x++),f()}function l(){M>0?M--:(M=11,x--),f()}function s(t){t&&(x=t.getFullYear(),M=t.getMonth(),f())}function o(){b.single?u():p()}function u(){null!=b.url&&""!=b.url&&(null===k&&t.ajax({url:b.url,async:!1,success:function(t){k=t,i(Object.keys(k))}}),null!==k&&c()&&(T.posts=k[x+"-"+(M+1)]))}function p(){null===w&&t.ajax({url:b.root+"list.json",async:!1,success:function(t){i(t)}}),c()&&t.ajax({url:b.root+x+"-"+(M+1)+".json",async:!1,success:function(t){T.posts=t}})}function i(t){w=t.map(function(t){var e=t.split("-");return new Date(Date.UTC(+e[0],+e[1]-1))})}function c(){var t=Date.UTC(x,M);if(null===w||0===w.length)return!1;if(0===T.posts.length&&(null===T.prev&&null!==T.next&&T.next.getTime()>t||null===T.next&&null!==T.prev&&T.prev.getTime()<t))return!1;T.posts=[];for(var e=0;e<w.length;e++){var n=w[e].getTime();if(t===n)return T.prev=0===e?null:w[e-1],T.next=e===w.length-1?null:w[e+1],!0;if(t<n){T.prev=0===e?null:w[e-1],T.next=w[e];break}T.prev=w[e],T.next=null}return!1}function d(t,e){var n={"LMM+":b.months[t.getMonth()],"MM+":t.getMonth()+1};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,"LMM+"===a?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function f(){o();var e=new Date(x,M,1).getDay()-b.weekOffset;e<=0&&(e=6- -1*(e+1));var n=new Date(x,M+1,0).getDate(),a=new Date(x,M,0).getDate()-e+1,u=t("<div/>").addClass("cal-head"),p=t("<div/>"),i=t("<div/>"),c=t("<div/>").addClass("cal-title");i.html(b.headArrows.previous),p.html(b.headArrows.next),curDate=new Date(Date.UTC(x,M)),0===T.posts.length?c.html(d(curDate,b.titleFormat)):(cTitleLink=t("<a/>").attr("href",d(curDate,b.titleLinkFormat)).attr("title",d(curDate,b.postsMonthTip)).html(d(curDate,b.titleFormat)),c.html(cTitleLink)),i.on("click",l),p.on("click",r),u.append(i),u.append(c),u.append(p);for(var f=t("<table/>").addClass("cal"),h=b.weekOffset,g=t("<thead/>"),k=t("<tr/>"),w=0;w<7;w++){h>6&&(h=0);var C=t("<th/>").attr("scope","col").attr("title",b.dayOfWeek[h]);C.html(b.dayOfWeekShort[h]),k.append(C),h++}g.append(k),f.append(g);var L=t("<tfoot/>"),F=t("<tr/>"),O=t("<td/>").attr("colspan",3),j=t("<td/>").html("&nbsp;"),A=t("<td/>").attr("colspan",3);T.prev&&O.html(b.footArrows.previous+b.months[T.prev.getMonth()]).addClass("cal-foot").attr("title",d(T.prev,b.postsMonthTip)),T.next&&A.html(b.months[T.next.getMonth()]+b.footArrows.next).addClass("cal-foot").attr("title",d(T.next,b.postsMonthTip)),O.on("click",function(){s(T.prev)}),A.on("click",function(){s(T.next)}),F.append(O),F.append(j),F.append(A),L.append(F);for(var S=t("<tbody/>"),W=1,E=1,w=0;w<6;w++){for(var R=t("<tr/>"),J=0;J<7;J++){var U=t("<td/>");if(7*w+J<e)U.addClass("cal-gray"),U.html(a++);else if(W<=n){W==m&&y==M&&v==x&&U.addClass("cal-today");for(var Y={num:0,keys:[]},$=0;$<T.posts.length;$++){var N=new Date(Date.parse(T.posts[$].date));N.getDate()==W&&(Y.keys[Y.num++]=$)}if(0!==Y.num){var P=Y.keys[0],Q=t("<a>").attr("href",T.posts[P].link).attr("title",T.posts[P].title).html(W++);U.append(Q)}else U.html(W++)}else U.addClass("cal-gray"),U.html(E++);R.append(U)}S.append(R)}f.append(g),f.append(L),f.append(S),t(D).html(u),t(D).append(f)}var h=new Date,g=h.getDate(),y=h.getMonth(),v=h.getFullYear(),m=g,M=y,x=v,D=a,k=null,w=null,T={posts:[],prev:null,next:null},C="en";!function(t){t&&"undefined"!=typeof calLanguages&&calLanguages[t]&&(C=t)}(e);var b=t.extend({},t.fn.aCalendar.defaults,"undefined"==typeof calLanguages?{}:calLanguages[C],n);return"/"!==b.root[0]&&(b.root="/"+b.root),"/"!==b.root[b.root.length-1]&&(b.root+="/"),f()};t.fn.aCalendar=function(n,a){return this.each(function(){return e(n,a,t(this))})},t.fn.aCalendar.defaults={months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["S","M","T","W","T","F","S"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],postsMonthTip:"Posts published in LMM yyyy",titleFormat:"yyyy LMM",titleLinkFormat:"/archives/yyyy/MM/",headArrows:{previous:'<span class="cal-prev"></span>',next:'<span class="cal-next"></span>'},footArrows:{previous:"« ",next:" »"},weekOffset:0,single:!0,root:"/calendar/",url:"/calendar.json"}}(jQuery);