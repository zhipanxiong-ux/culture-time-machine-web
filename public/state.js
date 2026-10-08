(function(root){
  'use strict';
  function formatYear(year){const n=Number(year);if(!Number.isInteger(n)||n < -499||n > 2025) return 'Unavailable';return n<=0 ? `${1-n} BCE` : `${n} CE`;}
  function readState(search){const q=new URLSearchParams(search);const raw=Number(q.get('year'));const year=q.has('year')&&Number.isInteger(raw)&&raw>=-499&&raw<=2025?raw:750;const places=q.get('places')==='heijo,changan'?['heijo','changan']:['changan','heijo'];const topic=['work','food','homes','exchange'].includes(q.get('topic'))?q.get('topic'):'work';return {year,places,topic};}
  function stateQuery(state){const q=new URLSearchParams();q.set('year',String(state.year));q.set('places',state.places.join(','));q.set('topic',state.topic);return '?'+q.toString();}
  root.CTM_STATE={formatYear,readState,stateQuery};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.CTM_STATE;
})(typeof window!=='undefined'?window:globalThis);
