goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___37627 = arguments.length;
var i__5898__auto___37628 = (0);
while(true){
if((i__5898__auto___37628 < len__5897__auto___37627)){
args__5903__auto__.push((arguments[i__5898__auto___37628]));

var G__37629 = (i__5898__auto___37628 + (1));
i__5898__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37186){
var G__37187 = cljs.core.first(seq37186);
var seq37186__$1 = cljs.core.next(seq37186);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37187,seq37186__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37188 = cljs.core.seq(sources);
var chunk__37189 = null;
var count__37190 = (0);
var i__37191 = (0);
while(true){
if((i__37191 < count__37190)){
var map__37200 = chunk__37189.cljs$core$IIndexed$_nth$arity$2(null,i__37191);
var map__37200__$1 = cljs.core.__destructure_map(map__37200);
var src = map__37200__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e37202){var e_37630 = e37202;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_37630);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37630.message))));
}

var G__37631 = seq__37188;
var G__37632 = chunk__37189;
var G__37633 = count__37190;
var G__37634 = (i__37191 + (1));
seq__37188 = G__37631;
chunk__37189 = G__37632;
count__37190 = G__37633;
i__37191 = G__37634;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37188);
if(temp__5823__auto__){
var seq__37188__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37188__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37188__$1);
var G__37636 = cljs.core.chunk_rest(seq__37188__$1);
var G__37637 = c__5694__auto__;
var G__37638 = cljs.core.count(c__5694__auto__);
var G__37639 = (0);
seq__37188 = G__37636;
chunk__37189 = G__37637;
count__37190 = G__37638;
i__37191 = G__37639;
continue;
} else {
var map__37203 = cljs.core.first(seq__37188__$1);
var map__37203__$1 = cljs.core.__destructure_map(map__37203);
var src = map__37203__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e37204){var e_37641 = e37204;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_37641);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37641.message))));
}

var G__37642 = cljs.core.next(seq__37188__$1);
var G__37643 = null;
var G__37644 = (0);
var G__37645 = (0);
seq__37188 = G__37642;
chunk__37189 = G__37643;
count__37190 = G__37644;
i__37191 = G__37645;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37205 = cljs.core.seq(js_requires);
var chunk__37206 = null;
var count__37207 = (0);
var i__37208 = (0);
while(true){
if((i__37208 < count__37207)){
var js_ns = chunk__37206.cljs$core$IIndexed$_nth$arity$2(null,i__37208);
var require_str_37646 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_37646);


var G__37647 = seq__37205;
var G__37648 = chunk__37206;
var G__37649 = count__37207;
var G__37650 = (i__37208 + (1));
seq__37205 = G__37647;
chunk__37206 = G__37648;
count__37207 = G__37649;
i__37208 = G__37650;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37205);
if(temp__5823__auto__){
var seq__37205__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37205__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37205__$1);
var G__37651 = cljs.core.chunk_rest(seq__37205__$1);
var G__37652 = c__5694__auto__;
var G__37653 = cljs.core.count(c__5694__auto__);
var G__37654 = (0);
seq__37205 = G__37651;
chunk__37206 = G__37652;
count__37207 = G__37653;
i__37208 = G__37654;
continue;
} else {
var js_ns = cljs.core.first(seq__37205__$1);
var require_str_37655 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_37655);


