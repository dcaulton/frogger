goog.provide('frogger.core');
frogger.core.hop_size = (40);
frogger.core.canvas_width = (800);
frogger.core.canvas_height = (400);
frogger.core.water_top = (100);
frogger.core.water_bottom = (185);
frogger.core.frog_pixels = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(1),(1),(2),(1)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(2),(2),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(0),(0),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(1)], null)], null);
frogger.core.car_pixels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(2),(1)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0),(0),(3),(0)], null)], null);
frogger.core.truck_pixels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1),(1),(1),(1),(1),(1),(1),(1),(2),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(3),(0),(3),(0),(3),(0),(3),(0),(3),(0)], null)], null);
frogger.core.log_pixels = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4),(5),(4)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4),(5)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4),(5),(4),(4)], null)], null);
frogger.core.pixel_maps = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"frog","frog",37988944),frogger.core.frog_pixels,new cljs.core.Keyword(null,"car","car",-1555651612),frogger.core.car_pixels,new cljs.core.Keyword(null,"truck","truck",-938025799),frogger.core.truck_pixels,new cljs.core.Keyword(null,"log","log",-1595516004),frogger.core.log_pixels], null);
frogger.core.palette = new cljs.core.PersistentArrayMap(null, 5, [(1),"#4ade80",(2),"#166534",(3),"#1f2937",(4),"#92400e",(5),"#78350f"], null);
frogger.core.pixel_width = (function frogger$core$pixel_width(pixels){
return cljs.core.count(cljs.core.first(pixels));
});
frogger.core.pixel_height = (function frogger$core$pixel_height(pixels){
return cljs.core.count(pixels);
});
frogger.core.entity_size = (function frogger$core$entity_size(lane){
var scale = (function (){var G__28088 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lane);
var G__28088__$1 = (((G__28088 instanceof cljs.core.Keyword))?G__28088.fqn:null);
switch (G__28088__$1) {
case "truck":
return (5);

break;
case "log":
return (4);

break;
default:
return (4);

}
})();
var pm = new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991).cljs$core$IFn$_invoke$arity$1(lane);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",354169001),(frogger.core.pixel_width(pm) * scale),new cljs.core.Keyword(null,"h","h",1109658740),(frogger.core.pixel_height(pm) * scale),new cljs.core.Keyword(null,"scale","scale",-230427353),scale], null);
});
frogger.core.frog_size = (function (){var s = (4);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(frogger.core.pixel_width(frogger.core.frog_pixels) * s),new cljs.core.Keyword(null,"h","h",1109658740),(frogger.core.pixel_height(frogger.core.frog_pixels) * s)], null);
})();
frogger.core.level = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Evening Crossing",new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(360)], null),new cljs.core.Keyword(null,"homes","homes",1010939273),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(80)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(220)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(360)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(500)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(640)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#0f172a",new cljs.core.Keyword(null,"road","road",1636591870),"#1e293b",new cljs.core.Keyword(null,"water","water",-824098213),"#0c4a6e",new cljs.core.Keyword(null,"water-highlight","water-highlight",-648596198),"#38bdf8",new cljs.core.Keyword(null,"home-zone","home-zone",1131892448),"#14532d",new cljs.core.Keyword(null,"truck","truck",-938025799),"#dc2626"], null),new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),(310),new cljs.core.Keyword(null,"speed","speed",1257663751),2.1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"car","car",-1555651612),new cljs.core.Keyword(null,"water?","water?",901811769),false,new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(60)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(240)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(460)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(640)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),(240),new cljs.core.Keyword(null,"speed","speed",1257663751),-1.6,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"truck","truck",-938025799),new cljs.core.Keyword(null,"water?","water?",901811769),false,new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(20)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(280)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),(160),new cljs.core.Keyword(null,"speed","speed",1257663751),1.2,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"water?","water?",901811769),true,new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(40)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(280)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(520)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),(115),new cljs.core.Keyword(null,"speed","speed",1257663751),-0.9,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"water?","water?",901811769),true,new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(80)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(340)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(580)], null)], null)], null)], null)], null);
frogger.core.make_state = (function frogger$core$make_state(lvl){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"homes","homes",1010939273),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"occupied-homes","occupied-homes",-485493138),new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"closed?","closed?",-1408769040),new cljs.core.Keyword(null,"dead-until","dead-until",1891719697),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"prev-keys","prev-keys",-443053422),new cljs.core.Keyword(null,"won?","won?",-794748996),new cljs.core.Keyword(null,"dead?","dead?",990391228),new cljs.core.Keyword(null,"confetti","confetti",-717634145)],[cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28094_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28094_SHARP_,new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991),cljs.core.get.cljs$core$IFn$_invoke$arity$3(frogger.core.pixel_maps,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__28094_SHARP_),frogger.core.car_pixels));
}),new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(lvl)),new cljs.core.Keyword(null,"homes","homes",1010939273).cljs$core$IFn$_invoke$arity$1(lvl),(0),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(lvl),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(lvl),false,(0),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,false,false,cljs.core.PersistentVector.EMPTY]);
});
if((typeof frogger !== 'undefined') && (typeof frogger.core !== 'undefined') && (typeof frogger.core.state !== 'undefined')){
} else {
frogger.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frogger.core.make_state(frogger.core.level));
}
frogger.core.collides_QMARK_ = (function frogger$core$collides_QMARK_(frog,entity,lane){
var map__28109 = frogger.core.entity_size(lane);
var map__28109__$1 = cljs.core.__destructure_map(map__28109);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28109__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28109__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var fw = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(frogger.core.frog_size);
var fh = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(frogger.core.frog_size);
var fx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frog) - (fw / (2)));
var fy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frog) - (fh / (2)));
var ex = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(entity);
var ey = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane) - (h / (2)));
return (((fx < (ex + w))) && (((((fx + fw) > ex)) && ((((fy < (ey + h))) && (((fy + fh) > ey)))))));
});
frogger.core.on_any_log_QMARK_ = (function frogger$core$on_any_log_QMARK_(){
return cljs.core.some((function (lane){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lane))){
return cljs.core.some((function (p1__28110_SHARP_){
return frogger.core.collides_QMARK_(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)),p1__28110_SHARP_,lane);
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(lane));
} else {
return null;
}
}),new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)));
});
frogger.core.in_water_QMARK_ = (function frogger$core$in_water_QMARK_(){
var fy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)));
return (((fy >= frogger.core.water_top)) && ((fy <= frogger.core.water_bottom)));
});
frogger.core.deadly_collision_QMARK_ = (function frogger$core$deadly_collision_QMARK_(){
var or__5162__auto__ = cljs.core.some((function (lane){
if(cljs.core.truth_((function (){var G__28113 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lane);
var fexpr__28112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"car","car",-1555651612),null,new cljs.core.Keyword(null,"truck","truck",-938025799),null], null), null);
return (fexpr__28112.cljs$core$IFn$_invoke$arity$1 ? fexpr__28112.cljs$core$IFn$_invoke$arity$1(G__28113) : fexpr__28112.call(null,G__28113));
})())){
return cljs.core.some((function (p1__28111_SHARP_){
return frogger.core.collides_QMARK_(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)),p1__28111_SHARP_,lane);
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(lane));
} else {
return null;
}
}),new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ((frogger.core.in_water_QMARK_()) && (cljs.core.not(frogger.core.on_any_log_QMARK_())));
}
});
frogger.core.home_index_at = (function frogger$core$home_index_at(x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,h){
if((Math.abs((x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h))) < (28))){
return i;
} else {
return null;
}
}),new cljs.core.Keyword(null,"homes","homes",1010939273).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state))));
});
frogger.core.spawn_confetti_BANG_ = (function frogger$core$spawn_confetti_BANG_(){
var cols = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#facc15","#f472b6","#60a5fa","#4ade80","#fb923c","#c084fc"], null);
var particles = (function (){var iter__5649__auto__ = (function frogger$core$spawn_confetti_BANG__$_iter__28114(s__28115){
return (new cljs.core.LazySeq(null,(function (){
var s__28115__$1 = s__28115;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28115__$1);
if(temp__5823__auto__){
var s__28115__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28115__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28115__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28117 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28116 = (0);
while(true){
if((i__28116 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__28116);
cljs.core.chunk_append(b__28117,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),((340) + cljs.core.rand_int((120))),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"vx","vx",-1685168462),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((7)) - 3.5),new cljs.core.Keyword(null,"vy","vy",-2018509997),((1) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((5))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth(cols),new cljs.core.Keyword(null,"life","life",939004719),(140)], null));

var G__28209 = (i__28116 + (1));
i__28116 = G__28209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28117),frogger$core$spawn_confetti_BANG__$_iter__28114(cljs.core.chunk_rest(s__28115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28117),null);
}
} else {
var _ = cljs.core.first(s__28115__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),((340) + cljs.core.rand_int((120))),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"vx","vx",-1685168462),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((7)) - 3.5),new cljs.core.Keyword(null,"vy","vy",-2018509997),((1) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((5))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth(cols),new cljs.core.Keyword(null,"life","life",939004719),(140)], null),frogger$core$spawn_confetti_BANG__$_iter__28114(cljs.core.rest(s__28115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((90)));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"confetti","confetti",-717634145),cljs.core.vec(particles),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"won?","won?",-794748996),true], 0));
});
frogger.core.draw_pixels_BANG_ = (function frogger$core$draw_pixels_BANG_(ctx,pixels,x,y,scale,color_override){
var seq__28118 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pixels)));
var chunk__28123 = null;
var count__28124 = (0);
var i__28125 = (0);
while(true){
if((i__28125 < count__28124)){
var row = chunk__28123.cljs$core$IIndexed$_nth$arity$2(null,i__28125);
var seq__28126_28210 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(pixels))));
var chunk__28127_28211 = null;
var count__28128_28212 = (0);
var i__28129_28213 = (0);
while(true){
if((i__28129_28213 < count__28128_28212)){
var col_28214 = chunk__28127_28211.cljs$core$IIndexed$_nth$arity$2(null,i__28129_28213);
var temp__5823__auto___28215 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_28214], null));
if(cljs.core.truth_(temp__5823__auto___28215)){
var idx_28216 = temp__5823__auto___28215;
if((idx_28216 > (0))){
(ctx.fillStyle = (function (){var or__5162__auto__ = color_override;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frogger.core.palette,idx_28216,"#4ade80");
}
})());

