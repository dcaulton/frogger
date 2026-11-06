goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_28968 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_28968(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_28972 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_28972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28126 = coll;
var G__28127 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28126,G__28127) : shadow.dom.lazy_native_coll_seq.call(null,G__28126,G__28127));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28137 = arguments.length;
switch (G__28137) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28147 = arguments.length;
switch (G__28147) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28154 = arguments.length;
switch (G__28154) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28159 = arguments.length;
switch (G__28159) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28172 = arguments.length;
switch (G__28172) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28200 = arguments.length;
switch (G__28200) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28203){if((e28203 instanceof Object)){
var e = e28203;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28203;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28227 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28228 = null;
var count__28229 = (0);
var i__28230 = (0);
while(true){
if((i__28230 < count__28229)){
var el = chunk__28228.cljs$core$IIndexed$_nth$arity$2(null,i__28230);
var handler_29024__$1 = ((function (seq__28227,chunk__28228,count__28229,i__28230,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28227,chunk__28228,count__28229,i__28230,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29024__$1);


var G__29025 = seq__28227;
var G__29026 = chunk__28228;
var G__29027 = count__28229;
var G__29028 = (i__28230 + (1));
seq__28227 = G__29025;
chunk__28228 = G__29026;
count__28229 = G__29027;
i__28230 = G__29028;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28227);
if(temp__5823__auto__){
var seq__28227__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28227__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28227__$1);
var G__29030 = cljs.core.chunk_rest(seq__28227__$1);
var G__29031 = c__5694__auto__;
var G__29032 = cljs.core.count(c__5694__auto__);
var G__29033 = (0);
seq__28227 = G__29030;
chunk__28228 = G__29031;
count__28229 = G__29032;
i__28230 = G__29033;
continue;
} else {
var el = cljs.core.first(seq__28227__$1);
var handler_29034__$1 = ((function (seq__28227,chunk__28228,count__28229,i__28230,el,seq__28227__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28227,chunk__28228,count__28229,i__28230,el,seq__28227__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29034__$1);


var G__29037 = cljs.core.next(seq__28227__$1);
var G__29038 = null;
var G__29039 = (0);
var G__29040 = (0);
seq__28227 = G__29037;
chunk__28228 = G__29038;
count__28229 = G__29039;
i__28230 = G__29040;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28239 = arguments.length;
switch (G__28239) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28242 = cljs.core.seq(events);
var chunk__28243 = null;
var count__28244 = (0);
var i__28245 = (0);
while(true){
if((i__28245 < count__28244)){
var vec__28256 = chunk__28243.cljs$core$IIndexed$_nth$arity$2(null,i__28245);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29050 = seq__28242;
var G__29051 = chunk__28243;
var G__29052 = count__28244;
var G__29053 = (i__28245 + (1));
seq__28242 = G__29050;
chunk__28243 = G__29051;
count__28244 = G__29052;
i__28245 = G__29053;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28242);
if(temp__5823__auto__){
var seq__28242__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28242__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28242__$1);
var G__29056 = cljs.core.chunk_rest(seq__28242__$1);
var G__29057 = c__5694__auto__;
var G__29058 = cljs.core.count(c__5694__auto__);
var G__29059 = (0);
seq__28242 = G__29056;
chunk__28243 = G__29057;
count__28244 = G__29058;
i__28245 = G__29059;
continue;
} else {
var vec__28260 = cljs.core.first(seq__28242__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29066 = cljs.core.next(seq__28242__$1);
var G__29067 = null;
var G__29068 = (0);
var G__29069 = (0);
seq__28242 = G__29066;
chunk__28243 = G__29067;
count__28244 = G__29068;
i__28245 = G__29069;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28263 = cljs.core.seq(styles);
var chunk__28264 = null;
var count__28265 = (0);
var i__28266 = (0);
while(true){
if((i__28266 < count__28265)){
var vec__28278 = chunk__28264.cljs$core$IIndexed$_nth$arity$2(null,i__28266);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29084 = seq__28263;
var G__29085 = chunk__28264;
var G__29086 = count__28265;
var G__29087 = (i__28266 + (1));
seq__28263 = G__29084;
chunk__28264 = G__29085;
count__28265 = G__29086;
i__28266 = G__29087;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28263);
if(temp__5823__auto__){
var seq__28263__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28263__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28263__$1);
var G__29088 = cljs.core.chunk_rest(seq__28263__$1);
var G__29089 = c__5694__auto__;
var G__29090 = cljs.core.count(c__5694__auto__);
var G__29091 = (0);
seq__28263 = G__29088;
chunk__28264 = G__29089;
count__28265 = G__29090;
i__28266 = G__29091;
continue;
} else {
var vec__28283 = cljs.core.first(seq__28263__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29093 = cljs.core.next(seq__28263__$1);
var G__29094 = null;
var G__29095 = (0);
var G__29096 = (0);
seq__28263 = G__29093;
chunk__28264 = G__29094;
count__28265 = G__29095;
i__28266 = G__29096;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28310_29098 = key;
var G__28310_29099__$1 = (((G__28310_29098 instanceof cljs.core.Keyword))?G__28310_29098.fqn:null);
switch (G__28310_29099__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29106 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_29106,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_29106,"aria-");
}
})())){
el.setAttribute(ks_29106,value);
} else {
(el[ks_29106] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28359){
var map__28360 = p__28359;
var map__28360__$1 = cljs.core.__destructure_map(map__28360);
var props = map__28360__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28360__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28361 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28365 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28365,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28365;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28369 = arguments.length;
switch (G__28369) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28374){
var vec__28376 = p__28374;
var seq__28377 = cljs.core.seq(vec__28376);
var first__28378 = cljs.core.first(seq__28377);
var seq__28377__$1 = cljs.core.next(seq__28377);
var nn = first__28378;
var first__28378__$1 = cljs.core.first(seq__28377__$1);
var seq__28377__$2 = cljs.core.next(seq__28377__$1);
var np = first__28378__$1;
var nc = seq__28377__$2;
var node = vec__28376;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28382 = nn;
var G__28383 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28382,G__28383) : create_fn.call(null,G__28382,G__28383));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28384 = nn;
var G__28385 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28384,G__28385) : create_fn.call(null,G__28384,G__28385));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28386 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(1),null);
var seq__28389_29121 = cljs.core.seq(node_children);
var chunk__28390_29122 = null;
var count__28391_29123 = (0);
var i__28392_29124 = (0);
while(true){
if((i__28392_29124 < count__28391_29123)){
var child_struct_29126 = chunk__28390_29122.cljs$core$IIndexed$_nth$arity$2(null,i__28392_29124);
var children_29127 = shadow.dom.dom_node(child_struct_29126);
if(cljs.core.seq_QMARK_(children_29127)){
var seq__28419_29128 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29127));
var chunk__28421_29129 = null;
var count__28422_29130 = (0);
var i__28423_29131 = (0);
while(true){
if((i__28423_29131 < count__28422_29130)){
var child_29132 = chunk__28421_29129.cljs$core$IIndexed$_nth$arity$2(null,i__28423_29131);
if(cljs.core.truth_(child_29132)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29132);


var G__29134 = seq__28419_29128;
var G__29135 = chunk__28421_29129;
var G__29136 = count__28422_29130;
var G__29137 = (i__28423_29131 + (1));
seq__28419_29128 = G__29134;
chunk__28421_29129 = G__29135;
count__28422_29130 = G__29136;
i__28423_29131 = G__29137;
continue;
} else {
var G__29138 = seq__28419_29128;
var G__29139 = chunk__28421_29129;
var G__29140 = count__28422_29130;
var G__29141 = (i__28423_29131 + (1));
seq__28419_29128 = G__29138;
chunk__28421_29129 = G__29139;
count__28422_29130 = G__29140;
i__28423_29131 = G__29141;
continue;
}
} else {
var temp__5823__auto___29142 = cljs.core.seq(seq__28419_29128);
if(temp__5823__auto___29142){
var seq__28419_29143__$1 = temp__5823__auto___29142;
if(cljs.core.chunked_seq_QMARK_(seq__28419_29143__$1)){
var c__5694__auto___29144 = cljs.core.chunk_first(seq__28419_29143__$1);
var G__29145 = cljs.core.chunk_rest(seq__28419_29143__$1);
var G__29146 = c__5694__auto___29144;
var G__29147 = cljs.core.count(c__5694__auto___29144);
var G__29148 = (0);
seq__28419_29128 = G__29145;
chunk__28421_29129 = G__29146;
count__28422_29130 = G__29147;
i__28423_29131 = G__29148;
continue;
} else {
var child_29149 = cljs.core.first(seq__28419_29143__$1);
if(cljs.core.truth_(child_29149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29149);


var G__29150 = cljs.core.next(seq__28419_29143__$1);
var G__29151 = null;
var G__29152 = (0);
var G__29153 = (0);
seq__28419_29128 = G__29150;
chunk__28421_29129 = G__29151;
count__28422_29130 = G__29152;
i__28423_29131 = G__29153;
continue;
} else {
var G__29154 = cljs.core.next(seq__28419_29143__$1);
var G__29155 = null;
var G__29156 = (0);
var G__29157 = (0);
seq__28419_29128 = G__29154;
chunk__28421_29129 = G__29155;
count__28422_29130 = G__29156;
i__28423_29131 = G__29157;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29127);
}


var G__29158 = seq__28389_29121;
var G__29159 = chunk__28390_29122;
var G__29160 = count__28391_29123;
var G__29161 = (i__28392_29124 + (1));
seq__28389_29121 = G__29158;
chunk__28390_29122 = G__29159;
count__28391_29123 = G__29160;
i__28392_29124 = G__29161;
continue;
} else {
var temp__5823__auto___29163 = cljs.core.seq(seq__28389_29121);
if(temp__5823__auto___29163){
var seq__28389_29164__$1 = temp__5823__auto___29163;
if(cljs.core.chunked_seq_QMARK_(seq__28389_29164__$1)){
var c__5694__auto___29165 = cljs.core.chunk_first(seq__28389_29164__$1);
var G__29166 = cljs.core.chunk_rest(seq__28389_29164__$1);
var G__29167 = c__5694__auto___29165;
var G__29168 = cljs.core.count(c__5694__auto___29165);
var G__29169 = (0);
seq__28389_29121 = G__29166;
chunk__28390_29122 = G__29167;
count__28391_29123 = G__29168;
i__28392_29124 = G__29169;
continue;
} else {
var child_struct_29170 = cljs.core.first(seq__28389_29164__$1);
var children_29173 = shadow.dom.dom_node(child_struct_29170);
if(cljs.core.seq_QMARK_(children_29173)){
var seq__28436_29176 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29173));
var chunk__28438_29177 = null;
var count__28439_29178 = (0);
var i__28440_29179 = (0);
while(true){
if((i__28440_29179 < count__28439_29178)){
var child_29180 = chunk__28438_29177.cljs$core$IIndexed$_nth$arity$2(null,i__28440_29179);
if(cljs.core.truth_(child_29180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29180);


var G__29185 = seq__28436_29176;
var G__29186 = chunk__28438_29177;
var G__29187 = count__28439_29178;
var G__29188 = (i__28440_29179 + (1));
seq__28436_29176 = G__29185;
chunk__28438_29177 = G__29186;
count__28439_29178 = G__29187;
i__28440_29179 = G__29188;
continue;
} else {
var G__29189 = seq__28436_29176;
var G__29190 = chunk__28438_29177;
var G__29191 = count__28439_29178;
var G__29192 = (i__28440_29179 + (1));
seq__28436_29176 = G__29189;
chunk__28438_29177 = G__29190;
count__28439_29178 = G__29191;
i__28440_29179 = G__29192;
continue;
}
} else {
var temp__5823__auto___29193__$1 = cljs.core.seq(seq__28436_29176);
if(temp__5823__auto___29193__$1){
var seq__28436_29194__$1 = temp__5823__auto___29193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28436_29194__$1)){
var c__5694__auto___29195 = cljs.core.chunk_first(seq__28436_29194__$1);
var G__29196 = cljs.core.chunk_rest(seq__28436_29194__$1);
var G__29197 = c__5694__auto___29195;
var G__29198 = cljs.core.count(c__5694__auto___29195);
var G__29199 = (0);
seq__28436_29176 = G__29196;
chunk__28438_29177 = G__29197;
count__28439_29178 = G__29198;
i__28440_29179 = G__29199;
continue;
} else {
var child_29200 = cljs.core.first(seq__28436_29194__$1);
if(cljs.core.truth_(child_29200)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29200);


var G__29201 = cljs.core.next(seq__28436_29194__$1);
var G__29202 = null;
var G__29203 = (0);
var G__29204 = (0);
seq__28436_29176 = G__29201;
chunk__28438_29177 = G__29202;
count__28439_29178 = G__29203;
i__28440_29179 = G__29204;
continue;
} else {
var G__29205 = cljs.core.next(seq__28436_29194__$1);
var G__29206 = null;
var G__29207 = (0);
var G__29208 = (0);
seq__28436_29176 = G__29205;
chunk__28438_29177 = G__29206;
count__28439_29178 = G__29207;
i__28440_29179 = G__29208;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29173);
}


var G__29209 = cljs.core.next(seq__28389_29164__$1);
var G__29210 = null;
var G__29211 = (0);
var G__29212 = (0);
seq__28389_29121 = G__29209;
chunk__28390_29122 = G__29210;
count__28391_29123 = G__29211;
i__28392_29124 = G__29212;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28450 = cljs.core.seq(node);
var chunk__28451 = null;
var count__28452 = (0);
var i__28453 = (0);
while(true){
if((i__28453 < count__28452)){
var n = chunk__28451.cljs$core$IIndexed$_nth$arity$2(null,i__28453);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29218 = seq__28450;
var G__29219 = chunk__28451;
var G__29220 = count__28452;
var G__29221 = (i__28453 + (1));
seq__28450 = G__29218;
chunk__28451 = G__29219;
count__28452 = G__29220;
i__28453 = G__29221;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28450);
if(temp__5823__auto__){
var seq__28450__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28450__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28450__$1);
var G__29223 = cljs.core.chunk_rest(seq__28450__$1);
var G__29224 = c__5694__auto__;
var G__29225 = cljs.core.count(c__5694__auto__);
var G__29226 = (0);
seq__28450 = G__29223;
chunk__28451 = G__29224;
count__28452 = G__29225;
i__28453 = G__29226;
continue;
} else {
var n = cljs.core.first(seq__28450__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29227 = cljs.core.next(seq__28450__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__28450 = G__29227;
chunk__28451 = G__29228;
count__28452 = G__29229;
i__28453 = G__29230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28469 = arguments.length;
switch (G__28469) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28485 = arguments.length;
switch (G__28485) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28501 = arguments.length;
switch (G__28501) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29253 = arguments.length;
var i__5898__auto___29254 = (0);
while(true){
if((i__5898__auto___29254 < len__5897__auto___29253)){
args__5903__auto__.push((arguments[i__5898__auto___29254]));

var G__29256 = (i__5898__auto___29254 + (1));
i__5898__auto___29254 = G__29256;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28514_29259 = cljs.core.seq(nodes);
var chunk__28515_29260 = null;
var count__28516_29261 = (0);
var i__28517_29262 = (0);
while(true){
if((i__28517_29262 < count__28516_29261)){
var node_29264 = chunk__28515_29260.cljs$core$IIndexed$_nth$arity$2(null,i__28517_29262);
fragment.appendChild(shadow.dom._to_dom(node_29264));


var G__29265 = seq__28514_29259;
var G__29266 = chunk__28515_29260;
var G__29267 = count__28516_29261;
var G__29268 = (i__28517_29262 + (1));
seq__28514_29259 = G__29265;
chunk__28515_29260 = G__29266;
count__28516_29261 = G__29267;
i__28517_29262 = G__29268;
continue;
} else {
var temp__5823__auto___29270 = cljs.core.seq(seq__28514_29259);
if(temp__5823__auto___29270){
var seq__28514_29271__$1 = temp__5823__auto___29270;
if(cljs.core.chunked_seq_QMARK_(seq__28514_29271__$1)){
var c__5694__auto___29272 = cljs.core.chunk_first(seq__28514_29271__$1);
var G__29273 = cljs.core.chunk_rest(seq__28514_29271__$1);
var G__29274 = c__5694__auto___29272;
var G__29275 = cljs.core.count(c__5694__auto___29272);
var G__29276 = (0);
seq__28514_29259 = G__29273;
chunk__28515_29260 = G__29274;
count__28516_29261 = G__29275;
i__28517_29262 = G__29276;
continue;
} else {
var node_29279 = cljs.core.first(seq__28514_29271__$1);
fragment.appendChild(shadow.dom._to_dom(node_29279));


var G__29281 = cljs.core.next(seq__28514_29271__$1);
var G__29282 = null;
var G__29283 = (0);
var G__29284 = (0);
seq__28514_29259 = G__29281;
chunk__28515_29260 = G__29282;
count__28516_29261 = G__29283;
i__28517_29262 = G__29284;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28512){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28512));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28523_29288 = cljs.core.seq(scripts);
var chunk__28524_29289 = null;
var count__28525_29290 = (0);
var i__28526_29291 = (0);
while(true){
if((i__28526_29291 < count__28525_29290)){
var vec__28536_29292 = chunk__28524_29289.cljs$core$IIndexed$_nth$arity$2(null,i__28526_29291);
var script_tag_29293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536_29292,(0),null);
var script_body_29294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536_29292,(1),null);
eval(script_body_29294);


var G__29295 = seq__28523_29288;
var G__29296 = chunk__28524_29289;
var G__29297 = count__28525_29290;
var G__29298 = (i__28526_29291 + (1));
seq__28523_29288 = G__29295;
chunk__28524_29289 = G__29296;
count__28525_29290 = G__29297;
i__28526_29291 = G__29298;
continue;
} else {
var temp__5823__auto___29299 = cljs.core.seq(seq__28523_29288);
if(temp__5823__auto___29299){
var seq__28523_29300__$1 = temp__5823__auto___29299;
if(cljs.core.chunked_seq_QMARK_(seq__28523_29300__$1)){
var c__5694__auto___29301 = cljs.core.chunk_first(seq__28523_29300__$1);
var G__29302 = cljs.core.chunk_rest(seq__28523_29300__$1);
var G__29303 = c__5694__auto___29301;
var G__29304 = cljs.core.count(c__5694__auto___29301);
var G__29305 = (0);
seq__28523_29288 = G__29302;
chunk__28524_29289 = G__29303;
count__28525_29290 = G__29304;
i__28526_29291 = G__29305;
continue;
} else {
var vec__28560_29308 = cljs.core.first(seq__28523_29300__$1);
var script_tag_29309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28560_29308,(0),null);
var script_body_29310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28560_29308,(1),null);
eval(script_body_29310);


var G__29311 = cljs.core.next(seq__28523_29300__$1);
var G__29312 = null;
var G__29313 = (0);
var G__29314 = (0);
seq__28523_29288 = G__29311;
chunk__28524_29289 = G__29312;
count__28525_29290 = G__29313;
i__28526_29291 = G__29314;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28563){
var vec__28564 = p__28563;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28569 = arguments.length;
switch (G__28569) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28578 = cljs.core.seq(style_keys);
var chunk__28579 = null;
var count__28580 = (0);
var i__28581 = (0);
while(true){
if((i__28581 < count__28580)){
var it = chunk__28579.cljs$core$IIndexed$_nth$arity$2(null,i__28581);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29320 = seq__28578;
var G__29321 = chunk__28579;
var G__29322 = count__28580;
var G__29323 = (i__28581 + (1));
seq__28578 = G__29320;
chunk__28579 = G__29321;
count__28580 = G__29322;
i__28581 = G__29323;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28578);
if(temp__5823__auto__){
var seq__28578__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28578__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28578__$1);
var G__29326 = cljs.core.chunk_rest(seq__28578__$1);
var G__29327 = c__5694__auto__;
var G__29328 = cljs.core.count(c__5694__auto__);
var G__29329 = (0);
seq__28578 = G__29326;
chunk__28579 = G__29327;
count__28580 = G__29328;
i__28581 = G__29329;
continue;
} else {
var it = cljs.core.first(seq__28578__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29330 = cljs.core.next(seq__28578__$1);
var G__29331 = null;
var G__29332 = (0);
var G__29333 = (0);
seq__28578 = G__29330;
chunk__28579 = G__29331;
count__28580 = G__29332;
i__28581 = G__29333;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28591,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28645 = k28591;
var G__28645__$1 = (((G__28645 instanceof cljs.core.Keyword))?G__28645.fqn:null);
switch (G__28645__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28591,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28648){
var vec__28649 = p__28648;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28590){
var self__ = this;
var G__28590__$1 = this;
return (new cljs.core.RecordIter((0),G__28590__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28592,other28593){
var self__ = this;
var this28592__$1 = this;
return (((!((other28593 == null)))) && ((((this28592__$1.constructor === other28593.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28592__$1.x,other28593.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28592__$1.y,other28593.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28592__$1.__extmap,other28593.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28591){
var self__ = this;
var this__5476__auto____$1 = this;
var G__28661 = k28591;
var G__28661__$1 = (((G__28661 instanceof cljs.core.Keyword))?G__28661.fqn:null);
switch (G__28661__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28591);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28590){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28664 = cljs.core.keyword_identical_QMARK_;
var expr__28665 = k__5478__auto__;
if(cljs.core.truth_((pred__28664.cljs$core$IFn$_invoke$arity$2 ? pred__28664.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28665) : pred__28664.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28665)))){
return (new shadow.dom.Coordinate(G__28590,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28664.cljs$core$IFn$_invoke$arity$2 ? pred__28664.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28665) : pred__28664.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28665)))){
return (new shadow.dom.Coordinate(self__.x,G__28590,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28590),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28590){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28590,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28616){
var extmap__5511__auto__ = (function (){var G__28673 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28616,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28616)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28673);
} else {
return G__28673;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28616),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28616),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28682,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28689 = k28682;
var G__28689__$1 = (((G__28689 instanceof cljs.core.Keyword))?G__28689.fqn:null);
switch (G__28689__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28682,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28691){
var vec__28692 = p__28691;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28692,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28692,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28681){
var self__ = this;
var G__28681__$1 = this;
return (new cljs.core.RecordIter((0),G__28681__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28683,other28684){
var self__ = this;
var this28683__$1 = this;
return (((!((other28684 == null)))) && ((((this28683__$1.constructor === other28684.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28683__$1.w,other28684.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28683__$1.h,other28684.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28683__$1.__extmap,other28684.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28682){
var self__ = this;
var this__5476__auto____$1 = this;
var G__28706 = k28682;
var G__28706__$1 = (((G__28706 instanceof cljs.core.Keyword))?G__28706.fqn:null);
switch (G__28706__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28682);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28681){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28708 = cljs.core.keyword_identical_QMARK_;
var expr__28709 = k__5478__auto__;
if(cljs.core.truth_((pred__28708.cljs$core$IFn$_invoke$arity$2 ? pred__28708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28709) : pred__28708.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__28709)))){
return (new shadow.dom.Size(G__28681,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28708.cljs$core$IFn$_invoke$arity$2 ? pred__28708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28709) : pred__28708.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__28709)))){
return (new shadow.dom.Size(self__.w,G__28681,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28681),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28681){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28681,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28687){
var extmap__5511__auto__ = (function (){var G__28716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28687,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28687)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28716);
} else {
return G__28716;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28687),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28687),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__29393 = (i + (1));
var G__29394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29393;
ret = G__29394;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28753){
var vec__28754 = p__28753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28754,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28759 = arguments.length;
switch (G__28759) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29407 = ps;
var G__29408 = (i + (1));
el__$1 = G__29407;
i = G__29408;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28781 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28784_29420 = cljs.core.seq(props);
var chunk__28785_29421 = null;
var count__28786_29422 = (0);
var i__28787_29423 = (0);
while(true){
if((i__28787_29423 < count__28786_29422)){
var vec__28801_29424 = chunk__28785_29421.cljs$core$IIndexed$_nth$arity$2(null,i__28787_29423);
var k_29425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801_29424,(0),null);
var v_29426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801_29424,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_29425);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29425),v_29426);


var G__29428 = seq__28784_29420;
var G__29429 = chunk__28785_29421;
var G__29430 = count__28786_29422;
var G__29431 = (i__28787_29423 + (1));
seq__28784_29420 = G__29428;
chunk__28785_29421 = G__29429;
count__28786_29422 = G__29430;
i__28787_29423 = G__29431;
continue;
} else {
var temp__5823__auto___29432 = cljs.core.seq(seq__28784_29420);
if(temp__5823__auto___29432){
var seq__28784_29433__$1 = temp__5823__auto___29432;
if(cljs.core.chunked_seq_QMARK_(seq__28784_29433__$1)){
var c__5694__auto___29434 = cljs.core.chunk_first(seq__28784_29433__$1);
var G__29436 = cljs.core.chunk_rest(seq__28784_29433__$1);
var G__29437 = c__5694__auto___29434;
var G__29438 = cljs.core.count(c__5694__auto___29434);
var G__29439 = (0);
seq__28784_29420 = G__29436;
chunk__28785_29421 = G__29437;
count__28786_29422 = G__29438;
i__28787_29423 = G__29439;
continue;
} else {
var vec__28807_29440 = cljs.core.first(seq__28784_29433__$1);
var k_29441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807_29440,(0),null);
var v_29442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807_29440,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_29441);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29441),v_29442);


var G__29443 = cljs.core.next(seq__28784_29433__$1);
var G__29444 = null;
var G__29445 = (0);
var G__29446 = (0);
seq__28784_29420 = G__29443;
chunk__28785_29421 = G__29444;
count__28786_29422 = G__29445;
i__28787_29423 = G__29446;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28818 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(1),null);
var seq__28821_29449 = cljs.core.seq(node_children);
var chunk__28823_29450 = null;
var count__28824_29451 = (0);
var i__28825_29452 = (0);
while(true){
if((i__28825_29452 < count__28824_29451)){
var child_struct_29453 = chunk__28823_29450.cljs$core$IIndexed$_nth$arity$2(null,i__28825_29452);
if((!((child_struct_29453 == null)))){
if(typeof child_struct_29453 === 'string'){
var text_29457 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29457)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29453)));
} else {
var children_29458 = shadow.dom.svg_node(child_struct_29453);
if(cljs.core.seq_QMARK_(children_29458)){
var seq__28877_29459 = cljs.core.seq(children_29458);
var chunk__28879_29460 = null;
var count__28880_29461 = (0);
var i__28881_29462 = (0);
while(true){
if((i__28881_29462 < count__28880_29461)){
var child_29463 = chunk__28879_29460.cljs$core$IIndexed$_nth$arity$2(null,i__28881_29462);
if(cljs.core.truth_(child_29463)){
node.appendChild(child_29463);


var G__29469 = seq__28877_29459;
var G__29470 = chunk__28879_29460;
var G__29471 = count__28880_29461;
var G__29472 = (i__28881_29462 + (1));
seq__28877_29459 = G__29469;
chunk__28879_29460 = G__29470;
count__28880_29461 = G__29471;
i__28881_29462 = G__29472;
continue;
} else {
var G__29473 = seq__28877_29459;
var G__29474 = chunk__28879_29460;
var G__29475 = count__28880_29461;
var G__29476 = (i__28881_29462 + (1));
seq__28877_29459 = G__29473;
chunk__28879_29460 = G__29474;
count__28880_29461 = G__29475;
i__28881_29462 = G__29476;
continue;
}
} else {
var temp__5823__auto___29477 = cljs.core.seq(seq__28877_29459);
if(temp__5823__auto___29477){
var seq__28877_29478__$1 = temp__5823__auto___29477;
if(cljs.core.chunked_seq_QMARK_(seq__28877_29478__$1)){
var c__5694__auto___29479 = cljs.core.chunk_first(seq__28877_29478__$1);
var G__29480 = cljs.core.chunk_rest(seq__28877_29478__$1);
var G__29481 = c__5694__auto___29479;
var G__29482 = cljs.core.count(c__5694__auto___29479);
var G__29483 = (0);
seq__28877_29459 = G__29480;
chunk__28879_29460 = G__29481;
count__28880_29461 = G__29482;
i__28881_29462 = G__29483;
continue;
} else {
var child_29485 = cljs.core.first(seq__28877_29478__$1);
if(cljs.core.truth_(child_29485)){
node.appendChild(child_29485);


var G__29486 = cljs.core.next(seq__28877_29478__$1);
var G__29487 = null;
var G__29488 = (0);
var G__29489 = (0);
seq__28877_29459 = G__29486;
chunk__28879_29460 = G__29487;
count__28880_29461 = G__29488;
i__28881_29462 = G__29489;
continue;
} else {
var G__29490 = cljs.core.next(seq__28877_29478__$1);
var G__29491 = null;
var G__29492 = (0);
var G__29493 = (0);
seq__28877_29459 = G__29490;
chunk__28879_29460 = G__29491;
count__28880_29461 = G__29492;
i__28881_29462 = G__29493;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29458);
}
}


var G__29498 = seq__28821_29449;
var G__29499 = chunk__28823_29450;
var G__29500 = count__28824_29451;
var G__29501 = (i__28825_29452 + (1));
seq__28821_29449 = G__29498;
chunk__28823_29450 = G__29499;
count__28824_29451 = G__29500;
i__28825_29452 = G__29501;
continue;
} else {
var G__29503 = seq__28821_29449;
var G__29504 = chunk__28823_29450;
var G__29505 = count__28824_29451;
var G__29506 = (i__28825_29452 + (1));
seq__28821_29449 = G__29503;
chunk__28823_29450 = G__29504;
count__28824_29451 = G__29505;
i__28825_29452 = G__29506;
continue;
}
} else {
var temp__5823__auto___29509 = cljs.core.seq(seq__28821_29449);
if(temp__5823__auto___29509){
var seq__28821_29510__$1 = temp__5823__auto___29509;
if(cljs.core.chunked_seq_QMARK_(seq__28821_29510__$1)){
var c__5694__auto___29511 = cljs.core.chunk_first(seq__28821_29510__$1);
var G__29512 = cljs.core.chunk_rest(seq__28821_29510__$1);
var G__29513 = c__5694__auto___29511;
var G__29514 = cljs.core.count(c__5694__auto___29511);
var G__29515 = (0);
seq__28821_29449 = G__29512;
chunk__28823_29450 = G__29513;
count__28824_29451 = G__29514;
i__28825_29452 = G__29515;
continue;
} else {
var child_struct_29516 = cljs.core.first(seq__28821_29510__$1);
if((!((child_struct_29516 == null)))){
if(typeof child_struct_29516 === 'string'){
var text_29517 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29517)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29516)));
} else {
var children_29518 = shadow.dom.svg_node(child_struct_29516);
if(cljs.core.seq_QMARK_(children_29518)){
var seq__28899_29519 = cljs.core.seq(children_29518);
var chunk__28902_29520 = null;
var count__28903_29521 = (0);
var i__28904_29522 = (0);
while(true){
if((i__28904_29522 < count__28903_29521)){
var child_29524 = chunk__28902_29520.cljs$core$IIndexed$_nth$arity$2(null,i__28904_29522);
if(cljs.core.truth_(child_29524)){
node.appendChild(child_29524);


var G__29526 = seq__28899_29519;
var G__29527 = chunk__28902_29520;
var G__29528 = count__28903_29521;
var G__29529 = (i__28904_29522 + (1));
seq__28899_29519 = G__29526;
chunk__28902_29520 = G__29527;
count__28903_29521 = G__29528;
i__28904_29522 = G__29529;
continue;
} else {
var G__29530 = seq__28899_29519;
var G__29531 = chunk__28902_29520;
var G__29532 = count__28903_29521;
var G__29533 = (i__28904_29522 + (1));
seq__28899_29519 = G__29530;
chunk__28902_29520 = G__29531;
count__28903_29521 = G__29532;
i__28904_29522 = G__29533;
continue;
}
} else {
var temp__5823__auto___29535__$1 = cljs.core.seq(seq__28899_29519);
if(temp__5823__auto___29535__$1){
var seq__28899_29536__$1 = temp__5823__auto___29535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28899_29536__$1)){
var c__5694__auto___29537 = cljs.core.chunk_first(seq__28899_29536__$1);
var G__29539 = cljs.core.chunk_rest(seq__28899_29536__$1);
var G__29540 = c__5694__auto___29537;
var G__29541 = cljs.core.count(c__5694__auto___29537);
var G__29542 = (0);
seq__28899_29519 = G__29539;
chunk__28902_29520 = G__29540;
count__28903_29521 = G__29541;
i__28904_29522 = G__29542;
continue;
} else {
var child_29543 = cljs.core.first(seq__28899_29536__$1);
if(cljs.core.truth_(child_29543)){
node.appendChild(child_29543);


var G__29545 = cljs.core.next(seq__28899_29536__$1);
var G__29546 = null;
var G__29547 = (0);
var G__29548 = (0);
seq__28899_29519 = G__29545;
chunk__28902_29520 = G__29546;
count__28903_29521 = G__29547;
i__28904_29522 = G__29548;
continue;
} else {
var G__29549 = cljs.core.next(seq__28899_29536__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__28899_29519 = G__29549;
chunk__28902_29520 = G__29550;
count__28903_29521 = G__29551;
i__28904_29522 = G__29552;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29518);
}
}


var G__29553 = cljs.core.next(seq__28821_29510__$1);
var G__29554 = null;
var G__29555 = (0);
var G__29556 = (0);
seq__28821_29449 = G__29553;
chunk__28823_29450 = G__29554;
count__28824_29451 = G__29555;
i__28825_29452 = G__29556;
continue;
} else {
var G__29557 = cljs.core.next(seq__28821_29510__$1);
var G__29558 = null;
var G__29559 = (0);
var G__29560 = (0);
seq__28821_29449 = G__29557;
chunk__28823_29450 = G__29558;
count__28824_29451 = G__29559;
i__28825_29452 = G__29560;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29563 = arguments.length;
var i__5898__auto___29565 = (0);
while(true){
if((i__5898__auto___29565 < len__5897__auto___29563)){
args__5903__auto__.push((arguments[i__5898__auto___29565]));

var G__29568 = (i__5898__auto___29565 + (1));
i__5898__auto___29565 = G__29568;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq28945){
var G__28946 = cljs.core.first(seq28945);
var seq28945__$1 = cljs.core.next(seq28945);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28946,seq28945__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
