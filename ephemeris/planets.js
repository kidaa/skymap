// JavaScript by Peter Hayes http://www.aphayes.pwp.blueyonder.co.uk/
// Copyright 2001-2009
// This code is made freely available but please keep this notice.
// I accept no liability for any errors in my coding but please
// let me know of any errors you find. My address is on my home page.

// Functions for the planets

// The planet object

function planet(name,s,m,L,a,e,i,N,P) {
  this.name=name;
  this.symbol=s;
  this.mag=m;
  this.L=L;
  this.a=a;
  this.e=e;
  this.i=i;
  this.N=N;
  this.P=P;
}
// Meeus table 30.A Orbital Elements for the mean equinox of the date
// use approximate fixed magnitudes until I code it using Meeus equation

var planets=new Array();
planets[0]=new planet("Mercury","☿", 1,
   new Array(252.250906, 149474.0722491,    0.00030397,    0.000000018),
   new Array(  0.387098310,   0.0,          0.0,           0.0),
   new Array(  0.20563175,    0.000020406, -0.0000000284, -0.00000000017),
   new Array(  7.004986,      0.0018215,   -0.00001809,    0.000000053),
   new Array( 48.330893,      1.1861890,    0.00017587,    0.000000211),
   new Array( 77.456119,      1.5564775,    0.00029589,    0.000000056));

planets[1]=new planet("Venus","♀", -2,
   new Array(181.979801,  58519.2130302,    0.00031060,    0.000000015),
   new Array(  0.723329820,   0.0,          0.0,           0.0),
   new Array(  0.00677188,   -0.000047766,  0.0000000975,  0.00000000044),
   new Array(  3.394662,      0.0010037,   -0.00000088,   -0.000000007),
   new Array( 76.679920,      0.9011190,    0.00040665,   -0.000000080),
   new Array(131.563707,      1.4022188,   -0.00107337,   -0.000005315));

planets[2]=new planet("Earth","♁", 0,
   new Array(100.466449,  36000.7698231,    0.00030368,    0.000000021),
   new Array(  1.000001018,   0.0,          0.0,           0.0),
   new Array(  0.01670862,   -0.000042037, -0.0000001236,  0.00000000004),
   new Array(  0.0,           0.0,          0.0,           0.0),
   new Array(  0.0,           0.0,          0.0,           0.0),
   new Array(102.937348,      1.7195269,    0.00045962,    0.000000499));

planets[3]=new planet("Mars","♂", 0,
   new Array(355.433275,  19141.6964746,    0.00031097,    0.000000015),
   new Array(  1.523679342,   0.0,          0.0,           0.0),
   new Array(  0.09340062,    0.000090483, -0.0000000806, -0.00000000035),
   new Array(  1.849726,     -0.0006010,    0.00001276,   -0.000000006),
   new Array( 49.558093,      0.7720923,    0.00001605,    0.000002325),
   new Array(336.060234,      1.8410331,    0.00013515,    0.000000318));

planets[4]=new planet("Jupiter","♃", -2,
   new Array( 34.351484,   3036.3027889,    0.00022374,    0.000000025),
   new Array(  5.202603191,   0.0000001913, 0.0,           0.0),
   new Array(  0.04849485,    0.000163244, -0.0000004719, -0.00000000197),
   new Array(  1.303270,     -0.0054966,    0.00000465,   -0.000000004),
   new Array(100.464441,      1.0209550,    0.00040117,    0.000000569),
   new Array( 14.331309,      1.6126668,    0.00103127,   -0.000004569));

planets[5]=new planet("Saturn","♄", -1,
   new Array( 50.077471,   1223.5110141,    0.00051952,   -0.000000003),
   new Array(  9.554909596,  -0.0000021389, 0.0,           0.0),
   new Array(  0.05550862,   -0.000346818, -0.0000006456,  0.00000000338),
   new Array(  2.488878,     -0.0037363,   -0.00001516,    0.000000089),
   new Array(113.665524,      0.8770979,   -0.00012067,   -0.000002380),
   new Array( 93.056787,      1.9637694,    0.00083757,    0.000004899));