ctx.fillRect((x + (col_28214 * scale)),(y + (row * scale)),scale,scale);
} else {
}
} else {
}


var G__28217 = seq__28126_28210;
var G__28218 = chunk__28127_28211;
var G__28219 = count__28128_28212;
var G__28220 = (i__28129_28213 + (1));
seq__28126_28210 = G__28217;
chunk__28127_28211 = G__28218;
count__28128_28212 = G__28219;
i__28129_28213 = G__28220;
continue;
} else {
var temp__5823__auto___28221 = cljs.core.seq(seq__28126_28210);
if(temp__5823__auto___28221){
var seq__28126_28222__$1 = temp__5823__auto___28221;
if(cljs.core.chunked_seq_QMARK_(seq__28126_28222__$1)){
var c__5694__auto___28223 = cljs.core.chunk_first(seq__28126_28222__$1);
var G__28224 = cljs.core.chunk_rest(seq__28126_28222__$1);
var G__28225 = c__5694__auto___28223;
var G__28226 = cljs.core.count(c__5694__auto___28223);
var G__28227 = (0);
seq__28126_28210 = G__28224;
chunk__28127_28211 = G__28225;
count__28128_28212 = G__28226;
i__28129_28213 = G__28227;
continue;
} else {
var col_28228 = cljs.core.first(seq__28126_28222__$1);
var temp__5823__auto___28229__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_28228], null));
if(cljs.core.truth_(temp__5823__auto___28229__$1)){
var idx_28230 = temp__5823__auto___28229__$1;
if((idx_28230 > (0))){
(ctx.fillStyle = (function (){var or__5162__auto__ = color_override;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frogger.core.palette,idx_28230,"#4ade80");
}
})());

ctx.fillRect((x + (col_28228 * scale)),(y + (row * scale)),scale,scale);
} else {
}
} else {
}


