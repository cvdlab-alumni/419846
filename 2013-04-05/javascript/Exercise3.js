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
//north
northA=SIMPLEX_GRID([[-4,-15,-4,74],[2.5,-24.5,2.5,-24.5,2.5,8],[4]])
northB=SIMPLEX_GRID([[4,-15,4,-68],[2.5,24.5,2.5,24.5,2.5,8],[4]])
northC=SIMPLEX_GRID([[-4,15,-4,-68],[-2.5,-24.5,37.5],[4]])
north=STRUCT([northA,northB,northC])
north=R([2,3])(PI/2)(north)
north=T([2,3])([4,28])(north)

//east
eastA=SIMPLEX_GRID([[-22,138],[1,2.5,8,-7,9.5,2.5,7,-10,7.5,2.5,24.5,2.5,29],[4]])
eastB=SIMPLEX_GRID([[-22,-4,-8,126],[-1,-2.5,-8,7,-9.5,-2.5,-7,-10,-7.5,-2.5,-24.5,-2.5,-29],[4]])
eastC=SIMPLEX_GRID([[-22,1,-11,-126],[1,2.5,8,7,9.5,2.5,7,10,7.5,2.5,24.5,2.5,29],[4]])
eastD=SIMPLEX_GRID([[-22,-1,-11,-12,114],[-1,-2.5,-8,-7,-9.5,-2.5,-7,10,-7.5,-2.5,-24.5,-2.5,-29],[4]])
eastE=SIMPLEX_GRID([[22],[-1,-2.5,-8,-7,-9.5,-2.5,-7,-10,7.5,2.5,24.5,2.5,29],[4]])
east=STRUCT([eastA,eastB,eastC, eastD, eastE])
east=R([2,3])(PI/2)(east)
east=R([1,2])(-PI/2)(east)
east=T([1,2,3])([4,160,1])(east)

//south da traslare non ho avuto tempo
southA=SIMPLEX_GRID([[97],[-1,-2.5,-24.5,2.5,10,-12,12.5,-12,12.5,-12,2.5],[4]])
southB=SIMPLEX_GRID([[4],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])
southC=SIMPLEX_GRID([[-4,-77,16],[-1,-2.5,-24.5,2.5,10,12,12.5,12,12.5,12,2.5],[4]])

south=STRUCT([southA,southB,southC])

building3=STRUCT([north,east])
VIEW(building3)

