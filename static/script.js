// Мултиезична поддръжка
const LANGUAGES = {
  bg: {
    mainTitle: 'Калкулатор: Si / SiC / GaN Транзистори',
    subtitle: 'Сравни загуби, ефективност и научи защо има разлики.',
    inputParams: 'Въведи параметри',
    technology: 'Технология',
    maxVoltage: 'Макс. напрежение (V)',
    maxCurrent: 'Макс. ток (A)',
    concreteModel: 'Конкретен модел',
    selectTransistor: 'Избери транзистор...',
    calculate: 'Изчисли',
    suggestOptimal: 'Предложи оптимални параметри',
    reset: 'Възстанови стойности',
    transistorInfo: 'Информация за транзистора',
    results: 'Резултати',
    // други преводи...
  },
  en: {
    mainTitle: 'Calculator: Si / SiC / GaN Transistors',
    subtitle: 'Compare losses, efficiency and learn why differences exist.',
    inputParams: 'Input Parameters',
    technology: 'Technology',
    maxVoltage: 'Max. Voltage (V)',
    maxCurrent: 'Max. Current (A)',
    concreteModel: 'Specific Model',
    selectTransistor: 'Select transistor...',
    calculate: 'Calculate',
    suggestOptimal: 'Suggest Optimal Parameters',
    reset: 'Reset Values',
    transistorInfo: 'Transistor Information',
    results: 'Results',
    // други преводи...
  }
};

let currentLang = 'bg';

