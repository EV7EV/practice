let t=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");const e=document.querySelector("#task-form"),n=document.querySelector("#task-list");e.addEventListener("submit",(function(n){n.preventDefault();const s=e.elements.taskName.value.trim();s&&a.push({id:t(),text:s});o(),c()}));let a=JSON.parse(localStorage.getItem("tasks"))||[];function o(){n.innerHTML="",a.forEach((t=>{const e=document.createElement("li");e.textContent=t.text;const a=document.createElement("button");a.textContent="X",a.dataset.index=t.id,a.addEventListener("click",s),e.appendChild(a),n.appendChild(e)}))}function s(t){const e=t.target.dataset.index;a.splice(e,1),o(),c()}function c(){localStorage.setItem("tasks",JSON.stringify(a))}o();
//# sourceMappingURL=index.1d434ac7.js.map
