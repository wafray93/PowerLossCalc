// База данни с реални транзистори
const TRANSISTOR_DB = {
  Si: {
    "IRFZ44N": {
      name: "IRFZ44N (Si MOSFET)",
      vds_max: 55,
      id_max: 49,
      rds_mohm: 17.5,
      tr_ns: 23,
      tf_ns: 16,
      alpha: 0.0065,
      package: "TO-220",
      manufacturer: "Infineon"
    },
    "IXFH26N50P": {
      name: "IXFH26N50P (Si MOSFET)", 
      vds_max: 500,
      id_max: 26,
      rds_mohm: 140,
      tr_ns: 65,
      tf_ns: 85,
      alpha: 0.007,
      package: "TO-247",
      manufacturer: "IXYS"
    },
    "IGW60T120": {
      name: "IGW60T120 (Si IGBT)",
      vds_max: 1200,
      id_max: 60,
      rds_mohm: 28,
      tr_ns: 170,
      tf_ns: 340,
      alpha: 0.005,
      package: "TO-247",
      manufacturer: "Infineon"
    },
    "2SK4017": {
      name: "2SK4017 (Si MOSFET)",
      vds_max: 900,
      id_max: 7,
      rds_mohm: 1600,
      tr_ns: 150,
      tf_ns: 200,
      alpha: 0.008,
      package: "TO-3P",
      manufacturer: "Toshiba"
    }
  },
  SiC: {
    "C2M0080120D": {
      name: "C2M0080120D (SiC MOSFET)",
      vds_max: 1200,
      id_max: 36,
      rds_mohm: 80,
      tr_ns: 13,
      tf_ns: 24,
      alpha: 0.002,
      package: "TO-247-3",
      manufacturer: "Wolfspeed"
    },
    "SCT3030AL": {
      name: "SCT3030AL (SiC MOSFET)",
      vds_max: 650,
      id_max: 45,
      rds_mohm: 30,
      tr_ns: 18,
      tf_ns: 12,
      alpha: 0.0025,
      package: "TO-247-4",
      manufacturer: "ROHM"
    },
    "AIMW120R060M1": {
      name: "AIMW120R060M1 (SiC MOSFET)",
      vds_max: 1200,
      id_max: 31,
      rds_mohm: 60,
      tr_ns: 15,
      tf_ns: 20,
      alpha: 0.002,
      package: "TO-247-4",
      manufacturer: "Infineon"
    },
    "UF3C065030K4S": {
      name: "UF3C065030K4S (SiC MOSFET)",
      vds_max: 650,
      id_max: 60,
      rds_mohm: 30,
      tr_ns: 10,
      tf_ns: 8,
      alpha: 0.0018,
      package: "TO-247-4",
      manufacturer: "UnitedSiC"
    }
  },
  GaN: {
    "GS66516T": {
      name: "GS66516T (GaN HEMT)",
      vds_max: 650,
      id_max: 30,
      rds_mohm: 16,
      tr_ns: 8.5,
      tf_ns: 2.7,
      alpha: 0.003,
      package: "GaN PX",
      manufacturer: "GaN Systems"
    },
    "EPC2001C": {
      name: "EPC2001C (GaN HEMT)",
      vds_max: 100,
      id_max: 13,
      rds_mohm: 14,
      tr_ns: 1.4,
      tf_ns: 3.5,
      alpha: 0.004,
      package: "LGA",
      manufacturer: "EPC"
    },
    "TPH3212PS": {
      name: "TPH3212PS (GaN HEMT)",
      vds_max: 650,
      id_max: 18,
      rds_mohm: 35,
      tr_ns: 5.2,
      tf_ns: 7.8,
      alpha: 0.0025,
      package: "PQFN",
      manufacturer: "Transphorm"
    },
    "IGN04N65F5": {
      name: "IGN04N65F5 (GaN HEMT)",
      vds_max: 650,
      id_max: 4,
      rds_mohm: 150,
      tr_ns: 3.5,
      tf_ns: 4.2,
      alpha: 0.003,
      package: "TO-263",
      manufacturer: "Infineon"
    }
  }
};

const ctx = document.getElementById('lossChart').getContext('2d');
let chart=null;
let selectedTransistor = null;

// Функция за филтриране на транзисторите според критериите
function filterTransistors() {
  const tech = document.getElementById('techSelect').value;
  const maxVoltage = +document.getElementById('maxVoltage').value;
  const maxCurrent = +document.getElementById('maxCurrent').value;
  
  const transistorSelect = document.getElementById('transistorSelect');
  transistorSelect.innerHTML = '<option value="">Избери транзистор...</option>';
  
  const transistors = TRANSISTOR_DB[tech];
  
  for (const [key, transistor] of Object.entries(transistors)) {
    if (transistor.vds_max >= maxVoltage && transistor.id_max >= maxCurrent) {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = `${transistor.name} (${transistor.vds_max}V/${transistor.id_max}A)`;
      transistorSelect.appendChild(option);
    }
  }
}

