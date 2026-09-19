const STORY={"zh":{"start":{"lines":["好吧，","東方變成了西方，西方帶來了炎熱，","的確，","我成了被遺忘的人。","你也會忘記我嗎？"],"choices":[["否","certain"],["是","who"]]},"certain":{"lines":["你確定嗎？你以前已經忘記我很多次了。","即使你遇見我，之後我也會被遺忘。","有時我甚至會忘記自己…","我再問一遍，你會忘記我嗎？"],"choices":[["是","no-man"],["否","remember-question"]]},"who":{"lines":["你在跟誰說話？"],"stop":1},"no-man":{"lines":["好吧，這裡沒有男人。"],"stop":1},"remember-question":{"lines":["你會記得我嗎？","好吧。既然如此，那就忘記我吧。","我只是個凡人。","讓我給你講個故事。","很久很久以前，世界是這樣的。","你覺得怎麼樣？"],"choices":[["是","believe"],["否","story"]]},"believe":{"lines":["真的嗎？你真的相信這麼荒謬的事？"],"next":"continue-story"},"story":{"lines":["當然不是。畢竟，這只是個故事。"],"next":"continue-story"},"continue-story":{"lines":["現在，讓我繼續…","嗯，世界變了。人類發展了。","摩天大樓遍布地球。隨著摩天大樓的出現，一場大戰爆發了。","嗯……其實，人類依然存在……難道是我們犯了個錯誤？","總之，我現在可以說話了。","你明白我的意思嗎？"],"choices":[["明白","understand"],["不懂","dont-understand"]]},"understand":{"lines":["這太荒謬了，我完全不明白。"],"next":"future"},"dont-understand":{"lines":["這太荒謬了，我也不明白。"],"next":"future"},"future":{"lines":["但是總有一天，這個網站會消失。","到那時，我們可能就再也見不到對方了。","……","你想再見到彼此嗎？"],"choices":[["是","schedule"],["否","forgotten-ending"]]},"forgotten-ending":{"lines":["好的。我開始明白為什麼我會被遺忘了。"],"stop":1},"schedule":{"lines":["哦，太好了。","讓我告訴你我的行程。仔細聽。","星期四，我賣甜甜圈。","星期五，我流血。","星期六，我讓它在火山旁燃燒。","星期日，我採花。","我屏住呼吸，向左轉，祈求佛祖的慈悲。你還記得寫下這些嗎？"],"choices":[["不記得了","forgot-egg"],["記住","remembered-egg"]]},"forgot-egg":{"egg":1,"receivedAt":2,"lines":["好吧，看來你忘了。","請收下這個，並記得我。","（你收到一個雞蛋）","不過，你可能幾天後就會弄丟它。","所以請把它放在某個地方。","（丟雞蛋沒什麼好丟的。）"],"next":"final-egg"},"remembered-egg":{"egg":1,"receivedAt":5,"lines":["你很果斷。","我喜歡你！","你可能會忘記我，我也可能會忘記自己。","但我會記得你。謝謝你的好意。","以防萬一，請收下這個。","（你收到一個雞蛋）","不過，你可能很快就會弄丟它。","所以請把它放在某個地方。","丟了個蛋沒什麼好丟的。"],"next":"final-egg"},"final-egg":{"egg":1,"lines":["現在，這座島嶼即將消失。你必須離開。","如果你願意，我們會在那個地方再次相遇…","無論是11小時後，還是11年後，Inter都會在那裡等你。所以，慢慢來，洗把臉，穿好衣服。"],"final":1}},"en":{"start":{"lines":["Okay,","The east became the west, and the west brought the heat,","Indeed,","I became the forgotten man.","Will you forget me too?"],"choices":[["NO","certain"],["YES","who"]]},"certain":{"lines":["Are you sure? You have forgotten me many times before.","Even if you meet me, I will be forgotten afterward.","Sometimes I even forget myself…","I'll ask you one more time. Will you forget me?"],"choices":[["YES","no-man"],["NO","remember-question"]]},"who":{"lines":["Who are you talking to?"],"stop":1},"no-man":{"lines":["Okay. There is no man here."],"stop":1},"remember-question":{"lines":["Will you remember me?","Okay. If that's the case, then forget me.","I am only a mortal.","Let me tell you a story.","Long, long ago, the world was like this.","What do you think?"],"choices":[["YES","believe"],["NO","story"]]},"believe":{"lines":["Really? You actually believe something this absurd?"],"next":"continue-story"},"story":{"lines":["Of course not. After all, it's only a story."],"next":"continue-story"},"continue-story":{"lines":["Now, let me continue…","Hmm. The world changed. Humanity developed.","Skyscrapers covered the Earth. With the appearance of skyscrapers, a great war broke out.","Hmm… actually, humans still exist… did we make a mistake?","Anyway, I can speak now.","Do you understand what I mean?"],"choices":[["I UNDERSTAND","understand"],["I DON'T","dont-understand"]]},"understand":{"lines":["This is absurd. I don't understand at all."],"next":"future"},"dont-understand":{"lines":["This is absurd. I don't understand either."],"next":"future"},"future":{"lines":["But one day, this website will disappear.","By then, we may never see each other again.","…","Do you want to see each other again?"],"choices":[["YES","schedule"],["NO","forgotten-ending"]]},"forgotten-ending":{"lines":["Okay. I'm beginning to understand why I was forgotten."],"stop":1},"schedule":{"lines":["Oh, wonderful.","Let me tell you my schedule. Listen carefully.","On Thursday, I sell donuts.","On Friday, I bleed.","On Saturday, I let it burn beside a volcano.","On Sunday, I pick flowers.","I held my breath, turned left, and prayed for Buddha's mercy. Do you remember writing this down?"],"choices":[["I DON'T REMEMBER","forgot-egg"],["REMEMBER","remembered-egg"]]},"forgot-egg":{"egg":1,"receivedAt":2,"lines":["Okay. It seems you've forgotten.","Please take this, and remember me.","(You received an EGG.)","However, you may lose it in a few days.","So please put it somewhere.","(There is nothing shameful about losing an EGG.)"],"next":"final-egg"},"remembered-egg":{"egg":1,"receivedAt":5,"lines":["You are decisive.","I like you!","You may forget me, and I may forget myself.","But I will remember you. Thank you for your kindness.","Just in case, take this.","(You received an EGG.)","However, you may lose it very soon.","So please put it somewhere.","There is nothing shameful about losing an EGG."],"next":"final-egg"},"final-egg":{"egg":1,"lines":["Now, this island is about to disappear. You must leave.","If you wish, we will meet again in that place…","Whether it is 11 hours or 11 years, Inter will be there waiting for you. So, take your time—wash your face and get dressed."],"final":1}}};