var G__37656 = cljs.core.next(seq__37205__$1);
var G__37657 = null;
var G__37658 = (0);
var G__37659 = (0);
seq__37205 = G__37656;
chunk__37206 = G__37657;
count__37207 = G__37658;
i__37208 = G__37659;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37210){
var map__37211 = p__37210;
var map__37211__$1 = cljs.core.__destructure_map(map__37211);
var msg = map__37211__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37212(s__37213){
return (new cljs.core.LazySeq(null,(function (){
var s__37213__$1 = s__37213;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37213__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37218 = cljs.core.first(xs__6383__auto__);
var map__37218__$1 = cljs.core.__destructure_map(map__37218);
var src = map__37218__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__37213__$1,map__37218,map__37218__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37211,map__37211__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37212_$_iter__37214(s__37215){
return (new cljs.core.LazySeq(null,((function (s__37213__$1,map__37218,map__37218__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37211,map__37211__$1,msg,info,reload_info){
return (function (){
var s__37215__$1 = s__37215;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37215__$1);
if(temp__5823__auto____$1){
var s__37215__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37215__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37215__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37217 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37216 = (0);
while(true){
if((i__37216 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__37216);
cljs.core.chunk_append(b__37217,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37660 = (i__37216 + (1));
i__37216 = G__37660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37217),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37212_$_iter__37214(cljs.core.chunk_rest(s__37215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37217),null);
}
} else {
var warning = cljs.core.first(s__37215__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37212_$_iter__37214(cljs.core.rest(s__37215__$2)));
}
} else {
return null;
}
break;
}
});})(s__37213__$1,map__37218,map__37218__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37211,map__37211__$1,msg,info,reload_info))
,null,null));
});})(s__37213__$1,map__37218,map__37218__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37211,map__37211__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37212(cljs.core.rest(s__37213__$1)));
} else {
var G__37661 = cljs.core.rest(s__37213__$1);
s__37213__$1 = G__37661;
continue;
}
} else {
var G__37662 = cljs.core.rest(s__37213__$1);
s__37213__$1 = G__37662;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37222_37663 = cljs.core.seq(warnings);
var chunk__37223_37664 = null;
var count__37224_37665 = (0);
var i__37225_37666 = (0);
while(true){
if((i__37225_37666 < count__37224_37665)){
var map__37228_37667 = chunk__37223_37664.cljs$core$IIndexed$_nth$arity$2(null,i__37225_37666);
var map__37228_37668__$1 = cljs.core.__destructure_map(map__37228_37667);
var w_37669 = map__37228_37668__$1;
var msg_37670__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228_37668__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228_37668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228_37668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37228_37668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37673)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37671)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37672)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37670__$1)));


var G__37674 = seq__37222_37663;
var G__37675 = chunk__37223_37664;
var G__37676 = count__37224_37665;
var G__37677 = (i__37225_37666 + (1));
seq__37222_37663 = G__37674;
chunk__37223_37664 = G__37675;
count__37224_37665 = G__37676;
i__37225_37666 = G__37677;
continue;
} else {
var temp__5823__auto___37679 = cljs.core.seq(seq__37222_37663);
if(temp__5823__auto___37679){
var seq__37222_37680__$1 = temp__5823__auto___37679;
if(cljs.core.chunked_seq_QMARK_(seq__37222_37680__$1)){
var c__5694__auto___37681 = cljs.core.chunk_first(seq__37222_37680__$1);
var G__37682 = cljs.core.chunk_rest(seq__37222_37680__$1);
var G__37683 = c__5694__auto___37681;
var G__37684 = cljs.core.count(c__5694__auto___37681);
var G__37685 = (0);
seq__37222_37663 = G__37682;
chunk__37223_37664 = G__37683;
count__37224_37665 = G__37684;
i__37225_37666 = G__37685;
continue;
} else {
var map__37229_37686 = cljs.core.first(seq__37222_37680__$1);
var map__37229_37687__$1 = cljs.core.__destructure_map(map__37229_37686);
var w_37689 = map__37229_37687__$1;
var msg_37690__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37687__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37687__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37687__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37693)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37691)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37692)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37690__$1)));


var G__37695 = cljs.core.next(seq__37222_37680__$1);
var G__37696 = null;
var G__37697 = (0);
var G__37698 = (0);
seq__37222_37663 = G__37695;
chunk__37223_37664 = G__37696;
count__37224_37665 = G__37697;
i__37225_37666 = G__37698;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37209_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37209_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37230 = node_uri;
G__37230.setQuery(null);

G__37230.setPath(new$);