// Разширена база данни с реални транзистори и техните характеристики
const TRANSISTOR_DB = {
  Si: {
    // Ниско напрежение Si MOSFETs (12V-100V)
    "IRF540N": {
      name: "IRF540N (Si MOSFET)",
      vds_max: 100, id_max: 33, rds_mohm: 44, tr_ns: 23, tf_ns: 17,
      alpha: 0.0065, package: "TO-220", manufacturer: "Infineon",
      application: "Общо предназначение, DC-DC конвертори"
    },
    "IRFZ44N": {
      name: "IRFZ44N (Si MOSFET)",
      vds_max: 55, id_max: 49, rds_mohm: 17.5, tr_ns: 23, tf_ns: 16,
      alpha: 0.0065, package: "TO-220", manufacturer: "Infineon",
      application: "Ниско напрежение, високо ефективност"
    },
    "STB80NF55": {
      name: "STB80NF55 (Si MOSFET)",
      vds_max: 55, id_max: 80, rds_mohm: 6.5, tr_ns: 27, tf_ns: 19,
      alpha: 0.006, package: "D2PAK", manufacturer: "STMicroelectronics",
      application: "Автомобилни приложения, синхронни конвертори"
    },
    "IRF3205": {
      name: "IRF3205 (Si MOSFET)",
      vds_max: 55, id_max: 110, rds_mohm: 8, tr_ns: 12, tf_ns: 50,
      alpha: 0.0065, package: "TO-220", manufacturer: "Infineon",
      application: "Високо ток приложения, синхронни rectifiers"
    },
    "IRLB4132": {
      name: "IRLB4132 (Si MOSFET)",
      vds_max: 100, id_max: 30, rds_mohm: 10, tr_ns: 24, tf_ns: 12,
      alpha: 0.0060, package: "TO-220AB", manufacturer: "Infineon",
      application: "Logic level gate drive, DC-DC"
    },
    
    // Средно напрежение Si MOSFETs (200V-600V)
    "IRF840": {
      name: "IRF840 (Si MOSFET)",
      vds_max: 500, id_max: 8, rds_mohm: 850, tr_ns: 90, tf_ns: 170,
      alpha: 0.007, package: "TO-220", manufacturer: "Infineon",
      application: "Switching режими, инвертори"
    },
    "IXFH26N50P": {
      name: "IXFH26N50P (Si MOSFET)", 
      vds_max: 500, id_max: 26, rds_mohm: 140, tr_ns: 65, tf_ns: 85,
      alpha: 0.007, package: "TO-247", manufacturer: "IXYS",
      application: "Среден power, индустриални приложения"
    },
    "STW57N65M5": {
      name: "STW57N65M5 (Si MOSFET)",
      vds_max: 650, id_max: 57, rds_mohm: 65, tr_ns: 120, tf_ns: 95,
      alpha: 0.0075, package: "TO-247", manufacturer: "STMicroelectronics",
      application: "PFC, резонансни конвертори"
    },
    "IPW60R070C6": {
      name: "IPW60R070C6 (Si MOSFET)",
      vds_max: 600, id_max: 39, rds_mohm: 70, tr_ns: 38, tf_ns: 25,
      alpha: 0.0070, package: "TO-247", manufacturer: "Infineon",
      application: "PFC, hard switching"
    },
    "FCP190N60E": {
      name: "FCP190N60E (Si MOSFET)",
      vds_max: 600, id_max: 19, rds_mohm: 190, tr_ns: 45, tf_ns: 60,
      alpha: 0.0075, package: "TO-220", manufacturer: "Fairchild",
      application: "SMPS, UPS systems"
    },
    
    // Високо напрежение Si MOSFETs и IGBTs (600V+)
    "2SK4017": {
      name: "2SK4017 (Si MOSFET)",
      vds_max: 900, id_max: 7, rds_mohm: 1600, tr_ns: 150, tf_ns: 200,
      alpha: 0.008, package: "TO-3P", manufacturer: "Toshiba",
      application: "Високо напрежение, малък ток"
    },
    "IGW60T120": {
      name: "IGW60T120 (Si IGBT)",
      vds_max: 1200, id_max: 60, rds_mohm: 28, tr_ns: 170, tf_ns: 340,
      alpha: 0.005, package: "TO-247", manufacturer: "Infineon",
      application: "Мотор контрол, UPS, инвертори"
    },
    "FGH40N60SFD": {
      name: "FGH40N60SFD (Si IGBT)",
      vds_max: 600, id_max: 40, rds_mohm: 45, tr_ns: 85, tf_ns: 200,
      alpha: 0.0045, package: "TO-247", manufacturer: "Fairchild",
      application: "Индукционно отопление, UPS"
    },
    "STGW40H65FB": {
      name: "STGW40H65FB (Si IGBT)",
      vds_max: 650, id_max: 40, rds_mohm: 40, tr_ns: 55, tf_ns: 180,
      alpha: 0.0048, package: "TO-247", manufacturer: "STMicroelectronics",
      application: "Фотоволтаици, мотор драйвери"
    },
    "IRGP50B60PD1": {
      name: "IRGP50B60PD1 (Si IGBT)",
      vds_max: 600, id_max: 75, rds_mohm: 34, tr_ns: 80, tf_ns: 200,
      alpha: 0.0050, package: "TO-247AC", manufacturer: "Infineon",
      application: "Инвертори, welding equipment"
    }
  },
  
  SiC: {
    // 650V SiC MOSFETs
    "C2M0160120D": {
      name: "C2M0160120D (SiC MOSFET)",
      vds_max: 1200, id_max: 19, rds_mohm: 160, tr_ns: 18, tf_ns: 35,
      alpha: 0.002, package: "TO-247-3", manufacturer: "Wolfspeed",
      application: "PFC, LLC резонансни конвертори"
    },
    "SCT3030AL": {
      name: "SCT3030AL (SiC MOSFET)",
      vds_max: 650, id_max: 45, rds_mohm: 30, tr_ns: 18, tf_ns: 12,
      alpha: 0.0025, package: "TO-247-4", manufacturer: "ROHM",
      application: "Бързо превключване, висока ефективност"
    },
    "C3M0065090D": {
      name: "C3M0065090D (SiC MOSFET)",
      vds_max: 900, id_max: 36, rds_mohm: 65, tr_ns: 12, tf_ns: 24,
      alpha: 0.002, package: "TO-247-4", manufacturer: "Wolfspeed",
      application: "Електрически превозни средства"
    },
    "UF3C065030K4S": {
      name: "UF3C065030K4S (SiC MOSFET)",
      vds_max: 650, id_max: 60, rds_mohm: 30, tr_ns: 10, tf_ns: 8,
      alpha: 0.0018, package: "TO-247-4", manufacturer: "UnitedSiC",
      application: "Бързи DC-DC конвертори"
    },
    
    // 1200V SiC MOSFETs
    "C2M0080120D": {
      name: "C2M0080120D (SiC MOSFET)",
      vds_max: 1200, id_max: 36, rds_mohm: 80, tr_ns: 13, tf_ns: 24,
      alpha: 0.002, package: "TO-247-3", manufacturer: "Wolfspeed",
      application: "Соларни инвертори, три-фазни мотори"
    },
    "AIMW120R060M1": {
      name: "AIMW120R060M1 (SiC MOSFET)",
      vds_max: 1200, id_max: 31, rds_mohm: 60, tr_ns: 15, tf_ns: 20,
      alpha: 0.002, package: "TO-247-4", manufacturer: "Infineon",
      application: "Индустриални драйвери, UPS"
    },
    "SCT2080KE": {
      name: "SCT2080KE (SiC MOSFET)",
      vds_max: 1200, id_max: 37, rds_mohm: 80, tr_ns: 20, tf_ns: 16,
      alpha: 0.0022, package: "TO-247", manufacturer: "ROHM",
      application: "Високотемпературни приложения"
    },
    
    // 1700V SiC MOSFETs
    "C2M0025170D": {
      name: "C2M0025170D (SiC MOSFET)",
      vds_max: 1700, id_max: 60, rds_mohm: 25, tr_ns: 25, tf_ns: 45,
      alpha: 0.0015, package: "TO-247-4", manufacturer: "Wolfspeed",
      application: "Високоволтови преобразуватели"
    }
  },
  
  GaN: {
    // Ниско напрежение GaN HEMTs (80V-200V)
    "EPC2001C": {
      name: "EPC2001C (GaN HEMT)",
      vds_max: 100, id_max: 13, rds_mohm: 14, tr_ns: 1.4, tf_ns: 3.5,
      alpha: 0.004, package: "LGA", manufacturer: "EPC",
      application: "DC-DC POL, високочестотни конвертори"
    },
    "EPC2010C": {
      name: "EPC2010C (GaN HEMT)",
      vds_max: 200, id_max: 12, rds_mohm: 35, tr_ns: 2.1, tf_ns: 1.9,
      alpha: 0.0035, package: "LGA", manufacturer: "EPC",
      application: "48V системи, телекомуникации"
    },
    "GS61008T": {
      name: "GS61008T (GaN HEMT)",
      vds_max: 100, id_max: 90, rds_mohm: 8, tr_ns: 3.2, tf_ns: 2.1,
      alpha: 0.003, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Синхронни конвертори, зарядни"
    },
    "EPC2007C": {
      name: "EPC2007C (GaN HEMT)",
      vds_max: 100, id_max: 18, rds_mohm: 16, tr_ns: 2.6, tf_ns: 1.4,
      alpha: 0.0038, package: "LGA", manufacturer: "EPC",
      application: "Point of load, високочестотни DC-DC"
    },
    "EPC2015C": {
      name: "EPC2015C (GaN HEMT)",
      vds_max: 200, id_max: 16, rds_mohm: 25, tr_ns: 1.8, tf_ns: 2.2,
      alpha: 0.0032, package: "LGA", manufacturer: "EPC",
      application: "48V-12V конвертори, телеком"
    },
    "GS61004B": {
      name: "GS61004B (GaN HEMT)",
      vds_max: 100, id_max: 4, rds_mohm: 25, tr_ns: 2.1, tf_ns: 1.8,
      alpha: 0.0035, package: "GaN PX", manufacturer: "GaN Systems",
      application: "USB-C PD, безжични зарядни"
    },
    "EPC8009": {
      name: "EPC8009 (GaN HEMT)",
      vds_max: 100, id_max: 1.6, rds_mohm: 300, tr_ns: 0.9, tf_ns: 0.7,
      alpha: 0.004, package: "WLB", manufacturer: "EPC",
      application: "Envelope tracking, RF applications"
    },
    "EPC2040": {
      name: "EPC2040 (GaN HEMT)",
      vds_max: 200, id_max: 6, rds_mohm: 75, tr_ns: 2.3, tf_ns: 1.5,
      alpha: 0.0033, package: "LGA", manufacturer: "EPC",
      application: "48V системи, LED драйвери"
    },
    "GS61202B": {
      name: "GS61202B (GaN HEMT)",
      vds_max: 200, id_max: 2, rds_mohm: 110, tr_ns: 1.5, tf_ns: 1.2,
      alpha: 0.0030, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Малки адаптери, USB-C PD"
    },
    
    // Средно напрежение GaN HEMTs (400V-650V)
    "GS66516T": {
      name: "GS66516T (GaN HEMT)",
      vds_max: 650, id_max: 30, rds_mohm: 16, tr_ns: 8.5, tf_ns: 2.7,
      alpha: 0.003, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Фотоволтаични инвертори"
    },
    "TPH3212PS": {
      name: "TPH3212PS (GaN HEMT)",
      vds_max: 650, id_max: 18, rds_mohm: 35, tr_ns: 5.2, tf_ns: 7.8,
      alpha: 0.0025, package: "PQFN", manufacturer: "Transphorm",
      application: "PFC, LLC конвертори"
    },
    "IGN04N65F5": {
      name: "IGN04N65F5 (GaN HEMT)",
      vds_max: 650, id_max: 4, rds_mohm: 150, tr_ns: 3.5, tf_ns: 4.2,
      alpha: 0.003, package: "TO-263", manufacturer: "Infineon",
      application: "Малки зарядни устройства"
    },
    "EPC2206": {
      name: "EPC2206 (GaN HEMT)",
      vds_max: 400, id_max: 4.5, rds_mohm: 290, tr_ns: 1.7, tf_ns: 1.4,
      alpha: 0.0035, package: "LGA", manufacturer: "EPC",
      application: "Безжично зареждане, LiDAR"
    },
    "GS66508T": {
      name: "GS66508T (GaN HEMT)",
      vds_max: 650, id_max: 15, rds_mohm: 50, tr_ns: 4.2, tf_ns: 3.1,
      alpha: 0.0028, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Компактни адаптери"
    },
    "TPH3205WS": {
      name: "TPH3205WS (GaN HEMT)",
      vds_max: 650, id_max: 36, rds_mohm: 25, tr_ns: 12, tf_ns: 5.5,
      alpha: 0.0025, package: "TO-247", manufacturer: "Transphorm",
      application: "Фотоволтаични инвертори, мотор драйвери"
    },
    "EPC2059": {
      name: "EPC2059 (GaN HEMT)",
      vds_max: 600, id_max: 16, rds_mohm: 65, tr_ns: 3.2, tf_ns: 2.8,
      alpha: 0.0032, package: "LGA", manufacturer: "EPC",
      application: "Automotive onboard chargers"
    },
    "GS66504B": {
      name: "GS66504B (GaN HEMT)",
      vds_max: 650, id_max: 7.5, rds_mohm: 67, tr_ns: 6.5, tf_ns: 2.8,
      alpha: 0.0028, package: "GaN PX", manufacturer: "GaN Systems",
      application: "AC-DC адаптери, зарядни станции"
    },
    "TPH3206LD": {
      name: "TPH3206LD (GaN HEMT)",
      vds_max: 650, id_max: 43, rds_mohm: 21, tr_ns: 14, tf_ns: 6.2,
      alpha: 0.0022, package: "TO-220", manufacturer: "Transphorm",
      application: "Industrial motor drives"
    },
    "EPC2302": {
      name: "EPC2302 (GaN HEMT)",
      vds_max: 400, id_max: 15, rds_mohm: 45, tr_ns: 2.8, tf_ns: 1.9,
      alpha: 0.0030, package: "LGA", manufacturer: "EPC",
      application: "Server power supplies"
    },
    "GS66511T": {
      name: "GS66511T (GaN HEMT)",
      vds_max: 650, id_max: 22, rds_mohm: 25, tr_ns: 7.2, tf_ns: 3.5,
      alpha: 0.0026, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Automotive applications"
    },
    "TPH3002PS": {
      name: "TPH3002PS (GaN HEMT)",
      vds_max: 650, id_max: 8.5, rds_mohm: 90, tr_ns: 8.5, tf_ns: 4.2,
      alpha: 0.0030, package: "PQFN", manufacturer: "Transphorm",
      application: "Малки мощности AC-DC"
    },
    "EPC2218": {
      name: "EPC2218 (GaN HEMT)",
      vds_max: 600, id_max: 9, rds_mohm: 110, tr_ns: 4.1, tf_ns: 2.5,
      alpha: 0.0035, package: "LGA", manufacturer: "EPC",
      application: "Industrial power supplies"
    },
    "GS66502B": {
      name: "GS66502B (GaN HEMT)",
      vds_max: 650, id_max: 3.5, rds_mohm: 150, tr_ns: 5.8, tf_ns: 2.1,
      alpha: 0.0032, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Compact chargers, LED drivers"
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
  document.getElementById('application').textContent = transistor.application;
  
  // Генерираме предложения за параметри
  generateParameterSuggestions(transistor);
  
  document.getElementById('transistorInfo').style.display = 'block';
}

// Функция за генериране на предложения за параметри
function generateParameterSuggestions(transistor) {
  const suggestionsDiv = document.getElementById('parameterSuggestions');
  let suggestions = '';
  
  // Предложения за напрежение
  const safeVoltage = Math.floor(transistor.vds_max * 0.6); // 60% от максималното
  suggestions += `<div class="parameter-suggestion">
    <strong>Препоръчано VDC:</strong> До ${safeVoltage}V за безопасна работа (60% от VDS_max)
  </div>`;
  
  // Предложения за ток
  const safeCurrent = Math.floor(transistor.id_max * 0.7); // 70% от максималния
  suggestions += `<div class="parameter-suggestion">
    <strong>Препоръчан ток:</strong> До ${safeCurrent}A с добро охлаждане (70% от ID_max)
  </div>`;
  
  // Предложения за честота според технологията
  let freqRange = '';
  if (transistor.name.includes('Si')) {
    freqRange = '10-50 kHz за оптимална ефективност';
  } else if (transistor.name.includes('SiC')) {
    freqRange = '50-200 kHz за висока ефективност';
  } else if (transistor.name.includes('GaN')) {
    freqRange = '100 kHz - 1 MHz за максимална power density';
  }
  
  suggestions += `<div class="parameter-suggestion">
    <strong>Препоръчана честота:</strong> ${freqRange}
  </div>`;
  
  // Предложения за температура
  suggestions += `<div class="parameter-suggestion">
    <strong>Работна температура:</strong> 25°C (стайна), 100°C (типична работна), 150°C (максимална)
  </div>`;
  
  suggestionsDiv.innerHTML = suggestions;
}

// Функция за автоматично предлагане на подходящи параметри
function suggestOptimalParameters() {
  if (!selectedTransistor) return;
  
  const safeVoltage = Math.floor(selectedTransistor.vds_max * 0.6);
  const safeCurrent = Math.floor(selectedTransistor.id_max * 0.7);
  
  document.getElementById('vdc').value = safeVoltage;
  document.getElementById('iLoad').value = safeCurrent;
  
  // Предложи честота според технологията
  if (selectedTransistor.name.includes('Si')) {
    document.getElementById('fsw').value = 20;
  } else if (selectedTransistor.name.includes('SiC')) {
    document.getElementById('fsw').value = 100;
  } else if (selectedTransistor.name.includes('GaN')) {
    document.getElementById('fsw').value = 300;
  }
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
  
  let warnings = [];
  let recommendations = [];
  
  // Детайлни проверки и препоръки
  const safetyMarginV = Vdc / selectedTransistor.vds_max;
  const safetyMarginI = I / selectedTransistor.id_max;
  
  if (safetyMarginV > 0.8) {
    warnings.push(`⚠️ Напрежението е ${(safetyMarginV*100).toFixed(0)}% от максималното. Препоръчва се под 80% за безопасност.`);
  } else if (safetyMarginV > 0.6) {
    recommendations.push(`💡 Напрежението е ${(safetyMarginV*100).toFixed(0)}% от максималното - добър марж за безопасност.`);
  }
  
  if (safetyMarginI > 0.8) {
    warnings.push(`⚠️ Токът е ${(safetyMarginI*100).toFixed(0)}% от максималния. Необходимо е отлично охлаждане!`);
  }
  
  // Препоръки за честота
  let optimalFreqRange = '';
  if (selectedTransistor.name.includes('Si')) {
    optimalFreqRange = '10-50 kHz';
    if (fsw/1000 > 50) recommendations.push(`💡 За Si транзистори се препоръчва честота ${optimalFreqRange}.`);
  } else if (selectedTransistor.name.includes('SiC')) {
    optimalFreqRange = '50-200 kHz';
    if (fsw/1000 < 50 || fsw/1000 > 200) recommendations.push(`💡 За SiC транзистори се препоръчва честота ${optimalFreqRange}.`);
  } else if (selectedTransistor.name.includes('GaN')) {
    optimalFreqRange = '100 kHz - 1 MHz';
    if (fsw/1000 < 100) recommendations.push(`💡 За GaN транзистори се препоръчва честота ${optimalFreqRange} за максимална ефективност.`);
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
  
  // Анализ на загубите
  const condRatio = pCond / pTotal * 100;
  const swRatio = pSw / pTotal * 100;
  
  if (condRatio > 70) {
    recommendations.push(`💡 Загубите от проводимост са ${condRatio.toFixed(0)}%. За намаляване: използвайте транзистор с по-ниско RDS(on) или намалете тока.`);
  }
  
  if (swRatio > 70) {
    recommendations.push(`💡 Загубите от превключване са ${swRatio.toFixed(0)}%. За намаляване: използвайте SiC/GaN транзистор или намалете честотата.`);
  }

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
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const percentage = ((context.parsed / pTotal) * 100).toFixed(1);
              return `${context.label}: ${context.parsed.toFixed(2)}W (${percentage}%)`;
            }
          }
        }
      }
    }
  });

  // Показваме предупреждения и препоръки
  let warningsHtml = '';
  if (warnings.length > 0) {
    warningsHtml = `<div class="warning-box">${warnings.join('<br>')}</div>`;
  }
  
  let recommendationsHtml = '';
  if (recommendations.length > 0) {
    recommendationsHtml = `<div class="parameter-suggestion">${recommendations.join('<br>')}</div>`;
  }

  document.getElementById('explainText').innerHTML=`
  <p><b>Използван транзистор:</b> ${selectedTransistor.name}</p>
  <p><b>Приложение:</b> ${selectedTransistor.application}</p>
  ${warningsHtml}
  ${recommendationsHtml}
  <p><b>Анализ на загубите:</b></p>
  <ul>
    <li>Conduction losses: ${condRatio.toFixed(1)}% от общите загуби</li>
    <li>Switching losses: ${swRatio.toFixed(1)}% от общите загуби</li>
    <li>Общ КПД: ${eff.toFixed(2)}%</li>
  </ul>
  <p><b>Формули:</b></p>
  <ul>
    <li>P<sub>cond</sub>=I²·R<sub>DS(on)</sub>·D = ${I}²·${rds.toFixed(4)}·${D} = ${pCond.toFixed(2)} W</li>
    <li>P<sub>sw</sub>=0.5·V<sub>DC</sub>·I·(t<sub>r</sub>+t<sub>f</sub>)·f<sub>sw</sub>·2 = ${pSw.toFixed(2)} W</li>
    <li>R(T)=R<sub>ref</sub>·(1+α·(T-25)) = ${rds0.toFixed(4)}·(1+${selectedTransistor.alpha}·(${T}-25)) = ${rds.toFixed(4)} Ω</li>
  </ul>
  <p><b>Сравнение на технологиите:</b></p>
  <p><u>Si:</u> Ниска цена, добра за ниски честоти (10-50kHz), по-високи загуби при висока температура.</p>
  <p><u>SiC:</u> По-висока цена, отлична за средни честоти (50-200kHz), висока температурна стабилност, ниски загуби.</p>
  <p><u>GaN:</u> Най-висока цена, най-добра за високи честоти (100kHz+), най-ниски загуби, но ограничения при много високи напрежения.</p>`;
}

