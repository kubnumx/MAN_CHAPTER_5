const KEY="forgotten-man-void-v2";const tree=document.getElementById("treeButton"),d=document.getElementById("dialogue"),choices=document.getElementById("choices"),egg=document.getElementById("egg"),music=document.getElementById("music");
let s=load(),typing=false,timer=null,current="",queue=null,i=0;
function load(){try{let x=JSON.parse(localStorage.getItem(KEY));if(x)return x}catch(e){}return{stage:0,egg:false,failed:false}}
function save(){localStorage.setItem(KEY,JSON.stringify(s))}
function sound(){music.volume=.42;music.play().catch(()=>{})}
function show(){d.classList.add("visible")} function hide(){d.classList.remove("visible");choices.innerHTML=""}
function type(t){clearInterval(timer);current=t;typing=true;d.innerHTML='<span class="line"></span>';let el=d.firstChild,n=0;timer=setInterval(()=>{el.textContent=t.slice(0,n++);if(n>t.length){clearInterval(timer);typing=false}},18)}
function instant(){if(!typing)return false;clearInterval(timer);typing=false;d.firstChild.textContent=current;return true}
function play(lines,done){queue=lines;i=0;show();choices.innerHTML="";type(queue[0]);window.done=done||null}
function advance(){if(!queue)return;if(instant())return;i++;if(i<queue.length){type(queue[i])}else{let done=window.done;queue=null;window.done=null;if(done)done()}}
function choice(label,fn,down=false){let b=document.createElement("button");b.className="choice";b.textContent=down?label+"  ▼":label;b.onclick=e=>{e.stopPropagation();fn()};choices.appendChild(b)}
function fail(){s.failed=true;save();queue=null;clearInterval(timer);music.pause();hide();document.body.classList.add("fading");setTimeout(()=>document.body.classList.add("locked"),1400)}
function start(){s.stage=1;save();play(["Well, there is a man here.","He offers you something."],()=>{choices.innerHTML="";choice("Yes",receive,true);choice("No",fail)})}
function receive(){s.egg=true;s.stage=2;save();egg.classList.add("visible");play(['You received the "Egg".'],()=>{choices.innerHTML="";choice("Ask for more",askMore,true);choice("Do Not",goodbye)})}
function askMore(){goodbye()}
function goodbye(){s.stage=3;save();play(["It seems you have everything.","...","He waved goodbye, looking away slightly after a moment.","...","You felt a strange melancholy.","It was a feeling that you should not look for the man anymore.","... even though you had never done such a thing in the first place."],()=>{s.stage=4;save();hide()})}
function weight(){s.stage=5;save();play(["Well, there is not a man here.","... but, on Your shoulder, a weight remained.","A weight that carried far, far, into the distance..."],()=>{s.stage=6;save();hide()})}
function loop(){play(["..."])}
tree.onclick=()=>{sound();if(s.failed)return;if(queue){advance();return}if(s.stage===0)start();else if(s.stage===4)weight();else if(s.stage===6)loop()};
document.addEventListener("keydown",e=>{if(e.key.length!==1)return;window.buf=(window.buf||"")+e.key.toUpperCase();window.buf=window.buf.slice(-9);if(window.buf.endsWith("FORGOTTEN")){localStorage.removeItem(KEY);location.reload()}});
if(s.failed)document.body.classList.add("locked");if(s.egg)egg.classList.add("visible");