const {test} = require('node:test');
const assert = require('node:assert/strict');
const {installLoader} = require('../src/launcher/navigation.cjs');
function fixture() {
  let active=0, max=0, frames=0;
  const app={levels:[{id:'a',eras:[{id:'1'}]},{id:'b',eras:[{id:'2'}]}], clock:{getDelta(){}},_frame(){frames++},async load(id,era){active++;max=Math.max(max,active);app._frame();await new Promise(r=>setTimeout(r,5));active--;if(app.fail){app.fail=false;throw Error('build failure')}app.levelDef={id};app.era=era;}};
  installLoader(app); return {app,stats:()=>({max,frames})};
}
test('rapid fort changes run sequentially; rendering pauses during teardown',async()=>{const {app,stats}=fixture();await Promise.all([app.load('a'),app.load('b')]);assert.equal(app.levelDef.id,'b');assert.deepEqual(stats(),{max:1,frames:0});app._frame();assert.equal(stats().frames,1)});
test('invalid site or period never changes the scene',async()=>{const {app}=fixture();await assert.rejects(app.load('research'));await assert.rejects(app.load('a','2'));assert.equal(app.levelDef,undefined)});
test('failure releases the guard and subsequent loads still work',async()=>{const {app}=fixture();app.fail=true;await assert.rejects(app.load('a'));assert.equal(app.sceneTransition,false);await app.load('b');assert.equal(app.levelDef.id,'b')});
test('a failed load uncovers the view and allows another selection',async()=>{
 const {app}=fixture();app.ui={el:{veil:{hidden:false}}};app.fail=true;
 await assert.rejects(app.load('a'),/build failure/);
 assert.equal(app.ui.el.veil.hidden,true);
 await app.load('b');assert.equal(app.levelDef.id,'b');
});