// Функция за превключване на език
function switchLanguage(lang) {
  currentLang = lang;
  
  // Обновяваме активния бутон
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang' + lang.toUpperCase()).classList.add('active');
  
  // Обновяваме текстовете
  const langData = LANGUAGES[lang];
  if (langData) {
    document.getElementById('mainTitle').textContent = langData.mainTitle;
    document.getElementById('subtitle').textContent = langData.subtitle;
    // Добавяме повече преводи тук според нуждата
  }
}

// Event listeners
document.getElementById('calcBtn').addEventListener('click',calc);

document.getElementById('techSelect').addEventListener('change', function() {
  filterTransistors();
  document.getElementById('transistorSelect').value = '';
  showTransistorInfo('');
  document.getElementById('suggestBtn').disabled = true;
});

document.getElementById('maxVoltage').addEventListener('input', filterTransistors);
document.getElementById('maxCurrent').addEventListener('input', filterTransistors);

document.getElementById('transistorSelect').addEventListener('change', function() {
  showTransistorInfo(this.value);
  document.getElementById('suggestBtn').disabled = !this.value;
});

document.getElementById('suggestBtn').addEventListener('click', function() {
  suggestOptimalParameters();
  alert('Предложени са оптимални параметри според избрания транзистор!');
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
  // Проверяваме дали всички нужни елементи съществуват
  const requiredElements = ['techSelect', 'maxVoltage', 'maxCurrent', 'transistorSelect', 'suggestBtn', 'calcBtn', 'resetBtn', 'langBG', 'langEN'];
  
  for (const elementId of requiredElements) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found!`);
      return;
    }
  }
  
  filterTransistors();
  
  // Първоначално disable на suggest бутона
  document.getElementById('suggestBtn').disabled = true;
  
  // Event listeners за език
  document.getElementById('langBG').addEventListener('click', () => switchLanguage('bg'));
  document.getElementById('langEN').addEventListener('click', () => switchLanguage('en'));
  
  // Задаваме първоначален език
  switchLanguage('bg');
});