var G__28231 = cljs.core.next(seq__28126_28222__$1);
var G__28232 = null;
var G__28233 = (0);
var G__28234 = (0);
seq__28126_28210 = G__28231;
chunk__28127_28211 = G__28232;
count__28128_28212 = G__28233;
i__28129_28213 = G__28234;
continue;
}
} else {
}
}
break;
}

var G__28235 = seq__28118;
var G__28236 = chunk__28123;
var G__28237 = count__28124;
var G__28238 = (i__28125 + (1));
seq__28118 = G__28235;
chunk__28123 = G__28236;
count__28124 = G__28237;
i__28125 = G__28238;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28118);
if(temp__5823__auto__){
var seq__28118__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28118__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28118__$1);
var G__28239 = cljs.core.chunk_rest(seq__28118__$1);
var G__28240 = c__5694__auto__;
var G__28241 = cljs.core.count(c__5694__auto__);
var G__28242 = (0);
seq__28118 = G__28239;
chunk__28123 = G__28240;
count__28124 = G__28241;
i__28125 = G__28242;
continue;
} else {
var row = cljs.core.first(seq__28118__$1);
var seq__28119_28243 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(pixels))));
var chunk__28120_28244 = null;
var count__28121_28245 = (0);
var i__28122_28246 = (0);
while(true){
if((i__28122_28246 < count__28121_28245)){
var col_28247 = chunk__28120_28244.cljs$core$IIndexed$_nth$arity$2(null,i__28122_28246);
var temp__5823__auto___28248__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_28247], null));
if(cljs.core.truth_(temp__5823__auto___28248__$1)){
var idx_28249 = temp__5823__auto___28248__$1;
if((idx_28249 > (0))){
(ctx.fillStyle = (function (){var or__5162__auto__ = color_override;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frogger.core.palette,idx_28249,"#4ade80");
}
})());

ctx.fillRect((x + (col_28247 * scale)),(y + (row * scale)),scale,scale);
} else {
}
} else {
}


var G__28250 = seq__28119_28243;
var G__28251 = chunk__28120_28244;
var G__28252 = count__28121_28245;
var G__28253 = (i__28122_28246 + (1));
seq__28119_28243 = G__28250;
chunk__28120_28244 = G__28251;
count__28121_28245 = G__28252;
i__28122_28246 = G__28253;
continue;
} else {
var temp__5823__auto___28254__$1 = cljs.core.seq(seq__28119_28243);
if(temp__5823__auto___28254__$1){
var seq__28119_28255__$1 = temp__5823__auto___28254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28119_28255__$1)){
var c__5694__auto___28256 = cljs.core.chunk_first(seq__28119_28255__$1);
var G__28257 = cljs.core.chunk_rest(seq__28119_28255__$1);
var G__28258 = c__5694__auto___28256;
var G__28259 = cljs.core.count(c__5694__auto___28256);
var G__28260 = (0);
seq__28119_28243 = G__28257;
chunk__28120_28244 = G__28258;
count__28121_28245 = G__28259;
i__28122_28246 = G__28260;
continue;
} else {
var col_28261 = cljs.core.first(seq__28119_28255__$1);
var temp__5823__auto___28262__$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_28261], null));
if(cljs.core.truth_(temp__5823__auto___28262__$2)){
var idx_28263 = temp__5823__auto___28262__$2;
if((idx_28263 > (0))){
(ctx.fillStyle = (function (){var or__5162__auto__ = color_override;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frogger.core.palette,idx_28263,"#4ade80");
}
})());

ctx.fillRect((x + (col_28261 * scale)),(y + (row * scale)),scale,scale);
} else {
}
} else {
}


var G__28264 = cljs.core.next(seq__28119_28255__$1);
var G__28265 = null;
var G__28266 = (0);
var G__28267 = (0);
seq__28119_28243 = G__28264;
chunk__28120_28244 = G__28265;
count__28121_28245 = G__28266;
i__28122_28246 = G__28267;
continue;
}
} else {
}
}
break;
}

var G__28268 = cljs.core.next(seq__28118__$1);
var G__28269 = null;
var G__28270 = (0);
var G__28271 = (0);
seq__28118 = G__28268;
chunk__28123 = G__28269;
count__28124 = G__28270;
i__28125 = G__28271;
continue;
}
} else {
return null;
}
}
break;
}
});
frogger.core.draw_water_BANG_ = (function frogger$core$draw_water_BANG_(ctx,colors,t,y,height){
(ctx.fillStyle = new cljs.core.Keyword(null,"water","water",-824098213).cljs$core$IFn$_invoke$arity$1(colors));

ctx.fillRect((0),y,frogger.core.canvas_width,height);

(ctx.fillStyle = new cljs.core.Keyword(null,"water-highlight","water-highlight",-648596198).cljs$core$IFn$_invoke$arity$1(colors));

(ctx.globalAlpha = 0.5);

var seq__28130_28272 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(height / (2)),(height - (10))], null));
var chunk__28131_28273 = null;
var count__28132_28274 = (0);
var i__28133_28275 = (0);
while(true){
if((i__28133_28275 < count__28132_28274)){
var offset_28276 = chunk__28131_28273.cljs$core$IIndexed$_nth$arity$2(null,i__28133_28275);
var seq__28142_28277 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),frogger.core.canvas_width,(12)));
var chunk__28143_28278 = null;
var count__28144_28279 = (0);
var i__28145_28280 = (0);
while(true){
if((i__28145_28280 < count__28144_28279)){
var i_28281 = chunk__28143_28278.cljs$core$IIndexed$_nth$arity$2(null,i__28145_28280);
var wave_28282 = Math.sin((((i_28281 / (28)) + (t / (20))) + (offset_28276 * 0.05)));
ctx.fillRect(i_28281,((y + offset_28276) + (wave_28282 * (5))),(8),(2));


var G__28283 = seq__28142_28277;
var G__28284 = chunk__28143_28278;
var G__28285 = count__28144_28279;
var G__28286 = (i__28145_28280 + (1));
seq__28142_28277 = G__28283;
chunk__28143_28278 = G__28284;
count__28144_28279 = G__28285;
i__28145_28280 = G__28286;
continue;
} else {
var temp__5823__auto___28287 = cljs.core.seq(seq__28142_28277);
if(temp__5823__auto___28287){
var seq__28142_28288__$1 = temp__5823__auto___28287;
if(cljs.core.chunked_seq_QMARK_(seq__28142_28288__$1)){
var c__5694__auto___28289 = cljs.core.chunk_first(seq__28142_28288__$1);
var G__28290 = cljs.core.chunk_rest(seq__28142_28288__$1);
var G__28291 = c__5694__auto___28289;
var G__28292 = cljs.core.count(c__5694__auto___28289);
var G__28293 = (0);
seq__28142_28277 = G__28290;
chunk__28143_28278 = G__28291;
count__28144_28279 = G__28292;
i__28145_28280 = G__28293;
continue;
} else {
var i_28294 = cljs.core.first(seq__28142_28288__$1);
var wave_28295 = Math.sin((((i_28294 / (28)) + (t / (20))) + (offset_28276 * 0.05)));
ctx.fillRect(i_28294,((y + offset_28276) + (wave_28295 * (5))),(8),(2));


var G__28296 = cljs.core.next(seq__28142_28288__$1);
var G__28297 = null;
var G__28298 = (0);
var G__28299 = (0);
seq__28142_28277 = G__28296;
chunk__28143_28278 = G__28297;
count__28144_28279 = G__28298;
i__28145_28280 = G__28299;
continue;
}
} else {
}
}
break;
}


