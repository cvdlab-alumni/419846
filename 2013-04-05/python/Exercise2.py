
#/piano terra/
floorA=AA(QUOTE)([[63,-34],[-21,18,4,35,4,35,4],[-1,2.5]])
floorA=INSR(PROD)(floorA)
floorB=AA(QUOTE)([[37,-60],[-21,-18,-4,-35,-4,-35,-4,17,-16,-7],[-1,2.5]])
floorB=INSR(PROD)(floorB)
floorC=AA(QUOTE)([[-63,5,-29],[-21,17],[-1,2.5]])
floorC=INSR(PROD)(floorC)



def cerchio(p):
	x,y=p
	return [y*COS(x),y*SIN(x)]

dom1=PROD([INTERVALS(PI)(10),INTERVALS(18.5)(10),])
mezzaCirco=MAP(cerchio)(dom1)
mezzaCirco3d=PROD([mezzaCirco,Q(2.5)])
mezzaCirco3d=T([1,2,3])([18.5,138,1])(mezzaCirco3d)

dom2=PROD([INTERVALS(PI)(10),INTERVALS(8.5)(10),])
mezzaCircopiccola=MAP(cerchio)(dom2)
mezzaCircopiccola3d=PROD([mezzaCircopiccola,Q(2.5)])
mezzaCircopiccola3d=R([1,2])(-PI/2)(mezzaCircopiccola3d)
mezzaCircopiccola3d=T([1,2,3])([68,29.5,1])(mezzaCircopiccola3d)

floor0=STRUCT([floorA, floorB,floorC, mezzaCirco3d,mezzaCircopiccola3d])

#/primo piano/
floor1A=AA(QUOTE)([[97],[68,-20,72],[-1,-2.5,-24.5,2.5]])
floor1A=INSR(PROD)(floor1A)
floor1B=AA(QUOTE)([[4,-15,78],[-68,20,-72],[-1,-2.5,-24.5,2.5]])
floor1B=INSR(PROD)(floor1B)
floor1C=CUBOID([15,17,2.5])
floor1C=T([1,2,3])([4,-17,28])(floor1C)
floor1=STRUCT([floor1A,floor1B,floor1C])

#/secondo piano/
floor2A=AA(QUOTE)([[4,15,-78],[-67,11,-31,-51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
floor2A=INSR(PROD)(floor2A)
floor2B=AA(QUOTE)([[-4,-15,78],[-67,-11,82],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
floor2B=INSR(PROD)(floor2B)
floor2C=AA(QUOTE)([[4,15,-78],[-67,-11,-31,51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
floor2C=INSR(PROD)(floor2C)
triangolo=MKPOL([[[0,0],[78,0],[0,-11] ],[[1,2,3]],None])
floor2D=PROD([triangolo,Q(2.5)])
floor2D=T([1,2,3])([19,78,55])(floor2D)
floor2=STRUCT([floor2A, floor2B,floor2C,floor2D])

#/terzo piano/
floor3A=AA(QUOTE)([[97],[2,37,2,37,4,-35,-4,-4,31,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor3A=INSR(PROD)(floor3A)
floor3B=AA(QUOTE)([[4,-15,78],[-2,-37,-2,-37,-4,35,4,4,-31,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor3B=INSR(PROD)(floor3B)
floor3=STRUCT([floor3A,floor3B])

#/tetto/
floor4A=AA(QUOTE)([[20,-77],[79,-81],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor4A=INSR(PROD)(floor4A)
floor4B=AA(QUOTE)([[97],[-78,82],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor4B=INSR(PROD)(floor4B)
floor4=STRUCT([floor4A, floor4B])

building2=STRUCT([floor0,floor1,floor2,floor3,floor4])
