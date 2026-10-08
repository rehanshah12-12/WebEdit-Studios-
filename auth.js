async function post(url,form){const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});const j=await r.json();if(!r.ok)throw Error(j.error||'Request failed');return j}
const l=document.querySelector('#loginForm'),g=document.querySelector('#registerForm');
if(l)l.onsubmit=async e=>{e.preventDefault();try{await post('/api/login',l);location='/dashboard.html'}catch(x){document.querySelector('#msg').textContent=x.message}};
if(g)g.onsubmit=async e=>{e.preventDefault();try{await post('/api/register',g);location='/dashboard.html'}catch(x){document.querySelector('#msg').textContent=x.message}};