var G__28300 = seq__28130_28272;
var G__28301 = chunk__28131_28273;
var G__28302 = count__28132_28274;
var G__28303 = (i__28133_28275 + (1));
seq__28130_28272 = G__28300;
chunk__28131_28273 = G__28301;
count__28132_28274 = G__28302;
i__28133_28275 = G__28303;
continue;
} else {
var temp__5823__auto___28304 = cljs.core.seq(seq__28130_28272);
if(temp__5823__auto___28304){
var seq__28130_28305__$1 = temp__5823__auto___28304;
if(cljs.core.chunked_seq_QMARK_(seq__28130_28305__$1)){
var c__5694__auto___28306 = cljs.core.chunk_first(seq__28130_28305__$1);
var G__28307 = cljs.core.chunk_rest(seq__28130_28305__$1);
var G__28308 = c__5694__auto___28306;
var G__28309 = cljs.core.count(c__5694__auto___28306);
var G__28310 = (0);
seq__28130_28272 = G__28307;
chunk__28131_28273 = G__28308;
count__28132_28274 = G__28309;
i__28133_28275 = G__28310;
continue;
} else {
var offset_28311 = cljs.core.first(seq__28130_28305__$1);
var seq__28146_28312 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),frogger.core.canvas_width,(12)));
var chunk__28147_28313 = null;
var count__28148_28314 = (0);
var i__28149_28315 = (0);
while(true){
if((i__28149_28315 < count__28148_28314)){
var i_28316 = chunk__28147_28313.cljs$core$IIndexed$_nth$arity$2(null,i__28149_28315);
var wave_28317 = Math.sin((((i_28316 / (28)) + (t / (20))) + (offset_28311 * 0.05)));
ctx.fillRect(i_28316,((y + offset_28311) + (wave_28317 * (5))),(8),(2));


var G__28318 = seq__28146_28312;
var G__28319 = chunk__28147_28313;
var G__28320 = count__28148_28314;
var G__28321 = (i__28149_28315 + (1));
seq__28146_28312 = G__28318;
chunk__28147_28313 = G__28319;
count__28148_28314 = G__28320;
i__28149_28315 = G__28321;
continue;
} else {
var temp__5823__auto___28322__$1 = cljs.core.seq(seq__28146_28312);
if(temp__5823__auto___28322__$1){
var seq__28146_28323__$1 = temp__5823__auto___28322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28146_28323__$1)){
var c__5694__auto___28324 = cljs.core.chunk_first(seq__28146_28323__$1);
var G__28325 = cljs.core.chunk_rest(seq__28146_28323__$1);
var G__28326 = c__5694__auto___28324;
var G__28327 = cljs.core.count(c__5694__auto___28324);
var G__28328 = (0);
seq__28146_28312 = G__28325;
chunk__28147_28313 = G__28326;
count__28148_28314 = G__28327;
i__28149_28315 = G__28328;
continue;
} else {
var i_28329 = cljs.core.first(seq__28146_28323__$1);
var wave_28330 = Math.sin((((i_28329 / (28)) + (t / (20))) + (offset_28311 * 0.05)));
ctx.fillRect(i_28329,((y + offset_28311) + (wave_28330 * (5))),(8),(2));


var G__28331 = cljs.core.next(seq__28146_28323__$1);
var G__28332 = null;
var G__28333 = (0);
var G__28334 = (0);
seq__28146_28312 = G__28331;
chunk__28147_28313 = G__28332;
count__28148_28314 = G__28333;
i__28149_28315 = G__28334;
continue;
}
} else {
}
}
break;
}


var G__28335 = cljs.core.next(seq__28130_28305__$1);
var G__28336 = null;
var G__28337 = (0);
var G__28338 = (0);
seq__28130_28272 = G__28335;
chunk__28131_28273 = G__28336;
count__28132_28274 = G__28337;
i__28133_28275 = G__28338;
continue;
}
} else {
}
}
break;
}

