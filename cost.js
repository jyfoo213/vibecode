export function estimate({inputTokens,outputTokens,inputRate,outputRate,tasks,calls}) {
 const values=[inputTokens,outputTokens,inputRate,outputRate,tasks,calls];
 if(values.some(v=>!Number.isFinite(v)||v<0)||calls<1)throw new RangeError('Enter valid non-negative values; calls must be at least 1.');
 const perCall=(inputTokens*inputRate+outputTokens*outputRate)/1e6;
 return {perCall,perTask:perCall*calls,monthly:perCall*calls*tasks};
}
export function filterLessons(lessons,category,query){const q=query.trim().toLowerCase();return lessons.filter(l=>(category==='All tracks'||l.category===category)&&`${l.title} ${l.summary} ${l.detail} ${l.category}`.toLowerCase().includes(q));}
