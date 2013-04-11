T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;
//terra pianale//

terra=SIMPLEX_GRID([[97],[160],[1]])

//pilastri pilastri terra piano//

dom=DOMAIN( [ [ 0,2*PI], [0,2] ] )([10,10])
function cerchio(p){
	x=p[0]
     y=p[1]
	return [y*COS(x),y*SIN(x)]}
pilTon=MAP(cerchio)(dom)
pilTon3d=EXTRUDE([27])(pilTon)
pilTon3d1=T([1,2])([20,2])(pilTon3d)
pilTon3dserie=T([1,2,3])([95,2,1])(pilTon3d)
elem=[pilTon3dserie,T([2])([39])]
elems=NN(5)(elem)
pilastri=STRUCT(elems)
pilastriQuadrati0=SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,4,-35,4,-35,4],[-1,-2.5,24.5]])
pillars0=STRUCT([pilastri,terra,pilTon3d1,pilastriQuadrati0])

//pilastri primo piano

pilastri1Quadrati3d= SIMPLEX_GRID([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,24.5]])
pilastro1Quadrato3d= SIMPLEX_GRID([[-4,-14,-4,-71,4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,24.5]])
pilastroTondo=MAP(cerchio)(dom)
pilastroTondo3d=EXTRUDE([27])(pilastroTondo)
pilastroTondo3d=T([1,2,3])([20,119,30.5])(pilastroTondo3d)
pillars1=STRUCT([pilastri1Quadrati3d, pilastro1Quadrato3d, pilastroTondo3d])

//pilastri secondo piano

pilastri2Quadrati3d= SIMPLEX_GRID([[-4,-14,4,-71,4],[4,-35,4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,27]])
pilastro2Quadrato3d= SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,27]])
pillars2=STRUCT([pilastri2Quadrati3d, pilastro2Quadrato3d])

/*pilastri terzo piano*/
pilastri3Quadrati3d=SIMPLEX_GRID([[-4,-14,4,-71,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastri3QuadratiPiccoli3d=SIMPLEX_GRID([[-18,2,-2,-71,-2,2],[2,-37,-2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastro3QuadratoPiccolo3d=SIMPLEX_GRID([[-18,2,-2,-71,-2,-2],[-2,-37,2,-37,-4,-35,-4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])
pilastro3Quadrato3d=SIMPLEX_GRID([[-4,-14,4,-71,-4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,27]])


pillars3=STRUCT([pilastri3Quadrati3d, pilastri3QuadratiPiccoli3d, pilastro3QuadratoPiccolo3d, pilastro3Quadrato3d])



VIEW(STRUCT([pillars0, pillars1, pillars2, pillars3]))

