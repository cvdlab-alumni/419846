{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fmodern\fcharset0 Courier-Bold;\f2\fswiss\fcharset0 Helvetica;
}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;\red17\green137\blue135;}
\paperw11900\paperh16840\margl1440\margr1440\vieww18900\viewh11100\viewkind0
\deftab720
\pard\pardeftab720\sl320

\f0\fs36 \cf2 T 
\f1\b =
\f0\b0  
\f1\b function
\f0\b0  (dims) \{\
\'a0\'a0dims 
\f1\b =
\f0\b0  dims.map(
\f1\b function
\f0\b0  (dim) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  dim 
\f1\b -
\f0\b0  \cf3 1\cf2 ;\
\'a0\'a0\});\
\
\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (values) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (object) \{\
\'a0\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  object.clone().translate(dims, values);\
\'a0\'a0\'a0\'a0\};\
\'a0\'a0\};\
\};\
\'a0\'a0\
R 
\f1\b =
\f0\b0  
\f1\b function
\f0\b0  (dims) \{\
\'a0\'a0dims 
\f1\b =
\f0\b0  dims.map(
\f1\b function
\f0\b0  (dim) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  dim 
\f1\b -
\f0\b0  \cf3 1\cf2 ;\
\'a0\'a0\});\
\'a0\'a0\'a0\
\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (angle) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (object) \{\
\'a0\'a0\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  object.clone().rotate(dims, angle);\
\'a0\'a0\'a0\'a0\};\
\'a0\'a0\};\
\};\
\'a0\'a0\
S 
\f1\b =
\f0\b0  
\f1\b function
\f0\b0  (dims) \{\
\'a0\'a0dims 
\f1\b =
\f0\b0  dims.map(
\f1\b function
\f0\b0  (dim) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  dim 
\f1\b -
\f0\b0  \cf3 1\cf2 ;\
\'a0\'a0\});\
\
\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (values) \{\
\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  
\f1\b function
\f0\b0  (object) \{\
\'a0\'a0\'a0\'a0\'a0\'a0
\f1\b return
\f0\b0  object.clone().scale(dims, values);\
\'a0\'a0\'a0\'a0\};\
\'a0\'a0\};\
\};\
\
S3 
\f1\b =
\f0\b0  S2;\
S2 
\f1\b =
\f0\b0  S1;\
S1 
\f1\b =
\f0\b0  S0;\
\
GRID 
\f1\b =
\f0\b0  SIMPLEX_GRID;\
\
NN 
\f1\b =
\f0\b0  REPLICA;\
\
VIEW 
\f1\b =
\f0\b0  DRAW;\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural

\f2 \cf0 \
/piano terra/\
floorA=SIMPLEX_GRID([[63,-34],[-21,18,4,35,4,35,4],[-1,2.5]])\
floorB= SIMPLEX_GRID([[37,-60],[-21,-18,-4,-35,-4,-35,-4,17,-16,-7],[-1,2.5]])\
floorC= SIMPLEX_GRID([[-63,5,-29],[-21,17],[-1,2.5]])\
\
\
\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardeftab720\pardirnatural
\cf0 function cerchio(p)\{\
	x=p[0]\
     y=p[1]\
	return [y*COS(x),y*SIN(x)]\}\
\
dom1=DOMAIN( [ [ 0,PI], [0,18.5] ] )([10,10])\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural
\cf0 \
mezzaCirco=MAP(cerchio)(dom1)\
mezzaCirco3d=EXTRUDE([2.5])(mezzaCirco)\
mezzaCirco3d=T([1,2,3])([18.5,138,1])(mezzaCirco3d)\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardeftab720\pardirnatural
\cf0 dom2=DOMAIN( [ [ 0,PI], [0,8.5] ] )([10,10])\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural
\cf0 \
mezzaCircopiccola=MAP(cerchio)(dom2)\
mezzaCircopiccola3d=EXTRUDE([2.5])(mezzaCircopiccola)\
mezzaCircopiccola3d=R([1,2])(-PI/2)(mezzaCircopiccola3d)\
mezzaCircopiccola3d=T([1,2,3])([68,29.5,1])(mezzaCircopiccola3d)\
\
floor0=STRUCT([floorA, floorB,floorC, mezzaCirco3d,mezzaCircopiccola3d])\
\
/primo piano/\
floor1A= SIMPLEX_GRID([[97],[68,-20,72],[-1,-2.5,-24.5,2.5]])\
floor1B= SIMPLEX_GRID([[4,-15,78],[-68,20,-72],[-1,-2.5,-24.5,2.5]])\
floor1C=CUBOID([15,17,2.5])\
floor1C=T([1,2,3])([4,-17,28])(floor1C)\
floor1=STRUCT([floor1A,floor1B,floor1C])\
\
/secondo piano/\
floor2A= SIMPLEX_GRID([[4,15,-78],[-67,11,-31,-51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor2B= SIMPLEX_GRID([[-4,-15,78],[-67,-11,82],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor2C= SIMPLEX_GRID([[4,15,-78],[-67,-11,-31,51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])\
triangolo=SIMPLICIAL_COMPLEX([[0,0],[78,0],[0,-11],[0,0]])([[1,2,3]])\
floor2D=EXTRUDE([2.5])(triangolo)\
floor2D=T([1,2,3])([19,78,55])(floor2D)\
floor2=STRUCT([floor2A, floor2B,floor2C,floor2D])\
\
/terzo piano/\
floor3A= SIMPLEX_GRID([[97],[2,37,2,37,4,-35,-4,-4,31,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor3B= SIMPLEX_GRID([[4,-15,78],[-2,-37,-2,-37,-4,35,4,4,-31,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor3=STRUCT([floor3A,floor3B])\
\
/tetto/\
floor4A= SIMPLEX_GRID([[20,-77],[79,-81],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor4B= SIMPLEX_GRID([[97],[-78,82],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])\
floor4=STRUCT([floor4A, floor4B])\
\
building=STRUCT([floor0,floor1,floor2,floor3,floor4])
\f0 \cf2 \
\pard\pardeftab720\sl320
\cf2 \
\
}