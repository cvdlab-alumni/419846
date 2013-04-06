{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fmodern\fcharset0 Courier-Bold;\f2\fswiss\fcharset0 Helvetica;
}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;\red17\green137\blue135;}
\paperw11900\paperh16840\margl1440\margr1440\vieww22960\viewh9940\viewkind0
\deftab720
\pard\pardeftab720\sl320

\f0\fs36 \cf2 \
T 
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
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardeftab720\pardirnatural

\f2\fs40 \cf0 \
\
\
\
                                                 \
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardeftab720\pardirnatural

\fs36 \cf0 //terra pianale//\
\
terra=SIMPLEX_GRID([[97],[160],[1]])\
\
//pilastri pilastri terra piano//\
\
dom=DOMAIN( [ [ 0,2*PI], [0,2] ] )([10,10])\
function cerchio(p)\{\
	x=p[0]\
     y=p[1]\
	return [y*COS(x),y*SIN(x)]\}\
pilTon=MAP(cerchio)(dom)\
pilTon3d=EXTRUDE([27])(pilTon)\
pilTon3d1=T([1,2])([20,2])(pilTon3d)\
pilTon3dserie=T([1,2,3])([95,2,1])(pilTon3d)\
elem=[pilTon3dserie,T([2])([39])]\
elems=NN(5)(elem)\
pilastri=STRUCT(elems)\
pilastriQuadrati0=SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,4,-35,4,-35,4],[-1,-2.5,24.5]])\
pillars0=STRUCT([pilastri,terra,pilTon3d1,pilastriQuadrati0])\
\
//pilastri primo piano\
\
pilastri1Quadrati3d= SIMPLEX_GRID([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,24.5]])\
pilastro1Quadrato3d= SIMPLEX_GRID([[-4,-14,-4,-71,4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,24.5]])\
pilastroTondo=MAP(cerchio)(dom)\
pilastroTondo3d=EXTRUDE([27])(pilastroTondo)\
pilastroTondo3d=T([1,2,3])([20,119,30.5])(pilastroTondo3d)\
pillars1=STRUCT([pilastri1Quadrati3d, pilastro1Quadrato3d, pilastroTondo3d])\
\
//pilastri secondo piano\
\
pilastri2Quadrati3d= SIMPLEX_GRID([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,27]])\
pilastro2Quadrato3d= SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,27]])\
pillars2=STRUCT([pilastri2Quadrati3d, pilastro2Quadrato3d])\
\
//pilastri terzo piano\
pilastri3Quadrati3d=SIMPLEX_GRID([[-4,-14,4,-71,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])\
pilastri3QuadratiPiccoli3d=SIMPLEX_GRID([[-18,2,-2,-71,-2,2],[2,-37,-2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])\
pilastro3QuadratoPiccolo3d=SIMPLEX_GRID([[-18,2,-2,-71,-2,-2],[-2,-37,2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])\
pilastro3Quadrato3d=SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])\
\
\
pillars3=STRUCT([pilastri3Quadrati3d, pilastri3QuadratiPiccoli3d, pilastro3QuadratoPiccolo3d, pilastro3Quadrato3d])\
\
\
\
VIEW(STRUCT([pillars0, pillars1, pillars2, pillars3]))\
\
}