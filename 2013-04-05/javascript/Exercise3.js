{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fmodern\fcharset0 Courier-Bold;\f2\fswiss\fcharset0 Helvetica;
}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;\red17\green137\blue135;}
\paperw11900\paperh16840\margl1440\margr1440\vieww18820\viewh13060\viewkind0
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
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural

\f2 \cf0 \
//north\
northA=SIMPLEX_GRID([[-4,-15,-4,74],[2.5,-24.5,2.5,-24.5,2.5,8],[4]])\
northB=SIMPLEX_GRID([[4,-15,4,-68],[2.5,24.5,2.5,24.5,2.5,8],[4]])\
northC=SIMPLEX_GRID([[-4,15,-4,-68],[-2.5,-24.5,37.5],[4]])\
north=STRUCT([northA,northB,northC])\
north=R([2,3])(PI/2)(north)\
north=T([2,3])([4,28])(north)\
\
//east\
eastA=SIMPLEX_GRID([[-22,138],[1,2.5,8,-7,9.5,2.5,7,-10,7.5,2.5,24.5,2.5,29],[4]])\
eastB=SIMPLEX_GRID([[-22,-4,-8,126],[-1,-2.5,-8,7,-9.5,-2.5,-7,-10,-7.5,-2.5,-24.5,-2.5,-29],[4]])\
eastC=SIMPLEX_GRID([[-22,1,-11,-126],[1,2.5,8,7,9.5,2.5,7,10,7.5,2.5,24.5,2.5,29],[4]])\
eastD=SIMPLEX_GRID([[-22,-1,-11,-12,114],[-1,-2.5,-8,-7,-9.5,-2.5,-7,10,-7.5,-2.5,-24.5,-2.5,-29],[4]])\
eastE=SIMPLEX_GRID([[22],[-1,-2.5,-8,-7,-9.5,-2.5,-7,-10,7.5,2.5,24.5,2.5,29],[4]])\
east=STRUCT([eastA,eastB,eastC, eastD, eastE])\
east=R([2,3])(PI/2)(east)\
east=R([1,2])(-PI/2)(east)\
east=T([1,2,3])([4,160,1])(east)\
\
//south\
southA=SIMPLEX_GRID([[97],[-1,-2.5,-24.5,2.5,10,-12,12.5,-12,12.5,-12,2.5],[4]])\
southB=SIMPLEX_GRID([[4],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])\
southC=SIMPLEX_GRID([[-4,-77,16],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])\
\
south=STRUCT([southA,southB,southC])\
\
building3=STRUCT([north,east,south])\
\
\
}