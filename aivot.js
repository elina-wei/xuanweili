function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        // toiminnallisuus puuttuu!
        document.getElementById("laatikko2").innerHTML = "<table><tr><td>  projektiisi jQuery -kirjasto</td></tr><tr><td> päivätehtävä</td></tr> </table>";
    }
    else if (boxNumber == 3){
        //toiminnallisuus puuttuu!
        document.getElementById("laatikko3").innerHTML = "<img src='kuva/lizhixan.jpg' width='450px' height='250px'>";  
     }
     else if (boxNumber == 4){
        //toiminnallisuus puuttuu!
        document.location.reload();
     }
   }
   function yhteystietoFunktio(){
       var x = document.getElementById("yhteystietolomake");
       var text="";
       var i;
    for (i = x.length-1; i >=0 ; i--) {
      text +=x.elements[i].name+":      "+ x.elements[i].value+"<br>";
      
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  
  }


function diagrammiFunktio() {
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
   
   
    ctx.fillStyle="#FF0000";
    ctx.fillRect(200,200,200,200);
   

    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText("50", 0, 450);

    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.lineTo(60, 250);
    ctx.lineTo(80, 200);
    ctx.lineTo(100, 210);
    ctx.lineTo(160, 200);
    ctx.lineTo(100, 150);
    ctx.lineTo(260, 200);
    ctx.lineTo(200, 190);
    ctx.lineTo(190, 180);
    ctx.lineTo(160, 150);
    ctx.lineTo(140, 210);
    ctx.stroke();
   }