// Функция за показване на информацията за избрания транзистор
function showTransistorInfo(transistorKey) {
  if (!transistorKey) {
    document.getElementById('transistorInfo').style.display = 'none';
    selectedTransistor = null;
    return;
  }
  
  const tech = document.getElementById('techSelect').value;
  const transistor = TRANSISTOR_DB[tech][transistorKey];
  selectedTransistor = transistor;
  
  document.getElementById('modelName').textContent = transistor.name;
  document.getElementById('manufacturer').textContent = transistor.manufacturer;
  document.getElementById('package').textContent = transistor.package;
  document.getElementById('vdsMax').textContent = transistor.vds_max + ' V';
  document.getElementById('idMax').textContent = transistor.id_max + ' A';
  document.getElementById('rdsOn').textContent = transistor.rds_mohm + ' mΩ';
  
  document.getElementById('transistorInfo').style.display = 'block';
}

function calc(){
  if (!selectedTransistor) {
    alert('Моля, изберете транзистор за изчисляване!');
    return;
  }
  
  const Vdc=+document.getElementById('vdc').value;
  const I=+document.getElementById('iLoad').value;
  const fsw=+document.getElementById('fsw').value*1000;
  const T=+document.getElementById('temp').value;
  const D=+document.getElementById('duty').value;
  
  // Проверка дали параметрите са в границите на транзистора
  if (Vdc > selectedTransistor.vds_max) {
    alert(`Внимание: Напрежението (${Vdc}V) надвишава максималното за този транзистор (${selectedTransistor.vds_max}V)!`);
  }
  
  if (I > selectedTransistor.id_max) {
    alert(`Внимание: Токът (${I}A) надвишава максималния за този транзистор (${selectedTransistor.id_max}A)!`);
  }

  const rds0=selectedTransistor.rds_mohm/1000;
  const rds=rds0*(1+selectedTransistor.alpha*(T-25));

  const pCond=I*I*rds*D;
  const trs=selectedTransistor.tr_ns*1e-9;
  const tfs=selectedTransistor.tf_ns*1e-9;
  const pSw=0.5*Vdc*I*(trs+tfs)*fsw*2;
  const pTotal=pCond+pSw;
  const pout=Vdc*I*D;
  const eff=100*pout/(pout+pTotal);

  document.getElementById('pCond').textContent=pCond.toFixed(2)+" W";
  document.getElementById('pSw').textContent=pSw.toFixed(2)+" W";
  document.getElementById('pTotal').textContent=pTotal.toFixed(2)+" W";
  document.getElementById('efficiency').textContent=eff.toFixed(2)+" %";

  if(chart) chart.destroy();
  chart=new Chart(ctx,{
    type:'pie',
    data:{
      labels:['Conduction','Switching'],
      datasets:[{data:[pCond,pSw],backgroundColor:['#004aad','#00c896']}]
    },
    options:{
      responsive: true,
      maintainAspectRatio: true,
      plugins:{
        legend:{
          position:'bottom',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        }
      }
    }
  });

  document.getElementById('explainText').innerHTML=`
  <p><b>Използван транзистор:</b> ${selectedTransistor.name}</p>
  <p><b>Формули:</b></p>
  <ul>
    <li>P<sub>cond</sub>=I²·R<sub>DS(on)</sub>·D = ${I}²·${rds.toFixed(4)}·${D} = ${pCond.toFixed(2)} W</li>
    <li>P<sub>sw</sub>=0.5·V<sub>DC</sub>·I·(t<sub>r</sub>+t<sub>f</sub>)·f<sub>sw</sub>·2</li>
    <li>R(T)=R<sub>ref</sub>·(1+α·(T-25)) = ${rds0.toFixed(4)}·(1+${selectedTransistor.alpha}·(${T}-25)) = ${rds.toFixed(4)} Ω</li>
  </ul>
  <p><b>Характеристики на технологията:</b></p>
  <p><u>Si:</u> по-високи съпротивления и времена → по-големи загуби.</p>
  <p><u>SiC:</u> по-ниско R<sub>DS(on)</sub> и по-къси времена → по-малки загуби и стабилност при висока T.</p>
  <p><u>GaN:</u> най-бързо превключване, много малки загуби при високи честоти, но ограничения при много високи напрежения.</p>`;
}

// Event listeners
document.getElementById('calcBtn').addEventListener('click',calc);

document.getElementById('techSelect').addEventListener('change', function() {
  filterTransistors();
  document.getElementById('transistorSelect').value = '';
  showTransistorInfo('');
});

document.getElementById('maxVoltage').addEventListener('input', filterTransistors);
document.getElementById('maxCurrent').addEventListener('input', filterTransistors);

document.getElementById('transistorSelect').addEventListener('change', function() {
  showTransistorInfo(this.value);
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  document.getElementById('techSelect').value="SiC";
  document.getElementById('maxVoltage').value=650;
  document.getElementById('maxCurrent').value=30;
  document.getElementById('vdc').value=400;
  document.getElementById('iLoad').value=30;
  document.getElementById('fsw').value=100;
  document.getElementById('temp').value=25;
  document.getElementById('duty').value=0.5;
  filterTransistors();
  document.getElementById('transistorSelect').value = '';
  showTransistorInfo('');
});

// стартирай при зареждане
document.addEventListener('DOMContentLoaded', function() {
  filterTransistors();
});