return (ctx.globalAlpha = (1));
});
frogger.core.draw_close_button_BANG_ = (function frogger$core$draw_close_button_BANG_(ctx){
(ctx.fillStyle = "#7f1d1d");

ctx.fillRect((frogger.core.canvas_width - (70)),(8),(60),(24));

(ctx.fillStyle = "#fecaca");

(ctx.font = "14px sans-serif");

return ctx.fillText("Close",(frogger.core.canvas_width - (58)),(25));
});
frogger.core.draw_BANG_ = (function frogger$core$draw_BANG_(ctx){
var map__28150 = cljs.core.deref(frogger.core.state);
var map__28150__$1 = cljs.core.__destructure_map(map__28150);
var won_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"won?","won?",-794748996));
var dead_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"dead?","dead?",990391228));
var confetti = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"confetti","confetti",-717634145));
var lanes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var homes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"homes","homes",1010939273));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var occupied_homes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"occupied-homes","occupied-homes",-485493138));
var frog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"frog","frog",37988944));
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
if(cljs.core.truth_(closed_QMARK_)){
return null;
} else {
(ctx.fillStyle = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(colors));

ctx.fillRect((0),(0),frogger.core.canvas_width,frogger.core.canvas_height);

(ctx.fillStyle = new cljs.core.Keyword(null,"home-zone","home-zone",1131892448).cljs$core$IFn$_invoke$arity$1(colors));

ctx.fillRect((0),(0),frogger.core.canvas_width,(50));

frogger.core.draw_water_BANG_(ctx,colors,time,frogger.core.water_top,(frogger.core.water_bottom - frogger.core.water_top));

var seq__28151_28339 = cljs.core.seq(lanes);
var chunk__28152_28340 = null;
var count__28153_28341 = (0);
var i__28154_28342 = (0);
while(true){
if((i__28154_28342 < count__28153_28341)){
var lane_28343 = chunk__28152_28340.cljs$core$IIndexed$_nth$arity$2(null,i__28154_28342);
if(cljs.core.truth_(new cljs.core.Keyword(null,"water?","water?",901811769).cljs$core$IFn$_invoke$arity$1(lane_28343))){
} else {
(ctx.fillStyle = new cljs.core.Keyword(null,"road","road",1636591870).cljs$core$IFn$_invoke$arity$1(colors));

ctx.fillRect((0),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28343) - (22)),frogger.core.canvas_width,(44));
}


var G__28344 = seq__28151_28339;
var G__28345 = chunk__28152_28340;
var G__28346 = count__28153_28341;
var G__28347 = (i__28154_28342 + (1));
seq__28151_28339 = G__28344;
chunk__28152_28340 = G__28345;
count__28153_28341 = G__28346;
i__28154_28342 = G__28347;
continue;
} else {
var temp__5823__auto___28348 = cljs.core.seq(seq__28151_28339);
if(temp__5823__auto___28348){
var seq__28151_28349__$1 = temp__5823__auto___28348;
if(cljs.core.chunked_seq_QMARK_(seq__28151_28349__$1)){
var c__5694__auto___28350 = cljs.core.chunk_first(seq__28151_28349__$1);
var G__28351 = cljs.core.chunk_rest(seq__28151_28349__$1);
var G__28352 = c__5694__auto___28350;
var G__28353 = cljs.core.count(c__5694__auto___28350);
var G__28354 = (0);
seq__28151_28339 = G__28351;
chunk__28152_28340 = G__28352;
count__28153_28341 = G__28353;
i__28154_28342 = G__28354;
continue;
} else {
var lane_28355 = cljs.core.first(seq__28151_28349__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"water?","water?",901811769).cljs$core$IFn$_invoke$arity$1(lane_28355))){
} else {
(ctx.fillStyle = new cljs.core.Keyword(null,"road","road",1636591870).cljs$core$IFn$_invoke$arity$1(colors));

ctx.fillRect((0),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28355) - (22)),frogger.core.canvas_width,(44));
}


var G__28356 = cljs.core.next(seq__28151_28349__$1);
var G__28357 = null;
var G__28358 = (0);
var G__28359 = (0);
seq__28151_28339 = G__28356;
chunk__28152_28340 = G__28357;
count__28153_28341 = G__28358;
i__28154_28342 = G__28359;
continue;
}
} else {
}
}
break;
}

var seq__28155_28360 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,homes));
var chunk__28156_28361 = null;
var count__28157_28362 = (0);
var i__28158_28363 = (0);
while(true){
if((i__28158_28363 < count__28157_28362)){
var vec__28165_28364 = chunk__28156_28361.cljs$core$IIndexed$_nth$arity$2(null,i__28158_28363);
var i_28365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165_28364,(0),null);
var h_28366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165_28364,(1),null);
(ctx.fillStyle = (cljs.core.truth_((occupied_homes.cljs$core$IFn$_invoke$arity$1 ? occupied_homes.cljs$core$IFn$_invoke$arity$1(i_28365) : occupied_homes.call(null,i_28365)))?"#166534":"#052e16"));

ctx.beginPath();

ctx.arc(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h_28366),(28),(20),(0),((2) * Math.PI));

ctx.fill();

if(cljs.core.truth_((occupied_homes.cljs$core$IFn$_invoke$arity$1 ? occupied_homes.cljs$core$IFn$_invoke$arity$1(i_28365) : occupied_homes.call(null,i_28365)))){
} else {
(ctx.fillStyle = "#86efac");

(ctx.font = "14px sans-serif");

ctx.fillText("\u25CB",(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h_28366) - (7)),(33));
}


var G__28367 = seq__28155_28360;
var G__28368 = chunk__28156_28361;
var G__28369 = count__28157_28362;
var G__28370 = (i__28158_28363 + (1));
seq__28155_28360 = G__28367;
chunk__28156_28361 = G__28368;
count__28157_28362 = G__28369;
i__28158_28363 = G__28370;
continue;
} else {
var temp__5823__auto___28371 = cljs.core.seq(seq__28155_28360);
if(temp__5823__auto___28371){
var seq__28155_28372__$1 = temp__5823__auto___28371;
if(cljs.core.chunked_seq_QMARK_(seq__28155_28372__$1)){
var c__5694__auto___28373 = cljs.core.chunk_first(seq__28155_28372__$1);
var G__28374 = cljs.core.chunk_rest(seq__28155_28372__$1);
var G__28375 = c__5694__auto___28373;
var G__28376 = cljs.core.count(c__5694__auto___28373);
var G__28377 = (0);
seq__28155_28360 = G__28374;
chunk__28156_28361 = G__28375;
count__28157_28362 = G__28376;
i__28158_28363 = G__28377;
continue;
} else {
var vec__28168_28378 = cljs.core.first(seq__28155_28372__$1);
var i_28379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168_28378,(0),null);
var h_28380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168_28378,(1),null);
(ctx.fillStyle = (cljs.core.truth_((occupied_homes.cljs$core$IFn$_invoke$arity$1 ? occupied_homes.cljs$core$IFn$_invoke$arity$1(i_28379) : occupied_homes.call(null,i_28379)))?"#166534":"#052e16"));

ctx.beginPath();

ctx.arc(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h_28380),(28),(20),(0),((2) * Math.PI));

