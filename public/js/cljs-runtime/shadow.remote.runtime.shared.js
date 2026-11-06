goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31164){
var map__31165 = p__31164;
var map__31165__$1 = cljs.core.__destructure_map(map__31165);
var runtime = map__31165__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31366 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31366)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31167 = runtime;
var G__31168 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31366);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31167,G__31168) : shadow.remote.runtime.shared.process.call(null,G__31167,G__31168));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31169,res){
var map__31170 = p__31169;
var map__31170__$1 = cljs.core.__destructure_map(map__31170);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31172 = res;
var G__31172__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31172,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31172);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31172__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31172__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31175 = arguments.length;
switch (G__31175) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31184,msg,handlers,timeout_after_ms){
var map__31186 = p__31184;
var map__31186__$1 = cljs.core.__destructure_map(map__31186);
var runtime = map__31186__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31375 = arguments.length;
var i__5898__auto___31376 = (0);
while(true){
if((i__5898__auto___31376 < len__5897__auto___31375)){
args__5903__auto__.push((arguments[i__5898__auto___31376]));

var G__31377 = (i__5898__auto___31376 + (1));
i__5898__auto___31376 = G__31377;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31207,ev,args){
var map__31208 = p__31207;
var map__31208__$1 = cljs.core.__destructure_map(map__31208);
var runtime = map__31208__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31209 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31212 = null;
var count__31213 = (0);
var i__31214 = (0);
while(true){
if((i__31214 < count__31213)){
var ext = chunk__31212.cljs$core$IIndexed$_nth$arity$2(null,i__31214);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31382 = seq__31209;
var G__31383 = chunk__31212;
var G__31384 = count__31213;
var G__31385 = (i__31214 + (1));
seq__31209 = G__31382;
chunk__31212 = G__31383;
count__31213 = G__31384;
i__31214 = G__31385;
continue;
} else {
var G__31387 = seq__31209;
var G__31388 = chunk__31212;
var G__31389 = count__31213;
var G__31390 = (i__31214 + (1));
seq__31209 = G__31387;
chunk__31212 = G__31388;
count__31213 = G__31389;
i__31214 = G__31390;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31209);
if(temp__5823__auto__){
var seq__31209__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31209__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__31209__$1);
var G__31391 = cljs.core.chunk_rest(seq__31209__$1);
var G__31392 = c__5694__auto__;
var G__31393 = cljs.core.count(c__5694__auto__);
var G__31394 = (0);
seq__31209 = G__31391;
chunk__31212 = G__31392;
count__31213 = G__31393;
i__31214 = G__31394;
continue;
} else {
var ext = cljs.core.first(seq__31209__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31397 = cljs.core.next(seq__31209__$1);
var G__31398 = null;
var G__31399 = (0);
var G__31400 = (0);
seq__31209 = G__31397;
chunk__31212 = G__31398;
count__31213 = G__31399;
i__31214 = G__31400;
continue;
} else {
var G__31401 = cljs.core.next(seq__31209__$1);
var G__31402 = null;
var G__31403 = (0);
var G__31404 = (0);
seq__31209 = G__31401;
chunk__31212 = G__31402;
count__31213 = G__31403;
i__31214 = G__31404;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31198){
var G__31199 = cljs.core.first(seq31198);
var seq31198__$1 = cljs.core.next(seq31198);
var G__31200 = cljs.core.first(seq31198__$1);
var seq31198__$2 = cljs.core.next(seq31198__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31199,G__31200,seq31198__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31229,p__31230){
var map__31231 = p__31229;
var map__31231__$1 = cljs.core.__destructure_map(map__31231);
var runtime = map__31231__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31232 = p__31230;
var map__31232__$1 = cljs.core.__destructure_map(map__31232);
var msg = map__31232__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31232__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31240 = cljs.core.deref(state_ref);
var map__31240__$1 = cljs.core.__destructure_map(map__31240);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31246,msg){
var map__31247 = p__31246;
var map__31247__$1 = cljs.core.__destructure_map(map__31247);
var runtime = map__31247__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31255,key,p__31256){
var map__31257 = p__31255;
var map__31257__$1 = cljs.core.__destructure_map(map__31257);
var state = map__31257__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31257__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31258 = p__31256;
var map__31258__$1 = cljs.core.__destructure_map(map__31258);
var spec = map__31258__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31271,key,spec){
var map__31272 = p__31271;
var map__31272__$1 = cljs.core.__destructure_map(map__31272);
var runtime = map__31272__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___31431 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___31431 == null)){
} else {
var on_welcome_31432 = temp__5827__auto___31431;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31432.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31432.cljs$core$IFn$_invoke$arity$0() : on_welcome_31432.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31277_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31277_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31278_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31278_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31279_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31279_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31280_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31280_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31281_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31281_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31293,key){
var map__31296 = p__31293;
var map__31296__$1 = cljs.core.__destructure_map(map__31296);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31296__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31304,msg){
var map__31305 = p__31304;
var map__31305__$1 = cljs.core.__destructure_map(map__31305);
var runtime = map__31305__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31313,p__31314){
var map__31316 = p__31313;
var map__31316__$1 = cljs.core.__destructure_map(map__31316);
var runtime = map__31316__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31317 = p__31314;
var map__31317__$1 = cljs.core.__destructure_map(map__31317);
var msg = map__31317__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31317__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31317__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31326 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31328 = null;
var count__31329 = (0);
var i__31330 = (0);
while(true){
if((i__31330 < count__31329)){
var map__31348 = chunk__31328.cljs$core$IIndexed$_nth$arity$2(null,i__31330);
var map__31348__$1 = cljs.core.__destructure_map(map__31348);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31348__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31460 = seq__31326;
var G__31461 = chunk__31328;
var G__31462 = count__31329;
var G__31463 = (i__31330 + (1));
seq__31326 = G__31460;
chunk__31328 = G__31461;
count__31329 = G__31462;
i__31330 = G__31463;
continue;
} else {
var G__31468 = seq__31326;
var G__31469 = chunk__31328;
var G__31470 = count__31329;
var G__31471 = (i__31330 + (1));
seq__31326 = G__31468;
chunk__31328 = G__31469;
count__31329 = G__31470;
i__31330 = G__31471;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31326);
if(temp__5823__auto__){
var seq__31326__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31326__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__31326__$1);
var G__31473 = cljs.core.chunk_rest(seq__31326__$1);
var G__31474 = c__5694__auto__;
var G__31475 = cljs.core.count(c__5694__auto__);
var G__31476 = (0);
seq__31326 = G__31473;
chunk__31328 = G__31474;
count__31329 = G__31475;
i__31330 = G__31476;
continue;
} else {
var map__31354 = cljs.core.first(seq__31326__$1);
var map__31354__$1 = cljs.core.__destructure_map(map__31354);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31354__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31487 = cljs.core.next(seq__31326__$1);
var G__31488 = null;
var G__31489 = (0);
var G__31490 = (0);
seq__31326 = G__31487;
chunk__31328 = G__31488;
count__31329 = G__31489;
i__31330 = G__31490;
continue;
} else {
var G__31492 = cljs.core.next(seq__31326__$1);
var G__31493 = null;
var G__31494 = (0);
var G__31495 = (0);
seq__31326 = G__31492;
chunk__31328 = G__31493;
count__31329 = G__31494;
i__31330 = G__31495;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
