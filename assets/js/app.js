/* QGIS MASTER LAB — Motor local, sin dependencias externas ni HTML inyectado desde los datos */
(() => {
  'use strict';
  const STORAGE_KEY = 'qgisLabProgress';
  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const lines = (v) => esc(v).replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  const allLessons = courseData.modules.flatMap(m => m.lessons.map(l => ({...l, moduleId:m.id, moduleTitle:m.title})));
  const validIds = new Set(allLessons.map(l => l.id));
  let completed = loadProgress();
  let currentLesson = null;
  let quizSubmitted = false;
  const nav = $('moduleNav'), content = $('lessonContent'), welcome = $('welcomeScreen'), searchInput = $('searchInput'), searchResults = $('searchResults');
  function loadProgress(){
    try { const x = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(x) ? [...new Set(x.filter(id => typeof id === 'string' && validIds.has(id)))] : []; }
    catch(e){ return []; }
  }
  function saveProgress(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(completed)); } catch(e) { showNotice('No fue posible guardar en este navegador. Exporta tu progreso para conservarlo.','warn'); } updateProgress(); }
  function showNotice(message,type='info'){ const n=$('notice'); n.textContent=message; n.className='notice '+type; n.hidden=false; }
  function updateProgress(){ const pct = allLessons.length ? Math.round(completed.length/allLessons.length*100) : 0; $('globalProgressBar').style.width=pct+'%'; $('globalProgressBar').setAttribute('aria-valuenow',String(pct)); $('globalProgressText').textContent=`${completed.length} de ${allLessons.length} lecciones · ${pct}%`; document.querySelectorAll('[data-lesson-id]').forEach(el=>el.classList.toggle('is-complete',completed.includes(el.dataset.lessonId))); }
  function renderNavigation(){ nav.innerHTML=''; courseData.modules.forEach((m,idx)=>{
    const details=document.createElement('details'); details.className='module'; if(idx===0) details.open=true;
    const summary=document.createElement('summary'); summary.innerHTML=`<span class="module-title">${esc(m.id)} · ${esc(m.title)}</span><span class="module-count">${m.lessons.filter(l=>completed.includes(l.id)).length}/${m.lessons.length}</span>`; details.appendChild(summary);
    const list=document.createElement('div'); list.className='lesson-list'; m.lessons.forEach(l=>{ const b=document.createElement('button'); b.type='button'; b.className='lesson-link'; b.dataset.lessonId=l.id; b.innerHTML=`<span class="lesson-status" aria-hidden="true">${completed.includes(l.id)?'✓':'○'}</span><span>${esc(l.title)}</span>`; b.addEventListener('click',()=>loadLesson(l)); list.appendChild(b); }); details.appendChild(list); nav.appendChild(details);
  }); updateProgress(); }
  function section(title,body){ return `<section class="lesson-section"><h2>${esc(title)}</h2>${body}</section>`; }
  function list(items, ordered=false){ const tag=ordered?'ol':'ul'; return `<${tag}>${(items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</${tag}>`; }
  function renderErrors(items){ return `<div class="error-grid">${items.map(x=>`<article class="error-card"><h3>${esc(x.issue)}</h3><p>${esc(x.fix)}</p></article>`).join('')}</div>`; }
  function renderSources(items){ return `<ul class="source-list">${items.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`).join('')}</ul><p class="muted small">Los enlaces apuntan a documentación de referencia. La numeración de menús y algoritmos puede cambiar entre versiones; comprueba la versión instalada.</p>`; }
  function loadLesson(l){ currentLesson=allLessons.find(x=>x.id===l.id)||l; quizSubmitted=false; welcome.hidden=true; searchResults.hidden=true; content.hidden=false; searchInput.value='';
    const x=currentLesson;
    content.innerHTML=`<div class="lesson-meta"><span class="pill">${esc(x.level)}</span><span class="pill">${esc(x.time)} min</span><span class="pill">${esc(x.moduleId)} · ${esc(x.moduleTitle)}</span></div><h1>${esc(x.title)}</h1>
    ${section('1. Objetivos de aprendizaje',list(x.objectives))}<p><strong>Prerrequisitos:</strong> ${esc(x.prerequisites)}</p>
    ${section('2. Desarrollo conceptual',`<p>${lines(x.conceptual)}</p>`)}
    ${section('3. Terminología clave',`<p>${esc(x.terminology)}</p>`)}
    ${section('4. Herramienta o ruta en QGIS',`<p>${esc(x.toolPath)}</p>`)}
    <section class="lesson-section"><h2>5. Diferencias por sistema operativo</h2><div class="os-grid"><article class="os-card mac"><h3>macOS</h3><p>${esc(x.macOsDiff)}</p></article><article class="os-card win"><h3>Windows</h3><p>${esc(x.winDiff)}</p></article></div></section>
    ${section('6. Procedimiento paso a paso',list(x.steps,true))}
    ${section('7. Parámetros que debes revisar',`<p>${esc(x.parameters)}</p>`)}
    ${section('8. Resultado esperado',`<p>${esc(x.expectedResult)}</p>`)}
    ${section('9. Verificación y control de calidad',`<p>${esc(x.verification)}</p>`)}
    ${section('10. Errores frecuentes y cómo corregirlos',renderErrors(x.errors))}
    ${section('11. Caso de aplicación ambiental',`<p>${esc(x.case)}</p>`)}
    ${section('12. Práctica autónoma',`<p>${esc(x.practice)}</p>`)}
    ${section('13. Fuentes y documentación',renderSources(x.sources))}
    <section class="lesson-section quiz-box"><h2>14. Comprobación de aprendizaje</h2><p>${esc(x.quiz.question)}</p><form id="quizForm">${x.quiz.options.map((o,i)=>`<label class="quiz-option"><input type="radio" name="quiz" value="${i}"><span>${esc(o)}</span></label>`).join('')}<button class="btn primary" type="submit">Comprobar respuesta</button></form><div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div></section>
    <div class="lesson-actions"><button class="btn ${completed.includes(x.id)?'secondary':'success'}" id="completeLesson">${completed.includes(x.id)?'Marcar como pendiente':'Marcar lección como completada'}</button><div class="next-actions"><button class="btn secondary" id="prevLesson" ${allLessons.findIndex(y=>y.id===x.id)===0?'disabled':''}>← Anterior</button><button class="btn primary" id="nextLesson" ${allLessons.findIndex(y=>y.id===x.id)===allLessons.length-1?'disabled':''}>Siguiente →</button></div></div>`;
    $('quizForm').addEventListener('submit',e=>{e.preventDefault(); const chosen=content.querySelector('input[name="quiz"]:checked'); const box=$('quizFeedback'); if(!chosen){box.className='quiz-feedback warn';box.textContent='Selecciona una respuesta antes de comprobar.';return;} const ok=Number(chosen.value)===x.quiz.correct; box.className='quiz-feedback '+(ok?'correct':'incorrect'); box.innerHTML=`<strong>${ok?'Correcto.':'Aún no.'}</strong> ${esc(x.quiz.explanation)}`; quizSubmitted=true; });
    $('completeLesson').addEventListener('click',()=>{if(completed.includes(x.id)) completed=completed.filter(id=>id!==x.id); else completed.push(x.id); saveProgress(); renderNavigation(); loadLesson(x);});
    const idx=allLessons.findIndex(y=>y.id===x.id); $('prevLesson').addEventListener('click',()=>{if(idx>0)loadLesson(allLessons[idx-1]);}); $('nextLesson').addEventListener('click',()=>{if(idx<allLessons.length-1)loadLesson(allLessons[idx+1]);});
    document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.lessonId===x.id)); content.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function runSearch(){const q=searchInput.value.trim().toLocaleLowerCase('es'); if(!q){searchResults.hidden=true;return;} const matches=allLessons.filter(l=>[l.title,l.moduleTitle,l.conceptual,l.terminology,l.toolPath,l.case,l.practice,...l.objectives,...l.steps].join(' ').toLocaleLowerCase('es').includes(q)); searchResults.hidden=false; welcome.hidden=true; content.hidden=true; searchResults.innerHTML=`<h2>Resultados (${matches.length})</h2>${matches.length?matches.map(l=>`<button class="search-result" data-result-id="${esc(l.id)}"><strong>${esc(l.title)}</strong><span>${esc(l.moduleId)} · ${esc(l.moduleTitle)} · ${esc(l.level)}</span><small>${esc(l.conceptual.slice(0,180))}…</small></button>`).join(''):'<p>No se encontraron coincidencias. Prueba con “CRS”, “buffer”, “ráster” o “tabla”.'}</p>`; searchResults.querySelectorAll('[data-result-id]').forEach(b=>b.addEventListener('click',()=>{const l=allLessons.find(x=>x.id===b.dataset.resultId);if(l)loadLesson(l);})); }
  $('searchButton').addEventListener('click',runSearch); searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')runSearch();}); searchInput.addEventListener('input',()=>{if(!searchInput.value.trim()){searchResults.hidden=true; if(!currentLesson)welcome.hidden=false;}});
  $('btnStart').addEventListener('click',()=>loadLesson(allLessons[0]));
  $('btnExport').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({schemaVersion:1,course:'QGIS MASTER LAB',completedAt:new Date().toISOString(),completed},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='qgis_master_lab_progreso.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  $('btnImport').addEventListener('click',()=>$('fileImport').click());
  $('fileImport').addEventListener('change',e=>{const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(reader.result);const arr=Array.isArray(parsed)?parsed:parsed?.completed;if(!Array.isArray(arr)||arr.some(id=>typeof id!=='string'))throw new Error('Formato inválido');const clean=[...new Set(arr.filter(id=>validIds.has(id)))];completed=clean;saveProgress();renderNavigation();showNotice(`Importación validada: ${completed.length} lecciones reconocidas. Los identificadores desconocidos se ignoraron.`,'success');}catch(err){showNotice('No se pudo importar: el archivo no tiene el formato esperado.','warn');}finally{e.target.value='';}};reader.readAsText(file);});
  $('btnReset').addEventListener('click',()=>{if(confirm('¿Borrar el progreso guardado en este navegador? Esta acción no elimina archivos de datos ni proyectos QGIS.')){completed=[];try{localStorage.removeItem(STORAGE_KEY);}catch(e){}renderNavigation();showNotice('Progreso local reiniciado.','info');if(currentLesson)loadLesson(currentLesson);else{content.hidden=true;welcome.hidden=false;}}});
  $('menuToggle').addEventListener('click',()=>{$('sidebar').classList.toggle('open');});
  renderNavigation();
})();