ctx.fill();

if(cljs.core.truth_((occupied_homes.cljs$core$IFn$_invoke$arity$1 ? occupied_homes.cljs$core$IFn$_invoke$arity$1(i_28379) : occupied_homes.call(null,i_28379)))){
} else {
(ctx.fillStyle = "#86efac");

(ctx.font = "14px sans-serif");

ctx.fillText("\u25CB",(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(h_28380) - (7)),(33));
}


var G__28381 = cljs.core.next(seq__28155_28372__$1);
var G__28382 = null;
var G__28383 = (0);
var G__28384 = (0);
seq__28155_28360 = G__28381;
chunk__28156_28361 = G__28382;
count__28157_28362 = G__28383;
i__28158_28363 = G__28384;
continue;
}
} else {
}
}
break;
}

var seq__28171_28385 = cljs.core.seq(lanes);
var chunk__28172_28386 = null;
var count__28173_28387 = (0);
var i__28174_28388 = (0);
while(true){
if((i__28174_28388 < count__28173_28387)){
var lane_28389 = chunk__28172_28386.cljs$core$IIndexed$_nth$arity$2(null,i__28174_28388);
var map__28185_28390 = frogger.core.entity_size(lane_28389);
var map__28185_28391__$1 = cljs.core.__destructure_map(map__28185_28390);
var scale_28392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185_28391__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var h_28393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185_28391__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var override_28394 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"truck","truck",-938025799),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lane_28389)))?new cljs.core.Keyword(null,"truck","truck",-938025799).cljs$core$IFn$_invoke$arity$1(colors):null);
var seq__28186_28395 = cljs.core.seq(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(lane_28389));
var chunk__28187_28396 = null;
var count__28188_28397 = (0);
var i__28189_28398 = (0);
while(true){
if((i__28189_28398 < count__28188_28397)){
var ent_28399 = chunk__28187_28396.cljs$core$IIndexed$_nth$arity$2(null,i__28189_28398);
frogger.core.draw_pixels_BANG_(ctx,new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991).cljs$core$IFn$_invoke$arity$1(lane_28389),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ent_28399),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28389) - (h_28393 / (2))),scale_28392,override_28394);


var G__28400 = seq__28186_28395;
var G__28401 = chunk__28187_28396;
var G__28402 = count__28188_28397;
var G__28403 = (i__28189_28398 + (1));
seq__28186_28395 = G__28400;
chunk__28187_28396 = G__28401;
count__28188_28397 = G__28402;
i__28189_28398 = G__28403;
continue;
} else {
var temp__5823__auto___28404 = cljs.core.seq(seq__28186_28395);
if(temp__5823__auto___28404){
var seq__28186_28405__$1 = temp__5823__auto___28404;
if(cljs.core.chunked_seq_QMARK_(seq__28186_28405__$1)){
var c__5694__auto___28406 = cljs.core.chunk_first(seq__28186_28405__$1);
var G__28407 = cljs.core.chunk_rest(seq__28186_28405__$1);
var G__28408 = c__5694__auto___28406;
var G__28409 = cljs.core.count(c__5694__auto___28406);
var G__28410 = (0);
seq__28186_28395 = G__28407;
chunk__28187_28396 = G__28408;
count__28188_28397 = G__28409;
i__28189_28398 = G__28410;
continue;
} else {
var ent_28411 = cljs.core.first(seq__28186_28405__$1);
frogger.core.draw_pixels_BANG_(ctx,new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991).cljs$core$IFn$_invoke$arity$1(lane_28389),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ent_28411),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28389) - (h_28393 / (2))),scale_28392,override_28394);


var G__28412 = cljs.core.next(seq__28186_28405__$1);
var G__28413 = null;
var G__28414 = (0);
var G__28415 = (0);
seq__28186_28395 = G__28412;
chunk__28187_28396 = G__28413;
count__28188_28397 = G__28414;
i__28189_28398 = G__28415;
continue;
}
} else {
}
}
break;
}


var G__28416 = seq__28171_28385;
var G__28417 = chunk__28172_28386;
var G__28418 = count__28173_28387;
var G__28419 = (i__28174_28388 + (1));
seq__28171_28385 = G__28416;
chunk__28172_28386 = G__28417;
count__28173_28387 = G__28418;
i__28174_28388 = G__28419;
continue;
} else {
var temp__5823__auto___28420 = cljs.core.seq(seq__28171_28385);
if(temp__5823__auto___28420){
var seq__28171_28421__$1 = temp__5823__auto___28420;
if(cljs.core.chunked_seq_QMARK_(seq__28171_28421__$1)){
var c__5694__auto___28422 = cljs.core.chunk_first(seq__28171_28421__$1);
var G__28423 = cljs.core.chunk_rest(seq__28171_28421__$1);
var G__28424 = c__5694__auto___28422;
var G__28425 = cljs.core.count(c__5694__auto___28422);
var G__28426 = (0);
seq__28171_28385 = G__28423;
chunk__28172_28386 = G__28424;
count__28173_28387 = G__28425;
i__28174_28388 = G__28426;
continue;
} else {
var lane_28427 = cljs.core.first(seq__28171_28421__$1);
var map__28190_28428 = frogger.core.entity_size(lane_28427);
var map__28190_28429__$1 = cljs.core.__destructure_map(map__28190_28428);
var scale_28430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190_28429__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var h_28431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190_28429__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var override_28432 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"truck","truck",-938025799),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lane_28427)))?new cljs.core.Keyword(null,"truck","truck",-938025799).cljs$core$IFn$_invoke$arity$1(colors):null);
var seq__28191_28433 = cljs.core.seq(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(lane_28427));
var chunk__28192_28434 = null;
var count__28193_28435 = (0);
var i__28194_28436 = (0);
while(true){
if((i__28194_28436 < count__28193_28435)){
var ent_28437 = chunk__28192_28434.cljs$core$IIndexed$_nth$arity$2(null,i__28194_28436);
frogger.core.draw_pixels_BANG_(ctx,new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991).cljs$core$IFn$_invoke$arity$1(lane_28427),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ent_28437),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28427) - (h_28431 / (2))),scale_28430,override_28432);


