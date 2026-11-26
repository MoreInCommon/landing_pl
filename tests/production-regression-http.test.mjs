import assert from 'node:assert/strict';
import test from 'node:test';
const oldOrigin=process.env.BASELINE_TEST_ORIGIN || 'http://127.0.0.1:3101';
const newOrigin=process.env.CANDIDATE_TEST_ORIGIN || 'http://127.0.0.1:3100';
for (const origin of [oldOrigin,newOrigin]) {
  if (!['localhost','127.0.0.1'].includes(new URL(origin).hostname)) throw new Error('Regression comparison only supports local servers');
}
const paths=['/','/nasze-projekty','/siedem-segmentow','/quiz','/fokus-na-klimat','/w-mediach','/o-nas/zespol','/o-nas/statut','/o-nas/misja','/o-nas/sprawozdania','/kontakt/nasze-biuro','/kontakt/dla-mediow','/kontakt/pracuj-z-nami','/o-nas','/kontakt','/co-robimy','/co-robimy/nasze-projekty','/co-robimy/przykladowy-raport','/co-robimy/nasze-projekty/przykladowy-raport','/siedem-segmentow/dumni-patrioci','/fokus-na-klimat/dumni-patrioci','/badania','/warsztaty','/partnerstwa','/kompas-spoleczny','/wystapienia-publiczne','/wystapienia-i-prezentacje','/nasze-publikacje','/nieistniejaca-strona'];
async function snapshot(origin,path){
 const r=await fetch(`${origin}${path}?utm_source=local-audit`,{redirect:'manual',signal:AbortSignal.timeout(30000)});
 const html=await r.text();
 const location=r.headers.get('location');
 const start=html.indexOf('id="migration-navigation"');
 const end=html.indexOf('<div class="max-xl:hidden">',start);
 const nav=start>=0?html.slice(start,end):'';
 const summary={status:r.status,location:location?new URL(location,origin).pathname+new URL(location,origin).search:null,canonical:html.match(/rel="canonical" href="([^"]+)"/)?.[1],robots:html.match(/name="robots" content="([^"]+)"/)?.[1],headings:[...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map(m=>m[1].replace(/<[^>]+>/g,'')),navigationLinks:[...nav.matchAll(/href="([^"]+)"/g)].map(m=>m[1]),navigationMarkup:nav.replace(/>\s+</g,'><'),navigationText:nav.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()};
 return {summary,html};
}
test('disabled migration preserves existing public pages and redirects', async (t) => {
const listing=await snapshot(oldOrigin,'/nasze-projekty');
const details=[...listing.html.matchAll(/href="(\/?nasze-projekty\/[^"?#]+)"/g)].map(m=>'/'+m[1].replace(/^\//,''));
paths.push(...[...new Set(details)].slice(0,2));
const report=[];
for(const path of paths){const old=await snapshot(oldOrigin,path);const current=await snapshot(newOrigin,path);assert.deepEqual(current.summary,old.summary,`Production regression: ${path}`);assert.ok(current.summary.status<500,`Server error: ${path}`);report.push({path,...current.summary});t.diagnostic(`${path}: ${current.summary.status}, unchanged`);}
t.diagnostic(`Compared ${report.length} URLs; all public responses unchanged`);
});