return G__37230;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37232){
var map__37233 = p__37232;
var map__37233__$1 = cljs.core.__destructure_map(map__37233);
var msg = map__37233__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37233__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37233__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37235 = cljs.core.seq(updates);
var chunk__37237 = null;
var count__37238 = (0);
var i__37239 = (0);
while(true){
if((i__37239 < count__37238)){
var path = chunk__37237.cljs$core$IIndexed$_nth$arity$2(null,i__37239);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37352_37705 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37356_37706 = null;
var count__37357_37707 = (0);
var i__37358_37708 = (0);
while(true){
if((i__37358_37708 < count__37357_37707)){
var node_37713 = chunk__37356_37706.cljs$core$IIndexed$_nth$arity$2(null,i__37358_37708);
if(cljs.core.not(node_37713.shadow$old)){
var path_match_37714 = shadow.cljs.devtools.client.browser.match_paths(node_37713.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37714)){
var new_link_37715 = (function (){var G__37390 = node_37713.cloneNode(true);
G__37390.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37714)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37390;
})();
(node_37713.shadow$old = true);

(new_link_37715.onload = ((function (seq__37352_37705,chunk__37356_37706,count__37357_37707,i__37358_37708,seq__37235,chunk__37237,count__37238,i__37239,new_link_37715,path_match_37714,node_37713,path,map__37233,map__37233__$1,msg,updates,reload_info){
return (function (e){
var seq__37391_37716 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37393_37717 = null;
var count__37394_37718 = (0);
var i__37395_37719 = (0);
while(true){
if((i__37395_37719 < count__37394_37718)){
var map__37401_37720 = chunk__37393_37717.cljs$core$IIndexed$_nth$arity$2(null,i__37395_37719);
var map__37401_37721__$1 = cljs.core.__destructure_map(map__37401_37720);
var task_37722 = map__37401_37721__$1;
var fn_str_37723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401_37721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401_37721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37725 = goog.getObjectByName(fn_str_37723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37724)));

(fn_obj_37725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37725.cljs$core$IFn$_invoke$arity$2(path,new_link_37715) : fn_obj_37725.call(null,path,new_link_37715));


var G__37726 = seq__37391_37716;
var G__37727 = chunk__37393_37717;
var G__37728 = count__37394_37718;
var G__37729 = (i__37395_37719 + (1));
seq__37391_37716 = G__37726;
chunk__37393_37717 = G__37727;
count__37394_37718 = G__37728;
i__37395_37719 = G__37729;
continue;
} else {
var temp__5823__auto___37730 = cljs.core.seq(seq__37391_37716);
if(temp__5823__auto___37730){
var seq__37391_37731__$1 = temp__5823__auto___37730;
if(cljs.core.chunked_seq_QMARK_(seq__37391_37731__$1)){
var c__5694__auto___37732 = cljs.core.chunk_first(seq__37391_37731__$1);
var G__37733 = cljs.core.chunk_rest(seq__37391_37731__$1);
var G__37734 = c__5694__auto___37732;
var G__37735 = cljs.core.count(c__5694__auto___37732);
var G__37736 = (0);
seq__37391_37716 = G__37733;
chunk__37393_37717 = G__37734;
count__37394_37718 = G__37735;
i__37395_37719 = G__37736;
continue;
} else {
var map__37408_37737 = cljs.core.first(seq__37391_37731__$1);
var map__37408_37738__$1 = cljs.core.__destructure_map(map__37408_37737);
var task_37739 = map__37408_37738__$1;
var fn_str_37740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408_37738__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408_37738__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37742 = goog.getObjectByName(fn_str_37740,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37741)));

(fn_obj_37742.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37742.cljs$core$IFn$_invoke$arity$2(path,new_link_37715) : fn_obj_37742.call(null,path,new_link_37715));


var G__37743 = cljs.core.next(seq__37391_37731__$1);
var G__37744 = null;
var G__37745 = (0);
var G__37746 = (0);
seq__37391_37716 = G__37743;
chunk__37393_37717 = G__37744;
count__37394_37718 = G__37745;
i__37395_37719 = G__37746;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37713);
});})(seq__37352_37705,chunk__37356_37706,count__37357_37707,i__37358_37708,seq__37235,chunk__37237,count__37238,i__37239,new_link_37715,path_match_37714,node_37713,path,map__37233,map__37233__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37714], 0));

goog.dom.insertSiblingAfter(new_link_37715,node_37713);


var G__37747 = seq__37352_37705;
var G__37748 = chunk__37356_37706;
var G__37749 = count__37357_37707;
var G__37750 = (i__37358_37708 + (1));
seq__37352_37705 = G__37747;
chunk__37356_37706 = G__37748;
count__37357_37707 = G__37749;
i__37358_37708 = G__37750;
continue;
} else {
var G__37751 = seq__37352_37705;
var G__37752 = chunk__37356_37706;
var G__37753 = count__37357_37707;
var G__37754 = (i__37358_37708 + (1));
seq__37352_37705 = G__37751;
chunk__37356_37706 = G__37752;
count__37357_37707 = G__37753;
i__37358_37708 = G__37754;
continue;
}
} else {
var G__37755 = seq__37352_37705;
var G__37756 = chunk__37356_37706;
var G__37757 = count__37357_37707;
var G__37758 = (i__37358_37708 + (1));
seq__37352_37705 = G__37755;
chunk__37356_37706 = G__37756;
count__37357_37707 = G__37757;
i__37358_37708 = G__37758;
continue;
}
} else {
var temp__5823__auto___37759 = cljs.core.seq(seq__37352_37705);
if(temp__5823__auto___37759){
var seq__37352_37760__$1 = temp__5823__auto___37759;
if(cljs.core.chunked_seq_QMARK_(seq__37352_37760__$1)){
var c__5694__auto___37761 = cljs.core.chunk_first(seq__37352_37760__$1);
var G__37762 = cljs.core.chunk_rest(seq__37352_37760__$1);
var G__37763 = c__5694__auto___37761;
var G__37764 = cljs.core.count(c__5694__auto___37761);
var G__37765 = (0);
seq__37352_37705 = G__37762;
chunk__37356_37706 = G__37763;
count__37357_37707 = G__37764;
i__37358_37708 = G__37765;
continue;
} else {
var node_37766 = cljs.core.first(seq__37352_37760__$1);
if(cljs.core.not(node_37766.shadow$old)){
var path_match_37769 = shadow.cljs.devtools.client.browser.match_paths(node_37766.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37769)){
var new_link_37770 = (function (){var G__37412 = node_37766.cloneNode(true);
G__37412.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37769)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37412;
})();
(node_37766.shadow$old = true);

(new_link_37770.onload = ((function (seq__37352_37705,chunk__37356_37706,count__37357_37707,i__37358_37708,seq__37235,chunk__37237,count__37238,i__37239,new_link_37770,path_match_37769,node_37766,seq__37352_37760__$1,temp__5823__auto___37759,path,map__37233,map__37233__$1,msg,updates,reload_info){
return (function (e){
var seq__37414_37771 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37416_37772 = null;
var count__37417_37773 = (0);
var i__37418_37774 = (0);
while(true){
if((i__37418_37774 < count__37417_37773)){
var map__37423_37775 = chunk__37416_37772.cljs$core$IIndexed$_nth$arity$2(null,i__37418_37774);
var map__37423_37776__$1 = cljs.core.__destructure_map(map__37423_37775);
var task_37777 = map__37423_37776__$1;
var fn_str_37778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423_37776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423_37776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37780 = goog.getObjectByName(fn_str_37778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37779)));

(fn_obj_37780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37780.cljs$core$IFn$_invoke$arity$2(path,new_link_37770) : fn_obj_37780.call(null,path,new_link_37770));


var G__37781 = seq__37414_37771;
var G__37782 = chunk__37416_37772;
var G__37783 = count__37417_37773;
var G__37784 = (i__37418_37774 + (1));
seq__37414_37771 = G__37781;
chunk__37416_37772 = G__37782;
count__37417_37773 = G__37783;
i__37418_37774 = G__37784;
continue;
} else {
var temp__5823__auto___37785__$1 = cljs.core.seq(seq__37414_37771);
if(temp__5823__auto___37785__$1){
var seq__37414_37786__$1 = temp__5823__auto___37785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37414_37786__$1)){
var c__5694__auto___37787 = cljs.core.chunk_first(seq__37414_37786__$1);
var G__37788 = cljs.core.chunk_rest(seq__37414_37786__$1);
var G__37789 = c__5694__auto___37787;
var G__37790 = cljs.core.count(c__5694__auto___37787);
var G__37791 = (0);
seq__37414_37771 = G__37788;
chunk__37416_37772 = G__37789;
count__37417_37773 = G__37790;
i__37418_37774 = G__37791;
continue;
} else {
var map__37424_37792 = cljs.core.first(seq__37414_37786__$1);
var map__37424_37793__$1 = cljs.core.__destructure_map(map__37424_37792);
var task_37794 = map__37424_37793__$1;
var fn_str_37795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424_37793__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424_37793__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37797 = goog.getObjectByName(fn_str_37795,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37796)));

(fn_obj_37797.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37797.cljs$core$IFn$_invoke$arity$2(path,new_link_37770) : fn_obj_37797.call(null,path,new_link_37770));


var G__37802 = cljs.core.next(seq__37414_37786__$1);
var G__37803 = null;
var G__37804 = (0);
var G__37805 = (0);
seq__37414_37771 = G__37802;
chunk__37416_37772 = G__37803;
count__37417_37773 = G__37804;
i__37418_37774 = G__37805;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37766);
});})(seq__37352_37705,chunk__37356_37706,count__37357_37707,i__37358_37708,seq__37235,chunk__37237,count__37238,i__37239,new_link_37770,path_match_37769,node_37766,seq__37352_37760__$1,temp__5823__auto___37759,path,map__37233,map__37233__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37769], 0));

goog.dom.insertSiblingAfter(new_link_37770,node_37766);


var G__37806 = cljs.core.next(seq__37352_37760__$1);
var G__37807 = null;
var G__37808 = (0);
var G__37809 = (0);
seq__37352_37705 = G__37806;
chunk__37356_37706 = G__37807;
count__37357_37707 = G__37808;
i__37358_37708 = G__37809;
continue;
} else {
var G__37810 = cljs.core.next(seq__37352_37760__$1);
var G__37811 = null;
var G__37812 = (0);
var G__37813 = (0);
seq__37352_37705 = G__37810;
chunk__37356_37706 = G__37811;
count__37357_37707 = G__37812;
i__37358_37708 = G__37813;
continue;
}
} else {
var G__37814 = cljs.core.next(seq__37352_37760__$1);
var G__37815 = null;
var G__37816 = (0);
var G__37817 = (0);
seq__37352_37705 = G__37814;
chunk__37356_37706 = G__37815;
count__37357_37707 = G__37816;
i__37358_37708 = G__37817;
continue;
}
}
} else {
}
}
break;
}


