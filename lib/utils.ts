export function cn(...v:(string|false|null|undefined)[]){return v.filter(Boolean).join(' ')}
export function isoNow(){return new Date().toISOString().slice(0,19).replace('T',' ')}
export function localDate(d=new Date()){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
export function addDays(date:string,n:number){const d=new Date(`${date}T12:00:00`);d.setDate(d.getDate()+n);return localDate(d)}
export function fmtDateTime(s:string){return new Intl.DateTimeFormat('en-IN',{dateStyle:'medium',timeStyle:'short'}).format(new Date(s.replace(' ','T')))}
export function fmtDate(s:string){return new Intl.DateTimeFormat('en-IN',{dateStyle:'medium'}).format(new Date(`${s}T12:00:00`))}
export function minutes(t:string){const [h,m]=t.split(':').map(Number);return h*60+m}
export function timeLabel(t:string){const [h,m]=t.split(':').map(Number);const ap=h>=12?'PM':'AM';const hh=h%12||12;return `${hh}:${String(m).padStart(2,'0')} ${ap}`}
