const STORAGE_KEY = "homixo_clean_home_v1";
const CFG = window.HOMIXO_CONFIG || {};
const challenges = [{"title": "Kitchen counter reset", "week": "Week 1 · Kitchen", "description": "Clear and wipe the kitchen counter so food-preparation space feels fresh.", "tasks": ["Put away items that do not belong on the counter", "Wipe the surface with a suitable cleaner", "Let the surface dry before placing items back"]}, {"title": "Dustbin refresh", "week": "Week 1 · Kitchen", "description": "Give your kitchen bin a quick clean and make sure it is dry before fitting a fresh liner.", "tasks": ["Empty the bin", "Wash if needed and dry completely", "Fit a correctly sized fresh bag"]}, {"title": "Wet and dry waste check", "week": "Week 1 · Kitchen", "description": "Set up a simple routine for separating household waste according to local rules.", "tasks": ["Identify your wet-waste container", "Identify your dry-waste container", "Check your local collection guidance"]}, {"title": "Fridge shelf check", "week": "Week 1 · Kitchen", "description": "Remove old spills and check food storage areas.", "tasks": ["Check for expired or spoiled food", "Wipe visible spills", "Return food in clean, organised groups"]}, {"title": "Sink and drain area", "week": "Week 1 · Kitchen", "description": "Clean the sink and the area around it.", "tasks": ["Remove dishes and debris", "Clean the sink with a suitable product", "Wipe the tap and surrounding counter"]}, {"title": "Spare bag station", "week": "Week 1 · Kitchen", "description": "Choose a dry, convenient place for spare garbage bag rolls.", "tasks": ["Choose a cool, dry storage spot", "Keep rolls away from heat and sharp objects", "Make spare bags easy to reach"]}, {"title": "Week 1 reset", "week": "Week 1 · Review", "description": "Review your kitchen waste routine and choose one habit to keep.", "tasks": ["Check your kitchen bin area", "Restock bags if needed", "Choose one improvement for next week"]}, {"title": "Bathroom surfaces", "week": "Week 2 · Bathroom", "description": "Refresh frequently touched bathroom surfaces.", "tasks": ["Clear the basin area", "Clean the basin and tap", "Wipe handles and switches safely"]}, {"title": "Bathroom bin", "week": "Week 2 · Bathroom", "description": "Clean and dry the bathroom bin.", "tasks": ["Empty the bin", "Clean and dry the inside", "Fit a fresh liner"]}, {"title": "Towel refresh", "week": "Week 2 · Bathroom", "description": "Make sure towels are clean and can dry properly between uses.", "tasks": ["Replace used towels with clean ones", "Hang towels so they can dry", "Check for damp areas"]}, {"title": "Bedroom floor", "week": "Week 2 · Bedroom", "description": "Clear the bedroom floor and make it easier to clean.", "tasks": ["Put clothes in their proper place", "Remove items from walkways", "Sweep or vacuum the floor"]}, {"title": "Bedside reset", "week": "Week 2 · Bedroom", "description": "Give your bedside area a simple reset.", "tasks": ["Clear unnecessary items", "Wipe the bedside surface", "Put essentials back neatly"]}, {"title": "Laundry corner", "week": "Week 2 · Bedroom", "description": "Make laundry easier to manage.", "tasks": ["Separate laundry as appropriate", "Empty the laundry basket if ready", "Keep the laundry area tidy"]}, {"title": "Week 2 reset", "week": "Week 2 · Review", "description": "Review bathroom and bedroom cleaning habits.", "tasks": ["Check bathroom bin condition", "Check laundry and towel routine", "Pick one habit to repeat"]}, {"title": "Living room surfaces", "week": "Week 3 · Living room", "description": "Dust and tidy the main living area.", "tasks": ["Put loose items away", "Dust tables and shelves", "Wipe frequently touched surfaces"]}, {"title": "Sofa and cushions", "week": "Week 3 · Living room", "description": "Refresh soft furnishings using their care instructions.", "tasks": ["Straighten cushions", "Remove visible crumbs", "Check fabric care guidance before cleaning"]}, {"title": "Entryway tidy", "week": "Week 3 · Organisation", "description": "Make the entrance easier to keep clean.", "tasks": ["Put footwear in its place", "Remove unnecessary items", "Sweep or wipe the entry area"]}, {"title": "Paper and packaging", "week": "Week 3 · Organisation", "description": "Sort household paper and packaging.", "tasks": ["Separate reusable items", "Keep recyclable material clean and dry", "Follow local recycling rules"]}, {"title": "High-touch points", "week": "Week 3 · Living room", "description": "Clean commonly touched points safely.", "tasks": ["Wipe door handles", "Clean commonly used switches carefully", "Use a product suitable for each surface"]}, {"title": "Floor care", "week": "Week 3 · Living room", "description": "Refresh one frequently used floor area.", "tasks": ["Move small obstacles safely", "Sweep or vacuum", "Mop only if suitable for the floor"]}, {"title": "Week 3 reset", "week": "Week 3 · Review", "description": "Review the organisation changes that made the biggest difference.", "tasks": ["Check the entryway", "Check living room surfaces", "Choose one clutter habit to maintain"]}, {"title": "Under-sink check", "week": "Week 4 · Deep clean", "description": "Tidy the area under the kitchen sink.", "tasks": ["Remove items carefully", "Wipe the cabinet floor and let it dry", "Return supplies safely and keep chemicals away from children"]}, {"title": "Appliance exterior", "week": "Week 4 · Deep clean", "description": "Clean one appliance exterior according to its care instructions.", "tasks": ["Switch off or unplug if the manual requires it", "Wipe the exterior with a suitable cloth", "Dry before reconnecting if applicable"]}, {"title": "Window and ledge", "week": "Week 4 · Deep clean", "description": "Refresh one window ledge or accessible glass area.", "tasks": ["Remove dust and loose debris", "Clean with a suitable method", "Avoid unsafe reaching or climbing"]}, {"title": "Bin wash day", "week": "Week 4 · Deep clean", "description": "Give your main household bin a deeper clean.", "tasks": ["Empty the bin", "Wash using an appropriate cleaner", "Dry fully before using a new liner"]}, {"title": "Storage shelf", "week": "Week 4 · Organisation", "description": "Organise one household storage shelf.", "tasks": ["Remove items you no longer need", "Wipe the shelf", "Return useful items in groups"]}, {"title": "Waste routine review", "week": "Week 4 · Waste", "description": "Check whether your household waste routine is working.", "tasks": ["Review wet and dry waste separation", "Check local collection days", "Identify any special waste needing a separate route"]}, {"title": "Monthly home reset", "week": "Week 4 · Deep clean", "description": "Choose a small area for a final monthly reset.", "tasks": ["Clear and clean the chosen area", "Return items to their places", "Note one improvement for next month"]}, {"title": "Bag usage review", "week": "Day 29 · Planner review", "description": "Review how your household used its garbage bags this month.", "tasks": ["Update your bag stock tracker", "Estimate your household's monthly usage", "Check whether your bin size and bag fit are suitable"]}, {"title": "Plan your next month", "week": "Day 30 · Keep it going", "description": "Choose the cleaning habits you want to continue.", "tasks": ["Pick three habits to repeat", "Choose a regular bin-cleaning day", "Save your planner bookmark for next time"]}];
const tips = [["Keep the bin dry", "After washing a bin, allow it to dry before fitting a new liner. Trapped moisture can contribute to unpleasant smells."], ["Avoid overfilling", "Leave enough space to tie the bag securely. Do not force sharp, heavy or bulky objects into a household liner."], ["Check bag fit", "Bag size alone does not guarantee fit. Check the bin height, rim circumference, shape and liner depth."], ["Store rolls properly", "Keep spare rolls in a dry place, away from heat, direct sunlight and sharp edges."], ["Clean the source of odour", "If a bin smells, clean the bin itself and the surrounding area. A fresh liner alone may not solve the cause."], ["Separate waste", "Keep wet, dry recyclable and special waste separate as required by your local municipal rules."], ["Handle sharp items safely", "Do not place loose broken glass, blades or other sharps into an ordinary thin household bag. Use a safe, locally approved disposal method."], ["Replace when needed", "Replace liners according to the type of waste, hygiene needs and collection schedule. Do not leave wet or odorous waste sitting for longer just to save bags."]];
let state = loadState();
let toastTimer;

