import {test} from 'node:test';
import assert from 'node:assert/strict';
import {catalogueFirstYear,atlasFortScene} from '../src/game/atlas-forts.js';
const level={id:'fort',eras:[{id:'1650',year:'c. 1650'},{id:'1750',year:'c. 1750'},{id:'today',year:'Today'}]};
test('atlas preserves uncertainty and interprets the first century in a range',()=>{
 assert.equal(catalogueFirstYear({cent:'12th–17th c.'}),1100);
 assert.equal(catalogueFirstYear({cent:'5th c. BCE'}),-500);
 assert.equal(catalogueFirstYear({cent:'ancient'}),null);
 assert.equal(catalogueFirstYear({cent:'1639–48'}),1639);
 assert.equal(catalogueFirstYear({id:'fort',cent:'unknown'},[{id:'fort',phases:[{from:1546}]}]),1546);
});
test('atlas opens no future or present-day scene and respects ownership phases',()=>{
 const fort={id:'fort'};
 assert.equal(atlasFortScene(fort,1649,[level]),null);
 assert.equal(atlasFortScene(fort,1700,[level]).era.id,'1650');
 assert.equal(atlasFortScene(fort,1800,[level]).era.id,'1750');
 const nodes=[{id:'fort',phases:[{from:1600,to:1700,owner:'a'},{from:1700,owner:'b'}]}];
 assert.equal(atlasFortScene(fort,1700,[level],nodes),null);
 assert.equal(atlasFortScene(fort,1750,[level],nodes).era.id,'1750');
 assert.equal(atlasFortScene({id:'missing'},1800,[level]),null);
});