var G__28438 = seq__28191_28433;
var G__28439 = chunk__28192_28434;
var G__28440 = count__28193_28435;
var G__28441 = (i__28194_28436 + (1));
seq__28191_28433 = G__28438;
chunk__28192_28434 = G__28439;
count__28193_28435 = G__28440;
i__28194_28436 = G__28441;
continue;
} else {
var temp__5823__auto___28442__$1 = cljs.core.seq(seq__28191_28433);
if(temp__5823__auto___28442__$1){
var seq__28191_28443__$1 = temp__5823__auto___28442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28191_28443__$1)){
var c__5694__auto___28444 = cljs.core.chunk_first(seq__28191_28443__$1);
var G__28445 = cljs.core.chunk_rest(seq__28191_28443__$1);
var G__28446 = c__5694__auto___28444;
var G__28447 = cljs.core.count(c__5694__auto___28444);
var G__28448 = (0);
seq__28191_28433 = G__28445;
chunk__28192_28434 = G__28446;
count__28193_28435 = G__28447;
i__28194_28436 = G__28448;
continue;
} else {
var ent_28449 = cljs.core.first(seq__28191_28443__$1);
frogger.core.draw_pixels_BANG_(ctx,new cljs.core.Keyword(null,"pixel-map","pixel-map",-1265914991).cljs$core$IFn$_invoke$arity$1(lane_28427),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ent_28449),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lane_28427) - (h_28431 / (2))),scale_28430,override_28432);


var G__28450 = cljs.core.next(seq__28191_28443__$1);
var G__28451 = null;
var G__28452 = (0);
var G__28453 = (0);
seq__28191_28433 = G__28450;
chunk__28192_28434 = G__28451;
count__28193_28435 = G__28452;
i__28194_28436 = G__28453;
continue;
}
} else {
}
}
break;
}


var G__28454 = cljs.core.next(seq__28171_28421__$1);
var G__28455 = null;
var G__28456 = (0);
var G__28457 = (0);
seq__28171_28385 = G__28454;
chunk__28172_28386 = G__28455;
count__28173_28387 = G__28456;
i__28174_28388 = G__28457;
continue;
}
} else {
}
}
break;
}

var seq__28195_28458 = cljs.core.seq(confetti);
var chunk__28196_28459 = null;
var count__28197_28460 = (0);
var i__28198_28461 = (0);
while(true){
if((i__28198_28461 < count__28197_28460)){
var p_28462 = chunk__28196_28459.cljs$core$IIndexed$_nth$arity$2(null,i__28198_28461);
(ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p_28462));

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_28462),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_28462),(5),(5));


var G__28463 = seq__28195_28458;
var G__28464 = chunk__28196_28459;
var G__28465 = count__28197_28460;
var G__28466 = (i__28198_28461 + (1));
seq__28195_28458 = G__28463;
chunk__28196_28459 = G__28464;
count__28197_28460 = G__28465;
i__28198_28461 = G__28466;
continue;
} else {
var temp__5823__auto___28467 = cljs.core.seq(seq__28195_28458);
if(temp__5823__auto___28467){
var seq__28195_28468__$1 = temp__5823__auto___28467;
if(cljs.core.chunked_seq_QMARK_(seq__28195_28468__$1)){
var c__5694__auto___28469 = cljs.core.chunk_first(seq__28195_28468__$1);
var G__28470 = cljs.core.chunk_rest(seq__28195_28468__$1);
var G__28471 = c__5694__auto___28469;
var G__28472 = cljs.core.count(c__5694__auto___28469);
var G__28473 = (0);
seq__28195_28458 = G__28470;
chunk__28196_28459 = G__28471;
count__28197_28460 = G__28472;
i__28198_28461 = G__28473;
continue;
} else {
var p_28474 = cljs.core.first(seq__28195_28468__$1);
(ctx.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p_28474));

ctx.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p_28474),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p_28474),(5),(5));


var G__28475 = cljs.core.next(seq__28195_28468__$1);
var G__28476 = null;
var G__28477 = (0);
var G__28478 = (0);
seq__28195_28458 = G__28475;
chunk__28196_28459 = G__28476;
count__28197_28460 = G__28477;
i__28198_28461 = G__28478;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dead_QMARK_)){
(ctx.font = "32px sans-serif");

(ctx.fillStyle = "#facc15");

ctx.fillText("\u2620\uFE0F",(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frog) - (16)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frog) + (10)));
} else {
if(cljs.core.truth_(won_QMARK_)){
} else {
var map__28199_28479 = frogger.core.frog_size;
var map__28199_28480__$1 = cljs.core.__destructure_map(map__28199_28479);
var w_28481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28199_28480__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h_28482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28199_28480__$1,new cljs.core.Keyword(null,"h","h",1109658740));
frogger.core.draw_pixels_BANG_(ctx,frogger.core.frog_pixels,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frog) - (w_28481 / (2))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frog) - (h_28482 / (2))),(4),null);
}
}

if(cljs.core.truth_(won_QMARK_)){
(ctx.fillStyle = "#fef08a");

(ctx.font = "28px sans-serif");

ctx.fillText("YOU WIN!",(310),(200));
} else {
}

return frogger.core.draw_close_button_BANG_(ctx);
}
});
frogger.core.update_BANG_ = (function frogger$core$update_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed?","closed?",-1408769040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)))){
return null;
} else {
var now = Date.now();
var map__28203 = cljs.core.deref(frogger.core.state);
var map__28203__$1 = cljs.core.__destructure_map(map__28203);
var dead_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"dead?","dead?",990391228));
var dead_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"dead-until","dead-until",1891719697));
var won_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"won?","won?",-794748996));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var prev_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28203__$1,new cljs.core.Keyword(null,"prev-keys","prev-keys",-443053422));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);

if(cljs.core.truth_(dead_QMARK_)){
if((now >= dead_until)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dead?","dead?",990391228),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(360)], null)], 0));
} else {
return null;
}
} else {
if(cljs.core.truth_(won_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.update,new cljs.core.Keyword(null,"confetti","confetti",-717634145),(function (ps){
return cljs.core.filterv((function (p1__28201_SHARP_){
return (new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(p1__28201_SHARP_) > (0));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28200_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__28200_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p1__28200_SHARP_)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p1__28200_SHARP_)),new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._PLUS_,0.12),new cljs.core.Keyword(null,"life","life",939004719),cljs.core.dec);
}),ps));
}));
} else {
var just_28483 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(keys,prev_keys);
if(cljs.core.truth_((just_28483.cljs$core$IFn$_invoke$arity$1 ? just_28483.cljs$core$IFn$_invoke$arity$1("ArrowLeft") : just_28483.call(null,"ArrowLeft")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frogger.core.hop_size], 0));
} else {
}