function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{profile:null,checks:{},stock:{starting:90,used:0}}}catch(e){return {profile:null,checks:{},stock:{starting:90,used:0}}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function $(id){return document.getElementById(id)}
function showToast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2200)}
function showDashboard(){ $("welcomeView").classList.add("hidden");$("dashboardView").classList.remove("hidden");$("signOutBtn").classList.remove("hidden");$("greeting").textContent=`Welcome back${state.profile?.name ? ", "+state.profile.name.split(" ")[0] : ""}!`;renderChallenges();renderTips();renderProgress();renderStock();calculate(); }
function showWelcome(){ $("dashboardView").classList.add("hidden");$("welcomeView").classList.remove("hidden");$("signOutBtn").classList.add("hidden"); }
function renderProgress(){
 const done=challenges.filter((c,i)=>c.tasks.every((_,j)=>state.checks[`${i}-${j}`])).length;
 const pct=Math.round(done/30*100);$("completedCount").textContent=done;$("progressPercent").textContent=pct+"%";$("progressBar").style.width=pct+"%";
 $("progressCaption").textContent=done===30?"Amazing! You completed all 30 missions.":done===0?"Your first mission is waiting.":`${30-done} missions left in your journey.`;
 const next=challenges.findIndex((c,i)=>!c.tasks.every((_,j)=>state.checks[`${i}-${j}`]));
 $("dayPill").textContent=done===30?"ALL 30 DAYS COMPLETE":`DAY ${(next<0?30:next+1)} OF 30`;
}
function renderChallenges(){
 const host=$("challengeList");host.innerHTML="";
 challenges.forEach((c,i)=>{
  const completed=c.tasks.every((_,j)=>state.checks[`${i}-${j}`]);
  const card=document.createElement("article");card.className="challenge-card"+(completed?" done":"");
  const tasks=c.tasks.map((t,j)=>`<label class="task"><input type="checkbox" data-challenge="${i}" data-task="${j}" ${state.checks[`${i}-${j}`]?"checked":""}><span>${escapeHtml(t)}</span></label>`).join("");
  card.innerHTML=`<div class="challenge-meta"><span>${c.week}</span><span>${completed?"✓ COMPLETED":`DAY ${i+1}`}</span></div><h3>${c.title}</h3><p>${c.description}</p><div class="task-list">${tasks}</div>`;
  host.appendChild(card);
 });
 host.querySelectorAll('input[type="checkbox"]').forEach(box=>box.addEventListener("change",e=>{
  const k=`${e.target.dataset.challenge}-${e.target.dataset.task}`;state.checks[k]=e.target.checked;saveState();renderChallenges();renderProgress();showToast("Progress saved on this device");
 }));
}
function renderTips(){$("tipsList").innerHTML=tips.map((t,i)=>`<article class="tip-card"><div class="challenge-meta"><span>HOMIXO SMART TIP</span><span>0${i+1}</span></div><h3>${t[0]}</h3><p>${t[1]}</p></article>`).join("")}
function calculate(){
 const bins=Math.max(1,Number($("binCount").value)||1), every=Math.max(1,Number($("changeEvery").value)||1), pack=Math.max(1,Number($("packSize").value)||90);
 const monthly=bins*30/every, duration=pack/(bins/every);
 $("durationResult").textContent=duration<1?`${Math.round(duration*24)} hours`:`${Math.round(duration)} days`;
 $("monthlyResult").textContent=`About ${Math.ceil(monthly)} bags per 30 days`;
}
function renderStock(){
 const s=state.stock||{starting:90,used:0};$("startingStock").value=s.starting;$("usedStock").value=s.used;
 const remaining=Math.max(0,s.starting-s.used);$("remainingBags").textContent=remaining;$("stockBar").style.width=(s.starting?Math.min(100,remaining/s.starting*100):0)+"%";
}
function updateStock(){state.stock={starting:Math.max(0,Number($("startingStock").value)||0),used:Math.max(0,Number($("usedStock").value)||0)};saveState();renderStock();}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
async function submitRegistration(profile){
 // The static site must never contain a Google service-account key or sheet credentials.
 // Apps Script web-app URL is configured in config.js. Until configured, registration stays local.
 const endpoint=CFG.registrationEndpoint;
 if(endpoint){
  const payload={...profile,consent:true,consentVersion:CFG.privacyNoticeVersion||"v1",registeredAt:new Date().toISOString()};
  const response=await fetch(endpoint,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  // no-cors responses are opaque; do not represent this as server-confirmed.
  return "sent";
 }
 return "local";
}
$("registerForm").addEventListener("submit",async e=>{
 e.preventDefault();const msg=$("registerMessage");msg.textContent="";
 const phone=$("phone").value.trim();if(!/^[6-9]\d{9}$/.test(phone)){msg.textContent="Please enter a valid 10-digit Indian mobile number.";return}
 const profile={marketplace:$("marketplace").value,orderId:$("orderId").value.trim(),name:$("customerName").value.trim(),phone};
 if(!profile.orderId||!profile.name||!$("consent").checked){msg.textContent="Please complete all fields and accept the privacy notice.";return}
 state.profile=profile;saveState();
 try{await submitRegistration(profile);showDashboard();showToast("Your planner is ready. Progress saves on this device.");}
 catch(err){msg.textContent="Could not send registration. Please try again. Your planner details have not been confirmed.";console.error(err)}
});
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b===btn));
 ["challenges","tips","calculator","stock","waste"].forEach(name=>$(`${name}Panel`).classList.toggle("hidden",name!==btn.dataset.tab));
}));
["binCount","changeEvery","packSize"].forEach(id=>$(id).addEventListener("input",calculate));
["startingStock","usedStock"].forEach(id=>$(id).addEventListener("change",updateStock));
$("useOneBtn").addEventListener("click",()=>{state.stock.used=Math.min(state.stock.starting,state.stock.used+1);saveState();renderStock();showToast("One bag recorded");});
$("resetStockBtn").addEventListener("click",()=>{if(confirm("Reset your stock tracker to the original 90-bag pack?")){state.stock={starting:90,used:0};saveState();renderStock();showToast("Stock tracker reset");}});
$("signOutBtn").addEventListener("click",()=>{if(confirm("Sign out on this device? Your saved planner progress will remain on this browser.")){state.profile=null;saveState();showWelcome();}});
if(state.profile)showDashboard();else showWelcome();