var G__37818 = seq__37235;
var G__37819 = chunk__37237;
var G__37820 = count__37238;
var G__37821 = (i__37239 + (1));
seq__37235 = G__37818;
chunk__37237 = G__37819;
count__37238 = G__37820;
i__37239 = G__37821;
continue;
} else {
var G__37822 = seq__37235;
var G__37823 = chunk__37237;
var G__37824 = count__37238;
var G__37825 = (i__37239 + (1));
seq__37235 = G__37822;
chunk__37237 = G__37823;
count__37238 = G__37824;
i__37239 = G__37825;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37235);
if(temp__5823__auto__){
var seq__37235__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37235__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37235__$1);
var G__37826 = cljs.core.chunk_rest(seq__37235__$1);
var G__37827 = c__5694__auto__;
var G__37828 = cljs.core.count(c__5694__auto__);
var G__37829 = (0);
seq__37235 = G__37826;
chunk__37237 = G__37827;
count__37238 = G__37828;
i__37239 = G__37829;
continue;
} else {
var path = cljs.core.first(seq__37235__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37435_37830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37439_37831 = null;
var count__37440_37832 = (0);
var i__37441_37833 = (0);
while(true){
if((i__37441_37833 < count__37440_37832)){
var node_37835 = chunk__37439_37831.cljs$core$IIndexed$_nth$arity$2(null,i__37441_37833);
if(cljs.core.not(node_37835.shadow$old)){
var path_match_37836 = shadow.cljs.devtools.client.browser.match_paths(node_37835.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37836)){
var new_link_37837 = (function (){var G__37479 = node_37835.cloneNode(true);
G__37479.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37836)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37479;
})();
(node_37835.shadow$old = true);

(new_link_37837.onload = ((function (seq__37435_37830,chunk__37439_37831,count__37440_37832,i__37441_37833,seq__37235,chunk__37237,count__37238,i__37239,new_link_37837,path_match_37836,node_37835,path,seq__37235__$1,temp__5823__auto__,map__37233,map__37233__$1,msg,updates,reload_info){
return (function (e){
var seq__37480_37842 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37482_37843 = null;
var count__37483_37844 = (0);
var i__37484_37845 = (0);
while(true){
if((i__37484_37845 < count__37483_37844)){
var map__37488_37846 = chunk__37482_37843.cljs$core$IIndexed$_nth$arity$2(null,i__37484_37845);
var map__37488_37847__$1 = cljs.core.__destructure_map(map__37488_37846);
var task_37848 = map__37488_37847__$1;
var fn_str_37849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488_37847__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488_37847__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37851 = goog.getObjectByName(fn_str_37849,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37850)));

(fn_obj_37851.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37851.cljs$core$IFn$_invoke$arity$2(path,new_link_37837) : fn_obj_37851.call(null,path,new_link_37837));


var G__37856 = seq__37480_37842;
var G__37857 = chunk__37482_37843;
var G__37858 = count__37483_37844;
var G__37859 = (i__37484_37845 + (1));
seq__37480_37842 = G__37856;
chunk__37482_37843 = G__37857;
count__37483_37844 = G__37858;
i__37484_37845 = G__37859;
continue;
} else {
var temp__5823__auto___37860__$1 = cljs.core.seq(seq__37480_37842);
if(temp__5823__auto___37860__$1){
var seq__37480_37861__$1 = temp__5823__auto___37860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37480_37861__$1)){
var c__5694__auto___37862 = cljs.core.chunk_first(seq__37480_37861__$1);
var G__37863 = cljs.core.chunk_rest(seq__37480_37861__$1);
var G__37864 = c__5694__auto___37862;
var G__37865 = cljs.core.count(c__5694__auto___37862);
var G__37866 = (0);
seq__37480_37842 = G__37863;
chunk__37482_37843 = G__37864;
count__37483_37844 = G__37865;
i__37484_37845 = G__37866;
continue;
} else {
var map__37493_37867 = cljs.core.first(seq__37480_37861__$1);
var map__37493_37868__$1 = cljs.core.__destructure_map(map__37493_37867);
var task_37869 = map__37493_37868__$1;
var fn_str_37870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493_37868__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493_37868__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37872 = goog.getObjectByName(fn_str_37870,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37871)));

(fn_obj_37872.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37872.cljs$core$IFn$_invoke$arity$2(path,new_link_37837) : fn_obj_37872.call(null,path,new_link_37837));


var G__37873 = cljs.core.next(seq__37480_37861__$1);
var G__37874 = null;
var G__37875 = (0);
var G__37876 = (0);
seq__37480_37842 = G__37873;
chunk__37482_37843 = G__37874;
count__37483_37844 = G__37875;
i__37484_37845 = G__37876;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37835);
});})(seq__37435_37830,chunk__37439_37831,count__37440_37832,i__37441_37833,seq__37235,chunk__37237,count__37238,i__37239,new_link_37837,path_match_37836,node_37835,path,seq__37235__$1,temp__5823__auto__,map__37233,map__37233__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37836], 0));

goog.dom.insertSiblingAfter(new_link_37837,node_37835);


var G__37877 = seq__37435_37830;
var G__37878 = chunk__37439_37831;
var G__37879 = count__37440_37832;
var G__37880 = (i__37441_37833 + (1));
seq__37435_37830 = G__37877;
chunk__37439_37831 = G__37878;
count__37440_37832 = G__37879;
i__37441_37833 = G__37880;
continue;
} else {
var G__37881 = seq__37435_37830;
var G__37882 = chunk__37439_37831;
var G__37883 = count__37440_37832;
var G__37884 = (i__37441_37833 + (1));
seq__37435_37830 = G__37881;
chunk__37439_37831 = G__37882;
count__37440_37832 = G__37883;
i__37441_37833 = G__37884;
continue;
}
} else {
var G__37885 = seq__37435_37830;
var G__37886 = chunk__37439_37831;
var G__37887 = count__37440_37832;
var G__37888 = (i__37441_37833 + (1));
seq__37435_37830 = G__37885;
chunk__37439_37831 = G__37886;
count__37440_37832 = G__37887;
i__37441_37833 = G__37888;
continue;
}
} else {
var temp__5823__auto___37889__$1 = cljs.core.seq(seq__37435_37830);
if(temp__5823__auto___37889__$1){
var seq__37435_37890__$1 = temp__5823__auto___37889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37435_37890__$1)){
var c__5694__auto___37891 = cljs.core.chunk_first(seq__37435_37890__$1);
var G__37892 = cljs.core.chunk_rest(seq__37435_37890__$1);
var G__37893 = c__5694__auto___37891;
var G__37894 = cljs.core.count(c__5694__auto___37891);
var G__37895 = (0);
seq__37435_37830 = G__37892;
chunk__37439_37831 = G__37893;
count__37440_37832 = G__37894;
i__37441_37833 = G__37895;
continue;
} else {
var node_37896 = cljs.core.first(seq__37435_37890__$1);
if(cljs.core.not(node_37896.shadow$old)){
var path_match_37897 = shadow.cljs.devtools.client.browser.match_paths(node_37896.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37897)){
var new_link_37898 = (function (){var G__37513 = node_37896.cloneNode(true);
G__37513.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37897)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37513;
})();
(node_37896.shadow$old = true);

(new_link_37898.onload = ((function (seq__37435_37830,chunk__37439_37831,count__37440_37832,i__37441_37833,seq__37235,chunk__37237,count__37238,i__37239,new_link_37898,path_match_37897,node_37896,seq__37435_37890__$1,temp__5823__auto___37889__$1,path,seq__37235__$1,temp__5823__auto__,map__37233,map__37233__$1,msg,updates,reload_info){
return (function (e){
var seq__37516_37899 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37518_37900 = null;
var count__37519_37901 = (0);
var i__37520_37902 = (0);
while(true){
if((i__37520_37902 < count__37519_37901)){
var map__37534_37903 = chunk__37518_37900.cljs$core$IIndexed$_nth$arity$2(null,i__37520_37902);
var map__37534_37904__$1 = cljs.core.__destructure_map(map__37534_37903);
var task_37905 = map__37534_37904__$1;
var fn_str_37906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534_37904__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534_37904__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37908 = goog.getObjectByName(fn_str_37906,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37907)));

(fn_obj_37908.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37908.cljs$core$IFn$_invoke$arity$2(path,new_link_37898) : fn_obj_37908.call(null,path,new_link_37898));


var G__37909 = seq__37516_37899;
var G__37910 = chunk__37518_37900;
var G__37911 = count__37519_37901;
var G__37912 = (i__37520_37902 + (1));
seq__37516_37899 = G__37909;
chunk__37518_37900 = G__37910;
count__37519_37901 = G__37911;
i__37520_37902 = G__37912;
continue;
} else {
var temp__5823__auto___37913__$2 = cljs.core.seq(seq__37516_37899);
if(temp__5823__auto___37913__$2){
var seq__37516_37914__$1 = temp__5823__auto___37913__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37516_37914__$1)){
var c__5694__auto___37915 = cljs.core.chunk_first(seq__37516_37914__$1);
var G__37916 = cljs.core.chunk_rest(seq__37516_37914__$1);
var G__37917 = c__5694__auto___37915;
var G__37918 = cljs.core.count(c__5694__auto___37915);
var G__37919 = (0);
seq__37516_37899 = G__37916;
chunk__37518_37900 = G__37917;
count__37519_37901 = G__37918;
i__37520_37902 = G__37919;
continue;
} else {
var map__37539_37920 = cljs.core.first(seq__37516_37914__$1);
var map__37539_37921__$1 = cljs.core.__destructure_map(map__37539_37920);
var task_37922 = map__37539_37921__$1;
var fn_str_37923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37539_37921__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37539_37921__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37925 = goog.getObjectByName(fn_str_37923,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37924)));

(fn_obj_37925.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37925.cljs$core$IFn$_invoke$arity$2(path,new_link_37898) : fn_obj_37925.call(null,path,new_link_37898));


var G__37926 = cljs.core.next(seq__37516_37914__$1);
var G__37927 = null;
var G__37928 = (0);
var G__37929 = (0);
seq__37516_37899 = G__37926;
chunk__37518_37900 = G__37927;
count__37519_37901 = G__37928;
i__37520_37902 = G__37929;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37896);
});})(seq__37435_37830,chunk__37439_37831,count__37440_37832,i__37441_37833,seq__37235,chunk__37237,count__37238,i__37239,new_link_37898,path_match_37897,node_37896,seq__37435_37890__$1,temp__5823__auto___37889__$1,path,seq__37235__$1,temp__5823__auto__,map__37233,map__37233__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37897], 0));