const KEY="forgotten-man-story-v6";
const RESET="FORGOTTEN";
const GOLDEN=[
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20001.%20Calibration%20circle.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20008.%20Spectra.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20010.%20Mars.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20011.%20Jupiter.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20012.%20Earth.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20013.%20Earth.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20042.%20Snake%20River%20and%20Grand%20Tetons.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20076.%20Supermarket.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20081.%20Demonstration%20of%20licking%2C%20eating%20and%20drinking.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20098.%20X-ray%20of%20hand.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20102.%20Modern%20highway%20%28Ithaca%29.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20109.%20Radio%20telescope%20%28Arecibo%29.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20110.%20Page%20of%20book%20%28Newton%2C%20System%20of%20the%20World%29.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20111.%20Astronaut%20in%20space.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20112.%20Titan%20Centaur%20Launch.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20Golden%20Record%20115.%20Violin%20with%20music%20score%20%28Cavotina%29.png",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20golden%20record%208%20spectra.gif",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20golden%20record%209%20mercury.gif",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20golden%20record%2010%20mars.gif",
"https://commons.wikimedia.org/wiki/Special:FilePath/Voyager%20golden%20record%2011%20jupiter.gif"
];
const EGG="images/egg.png";
const dialogue=document.getElementById("dialogue"),choices=document.getElementById("choices"),game=document.getElementById("game"),slideshow=document.getElementById("background-slideshow"),eggDisplay=document.getElementById("egg-display"),music=document.getElementById("music");
let state=load(),buffer="",musicStarted=false,currentSlide=0,slideTimer=null;

