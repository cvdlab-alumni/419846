#//terra pianale//
from pyplasm import *
terra=AA(QUOTE)([[97],[160],[1]])
terra=INSR(PROD)(terra)

#//pilastri tondi aumenta gli intervalli a 50// pilastri terra piano//

dom=PROD([INTERVALS(2*PI)(10),INTERVALS(2)(10),])
def cerchio(p):
	x,y=p
	return [y*COS(x),y*SIN(x)]

pilTon=MAP(cerchio)(dom)
pilTon3d=PROD([pilTon,Q(27)])
pilTon3d1=T([1,2])([20,2])(pilTon3d)
pilTon3dserie=T([1,2,3])([95,2,1])(pilTon3d)
elem=[pilTon3dserie,T([2])([39])]
elems=NN(5)(elem)
pilastri=STRUCT(elems)
pilastriQuadrati0=AA(QUOTE)([[-4,-14,4,-71,-4],[-4,-35,4,-35,4,-35,4],[-1,-2.5,24.5]])
pilastriQuadrati0=INSR(PROD)(pilastriQuadrati0)

pillars0=STRUCT([pilastri,terra,pilTon3d1,pilastriQuadrati0])
#//pilastri primo piano

pilastri1Quadrati=AA(QUOTE)([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,24.5]])
pilastri1Quadrati3d=INSR(PROD)(pilastri1Quadrati)
pilastro1Quadrato=AA(QUOTE)([[-4,-14,-4,-71,4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,24.5]])
pilastro1Quadrato3d=INSR(PROD)(pilastro1Quadrato)
pilastroTondo=MAP(cerchio)(dom)
pilastroTondo3d=PROD([pilastroTondo,Q(24.5)])
pilastroTondo3d=T([1,2,3])([20,119,30.5])(pilastroTondo3d)

pillars1=STRUCT([pilastri1Quadrati3d, pilastro1Quadrato3d, pilastroTondo3d])

#//pilastri secondo piano

pilastri2Quadrati=AA(QUOTE)([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,27]])
pilastri2Quadrati3d=INSR(PROD)(pilastri2Quadrati)
pilastro2Quadrato=AA(QUOTE)([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,27]])
pilastro2Quadrato3d=INSR(PROD)(pilastro2Quadrato)

pillars2=STRUCT([pilastri2Quadrati3d, pilastro2Quadrato3d])

#//pilastri terzo piano
pilastri3Quadrati=AA(QUOTE)([[-4,-14,4,-71,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastri3Quadrati3d=INSR(PROD)(pilastri3Quadrati)
pilastri3QuadratiPiccoli=AA(QUOTE)([[-18,2,-2,-71,-2,2],[2,-37,-2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastri3QuadratiPiccoli3d=INSR(PROD)(pilastri3QuadratiPiccoli)
pilastro3QuadratoPiccolo=AA(QUOTE)([[-18,2,-2,-71,-2,-2],[-2,-37,2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastro3QuadratoPiccolo3d=INSR(PROD)(pilastro3QuadratoPiccolo)
pilastro3Quadrato=AA(QUOTE)([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastro3Quadrato3d=INSR(PROD)(pilastro3Quadrato)

pillars3=STRUCT([pilastri3Quadrati3d, pilastri3QuadratiPiccoli3d, pilastro3QuadratoPiccolo3d, pilastro3Quadrato3d])


building1=STRUCT([pillars0, pillars1, pillars2, pillars3])