goog.dom.insertSiblingAfter(new_link_37898,node_37896);


var G__37930 = cljs.core.next(seq__37435_37890__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37435_37830 = G__37930;
chunk__37439_37831 = G__37931;
count__37440_37832 = G__37932;
i__37441_37833 = G__37933;
continue;
} else {
var G__37934 = cljs.core.next(seq__37435_37890__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37435_37830 = G__37934;
chunk__37439_37831 = G__37935;
count__37440_37832 = G__37936;
i__37441_37833 = G__37937;
continue;
}
} else {
var G__37938 = cljs.core.next(seq__37435_37890__$1);
var G__37939 = null;
var G__37940 = (0);
var G__37941 = (0);
seq__37435_37830 = G__37938;
chunk__37439_37831 = G__37939;
count__37440_37832 = G__37940;
i__37441_37833 = G__37941;
continue;
}
}
} else {
}
}
break;
}


var G__37942 = cljs.core.next(seq__37235__$1);
var G__37943 = null;
var G__37944 = (0);
var G__37945 = (0);
seq__37235 = G__37942;
chunk__37237 = G__37943;
count__37238 = G__37944;
i__37239 = G__37945;
continue;
} else {
var G__37946 = cljs.core.next(seq__37235__$1);
var G__37947 = null;
var G__37948 = (0);
var G__37949 = (0);
seq__37235 = G__37946;
chunk__37237 = G__37947;
count__37238 = G__37948;
i__37239 = G__37949;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),navigator.userAgent,new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__37566 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37566) : success.call(null,G__37566));
}catch (e37564){var e = e37564;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__37569,success,fail){
var map__37572 = p__37569;
var map__37572__$1 = cljs.core.__destructure_map(map__37572);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__37575 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37575) : success.call(null,G__37575));
}catch (e37573){var e = e37573;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37578,done,error){
var map__37579 = p__37578;
var map__37579__$1 = cljs.core.__destructure_map(map__37579);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37580,done,error){
var map__37581 = p__37580;
var map__37581__$1 = cljs.core.__destructure_map(map__37581);
var msg = map__37581__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37586){
var map__37587 = p__37586;
var map__37587__$1 = cljs.core.__destructure_map(map__37587);
var src = map__37587__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37593 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37593) : done.call(null,G__37593));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37596){
var map__37598 = p__37596;
var map__37598__$1 = cljs.core.__destructure_map(map__37598);
var msg__$1 = map__37598__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37600){var ex = e37600;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37605){
var map__37606 = p__37605;
var map__37606__$1 = cljs.core.__destructure_map(map__37606);
var env = map__37606__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37619){
var map__37621 = p__37619;
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37624){
var map__37625 = p__37624;
var map__37625__$1 = cljs.core.__destructure_map(map__37625);
var svc = map__37625__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