function load(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.scene&&STORY[s.lang||"zh"][s.scene])return s}catch(e){}return{lang:"zh",scene:"start",line:0,ended:false,eggReceived:false}}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function sc(){return STORY[state.lang][state.scene]}
function eggText(t){if(state.lang==="en")return t.replace(/\bEGG\b/g,'<span class="highlight-egg">EGG</span>');return t.replace(/雞蛋/g,'<span class="highlight-egg">雞蛋</span>').replace(/蛋/g,'<span class="highlight-egg">蛋</span>')}
function hasReceivedEgg(){const s=sc();return !!state.eggReceived || !!(s.egg && typeof s.receivedAt==="number" && state.line>=s.receivedAt)}

function render(){
 const s=sc();
 choices.innerHTML="";
 dialogue.innerHTML='<div class="line">'+eggText(s.lines[state.line])+'</div>';
 if(hasReceivedEgg()){state.eggReceived=true;eggDisplay.classList.add("visible");save()}else{eggDisplay.classList.remove("visible")}
 if(s.choices&&state.line===s.lines.length-1){
   s.choices.forEach((c,i)=>{const b=document.createElement("button");b.className="choice";b.textContent="（"+c[0]+"）";b.style.animationDelay=i*130+"ms";b.onclick=e=>{e.stopPropagation();startMusic();state.scene=c[1];state.line=0;state.ended=false;save();render()};choices.appendChild(b)})
 }
 if(s.stop&&state.line===s.lines.length-1){state.ended=true;save();setTimeout(fail,1100)}
 if(s.final&&state.line===s.lines.length-1){state.ended=true;save()}
 if(state.ended&&s.stop){document.body.classList.add("fading-out");music.pause()}
}

function advance(){
 const s=sc();
 if(!s||state.ended||s.stop||(s.choices&&state.line===s.lines.length-1))return;
 startMusic();
 if(state.line<s.lines.length-1){state.line++;save();render()}
 else if(s.next){state.scene=s.next;state.line=0;save();render()}
}
game.onclick=advance;
function startMusic(){if(musicStarted)return;musicStarted=true;music.volume=.72;music.play().catch(()=>musicStarted=false)}
function fail(){const s=sc();if(!s.stop)return;state.ended=true;save();music.pause();music.currentTime=0;document.body.classList.add("fading-out")}

function buildSlideshow(){
 slideshow.innerHTML="";
 GOLDEN.forEach((src,i)=>{const slide=document.createElement("div");slide.className="slide";slide.style.backgroundImage=`url("${src}")`;slideshow.appendChild(slide)});
 const slides=[...slideshow.children];
 if(!slides.length)return;
 slides[0].classList.add("active");
 slideTimer=setInterval(()=>{slides[currentSlide].classList.remove("active");currentSlide=(currentSlide+1)%slides.length;slides[currentSlide].classList.add("active")},9000);
}

window.onkeydown=e=>{
 buffer+=(e.key||"").toUpperCase();
 if(buffer.length>9)buffer=buffer.slice(-9);
 if(buffer.endsWith(RESET)){localStorage.removeItem(KEY);location.reload();return}
 const tail=buffer.slice(-3);
 if(tail==="ENG"||tail==="CHI"){state.lang=tail==="ENG"?"en":"zh";save();render();buffer=""}
};
buildSlideshow();
render();
