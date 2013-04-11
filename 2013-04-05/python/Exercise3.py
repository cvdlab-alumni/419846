#//muri piano terra
def arco3d(r1,r2,angolo,altezza):
spessore=r2-r1
dom=PROD([INTERVALS(angolo)(30),INTERVALS(spessore)(30)])
dom=T(2)(r1)(dom)
def arco(p):
	x,y=p
	return [y*COS(x),y*SIN(x)]
arcoPieno=MAP(arco)(dom)
arcoPieno=PROD([arcoPieno,Q(altezza)])
return arcoPieno
arco=arco3d(16,18.5,PI,24.5)
arco=T([1,2,3])([18.7,138,3.5])(arco)

#//north
northA=AA(QUOTE)([[-4,-15,-4,74],[2.5,-24.5,2.5,-24.5,2.5,8],[4]])
northA =INSR(PROD)(northA)
northB=AA(QUOTE)([[4,-15,4,-68],[2.5,24.5,2.5,24.5,2.5,8],[4]])
northB =INSR(PROD)(northB)
northC=AA(QUOTE)([[-4,15,-4,-68],[-2.5,-24.5,37.5],[4]])
northC=INSR(PROD)(northC)
north=STRUCT([northA,northB,northC])
north=R([2,3])(PI/2)(north)
north=T([2,3])([4,28])(north)

#//east
eastA=AA(QUOTE)([[-22,138],[1,2.5,8,-7,9.5,2.5,7,-10,7.5,2.5,24.5,2.5,29],[4]])
eastA =INSR(PROD)(eastA)
eastB=AA(QUOTE)([[-22,-4,-8,126],[-1,-2.5,-8,7,-9.5,-2.5,-7,-10,-7.5,-2.5,-24.5,-2.5,-29],[4]])
eastB =INSR(PROD)(eastB)
eastC=AA(QUOTE)([[-22,1,-11,-126],[1,2.5,8,7,9.5,2.5,7,10,7.5,2.5,24.5,2.5,29],[4]])
eastC =INSR(PROD)(eastC)
eastD=AA(QUOTE)([[-22,-1,-11,-12,114],[-1,-2.5,-8,-7,-9.5,-2.5,-7,10,-7.5,-2.5,-24.5,-2.5,-29],[4]])
eastD=INSR(PROD)(eastD)
eastE=AA(QUOTE)([[22],[-1,-2.5,-8,-7,-9.5,-2.5,-7,-10,7.5,2.5,24.5,2.5,29],[4]])
eastE=INSR(PROD)(eastE)
east=STRUCT([eastA,eastB,eastC, eastD, eastE])
east=R([2,3])(PI/2)(east)
east=R([1,2])(-PI/2)(east)
east=T([1,2,3])([4,160,1])(east)

#//south
southA=AA(QUOTE)([[97],[-1,-2.5,-24.5,2.5,10,-12,12.5,-12,12.5,-12,2.5],[4]])
southA =INSR(PROD)(southA)
southB=AA(QUOTE)([[4],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])
southB =INSR(PROD)(southB)
southC=AA(QUOTE)([[-4,-77,16],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])
southC=INSR(PROD)(southC)

south=STRUCT([southA,southB,southC])

building3=STRUCT([north,east,arco])