planets[6]=new planet("Uranus","⛢", 6,
   new Array(314.055005,    429.8640561,    0.00030434,    0.000000026),
   new Array( 19.218446062,  -0.0000000372, 0.00000000098, 0.0),
   new Array(  0.04629590,   -0.000027337,  0.0000000790,  0.00000000025),
   new Array(  0.773196,      0.0007744,    0.00003749,   -0.000000092),
   new Array( 74.005947,      0.5211258,    0.00133982,    0.000018516),
   new Array(173.005159,      1.4863784,    0.00021450,    0.000000433));

planets[7]=new planet("Neptune","♆", 7,
   new Array(304.348665,    219.8833092,    0.00030926,    0.000000018),
   new Array( 30.110386869,  -0.0000001663, 0.00000000069, 0.0),
   new Array(  0.00898809,    0.000006408, -0.0000000008, -0.00000000005),
   new Array(  1.769952,     -0.0093082,   -0.00000708,    0.000000028),
   new Array(131.784057,      1.1022057,    0.00026006,   -0.000000636),
   new Array( 48.123691,      1.4262677,    0.00037918,   -0.000000003));

// heliocentric xyz for planet p and observer obs

function helios(p,obs) {
  var T=(jd(obs)-2451545.0)/36525;
  var T2=T*T;
  var T3=T2*T;
  // longitude of ascending node
  var N=rev(p.N[0]+p.N[1]*T+p.N[2]*T2+p.N[3]*T3);
  // inclination
  var i=p.i[0]+p.i[1]*T+p.i[2]*T2+p.i[3]*T3;
  // Mean longitude
  var L=rev(p.L[0]+p.L[1]*T+p.L[2]*T2+p.L[3]*T3);
  // semimajor axis
  var a=p.a[0]+p.a[1]*T+p.a[2]*T2+p.a[3]*T3;
  // eccentricity
  var e=p.e[0]+p.e[1]*T+p.e[2]*T2+p.e[3]*T3;
  // longitude of perihelion
  var P=rev(p.P[0]+p.P[1]*T+p.P[2]*T2+p.P[3]*T3);
  var M=rev(L-P);
  var w=rev(L-N-M);
  // Eccentric anomaly
  var E0=M+(180.0/Math.PI)*e*sind(M)*(1+e*cosd(M));
  var E=E0-(E0-(180.0/Math.PI)*e*sind(E0)-M)/(1-e*cosd(E0));
  while (Math.abs(E0-E) > 0.0005) {
    E0=E;
    E=E0-(E0-(180.0/Math.PI)*e*sind(E0)-M)/(1-e*cosd(E0));
  };
  var x=a*(cosd(E)-e);
  var y=a*Math.sqrt(1-e*e)*sind(E);
  var r=Math.sqrt(x*x+y*y);
  var v=rev(atan2d(y,x));
  // Heliocentric Ecliptic Rectangular Coordinates
  var xeclip=r*(cosd(N)*cosd(v+w)-sind(N)*sind(v+w)*cosd(i));
  var yeclip=r*(sind(N)*cosd(v+w)+cosd(N)*sind(v+w)*cosd(i));
  var zeclip=r*sind(v+w)*sind(i);
  return new Array(xeclip,yeclip,zeclip);
}
// radecr returns ra, dec and earth distance
// obj and base are Heliocentric Ecliptic Rectangular Coordinates
// for the object and earth and obs is the observer

