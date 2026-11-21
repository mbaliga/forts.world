import {test} from 'node:test';
import assert from 'node:assert/strict';
import {campaignSite,matchesRegion} from '../src/game/map-navigation.js';
import {readFileSync} from 'node:fs';
const records=JSON.parse(readFileSync(new URL('../src/data/smith-newton-2024.json',import.meta.url))).records;
test('state filter includes exact study and qualified project regions without substring collisions',()=>{
 assert.equal(records.filter(r=>matchesRegion(r,'Maharashtra')).length,605);
 assert.ok(matchesRegion({region:'Roha, historic Kolaba · Maharashtra'},'Maharashtra'));
 assert.ok(!matchesRegion({region:'West Bengal'},'Bengal'));
 assert.ok(matchesRegion({region:''},''));
});
test('campaign links require an exact authored identity',()=>{
 assert.equal(campaignSite('murud-janjira').region,'AB');
 assert.equal(campaignSite('padmadurg').node.id,'padmadurg');
 assert.equal(campaignSite('smith-newton-2024-row-2'),null);
 assert.equal(campaignSite('palghar-gambhirgad'),null);
});
