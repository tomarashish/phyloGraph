!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports):"function"==typeof define&&define.amd?define("d3-glyphEdge",["exports"],a):a(t.d3_glyphEdge={})}(this,function(t){"use strict";function a(t,a,r,e){var s=t.target.y-t.source.y,o=t.target.x-t.source.x,c=3*e,h=Math.atan2(o,s)+Math.PI/2,M=h-Math.PI/2,u=h+Math.PI/2,n=t.source.x+e*Math.cos(M),y=t.source.y-e*Math.sin(M),x=t.source.x+e*Math.cos(u),g=t.source.y-e*Math.sin(u),i=t.target.x-e*Math.cos(M),f=t.target.y+e*Math.sin(M),L=t.source.x+r*Math.cos(M),P=t.source.y-r*Math.sin(M),I=t.source.x+r*Math.cos(u),l=t.source.y-r*Math.sin(u),d=t.target.x+r*Math.cos(M),p=t.target.y-r*Math.sin(M),v=t.source.y-t.target.y,q=t.source.x-t.target.x,m=P-p,z=L-d,A=y-f,O=n-i,b=Math.sqrt(z*z+m*m),E=Math.sqrt(q*q+v*v),j=I-z*(b-c-a)/b,w=l-m*(b-c-a)/b,T=x-O*(b-c-a)/b,_=g-A*(b-c-a)/b,k=t.source.x-q*(E-a)/E,B=t.source.y-v*(E-a)/E;return"M"+t.source.x+","+t.source.y+"L"+I+","+l+"L"+j+","+w+"L"+T+","+_+"L"+k+","+B+"L"+t.source.x+","+t.source.y+"z"}function r(t){var a=t.target.x-t.source.x,r=t.target.y-t.source.y,e=Math.sqrt(a*a+r*r);return"M"+t.source.x+","+t.source.y+"A"+e+","+e+" 0 0,1 "+t.target.x+","+t.target.y}function e(t,a){var r=t.target.y-t.source.y,e=t.target.x-t.source.x,s=Math.atan2(e,r)+Math.PI/2,o=s-Math.PI/2,c=s+Math.PI/2,h=t.source.x+a*Math.cos(o),M=t.source.y-a*Math.sin(o),u=t.source.x+a*Math.cos(c),n=t.source.y-a*Math.sin(c),y=t.target.x-a*Math.cos(o),x=t.target.y+a*Math.sin(o),g=t.target.x-a*Math.cos(c),i=t.target.y+a*Math.sin(c);return"M"+h+","+M+"L"+u+","+n+"L"+y+","+x+"L"+g+","+i+"z"}function s(t,a,r,e){var s=t.target.y-t.source.y,o=t.target.x-t.source.x,c=Math.atan2(o,s)+Math.PI/2,h=c-Math.PI/2,M=c+Math.PI/2,u=t.source.x+a*Math.cos(h),n=t.source.y-a*Math.sin(h),y=t.source.x+a*Math.cos(M),x=t.source.y-a*Math.sin(M),g=t.target.x+r*Math.cos(M),i=t.target.y-r*Math.sin(M),f=t.target.x+r*Math.cos(h),L=t.target.y-r*Math.sin(h),P=t.source.x+e*Math.cos(h),I=t.source.y-e*Math.sin(h),l=t.source.x+e*Math.cos(M),d=t.source.y-e*Math.sin(M),p=t.target.x+e*Math.cos(h),v=t.target.y-e*Math.sin(h),q=t.target.x+e*Math.cos(M),m=t.target.y-e*Math.sin(M),z=(I+v)/2,A=(P+p)/2,O=(d+m)/2,b=(l+q)/2;return"M"+u+","+n+"L"+y+","+x+" L "+b+","+O+" L "+g+","+i+" L "+f+","+L+" L "+A+","+z+"z"}function o(t,a){var r=t.target.y-t.source.y,e=t.target.x-t.source.x,s=Math.atan2(e,r)+Math.PI/2,o=s-Math.PI/2,c=s+Math.PI/2,h=t.source.x+a*Math.cos(o),M=t.source.y-a*Math.sin(o),u=t.source.x+a*Math.cos(c),n=t.source.y-a*Math.sin(c);return"M"+h+","+M+"L"+u+","+n+" L "+t.target.x+","+t.target.y+"z"}function c(t,a){var r=t.target.y-t.source.y,e=t.target.x-t.source.x,s=Math.atan2(e,r)+Math.PI/2,o=s-Math.PI/2,c=s+Math.PI/2,h=t.target.x+a*Math.cos(o),M=t.target.y-a*Math.sin(o),u=t.target.x+a*Math.cos(c),n=t.target.y-a*Math.sin(c);return"M"+h+","+M+"L"+u+","+n+" L "+t.source.x+","+t.source.y+"z"}function h(t,a,r,e){var s=t.target.y-t.source.y,o=t.target.x-t.source.x,c=3*e,h=Math.atan2(o,s)+Math.PI/2,M=h-Math.PI/2,u=h+Math.PI/2,n=t.source.x+e*Math.cos(M),y=t.source.y-e*Math.sin(M),x=t.source.x+e*Math.cos(u),g=t.source.y-e*Math.sin(u),i=t.target.x-e*Math.cos(M),f=t.target.y+e*Math.sin(M),L=t.target.x-e*Math.cos(u),P=t.target.y+e*Math.sin(u),I=t.source.x+r*Math.cos(M),l=t.source.y-r*Math.sin(M),d=t.source.x+r*Math.cos(u),p=t.source.y-r*Math.sin(u),v=t.target.x+r*Math.cos(M),q=t.target.y-r*Math.sin(M),m=t.target.x+r*Math.cos(u),z=t.target.y-r*Math.sin(u),A=t.source.y-t.target.y,O=t.source.x-t.target.x,b=l-q,E=I-v,j=p-z,w=d-m,T=y-f,_=n-i,k=g-P,B=x-L,C=Math.sqrt(E*E+b*b),D=Math.sqrt(O*O+A*A),F=d-E*(C-c-a)/C,G=p-b*(C-c-a)/C,H=I-w*(C-c-a)/C,J=l-j*(C-c-a)/C,K=n-B*(C-c-a)/C,N=y-k*(C-c-a)/C,Q=x-_*(C-c-a)/C,R=g-T*(C-c-a)/C,S=t.source.x-O*(D-a)/D,U=t.source.y-A*(D-a)/D;return"M"+d+","+p+"L"+F+","+G+"L"+Q+","+R+"L"+S+","+U+"L"+K+","+N+"L"+H+","+J+"L"+I+","+l+"z"}function M(t,a,r,e){var s=t.target.y-t.source.y,o=t.target.x-t.source.x,c=Math.atan2(o,s)+Math.PI/2,h=c+(.75*Math.PI+.25*e),M=c+(.25*Math.PI-.25*e),u=t.source.x+a*Math.cos(h),n=t.source.y-a*Math.sin(h),y=t.target.x+r*Math.cos(M),x=t.target.y-r*Math.sin(M);return{source:{x:u,y:n},target:{x:y,y:x}}}function u(t,a){var r=t.target.y-t.source.y,e=t.target.x-t.source.x,s=Math.atan2(e,r)+Math.PI/2,o=s+.75*Math.PI,c=s+.25*Math.PI,h=t.source.x+a*Math.cos(o),M=t.source.y-a*Math.sin(o),u=t.target.x+a*Math.cos(c),n=t.target.y-a*Math.sin(c);return{source:{x:h,y:M},target:{x:u,y:n}}}function n(t,a,r,e){function s(){t.particles.push({current:0,xOffset:r-r*Math.random()*2,yOffset:r-r*Math.random()*2})}if(r/=2,t.particles=t.particles.filter(function(t){return t.current<a.getTotalLength()}),t.frequency<1)Math.random()<t.frequency&&s();else for(var o=0;o<t.frequency;o++)s();t.particles.forEach(function(t){t.current=t.current+e;var r=a.getPointAtLength(t.current);t.x=r.x+t.xOffset,t.y=r.y+t.yOffset})}var y={arrowhead:h,comet:c,nail:o,taffy:s,ribbon:e,lineArc:r,halfArrow:a},x={offset:u,parallel:M},g={particle:n},i="1.1.1";t.version=i,t.d=y,t.project=x,t.mutate=g});