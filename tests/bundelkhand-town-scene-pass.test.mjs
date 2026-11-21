import {test} from 'node:test';
import assert from 'node:assert/strict';
import {kalinjar,orchhaFort} from '../src/levels/bundelkhand.js';
import {chanderi,ajaigarh} from '../src/levels/chanderi-ajaigarh.js';
import {narwar} from '../src/levels/narwar-kundar.js';

test('Kalinjar scene adds its documented sacred water and monument names',()=>{
 for(const term of ['Patal Ganga','Pandava Kund','Kotitirtha','Jujhotia Basti']) assert.ok(kalinjar.eras.at(-1).basis.includes(term));
 assert.ok(kalinjar.eras.at(-1).sources.includes('KAL-04'));
 assert.match(kalinjar.eras.at(-1).basis,/CCRT lists Alamgir.*2 km east–west by 1 km north–south/);
 for(const gate of ['Alamgir','Ganesh','Chandi','Budh Budr','Hanuman','Lal','Bara']) assert.ok(kalinjar.eras.at(-1).basis.includes(gate));
});

test('Orchha joins palace group, living town and seven-channel river evidence',()=>{
 assert.match(orchhaFort.eras.at(-1).basis,/seven channels/);
 assert.match(orchhaFort.eras.at(-1).conjecture,/not hydrographically mapped/);
 assert.ok(orchhaFort.eras.every(e=>e.sources.includes('ORC-03')));
});

test('Chanderi has named monuments and a separate 1528 siege phase',()=>{
 assert.deepEqual(chanderi.eras.map(e=>e.id),['1500','1528','today']);
 for(const name of ['Kati Ghati','Badal Mahal','Rani Mahal','Jama Masjid','Purani Kachari','Khooni Darwaza']) assert.ok(chanderi.eras.at(-1).basis.includes(name));
});

test('Ajaygarh names its two entries and lake-side Jain monuments',()=>{
 assert.ok(ajaigarh.pois.find(p=>p.id==='approaches').text.includes('Tharauni'));
 assert.ok(ajaigarh.eras.at(-1).sources.includes('AJA-03'));
 assert.ok(ajaigarh.pois.some(p=>p.id==='lake'));
});

test('Narwar now includes living settlement context and names its uncertainty',()=>{
 assert.ok(narwar.pois.some(p=>p.id==='town'));
 assert.ok(narwar.eras.every(e=>e.sources.includes('NAR-03')&&e.sources.includes('NAR-04')));
 for(const term of ['Maj-loka','Madar Ahata','Gujar Ahata','Dhola Ahata']) assert.ok(narwar.eras.at(-1).basis.includes(term));
 for(const gate of ['Alamgiri','Saiyadonka','Piran Paur','Hawa Paur','Urwahi','Gaimukha','Dholya Pol']) assert.ok(narwar.eras.at(-1).basis.includes(gate));
 assert.match(narwar.eras.at(-1).conjecture,/settlement geometry/);
});
