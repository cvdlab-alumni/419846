from pyplasm import *


def  colonna(r,h):
	base=CUBOID([1.5*h,2*r*1.2,8])
	cilindro=CYLINDER([r,2*h])(12)
	capital=base
	capitalino=S(1)(2)(capital)
	return INSR(TOP)([base,cilindro,capital,capitalino])



def rigacolonne(n,col):
	return COMP([INSR(RIGHT),N(n)])(col)


def topcolonne(n,col):
	return COMP([INSR(TOP),N(n)])(col)

pfront=[(0,0),(620,0),(310,100),(0,0)] 
fronte=POLYLINE(pfront)
fronte=SOLIDIFY(fronte)
fronte=PROD([fronte,Q(8)])
col=colonna(15,50)
colonnato=rigacolonne(4,col)
f=R([2,3])(PI/2)(fronte)
facciata=TOP([colonnato,f])
colcentrale=T(2)(100)(colonnato)
centro=[colcentrale,T(2)(100)]
centro=NN(5)(centro)
centro=STRUCT(centro)
finale=T(2)(600)(facciata)
tempio=STRUCT([facciata,centro,finale])
terreno=CUBOID([700,800,10])
t=TOP([terreno,tempio])
VIEW(t)

