function C(h,m){for(var i=0;i<m.length;i++){const p=m[i];if(typeof p!="string"&&!Array.isArray(p)){for(const f in p)if(f!=="default"&&!(f in h)){const c=Object.getOwnPropertyDescriptor(p,f);c&&Object.defineProperty(h,f,c.get?c:{enumerable:!0,get:()=>p[f]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L={};/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(h){(function(){var m=function(){this.init()};m.prototype={init:function(){var e=this||i;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window<"u"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||i;if(e=parseFloat(e),t.ctx||A(),typeof e<"u"&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,i.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),o=0;o<r.length;o++){var u=t._howls[n]._soundById(r[o]);u&&u._node&&(u._node.volume=u._volume*e)}return t}return t._volume},mute:function(e){var t=this||i;t.ctx||A(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,i.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var r=t._howls[n]._getSoundIds(),o=0;o<r.length;o++){var u=t._howls[n]._soundById(r[o]);u&&u._node&&(u._node.muted=e?!0:u._muted)}return t},stop:function(){for(var e=this||i,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||i,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close<"u"&&(e.ctx.close(),e.ctx=null,A()),e},codecs:function(e){return(this||i)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||i;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio<"u")try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||i,t=null;try{t=typeof Audio<"u"?new Audio:null}catch{return e}if(!t||typeof t.canPlayType!="function")return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",o=r.match(/OPR\/([0-6].)/g),u=o&&parseInt(o[0].split("/")[1],10)<33,a=r.indexOf("Safari")!==-1&&r.indexOf("Chrome")===-1,_=r.match(/Version\/(.*?) /),d=a&&_&&parseInt(_[1],10)<15;return e._codecs={mp3:!!(!u&&(n||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!d&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!d&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||i;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch{e.noAudio=!0;break}for(var o=0;o<e._howls.length;o++)if(!e._howls[o]._webAudio)for(var u=e._howls[o]._getSoundIds(),a=0;a<u.length;a++){var _=e._howls[o]._soundById(u[a]);_&&_._node&&!_._node._unlocked&&(_._node._unlocked=!0,_._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),typeof d.start>"u"?d.noteOn(0):d.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var l=0;l<e._howls.length;l++)e._howls[l]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||i;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&typeof Promise<"u"&&(t instanceof Promise||typeof t.then=="function")&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||i;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!i.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var r=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(r,r)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!i.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var i=new m,p=function(e){var t=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}t.init(e)};p.prototype={init:function(e){var t=this;return i.ctx||A(),t._autoplay=e.autoplay||!1,t._format=typeof e.format!="string"?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src=typeof e.src!="string"?e.src:[e.src],t._volume=e.volume!==void 0?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=i.usingWebAudio&&!t._html5,typeof i.ctx<"u"&&i.ctx&&i.autoUnlock&&i._unlockAudio(),i._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t._preload!=="none"&&t.load(),t},load:function(){var e=this,t=null;if(i.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var n=0;n<e._src.length;n++){var r,o;if(e._format&&e._format[n])r=e._format[n];else{if(o=e._src[n],typeof o!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}r=/^data:audio\/([^;,]+);/i.exec(o),r||(r=/\.([^.]+)$/.exec(o.split("?",1)[0])),r&&(r=r[1].toLowerCase())}if(r||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),r&&i.codecs(r)){t=e._src[n];break}}if(!t){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=t,e._state="loading",window.location.protocol==="https:"&&t.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new f(e),e._webAudio&&B(e),e},play:function(e,t){var n=this,r=null;if(typeof e=="number")r=e,e=null;else{if(typeof e=="string"&&n._state==="loaded"&&!n._sprite[e])return null;if(typeof e>"u"&&(e="__default",!n._playLock)){for(var o=0,u=0;u<n._sounds.length;u++)n._sounds[u]._paused&&!n._sounds[u]._ended&&(o++,r=n._sounds[u]._id);o===1?e=null:r=null}}var a=r?n._soundById(r):n._inactiveSound();if(!a)return null;if(r&&!e&&(e=a._sprite||"__default"),n._state!=="loaded"){a._sprite=e,a._ended=!1;var _=a._id;return n._queue.push({event:"play",action:function(){n.play(_)}}),_}if(r&&!a._paused)return t||n._loadQueue("play"),a._id;n._webAudio&&i._autoResume();var d=Math.max(0,a._seek>0?a._seek:n._sprite[e][0]/1e3),l=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-d),v=l*1e3/Math.abs(a._rate),y=n._sprite[e][0]/1e3,w=(n._sprite[e][0]+n._sprite[e][1])/1e3;a._sprite=e,a._ended=!1;var T=function(){a._paused=!1,a._seek=d,a._start=y,a._stop=w,a._loop=!!(a._loop||n._sprite[e][2])};if(d>=w){n._ended(a);return}var s=a._node;if(n._webAudio){var x=function(){n._playLock=!1,T(),n._refreshBuffer(a);var g=a._muted||n._muted?0:a._volume;s.gain.setValueAtTime(g,i.ctx.currentTime),a._playStart=i.ctx.currentTime,typeof s.bufferSource.start>"u"?a._loop?s.bufferSource.noteGrainOn(0,d,86400):s.bufferSource.noteGrainOn(0,d,l):a._loop?s.bufferSource.start(0,d,86400):s.bufferSource.start(0,d,l),v!==1/0&&(n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),v)),t||setTimeout(function(){n._emit("play",a._id),n._loadQueue()},0)};i.state==="running"&&i.ctx.state!=="interrupted"?x():(n._playLock=!0,n.once("resume",x),n._clearTimer(a._id))}else{var I=function(){s.currentTime=d,s.muted=a._muted||n._muted||i._muted||s.muted,s.volume=a._volume*i.volume(),s.playbackRate=a._rate;try{var g=s.play();if(g&&typeof Promise<"u"&&(g instanceof Promise||typeof g.then=="function")?(n._playLock=!0,T(),g.then(function(){n._playLock=!1,s._unlocked=!0,t?n._loadQueue():n._emit("play",a._id)}).catch(function(){n._playLock=!1,n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),a._ended=!0,a._paused=!0})):t||(n._playLock=!1,T(),n._emit("play",a._id)),s.playbackRate=a._rate,s.paused){n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||a._loop?n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),v):(n._endTimers[a._id]=function(){n._ended(a),s.removeEventListener("ended",n._endTimers[a._id],!1)},s.addEventListener("ended",n._endTimers[a._id],!1))}catch(O){n._emit("playerror",a._id,O)}};s.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(s.src=n._src,s.load());var F=window&&window.ejecta||!s.readyState&&i._navigator.isCocoonJS;if(s.readyState>=3||F)I();else{n._playLock=!0,n._state="loading";var P=function(){n._state="loaded",I(),s.removeEventListener(i._canPlayEvent,P,!1)};s.addEventListener(i._canPlayEvent,P,!1),n._clearTimer(a._id)}}return a._id},pause:function(e){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),r=0;r<n.length;r++){t._clearTimer(n[r]);var o=t._soundById(n[r]);if(o&&!o._paused&&(o._seek=t.seek(n[r]),o._rateSeek=0,o._paused=!0,t._stopFade(n[r]),o._node))if(t._webAudio){if(!o._node.bufferSource)continue;typeof o._node.bufferSource.stop>"u"?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),t._cleanBuffer(o._node)}else(!isNaN(o._node.duration)||o._node.duration===1/0)&&o._node.pause();arguments[1]||t._emit("pause",o?o._id:null)}return t},stop:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var r=n._getSoundIds(e),o=0;o<r.length;o++){n._clearTimer(r[o]);var u=n._soundById(r[o]);u&&(u._seek=u._start||0,u._rateSeek=0,u._paused=!0,u._ended=!0,n._stopFade(r[o]),u._node&&(n._webAudio?u._node.bufferSource&&(typeof u._node.bufferSource.stop>"u"?u._node.bufferSource.noteOff(0):u._node.bufferSource.stop(0),n._cleanBuffer(u._node)):(!isNaN(u._node.duration)||u._node.duration===1/0)&&(u._node.currentTime=u._start||0,u._node.pause(),u._node.duration===1/0&&n._clearSound(u._node))),t||n._emit("stop",u._id))}return n},mute:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(typeof t>"u")if(typeof e=="boolean")n._muted=e;else return n._muted;for(var r=n._getSoundIds(t),o=0;o<r.length;o++){var u=n._soundById(r[o]);u&&(u._muted=e,u._interval&&n._stopFade(u._id),n._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,i.ctx.currentTime):u._node&&(u._node.muted=i._muted?!0:e),n._emit("mute",u._id))}return n},volume:function(){var e=this,t=arguments,n,r;if(t.length===0)return e._volume;if(t.length===1||t.length===2&&typeof t[1]>"u"){var o=e._getSoundIds(),u=o.indexOf(t[0]);u>=0?r=parseInt(t[0],10):n=parseFloat(t[0])}else t.length>=2&&(n=parseFloat(t[0]),r=parseInt(t[1],10));var a;if(typeof n<"u"&&n>=0&&n<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;typeof r>"u"&&(e._volume=n),r=e._getSoundIds(r);for(var _=0;_<r.length;_++)a=e._soundById(r[_]),a&&(a._volume=n,t[2]||e._stopFade(r[_]),e._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(n,i.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=n*i.volume()),e._emit("volume",a._id))}else return a=r?e._soundById(r):e._sounds[0],a?a._volume:0;return e},fade:function(e,t,n,r){var o=this;if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"fade",action:function(){o.fade(e,t,n,r)}}),o;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),o.volume(e,r);for(var u=o._getSoundIds(r),a=0;a<u.length;a++){var _=o._soundById(u[a]);if(_){if(r||o._stopFade(u[a]),o._webAudio&&!_._muted){var d=i.ctx.currentTime,l=d+n/1e3;_._volume=e,_._node.gain.setValueAtTime(e,d),_._node.gain.linearRampToValueAtTime(t,l)}o._startFadeInterval(_,e,t,n,u[a],typeof r>"u")}}return o},_startFadeInterval:function(e,t,n,r,o,u){var a=this,_=t,d=n-t,l=Math.abs(d/.01),v=Math.max(4,l>0?r/l:r),y=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var w=(Date.now()-y)/r;y=Date.now(),_+=d*w,_=Math.round(_*100)/100,d<0?_=Math.max(n,_):_=Math.min(n,_),a._webAudio?e._volume=_:a.volume(_,e._id,!0),u&&(a._volume=_),(n<t&&_<=n||n>t&&_>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},v)},_stopFade:function(e){var t=this,n=t._soundById(e);return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(i.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,t=arguments,n,r,o;if(t.length===0)return e._loop;if(t.length===1)if(typeof t[0]=="boolean")n=t[0],e._loop=n;else return o=e._soundById(parseInt(t[0],10)),o?o._loop:!1;else t.length===2&&(n=t[0],r=parseInt(t[1],10));for(var u=e._getSoundIds(r),a=0;a<u.length;a++)o=e._soundById(u[a]),o&&(o._loop=n,e._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=n,n&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop,e.playing(u[a])&&(e.pause(u[a],!0),e.play(u[a],!0)))));return e},rate:function(){var e=this,t=arguments,n,r;if(t.length===0)r=e._sounds[0]._id;else if(t.length===1){var o=e._getSoundIds(),u=o.indexOf(t[0]);u>=0?r=parseInt(t[0],10):n=parseFloat(t[0])}else t.length===2&&(n=parseFloat(t[0]),r=parseInt(t[1],10));var a;if(typeof n=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;typeof r>"u"&&(e._rate=n),r=e._getSoundIds(r);for(var _=0;_<r.length;_++)if(a=e._soundById(r[_]),a){e.playing(r[_])&&(a._rateSeek=e.seek(r[_]),a._playStart=e._webAudio?i.ctx.currentTime:a._playStart),a._rate=n,e._webAudio&&a._node&&a._node.bufferSource?a._node.bufferSource.playbackRate.setValueAtTime(n,i.ctx.currentTime):a._node&&(a._node.playbackRate=n);var d=e.seek(r[_]),l=(e._sprite[a._sprite][0]+e._sprite[a._sprite][1])/1e3-d,v=l*1e3/Math.abs(a._rate);(e._endTimers[r[_]]||!a._paused)&&(e._clearTimer(r[_]),e._endTimers[r[_]]=setTimeout(e._ended.bind(e,a),v)),e._emit("rate",a._id)}}else return a=e._soundById(r),a?a._rate:e._rate;return e},seek:function(){var e=this,t=arguments,n,r;if(t.length===0)e._sounds.length&&(r=e._sounds[0]._id);else if(t.length===1){var o=e._getSoundIds(),u=o.indexOf(t[0]);u>=0?r=parseInt(t[0],10):e._sounds.length&&(r=e._sounds[0]._id,n=parseFloat(t[0]))}else t.length===2&&(n=parseFloat(t[0]),r=parseInt(t[1],10));if(typeof r>"u")return 0;if(typeof n=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var a=e._soundById(r);if(a)if(typeof n=="number"&&n>=0){var _=e.playing(r);_&&e.pause(r,!0),a._seek=n,a._ended=!1,e._clearTimer(r),!e._webAudio&&a._node&&!isNaN(a._node.duration)&&(a._node.currentTime=n);var d=function(){_&&e.play(r,!0),e._emit("seek",r)};if(_&&!e._webAudio){var l=function(){e._playLock?setTimeout(l,0):d()};setTimeout(l,0)}else d()}else if(e._webAudio){var v=e.playing(r)?i.ctx.currentTime-a._playStart:0,y=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(y+v*Math.abs(a._rate))}else return a._node.currentTime;return e},playing:function(e){var t=this;if(typeof e=="number"){var n=t._soundById(e);return n?!n._paused:!1}for(var r=0;r<t._sounds.length;r++)if(!t._sounds[r]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,r=t._soundById(e);return r&&(n=t._sprite[r._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(i._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),i._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var r=i._howls.indexOf(e);r>=0&&i._howls.splice(r,1);var o=!0;for(n=0;n<i._howls.length;n++)if(i._howls[n]._src===e._src||e._src.indexOf(i._howls[n]._src)>=0){o=!1;break}return c&&o&&delete c[e._src],i.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,r){var o=this,u=o["_on"+e];return typeof t=="function"&&u.push(r?{id:n,fn:t,once:r}:{id:n,fn:t}),o},off:function(e,t,n){var r=this,o=r["_on"+e],u=0;if(typeof t=="number"&&(n=t,t=null),t||n)for(u=0;u<o.length;u++){var a=n===o[u].id;if(t===o[u].fn&&a||!t&&a){o.splice(u,1);break}}else if(e)r["_on"+e]=[];else{var _=Object.keys(r);for(u=0;u<_.length;u++)_[u].indexOf("_on")===0&&Array.isArray(r[_[u]])&&(r[_[u]]=[])}return r},once:function(e,t,n){var r=this;return r.on(e,t,n,1),r},_emit:function(e,t,n){for(var r=this,o=r["_on"+e],u=o.length-1;u>=0;u--)(!o[u].id||o[u].id===t||e==="load")&&(setTimeout((function(a){a.call(this,t,n)}).bind(r,o[u].fn),0),o[u].once&&r.off(e,o[u].fn,o[u].id));return r._loadQueue(e),r},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,n=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!!(e._loop||t._sprite[n][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=i.ctx.currentTime;var o=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),o)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),i._autoSuspend()),!t._webAudio&&!r&&t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if(typeof t._endTimers[e]!="function")clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new f(e)},_drain:function(){var e=this,t=e._pool,n=0,r=0;if(!(e._sounds.length<t)){for(r=0;r<e._sounds.length;r++)e._sounds[r]._ended&&n++;for(r=e._sounds.length-1;r>=0;r--){if(n<=t)return;e._sounds[r]._ended&&(e._webAudio&&e._sounds[r]._node&&e._sounds[r]._node.disconnect(0),e._sounds.splice(r,1),n--)}}},_getSoundIds:function(e){var t=this;if(typeof e>"u"){for(var n=[],r=0;r<t._sounds.length;r++)n.push(t._sounds[r]._id);return n}else return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=i.ctx.createBufferSource(),e._node.bufferSource.buffer=c[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,i.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,n=i._navigator&&i._navigator.vendor.indexOf("Apple")>=0;if(i._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=i._scratchBuffer}catch{}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(i._navigator&&i._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var f=function(e){this._parent=e,this.init()};f.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++i._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=i._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof i.ctx.createGain>"u"?i.ctx.createGainNode():i.ctx.createGain(),e._node.gain.setValueAtTime(n,i.ctx.currentTime),e._node.paused=!0,e._node.connect(i.masterGain)):i.noAudio||(e._node=i._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(i._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=t._preload===!0?"auto":t._preload,e._node.volume=n*i.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++i._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(e._node.duration*10)/10,Object.keys(t._sprite).length===0&&(t._sprite={__default:[0,t._duration*1e3]}),t._state!=="loaded"&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(i._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(e._node.duration*10)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=t._duration*1e3),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var c={},B=function(e){var t=e._src;if(c[t]){e._duration=c[t].duration,k(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);S(r.buffer,e)}else{var u=new XMLHttpRequest;u.open(e._xhr.method,t,!0),u.withCredentials=e._xhr.withCredentials,u.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(a){u.setRequestHeader(a,e._xhr.headers[a])}),u.onload=function(){var a=(u.status+"")[0];if(a!=="0"&&a!=="2"&&a!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+u.status+".");return}S(u.response,e)},u.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete c[t],e.load())},E(u)}},E=function(e){try{e.send()}catch{e.onerror()}},S=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},r=function(o){o&&t._sounds.length>0?(c[t._src]=o,k(t,o)):n()};typeof Promise<"u"&&i.ctx.decodeAudioData.length===1?i.ctx.decodeAudioData(e).then(r).catch(n):i.ctx.decodeAudioData(e,r,n)},k=function(e,t){t&&!e._duration&&(e._duration=t.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},A=function(){if(i.usingWebAudio){try{typeof AudioContext<"u"?i.ctx=new AudioContext:typeof webkitAudioContext<"u"?i.ctx=new webkitAudioContext:i.usingWebAudio=!1}catch{i.usingWebAudio=!1}i.ctx||(i.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(i._navigator&&i._navigator.platform),t=i._navigator&&i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var r=/safari/.test(i._navigator&&i._navigator.userAgent.toLowerCase());i._navigator&&!r&&(i.usingWebAudio=!1)}i.usingWebAudio&&(i.masterGain=typeof i.ctx.createGain>"u"?i.ctx.createGainNode():i.ctx.createGain(),i.masterGain.gain.setValueAtTime(i._muted?0:i._volume,i.ctx.currentTime),i.masterGain.connect(i.ctx.destination)),i._setup()}};h.Howler=i,h.Howl=p,typeof b<"u"?(b.HowlerGlobal=m,b.Howler=i,b.Howl=p,b.Sound=f):typeof window<"u"&&(window.HowlerGlobal=m,window.Howler=i,window.Howl=p,window.Sound=f)})()})(L);const G=C({__proto__:null},[L]);export{G as h};