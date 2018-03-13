var niza = [
 "A",
 "A",
 "B",
 "B",
 "C",
 "C",
 "D",
 "D",
 "E",
 "E",
 "F",
 "F",
 "G",
 "G",
 "H",
 "H",
 "I",
 "I",
 "J",
 "J"
];



randomizeNiza(niza);
populateTd(niza);
var $td1 = undefined;
var $td2 = undefined;
$("td").click(function() {
    if ($(this).attr("class") === "hidden") {
      if ($td1 === undefined) {
        $td1 = $(this);
        show($td1);
      } else if ($td2 === undefined) {
        $td2 = $(this);
        show($td2);
        if ($($td1).text() === $($td2).text()) {
          $td1 = undefined;
          $td2 = undefined;
        } else {
          setTimeout(function() {
            $td1 = hide($td1);
          }, 300);
          setTimeout(function() {
            $td2 = hide($td2);
          }, 300);
        };
      };
    };
});

function show($td) {
  $($td).removeClass("hidden").addClass("show");
}

function hide($td) {
  $($td).removeClass("show").addClass("hidden");
}

function populateTd(niza) {
  var index = 0;
  $("td").each(function() {
    $(this).text(niza[index]);
    index++;
  });
}

function randomizeNiza(niza) {
  var currentIndex = niza.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = niza[currentIndex];
    niza[currentIndex] = niza[randomIndex];
    niza[randomIndex] = temporaryValue;
  }
  return niza;
}

$("#reset").click(function() {
  $("td").removeClass("show");
  $("td").addClass("hidden");
  randomizeNiza(niza);
  populateTd(niza);
  var $td1 = undefined;
  var $td2 = undefined;
});


var niza = [
 "A",
 "A",
 "B",
 "B",
 "C",
 "C",
 "D",
 "D",
 "E",
 "E",
 "F",
 "F",
 "G",
 "G",
 "H",
 "H",
 "I",
 "I",
 "J",
 "J"
];



randomizeNiza(niza);
populateTd(niza);
var $td1 = undefined;
var $td2 = undefined;
$("td").click(function() {
    if ($(this).attr("class") === "hidden") {
      if ($td1 === undefined) {
        $td1 = $(this);
        show($td1);
      } else if ($td2 === undefined) {
        $td2 = $(this);
        show($td2);
        if ($($td1).text() === $($td2).text()) {
          $td1 = undefined;
          $td2 = undefined;
        } else {
          setTimeout(function() {
            $td1 = hide($td1);
          }, 300);
          setTimeout(function() {
            $td2 = hide($td2);
          }, 300);
        };
      };
    };
});

function show($td) {
  $($td).removeClass("hidden").addClass("show");
}

function hide($td) {
  $($td).removeClass("show").addClass("hidden");
}

function populateTd(niza) {
  var index = 0;
  $("td").each(function() {
    $(this).text(niza[index]);
    index++;
  });
}

function randomizeNiza(niza) {
  var currentIndex = niza.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = niza[currentIndex];
    niza[currentIndex] = niza[randomIndex];
    niza[randomIndex] = temporaryValue;
  }
  return niza;
}

$("#reset").click(function() {
  $("td").removeClass("show");
  $("td").addClass("hidden");
  randomizeNiza(niza);
  populateTd(niza);
  var $td1 = undefined;
  var $td2 = undefined;
});


