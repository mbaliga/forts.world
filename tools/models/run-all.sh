#!/bin/bash
# exports every fort (hand levels + traces) at LOD0/1/2 into /tmp/models
export NODE_NO_WARNINGS=1
SRC="$(cd "$(dirname "$0")/../.." && pwd)"; RAW=/tmp/models-raw; OUT=/tmp/models
mkdir -p $RAW $OUT; cd $SRC
IDS=$(ls data/traces/*.trace.json | xargs -n1 basename | sed 's/.trace.json//')
HAND=$(node -e "import('./src/levels/index.js').then(m=>console.log(m.LEVELS.map(l=>l.id).join(' ')))" 2>/dev/null)
FEATURED=" aguada cabo-de-rama chapora reis-magos gwalior murud-janjira sindhudurg chittorgarh daulatabad jaisalmer thirumalai-nayakkar-mahal mehrangarh sigiriya galle panhala lahore-fort fatehpur-sikri tughlaqabad ranthambore vellore golconda gingee "
one() {
  id=$1; kind=$2
  [ -f $OUT/$id/manifest.json ] && { echo "skip $id"; return; }
  case "$FEATURED" in *" $id "*) LODS="0 1"; ERA="";; *) LODS="1"; ERA="--era=today";; esac
  for L in $LODS; do
    if [ "$kind" = hand ]; then timeout 400 node tools/export.mjs $RAW --lod=$L $ERA $id; else timeout 400 node tools/export.mjs $RAW --t1 --lod=$L $ERA $id; fi 2>&1 | tail -1
  done
  d=$RAW/$id; mkdir -p $OUT/$id
  for f in $d/*.raw.glb; do
    b=$(basename $f .raw.glb); case $b in *.lod1) base=${b%.lod1}; lod=1;; *) base=$b; lod=0;; esac
    ( cd /tmp/gt && node compress.mjs $f $OUT/$id/$base.lod$lod.glb 2>&1 | grep -i "error" )
    if [ $lod = 1 ]; then ( cd /tmp/gt && node compress.mjs $f $OUT/$id/$base.lod2.glb 0.2 2>&1 | grep -i error ); fi
  done
  cp $d/*_plan.svg $OUT/$id/ 2>/dev/null
  cp $d/manifest.json $OUT/$id/ 2>/dev/null
  rm -rf $d
  echo "done $id $kind"
}
export -f one; export RAW OUT SRC FEATURED
( for id in $HAND; do echo "$id hand"; done; for id in $IDS; do case " $HAND " in *" $id "*) ;; *) echo "$id t1";; esac; done ) | xargs -P 4 -L1 bash -c 'one $0 $1'
echo "== ALL DONE"