if(cljs.core.truth_((just_28483.cljs$core$IFn$_invoke$arity$1 ? just_28483.cljs$core$IFn$_invoke$arity$1("ArrowRight") : just_28483.call(null,"ArrowRight")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frogger.core.hop_size], 0));
} else {
}

if(cljs.core.truth_((just_28483.cljs$core$IFn$_invoke$arity$1 ? just_28483.cljs$core$IFn$_invoke$arity$1("ArrowUp") : just_28483.call(null,"ArrowUp")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frogger.core.hop_size], 0));
} else {
}

if(cljs.core.truth_((just_28483.cljs$core$IFn$_invoke$arity$1 ? just_28483.cljs$core$IFn$_invoke$arity$1("ArrowDown") : just_28483.call(null,"ArrowDown")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frogger.core.hop_size], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-keys","prev-keys",-443053422),keys);

if(cljs.core.truth_(frogger.core.on_any_log_QMARK_())){
var temp__5823__auto___28484 = cljs.core.some((function (l){
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(l));
if(and__5160__auto__){
return cljs.core.some((function (p1__28202_SHARP_){
return frogger.core.collides_QMARK_(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)),p1__28202_SHARP_,l);
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(l));
} else {
return and__5160__auto__;
}
})())){
return l;
} else {
return null;
}
}),new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)));
if(cljs.core.truth_(temp__5823__auto___28484)){
var lane_28485 = temp__5823__auto___28484;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(lane_28485)], 0));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.update,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (lanes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lane){
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(lane);
var map__28204 = frogger.core.entity_size(lane);
var map__28204__$1 = cljs.core.__destructure_map(map__28204);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"w","w",354169001));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(lane,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
var nx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(e) + spd);
if((nx > frogger.core.canvas_width)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"x","x",2099068185),(- w));
} else {
if(((nx + w) < (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"x","x",2099068185),frogger.core.canvas_width);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"x","x",2099068185),nx);

}
}
}),ents);
}));
}),lanes);
}));

if(cljs.core.truth_(frogger.core.deadly_collision_QMARK_())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dead?","dead?",990391228),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dead-until","dead-until",1891719697),(now + (3000))], 0));
} else {
}

var fx_28486 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)));
if((((fx_28486 < (0))) || ((fx_28486 > frogger.core.canvas_width)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dead?","dead?",990391228),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dead-until","dead-until",1891719697),(now + (3000)),new cljs.core.Keyword(null,"frog","frog",37988944),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)),new cljs.core.Keyword(null,"x","x",2099068185),(((fx_28486 < (0)))?(16):(frogger.core.canvas_width - (16))))], 0));
} else {
}

if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state))) < (50))){
var temp__5821__auto__ = frogger.core.home_index_at(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frog","frog",37988944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state))));
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"occupied-homes","occupied-homes",-485493138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state)),idx)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dead?","dead?",990391228),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dead-until","dead-until",1891719697),(now + (3000))], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update,new cljs.core.Keyword(null,"occupied-homes","occupied-homes",-485493138),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"frog","frog",37988944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(360)], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"occupied-homes","occupied-homes",-485493138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state))),cljs.core.count(new cljs.core.Keyword(null,"homes","homes",1010939273).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frogger.core.state))))){
return frogger.core.spawn_confetti_BANG_();
} else {
return null;
}
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dead?","dead?",990391228),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dead-until","dead-until",1891719697),(now + (3000))], 0));
}
} else {
return null;
}

}
}
}
});
frogger.core.game_loop = (function frogger$core$game_loop(ctx){
frogger.core.update_BANG_();

frogger.core.draw_BANG_(ctx);

return requestAnimationFrame((function (){
return (frogger.core.game_loop.cljs$core$IFn$_invoke$arity$1 ? frogger.core.game_loop.cljs$core$IFn$_invoke$arity$1(ctx) : frogger.core.game_loop.call(null,ctx));
}));
});
frogger.core.close_game_BANG_ = (function frogger$core$close_game_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frogger.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),true);

var temp__5823__auto__ = document.getElementById("game");
if(cljs.core.truth_(temp__5823__auto__)){
var canvas = temp__5823__auto__;
return canvas.remove();
} else {
return null;
}
});
frogger.core.init = (function frogger$core$init(){
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.addEventListener("click",(function (e){
var rect = canvas.getBoundingClientRect();
var x = (e.clientX - rect.left);
var y = (e.clientY - rect.top);
if((((x > (frogger.core.canvas_width - (70)))) && ((((x < frogger.core.canvas_width)) && ((((y > (8))) && ((y < (32))))))))){
return frogger.core.close_game_BANG_();
} else {
return null;
}
}));

return frogger.core.game_loop(ctx);
});
frogger.core.reload_BANG_ = (function frogger$core$reload_BANG_(){
return console.log("reloaded");
});
frogger.core.on_key = (function frogger$core$on_key(e,down_QMARK_){
var k = e.key;
if(cljs.core.truth_((function (){var fexpr__28205 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null);
return (fexpr__28205.cljs$core$IFn$_invoke$arity$1 ? fexpr__28205.cljs$core$IFn$_invoke$arity$1(k) : fexpr__28205.call(null,k));
})())){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frogger.core.state,cljs.core.update,new cljs.core.Keyword(null,"keys","keys",1068423698),(cljs.core.truth_(down_QMARK_)?cljs.core.conj:cljs.core.disj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));
} else {
return null;
}
});
(window.onkeydown = (function (p1__28206_SHARP_){
return frogger.core.on_key(p1__28206_SHARP_,true);
}));
(window.onkeyup = (function (p1__28207_SHARP_){
return frogger.core.on_key(p1__28207_SHARP_,false);
}));

//# sourceMappingURL=frogger.core.js.map
