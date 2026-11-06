goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31160 = (function (f,blockable,meta31161){
this.f = f;
this.blockable = blockable;
this.meta31161 = meta31161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31162,meta31161__$1){
var self__ = this;
var _31162__$1 = this;
return (new cljs.core.async.t_cljs$core$async31160(self__.f,self__.blockable,meta31161__$1));
}));

(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31162){
var self__ = this;
var _31162__$1 = this;
return self__.meta31161;
}));

(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31161","meta31161",-1272599477,null)], null);
}));

(cljs.core.async.t_cljs$core$async31160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31160");

(cljs.core.async.t_cljs$core$async31160.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31160.
 */
cljs.core.async.__GT_t_cljs$core$async31160 = (function cljs$core$async$__GT_t_cljs$core$async31160(f,blockable,meta31161){
return (new cljs.core.async.t_cljs$core$async31160(f,blockable,meta31161));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31159 = arguments.length;
switch (G__31159) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31160(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31173 = arguments.length;
switch (G__31173) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31192 = arguments.length;
switch (G__31192) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31206 = arguments.length;
switch (G__31206) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34324 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34324) : fn1.call(null,val_34324));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34324) : fn1.call(null,val_34324));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31239 = arguments.length;
switch (G__31239) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___34337 = n;
var x_34338 = (0);
while(true){
if((x_34338 < n__5762__auto___34337)){
(a[x_34338] = x_34338);

var G__34339 = (x_34338 + (1));
x_34338 = G__34339;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31261 = (function (flag,meta31262){
this.flag = flag;
this.meta31262 = meta31262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31263,meta31262__$1){
var self__ = this;
var _31263__$1 = this;
return (new cljs.core.async.t_cljs$core$async31261(self__.flag,meta31262__$1));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31263){
var self__ = this;
var _31263__$1 = this;
return self__.meta31262;
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31262","meta31262",2038700718,null)], null);
}));

(cljs.core.async.t_cljs$core$async31261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31261");

(cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31261.
 */
cljs.core.async.__GT_t_cljs$core$async31261 = (function cljs$core$async$__GT_t_cljs$core$async31261(flag,meta31262){
return (new cljs.core.async.t_cljs$core$async31261(flag,meta31262));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31261(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31285 = (function (flag,cb,meta31286){
this.flag = flag;
this.cb = cb;
this.meta31286 = meta31286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31287,meta31286__$1){
var self__ = this;
var _31287__$1 = this;
return (new cljs.core.async.t_cljs$core$async31285(self__.flag,self__.cb,meta31286__$1));
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31287){
var self__ = this;
var _31287__$1 = this;
return self__.meta31286;
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31286","meta31286",2006528352,null)], null);
}));

(cljs.core.async.t_cljs$core$async31285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31285");

(cljs.core.async.t_cljs$core$async31285.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31285.
 */
cljs.core.async.__GT_t_cljs$core$async31285 = (function cljs$core$async$__GT_t_cljs$core$async31285(flag,cb,meta31286){
return (new cljs.core.async.t_cljs$core$async31285(flag,cb,meta31286));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31285(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34347)){
if((!(((port_34347.cljs$core$IFn$_invoke$arity$1 ? port_34347.cljs$core$IFn$_invoke$arity$1((1)) : port_34347.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__34348 = (i + (1));
i = G__34348;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31312_SHARP_){
var G__31334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31312_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31334) : fret.call(null,G__31334));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31315_SHARP_){
var G__31340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31315_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31340) : fret.call(null,G__31340));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34355 = (i + (1));
i = G__34355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34359 = arguments.length;
var i__5898__auto___34360 = (0);
while(true){
if((i__5898__auto___34360 < len__5897__auto___34359)){
args__5903__auto__.push((arguments[i__5898__auto___34360]));

var G__34361 = (i__5898__auto___34360 + (1));
i__5898__auto___34360 = G__34361;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31356){
var map__31357 = p__31356;
var map__31357__$1 = cljs.core.__destructure_map(map__31357);
var opts = map__31357__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31349){
var G__31350 = cljs.core.first(seq31349);
var seq31349__$1 = cljs.core.next(seq31349);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31350,seq31349__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31361 = arguments.length;
switch (G__31361) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31030__auto___34363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31436){
var state_val_31439 = (state_31436[(1)]);
if((state_val_31439 === (7))){
var inst_31424 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31455_34371 = state_31436__$1;
(statearr_31455_34371[(2)] = inst_31424);

(statearr_31455_34371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (1))){
var state_31436__$1 = state_31436;
var statearr_31467_34376 = state_31436__$1;
(statearr_31467_34376[(2)] = null);

(statearr_31467_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (4))){
var inst_31396 = (state_31436[(7)]);
var inst_31396__$1 = (state_31436[(2)]);
var inst_31405 = (inst_31396__$1 == null);
var state_31436__$1 = (function (){var statearr_31483 = state_31436;
(statearr_31483[(7)] = inst_31396__$1);

return statearr_31483;
})();
if(cljs.core.truth_(inst_31405)){
var statearr_31486_34383 = state_31436__$1;
(statearr_31486_34383[(1)] = (5));

} else {
var statearr_31491_34384 = state_31436__$1;
(statearr_31491_34384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (13))){
var state_31436__$1 = state_31436;
var statearr_31501_34385 = state_31436__$1;
(statearr_31501_34385[(2)] = null);

(statearr_31501_34385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (6))){
var inst_31396 = (state_31436[(7)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31436__$1,(11),to,inst_31396);
} else {
if((state_val_31439 === (3))){
var inst_31427 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31436__$1,inst_31427);
} else {
if((state_val_31439 === (12))){
var state_31436__$1 = state_31436;
var statearr_31515_34387 = state_31436__$1;
(statearr_31515_34387[(2)] = null);

(statearr_31515_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (2))){
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31436__$1,(4),from);
} else {
if((state_val_31439 === (11))){
var inst_31416 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31416)){
var statearr_31518_34394 = state_31436__$1;
(statearr_31518_34394[(1)] = (12));

} else {
var statearr_31519_34395 = state_31436__$1;
(statearr_31519_34395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (9))){
var state_31436__$1 = state_31436;
var statearr_31524_34396 = state_31436__$1;
(statearr_31524_34396[(2)] = null);

(statearr_31524_34396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (5))){
var state_31436__$1 = state_31436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31533_34397 = state_31436__$1;
(statearr_31533_34397[(1)] = (8));

} else {
var statearr_31534_34399 = state_31436__$1;
(statearr_31534_34399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (14))){
var inst_31422 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31536_34400 = state_31436__$1;
(statearr_31536_34400[(2)] = inst_31422);

(statearr_31536_34400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (10))){
var inst_31413 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31539_34401 = state_31436__$1;
(statearr_31539_34401[(2)] = inst_31413);

(statearr_31539_34401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (8))){
var inst_31409 = cljs.core.async.close_BANG_(to);
var state_31436__$1 = state_31436;
var statearr_31546_34402 = state_31436__$1;
(statearr_31546_34402[(2)] = inst_31409);

(statearr_31546_34402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_31548 = [null,null,null,null,null,null,null,null];
(statearr_31548[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_31548[(1)] = (1));

return statearr_31548;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_31436){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31436);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31553){var ex__30633__auto__ = e31553;
var statearr_31554_34417 = state_31436;
(statearr_31554_34417[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31436[(4)]))){
var statearr_31555_34418 = state_31436;
(statearr_31555_34418[(1)] = cljs.core.first((state_31436[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34420 = state_31436;
state_31436 = G__34420;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_31563 = f__31031__auto__();
(statearr_31563[(6)] = c__31030__auto___34363);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31572){
var vec__31574 = p__31572;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574,(1),null);
var job = vec__31574;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31030__auto___34426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31585){
var state_val_31586 = (state_31585[(1)]);
if((state_val_31586 === (1))){
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31585__$1,(2),res,v);
} else {
if((state_val_31586 === (2))){
var inst_31582 = (state_31585[(2)]);
var inst_31583 = cljs.core.async.close_BANG_(res);
var state_31585__$1 = (function (){var statearr_31593 = state_31585;
(statearr_31593[(7)] = inst_31582);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31585__$1,inst_31583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1 = (function (state_31585){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31585);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31596){var ex__30633__auto__ = e31596;
var statearr_31597_34438 = state_31585;
(statearr_31597_34438[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31585[(4)]))){
var statearr_31598_34439 = state_31585;
(statearr_31598_34439[(1)] = cljs.core.first((state_31585[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34442 = state_31585;
state_31585 = G__34442;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = function(state_31585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1.call(this,state_31585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_31599 = f__31031__auto__();
(statearr_31599[(6)] = c__31030__auto___34426);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31600){
var vec__31602 = p__31600;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31602,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31602,(1),null);
var job = vec__31602;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___34447 = n;
var __34448 = (0);
while(true){
if((__34448 < n__5762__auto___34447)){
var G__31618_34449 = type;
var G__31618_34450__$1 = (((G__31618_34449 instanceof cljs.core.Keyword))?G__31618_34449.fqn:null);
switch (G__31618_34450__$1) {
case "compute":
var c__31030__auto___34454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34448,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = ((function (__34448,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function (state_31648){
var state_val_31649 = (state_31648[(1)]);
if((state_val_31649 === (1))){
var state_31648__$1 = state_31648;
var statearr_31650_34458 = state_31648__$1;
(statearr_31650_34458[(2)] = null);

(statearr_31650_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (2))){
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31648__$1,(4),jobs);
} else {
if((state_val_31649 === (3))){
var inst_31646 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31648__$1,inst_31646);
} else {
if((state_val_31649 === (4))){
var inst_31636 = (state_31648[(2)]);
var inst_31637 = process__$1(inst_31636);
var state_31648__$1 = state_31648;
if(cljs.core.truth_(inst_31637)){
var statearr_31655_34461 = state_31648__$1;
(statearr_31655_34461[(1)] = (5));

} else {
var statearr_31656_34462 = state_31648__$1;
(statearr_31656_34462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (5))){
var state_31648__$1 = state_31648;
var statearr_31659_34464 = state_31648__$1;
(statearr_31659_34464[(2)] = null);

(statearr_31659_34464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (6))){
var state_31648__$1 = state_31648;
var statearr_31660_34477 = state_31648__$1;
(statearr_31660_34477[(2)] = null);

(statearr_31660_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (7))){
var inst_31643 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31662_34479 = state_31648__$1;
(statearr_31662_34479[(2)] = inst_31643);

(statearr_31662_34479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34448,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
;
return ((function (__34448,switch__30629__auto__,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1 = (function (state_31648){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31648);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31667){var ex__30633__auto__ = e31667;
var statearr_31668_34483 = state_31648;
(statearr_31668_34483[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31648[(4)]))){
var statearr_31670_34485 = state_31648;
(statearr_31670_34485[(1)] = cljs.core.first((state_31648[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34486 = state_31648;
state_31648 = G__34486;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = function(state_31648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1.call(this,state_31648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__;
})()
;})(__34448,switch__30629__auto__,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
})();
var state__31032__auto__ = (function (){var statearr_31672 = f__31031__auto__();
(statearr_31672[(6)] = c__31030__auto___34454);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
});})(__34448,c__31030__auto___34454,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
);


break;
case "async":
var c__31030__auto___34487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34448,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = ((function (__34448,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function (state_31690){
var state_val_31691 = (state_31690[(1)]);
if((state_val_31691 === (1))){
var state_31690__$1 = state_31690;
var statearr_31694_34488 = state_31690__$1;
(statearr_31694_34488[(2)] = null);

(statearr_31694_34488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (2))){
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31690__$1,(4),jobs);
} else {
if((state_val_31691 === (3))){
var inst_31688 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31690__$1,inst_31688);
} else {
if((state_val_31691 === (4))){
var inst_31677 = (state_31690[(2)]);
var inst_31679 = async(inst_31677);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31679)){
var statearr_31699_34493 = state_31690__$1;
(statearr_31699_34493[(1)] = (5));

} else {
var statearr_31700_34494 = state_31690__$1;
(statearr_31700_34494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (5))){
var state_31690__$1 = state_31690;
var statearr_31705_34495 = state_31690__$1;
(statearr_31705_34495[(2)] = null);

(statearr_31705_34495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (6))){
var state_31690__$1 = state_31690;
var statearr_31706_34500 = state_31690__$1;
(statearr_31706_34500[(2)] = null);

(statearr_31706_34500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (7))){
var inst_31686 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31709_34513 = state_31690__$1;
(statearr_31709_34513[(2)] = inst_31686);

(statearr_31709_34513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34448,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
;
return ((function (__34448,switch__30629__auto__,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_31715 = [null,null,null,null,null,null,null];
(statearr_31715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__);

(statearr_31715[(1)] = (1));

return statearr_31715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1 = (function (state_31690){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31690);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31716){var ex__30633__auto__ = e31716;
var statearr_31720_34515 = state_31690;
(statearr_31720_34515[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31690[(4)]))){
var statearr_31721_34519 = state_31690;
(statearr_31721_34519[(1)] = cljs.core.first((state_31690[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_31690;
state_31690 = G__34520;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = function(state_31690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1.call(this,state_31690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__;
})()
;})(__34448,switch__30629__auto__,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
})();
var state__31032__auto__ = (function (){var statearr_31723 = f__31031__auto__();
(statearr_31723[(6)] = c__31030__auto___34487);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
});})(__34448,c__31030__auto___34487,G__31618_34449,G__31618_34450__$1,n__5762__auto___34447,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31618_34450__$1))));

}

var G__34523 = (__34448 + (1));
__34448 = G__34523;
continue;
} else {
}
break;
}

var c__31030__auto___34524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31761){
var state_val_31762 = (state_31761[(1)]);
if((state_val_31762 === (7))){
var inst_31757 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31770_34528 = state_31761__$1;
(statearr_31770_34528[(2)] = inst_31757);

(statearr_31770_34528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (1))){
var state_31761__$1 = state_31761;
var statearr_31771_34532 = state_31761__$1;
(statearr_31771_34532[(2)] = null);

(statearr_31771_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (4))){
var inst_31732 = (state_31761[(7)]);
var inst_31732__$1 = (state_31761[(2)]);
var inst_31733 = (inst_31732__$1 == null);
var state_31761__$1 = (function (){var statearr_31776 = state_31761;
(statearr_31776[(7)] = inst_31732__$1);

return statearr_31776;
})();
if(cljs.core.truth_(inst_31733)){
var statearr_31777_34537 = state_31761__$1;
(statearr_31777_34537[(1)] = (5));

} else {
var statearr_31778_34539 = state_31761__$1;
(statearr_31778_34539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (6))){
var inst_31732 = (state_31761[(7)]);
var inst_31741 = (state_31761[(8)]);
var inst_31741__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31749 = [inst_31732,inst_31741__$1];
var inst_31750 = (new cljs.core.PersistentVector(null,2,(5),inst_31742,inst_31749,null));
var state_31761__$1 = (function (){var statearr_31779 = state_31761;
(statearr_31779[(8)] = inst_31741__$1);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31761__$1,(8),jobs,inst_31750);
} else {
if((state_val_31762 === (3))){
var inst_31759 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31761__$1,inst_31759);
} else {
if((state_val_31762 === (2))){
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31761__$1,(4),from);
} else {
if((state_val_31762 === (9))){
var inst_31754 = (state_31761[(2)]);
var state_31761__$1 = (function (){var statearr_31787 = state_31761;
(statearr_31787[(9)] = inst_31754);

return statearr_31787;
})();
var statearr_31788_34550 = state_31761__$1;
(statearr_31788_34550[(2)] = null);

(statearr_31788_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (5))){
var inst_31739 = cljs.core.async.close_BANG_(jobs);
var state_31761__$1 = state_31761;
var statearr_31789_34553 = state_31761__$1;
(statearr_31789_34553[(2)] = inst_31739);

(statearr_31789_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (8))){
var inst_31741 = (state_31761[(8)]);
var inst_31752 = (state_31761[(2)]);
var state_31761__$1 = (function (){var statearr_31790 = state_31761;
(statearr_31790[(10)] = inst_31752);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31761__$1,(9),results,inst_31741);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1 = (function (state_31761){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31761);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31799){var ex__30633__auto__ = e31799;
var statearr_31800_34615 = state_31761;
(statearr_31800_34615[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31761[(4)]))){
var statearr_31801_34621 = state_31761;
(statearr_31801_34621[(1)] = cljs.core.first((state_31761[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34623 = state_31761;
state_31761 = G__34623;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = function(state_31761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1.call(this,state_31761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_31804 = f__31031__auto__();
(statearr_31804[(6)] = c__31030__auto___34524);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


var c__31030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (7))){
var inst_31844 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31851_34625 = state_31848__$1;
(statearr_31851_34625[(2)] = inst_31844);

(statearr_31851_34625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (20))){
var state_31848__$1 = state_31848;
var statearr_31852_34626 = state_31848__$1;
(statearr_31852_34626[(2)] = null);

(statearr_31852_34626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31856_34632 = state_31848__$1;
(statearr_31856_34632[(2)] = null);

(statearr_31856_34632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (4))){
var inst_31807 = (state_31848[(7)]);
var inst_31807__$1 = (state_31848[(2)]);
var inst_31808 = (inst_31807__$1 == null);
var state_31848__$1 = (function (){var statearr_31857 = state_31848;
(statearr_31857[(7)] = inst_31807__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_31858_34637 = state_31848__$1;
(statearr_31858_34637[(1)] = (5));

} else {
var statearr_31859_34639 = state_31848__$1;
(statearr_31859_34639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (15))){
var inst_31826 = (state_31848[(8)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31848__$1,(18),to,inst_31826);
} else {
if((state_val_31849 === (21))){
var inst_31839 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31860_34645 = state_31848__$1;
(statearr_31860_34645[(2)] = inst_31839);

(statearr_31860_34645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (13))){
var inst_31841 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31864 = state_31848;
(statearr_31864[(9)] = inst_31841);

return statearr_31864;
})();
var statearr_31865_34655 = state_31848__$1;
(statearr_31865_34655[(2)] = null);

(statearr_31865_34655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var inst_31807 = (state_31848[(7)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(11),inst_31807);
} else {
if((state_val_31849 === (17))){
var inst_31834 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31834)){
var statearr_31866_34656 = state_31848__$1;
(statearr_31866_34656[(1)] = (19));

} else {
var statearr_31867_34657 = state_31848__$1;
(statearr_31867_34657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (3))){
var inst_31846 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31848__$1,inst_31846);
} else {
if((state_val_31849 === (12))){
var inst_31823 = (state_31848[(10)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(14),inst_31823);
} else {
if((state_val_31849 === (2))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(4),results);
} else {
if((state_val_31849 === (19))){
var state_31848__$1 = state_31848;
var statearr_31868_34660 = state_31848__$1;
(statearr_31868_34660[(2)] = null);

(statearr_31868_34660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (11))){
var inst_31823 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31869 = state_31848;
(statearr_31869[(10)] = inst_31823);

return statearr_31869;
})();
var statearr_31870_34666 = state_31848__$1;
(statearr_31870_34666[(2)] = null);

(statearr_31870_34666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (9))){
var state_31848__$1 = state_31848;
var statearr_31871_34669 = state_31848__$1;
(statearr_31871_34669[(2)] = null);

(statearr_31871_34669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var state_31848__$1 = state_31848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31873_34673 = state_31848__$1;
(statearr_31873_34673[(1)] = (8));

} else {
var statearr_31874_34678 = state_31848__$1;
(statearr_31874_34678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (14))){
var inst_31826 = (state_31848[(8)]);
var inst_31828 = (state_31848[(11)]);
var inst_31826__$1 = (state_31848[(2)]);
var inst_31827 = (inst_31826__$1 == null);
var inst_31828__$1 = cljs.core.not(inst_31827);
var state_31848__$1 = (function (){var statearr_31875 = state_31848;
(statearr_31875[(8)] = inst_31826__$1);

(statearr_31875[(11)] = inst_31828__$1);

return statearr_31875;
})();
if(inst_31828__$1){
var statearr_31876_34687 = state_31848__$1;
(statearr_31876_34687[(1)] = (15));

} else {
var statearr_31877_34688 = state_31848__$1;
(statearr_31877_34688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (16))){
var inst_31828 = (state_31848[(11)]);
var state_31848__$1 = state_31848;
var statearr_31878_34692 = state_31848__$1;
(statearr_31878_34692[(2)] = inst_31828);

(statearr_31878_34692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (10))){
var inst_31816 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31879_34693 = state_31848__$1;
(statearr_31879_34693[(2)] = inst_31816);

(statearr_31879_34693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (18))){
var inst_31831 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31880_34697 = state_31848__$1;
(statearr_31880_34697[(2)] = inst_31831);

(statearr_31880_34697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (8))){
var inst_31813 = cljs.core.async.close_BANG_(to);
var state_31848__$1 = state_31848;
var statearr_31881_34699 = state_31848__$1;
(statearr_31881_34699[(2)] = inst_31813);

(statearr_31881_34699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_31882 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__);

(statearr_31882[(1)] = (1));

return statearr_31882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1 = (function (state_31848){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31848);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31883){var ex__30633__auto__ = e31883;
var statearr_31884_34711 = state_31848;
(statearr_31884_34711[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31848[(4)]))){
var statearr_31885_34716 = state_31848;
(statearr_31885_34716[(1)] = cljs.core.first((state_31848[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34717 = state_31848;
state_31848 = G__34717;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_31886 = f__31031__auto__();
(statearr_31886[(6)] = c__31030__auto__);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

return c__31030__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31888 = arguments.length;
switch (G__31888) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31892 = arguments.length;
switch (G__31892) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31894 = arguments.length;
switch (G__31894) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31030__auto___34778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31923){
var state_val_31924 = (state_31923[(1)]);
if((state_val_31924 === (7))){
var inst_31919 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
var statearr_31926_34779 = state_31923__$1;
(statearr_31926_34779[(2)] = inst_31919);

(statearr_31926_34779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (1))){
var state_31923__$1 = state_31923;
var statearr_31928_34780 = state_31923__$1;
(statearr_31928_34780[(2)] = null);

(statearr_31928_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (4))){
var inst_31900 = (state_31923[(7)]);
var inst_31900__$1 = (state_31923[(2)]);
var inst_31901 = (inst_31900__$1 == null);
var state_31923__$1 = (function (){var statearr_31929 = state_31923;
(statearr_31929[(7)] = inst_31900__$1);

return statearr_31929;
})();
if(cljs.core.truth_(inst_31901)){
var statearr_31930_34781 = state_31923__$1;
(statearr_31930_34781[(1)] = (5));

} else {
var statearr_31931_34783 = state_31923__$1;
(statearr_31931_34783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (13))){
var state_31923__$1 = state_31923;
var statearr_31932_34788 = state_31923__$1;
(statearr_31932_34788[(2)] = null);

(statearr_31932_34788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (6))){
var inst_31900 = (state_31923[(7)]);
var inst_31906 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31900) : p.call(null,inst_31900));
var state_31923__$1 = state_31923;
if(cljs.core.truth_(inst_31906)){
var statearr_31936_34791 = state_31923__$1;
(statearr_31936_34791[(1)] = (9));

} else {
var statearr_31938_34792 = state_31923__$1;
(statearr_31938_34792[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (3))){
var inst_31921 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31923__$1,inst_31921);
} else {
if((state_val_31924 === (12))){
var state_31923__$1 = state_31923;
var statearr_31940_34803 = state_31923__$1;
(statearr_31940_34803[(2)] = null);

(statearr_31940_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (2))){
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31923__$1,(4),ch);
} else {
if((state_val_31924 === (11))){
var inst_31900 = (state_31923[(7)]);
var inst_31910 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31923__$1,(8),inst_31910,inst_31900);
} else {
if((state_val_31924 === (9))){
var state_31923__$1 = state_31923;
var statearr_31941_34809 = state_31923__$1;
(statearr_31941_34809[(2)] = tc);

(statearr_31941_34809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (5))){
var inst_31903 = cljs.core.async.close_BANG_(tc);
var inst_31904 = cljs.core.async.close_BANG_(fc);
var state_31923__$1 = (function (){var statearr_31945 = state_31923;
(statearr_31945[(8)] = inst_31903);

return statearr_31945;
})();
var statearr_31947_34810 = state_31923__$1;
(statearr_31947_34810[(2)] = inst_31904);

(statearr_31947_34810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (14))){
var inst_31917 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
var statearr_31948_34811 = state_31923__$1;
(statearr_31948_34811[(2)] = inst_31917);

(statearr_31948_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (10))){
var state_31923__$1 = state_31923;
var statearr_31949_34812 = state_31923__$1;
(statearr_31949_34812[(2)] = fc);

(statearr_31949_34812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31924 === (8))){
var inst_31912 = (state_31923[(2)]);
var state_31923__$1 = state_31923;
if(cljs.core.truth_(inst_31912)){
var statearr_31950_34820 = state_31923__$1;
(statearr_31950_34820[(1)] = (12));

} else {
var statearr_31951_34821 = state_31923__$1;
(statearr_31951_34821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_31923){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31923);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e31954){var ex__30633__auto__ = e31954;
var statearr_31955_34825 = state_31923;
(statearr_31955_34825[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31923[(4)]))){
var statearr_31959_34826 = state_31923;
(statearr_31959_34826[(1)] = cljs.core.first((state_31923[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34830 = state_31923;
state_31923 = G__34830;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_31923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_31923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_31962 = f__31031__auto__();
(statearr_31962[(6)] = c__31030__auto___34778);

return statearr_31962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31998_34836 = state_31991__$1;
(statearr_31998_34836[(2)] = inst_31987);

(statearr_31998_34836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var inst_31964 = init;
var inst_31965 = inst_31964;
var state_31991__$1 = (function (){var statearr_31999 = state_31991;
(statearr_31999[(7)] = inst_31965);

return statearr_31999;
})();
var statearr_32000_34837 = state_31991__$1;
(statearr_32000_34837[(2)] = null);

(statearr_32000_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31968 = (state_31991[(8)]);
var inst_31968__$1 = (state_31991[(2)]);
var inst_31969 = (inst_31968__$1 == null);
var state_31991__$1 = (function (){var statearr_32001 = state_31991;
(statearr_32001[(8)] = inst_31968__$1);

return statearr_32001;
})();
if(cljs.core.truth_(inst_31969)){
var statearr_32002_34839 = state_31991__$1;
(statearr_32002_34839[(1)] = (5));

} else {
var statearr_32003_34844 = state_31991__$1;
(statearr_32003_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (6))){
var inst_31965 = (state_31991[(7)]);
var inst_31968 = (state_31991[(8)]);
var inst_31972 = (state_31991[(9)]);
var inst_31972__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31965,inst_31968) : f.call(null,inst_31965,inst_31968));
var inst_31973 = cljs.core.reduced_QMARK_(inst_31972__$1);
var state_31991__$1 = (function (){var statearr_32005 = state_31991;
(statearr_32005[(9)] = inst_31972__$1);

return statearr_32005;
})();
if(inst_31973){
var statearr_32006_34846 = state_31991__$1;
(statearr_32006_34846[(1)] = (8));

} else {
var statearr_32007_34847 = state_31991__$1;
(statearr_32007_34847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (2))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(4),ch);
} else {
if((state_val_31992 === (9))){
var inst_31972 = (state_31991[(9)]);
var inst_31965 = inst_31972;
var state_31991__$1 = (function (){var statearr_32013 = state_31991;
(statearr_32013[(7)] = inst_31965);

return statearr_32013;
})();
var statearr_32014_34850 = state_31991__$1;
(statearr_32014_34850[(2)] = null);

(statearr_32014_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var inst_31965 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
var statearr_32015_34851 = state_31991__$1;
(statearr_32015_34851[(2)] = inst_31965);

(statearr_32015_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31985 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32016_34852 = state_31991__$1;
(statearr_32016_34852[(2)] = inst_31985);

(statearr_32016_34852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31972 = (state_31991[(9)]);
var inst_31980 = cljs.core.deref(inst_31972);
var state_31991__$1 = state_31991;
var statearr_32019_34853 = state_31991__$1;
(statearr_32019_34853[(2)] = inst_31980);

(statearr_32019_34853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30630__auto____0 = (function (){
var statearr_32022 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32022[(0)] = cljs$core$async$reduce_$_state_machine__30630__auto__);

(statearr_32022[(1)] = (1));

return statearr_32022;
});
var cljs$core$async$reduce_$_state_machine__30630__auto____1 = (function (state_31991){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32023){var ex__30633__auto__ = e32023;
var statearr_32024_34854 = state_31991;
(statearr_32024_34854[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_31991[(4)]))){
var statearr_32026_34855 = state_31991;
(statearr_32026_34855[(1)] = cljs.core.first((state_31991[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34856 = state_31991;
state_31991 = G__34856;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30630__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30630__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30630__auto____0;
cljs$core$async$reduce_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30630__auto____1;
return cljs$core$async$reduce_$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32027 = f__31031__auto__();
(statearr_32027[(6)] = c__31030__auto__);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

return c__31030__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (1))){
var inst_32028 = cljs.core.async.reduce(f__$1,init,ch);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32033__$1,(2),inst_32028);
} else {
if((state_val_32034 === (2))){
var inst_32030 = (state_32033[(2)]);
var inst_32031 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32030) : f__$1.call(null,inst_32030));
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32033__$1,inst_32031);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30630__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30630__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null];
(statearr_32036[(0)] = cljs$core$async$transduce_$_state_machine__30630__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var cljs$core$async$transduce_$_state_machine__30630__auto____1 = (function (state_32033){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_32033);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32037){var ex__30633__auto__ = e32037;
var statearr_32038_34861 = state_32033;
(statearr_32038_34861[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_32033[(4)]))){
var statearr_32039_34866 = state_32033;
(statearr_32039_34866[(1)] = cljs.core.first((state_32033[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34867 = state_32033;
state_32033 = G__34867;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30630__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30630__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30630__auto____0;
cljs$core$async$transduce_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30630__auto____1;
return cljs$core$async$transduce_$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32042 = f__31031__auto__();
(statearr_32042[(6)] = c__31030__auto__);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

return c__31030__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32046 = arguments.length;
switch (G__32046) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32055 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32083_34873 = state_32076__$1;
(statearr_32083_34873[(2)] = inst_32055);

(statearr_32083_34873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var inst_32048 = cljs.core.seq(coll);
var inst_32049 = inst_32048;
var state_32076__$1 = (function (){var statearr_32084 = state_32076;
(statearr_32084[(7)] = inst_32049);

return statearr_32084;
})();
var statearr_32085_34880 = state_32076__$1;
(statearr_32085_34880[(2)] = null);

(statearr_32085_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var inst_32049 = (state_32076[(7)]);
var inst_32053 = cljs.core.first(inst_32049);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32076__$1,(7),ch,inst_32053);
} else {
if((state_val_32077 === (13))){
var inst_32069 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32087_34882 = state_32076__$1;
(statearr_32087_34882[(2)] = inst_32069);

(statearr_32087_34882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (6))){
var inst_32058 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32058)){
var statearr_32090_34883 = state_32076__$1;
(statearr_32090_34883[(1)] = (8));

} else {
var statearr_32091_34884 = state_32076__$1;
(statearr_32091_34884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32074 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (12))){
var state_32076__$1 = state_32076;
var statearr_32093_34885 = state_32076__$1;
(statearr_32093_34885[(2)] = null);

(statearr_32093_34885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (2))){
var inst_32049 = (state_32076[(7)]);
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32049)){
var statearr_32096_34886 = state_32076__$1;
(statearr_32096_34886[(1)] = (4));

} else {
var statearr_32097_34887 = state_32076__$1;
(statearr_32097_34887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (11))){
var inst_32066 = cljs.core.async.close_BANG_(ch);
var state_32076__$1 = state_32076;
var statearr_32098_34889 = state_32076__$1;
(statearr_32098_34889[(2)] = inst_32066);

(statearr_32098_34889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var state_32076__$1 = state_32076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32100_34890 = state_32076__$1;
(statearr_32100_34890[(1)] = (11));

} else {
var statearr_32101_34892 = state_32076__$1;
(statearr_32101_34892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (5))){
var inst_32049 = (state_32076[(7)]);
var state_32076__$1 = state_32076;
var statearr_32104_34893 = state_32076__$1;
(statearr_32104_34893[(2)] = inst_32049);

(statearr_32104_34893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_32071 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32107_34894 = state_32076__$1;
(statearr_32107_34894[(2)] = inst_32071);

(statearr_32107_34894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_32049 = (state_32076[(7)]);
var inst_32060 = cljs.core.next(inst_32049);
var inst_32049__$1 = inst_32060;
var state_32076__$1 = (function (){var statearr_32108 = state_32076;
(statearr_32108[(7)] = inst_32049__$1);

return statearr_32108;
})();
var statearr_32110_34895 = state_32076__$1;
(statearr_32110_34895[(2)] = null);

(statearr_32110_34895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_32113 = [null,null,null,null,null,null,null,null];
(statearr_32113[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_32113[(1)] = (1));

return statearr_32113;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_32076){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_32076);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32114){var ex__30633__auto__ = e32114;
var statearr_32115_34896 = state_32076;
(statearr_32115_34896[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_32076[(4)]))){
var statearr_32117_34897 = state_32076;
(statearr_32117_34897[(1)] = cljs.core.first((state_32076[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34898 = state_32076;
state_32076 = G__34898;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32118 = f__31031__auto__();
(statearr_32118[(6)] = c__31030__auto__);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

return c__31030__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34906 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34906(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34915 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34915(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34927 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34927(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34934 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34934(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32140 = (function (ch,cs,meta32141){
this.ch = ch;
this.cs = cs;
this.meta32141 = meta32141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32142,meta32141__$1){
var self__ = this;
var _32142__$1 = this;
return (new cljs.core.async.t_cljs$core$async32140(self__.ch,self__.cs,meta32141__$1));
}));

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32142){
var self__ = this;
var _32142__$1 = this;
return self__.meta32141;
}));

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32141","meta32141",1451339605,null)], null);
}));

(cljs.core.async.t_cljs$core$async32140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32140");

(cljs.core.async.t_cljs$core$async32140.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32140.
 */
cljs.core.async.__GT_t_cljs$core$async32140 = (function cljs$core$async$__GT_t_cljs$core$async32140(ch,cs,meta32141){
return (new cljs.core.async.t_cljs$core$async32140(ch,cs,meta32141));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32140(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31030__auto___34942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_32295){
var state_val_32296 = (state_32295[(1)]);
if((state_val_32296 === (7))){
var inst_32287 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32302_34943 = state_32295__$1;
(statearr_32302_34943[(2)] = inst_32287);

(statearr_32302_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (20))){
var inst_32186 = (state_32295[(7)]);
var inst_32198 = cljs.core.first(inst_32186);
var inst_32199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32198,(0),null);
var inst_32200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32198,(1),null);
var state_32295__$1 = (function (){var statearr_32303 = state_32295;
(statearr_32303[(8)] = inst_32199);

return statearr_32303;
})();
if(cljs.core.truth_(inst_32200)){
var statearr_32304_34944 = state_32295__$1;
(statearr_32304_34944[(1)] = (22));

} else {
var statearr_32305_34945 = state_32295__$1;
(statearr_32305_34945[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (27))){
var inst_32228 = (state_32295[(9)]);
var inst_32230 = (state_32295[(10)]);
var inst_32236 = (state_32295[(11)]);
var inst_32152 = (state_32295[(12)]);
var inst_32236__$1 = cljs.core._nth(inst_32228,inst_32230);
var inst_32239 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32236__$1,inst_32152,done);
var state_32295__$1 = (function (){var statearr_32306 = state_32295;
(statearr_32306[(11)] = inst_32236__$1);

return statearr_32306;
})();
if(cljs.core.truth_(inst_32239)){
var statearr_32307_34947 = state_32295__$1;
(statearr_32307_34947[(1)] = (30));

} else {
var statearr_32308_34951 = state_32295__$1;
(statearr_32308_34951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (1))){
var state_32295__$1 = state_32295;
var statearr_32310_34952 = state_32295__$1;
(statearr_32310_34952[(2)] = null);

(statearr_32310_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (24))){
var inst_32186 = (state_32295[(7)]);
var inst_32205 = (state_32295[(2)]);
var inst_32206 = cljs.core.next(inst_32186);
var inst_32163 = inst_32206;
var inst_32164 = null;
var inst_32165 = (0);
var inst_32166 = (0);
var state_32295__$1 = (function (){var statearr_32313 = state_32295;
(statearr_32313[(13)] = inst_32205);

(statearr_32313[(14)] = inst_32163);

(statearr_32313[(15)] = inst_32164);

(statearr_32313[(16)] = inst_32165);

(statearr_32313[(17)] = inst_32166);

return statearr_32313;
})();
var statearr_32314_34955 = state_32295__$1;
(statearr_32314_34955[(2)] = null);

(statearr_32314_34955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (39))){
var state_32295__$1 = state_32295;
var statearr_32319_34959 = state_32295__$1;
(statearr_32319_34959[(2)] = null);

(statearr_32319_34959[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (4))){
var inst_32152 = (state_32295[(12)]);
var inst_32152__$1 = (state_32295[(2)]);
var inst_32153 = (inst_32152__$1 == null);
var state_32295__$1 = (function (){var statearr_32321 = state_32295;
(statearr_32321[(12)] = inst_32152__$1);

return statearr_32321;
})();
if(cljs.core.truth_(inst_32153)){
var statearr_32322_34963 = state_32295__$1;
(statearr_32322_34963[(1)] = (5));

} else {
var statearr_32323_34966 = state_32295__$1;
(statearr_32323_34966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (15))){
var inst_32166 = (state_32295[(17)]);
var inst_32163 = (state_32295[(14)]);
var inst_32164 = (state_32295[(15)]);
var inst_32165 = (state_32295[(16)]);
var inst_32181 = (state_32295[(2)]);
var inst_32183 = (inst_32166 + (1));
var tmp32315 = inst_32164;
var tmp32316 = inst_32163;
var tmp32317 = inst_32165;
var inst_32163__$1 = tmp32316;
var inst_32164__$1 = tmp32315;
var inst_32165__$1 = tmp32317;
var inst_32166__$1 = inst_32183;
var state_32295__$1 = (function (){var statearr_32324 = state_32295;
(statearr_32324[(18)] = inst_32181);

(statearr_32324[(14)] = inst_32163__$1);

(statearr_32324[(15)] = inst_32164__$1);

(statearr_32324[(16)] = inst_32165__$1);

(statearr_32324[(17)] = inst_32166__$1);

return statearr_32324;
})();
var statearr_32326_34974 = state_32295__$1;
(statearr_32326_34974[(2)] = null);

(statearr_32326_34974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (21))){
var inst_32209 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32330_34975 = state_32295__$1;
(statearr_32330_34975[(2)] = inst_32209);

(statearr_32330_34975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (31))){
var inst_32236 = (state_32295[(11)]);
var inst_32242 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32236);
var state_32295__$1 = state_32295;
var statearr_32334_34976 = state_32295__$1;
(statearr_32334_34976[(2)] = inst_32242);

(statearr_32334_34976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (32))){
var inst_32230 = (state_32295[(10)]);
var inst_32227 = (state_32295[(19)]);
var inst_32228 = (state_32295[(9)]);
var inst_32229 = (state_32295[(20)]);
var inst_32244 = (state_32295[(2)]);
var inst_32247 = (inst_32230 + (1));
var tmp32327 = inst_32229;
var tmp32328 = inst_32228;
var tmp32329 = inst_32227;
var inst_32227__$1 = tmp32329;
var inst_32228__$1 = tmp32328;
var inst_32229__$1 = tmp32327;
var inst_32230__$1 = inst_32247;
var state_32295__$1 = (function (){var statearr_32335 = state_32295;
(statearr_32335[(21)] = inst_32244);

(statearr_32335[(19)] = inst_32227__$1);

(statearr_32335[(9)] = inst_32228__$1);

(statearr_32335[(20)] = inst_32229__$1);

(statearr_32335[(10)] = inst_32230__$1);

return statearr_32335;
})();
var statearr_32336_34978 = state_32295__$1;
(statearr_32336_34978[(2)] = null);

(statearr_32336_34978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (40))){
var inst_32260 = (state_32295[(22)]);
var inst_32264 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32260);
var state_32295__$1 = state_32295;
var statearr_32338_34983 = state_32295__$1;
(statearr_32338_34983[(2)] = inst_32264);

(statearr_32338_34983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (33))){
var inst_32250 = (state_32295[(23)]);
var inst_32252 = cljs.core.chunked_seq_QMARK_(inst_32250);
var state_32295__$1 = state_32295;
if(inst_32252){
var statearr_32339_34990 = state_32295__$1;
(statearr_32339_34990[(1)] = (36));

} else {
var statearr_32340_34991 = state_32295__$1;
(statearr_32340_34991[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (13))){
var inst_32175 = (state_32295[(24)]);
var inst_32178 = cljs.core.async.close_BANG_(inst_32175);
var state_32295__$1 = state_32295;
var statearr_32341_34998 = state_32295__$1;
(statearr_32341_34998[(2)] = inst_32178);

(statearr_32341_34998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (22))){
var inst_32199 = (state_32295[(8)]);
var inst_32202 = cljs.core.async.close_BANG_(inst_32199);
var state_32295__$1 = state_32295;
var statearr_32348_35005 = state_32295__$1;
(statearr_32348_35005[(2)] = inst_32202);

(statearr_32348_35005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (36))){
var inst_32250 = (state_32295[(23)]);
var inst_32254 = cljs.core.chunk_first(inst_32250);
var inst_32255 = cljs.core.chunk_rest(inst_32250);
var inst_32256 = cljs.core.count(inst_32254);
var inst_32227 = inst_32255;
var inst_32228 = inst_32254;
var inst_32229 = inst_32256;
var inst_32230 = (0);
var state_32295__$1 = (function (){var statearr_32350 = state_32295;
(statearr_32350[(19)] = inst_32227);

(statearr_32350[(9)] = inst_32228);

(statearr_32350[(20)] = inst_32229);

(statearr_32350[(10)] = inst_32230);

return statearr_32350;
})();
var statearr_32351_35028 = state_32295__$1;
(statearr_32351_35028[(2)] = null);

(statearr_32351_35028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (41))){
var inst_32250 = (state_32295[(23)]);
var inst_32266 = (state_32295[(2)]);
var inst_32267 = cljs.core.next(inst_32250);
var inst_32227 = inst_32267;
var inst_32228 = null;
var inst_32229 = (0);
var inst_32230 = (0);
var state_32295__$1 = (function (){var statearr_32352 = state_32295;
(statearr_32352[(25)] = inst_32266);

(statearr_32352[(19)] = inst_32227);

(statearr_32352[(9)] = inst_32228);

(statearr_32352[(20)] = inst_32229);

(statearr_32352[(10)] = inst_32230);

return statearr_32352;
})();
var statearr_32353_35034 = state_32295__$1;
(statearr_32353_35034[(2)] = null);

(statearr_32353_35034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (43))){
var state_32295__$1 = state_32295;
var statearr_32355_35038 = state_32295__$1;
(statearr_32355_35038[(2)] = null);

(statearr_32355_35038[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (29))){
var inst_32275 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32357_35039 = state_32295__$1;
(statearr_32357_35039[(2)] = inst_32275);

(statearr_32357_35039[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (44))){
var inst_32284 = (state_32295[(2)]);
var state_32295__$1 = (function (){var statearr_32358 = state_32295;
(statearr_32358[(26)] = inst_32284);

return statearr_32358;
})();
var statearr_32359_35040 = state_32295__$1;
(statearr_32359_35040[(2)] = null);

(statearr_32359_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (6))){
var inst_32219 = (state_32295[(27)]);
var inst_32218 = cljs.core.deref(cs);
var inst_32219__$1 = cljs.core.keys(inst_32218);
var inst_32220 = cljs.core.count(inst_32219__$1);
var inst_32221 = cljs.core.reset_BANG_(dctr,inst_32220);
var inst_32226 = cljs.core.seq(inst_32219__$1);
var inst_32227 = inst_32226;
var inst_32228 = null;
var inst_32229 = (0);
var inst_32230 = (0);
var state_32295__$1 = (function (){var statearr_32361 = state_32295;
(statearr_32361[(27)] = inst_32219__$1);

(statearr_32361[(28)] = inst_32221);

(statearr_32361[(19)] = inst_32227);

(statearr_32361[(9)] = inst_32228);

(statearr_32361[(20)] = inst_32229);

(statearr_32361[(10)] = inst_32230);

return statearr_32361;
})();
var statearr_32362_35069 = state_32295__$1;
(statearr_32362_35069[(2)] = null);

(statearr_32362_35069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (28))){
var inst_32227 = (state_32295[(19)]);
var inst_32250 = (state_32295[(23)]);
var inst_32250__$1 = cljs.core.seq(inst_32227);
var state_32295__$1 = (function (){var statearr_32364 = state_32295;
(statearr_32364[(23)] = inst_32250__$1);

return statearr_32364;
})();
if(inst_32250__$1){
var statearr_32365_35073 = state_32295__$1;
(statearr_32365_35073[(1)] = (33));

} else {
var statearr_32366_35074 = state_32295__$1;
(statearr_32366_35074[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (25))){
var inst_32230 = (state_32295[(10)]);
var inst_32229 = (state_32295[(20)]);
var inst_32232 = (inst_32230 < inst_32229);
var inst_32233 = inst_32232;
var state_32295__$1 = state_32295;
if(cljs.core.truth_(inst_32233)){
var statearr_32367_35078 = state_32295__$1;
(statearr_32367_35078[(1)] = (27));

} else {
var statearr_32368_35079 = state_32295__$1;
(statearr_32368_35079[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (34))){
var state_32295__$1 = state_32295;
var statearr_32369_35082 = state_32295__$1;
(statearr_32369_35082[(2)] = null);

(statearr_32369_35082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (17))){
var state_32295__$1 = state_32295;
var statearr_32370_35087 = state_32295__$1;
(statearr_32370_35087[(2)] = null);

(statearr_32370_35087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (3))){
var inst_32289 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32295__$1,inst_32289);
} else {
if((state_val_32296 === (12))){
var inst_32214 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32373_35089 = state_32295__$1;
(statearr_32373_35089[(2)] = inst_32214);

(statearr_32373_35089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (2))){
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32295__$1,(4),ch);
} else {
if((state_val_32296 === (23))){
var state_32295__$1 = state_32295;
var statearr_32374_35094 = state_32295__$1;
(statearr_32374_35094[(2)] = null);

(statearr_32374_35094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (35))){
var inst_32273 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32375_35096 = state_32295__$1;
(statearr_32375_35096[(2)] = inst_32273);

(statearr_32375_35096[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (19))){
var inst_32186 = (state_32295[(7)]);
var inst_32190 = cljs.core.chunk_first(inst_32186);
var inst_32191 = cljs.core.chunk_rest(inst_32186);
var inst_32192 = cljs.core.count(inst_32190);
var inst_32163 = inst_32191;
var inst_32164 = inst_32190;
var inst_32165 = inst_32192;
var inst_32166 = (0);
var state_32295__$1 = (function (){var statearr_32376 = state_32295;
(statearr_32376[(14)] = inst_32163);

(statearr_32376[(15)] = inst_32164);

(statearr_32376[(16)] = inst_32165);

(statearr_32376[(17)] = inst_32166);

return statearr_32376;
})();
var statearr_32378_35099 = state_32295__$1;
(statearr_32378_35099[(2)] = null);

(statearr_32378_35099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (11))){
var inst_32163 = (state_32295[(14)]);
var inst_32186 = (state_32295[(7)]);
var inst_32186__$1 = cljs.core.seq(inst_32163);
var state_32295__$1 = (function (){var statearr_32383 = state_32295;
(statearr_32383[(7)] = inst_32186__$1);

return statearr_32383;
})();
if(inst_32186__$1){
var statearr_32384_35107 = state_32295__$1;
(statearr_32384_35107[(1)] = (16));

} else {
var statearr_32385_35108 = state_32295__$1;
(statearr_32385_35108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (9))){
var inst_32216 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32386_35118 = state_32295__$1;
(statearr_32386_35118[(2)] = inst_32216);

(statearr_32386_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (5))){
var inst_32160 = cljs.core.deref(cs);
var inst_32161 = cljs.core.seq(inst_32160);
var inst_32163 = inst_32161;
var inst_32164 = null;
var inst_32165 = (0);
var inst_32166 = (0);
var state_32295__$1 = (function (){var statearr_32387 = state_32295;
(statearr_32387[(14)] = inst_32163);

(statearr_32387[(15)] = inst_32164);

(statearr_32387[(16)] = inst_32165);

(statearr_32387[(17)] = inst_32166);

return statearr_32387;
})();
var statearr_32388_35122 = state_32295__$1;
(statearr_32388_35122[(2)] = null);

(statearr_32388_35122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (14))){
var state_32295__$1 = state_32295;
var statearr_32389_35129 = state_32295__$1;
(statearr_32389_35129[(2)] = null);

(statearr_32389_35129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (45))){
var inst_32281 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32391_35131 = state_32295__$1;
(statearr_32391_35131[(2)] = inst_32281);

(statearr_32391_35131[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (26))){
var inst_32219 = (state_32295[(27)]);
var inst_32277 = (state_32295[(2)]);
var inst_32278 = cljs.core.seq(inst_32219);
var state_32295__$1 = (function (){var statearr_32392 = state_32295;
(statearr_32392[(29)] = inst_32277);

return statearr_32392;
})();
if(inst_32278){
var statearr_32393_35142 = state_32295__$1;
(statearr_32393_35142[(1)] = (42));

} else {
var statearr_32394_35145 = state_32295__$1;
(statearr_32394_35145[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (16))){
var inst_32186 = (state_32295[(7)]);
var inst_32188 = cljs.core.chunked_seq_QMARK_(inst_32186);
var state_32295__$1 = state_32295;
if(inst_32188){
var statearr_32395_35147 = state_32295__$1;
(statearr_32395_35147[(1)] = (19));

} else {
var statearr_32396_35150 = state_32295__$1;
(statearr_32396_35150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (38))){
var inst_32270 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32397_35152 = state_32295__$1;
(statearr_32397_35152[(2)] = inst_32270);

(statearr_32397_35152[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (30))){
var state_32295__$1 = state_32295;
var statearr_32400_35153 = state_32295__$1;
(statearr_32400_35153[(2)] = null);

(statearr_32400_35153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (10))){
var inst_32164 = (state_32295[(15)]);
var inst_32166 = (state_32295[(17)]);
var inst_32174 = cljs.core._nth(inst_32164,inst_32166);
var inst_32175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32174,(0),null);
var inst_32176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32174,(1),null);
var state_32295__$1 = (function (){var statearr_32402 = state_32295;
(statearr_32402[(24)] = inst_32175);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32176)){
var statearr_32403_35163 = state_32295__$1;
(statearr_32403_35163[(1)] = (13));

} else {
var statearr_32404_35167 = state_32295__$1;
(statearr_32404_35167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (18))){
var inst_32212 = (state_32295[(2)]);
var state_32295__$1 = state_32295;
var statearr_32405_35168 = state_32295__$1;
(statearr_32405_35168[(2)] = inst_32212);

(statearr_32405_35168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (42))){
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32295__$1,(45),dchan);
} else {
if((state_val_32296 === (37))){
var inst_32250 = (state_32295[(23)]);
var inst_32260 = (state_32295[(22)]);
var inst_32152 = (state_32295[(12)]);
var inst_32260__$1 = cljs.core.first(inst_32250);
var inst_32261 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32260__$1,inst_32152,done);
var state_32295__$1 = (function (){var statearr_32406 = state_32295;
(statearr_32406[(22)] = inst_32260__$1);

return statearr_32406;
})();
if(cljs.core.truth_(inst_32261)){
var statearr_32409_35169 = state_32295__$1;
(statearr_32409_35169[(1)] = (39));

} else {
var statearr_32410_35170 = state_32295__$1;
(statearr_32410_35170[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32296 === (8))){
var inst_32166 = (state_32295[(17)]);
var inst_32165 = (state_32295[(16)]);
var inst_32168 = (inst_32166 < inst_32165);
var inst_32169 = inst_32168;
var state_32295__$1 = state_32295;
if(cljs.core.truth_(inst_32169)){
var statearr_32412_35172 = state_32295__$1;
(statearr_32412_35172[(1)] = (10));

} else {
var statearr_32413_35173 = state_32295__$1;
(statearr_32413_35173[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30630__auto__ = null;
var cljs$core$async$mult_$_state_machine__30630__auto____0 = (function (){
var statearr_32414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32414[(0)] = cljs$core$async$mult_$_state_machine__30630__auto__);

(statearr_32414[(1)] = (1));

return statearr_32414;
});
var cljs$core$async$mult_$_state_machine__30630__auto____1 = (function (state_32295){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_32295);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32415){var ex__30633__auto__ = e32415;
var statearr_32416_35179 = state_32295;
(statearr_32416_35179[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_32295[(4)]))){
var statearr_32417_35180 = state_32295;
(statearr_32417_35180[(1)] = cljs.core.first((state_32295[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35182 = state_32295;
state_32295 = G__35182;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30630__auto__ = function(state_32295){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30630__auto____1.call(this,state_32295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30630__auto____0;
cljs$core$async$mult_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30630__auto____1;
return cljs$core$async$mult_$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32419 = f__31031__auto__();
(statearr_32419[(6)] = c__31030__auto___34942);

return statearr_32419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32421 = arguments.length;
switch (G__32421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35204 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35204(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35210 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35210(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35214 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35214(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35221 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35221(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35230 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35230(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___35239 = arguments.length;
var i__5898__auto___35241 = (0);
while(true){
if((i__5898__auto___35241 < len__5897__auto___35239)){
args__5903__auto__.push((arguments[i__5898__auto___35241]));

var G__35242 = (i__5898__auto___35241 + (1));
i__5898__auto___35241 = G__35242;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32440){
var map__32441 = p__32440;
var map__32441__$1 = cljs.core.__destructure_map(map__32441);
var opts = map__32441__$1;
var statearr_32442_35247 = state;
(statearr_32442_35247[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32443_35267 = state;
(statearr_32443_35267[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_32445_35272 = state;
(statearr_32445_35272[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32435){
var G__32436 = cljs.core.first(seq32435);
var seq32435__$1 = cljs.core.next(seq32435);
var G__32437 = cljs.core.first(seq32435__$1);
var seq32435__$2 = cljs.core.next(seq32435__$1);
var G__32438 = cljs.core.first(seq32435__$2);
var seq32435__$3 = cljs.core.next(seq32435__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32436,G__32437,G__32438,seq32435__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32457 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32458){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32458 = meta32458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32459,meta32458__$1){
var self__ = this;
var _32459__$1 = this;
return (new cljs.core.async.t_cljs$core$async32457(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32458__$1));
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32459){
var self__ = this;
var _32459__$1 = this;
return self__.meta32458;
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null)], null);
}));

(cljs.core.async.t_cljs$core$async32457.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32457");

(cljs.core.async.t_cljs$core$async32457.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32457");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32457.
 */
cljs.core.async.__GT_t_cljs$core$async32457 = (function cljs$core$async$__GT_t_cljs$core$async32457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32458){
return (new cljs.core.async.t_cljs$core$async32457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32458));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31030__auto___35431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_32543){
var state_val_32544 = (state_32543[(1)]);
if((state_val_32544 === (7))){
var inst_32498 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32498)){
var statearr_32546_35447 = state_32543__$1;
(statearr_32546_35447[(1)] = (8));

} else {
var statearr_32547_35448 = state_32543__$1;
(statearr_32547_35448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (20))){
var inst_32491 = (state_32543[(7)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32543__$1,(23),out,inst_32491);
} else {
if((state_val_32544 === (1))){
var inst_32472 = calc_state();
var inst_32474 = cljs.core.__destructure_map(inst_32472);
var inst_32475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32474,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32474,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32474,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32478 = inst_32472;
var state_32543__$1 = (function (){var statearr_32549 = state_32543;
(statearr_32549[(8)] = inst_32475);

(statearr_32549[(9)] = inst_32476);

(statearr_32549[(10)] = inst_32477);

(statearr_32549[(11)] = inst_32478);

return statearr_32549;
})();
var statearr_32550_35459 = state_32543__$1;
(statearr_32550_35459[(2)] = null);

(statearr_32550_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (24))){
var inst_32481 = (state_32543[(12)]);
var inst_32478 = inst_32481;
var state_32543__$1 = (function (){var statearr_32552 = state_32543;
(statearr_32552[(11)] = inst_32478);

return statearr_32552;
})();
var statearr_32553_35466 = state_32543__$1;
(statearr_32553_35466[(2)] = null);

(statearr_32553_35466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (4))){
var inst_32491 = (state_32543[(7)]);
var inst_32493 = (state_32543[(13)]);
var inst_32490 = (state_32543[(2)]);
var inst_32491__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32490,(0),null);
var inst_32492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32490,(1),null);
var inst_32493__$1 = (inst_32491__$1 == null);
var state_32543__$1 = (function (){var statearr_32558 = state_32543;
(statearr_32558[(7)] = inst_32491__$1);

(statearr_32558[(14)] = inst_32492);

(statearr_32558[(13)] = inst_32493__$1);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32493__$1)){
var statearr_32559_35472 = state_32543__$1;
(statearr_32559_35472[(1)] = (5));

} else {
var statearr_32560_35473 = state_32543__$1;
(statearr_32560_35473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (15))){
var inst_32482 = (state_32543[(15)]);
var inst_32517 = (state_32543[(16)]);
var inst_32517__$1 = cljs.core.empty_QMARK_(inst_32482);
var state_32543__$1 = (function (){var statearr_32562 = state_32543;
(statearr_32562[(16)] = inst_32517__$1);

return statearr_32562;
})();
if(inst_32517__$1){
var statearr_32563_35474 = state_32543__$1;
(statearr_32563_35474[(1)] = (17));

} else {
var statearr_32564_35475 = state_32543__$1;
(statearr_32564_35475[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (21))){
var inst_32481 = (state_32543[(12)]);
var inst_32478 = inst_32481;
var state_32543__$1 = (function (){var statearr_32565 = state_32543;
(statearr_32565[(11)] = inst_32478);

return statearr_32565;
})();
var statearr_32566_35477 = state_32543__$1;
(statearr_32566_35477[(2)] = null);

(statearr_32566_35477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (13))){
var inst_32510 = (state_32543[(2)]);
var inst_32511 = calc_state();
var inst_32478 = inst_32511;
var state_32543__$1 = (function (){var statearr_32567 = state_32543;
(statearr_32567[(17)] = inst_32510);

(statearr_32567[(11)] = inst_32478);

return statearr_32567;
})();
var statearr_32568_35478 = state_32543__$1;
(statearr_32568_35478[(2)] = null);

(statearr_32568_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (22))){
var inst_32537 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32570_35479 = state_32543__$1;
(statearr_32570_35479[(2)] = inst_32537);

(statearr_32570_35479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (6))){
var inst_32492 = (state_32543[(14)]);
var inst_32496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32492,change);
var state_32543__$1 = state_32543;
var statearr_32571_35480 = state_32543__$1;
(statearr_32571_35480[(2)] = inst_32496);

(statearr_32571_35480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (25))){
var state_32543__$1 = state_32543;
var statearr_32576_35481 = state_32543__$1;
(statearr_32576_35481[(2)] = null);

(statearr_32576_35481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (17))){
var inst_32483 = (state_32543[(18)]);
var inst_32492 = (state_32543[(14)]);
var inst_32519 = (inst_32483.cljs$core$IFn$_invoke$arity$1 ? inst_32483.cljs$core$IFn$_invoke$arity$1(inst_32492) : inst_32483.call(null,inst_32492));
var inst_32520 = cljs.core.not(inst_32519);
var state_32543__$1 = state_32543;
var statearr_32580_35486 = state_32543__$1;
(statearr_32580_35486[(2)] = inst_32520);

(statearr_32580_35486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (3))){
var inst_32541 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32543__$1,inst_32541);
} else {
if((state_val_32544 === (12))){
var state_32543__$1 = state_32543;
var statearr_32582_35491 = state_32543__$1;
(statearr_32582_35491[(2)] = null);

(statearr_32582_35491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (2))){
var inst_32478 = (state_32543[(11)]);
var inst_32481 = (state_32543[(12)]);
var inst_32481__$1 = cljs.core.__destructure_map(inst_32478);
var inst_32482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32481__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32481__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32481__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32543__$1 = (function (){var statearr_32584 = state_32543;
(statearr_32584[(12)] = inst_32481__$1);

(statearr_32584[(15)] = inst_32482);

(statearr_32584[(18)] = inst_32483);

return statearr_32584;
})();
return cljs.core.async.ioc_alts_BANG_(state_32543__$1,(4),inst_32484);
} else {
if((state_val_32544 === (23))){
var inst_32528 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32528)){
var statearr_32585_35496 = state_32543__$1;
(statearr_32585_35496[(1)] = (24));

} else {
var statearr_32586_35497 = state_32543__$1;
(statearr_32586_35497[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (19))){
var inst_32523 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32587_35498 = state_32543__$1;
(statearr_32587_35498[(2)] = inst_32523);

(statearr_32587_35498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (11))){
var inst_32492 = (state_32543[(14)]);
var inst_32507 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32492);
var state_32543__$1 = state_32543;
var statearr_32592_35499 = state_32543__$1;
(statearr_32592_35499[(2)] = inst_32507);

(statearr_32592_35499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (9))){
var inst_32482 = (state_32543[(15)]);
var inst_32492 = (state_32543[(14)]);
var inst_32514 = (state_32543[(19)]);
var inst_32514__$1 = (inst_32482.cljs$core$IFn$_invoke$arity$1 ? inst_32482.cljs$core$IFn$_invoke$arity$1(inst_32492) : inst_32482.call(null,inst_32492));
var state_32543__$1 = (function (){var statearr_32598 = state_32543;
(statearr_32598[(19)] = inst_32514__$1);

return statearr_32598;
})();
if(cljs.core.truth_(inst_32514__$1)){
var statearr_32599_35500 = state_32543__$1;
(statearr_32599_35500[(1)] = (14));

} else {
var statearr_32603_35501 = state_32543__$1;
(statearr_32603_35501[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (5))){
var inst_32493 = (state_32543[(13)]);
var state_32543__$1 = state_32543;
var statearr_32604_35502 = state_32543__$1;
(statearr_32604_35502[(2)] = inst_32493);

(statearr_32604_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (14))){
var inst_32514 = (state_32543[(19)]);
var state_32543__$1 = state_32543;
var statearr_32606_35506 = state_32543__$1;
(statearr_32606_35506[(2)] = inst_32514);

(statearr_32606_35506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (26))){
var inst_32533 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32610_35507 = state_32543__$1;
(statearr_32610_35507[(2)] = inst_32533);

(statearr_32610_35507[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (16))){
var inst_32525 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32525)){
var statearr_32614_35508 = state_32543__$1;
(statearr_32614_35508[(1)] = (20));

} else {
var statearr_32617_35509 = state_32543__$1;
(statearr_32617_35509[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (10))){
var inst_32539 = (state_32543[(2)]);
var state_32543__$1 = state_32543;
var statearr_32619_35510 = state_32543__$1;
(statearr_32619_35510[(2)] = inst_32539);

(statearr_32619_35510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (18))){
var inst_32517 = (state_32543[(16)]);
var state_32543__$1 = state_32543;
var statearr_32621_35516 = state_32543__$1;
(statearr_32621_35516[(2)] = inst_32517);

(statearr_32621_35516[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32544 === (8))){
var inst_32491 = (state_32543[(7)]);
var inst_32504 = (inst_32491 == null);
var state_32543__$1 = state_32543;
if(cljs.core.truth_(inst_32504)){
var statearr_32625_35518 = state_32543__$1;
(statearr_32625_35518[(1)] = (11));

} else {
var statearr_32626_35519 = state_32543__$1;
(statearr_32626_35519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30630__auto__ = null;
var cljs$core$async$mix_$_state_machine__30630__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = cljs$core$async$mix_$_state_machine__30630__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var cljs$core$async$mix_$_state_machine__30630__auto____1 = (function (state_32543){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_32543);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32637){var ex__30633__auto__ = e32637;
var statearr_32638_35522 = state_32543;
(statearr_32638_35522[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_32543[(4)]))){
var statearr_32641_35525 = state_32543;
(statearr_32641_35525[(1)] = cljs.core.first((state_32543[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35526 = state_32543;
state_32543 = G__35526;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30630__auto__ = function(state_32543){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30630__auto____1.call(this,state_32543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30630__auto____0;
cljs$core$async$mix_$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30630__auto____1;
return cljs$core$async$mix_$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32647 = f__31031__auto__();
(statearr_32647[(6)] = c__31030__auto___35431);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35528 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35528(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35529 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35529(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35535 = (function() {
var G__35536 = null;
var G__35536__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35536__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35536 = function(p,v){
switch(arguments.length){
case 1:
return G__35536__1.call(this,p);
case 2:
return G__35536__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35536.cljs$core$IFn$_invoke$arity$1 = G__35536__1;
G__35536.cljs$core$IFn$_invoke$arity$2 = G__35536__2;
return G__35536;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32719 = arguments.length;
switch (G__32719) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35535(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35535(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32756 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32757){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32757 = meta32757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32758,meta32757__$1){
var self__ = this;
var _32758__$1 = this;
return (new cljs.core.async.t_cljs$core$async32756(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32757__$1));
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32758){
var self__ = this;
var _32758__$1 = this;
return self__.meta32757;
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32757","meta32757",173206972,null)], null);
}));

(cljs.core.async.t_cljs$core$async32756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32756");

(cljs.core.async.t_cljs$core$async32756.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32756.
 */
cljs.core.async.__GT_t_cljs$core$async32756 = (function cljs$core$async$__GT_t_cljs$core$async32756(ch,topic_fn,buf_fn,mults,ensure_mult,meta32757){
return (new cljs.core.async.t_cljs$core$async32756(ch,topic_fn,buf_fn,mults,ensure_mult,meta32757));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32749 = arguments.length;
switch (G__32749) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32743_SHARP_){
if(cljs.core.truth_((p1__32743_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32743_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32743_SHARP_.call(null,topic)))){
return p1__32743_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32743_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32756(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31030__auto___35589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_32864){
var state_val_32865 = (state_32864[(1)]);
if((state_val_32865 === (7))){
var inst_32857 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32868_35593 = state_32864__$1;
(statearr_32868_35593[(2)] = inst_32857);

(statearr_32868_35593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (20))){
var state_32864__$1 = state_32864;
var statearr_32872_35594 = state_32864__$1;
(statearr_32872_35594[(2)] = null);

(statearr_32872_35594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (1))){
var state_32864__$1 = state_32864;
var statearr_32874_35597 = state_32864__$1;
(statearr_32874_35597[(2)] = null);

(statearr_32874_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (24))){
var inst_32838 = (state_32864[(7)]);
var inst_32849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32838);
var state_32864__$1 = state_32864;
var statearr_32875_35598 = state_32864__$1;
(statearr_32875_35598[(2)] = inst_32849);

(statearr_32875_35598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (4))){
var inst_32782 = (state_32864[(8)]);
var inst_32782__$1 = (state_32864[(2)]);
var inst_32783 = (inst_32782__$1 == null);
var state_32864__$1 = (function (){var statearr_32878 = state_32864;
(statearr_32878[(8)] = inst_32782__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32783)){
var statearr_32879_35599 = state_32864__$1;
(statearr_32879_35599[(1)] = (5));

} else {
var statearr_32880_35600 = state_32864__$1;
(statearr_32880_35600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (15))){
var inst_32831 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32885_35601 = state_32864__$1;
(statearr_32885_35601[(2)] = inst_32831);

(statearr_32885_35601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (21))){
var inst_32854 = (state_32864[(2)]);
var state_32864__$1 = (function (){var statearr_32889 = state_32864;
(statearr_32889[(9)] = inst_32854);

return statearr_32889;
})();
var statearr_32890_35602 = state_32864__$1;
(statearr_32890_35602[(2)] = null);

(statearr_32890_35602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (13))){
var inst_32812 = (state_32864[(10)]);
var inst_32815 = cljs.core.chunked_seq_QMARK_(inst_32812);
var state_32864__$1 = state_32864;
if(inst_32815){
var statearr_32891_35603 = state_32864__$1;
(statearr_32891_35603[(1)] = (16));

} else {
var statearr_32893_35604 = state_32864__$1;
(statearr_32893_35604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (22))){
var inst_32846 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
if(cljs.core.truth_(inst_32846)){
var statearr_32895_35609 = state_32864__$1;
(statearr_32895_35609[(1)] = (23));

} else {
var statearr_32896_35610 = state_32864__$1;
(statearr_32896_35610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (6))){
var inst_32782 = (state_32864[(8)]);
var inst_32838 = (state_32864[(7)]);
var inst_32842 = (state_32864[(11)]);
var inst_32838__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32782) : topic_fn.call(null,inst_32782));
var inst_32841 = cljs.core.deref(mults);
var inst_32842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32841,inst_32838__$1);
var state_32864__$1 = (function (){var statearr_32899 = state_32864;
(statearr_32899[(7)] = inst_32838__$1);

(statearr_32899[(11)] = inst_32842__$1);

return statearr_32899;
})();
if(cljs.core.truth_(inst_32842__$1)){
var statearr_32900_35615 = state_32864__$1;
(statearr_32900_35615[(1)] = (19));

} else {
var statearr_32901_35616 = state_32864__$1;
(statearr_32901_35616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (25))){
var inst_32851 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32902_35617 = state_32864__$1;
(statearr_32902_35617[(2)] = inst_32851);

(statearr_32902_35617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (17))){
var inst_32812 = (state_32864[(10)]);
var inst_32822 = cljs.core.first(inst_32812);
var inst_32823 = cljs.core.async.muxch_STAR_(inst_32822);
var inst_32824 = cljs.core.async.close_BANG_(inst_32823);
var inst_32825 = cljs.core.next(inst_32812);
var inst_32793 = inst_32825;
var inst_32794 = null;
var inst_32795 = (0);
var inst_32796 = (0);
var state_32864__$1 = (function (){var statearr_32904 = state_32864;
(statearr_32904[(12)] = inst_32824);

(statearr_32904[(13)] = inst_32793);

(statearr_32904[(14)] = inst_32794);

(statearr_32904[(15)] = inst_32795);

(statearr_32904[(16)] = inst_32796);

return statearr_32904;
})();
var statearr_32906_35619 = state_32864__$1;
(statearr_32906_35619[(2)] = null);

(statearr_32906_35619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (3))){
var inst_32859 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32864__$1,inst_32859);
} else {
if((state_val_32865 === (12))){
var inst_32833 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32911_35622 = state_32864__$1;
(statearr_32911_35622[(2)] = inst_32833);

(statearr_32911_35622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (2))){
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32864__$1,(4),ch);
} else {
if((state_val_32865 === (23))){
var state_32864__$1 = state_32864;
var statearr_32912_35625 = state_32864__$1;
(statearr_32912_35625[(2)] = null);

(statearr_32912_35625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (19))){
var inst_32842 = (state_32864[(11)]);
var inst_32782 = (state_32864[(8)]);
var inst_32844 = cljs.core.async.muxch_STAR_(inst_32842);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32864__$1,(22),inst_32844,inst_32782);
} else {
if((state_val_32865 === (11))){
var inst_32793 = (state_32864[(13)]);
var inst_32812 = (state_32864[(10)]);
var inst_32812__$1 = cljs.core.seq(inst_32793);
var state_32864__$1 = (function (){var statearr_32913 = state_32864;
(statearr_32913[(10)] = inst_32812__$1);

return statearr_32913;
})();
if(inst_32812__$1){
var statearr_32915_35631 = state_32864__$1;
(statearr_32915_35631[(1)] = (13));

} else {
var statearr_32916_35632 = state_32864__$1;
(statearr_32916_35632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (9))){
var inst_32835 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32917_35633 = state_32864__$1;
(statearr_32917_35633[(2)] = inst_32835);

(statearr_32917_35633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (5))){
var inst_32789 = cljs.core.deref(mults);
var inst_32790 = cljs.core.vals(inst_32789);
var inst_32791 = cljs.core.seq(inst_32790);
var inst_32793 = inst_32791;
var inst_32794 = null;
var inst_32795 = (0);
var inst_32796 = (0);
var state_32864__$1 = (function (){var statearr_32919 = state_32864;
(statearr_32919[(13)] = inst_32793);

(statearr_32919[(14)] = inst_32794);

(statearr_32919[(15)] = inst_32795);

(statearr_32919[(16)] = inst_32796);

return statearr_32919;
})();
var statearr_32923_35634 = state_32864__$1;
(statearr_32923_35634[(2)] = null);

(statearr_32923_35634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (14))){
var state_32864__$1 = state_32864;
var statearr_32928_35635 = state_32864__$1;
(statearr_32928_35635[(2)] = null);

(statearr_32928_35635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (16))){
var inst_32812 = (state_32864[(10)]);
var inst_32817 = cljs.core.chunk_first(inst_32812);
var inst_32818 = cljs.core.chunk_rest(inst_32812);
var inst_32819 = cljs.core.count(inst_32817);
var inst_32793 = inst_32818;
var inst_32794 = inst_32817;
var inst_32795 = inst_32819;
var inst_32796 = (0);
var state_32864__$1 = (function (){var statearr_32930 = state_32864;
(statearr_32930[(13)] = inst_32793);

(statearr_32930[(14)] = inst_32794);

(statearr_32930[(15)] = inst_32795);

(statearr_32930[(16)] = inst_32796);

return statearr_32930;
})();
var statearr_32931_35637 = state_32864__$1;
(statearr_32931_35637[(2)] = null);

(statearr_32931_35637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (10))){
var inst_32794 = (state_32864[(14)]);
var inst_32796 = (state_32864[(16)]);
var inst_32793 = (state_32864[(13)]);
var inst_32795 = (state_32864[(15)]);
var inst_32802 = cljs.core._nth(inst_32794,inst_32796);
var inst_32803 = cljs.core.async.muxch_STAR_(inst_32802);
var inst_32805 = cljs.core.async.close_BANG_(inst_32803);
var inst_32807 = (inst_32796 + (1));
var tmp32925 = inst_32793;
var tmp32926 = inst_32794;
var tmp32927 = inst_32795;
var inst_32793__$1 = tmp32925;
var inst_32794__$1 = tmp32926;
var inst_32795__$1 = tmp32927;
var inst_32796__$1 = inst_32807;
var state_32864__$1 = (function (){var statearr_32941 = state_32864;
(statearr_32941[(17)] = inst_32805);

(statearr_32941[(13)] = inst_32793__$1);

(statearr_32941[(14)] = inst_32794__$1);

(statearr_32941[(15)] = inst_32795__$1);

(statearr_32941[(16)] = inst_32796__$1);

return statearr_32941;
})();
var statearr_32944_35641 = state_32864__$1;
(statearr_32944_35641[(2)] = null);

(statearr_32944_35641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (18))){
var inst_32828 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32946_35642 = state_32864__$1;
(statearr_32946_35642[(2)] = inst_32828);

(statearr_32946_35642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (8))){
var inst_32796 = (state_32864[(16)]);
var inst_32795 = (state_32864[(15)]);
var inst_32798 = (inst_32796 < inst_32795);
var inst_32799 = inst_32798;
var state_32864__$1 = state_32864;
if(cljs.core.truth_(inst_32799)){
var statearr_32947_35646 = state_32864__$1;
(statearr_32947_35646[(1)] = (10));

} else {
var statearr_32949_35647 = state_32864__$1;
(statearr_32949_35647[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_32952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32952[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_32952[(1)] = (1));

return statearr_32952;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_32864){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_32864);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e32954){var ex__30633__auto__ = e32954;
var statearr_32955_35649 = state_32864;
(statearr_32955_35649[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_32864[(4)]))){
var statearr_32956_35651 = state_32864;
(statearr_32956_35651[(1)] = cljs.core.first((state_32864[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35653 = state_32864;
state_32864 = G__35653;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_32864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_32864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_32960 = f__31031__auto__();
(statearr_32960[(6)] = c__31030__auto___35589);

return statearr_32960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32963 = arguments.length;
switch (G__32963) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32972 = arguments.length;
switch (G__32972) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31030__auto___35670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (7))){
var state_33092__$1 = state_33092;
var statearr_33104_35673 = state_33092__$1;
(statearr_33104_35673[(2)] = null);

(statearr_33104_35673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (1))){
var state_33092__$1 = state_33092;
var statearr_33106_35676 = state_33092__$1;
(statearr_33106_35676[(2)] = null);

(statearr_33106_35676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (4))){
var inst_33019 = (state_33092[(7)]);
var inst_33016 = (state_33092[(8)]);
var inst_33022 = (inst_33019 < inst_33016);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33022)){
var statearr_33109_35677 = state_33092__$1;
(statearr_33109_35677[(1)] = (6));

} else {
var statearr_33110_35678 = state_33092__$1;
(statearr_33110_35678[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (15))){
var inst_33071 = (state_33092[(9)]);
var inst_33080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33071);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33092__$1,(17),out,inst_33080);
} else {
if((state_val_33093 === (13))){
var inst_33071 = (state_33092[(9)]);
var inst_33071__$1 = (state_33092[(2)]);
var inst_33072 = cljs.core.some(cljs.core.nil_QMARK_,inst_33071__$1);
var state_33092__$1 = (function (){var statearr_33124 = state_33092;
(statearr_33124[(9)] = inst_33071__$1);

return statearr_33124;
})();
if(cljs.core.truth_(inst_33072)){
var statearr_33125_35681 = state_33092__$1;
(statearr_33125_35681[(1)] = (14));

} else {
var statearr_33131_35682 = state_33092__$1;
(statearr_33131_35682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (6))){
var state_33092__$1 = state_33092;
var statearr_33137_35683 = state_33092__$1;
(statearr_33137_35683[(2)] = null);

(statearr_33137_35683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (17))){
var inst_33082 = (state_33092[(2)]);
var state_33092__$1 = (function (){var statearr_33208 = state_33092;
(statearr_33208[(10)] = inst_33082);

return statearr_33208;
})();
var statearr_33209_35685 = state_33092__$1;
(statearr_33209_35685[(2)] = null);

(statearr_33209_35685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (3))){
var inst_33087 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33092__$1,inst_33087);
} else {
if((state_val_33093 === (12))){
var _ = (function (){var statearr_33218 = state_33092;
(statearr_33218[(4)] = cljs.core.rest((state_33092[(4)])));

return statearr_33218;
})();
var state_33092__$1 = state_33092;
var ex33182 = (state_33092__$1[(2)]);
var statearr_33236_35687 = state_33092__$1;
(statearr_33236_35687[(5)] = ex33182);


if((ex33182 instanceof Object)){
var statearr_33246_35688 = state_33092__$1;
(statearr_33246_35688[(1)] = (11));

(statearr_33246_35688[(5)] = null);

} else {
throw ex33182;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (2))){
var inst_33015 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33016 = cnt;
var inst_33019 = (0);
var state_33092__$1 = (function (){var statearr_33256 = state_33092;
(statearr_33256[(11)] = inst_33015);

(statearr_33256[(8)] = inst_33016);

(statearr_33256[(7)] = inst_33019);

return statearr_33256;
})();
var statearr_33257_35693 = state_33092__$1;
(statearr_33257_35693[(2)] = null);

(statearr_33257_35693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (11))){
var inst_33043 = (state_33092[(2)]);
var inst_33044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33092__$1 = (function (){var statearr_33258 = state_33092;
(statearr_33258[(12)] = inst_33043);

return statearr_33258;
})();
var statearr_33259_35700 = state_33092__$1;
(statearr_33259_35700[(2)] = inst_33044);

(statearr_33259_35700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (9))){
var inst_33019 = (state_33092[(7)]);
var _ = (function (){var statearr_33261 = state_33092;
(statearr_33261[(4)] = cljs.core.cons((12),(state_33092[(4)])));

return statearr_33261;
})();
var inst_33053 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33019) : chs__$1.call(null,inst_33019));
var inst_33054 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33019) : done.call(null,inst_33019));
var inst_33055 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33053,inst_33054);
var ___$1 = (function (){var statearr_33262 = state_33092;
(statearr_33262[(4)] = cljs.core.rest((state_33092[(4)])));

return statearr_33262;
})();
var state_33092__$1 = state_33092;
var statearr_33265_35705 = state_33092__$1;
(statearr_33265_35705[(2)] = inst_33055);

(statearr_33265_35705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (5))){
var inst_33065 = (state_33092[(2)]);
var state_33092__$1 = (function (){var statearr_33269 = state_33092;
(statearr_33269[(13)] = inst_33065);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33092__$1,(13),dchan);
} else {
if((state_val_33093 === (14))){
var inst_33077 = cljs.core.async.close_BANG_(out);
var state_33092__$1 = state_33092;
var statearr_33272_35709 = state_33092__$1;
(statearr_33272_35709[(2)] = inst_33077);

(statearr_33272_35709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (16))){
var inst_33085 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33274_35712 = state_33092__$1;
(statearr_33274_35712[(2)] = inst_33085);

(statearr_33274_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (10))){
var inst_33019 = (state_33092[(7)]);
var inst_33058 = (state_33092[(2)]);
var inst_33059 = (inst_33019 + (1));
var inst_33019__$1 = inst_33059;
var state_33092__$1 = (function (){var statearr_33276 = state_33092;
(statearr_33276[(14)] = inst_33058);

(statearr_33276[(7)] = inst_33019__$1);

return statearr_33276;
})();
var statearr_33278_35720 = state_33092__$1;
(statearr_33278_35720[(2)] = null);

(statearr_33278_35720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (8))){
var inst_33063 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33279_35725 = state_33092__$1;
(statearr_33279_35725[(2)] = inst_33063);

(statearr_33279_35725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_33285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33285[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_33285[(1)] = (1));

return statearr_33285;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_33092){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33092);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33288){var ex__30633__auto__ = e33288;
var statearr_33289_35746 = state_33092;
(statearr_33289_35746[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33092[(4)]))){
var statearr_33292_35747 = state_33092;
(statearr_33292_35747[(1)] = cljs.core.first((state_33092[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35756 = state_33092;
state_33092 = G__35756;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33298 = f__31031__auto__();
(statearr_33298[(6)] = c__31030__auto___35670);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33303 = arguments.length;
switch (G__33303) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___35783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var inst_33327 = (state_33363[(7)]);
var inst_33329 = (state_33363[(8)]);
var inst_33327__$1 = (state_33363[(2)]);
var inst_33329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33327__$1,(0),null);
var inst_33330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33327__$1,(1),null);
var inst_33331 = (inst_33329__$1 == null);
var state_33363__$1 = (function (){var statearr_33407 = state_33363;
(statearr_33407[(7)] = inst_33327__$1);

(statearr_33407[(8)] = inst_33329__$1);

(statearr_33407[(9)] = inst_33330);

return statearr_33407;
})();
if(cljs.core.truth_(inst_33331)){
var statearr_33414_35796 = state_33363__$1;
(statearr_33414_35796[(1)] = (8));

} else {
var statearr_33415_35797 = state_33363__$1;
(statearr_33415_35797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var inst_33314 = cljs.core.vec(chs);
var inst_33316 = inst_33314;
var state_33363__$1 = (function (){var statearr_33420 = state_33363;
(statearr_33420[(10)] = inst_33316);

return statearr_33420;
})();
var statearr_33421_35798 = state_33363__$1;
(statearr_33421_35798[(2)] = null);

(statearr_33421_35798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var inst_33316 = (state_33363[(10)]);
var state_33363__$1 = state_33363;
return cljs.core.async.ioc_alts_BANG_(state_33363__$1,(7),inst_33316);
} else {
if((state_val_33364 === (6))){
var inst_33357 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33427_35807 = state_33363__$1;
(statearr_33427_35807[(2)] = inst_33357);

(statearr_33427_35807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33359 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33363__$1,inst_33359);
} else {
if((state_val_33364 === (2))){
var inst_33316 = (state_33363[(10)]);
var inst_33318 = cljs.core.count(inst_33316);
var inst_33319 = (inst_33318 > (0));
var state_33363__$1 = state_33363;
if(cljs.core.truth_(inst_33319)){
var statearr_33433_35812 = state_33363__$1;
(statearr_33433_35812[(1)] = (4));

} else {
var statearr_33434_35813 = state_33363__$1;
(statearr_33434_35813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (11))){
var inst_33316 = (state_33363[(10)]);
var inst_33347 = (state_33363[(2)]);
var tmp33428 = inst_33316;
var inst_33316__$1 = tmp33428;
var state_33363__$1 = (function (){var statearr_33436 = state_33363;
(statearr_33436[(11)] = inst_33347);

(statearr_33436[(10)] = inst_33316__$1);

return statearr_33436;
})();
var statearr_33437_35818 = state_33363__$1;
(statearr_33437_35818[(2)] = null);

(statearr_33437_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var inst_33329 = (state_33363[(8)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33363__$1,(11),out,inst_33329);
} else {
if((state_val_33364 === (5))){
var inst_33355 = cljs.core.async.close_BANG_(out);
var state_33363__$1 = state_33363;
var statearr_33443_35821 = state_33363__$1;
(statearr_33443_35821[(2)] = inst_33355);

(statearr_33443_35821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33350 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33444_35823 = state_33363__$1;
(statearr_33444_35823[(2)] = inst_33350);

(statearr_33444_35823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (8))){
var inst_33316 = (state_33363[(10)]);
var inst_33327 = (state_33363[(7)]);
var inst_33329 = (state_33363[(8)]);
var inst_33330 = (state_33363[(9)]);
var inst_33339 = (function (){var cs = inst_33316;
var vec__33322 = inst_33327;
var v = inst_33329;
var c = inst_33330;
return (function (p1__33299_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33299_SHARP_);
});
})();
var inst_33342 = cljs.core.filterv(inst_33339,inst_33316);
var inst_33316__$1 = inst_33342;
var state_33363__$1 = (function (){var statearr_33445 = state_33363;
(statearr_33445[(10)] = inst_33316__$1);

return statearr_33445;
})();
var statearr_33446_35826 = state_33363__$1;
(statearr_33446_35826[(2)] = null);

(statearr_33446_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_33449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33449[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_33449[(1)] = (1));

return statearr_33449;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_33363){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33363);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33450){var ex__30633__auto__ = e33450;
var statearr_33451_35829 = state_33363;
(statearr_33451_35829[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33363[(4)]))){
var statearr_33452_35830 = state_33363;
(statearr_33452_35830[(1)] = cljs.core.first((state_33363[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35833 = state_33363;
state_33363 = G__35833;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33454 = f__31031__auto__();
(statearr_33454[(6)] = c__31030__auto___35783);

return statearr_33454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___35840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33495){
var state_val_33496 = (state_33495[(1)]);
if((state_val_33496 === (7))){
var inst_33477 = (state_33495[(7)]);
var inst_33477__$1 = (state_33495[(2)]);
var inst_33478 = (inst_33477__$1 == null);
var inst_33479 = cljs.core.not(inst_33478);
var state_33495__$1 = (function (){var statearr_33499 = state_33495;
(statearr_33499[(7)] = inst_33477__$1);

return statearr_33499;
})();
if(inst_33479){
var statearr_33500_35845 = state_33495__$1;
(statearr_33500_35845[(1)] = (8));

} else {
var statearr_33501_35846 = state_33495__$1;
(statearr_33501_35846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (1))){
var inst_33469 = (0);
var state_33495__$1 = (function (){var statearr_33502 = state_33495;
(statearr_33502[(8)] = inst_33469);

return statearr_33502;
})();
var statearr_33503_35847 = state_33495__$1;
(statearr_33503_35847[(2)] = null);

(statearr_33503_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (4))){
var state_33495__$1 = state_33495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33495__$1,(7),ch);
} else {
if((state_val_33496 === (6))){
var inst_33490 = (state_33495[(2)]);
var state_33495__$1 = state_33495;
var statearr_33506_35853 = state_33495__$1;
(statearr_33506_35853[(2)] = inst_33490);

(statearr_33506_35853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (3))){
var inst_33492 = (state_33495[(2)]);
var inst_33493 = cljs.core.async.close_BANG_(out);
var state_33495__$1 = (function (){var statearr_33509 = state_33495;
(statearr_33509[(9)] = inst_33492);

return statearr_33509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33495__$1,inst_33493);
} else {
if((state_val_33496 === (2))){
var inst_33469 = (state_33495[(8)]);
var inst_33474 = (inst_33469 < n);
var state_33495__$1 = state_33495;
if(cljs.core.truth_(inst_33474)){
var statearr_33511_35859 = state_33495__$1;
(statearr_33511_35859[(1)] = (4));

} else {
var statearr_33512_35860 = state_33495__$1;
(statearr_33512_35860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (11))){
var inst_33469 = (state_33495[(8)]);
var inst_33482 = (state_33495[(2)]);
var inst_33483 = (inst_33469 + (1));
var inst_33469__$1 = inst_33483;
var state_33495__$1 = (function (){var statearr_33513 = state_33495;
(statearr_33513[(10)] = inst_33482);

(statearr_33513[(8)] = inst_33469__$1);

return statearr_33513;
})();
var statearr_33514_35865 = state_33495__$1;
(statearr_33514_35865[(2)] = null);

(statearr_33514_35865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (9))){
var state_33495__$1 = state_33495;
var statearr_33515_35866 = state_33495__$1;
(statearr_33515_35866[(2)] = null);

(statearr_33515_35866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (5))){
var state_33495__$1 = state_33495;
var statearr_33516_35867 = state_33495__$1;
(statearr_33516_35867[(2)] = null);

(statearr_33516_35867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (10))){
var inst_33487 = (state_33495[(2)]);
var state_33495__$1 = state_33495;
var statearr_33520_35868 = state_33495__$1;
(statearr_33520_35868[(2)] = inst_33487);

(statearr_33520_35868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33496 === (8))){
var inst_33477 = (state_33495[(7)]);
var state_33495__$1 = state_33495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33495__$1,(11),out,inst_33477);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_33524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33524[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_33524[(1)] = (1));

return statearr_33524;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_33495){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33495);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33525){var ex__30633__auto__ = e33525;
var statearr_33526_35870 = state_33495;
(statearr_33526_35870[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33495[(4)]))){
var statearr_33527_35871 = state_33495;
(statearr_33527_35871[(1)] = cljs.core.first((state_33495[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35876 = state_33495;
state_33495 = G__35876;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_33495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_33495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33528 = f__31031__auto__();
(statearr_33528[(6)] = c__31030__auto___35840);

return statearr_33528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33551 = (function (f,ch,meta33538,_,fn1,meta33552){
this.f = f;
this.ch = ch;
this.meta33538 = meta33538;
this._ = _;
this.fn1 = fn1;
this.meta33552 = meta33552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33553,meta33552__$1){
var self__ = this;
var _33553__$1 = this;
return (new cljs.core.async.t_cljs$core$async33551(self__.f,self__.ch,self__.meta33538,self__._,self__.fn1,meta33552__$1));
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33553){
var self__ = this;
var _33553__$1 = this;
return self__.meta33552;
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33534_SHARP_){
var G__33561 = (((p1__33534_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33534_SHARP_) : self__.f.call(null,p1__33534_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33561) : f1.call(null,G__33561));
});
}));

(cljs.core.async.t_cljs$core$async33551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33538","meta33538",1358891639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33537","cljs.core.async/t_cljs$core$async33537",-2079306117,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33552","meta33552",1247034604,null)], null);
}));

(cljs.core.async.t_cljs$core$async33551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33551");

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33551.
 */
cljs.core.async.__GT_t_cljs$core$async33551 = (function cljs$core$async$__GT_t_cljs$core$async33551(f,ch,meta33538,_,fn1,meta33552){
return (new cljs.core.async.t_cljs$core$async33551(f,ch,meta33538,_,fn1,meta33552));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33537 = (function (f,ch,meta33538){
this.f = f;
this.ch = ch;
this.meta33538 = meta33538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33539,meta33538__$1){
var self__ = this;
var _33539__$1 = this;
return (new cljs.core.async.t_cljs$core$async33537(self__.f,self__.ch,meta33538__$1));
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33539){
var self__ = this;
var _33539__$1 = this;
return self__.meta33538;
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33551(self__.f,self__.ch,self__.meta33538,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33572 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33572) : self__.f.call(null,G__33572));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33538","meta33538",1358891639,null)], null);
}));

(cljs.core.async.t_cljs$core$async33537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33537");

(cljs.core.async.t_cljs$core$async33537.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33537.
 */
cljs.core.async.__GT_t_cljs$core$async33537 = (function cljs$core$async$__GT_t_cljs$core$async33537(f,ch,meta33538){
return (new cljs.core.async.t_cljs$core$async33537(f,ch,meta33538));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33575 = (function (f,ch,meta33576){
this.f = f;
this.ch = ch;
this.meta33576 = meta33576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33577,meta33576__$1){
var self__ = this;
var _33577__$1 = this;
return (new cljs.core.async.t_cljs$core$async33575(self__.f,self__.ch,meta33576__$1));
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33577){
var self__ = this;
var _33577__$1 = this;
return self__.meta33576;
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33576","meta33576",848917111,null)], null);
}));

(cljs.core.async.t_cljs$core$async33575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33575");

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33575.
 */
cljs.core.async.__GT_t_cljs$core$async33575 = (function cljs$core$async$__GT_t_cljs$core$async33575(f,ch,meta33576){
return (new cljs.core.async.t_cljs$core$async33575(f,ch,meta33576));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33580 = (function (p,ch,meta33581){
this.p = p;
this.ch = ch;
this.meta33581 = meta33581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33582,meta33581__$1){
var self__ = this;
var _33582__$1 = this;
return (new cljs.core.async.t_cljs$core$async33580(self__.p,self__.ch,meta33581__$1));
}));

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33582){
var self__ = this;
var _33582__$1 = this;
return self__.meta33581;
}));

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33581","meta33581",-835818586,null)], null);
}));

(cljs.core.async.t_cljs$core$async33580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33580");

(cljs.core.async.t_cljs$core$async33580.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33580.
 */
cljs.core.async.__GT_t_cljs$core$async33580 = (function cljs$core$async$__GT_t_cljs$core$async33580(p,ch,meta33581){
return (new cljs.core.async.t_cljs$core$async33580(p,ch,meta33581));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33580(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33592 = arguments.length;
switch (G__33592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___35957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33616){
var state_val_33617 = (state_33616[(1)]);
if((state_val_33617 === (7))){
var inst_33612 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33623_35968 = state_33616__$1;
(statearr_33623_35968[(2)] = inst_33612);

(statearr_33623_35968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (1))){
var state_33616__$1 = state_33616;
var statearr_33624_35970 = state_33616__$1;
(statearr_33624_35970[(2)] = null);

(statearr_33624_35970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (4))){
var inst_33598 = (state_33616[(7)]);
var inst_33598__$1 = (state_33616[(2)]);
var inst_33599 = (inst_33598__$1 == null);
var state_33616__$1 = (function (){var statearr_33625 = state_33616;
(statearr_33625[(7)] = inst_33598__$1);

return statearr_33625;
})();
if(cljs.core.truth_(inst_33599)){
var statearr_33626_35978 = state_33616__$1;
(statearr_33626_35978[(1)] = (5));

} else {
var statearr_33627_35980 = state_33616__$1;
(statearr_33627_35980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (6))){
var inst_33598 = (state_33616[(7)]);
var inst_33603 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33598) : p.call(null,inst_33598));
var state_33616__$1 = state_33616;
if(cljs.core.truth_(inst_33603)){
var statearr_33629_36025 = state_33616__$1;
(statearr_33629_36025[(1)] = (8));

} else {
var statearr_33630_36026 = state_33616__$1;
(statearr_33630_36026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (3))){
var inst_33614 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33616__$1,inst_33614);
} else {
if((state_val_33617 === (2))){
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33616__$1,(4),ch);
} else {
if((state_val_33617 === (11))){
var inst_33606 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33639_36034 = state_33616__$1;
(statearr_33639_36034[(2)] = inst_33606);

(statearr_33639_36034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (9))){
var state_33616__$1 = state_33616;
var statearr_33642_36040 = state_33616__$1;
(statearr_33642_36040[(2)] = null);

(statearr_33642_36040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (5))){
var inst_33601 = cljs.core.async.close_BANG_(out);
var state_33616__$1 = state_33616;
var statearr_33643_36043 = state_33616__$1;
(statearr_33643_36043[(2)] = inst_33601);

(statearr_33643_36043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (10))){
var inst_33609 = (state_33616[(2)]);
var state_33616__$1 = (function (){var statearr_33644 = state_33616;
(statearr_33644[(8)] = inst_33609);

return statearr_33644;
})();
var statearr_33648_36052 = state_33616__$1;
(statearr_33648_36052[(2)] = null);

(statearr_33648_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (8))){
var inst_33598 = (state_33616[(7)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33616__$1,(11),out,inst_33598);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_33649 = [null,null,null,null,null,null,null,null,null];
(statearr_33649[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_33649[(1)] = (1));

return statearr_33649;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_33616){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33616);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33650){var ex__30633__auto__ = e33650;
var statearr_33651_36056 = state_33616;
(statearr_33651_36056[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33616[(4)]))){
var statearr_33652_36058 = state_33616;
(statearr_33652_36058[(1)] = cljs.core.first((state_33616[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36059 = state_33616;
state_33616 = G__36059;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_33616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_33616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33656 = f__31031__auto__();
(statearr_33656[(6)] = c__31030__auto___35957);

return statearr_33656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33662 = arguments.length;
switch (G__33662) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33767){
var state_val_33768 = (state_33767[(1)]);
if((state_val_33768 === (7))){
var inst_33757 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33769_36067 = state_33767__$1;
(statearr_33769_36067[(2)] = inst_33757);

(statearr_33769_36067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (20))){
var inst_33724 = (state_33767[(7)]);
var inst_33738 = (state_33767[(2)]);
var inst_33739 = cljs.core.next(inst_33724);
var inst_33702 = inst_33739;
var inst_33703 = null;
var inst_33704 = (0);
var inst_33705 = (0);
var state_33767__$1 = (function (){var statearr_33774 = state_33767;
(statearr_33774[(8)] = inst_33738);

(statearr_33774[(9)] = inst_33702);

(statearr_33774[(10)] = inst_33703);

(statearr_33774[(11)] = inst_33704);

(statearr_33774[(12)] = inst_33705);

return statearr_33774;
})();
var statearr_33775_36072 = state_33767__$1;
(statearr_33775_36072[(2)] = null);

(statearr_33775_36072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (1))){
var state_33767__$1 = state_33767;
var statearr_33779_36074 = state_33767__$1;
(statearr_33779_36074[(2)] = null);

(statearr_33779_36074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (4))){
var inst_33691 = (state_33767[(13)]);
var inst_33691__$1 = (state_33767[(2)]);
var inst_33692 = (inst_33691__$1 == null);
var state_33767__$1 = (function (){var statearr_33780 = state_33767;
(statearr_33780[(13)] = inst_33691__$1);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33781_36075 = state_33767__$1;
(statearr_33781_36075[(1)] = (5));

} else {
var statearr_33782_36076 = state_33767__$1;
(statearr_33782_36076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (15))){
var state_33767__$1 = state_33767;
var statearr_33786_36078 = state_33767__$1;
(statearr_33786_36078[(2)] = null);

(statearr_33786_36078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (21))){
var state_33767__$1 = state_33767;
var statearr_33788_36079 = state_33767__$1;
(statearr_33788_36079[(2)] = null);

(statearr_33788_36079[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (13))){
var inst_33705 = (state_33767[(12)]);
var inst_33702 = (state_33767[(9)]);
var inst_33703 = (state_33767[(10)]);
var inst_33704 = (state_33767[(11)]);
var inst_33720 = (state_33767[(2)]);
var inst_33721 = (inst_33705 + (1));
var tmp33783 = inst_33704;
var tmp33784 = inst_33702;
var tmp33785 = inst_33703;
var inst_33702__$1 = tmp33784;
var inst_33703__$1 = tmp33785;
var inst_33704__$1 = tmp33783;
var inst_33705__$1 = inst_33721;
var state_33767__$1 = (function (){var statearr_33789 = state_33767;
(statearr_33789[(14)] = inst_33720);

(statearr_33789[(9)] = inst_33702__$1);

(statearr_33789[(10)] = inst_33703__$1);

(statearr_33789[(11)] = inst_33704__$1);

(statearr_33789[(12)] = inst_33705__$1);

return statearr_33789;
})();
var statearr_33790_36081 = state_33767__$1;
(statearr_33790_36081[(2)] = null);

(statearr_33790_36081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (22))){
var state_33767__$1 = state_33767;
var statearr_33792_36082 = state_33767__$1;
(statearr_33792_36082[(2)] = null);

(statearr_33792_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (6))){
var inst_33691 = (state_33767[(13)]);
var inst_33700 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33691) : f.call(null,inst_33691));
var inst_33701 = cljs.core.seq(inst_33700);
var inst_33702 = inst_33701;
var inst_33703 = null;
var inst_33704 = (0);
var inst_33705 = (0);
var state_33767__$1 = (function (){var statearr_33793 = state_33767;
(statearr_33793[(9)] = inst_33702);

(statearr_33793[(10)] = inst_33703);

(statearr_33793[(11)] = inst_33704);

(statearr_33793[(12)] = inst_33705);

return statearr_33793;
})();
var statearr_33794_36083 = state_33767__$1;
(statearr_33794_36083[(2)] = null);

(statearr_33794_36083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (17))){
var inst_33724 = (state_33767[(7)]);
var inst_33731 = cljs.core.chunk_first(inst_33724);
var inst_33732 = cljs.core.chunk_rest(inst_33724);
var inst_33733 = cljs.core.count(inst_33731);
var inst_33702 = inst_33732;
var inst_33703 = inst_33731;
var inst_33704 = inst_33733;
var inst_33705 = (0);
var state_33767__$1 = (function (){var statearr_33798 = state_33767;
(statearr_33798[(9)] = inst_33702);

(statearr_33798[(10)] = inst_33703);

(statearr_33798[(11)] = inst_33704);

(statearr_33798[(12)] = inst_33705);

return statearr_33798;
})();
var statearr_33800_36088 = state_33767__$1;
(statearr_33800_36088[(2)] = null);

(statearr_33800_36088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (3))){
var inst_33759 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33767__$1,inst_33759);
} else {
if((state_val_33768 === (12))){
var inst_33747 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33808_36094 = state_33767__$1;
(statearr_33808_36094[(2)] = inst_33747);

(statearr_33808_36094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (2))){
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33767__$1,(4),in$);
} else {
if((state_val_33768 === (23))){
var inst_33755 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33810_36095 = state_33767__$1;
(statearr_33810_36095[(2)] = inst_33755);

(statearr_33810_36095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (19))){
var inst_33742 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33811_36096 = state_33767__$1;
(statearr_33811_36096[(2)] = inst_33742);

(statearr_33811_36096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (11))){
var inst_33702 = (state_33767[(9)]);
var inst_33724 = (state_33767[(7)]);
var inst_33724__$1 = cljs.core.seq(inst_33702);
var state_33767__$1 = (function (){var statearr_33812 = state_33767;
(statearr_33812[(7)] = inst_33724__$1);

return statearr_33812;
})();
if(inst_33724__$1){
var statearr_33813_36104 = state_33767__$1;
(statearr_33813_36104[(1)] = (14));

} else {
var statearr_33814_36105 = state_33767__$1;
(statearr_33814_36105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (9))){
var inst_33749 = (state_33767[(2)]);
var inst_33750 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33767__$1 = (function (){var statearr_33815 = state_33767;
(statearr_33815[(15)] = inst_33749);

return statearr_33815;
})();
if(cljs.core.truth_(inst_33750)){
var statearr_33816_36115 = state_33767__$1;
(statearr_33816_36115[(1)] = (21));

} else {
var statearr_33817_36116 = state_33767__$1;
(statearr_33817_36116[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (5))){
var inst_33694 = cljs.core.async.close_BANG_(out);
var state_33767__$1 = state_33767;
var statearr_33822_36127 = state_33767__$1;
(statearr_33822_36127[(2)] = inst_33694);

(statearr_33822_36127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (14))){
var inst_33724 = (state_33767[(7)]);
var inst_33729 = cljs.core.chunked_seq_QMARK_(inst_33724);
var state_33767__$1 = state_33767;
if(inst_33729){
var statearr_33823_36134 = state_33767__$1;
(statearr_33823_36134[(1)] = (17));

} else {
var statearr_33824_36140 = state_33767__$1;
(statearr_33824_36140[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (16))){
var inst_33745 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33839_36141 = state_33767__$1;
(statearr_33839_36141[(2)] = inst_33745);

(statearr_33839_36141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (10))){
var inst_33703 = (state_33767[(10)]);
var inst_33705 = (state_33767[(12)]);
var inst_33718 = cljs.core._nth(inst_33703,inst_33705);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33767__$1,(13),out,inst_33718);
} else {
if((state_val_33768 === (18))){
var inst_33724 = (state_33767[(7)]);
var inst_33736 = cljs.core.first(inst_33724);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33767__$1,(20),out,inst_33736);
} else {
if((state_val_33768 === (8))){
var inst_33705 = (state_33767[(12)]);
var inst_33704 = (state_33767[(11)]);
var inst_33715 = (inst_33705 < inst_33704);
var inst_33716 = inst_33715;
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33716)){
var statearr_33847_36146 = state_33767__$1;
(statearr_33847_36146[(1)] = (10));

} else {
var statearr_33848_36147 = state_33767__$1;
(statearr_33848_36147[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____0 = (function (){
var statearr_33849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33849[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__);

(statearr_33849[(1)] = (1));

return statearr_33849;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____1 = (function (state_33767){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33767);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33852){var ex__30633__auto__ = e33852;
var statearr_33853_36164 = state_33767;
(statearr_33853_36164[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33767[(4)]))){
var statearr_33862_36165 = state_33767;
(statearr_33862_36165[(1)] = cljs.core.first((state_33767[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36167 = state_33767;
state_33767 = G__36167;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33871 = f__31031__auto__();
(statearr_33871[(6)] = c__31030__auto__);

return statearr_33871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));

return c__31030__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33901 = arguments.length;
switch (G__33901) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___36189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_33928){
var state_val_33929 = (state_33928[(1)]);
if((state_val_33929 === (7))){
var inst_33923 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33938_36202 = state_33928__$1;
(statearr_33938_36202[(2)] = inst_33923);

(statearr_33938_36202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (1))){
var inst_33902 = null;
var state_33928__$1 = (function (){var statearr_33939 = state_33928;
(statearr_33939[(7)] = inst_33902);

return statearr_33939;
})();
var statearr_33944_36211 = state_33928__$1;
(statearr_33944_36211[(2)] = null);

(statearr_33944_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (4))){
var inst_33905 = (state_33928[(8)]);
var inst_33905__$1 = (state_33928[(2)]);
var inst_33906 = (inst_33905__$1 == null);
var inst_33907 = cljs.core.not(inst_33906);
var state_33928__$1 = (function (){var statearr_33945 = state_33928;
(statearr_33945[(8)] = inst_33905__$1);

return statearr_33945;
})();
if(inst_33907){
var statearr_33946_36228 = state_33928__$1;
(statearr_33946_36228[(1)] = (5));

} else {
var statearr_33947_36230 = state_33928__$1;
(statearr_33947_36230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (6))){
var state_33928__$1 = state_33928;
var statearr_33948_36236 = state_33928__$1;
(statearr_33948_36236[(2)] = null);

(statearr_33948_36236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (3))){
var inst_33925 = (state_33928[(2)]);
var inst_33926 = cljs.core.async.close_BANG_(out);
var state_33928__$1 = (function (){var statearr_33949 = state_33928;
(statearr_33949[(9)] = inst_33925);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33928__$1,inst_33926);
} else {
if((state_val_33929 === (2))){
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33928__$1,(4),ch);
} else {
if((state_val_33929 === (11))){
var inst_33905 = (state_33928[(8)]);
var inst_33917 = (state_33928[(2)]);
var inst_33902 = inst_33905;
var state_33928__$1 = (function (){var statearr_33950 = state_33928;
(statearr_33950[(10)] = inst_33917);

(statearr_33950[(7)] = inst_33902);

return statearr_33950;
})();
var statearr_33951_36244 = state_33928__$1;
(statearr_33951_36244[(2)] = null);

(statearr_33951_36244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (9))){
var inst_33905 = (state_33928[(8)]);
var state_33928__$1 = state_33928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33928__$1,(11),out,inst_33905);
} else {
if((state_val_33929 === (5))){
var inst_33905 = (state_33928[(8)]);
var inst_33902 = (state_33928[(7)]);
var inst_33912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33905,inst_33902);
var state_33928__$1 = state_33928;
if(inst_33912){
var statearr_33953_36268 = state_33928__$1;
(statearr_33953_36268[(1)] = (8));

} else {
var statearr_33954_36269 = state_33928__$1;
(statearr_33954_36269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (10))){
var inst_33920 = (state_33928[(2)]);
var state_33928__$1 = state_33928;
var statearr_33955_36271 = state_33928__$1;
(statearr_33955_36271[(2)] = inst_33920);

(statearr_33955_36271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33929 === (8))){
var inst_33902 = (state_33928[(7)]);
var tmp33952 = inst_33902;
var inst_33902__$1 = tmp33952;
var state_33928__$1 = (function (){var statearr_33956 = state_33928;
(statearr_33956[(7)] = inst_33902__$1);

return statearr_33956;
})();
var statearr_33957_36272 = state_33928__$1;
(statearr_33957_36272[(2)] = null);

(statearr_33957_36272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_33958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33958[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_33958[(1)] = (1));

return statearr_33958;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_33928){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_33928);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e33959){var ex__30633__auto__ = e33959;
var statearr_33960_36278 = state_33928;
(statearr_33960_36278[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_33928[(4)]))){
var statearr_33961_36279 = state_33928;
(statearr_33961_36279[(1)] = cljs.core.first((state_33928[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36287 = state_33928;
state_33928 = G__36287;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_33928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_33928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_33964 = f__31031__auto__();
(statearr_33964[(6)] = c__31030__auto___36189);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33967 = arguments.length;
switch (G__33967) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___36314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (7))){
var inst_34007 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34017_36316 = state_34011__$1;
(statearr_34017_36316[(2)] = inst_34007);

(statearr_34017_36316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (1))){
var inst_33970 = (new Array(n));
var inst_33971 = inst_33970;
var inst_33972 = (0);
var state_34011__$1 = (function (){var statearr_34021 = state_34011;
(statearr_34021[(7)] = inst_33971);

(statearr_34021[(8)] = inst_33972);

return statearr_34021;
})();
var statearr_34023_36323 = state_34011__$1;
(statearr_34023_36323[(2)] = null);

(statearr_34023_36323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (4))){
var inst_33977 = (state_34011[(9)]);
var inst_33977__$1 = (state_34011[(2)]);
var inst_33978 = (inst_33977__$1 == null);
var inst_33979 = cljs.core.not(inst_33978);
var state_34011__$1 = (function (){var statearr_34026 = state_34011;
(statearr_34026[(9)] = inst_33977__$1);

return statearr_34026;
})();
if(inst_33979){
var statearr_34027_36335 = state_34011__$1;
(statearr_34027_36335[(1)] = (5));

} else {
var statearr_34031_36339 = state_34011__$1;
(statearr_34031_36339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (15))){
var inst_34001 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34032_36345 = state_34011__$1;
(statearr_34032_36345[(2)] = inst_34001);

(statearr_34032_36345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (13))){
var state_34011__$1 = state_34011;
var statearr_34033_36350 = state_34011__$1;
(statearr_34033_36350[(2)] = null);

(statearr_34033_36350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (6))){
var inst_33972 = (state_34011[(8)]);
var inst_33997 = (inst_33972 > (0));
var state_34011__$1 = state_34011;
if(cljs.core.truth_(inst_33997)){
var statearr_34034_36353 = state_34011__$1;
(statearr_34034_36353[(1)] = (12));

} else {
var statearr_34035_36354 = state_34011__$1;
(statearr_34035_36354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (3))){
var inst_34009 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34011__$1,inst_34009);
} else {
if((state_val_34012 === (12))){
var inst_33971 = (state_34011[(7)]);
var inst_33999 = cljs.core.vec(inst_33971);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(15),out,inst_33999);
} else {
if((state_val_34012 === (2))){
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34011__$1,(4),ch);
} else {
if((state_val_34012 === (11))){
var inst_33990 = (state_34011[(2)]);
var inst_33992 = (new Array(n));
var inst_33971 = inst_33992;
var inst_33972 = (0);
var state_34011__$1 = (function (){var statearr_34047 = state_34011;
(statearr_34047[(10)] = inst_33990);

(statearr_34047[(7)] = inst_33971);

(statearr_34047[(8)] = inst_33972);

return statearr_34047;
})();
var statearr_34048_36356 = state_34011__$1;
(statearr_34048_36356[(2)] = null);

(statearr_34048_36356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (9))){
var inst_33971 = (state_34011[(7)]);
var inst_33988 = cljs.core.vec(inst_33971);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(11),out,inst_33988);
} else {
if((state_val_34012 === (5))){
var inst_33971 = (state_34011[(7)]);
var inst_33972 = (state_34011[(8)]);
var inst_33977 = (state_34011[(9)]);
var inst_33983 = (state_34011[(11)]);
var inst_33982 = (inst_33971[inst_33972] = inst_33977);
var inst_33983__$1 = (inst_33972 + (1));
var inst_33984 = (inst_33983__$1 < n);
var state_34011__$1 = (function (){var statearr_34052 = state_34011;
(statearr_34052[(12)] = inst_33982);

(statearr_34052[(11)] = inst_33983__$1);

return statearr_34052;
})();
if(cljs.core.truth_(inst_33984)){
var statearr_34053_36361 = state_34011__$1;
(statearr_34053_36361[(1)] = (8));

} else {
var statearr_34059_36365 = state_34011__$1;
(statearr_34059_36365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (14))){
var inst_34004 = (state_34011[(2)]);
var inst_34005 = cljs.core.async.close_BANG_(out);
var state_34011__$1 = (function (){var statearr_34061 = state_34011;
(statearr_34061[(13)] = inst_34004);

return statearr_34061;
})();
var statearr_34062_36371 = state_34011__$1;
(statearr_34062_36371[(2)] = inst_34005);

(statearr_34062_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (10))){
var inst_33995 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34064_36377 = state_34011__$1;
(statearr_34064_36377[(2)] = inst_33995);

(statearr_34064_36377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (8))){
var inst_33971 = (state_34011[(7)]);
var inst_33983 = (state_34011[(11)]);
var tmp34060 = inst_33971;
var inst_33971__$1 = tmp34060;
var inst_33972 = inst_33983;
var state_34011__$1 = (function (){var statearr_34066 = state_34011;
(statearr_34066[(7)] = inst_33971__$1);

(statearr_34066[(8)] = inst_33972);

return statearr_34066;
})();
var statearr_34067_36387 = state_34011__$1;
(statearr_34067_36387[(2)] = null);

(statearr_34067_36387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_34068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34068[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_34068[(1)] = (1));

return statearr_34068;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_34011){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_34011);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e34069){var ex__30633__auto__ = e34069;
var statearr_34070_36397 = state_34011;
(statearr_34070_36397[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_34011[(4)]))){
var statearr_34071_36398 = state_34011;
(statearr_34071_36398[(1)] = cljs.core.first((state_34011[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36399 = state_34011;
state_34011 = G__36399;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_34072 = f__31031__auto__();
(statearr_34072[(6)] = c__31030__auto___36314);

return statearr_34072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34078 = arguments.length;
switch (G__34078) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31030__auto___36403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31031__auto__ = (function (){var switch__30629__auto__ = (function (state_34140){
var state_val_34141 = (state_34140[(1)]);
if((state_val_34141 === (7))){
var inst_34135 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34196_36404 = state_34140__$1;
(statearr_34196_36404[(2)] = inst_34135);

(statearr_34196_36404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (1))){
var inst_34085 = [];
var inst_34087 = inst_34085;
var inst_34088 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34140__$1 = (function (){var statearr_34197 = state_34140;
(statearr_34197[(7)] = inst_34087);

(statearr_34197[(8)] = inst_34088);

return statearr_34197;
})();
var statearr_34199_36407 = state_34140__$1;
(statearr_34199_36407[(2)] = null);

(statearr_34199_36407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (4))){
var inst_34091 = (state_34140[(9)]);
var inst_34091__$1 = (state_34140[(2)]);
var inst_34098 = (inst_34091__$1 == null);
var inst_34099 = cljs.core.not(inst_34098);
var state_34140__$1 = (function (){var statearr_34200 = state_34140;
(statearr_34200[(9)] = inst_34091__$1);

return statearr_34200;
})();
if(inst_34099){
var statearr_34201_36408 = state_34140__$1;
(statearr_34201_36408[(1)] = (5));

} else {
var statearr_34202_36409 = state_34140__$1;
(statearr_34202_36409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (15))){
var inst_34087 = (state_34140[(7)]);
var inst_34127 = cljs.core.vec(inst_34087);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(18),out,inst_34127);
} else {
if((state_val_34141 === (13))){
var inst_34119 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34203_36410 = state_34140__$1;
(statearr_34203_36410[(2)] = inst_34119);

(statearr_34203_36410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (6))){
var inst_34087 = (state_34140[(7)]);
var inst_34121 = inst_34087.length;
var inst_34122 = (inst_34121 > (0));
var state_34140__$1 = state_34140;
if(cljs.core.truth_(inst_34122)){
var statearr_34204_36411 = state_34140__$1;
(statearr_34204_36411[(1)] = (15));

} else {
var statearr_34205_36412 = state_34140__$1;
(statearr_34205_36412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (17))){
var inst_34132 = (state_34140[(2)]);
var inst_34133 = cljs.core.async.close_BANG_(out);
var state_34140__$1 = (function (){var statearr_34206 = state_34140;
(statearr_34206[(10)] = inst_34132);

return statearr_34206;
})();
var statearr_34207_36413 = state_34140__$1;
(statearr_34207_36413[(2)] = inst_34133);

(statearr_34207_36413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (3))){
var inst_34137 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34140__$1,inst_34137);
} else {
if((state_val_34141 === (12))){
var inst_34087 = (state_34140[(7)]);
var inst_34112 = cljs.core.vec(inst_34087);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(14),out,inst_34112);
} else {
if((state_val_34141 === (2))){
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34140__$1,(4),ch);
} else {
if((state_val_34141 === (11))){
var inst_34087 = (state_34140[(7)]);
var inst_34091 = (state_34140[(9)]);
var inst_34101 = (state_34140[(11)]);
var inst_34109 = inst_34087.push(inst_34091);
var tmp34208 = inst_34087;
var inst_34087__$1 = tmp34208;
var inst_34088 = inst_34101;
var state_34140__$1 = (function (){var statearr_34209 = state_34140;
(statearr_34209[(12)] = inst_34109);

(statearr_34209[(7)] = inst_34087__$1);

(statearr_34209[(8)] = inst_34088);

return statearr_34209;
})();
var statearr_34210_36414 = state_34140__$1;
(statearr_34210_36414[(2)] = null);

(statearr_34210_36414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (9))){
var inst_34088 = (state_34140[(8)]);
var inst_34105 = cljs.core.keyword_identical_QMARK_(inst_34088,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34140__$1 = state_34140;
var statearr_34214_36415 = state_34140__$1;
(statearr_34214_36415[(2)] = inst_34105);

(statearr_34214_36415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (5))){
var inst_34091 = (state_34140[(9)]);
var inst_34101 = (state_34140[(11)]);
var inst_34088 = (state_34140[(8)]);
var inst_34102 = (state_34140[(13)]);
var inst_34101__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34091) : f.call(null,inst_34091));
var inst_34102__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34101__$1,inst_34088);
var state_34140__$1 = (function (){var statearr_34215 = state_34140;
(statearr_34215[(11)] = inst_34101__$1);

(statearr_34215[(13)] = inst_34102__$1);

return statearr_34215;
})();
if(inst_34102__$1){
var statearr_34216_36416 = state_34140__$1;
(statearr_34216_36416[(1)] = (8));

} else {
var statearr_34217_36417 = state_34140__$1;
(statearr_34217_36417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (14))){
var inst_34091 = (state_34140[(9)]);
var inst_34101 = (state_34140[(11)]);
var inst_34114 = (state_34140[(2)]);
var inst_34115 = [];
var inst_34116 = inst_34115.push(inst_34091);
var inst_34087 = inst_34115;
var inst_34088 = inst_34101;
var state_34140__$1 = (function (){var statearr_34221 = state_34140;
(statearr_34221[(14)] = inst_34114);

(statearr_34221[(15)] = inst_34116);

(statearr_34221[(7)] = inst_34087);

(statearr_34221[(8)] = inst_34088);

return statearr_34221;
})();
var statearr_34222_36422 = state_34140__$1;
(statearr_34222_36422[(2)] = null);

(statearr_34222_36422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (16))){
var state_34140__$1 = state_34140;
var statearr_34223_36423 = state_34140__$1;
(statearr_34223_36423[(2)] = null);

(statearr_34223_36423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (10))){
var inst_34107 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
if(cljs.core.truth_(inst_34107)){
var statearr_34227_36424 = state_34140__$1;
(statearr_34227_36424[(1)] = (11));

} else {
var statearr_34228_36425 = state_34140__$1;
(statearr_34228_36425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (18))){
var inst_34129 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34229_36427 = state_34140__$1;
(statearr_34229_36427[(2)] = inst_34129);

(statearr_34229_36427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (8))){
var inst_34102 = (state_34140[(13)]);
var state_34140__$1 = state_34140;
var statearr_34230_36428 = state_34140__$1;
(statearr_34230_36428[(2)] = inst_34102);

(statearr_34230_36428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30630__auto__ = null;
var cljs$core$async$state_machine__30630__auto____0 = (function (){
var statearr_34235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34235[(0)] = cljs$core$async$state_machine__30630__auto__);

(statearr_34235[(1)] = (1));

return statearr_34235;
});
var cljs$core$async$state_machine__30630__auto____1 = (function (state_34140){
while(true){
var ret_value__30631__auto__ = (function (){try{while(true){
var result__30632__auto__ = switch__30629__auto__(state_34140);
if(cljs.core.keyword_identical_QMARK_(result__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30632__auto__;
}
break;
}
}catch (e34246){var ex__30633__auto__ = e34246;
var statearr_34247_36430 = state_34140;
(statearr_34247_36430[(2)] = ex__30633__auto__);


if(cljs.core.seq((state_34140[(4)]))){
var statearr_34248_36431 = state_34140;
(statearr_34248_36431[(1)] = cljs.core.first((state_34140[(4)])));

} else {
throw ex__30633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36432 = state_34140;
state_34140 = G__36432;
continue;
} else {
return ret_value__30631__auto__;
}
break;
}
});
cljs$core$async$state_machine__30630__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30630__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30630__auto____0;
cljs$core$async$state_machine__30630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30630__auto____1;
return cljs$core$async$state_machine__30630__auto__;
})()
})();
var state__31032__auto__ = (function (){var statearr_34253 = f__31031__auto__();
(statearr_34253[(6)] = c__31030__auto___36403);

return statearr_34253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31032__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
