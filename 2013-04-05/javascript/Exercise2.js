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
//piano terra
floorA=SIMPLEX_GRID([[63,-34],[-21,18,4,35,4,35,4],[-1,2.5]])
floorB= SIMPLEX_GRID([[37,-60],[-21,-18,-4,-35,-4,-35,-4,17,-16,-7],[-1,2.5]])
floorC= SIMPLEX_GRID([[-63,5,-29],[-21,17],[-1,2.5]])




function cerchio(p){
	 x=p[0]
     y=p[1]
	return [y*COS(x),y*SIN(x)]}

dom1=DOMAIN( [ [ 0,PI], [0,18.5] ] )([10,10])
mezzaCirco=MAP(cerchio)(dom1)
mezzaCirco3d=EXTRUDE([2.5])(mezzaCirco)
mezzaCirco3d=T([1,2,3])([18.5,138,1])(mezzaCirco3d)


dom2=DOMAIN( [ [ 0,PI], [0,8.5] ] )([10,10])

mezzaCircopiccola=MAP(cerchio)(dom2)
mezzaCircopiccola3d=EXTRUDE([2.5])(mezzaCircopiccola)
mezzaCircopiccola3d=R([1,2])(-PI/2)(mezzaCircopiccola3d)
mezzaCircopiccola3d=T([1,2,3])([68,29.5,1])(mezzaCircopiccola3d)

floor0=STRUCT([floorA, floorB,floorC, mezzaCirco3d,mezzaCircopiccola3d])

//primo piano
floor1A= SIMPLEX_GRID([[97],[68,-20,72],[-1,-2.5,-24.5,2.5]])
floor1B= SIMPLEX_GRID([[4,-15,78],[-68,20,-72],[-1,-2.5,-24.5,2.5]])
floor1C=CUBOID([15,17,2.5])
floor1C=T([1,2,3])([4,-17,28])(floor1C)
floor1=STRUCT([floor1A,floor1B,floor1C])

//secondo piano
floor2A= SIMPLEX_GRID([[4,15,-78],[-67,11,-31,-51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
floor2B= SIMPLEX_GRID([[-4,-15,78],[-67,-11,82],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
floor2C= SIMPLEX_GRID([[4,15,-78],[-67,-11,-31,51],[-1,-2.5,-24.5,-2.5,-24.5,2.5]])
triangolo=SIMPLICIAL_COMPLEX([[0,0],[78,0],[0,-11],[0,0]])([[1,2,3]])
floor2D=EXTRUDE([2.5])(triangolo)
floor2D=T([1,2,3])([19,78,55])(floor2D)
floor2=STRUCT([floor2A, floor2B,floor2C,floor2D])

//terzo piano
floor3A= SIMPLEX_GRID([[97],[2,37,2,37,4,-35,-4,-4,31,4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor3B= SIMPLEX_GRID([[4,-15,78],[-2,-37,-2,-37,-4,35,4,4,-31,-4],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor3=STRUCT([floor3A,floor3B])

//tetto
floor4A= SIMPLEX_GRID([[20,-77],[79,-81],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor4B= SIMPLEX_GRID([[97],[-78,82],[-1,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,-2.5,-24.5,2.5]])
floor4=STRUCT([floor4A, floor4B])

building=STRUCT([floor0,floor1,floor2,floor3,floor4])
VIEW(building)

