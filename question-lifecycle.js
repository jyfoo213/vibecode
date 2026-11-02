export const lifecycleStates=['active','done','archived'];
export function questionLifecycle(review){return lifecycleStates.includes(review?.lifecycle)?review.lifecycle:'active';}
export function setQuestionLifecycle(review,question,state){if(!lifecycleStates.includes(state))throw new RangeError('Unknown question state.');return {...(review||{}),verdict:review?.verdict||'not-reviewed',notes:review?.notes||'',revision:review?.revision||question.revision,lifecycle:state};}
export function filterQuestionLifecycle(cases,reviews,view='active'){return cases.filter(c=>view==='all'||(view==='archive'?questionLifecycle(reviews[c.id])!=='active':questionLifecycle(reviews[c.id])==='active'));}