function radecr(obj,base,obs) {
  // Equatorial co-ordinates
  var x=obj[0];
  var y=obj[1];
  var z=obj[2];
  // julian date
  var jdobs=jd(obs);
  // Obliquity of Ecliptic
  var obl=23.4393-3.563E-7*(jdobs-2451543.5);
  // Convert to Geocentric co-ordinates
  var x1=x-base[0];
  var y1=(y-base[1])*cosd(obl)-(z-base[2])*sind(obl);
  var z1=(y-base[1])*sind(obl)+(z-base[2])*cosd(obl);
  // RA and dec
  var ra=rev(atan2d(y1,x1))/15.0;
  var dec=atan2d(z1,Math.sqrt(x1*x1+y1*y1));
  // Earth distance
  var r=Math.sqrt(x1*x1+y1*y1+z1*z1);
  return new Array(ra,dec,r);
}

function Planet(n,s,r,d,m) {
  this.name=n;
  this.symbol=s;
  this.ra = - 15 * r;   // convert hours to degrees and invert 
  this.dec = d;
  this.mag = m;
}


// Computes the planet positions
// returns an array of <name> <symbol> <right ascension> <declination>
function computePlanets(obs) {
  var Planets = new Array();
  for (var p=0; p<8; p++) {
    if (p==2) continue; // skip Earth

    var earth_xyz=helios(planets[2],obs);
    var planet_xyz = helios(planets[p],obs);
    var radec=radecr(planet_xyz,earth_xyz,obs);
 
    P = new Planet(planets[p].name, planets[p].symbol, radec[0], radec[1], planets[p].mag);
    Planets.push(P);
  }
  return (Planets);
}

// Returns the planets as a geoJSON object
function jsonPlanets(obs)
{
  return (GeoJSON.parse(computePlanets(obs), {Point: ['dec', 'ra']}));
}



function doPlanets(obs) {
// creates the planets window,
// obs is the observer  

  var oname=sitename();
  var dayno;
  var pwin=window.open("","planets","menubar,scrollbars,resizable");
  with (pwin.document) {
    writeln("<HTML>");
    writeln("<HEAD>");
    writeln("<TITLE>Javascript Ephemeris - Planets</TITLE>");
    writeln("<link href=\"default.css\" rel=stylesheet type=\"text/css\" />");
    writeln("</HEAD>");
    writeln("<BODY>");
    write("<CENTER><H2>");
    write("Planetary Positions for "+oname);

    writeln("<br>Date = "+datestring(obs));
    writeln(" Time = "+timestring(obs,false));

    writeln("</H2>");
    writeln("<table  class=\"fixed_bluebox\" border=\"1\" cellpadding=\"5\"");
    writeln("<TR>");

    writeln("<TD align=center>Name</TD>");
    writeln("<TD align=center>Symbol</TD>");
    writeln("<TD align=center>RA</TD>");
    writeln("<TD align=center>Dec</TD>");

    writeln("</TR>");

    Planets = computePlanets(obs);

    for (var i=0;i<Planets.length;i++)
    {
      writeln("<TR>");
      writeln("<TD align=center>"+Planets[i].name+"</TD>");
      writeln("<TD align=center>"+Planets[i].symbol+"</TD>");

      writeln("<TD align=center>"+hmdstring(Planets[i].ra)+"</TD>");
      writeln("<TD align=center>"+anglestring(Planets[i].dec)+"</TD>");
      writeln("</TR>");
    }

    writeln("</TABLE><BR>");
    writeln("<TABLE BORDER=1><TR>");
    write("<TD><A HREF=\"javascript:window.print()\">Print</A></TD>");
    write("<TD><A HREF=\"javascript:window.close()\">Close</A></TD>");
    writeln("</TR></TABLE></CENTER></BODY></HTML>");
    close();
  }
  pwin.focus();
}

// ppos - prints the positions
// doc is the document to write to
// obj and base are Heliocentric Ecliptic Rectangular Coordinates
// for the object and earth and obs is the observer
function ppos(doc,obj,base,obs) {
  with (doc) {
     var radec=radecr(obj,base,obs);
     writeln("<TD align=center>"+hmdstring(radec[0])+"</TD>");
     writeln("<TD align=center>"+anglestring(radec[1],false)+"</TD>");
  }
}

