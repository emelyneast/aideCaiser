const formContainer = document.getElementById('form-container');
const dateD = document.getElementById('dateD');
const resultContainer = document.getElementById('result-container');
const infoDiv = document.getElementById('infoDiv');
const lspdForm = document.getElementById('envoie');
let delits = [];
let delitsCP = [];
let delitsCDR = [];

function date(){
  var day, month, year, date;
  var date = new Date($('#date').val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    if(day>=1 && day<=9){
      day = "0"+day;
    }
    if(month>=1 && month<=9){
      month = "0"+month;
    }
    date = day+"/"+month+"/"+year
    return date;
}


lspdForm.addEventListener('click', () => {
    const nom = document.getElementById('nom').value.toUpperCase();
    const prenom = document.getElementById('prenom').value.toLowerCase();
    const p = prenom.charAt(0).toUpperCase() + prenom.slice(1)
    
  if(nom == "" || prenom == "" || $("#date").val()=="" ){
    alert("Un champ n'est pas remplie")
  }
  else{
      resultNom.textContent = `${nom} ${p}`;
      resultDelits.innerHTML = '';


      for (const [index, delit] of delits.entries()) {
          const li = document.createElement('li');
          
          if (index === delits.length - 1) {
              li.textContent = delit + ' ' + date();
          }
          else{
              li.textContent = delit;
          }
          resultDelits.appendChild(li);
        }
      $("#form-container").hide();
      $("#result-container").show();
  }
});

const backButton = document.createElement('button');
backButton.textContent = 'Retour';
backButton.addEventListener('click', () => {
  document.getElementById('nom').value = "";
  document.getElementById('prenom').value = "";
  document.getElementById('date').value = "";
  delits = [];
  delitsCP = [];
  delitsCDR = [];
  amendeTotal = 0;
  dureePrisonTotal = 0;
  dureePrisonTotalMax = 0;
  dureeGAVTotal = 0;
  location.reload();
  $("#result-container").hide();
  $("#form-container").show();
    
});


resultContainer.appendChild(backButton);




function getTotalAmende() {
  let total = 0;
  delitsCP.forEach(delit => total += delit.amende);
  delitsCDR.forEach(delit => total += delit.amende);
  return total;
}

function getTotalPrison() {
  let total = 0;
  delitsCP.forEach(delit => total += delit.prison);
  delitsCDR.forEach(delit => total += delit.prison);
  return total;
}

function afficherDelits() {
  let lsiteCP = document.getElementById("lsiteCP");
  lsiteCP.innerHTML = "";
  delitsCP.forEach(delit => {
    let item = document.createElement("li");
    item.innerText = delit.delit + " - Amende : " + delit.amende + " $, Prison : " + delit.prison + " ans";
    lsiteCP.appendChild(item);
  });
  let lsiteCDR = document.getElementById("lsiteCDR");
  lsiteCDR.innerHTML = "";
  delitsCDR.forEach(delit => {
    let item = document.createElement("li");
    item.innerText = delit.delit + " - Amende : " + delit.amende + " $, Prison : " + delit.prison + " ans";
    lsiteCDR.appendChild(item);
  });
}

const amendeCP = {
    11: 150000,
    12: 50000,
    13: 25000,
    14: 10000,
    15: 50000,
    16: 100000,
    17: 10000,
    18: 0,
    19: 15000,
    111: 25000,
    112: 25000,
    113: 20000,
    114: 30000,
    115: 20000,
    116:0,
    117:0,
    118:0,
    119:60000,
    120:150000,
    121:0,
    122:150000,
    123:25000,
    124:35000,
    125:30000,
    126:20000,
    127:15000,
    128:30000,
    129:15000,
    130:20000,
    131:15000,
    132:30000,
    133:35000,
    134:50000,
    135:10000,
    136:20000,
    137:25000,
    138:35000,
    139:35000,
    140:30000,
    141:45000,
    142:30000,
    143:50000,
    144:100000,
    145:150000,
    146:10000,
    147:2000,
    148:3000,
    149:5000,
    150:20000,
    151:5000,
    152:50000,
    153:0,
    154:25000,
    155:0,
    156:100000,
    157:10000,
    158:0,
    159:0,
    160:30000,
    161:100000,
    162:200000,
    163:250000,
    164:300000,
    165:150000,
    166:50000,
    167:60000,
    168:25000,
    169:45000,
    170:1000000,
    171:10000,
    172:20000,
    173:30000,
    174:45000,
    175:1000,
    176:25000,
    177:50000,
    178:30000,
    179:50000,
    180:75000,
    181:100000,
    182:200000,
    183:10000,
    184:30000,

  
};

const dureePrisonCP = {
  11: 15,
  12: 3,
  13: 5,
  14: 3,
  15: 5,
  16: 5,
  17: 1,
  18: 0,
  19: 0,
  111: 0,
  112: 2,
  113: 5,
  114: 5,
  115: 2,
  116:0,
  117:0,
  118:0,
  119:3,
  120:10,
  121:0,
  122:20,
  123:3,
  124:5,
  125:3,
  126:1,
  127:3,
  128:2,
  129:3,
  130:5,
  131:10,
  132:12,
  133:15,
  134:20,
  135:1,
  136:5,
  137:10,
  138:15,
  139:0,
  140:8,
  141:10,
  142:8,
  143:5,
  144:5,
  145:10,
  146:0,
  147:0,
  148:0,
  149:0,
  150:0,
  151:0,
  152:1,
  153:0,
  154:10,
  155:0,
  156:20,
  157:2,
  158:0,
  159:0,
  160:30,
  161:8,
  162:20,
  163:15,
  164:8,
  165:0,
  166:5,
  167:15,
  168:1,
  169:5,
  170:0,
  171:0,
  172:1,
  173:5,
  174:10,
  175:0,
  176:2,
  177:8,
  178:10,
  179:5,
  180:7,
  181:14,
  182:30,
  183:1,
  184:5,
};

const dureePrisonCPMax = {
  11: 30,
  12: 5,
  13: 10,
  14: 3,
  15: 10,
  16: 10,
  17: 1,
  18: 0,
  19: 0,
  111: 0,
  112: 2,
  113: 5,
  114: 5,
  115:2,
  116:0,
  117:0,
  118:0,
  119:3,
  120:10,
  121:0,
  122:20,
  123:3,
  124:5,
  125:3,
  126:1,
  127:3,
  128:2,
  129:3,
  130:5,
  131:10,
  132:12,
  133:15,
  134:20,
  135:3,
  136:5,
  137:10,
  138:15,
  139:0,
  140:8,
  141:10,
  142:8,
  143:5,
  144:5,
  145:10,
  146:0,
  147:0,
  148:0,
  149:0,
  150:0,
  151:0,
  152:3,
  153:0,
  154:10,
  155:0,
  156:20,
  157:2,
  158:0,
  159:0,
  160:30,
  161:8,
  162:20,
  163:15,
  164:8,
  165:0,
  166:5,
  167:15,
  168:1,
  169:5,
  170:0,
  171:0,
  172:1,
  173:5,
  174:10,
  175:0,
  176:2,
  177:8,
  178:10,
  179:5,
  180:7,
  181:14,
  182:30,
  183:1,
  184:5,
};

const dureeGAVCP = {
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 24,
  111: 24,
  112: 0,
  113: 0,
  114: 0,
  115:0,
  116:0,
  117:0,
  118:0,
  119:0,
  120:0,
  121:0,
  122:0,
  123:0,
  124:0,
  125:0,
  126:0,
  127:0,
  128:0,
  129:0,
  130:0,
  131:0,
  132:0,
  133:0,
  134:0,
  135:0,
  136:0,
  137:0,
  138:0,
  139:3,
  140:0,
  141:0,
  142:0,
  143:0,
  144:0,
  145:0,
  146:10,
  147:24,
  148:24,
  149:24,
  150:24,
  151:48,
  152:0,
  153:0,
  154:0,
  155:0,
  156:0,
  157:0,
  158:0,
  159:0,
  160:0,
  161:0,
  162:0,
  163:0,
  164:0,
  165:0,
  166:0,
  167:0,
  168:0,
  169:0,
  170:48,
  171:0,
  172:0,
  173:0,
  174:0,
  175:0,
  176:0,
  177:0,
  178:0,
  179:0,
  180:0,
  181:0,
  182:0,
  183:0,
  184:0,
  
};

const dureePrisonCDR = {
  21: 0,
  22: 0,
  23: 0,
  24:0,
  25:0,
  26:0,
  27:0,
  28:0,
  29:0,
  210:0,
  211:0,
  212:0,
  213:0,
  214:0,
  215:0,
  216:3,
  217:20,
  218:0,
  219:0,
  220:0,
  221:0,
  222:0,
  223:0,
  224:0,
  225:0,
  226:2,
  227:0,
  228:0,
  229:0,
  230:0,
  231:0,
};

const dureePrisonCDRMax = {
  21: 0,
  22: 0,
  23: 0,
  24:0,
  25:0,
  26:0,
  27:0,
  28:0,
  29:0,
  210:0,
  211:0,
  212:0,
  213:0,
  214:0,
  215:0,
  216:3,
  217:20,
  218:0,
  219:0,
  220:0,
  221:0,
  222:0,
  223:0,
  224:0,
  225:0,
  226:2,
  227:0,
  228:0,
  229:0,
  230:0,
  231:0,
};

const dureeGAVCDR = {
  21: 0,
  22: 0,
  23: 24,
  24:0,
  25:0,
  26:0,
  27:0,
  28:0,
  29:0,
  210:48,
  211:0,
  212:5,
  213:20,
  214:0,
  215:0,
  216:0,
  217:0,
  218:0,
  219:0,
  220:0,
  221:0,
  222:0,
  223:0,
  224:0,
  225:0,
  226:0,
  227:0,
  228:0,
  229:0,
  230:0,
  231:0,
};

const amendeCDR = {
    21: 1000,
    22: 1500,
    23: 15000,
    24:10000,
    25:10000,
    26:500,
    27:5000,
    28:500,
    29:2000,
    210:30000,
    211:10000,
    212:40000,
    213:60000,
    214:2000,
    215:15000,
    216:30000,
    217:50000,
    218:500,
    219:750,
    220:2000,
    221:500,
    222:1350,
    223:10000,
    224:30000,
    225:500,
    226:5000,
    227:50,
    228:1000,
    229:3000,
    230:20000,
    231:3000,
};



const lsiteCP = document.getElementById('lsiteCP');
const lsiteCDR = document.getElementById('lsiteCDR');
const totalAmende = document.getElementById('resultAmende');
const totalDureePrison = document.getElementById('resultPrison');
const totalDureeGAV = document.getElementById('resultGAV');
const totalDureePrisonMax = document.getElementById('resultPrisonMax');
const autresR = document.getElementById('autres');

let amendeTotal = 0;
let dureePrisonTotal = 0;
let dureePrisonTotalMax = 0;
let dureeGAVTotal = 0;

document.getElementById('ajoutCP').addEventListener('click', () => {
    const delit = document.getElementById('CodeP').value;
    const amende = amendeCP[delit];
    const dureePrison = dureePrisonCP[delit];
    const dureePrisonMax = dureePrisonCPMax[delit];
    const dureeGAV = dureeGAVCP[delit];
    const delitText = document.getElementById('CodeP').options[document.getElementById('CodeP').selectedIndex].text;
    delits.push('- '+delitText)
    const delitElement = document.createElement('div');
    if (delitText == "Légitime défense"){
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre : Définie par le service d’enquête' ;
      autresR.innerHTML = "Définie par le service d’enquête"
    }
    else if(delitText == "Viol" || delitText == "Viol en réunion" || delitText == "Agression sexuelle" || delitText == "Torture" || delitText == "Trouble à l’ordre publique causant la mort" || delitText == "Terrorisme" || delitText == "Livraison d’information ou de matériels à un ennemie de l’Etat relevant d’un secret national" || delitText == "Livraison d’information ou de matériels à un ennemie de l’Etat relevant d’un secret de la défense nationale" ){
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre : PEINE DE MORT' ;
      autresR.innerHTML = "PEINE DE MORT"
    }
    else if(delitText == "Agression sexuelle"  ){
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre : PRISON A VIE' ;
      autresR.innerHTML = "PRISON A VIE"
    }
    else if(delitText == "Survol d’une zone interdite ou militaire"  ){
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre : Destruction du véhicule' ;
      autresR.innerHTML = "Destruction du véhicule"
    }
    else if(delitText == "Tentative de coup d'état"  ){
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre : ouverture d’une enquête' ;
      autresR.innerHTML = "ouverture d’une enquête"
    }
    else{
      delitElement.innerHTML = '- <b>' +delitText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure' ;
    }
    lsiteCP.appendChild(delitElement);
    amendeTotal += amende;
    dureePrisonTotal += dureePrison;
    dureePrisonTotalMax += dureePrisonMax;
    dureeGAVTotal += dureeGAV;
    totalAmende.innerHTML =  amendeTotal + '$';
    totalDureePrison.innerHTML =  + dureePrisonTotal + ' ans';
    totalDureePrisonMax.innerHTML = + dureePrisonTotalMax + ' ans';
    if( dureeGAV > 48){
      totalDureeGAV.innerHTML = '48 heure';
    }
    else{
      totalDureeGAV.innerHTML =  dureeGAVTotal + ' heure';
    }

    
  
});

document.getElementById('ajoutCDR').addEventListener('click', () => {
    const infraction = document.getElementById('CDR').value;
    const amende = amendeCDR[infraction];
    const dureePrison = dureePrisonCDR[infraction];
    const dureePrisonMax = dureePrisonCDRMax[infraction];
    const dureeGAV = dureeGAVCDR[infraction];
    const infractionText = document.getElementById('CDR').options[document.getElementById('CDR').selectedIndex].text;
    const infractionElement = document.createElement('div');
    delits.push('- '+infractionText)
    if (infractionText == "Possession illégale d’un système hydraulique" || infractionText == "Possession illégale de N.O.S."){
      infractionElement.innerHTML = '- <b>'+infractionText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure, Autre: Immobilisation du véhicule';
      autresR.innerHTML = "Immobilisation du véhicule"
    }
    else if (infractionText == "Conduite d’un véhicules non Homologuer en continuité à l’article 9.2 de la mairie"){
      infractionElement.innerHTML = '- <b>'+infractionText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure Autre: Saisie du véhicules';
      autresR.innerHTML = "Saisie du véhicules"
    }
    else{
      infractionElement.innerHTML = '- <b>'+infractionText + '</b> - Amende : ' + amende + '$, Durée de prison minimum : ' + dureePrison + ' ans, Durée de prison maximum : ' + dureePrisonMax + ' ans, Durée de GAV : ' + dureeGAV + ' heure';
    }
    lsiteCDR.appendChild(infractionElement);
    amendeTotal += amende;
    dureePrisonTotal += dureePrison;
    dureePrisonTotalMax += dureePrisonMax;
    dureeGAVTotal += dureeGAV;
    totalAmende.innerHTML =  amendeTotal + '$';
    totalDureePrison.innerHTML = dureePrisonTotal + ' ans';
    totalDureePrisonMax.innerHTML =  dureePrisonTotalMax + ' ans';
    if( dureeGAV > 48){
      totalDureeGAV.innerHTML = '48 heure';
    }
    else{
      totalDureeGAV.innerHTML =  dureeGAVTotal + ' heure';
    }
   
});