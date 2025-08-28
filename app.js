rot=0; centerHat(); draw(); });
centerBtn.addEventListener('click',  ()=>{ centerHat(); draw(); });

downloadBtn.addEventListener('click', ()=>{
  if(!baseImg) return;
  const out=document.createElement('canvas');
  const oc=out.getContext('2d');
  out.width=baseImg.width; out.height=baseImg.height;
  const s=out.width/canvas.width;

  oc.drawImage(baseImg,0,0,out.width,out.height);
  oc.save();
  oc.translate(hat.x*s, hat.y*s);
  oc.rotate(hat.rot*Math.PI/180);
  const w=hat.w*hat.scale*s, h=hat.h*hat.scale*s;
  oc.drawImage(hatImg,-w/2,-h/2,w,h);
  oc.restore();

  const a=document.createElement('a');
  a.href=out.toDataURL('image/jpeg',0.95);
  a.download='hat-photo.jpg'; a.click();
});
