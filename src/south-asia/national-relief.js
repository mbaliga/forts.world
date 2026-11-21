// Coarse contours interpolate the handoff DEM's 0.25-degree cell centres.
export function contourSegments(grid,threshold){
 const {ncols:w,nrows:h,elevations:a,nodata}=grid,out=[];
 for(let y=0;y<h-1;y++)for(let x=0;x<w-1;x++){
  const v=[a[y*w+x],a[y*w+x+1],a[(y+1)*w+x+1],a[(y+1)*w+x]];
  if(v.some(n=>n===nodata||!Number.isFinite(n)))continue;
  const p=[[x+.5,y+.5],[x+1.5,y+.5],[x+1.5,y+1.5],[x+.5,y+1.5]],hits=[];
  for(let i=0;i<4;i++){const j=(i+1)%4;if((v[i]<threshold)===(v[j]<threshold))continue;const t=(threshold-v[i])/(v[j]-v[i]);hits.push([p[i][0]+(p[j][0]-p[i][0])*t,p[i][1]+(p[j][1]-p[i][1])*t]);}
  for(let i=0;i+1<hits.length;i+=2)out.push([hits[i],hits[i+1]]);
 }
 return out;
}
const shade=h=>h<100?[184,193,152]:h<350?[175,185,137]:h<800?[183,172,125]:h<1600?[169,154,111]:h<3000?[153,143,119]:h<4500?[176,172,156]:[225,224,215];
export function makeReliefImage(grid){
 const {ncols:w,nrows:h,elevations,nodata}=grid,scale=4;
 const data=document.createElement('canvas');data.width=w;data.height=h;const dc=data.getContext('2d'),pixels=dc.createImageData(w,h);
 for(let i=0;i<elevations.length;i++){const v=elevations[i];if(v===nodata||!Number.isFinite(v))continue;const [r,g,b]=shade(v);pixels.data.set([r,g,b,255],i*4);}
 dc.putImageData(pixels,0,0);
 const canvas=document.createElement('canvas');canvas.width=w*scale;canvas.height=h*scale;const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.drawImage(data,0,0,canvas.width,canvas.height);
 ctx.strokeStyle='rgba(77,70,52,0.45)';ctx.lineWidth=.7;
 for(const threshold of [500,1000,2000,3000,4000,5000]){ctx.beginPath();for(const [a,b] of contourSegments(grid,threshold)){ctx.moveTo(a[0]*scale,a[1]*scale);ctx.lineTo(b[0]*scale,b[1]*scale)}ctx.stroke();}
 return canvas.toDataURL('image/png');
}
