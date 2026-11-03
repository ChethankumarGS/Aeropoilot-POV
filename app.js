(function(){
var PLANE="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";
var $=function(s){return document.querySelector(s)};
var M={x:innerWidth/2,y:innerHeight/2,moved:false};

/* ---------- content ---------- */
var projects=[['Swap Your Book','https://find-ur-next-book.vercel.app','Web · Live','A book-for-book exchange, with swap requests and private chat.','swap-your-book'],['Campus Connect','https://campus-connect-psi-eight.vercel.app','Web · Live','Courses, learning materials and an AI study assistant.','campus-connect'],['Sarathi','https://sarathi-wine.vercel.app','Web · Live','A scholarship assistant with filters and an AI matching flow.','sarathi'],['Wanderlust','https://wanderlust-tan-ten.vercel.app/listings','Web · Live','An accommodation platform with listings and reviews.','wanderlust'],['Where It Went','https://kharcha-kohl.vercel.app','Web · Live','A private expense tracker. Your data stays in your browser.','where-it-went'],['SchemaDrift','https://schema-drift-nine.vercel.app','Web · Live','Compare SQL or JSON database schemas and flag risky changes.','schema-drift']];
var skills=[['Frontend','React, Next.js, Tailwind'],['Backend','Node.js, Express, MongoDB'],['Languages','Java, TypeScript, Python'],['Deploy','AWS, Docker, Vercel, GitHub']];
var stops=[['Software Engineering Intern','Mysa · 2026','Worked on app development, backend services and website interfaces.',['Node.js','TypeScript','AWS']],['Full Stack & DevOps Intern','TechSonIX · 2025','Worked across full-stack development and DevOps.',['Full-stack','DevOps']],['Intern','InlighnX Global · 2025','An early stop on my software engineering journey.',['Development']]];
var stamps=[['★ OPEN SOURCE ★','PR','Keycloak','Merged contribution'],['★ EDUCATION ★','2026','DSCE · ISE','Bengaluru'],['★ BUILDER ★','WEB','Products shipped','Always learning']];
var z=function(n){return String(n).padStart(2,'0')};
$('#skills').innerHTML=skills.map(function(s){return '<div class="bg"><b>'+s[0]+'</b><i></i><span>'+s[1]+'</span></div>'}).join('');
$('#stops').innerHTML=stops.map(function(s,i){return '<div class="sx rv"><small>STOP '+z(i+1)+'</small><h3>'+s[0].replace('&','&amp;')+'</h3><div class="co">'+s[1]+'</div><p>'+s[2]+'</p><div class="tags">'+s[3].map(function(t){return '<span>'+t+'</span>'}).join('')+'</div></div>'}).join('');
var rots=[-8,6,-4];
$('#pg').innerHTML=stamps.map(function(s,i){return '<div class="sm rv" style="--r:'+rots[i%3]+'deg"><small>'+s[0]+'</small><b>'+s[1]+'</b><h3>'+s[2]+'</h3><em>'+s[3]+'</em></div>'}).join('');
$('#rts').innerHTML=projects.map(function(p,i){return '<a class="rt" href="'+p[1]+'" target="_blank" rel="noopener noreferrer" data-c="Open" data-i="'+i+'"><span class="n">'+z(i+1)+'</span><h3>'+p[0]+'</h3><span class="ty">'+p[2]+'</span><p>'+p[3]+'</p><span class="ar" aria-hidden="true"></span></a>'}).join('');
/* hero letters */
(function(){var n=['Chethan','Kumar'];$('#bigname').innerHTML=n.map(function(w,t){return '<span class="nm">'+w.split('').map(function(c,i){return '<span class="lt" style="--i:'+(i+6*t)+'">'+c+'</span>'}).join('')+'</span>'}).join('')})();

/* ---------- audio fx ---------- */
var A={ctx:null,master:null,nb:null,
 init:function(){if(this.ctx)return this.ctx;var C=window.AudioContext||window.webkitAudioContext;if(!C)return null;var c=new C(),g=c.createGain();g.gain.value=.9;g.connect(c.destination);this.ctx=c;this.master=g;return c},
 resume:function(){if(this.ctx)this.ctx.resume()},
 running:function(){return this.ctx&&this.ctx.state==='running'},
 noise:function(){var c=this.ctx;if(!this.nb){var b=c.createBuffer(1,2*c.sampleRate,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=2*Math.random()-1;this.nb=b}return this.nb},
 chime:function(){var c=this.ctx,m=this.master;if(!c||!m)return;var t=c.currentTime;[[659.25,0],[523.25,.5]].forEach(function(p){var o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=p[0];g.gain.setValueAtTime(0,t+p[1]);g.gain.linearRampToValueAtTime(.35,t+p[1]+.02);g.gain.exponentialRampToValueAtTime(.001,t+p[1]+1.5);o.connect(g);g.connect(m);o.start(t+p[1]);o.stop(t+p[1]+1.6)})},
 say:function(s){try{var u=new SpeechSynthesisUtterance(s);u.rate=.95;var v=speechSynthesis.getVoices().find(function(v){return /^en[-_](GB|US|NG|IN)/i.test(v.lang)});if(v)u.voice=v;speechSynthesis.speak(u)}catch(e){}},
 engine:function(ms){var c=this.ctx,m=this.master;if(!c||!m)return;var t=c.currentTime,n=ms/1e3,s=c.createBufferSource();s.buffer=this.noise();s.loop=true;var f=c.createBiquadFilter();f.type='lowpass';f.frequency.setValueAtTime(200,t);f.frequency.exponentialRampToValueAtTime(2600,t+n);var g=c.createGain();g.gain.setValueAtTime(.02,t);g.gain.linearRampToValueAtTime(.55,t+.8*n);g.gain.linearRampToValueAtTime(0,t+n+.9);s.connect(f);f.connect(g);g.connect(m);s.start(t);s.stop(t+n+1);var o=c.createOscillator(),h=c.createGain();o.type='sawtooth';o.frequency.setValueAtTime(60,t);o.frequency.exponentialRampToValueAtTime(240,t+n);h.gain.setValueAtTime(.01,t);h.gain.linearRampToValueAtTime(.1,t+.8*n);h.gain.linearRampToValueAtTime(0,t+n+.9);o.connect(h);h.connect(m);o.start(t);o.stop(t+n+1)}
};

/* ---------- music: YouTube (his song choices) ---------- */
var tracks=[['Ddaf1YE1kms',"Can't Lie"],['IKlTR6Wlu0o',"Who's Lovin' You"],['4WAOkrHQY5I','Mine']];
var player,idx=0,playing=false,started=false,ytReady=false,wantAuto=false;
var PL='M8 5v14l11-7z',PA='M6 5h4v14H6zM14 5h4v14h-4z';
function syncMp(){$('#mp').classList.toggle('on',playing);$('#mp-play path').setAttribute('d',playing?PA:PL);$('#mp-t').textContent=tracks[idx][1];$('#mp-n').textContent=idx+1}
function startSong(){if(!player||!ytReady){wantAuto=true;return}wantAuto=false;try{player.unMute();player.setVolume(100);player.playVideo()}catch(e){}}
var tag=document.createElement('script');tag.src='https://www.youtube.com/iframe_api';document.head.appendChild(tag);
window.onYouTubeIframeAPIReady=function(){player=new YT.Player('yt-player',{height:'200',width:'100%',videoId:tracks[0][0],playerVars:{rel:0,playsinline:1},events:{onReady:function(){ytReady=true;if(wantAuto)startSong()},onStateChange:function(e){if(e.data===YT.PlayerState.PLAYING){playing=true;started=true}else if(e.data===YT.PlayerState.PAUSED){playing=false}else if(e.data===YT.PlayerState.ENDED){playing=false;idx=(idx+1)%tracks.length;player.loadVideoById(tracks[idx][0])}syncMp()}}})};
$('#mp-play').onclick=function(){if(!ytReady)return;started=true;if(playing)player.pauseVideo();else player.playVideo();syncMp()};
$('#mp-next').onclick=function(){if(!ytReady)return;idx=(idx+1)%tracks.length;if(started){player.loadVideoById(tracks[idx][0])}else{player.cueVideoById(tracks[idx][0])}syncMp()};
syncMp();

/* ---------- entrance: door -> board -> fly (same state machine as reference) ---------- */
var ld=$('#ld'),dr=$('#dr'),stEl=$('#st'),dh=$('#dh'),dcap=$('#dcap'),state='door';
var lines=['CHETHAN KUMAR','FULL STACK DEV','BENGALURU'];
var chars=lines.join('').split(''),offs=lines.map(function(_,t){return lines.slice(0,t).reduce(function(a,l){return a+l.length},0)});
var bd=$('#bd');bd.innerHTML=lines.map(function(l){return '<div class="rw">'+l.split('').map(function(){return '<i class="tl"><b>&nbsp;</b></i>'}).join('')+'</div>'}).join('');
var tiles=[].slice.call(bd.querySelectorAll('.tl'));
var ALPHA='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789→';
function setState(s){if(state===s)return;state=s;
 if(s==='opening'||s==='open'||s==='board'||s==='fly'){dr.classList.add('o');dh.textContent='Press anything to continue';dcap.textContent='Cabin door open'}
 if(s==='board'||s==='fly')dr.classList.add('x');
 if(s==='board')runBoard();if(s==='fly')runFly();if(s==='done'){ld.style.display='none';$('#fx').style.display='none'}}
function onInput(e){
 if(state==='door'){if(e.type==='keydown'||(e.type==='click'&&e.target.closest&&e.target.closest('#dd'))){A.init();A.resume();A.chime();startSong();setState('opening');setTimeout(function(){setState('open')},1500)}}
 else if(state==='open'){A.say('Welcome aboard.');setState('board')}}
['click','keydown','touchend'].forEach(function(ev){addEventListener(ev,onInput)});
function runBoard(){
 var tc=chars.map(function(c,t){return c===' '?0:8+Math.floor(16*Math.random())+Math.floor(t/3)}),txt=chars.map(function(){return '\u00a0'}),fl=chars.map(function(){return false}),dn=chars.map(function(){return false}),t0=Date.now(),fin=false;
 var iv=setInterval(function(){var el=Date.now()-t0,cnt=0;
  chars.forEach(function(c,i){if(c===' '||el<38*i)return;if(tc[i]>0){cnt++;tc[i]--;fl[i]=true;txt[i]=ALPHA[Math.floor(Math.random()*ALPHA.length)]}else if(!dn[i]){dn[i]=true;fl[i]=false;txt[i]=c}});
  var k=0;lines.forEach(function(l,r){for(var j=0;j<l.length;j++){var idx2=offs[r]+j,tl=tiles[k++];tl.firstChild.textContent=txt[idx2];tl.classList.toggle('fl',fl[idx2])}});
  stEl.textContent=el<700?'CHECK-IN':'BOARDING';
  if(!cnt&&el>600&&!fin){fin=true;stEl.textContent='NOW BOARDING';stEl.className='b';setTimeout(function(){setState('fly')},900)}},70);
 setTimeout(function(){setState('fly')},7e3);
 var chk=setInterval(function(){if(state!=='board'){clearInterval(iv);clearInterval(chk)}},100)}
function runFly(){
 document.body.classList.add('ready');if(A.running())A.engine(2700);
 var W=innerWidth,H=innerHeight,s0=Date.now(),pts=[],ft=$('#ft'),fe=$('#fe'),fp=$('#fp');$('#fx').style.display='block';
 var iv=setInterval(function(){var a=Math.min((Date.now()-s0)/2700,1),o=Math.pow(a,1.75),h=-.1*W+1.3*o*W,d=1.06*H-1.25*Math.pow(o,1.4)*H,u=-1.75*Math.pow(Math.max(o,5e-4),.4)*H,m=h-d-90;
  ld.style.clipPath='polygon(-6000px '+(-6e3-m)+'px,6000px '+(6e3-m)+'px,6000px -6000px,-6000px -6000px)';
  fe.setAttribute('x1','-6000');fe.setAttribute('y1',String(-6e3-m));fe.setAttribute('x2','6000');fe.setAttribute('y2',String(6e3-m));
  pts.push(h.toFixed(1)+','+d.toFixed(1));if(pts.length>70)pts.shift();ft.setAttribute('points',pts.join(' '));
  fp.setAttribute('transform','translate('+h+','+d+') rotate('+57.2958*Math.atan2(1.3*W,-u)+') scale(6) translate(-12,-12)');
  if(a>=1){clearInterval(iv);setState('done')}},16)}

/* ---------- cursor, hover ring, click stamp ---------- */
if(matchMedia('(pointer: fine)').matches){var dot=$('.dot'),ring=$('.ring');
 addEventListener('mousemove',function(e){M.x=e.clientX;M.y=e.clientY;M.moved=true;document.body.classList.add('mv');var t='translate('+e.clientX+'px,'+e.clientY+'px)';dot.style.transform=t;ring.style.transform=t});
 document.addEventListener('mouseover',function(e){var r=e.target.closest&&e.target.closest('a,button,[data-c]');ring.classList.toggle('h',!!r&&r.dataset.c!=='')});
 addEventListener('click',function(e){var d=document.createElement('div');d.className='stp';d.textContent='CK ✓';d.style.left=e.clientX+'px';d.style.top=e.clientY+'px';document.body.appendChild(d);setTimeout(function(){d.remove()},1400)})}

/* ---------- sky canvas (cloud drift, parallax, cursor-reactive planes, ripples) ---------- */
(function(){var cv=$('#bg'),ctx=cv.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2),w=0,h=0,P=new Path2D(PLANE);
 var clouds=Array.from({length:7},function(){return{x:Math.random(),y:Math.random(),r:130+130*Math.random(),s:.004+.008*Math.random()}});
 var R=[[.06,.8,.58,.18,'BLR','LHR'],[.2,.28,.92,.66,'DEL','DXB'],[.6,.92,.96,.2,'ACC','JFK'],[.03,.42,.46,.94,'ABV','CDG'],[.42,.08,.82,.88,'NBO','AMS'],[.72,.34,.14,.86,'CPT','IST']];
 function size(){w=innerWidth;h=innerHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}size();addEventListener('resize',size);
 function pt(r,t){var x0=r[0]*w,y0=r[1]*h,x1=r[2]*w,y1=r[3]*h,dy=y1-y0,dx=x0-x1;if(dx>0){dy=-dy;dx=-dx}var cx=(x0+x1)/2+.25*dy,cy=(y0+y1)/2+.25*dx,u=1-t;return[u*u*x0+2*u*t*cx+t*t*x1,u*u*y0+2*u*t*cy+t*t*y1,Math.atan2(2*u*(cy-y0)+2*t*(y1-cy),2*u*(cx-x0)+2*t*(x1-cx)),cx,cy]}
 function frame(e){var px=-((M.x-w/2)*.012),py=-((M.y-h/2)*.012),mid=w/2;ctx.save();ctx.translate(px,py);
  clouds.forEach(function(c){var x=((c.x+e*c.s*.4)%1.3-.15)*w,y=c.y*h,g=ctx.createRadialGradient(x,y,0,x,y,c.r);g.addColorStop(0,'rgba(255,255,255,.6)');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(x-c.r,y-c.r,2*c.r,2*c.r)});
  ctx.strokeStyle='rgba(21,20,15,.08)';ctx.lineWidth=1;
  for(var y=-(.1*h);y<1.1*h;y+=h/7){ctx.beginPath();ctx.moveTo(-40,y);ctx.quadraticCurveTo(mid,y+(y-h/2)*.14,w+40,y);ctx.stroke()}
  for(var x=-(.2*w);x<1.2*w;x+=w/9){ctx.beginPath();ctx.moveTo(mid+(x-mid)*.82,-40);ctx.lineTo(mid+(x-mid)*1.18,h+40);ctx.stroke()}
  R.forEach(function(r,i){var a=pt(r,0),b=pt(r,1);ctx.setLineDash([3,7]);ctx.lineDashOffset=-(14*e);ctx.strokeStyle='rgba(21,20,15,.22)';ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.quadraticCurveTo(a[3],a[4],b[0],b[1]);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='rgba(21,20,15,.5)';ctx.font='500 10px "DM Mono",monospace';[[a,r[4]],[b,r[5]]].forEach(function(q){ctx.beginPath();ctx.arc(q[0][0],q[0][1],3,0,6.3);ctx.fill();ctx.fillText(q[1],q[0][0]+8,q[0][1]+3)});
   var c=(.035*e+.17*i)%1,p=pt(r,c),near=140>Math.hypot(p[0]+px-M.x,p[1]+py-M.y);
   for(var k=1;k<=16;k++){var t0=c-.005*k,t1=c-(k-1)*.005;if(t0<0)break;var s0=pt(r,t0),s1=pt(r,t1);ctx.strokeStyle=(near?'rgba(255,74,28,':'rgba(21,20,15,')+(1-k/16)*.32+')';ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(s0[0],s0[1]);ctx.lineTo(s1[0],s1[1]);ctx.stroke()}
   ctx.save();ctx.translate(p[0],p[1]);ctx.rotate(p[2]+Math.PI/2);var sc=near?1.6:1.1;ctx.scale(sc,sc);ctx.translate(-12,-12);ctx.fillStyle=near?'#8B0000':'rgba(21,20,15,.75)';ctx.fill(P);ctx.restore()});
  if(M.moved)for(var n=0;n<2;n++){var rr=(30*e+40*n)%80;ctx.strokeStyle='rgba(255,74,28,'+(1-rr/80)*.55+')';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(M.x-px,M.y-py,rr+8,0,6.3);ctx.stroke()}
  ctx.restore()}
 (function loop(){ctx.clearRect(0,0,w,h);frame(Date.now()/1400);requestAnimationFrame(loop)})()})();

/* ---------- rail + hud ---------- */
var N=[['hero','Departure','BLR'],['about','About','DEL'],['line','The line','TOR'],['routes','Routes','SAN'],['pass','Passport','CMN'],['arrive','Arrival','LHR']];
var rail=$('#rail'),pip=rail.querySelector('.pip');
N.forEach(function(n){var a=document.createElement('a');a.href='#'+n[0];a.setAttribute('data-c','');a.innerHTML='<em>'+n[2]+'</em><span>'+n[1]+'</span>';rail.appendChild(a)});
var rls=[].slice.call(rail.querySelectorAll('a')),mob=false,last=0,vel=0,vt;
function layout(){var lim=Math.max(1,document.documentElement.scrollHeight-innerHeight);mob=innerWidth<=860;rls.forEach(function(a,i){var el=document.getElementById(N[i][0]),p=Math.min(100,((el&&el.offsetTop)||0)/lim*100)+'%';if(mob){a.style.left=p;a.style.top=''}else{a.style.top=p;a.style.left=''}})}
function onScroll(){var lim=document.documentElement.scrollHeight-innerHeight,p=lim>0?scrollY/lim:0;rail.style.setProperty('--p',100*p+'%');var cur=0;N.forEach(function(n,i){var el=document.getElementById(n[0]);if(el&&el.getBoundingClientRect().top<.5*innerHeight)cur=i});rls.forEach(function(a,i){a.classList.toggle('on',i<=cur)});
 var d=scrollY-last;last=scrollY;vel=Math.max(-16,Math.min(16,.5*d));clearTimeout(vt);vt=setTimeout(function(){vel=0;pip.style.setProperty('--bk',(mob?90:180)+'deg')},160);pip.style.setProperty('--bk',(mob?90:180)+vel+'deg');
 var alt=100*Math.round((p<.08?p/.08:p>.92?(1-p)/.08:1)*350);$('#hud').innerHTML='<b>BLR → LHR</b> · CK-2026<br>ALT '+alt.toLocaleString('en-US')+' FT · '+(p<.02||p>.98?0:840)+' KM/H<br>'+Math.round((1-p)*5e3).toLocaleString('en-US')+' KM TO GO'}
layout();onScroll();setTimeout(layout,1200);addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',function(){layout();onScroll()});addEventListener('load',function(){layout();onScroll()});

/* ---------- reveal on scroll ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

/* ---------- hero letters react to cursor ---------- */
var big=$('#bigname'),lts=[].slice.call(big.querySelectorAll('.lt'));
(function loop(){if(scrollY<innerHeight){var b=big.getBoundingClientRect();lts.forEach(function(t){var cx=b.left+t.offsetLeft+t.offsetWidth/2,cy=b.top+t.offsetTop+t.offsetHeight/2,n=Math.max(0,1-Math.hypot(M.x-cx,M.y-cy)/260);t.style.setProperty('--dd',n.toFixed(3));t.style.setProperty('--w',String(Math.round(420+480*n)));t.style.transform=n>.01?'translateY('+(-(10*n))+'px)':''})}requestAnimationFrame(loop)})();

/* ---------- project preview follows cursor ---------- */
var pv=$('#pv'),pvOn=false,pvx=M.x,pvn=0;
function pvLoop(){if(!pvOn)return;pvn+=(M.x-pvx-pvn)*.15;pvx=M.x;pv.style.transform='translate('+(M.x+28)+'px,'+(M.y+22)+'px) rotate('+Math.max(-8,Math.min(8,.4*pvn))+'deg)';requestAnimationFrame(pvLoop)}
var rtsEl=$('#rts');
rtsEl.querySelectorAll('.rt').forEach(function(a){a.addEventListener('mouseenter',function(){var p=projects[+a.dataset.i];pv.innerHTML='<div class="ph"><img src="assets/'+p[4]+'.png" alt="'+p[0]+'"></div><b>'+p[0]+'</b><small>'+p[2]+'</small>';pv.classList.add('on');if(!pvOn){pvOn=true;pvLoop()}});
 a.addEventListener('click',function(e){if(matchMedia('(pointer: coarse)').matches){e.preventDefault();location.assign(a.href)}})});
rtsEl.addEventListener('mouseleave',function(){pv.classList.remove('on');pvOn=false});

/* ---------- copy email ---------- */
$('#mail').onclick=function(){var b=this;try{navigator.clipboard.writeText('chethankumar0544@gmail.com')}catch(e){}b.textContent='Copied ✓';setTimeout(function(){b.textContent='chethankumar0544@gmail.com'},1500)};

/* ---------- smooth scroll (lerp, like the reference's Lenis) ---------- */
(function(){var target=scrollY,cur=scrollY,anim=false,lim=function(){return Math.max(0,document.documentElement.scrollHeight-innerHeight)};
 addEventListener('wheel',function(e){if(e.ctrlKey)return;e.preventDefault();var dy=e.deltaY*(e.deltaMode===1?100/6:e.deltaMode===2?innerHeight:1);target=Math.max(0,Math.min(lim(),(anim?target:scrollY)+dy));if(!anim){cur=scrollY;anim=true;requestAnimationFrame(step)}},{passive:false});
 var lt=0;function step(t){var dt=t-(lt||t);lt=t;var k=1-Math.exp(-60*.1*dt*.001);cur=cur+(target-cur)*k;if(Math.abs(target-cur)<.5){cur=target;anim=false;lt=0;scrollTo(0,cur);return}scrollTo(0,cur);requestAnimationFrame(step)}
 addEventListener('scroll',function(){if(!anim){target=cur=scrollY}},{passive:true})})();
})();
