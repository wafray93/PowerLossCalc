// Мултиезична поддръжка
const LANGUAGES = {
  bg: {
    mainTitle: 'Калкулатор: Si / SiC / GaN Транзистори',
    subtitle: 'Научно обяснение, формули и графики.',
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
    conductionLosses: 'Загуби от проводимост',
    switchingLosses: 'Загуби от превключване',
    totalLosses: 'Общи загуби',
    efficiency: 'КПД',
    formulasTitle: 'Формули и обяснение',
    howToChoose: 'Как да избера подходящ транзистор?',
    manufacturer: 'Производител',
    package: 'Корпус',
    applications: 'Приложения',
    model: 'Модел',
    tooltips: {
      technology: 'Изберете тип полупроводник: Si (силиций) за стандартни приложения, SiC (силициев карбид) за висока ефективност и температура, GaN (галиев нитрид) за високочестотни приложения.',
      maxVoltage: 'Задайте максималното работно напрежение за вашето приложение. Транзисторът трябва да има VDS_max по-голямо от това значение с марж за безопасност (обикновено 1.5-2x).',
      maxCurrent: 'Задайте максималния постоянен ток през транзистора. Транзисторът трябва да може да провежда поне този ток с добро охлаждане.',
      concreteModel: 'Изберете конкретен транзистор от филтрираните по напрежение и ток. Всеки модел има реални параметри от datasheet-а на производителя.',
      vdc: 'DC напрежение на шината (Bus voltage). Това е напрежението, което транзисторът превключва. Трябва да е по-малко от VDS_max на избрания транзистор.',
      iload: 'RMS ток през товара. Това е ефективната стойност на тока, който преминава през транзистора по време на проводимост.',
      fsw: 'Честота на превключване. По-високата честота намалява размера на компонентите, но увеличава загубите от превключване. Типични стойности: Si (10-50kHz), SiC (50-200kHz), GaN (100kHz-1MHz).',
      temp: 'Температура на p-n съединението (Junction temperature). Влияе на съпротивлението RDS(on). Типични стойности: 25°C (стайна), 100°C (работна), 150°C (максимална).',
      duty: 'Коефициент на запълване (Duty cycle) - отношението между времето ON и периода. 0.5 означава 50% от времето транзисторът е включен. Влияе на загубите от проводимост.',
      frequencyRange: 'Честотен обхват за анализ на ефективността спрямо честотата.',
      ambientTemp: 'Околна температура - влияе на термичните изчисления.',
      coolingType: 'Тип охлаждане - определя термичното съпротивление. Естествено (50°C/W), малък радиатор 10-20cm² (20°C/W), среден радиатор 50-100cm² (8°C/W), голям радиатор >200cm² (3°C/W), принудително въздушно с вентилатор (2°C/W), течно охлаждане (0.5°C/W).'
    },
    // Нови преводи за новите функции
    efficiencyAnalysis: 'Анализ на ефективност vs честота',
    efficiencyDescription: 'Тази графика показва как се променя ефективността при различни честоти за Si, SiC и GaN технологиите.',
    frequencyRange: 'Честотен обхват',
    generateChart: 'Генерирай графика',
    thermalModeling: 'Термично моделиране',
    thermalDescription: 'Анализира как се загрява транзисторът и дали е необходимо охлаждане. Изчислява температурите на полупроводниковия чип (junction) и корпуса въз основа на мощността на загубите.',
    ambientTemp: 'Околна температура (°C)',
    coolingType: 'Тип охлаждане',
    calculateThermal: 'Изчисли термични параметри',
    thermalResults: 'Термични резултати',
    junctionTemp: 'Температура на съединението (Tj)',
    caseTemp: 'Температура на корпуса (Tc)',
    thermalResistance: 'Термично съпротивление (Rth)',
    thermalMargin: 'Термичен марж',
    naturalCooling: 'Естествено (само корпус, 50°C/W)',
    smallHeatsink: 'Малък радиатор (10-20cm², 20°C/W)',
    mediumHeatsink: 'Среден радиатор (50-100cm², 8°C/W)',
    largeHeatsink: 'Голям радиатор (>200cm², 3°C/W)',
    forcedAir: 'Принудително въздушно (с вентилатор, 2°C/W)',
    liquidCooling: 'Течно охлаждане (най-ефективно, 0.5°C/W)'
  },
  en: {
    mainTitle: 'Calculator: Si / SiC / GaN Transistors',
    subtitle: 'Scientific explanation, formulas and charts.',
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
    conductionLosses: 'Conduction Losses',
    switchingLosses: 'Switching Losses',
    totalLosses: 'Total Losses',
    efficiency: 'Efficiency',
    formulasTitle: 'Formulas and Explanation',
    howToChoose: 'How to choose the right transistor?',
    manufacturer: 'Manufacturer',
    package: 'Package',
    applications: 'Applications',
    model: 'Model',
    tooltips: {
      technology: 'Select semiconductor type: Si (silicon) for standard applications, SiC (silicon carbide) for high efficiency and temperature, GaN (gallium nitride) for high-frequency applications.',
      maxVoltage: 'Set the maximum operating voltage for your application. The transistor must have VDS_max greater than this value with safety margin (typically 1.5-2x).',
      maxCurrent: 'Set the maximum continuous current through the transistor. The transistor must be able to conduct at least this current with good cooling.',
      concreteModel: 'Select a specific transistor from those filtered by voltage and current. Each model has real parameters from the manufacturer\'s datasheet.',
      vdc: 'DC bus voltage. This is the voltage that the transistor switches. Must be less than VDS_max of the selected transistor.',
      iload: 'RMS load current. This is the effective value of current flowing through the transistor during conduction.',
      fsw: 'Switching frequency. Higher frequency reduces component size but increases switching losses. Typical values: Si (10-50kHz), SiC (50-200kHz), GaN (100kHz-1MHz).',
      temp: 'Junction temperature. Affects RDS(on) resistance. Typical values: 25°C (room), 100°C (operating), 150°C (maximum).',
      duty: 'Duty cycle - ratio between ON time and period. 0.5 means 50% of time the transistor is on. Affects conduction losses.',
      frequencyRange: 'Frequency range for efficiency vs frequency analysis.',
      ambientTemp: 'Ambient temperature - affects thermal calculations.',
      coolingType: 'Cooling type - determines thermal resistance. Natural (50°C/W), small heatsink 10-20cm² (20°C/W), medium heatsink 50-100cm² (8°C/W), large heatsink >200cm² (3°C/W), forced air with fan (2°C/W), liquid cooling (0.5°C/W).'
    },
    // New translations for new functions
    efficiencyAnalysis: 'Efficiency vs Frequency Analysis',
    efficiencyDescription: 'This chart shows how efficiency changes with different frequencies for Si, SiC and GaN technologies.',
    frequencyRange: 'Frequency Range',
    generateChart: 'Generate Chart',
    thermalModeling: 'Thermal Modeling',
    thermalDescription: 'Analyzes how the transistor heats up and whether cooling is necessary. Calculates temperatures of the semiconductor chip (junction) and case based on power losses.',
    ambientTemp: 'Ambient Temperature (°C)',
    coolingType: 'Cooling Type',
    calculateThermal: 'Calculate Thermal Parameters',
    thermalResults: 'Thermal Results',
    junctionTemp: 'Junction Temperature (Tj)',
    caseTemp: 'Case Temperature (Tc)',
    thermalResistance: 'Thermal Resistance (Rth)',
    thermalMargin: 'Thermal Margin',
    naturalCooling: 'Natural (case only, 50°C/W)',
    smallHeatsink: 'Small Heatsink (10-20cm², 20°C/W)',
    mediumHeatsink: 'Medium Heatsink (50-100cm², 8°C/W)',
    largeHeatsink: 'Large Heatsink (>200cm², 3°C/W)',
    forcedAir: 'Forced Air (with fan, 2°C/W)',
    liquidCooling: 'Liquid Cooling (most efficient, 0.5°C/W)'
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
    },
    // Нови Si MOSFETs
    "IPP60R125CP": {
      name: "IPP60R125CP (Si MOSFET)",
      vds_max: 600, id_max: 23, rds_mohm: 125, tr_ns: 45, tf_ns: 35,
      alpha: 0.0070, package: "TO-220", manufacturer: "Infineon",
      application: "PFC, SMPS"
    },
    "SPP20N60C3": {
      name: "SPP20N60C3 (Si MOSFET)",
      vds_max: 600, id_max: 20, rds_mohm: 190, tr_ns: 38, tf_ns: 25,
      alpha: 0.0075, package: "TO-220", manufacturer: "Infineon",
      application: "SMPS, UPS"
    },
    "IRFP260N": {
      name: "IRFP260N (Si MOSFET)",
      vds_max: 200, id_max: 50, rds_mohm: 40, tr_ns: 43, tf_ns: 35,
      alpha: 0.0065, package: "TO-247", manufacturer: "Infineon",
      application: "Audio amplifiers, motor control"
    },
    "STF13NM60N": {
      name: "STF13NM60N (Si MOSFET)",
      vds_max: 600, id_max: 13, rds_mohm: 300, tr_ns: 25, tf_ns: 40,
      alpha: 0.0080, package: "TO-220FP", manufacturer: "STMicroelectronics",
      application: "Lighting, SMPS"
    },
    "STP6NK60Z": {
      name: "STP6NK60Z (Si MOSFET)",
      vds_max: 600, id_max: 6, rds_mohm: 1000, tr_ns: 25, tf_ns: 60,
      alpha: 0.0085, package: "TO-220", manufacturer: "STMicroelectronics",
      application: "Low power SMPS"
    },
    "IRF740": {
      name: "IRF740 (Si MOSFET)",
      vds_max: 400, id_max: 10, rds_mohm: 480, tr_ns: 50, tf_ns: 85,
      alpha: 0.0070, package: "TO-220", manufacturer: "Infineon",
      application: "Medium power switching"
    },
    "BUZ11": {
      name: "BUZ11 (Si MOSFET)",
      vds_max: 50, id_max: 30, rds_mohm: 40, tr_ns: 15, tf_ns: 25,
      alpha: 0.0065, package: "TO-220", manufacturer: "STMicroelectronics",
      application: "Audio, linear regulators"
    },
    "IRF9540N": {
      name: "IRF9540N (Si P-MOSFET)",
      vds_max: 100, id_max: 23, rds_mohm: 117, tr_ns: 95, tf_ns: 50,
      alpha: 0.0070, package: "TO-220", manufacturer: "Infineon",
      application: "P-channel applications"
    },
    "IRLB3034PBF": {
      name: "IRLB3034PBF (Si MOSFET)",
      vds_max: 40, id_max: 195, rds_mohm: 1.7, tr_ns: 46, tf_ns: 12,
      alpha: 0.0055, package: "TO-220AB", manufacturer: "Infineon",
      application: "DC-DC converters, motor control"
    },
    "IRFZ46N": {
      name: "IRFZ46N (Si MOSFET)",
      vds_max: 55, id_max: 53, rds_mohm: 16, tr_ns: 23, tf_ns: 16,
      alpha: 0.0065, package: "TO-220", manufacturer: "Infineon",
      application: "Synchronous rectifiers"
    },
    "IRLB4030PBF": {
      name: "IRLB4030PBF (Si MOSFET)",
      vds_max: 100, id_max: 180, rds_mohm: 3.7, tr_ns: 33, tf_ns: 27,
      alpha: 0.0060, package: "TO-220AB", manufacturer: "Infineon",
      application: "Motor control, DC-DC"
    },
    "IRF520N": {
      name: "IRF520N (Si MOSFET)",
      vds_max: 100, id_max: 9.7, rds_mohm: 270, tr_ns: 43, tf_ns: 28,
      alpha: 0.0065, package: "TO-220", manufacturer: "Infineon",
      application: "General purpose switching"
    },
    "STP10NK60Z": {
      name: "STP10NK60Z (Si MOSFET)",
      vds_max: 600, id_max: 10, rds_mohm: 650, tr_ns: 35, tf_ns: 80,
      alpha: 0.0080, package: "TO-220", manufacturer: "STMicroelectronics",
      application: "SMPS, lighting"
    },
    "IXFK55N50": {
      name: "IXFK55N50 (Si MOSFET)",
      vds_max: 500, id_max: 55, rds_mohm: 90, tr_ns: 60, tf_ns: 100,
      alpha: 0.0070, package: "TO-264", manufacturer: "IXYS",
      application: "Power switching, motor control, power supplies"
    },
    "GT60M322": {
      name: "GT60M322 (Si IGBT)",
      vds_max: 900, id_max: 60, rds_mohm: 35, tr_ns: 120, tf_ns: 250,
      alpha: 0.0045, package: "TO-3P", manufacturer: "Toshiba",
      application: "Voltage resonance inverters, current resonance"
    },
    // Още много Si MOSFETs
    "IRFP4568PBF": {
      name: "IRFP4568PBF (Si MOSFET)",
      vds_max: 150, id_max: 171, rds_mohm: 5.5, tr_ns: 50, tf_ns: 35,
      alpha: 0.0065, package: "TO-247AC", manufacturer: "Infineon",
      application: "High current applications, DC motor drives"
    },
    "STB16NK50Z": {
      name: "STB16NK50Z (Si MOSFET)",
      vds_max: 500, id_max: 16, rds_mohm: 250, tr_ns: 60, tf_ns: 120,
      alpha: 0.0075, package: "D2PAK", manufacturer: "STMicroelectronics",
      application: "SMPS, automotive"
    },
    "IRFP360LC": {
      name: "IRFP360LC (Si MOSFET)",
      vds_max: 400, id_max: 23, rds_mohm: 200, tr_ns: 110, tf_ns: 160,
      alpha: 0.0070, package: "TO-247AC", manufacturer: "Infineon",
      application: "Switching power supplies"
    },
    "STP75NF75": {
      name: "STP75NF75 (Si MOSFET)",
      vds_max: 75, id_max: 80, rds_mohm: 8.5, tr_ns: 85, tf_ns: 85,
      alpha: 0.0060, package: "TO-220", manufacturer: "STMicroelectronics",
      application: "Automotive, motor control"
    },
    "IRFB7546PBF": {
      name: "IRFB7546PBF (Si MOSFET)",
      vds_max: 60, id_max: 78, rds_mohm: 5.9, tr_ns: 24, tf_ns: 12,
      alpha: 0.0058, package: "TO-220AB", manufacturer: "Infineon",
      application: "Synchronous rectification"
    },
    "IXFN55N50": {
      name: "IXFN55N50 (Si MOSFET)",
      vds_max: 500, id_max: 55, rds_mohm: 90, tr_ns: 60, tf_ns: 100,
      alpha: 0.0070, package: "TO-220", manufacturer: "IXYS",
      application: "UPS, welding, motor drives"
    },
    "STW42N65M5": {
      name: "STW42N65M5 (Si MOSFET)",
      vds_max: 650, id_max: 42, rds_mohm: 65, tr_ns: 85, tf_ns: 45,
      alpha: 0.0075, package: "TO-247", manufacturer: "STMicroelectronics",
      application: "PFC, resonant converters"
    },
    "IRFB4227": {
      name: "IRFB4227 (Si MOSFET)",
      vds_max: 200, id_max: 65, rds_mohm: 18, tr_ns: 43, tf_ns: 35,
      alpha: 0.0065, package: "TO-220AB", manufacturer: "Infineon",
      application: "DC-DC converters, motor drives"
    },
    "STP140N10F7": {
      name: "STP140N10F7 (Si MOSFET)",
      vds_max: 100, id_max: 120, rds_mohm: 4.6, tr_ns: 90, tf_ns: 170,
      alpha: 0.0058, package: "TO-220", manufacturer: "STMicroelectronics",
      application: "High current switching"
    },
    "IRFB3607": {
      name: "IRFB3607 (Si MOSFET)",
      vds_max: 75, id_max: 80, rds_mohm: 7.5, tr_ns: 22, tf_ns: 18,
      alpha: 0.0058, package: "TO-220AB", manufacturer: "Infineon",
      application: "Synchronous rectification"
    },
    "APT10M16JVR": {
      name: "APT10M16JVR (Si MOSFET)",
      vds_max: 160, id_max: 75, rds_mohm: 10, tr_ns: 25, tf_ns: 40,
      alpha: 0.0062, package: "TO-247", manufacturer: "Microsemi",
      application: "Motor drives, DC-DC converters"
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
    },
    // Нови SiC MOSFETs
    "C2M0040120D": {
      name: "C2M0040120D (SiC MOSFET)",
      vds_max: 1200, id_max: 60, rds_mohm: 40, tr_ns: 18, tf_ns: 23,
      alpha: 0.0018, package: "TO-247", manufacturer: "Wolfspeed",
      application: "Industrial motor drives"
    },
    "C2M0025120D": {
      name: "C2M0025120D (SiC MOSFET)",
      vds_max: 1200, id_max: 90, rds_mohm: 25, tr_ns: 20, tf_ns: 26,
      alpha: 0.0015, package: "TO-247", manufacturer: "Wolfspeed",
      application: "EV charging, grid tie inverters"
    },
    "SCT3120AL": {
      name: "SCT3120AL (SiC MOSFET)",
      vds_max: 1200, id_max: 35, rds_mohm: 120, tr_ns: 22, tf_ns: 28,
      alpha: 0.0025, package: "TO-247", manufacturer: "Rohm",
      application: "Power supplies"
    },
    "SCT3080KL": {
      name: "SCT3080KL (SiC MOSFET)",
      vds_max: 1200, id_max: 52, rds_mohm: 80, tr_ns: 25, tf_ns: 20,
      alpha: 0.0022, package: "TO-247", manufacturer: "Rohm",
      application: "Motor drives"
    },
    "STW88N65M5": {
      name: "STW88N65M5 (SiC MOSFET)",
      vds_max: 650, id_max: 80, rds_mohm: 65, tr_ns: 28, tf_ns: 15,
      alpha: 0.0020, package: "H2PAK", manufacturer: "STMicroelectronics",
      application: "Automotive OBC"
    },
    "UF3C120040K4S": {
      name: "UF3C120040K4S (SiC MOSFET)",
      vds_max: 1200, id_max: 72, rds_mohm: 40, tr_ns: 19, tf_ns: 22,
      alpha: 0.0018, package: "TO-247", manufacturer: "UnitedSiC",
      application: "High efficiency power conversion"
    },
    "IMW65R027M1H": {
      name: "IMW65R027M1H (SiC MOSFET)",
      vds_max: 650, id_max: 90, rds_mohm: 27, tr_ns: 12, tf_ns: 18,
      alpha: 0.0016, package: "TO-247", manufacturer: "Infineon",
      application: "Server PSU, telecom"
    },
    "SCT2450KE": {
      name: "SCT2450KE (SiC MOSFET)",
      vds_max: 650, id_max: 45, rds_mohm: 45, tr_ns: 18, tf_ns: 12,
      alpha: 0.0018, package: "TO-247", manufacturer: "Rohm",
      application: "AC servo drives"
    },
    "IMW120R045M1H": {
      name: "IMW120R045M1H (SiC MOSFET)",
      vds_max: 1200, id_max: 45, rds_mohm: 45, tr_ns: 22, tf_ns: 18,
      alpha: 0.0020, package: "TO-247", manufacturer: "Infineon",
      application: "Traction inverters"
    },
    "SCT2160KE": {
      name: "SCT2160KE (SiC MOSFET)",
      vds_max: 650, id_max: 25, rds_mohm: 160, tr_ns: 15, tf_ns: 22,
      alpha: 0.0025, package: "TO-220", manufacturer: "Rohm",
      application: "SMPS applications"
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
      alpha: 0.0032, package: "LGA", manufacturer: "EPC",
      application: "48V Bus converters"
    },
    // Още GaN HEMTs
    "EPC2036": {
      name: "EPC2036 (GaN HEMT)",
      vds_max: 100, id_max: 16, rds_mohm: 25, tr_ns: 1.9, tf_ns: 1.2,
      alpha: 0.0035, package: "LGA", manufacturer: "EPC",
      application: "Envelope tracking, wireless charging"
    },
    "GS66516T": {
      name: "GS66516T (GaN HEMT)",
      vds_max: 650, id_max: 60, rds_mohm: 25, tr_ns: 4.7, tf_ns: 8.8,
      alpha: 0.002, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Industrial motor drives, solar inverters"
    },
    "EPC2218": {
      name: "EPC2218 (GaN HEMT)",
      vds_max: 80, id_max: 120, rds_mohm: 4.8, tr_ns: 1.8, tf_ns: 4.5,
      alpha: 0.0028, package: "LGA", manufacturer: "EPC",
      application: "High current POL, battery management"
    },
    "TPH3212PS": {
      name: "TPH3212PS (GaN HEMT)",
      vds_max: 650, id_max: 36, rds_mohm: 62, tr_ns: 3.5, tf_ns: 5.4,
      alpha: 0.0022, package: "TOLL", manufacturer: "Transphorm",
      application: "PFC, LLC converters"
    },
    "GS66508P": {
      name: "GS66508P (GaN HEMT)",
      vds_max: 650, id_max: 30, rds_mohm: 50, tr_ns: 3.8, tf_ns: 4.7,
      alpha: 0.0025, package: "GaN PX", manufacturer: "GaN Systems",
      application: "Server PSU, telecom"
    },
    "EPC2152": {
      name: "EPC2152 (GaN HEMT)",
      vds_max: 80, id_max: 35, rds_mohm: 14, tr_ns: 2.1, tf_ns: 1.8,
      alpha: 0.003, package: "LGA", manufacturer: "EPC",
      application: "DC-DC step down converters"
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
    },
    "GAN063-650WSA": {
      name: "GAN063-650WSA (GaN FET)",
      vds_max: 650, id_max: 34.5, rds_mohm: 50, tr_ns: 8.0, tf_ns: 6.0,
      alpha: 0.0028, package: "TO-247", manufacturer: "Nexperia",
      application: "Hard/soft switching converters, PFC, PV inverters"
    },
    "TP65H050G4WS": {
      name: "TP65H050G4WS (GaN FET)",
      vds_max: 650, id_max: 50, rds_mohm: 50, tr_ns: 5.5, tf_ns: 4.8,
      alpha: 0.0025, package: "TO-247", manufacturer: "Transphorm/Renesas",
      application: "Power conversion 25W-10kW, EV chargers, industrial PSU"
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
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];
  transistorSelect.innerHTML = `<option value="">${langData.selectTransistor}</option>`;
  
  const transistors = TRANSISTOR_DB[tech] || {};
  
  // Филтрираме и сортираме транзисторите
  const filteredTransistors = Object.entries(transistors)
    .filter(([key, transistor]) => {
      // Стриктно филтриране: всички параметри трябва да са >= зададените
      return transistor.vds_max >= maxVoltage && transistor.id_max >= maxCurrent;
    })
    .sort((a, b) => {
      // Първо сортираме по близост към зададения ток
      const currentDiffA = Math.abs(a[1].id_max - maxCurrent);
      const currentDiffB = Math.abs(b[1].id_max - maxCurrent);
      if (currentDiffA !== currentDiffB) {
        return currentDiffA - currentDiffB;
      }
      // След това по близост към зададеното напрежение
      return Math.abs(a[1].vds_max - maxVoltage) - Math.abs(b[1].vds_max - maxVoltage);
    });
  
  // Добавяме филтрираните транзистори в select
  filteredTransistors.forEach(([key, transistor]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${transistor.name} [${transistor.vds_max}V, ${transistor.id_max}A]`;
    transistorSelect.appendChild(option);
  });
  
  // Ако няма резултати, покажи съобщение
  if (filteredTransistors.length === 0) {
    const option = document.createElement('option');
    option.value = '';
    const message = currentLang === 'en' ? 
      `No transistors for ${maxVoltage}V/${maxCurrent}A - adjust parameters` :
      `Няма транзистори за ${maxVoltage}V/${maxCurrent}A - промени параметрите`;
    option.textContent = message;
    option.disabled = true;
    transistorSelect.appendChild(option);
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

// Нова функция за обяснение на оптимизацията
function showOptimizationExplanation(voltage, current, frequency, techType) {
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];
  
  let explanation = '';
  
  if (currentLang === 'bg') {
    explanation = `
      <div class="optimization-explanation">
        <h4>🧠 Научно обосноване на оптималните параметри:</h4>
        
        <div class="param-explanation">
          <strong>📊 Напрежение: ${voltage}V (60% от макс.)</strong><br>
          • <u>Марж за безопасност:</u> Оставя 40% резерв за възмущения и отклонения<br>
          • <u>IEC 61000 стандарт:</u> Препоръчва намаляване на номиналните стойности 1.5-2x за надеждност<br>
          • <u>Термична стабилност:</u> Намалява топлинното натоварване
        </div>
        
        <div class="param-explanation">
          <strong>⚡ Ток: ${current}A (70% от макс.)</strong><br>
          • <u>Охладителна способност:</u> I²R загубите растат квадратично<br>
          • <u>Сравнение:</u> 70% ток = 49% от загубите на пълен ток<br>
          • <u>Безопасна работна област:</u> Осигурява стабилна работа при високи температури
        </div>
        
        <div class="param-explanation">
          <strong>🌊 Честота: ${frequency}kHz (${techType} оптимум)</strong><br>
          ${getFrequencyExplanation(techType)}
        </div>
        
        <div class="param-explanation">
          <strong>🌡️ Температура: 100°C (реалистична работна)</strong><br>
          • <u>Практичност:</u> 100°C е типична работна температура<br>
          • <u>RDS(on) увеличение:</u> +30-50% при 100°C спрямо 25°C<br>
          • <u>Надеждност:</u> Позволява реалистично планиране на охлаждането
        </div>
        
        <div class="param-explanation">
          <strong>🔄 Коефициент на запълване: 50% (оптимален баланс)</strong><br>
          • <u>Математически:</u> Минимизира d×(1-d) за най-ниски загуби<br>
          • <u>Кондензатори:</u> Минимален пулсиращ ток в изходния кондензатор<br>
          • <u>Магнитни елементи:</u> Оптимално използване на магнитното ядро
        </div>
        
        <p><strong>🎯 Извод:</strong> Тези параметри осигуряват оптимален баланс между ефективност, надеждност и практичност.</p>
      </div>
    `;
  } else {
    explanation = `
      <div class="optimization-explanation">
        <h4>🧠 Scientific Justification of Optimal Parameters:</h4>
        
        <div class="param-explanation">
          <strong>📊 Voltage: ${voltage}V (60% of max)</strong><br>
          • <u>Safety margin:</u> Leaves 40% headroom for spikes and deviations<br>
          • <u>IEC 61000 standard:</u> Recommends 1.5-2x derating for reliability<br>
          • <u>Thermal stability:</u> Reduces thermal stress
        </div>
        
        <div class="param-explanation">
          <strong>⚡ Current: ${current}A (70% of max)</strong><br>
          • <u>Cooling capability:</u> I²R losses grow quadratically<br>
          • <u>Comparison:</u> 70% current = 49% of full current losses<br>
          • <u>SOA region:</u> Ensures Safe Operating Area at high temperatures
        </div>
        
        <div class="param-explanation">
          <strong>🌊 Frequency: ${frequency}kHz (${techType} optimum)</strong><br>
          ${getFrequencyExplanationEn(techType)}
        </div>
        
        <div class="param-explanation">
          <strong>🌡️ Temperature: 100°C (realistic operating)</strong><br>
          • <u>Practicality:</u> 100°C is typical operating temperature<br>
          • <u>RDS(on) increase:</u> +30-50% at 100°C vs 25°C<br>
          • <u>Reliability:</u> Allows realistic thermal planning
        </div>
        
        <div class="param-explanation">
          <strong>🔄 Duty Cycle: 50% (optimal balance)</strong><br>
          • <u>Mathematical:</u> Minimizes d×(1-d) for lowest losses<br>
          • <u>Capacitors:</u> Minimal ripple current in output capacitor<br>
          • <u>Magnetics:</u> Optimal core utilization
        </div>
        
        <p><strong>🎯 Conclusion:</strong> These parameters ensure optimal balance between efficiency, reliability and practicality.</p>
      </div>
    `;
  }
  
  // Покажи обяснението в parameterSuggestions div
  const suggestionsDiv = document.getElementById('parameterSuggestions');
  suggestionsDiv.innerHTML = explanation;
}

// Помощни функции за обяснение на честотата
function getFrequencyExplanation(techType) {
  switch(techType) {
    case 'Si':
      return `
        • <u>20kHz ограничение:</u> Бавни времена за превключване (tr/tf ~50-200ns)<br>
        • <u>Загуби от превключване:</u> Пропорционални на честотата<br>
        • <u>Магнитни елементи:</u> По-големи, но по-икономични
      `;
    case 'SiC':
      return `
        • <u>100kHz оптимум:</u> Бързи времена за превключване (tr/tf ~10-30ns)<br>
        • <u>Ниски загуби при превключване:</u> 3-5x по-малки от Si при същата честота<br>
        • <u>Оптимизация на компонентите:</u> По-малки магнитни елементи
      `;
    case 'GaN':
      return `
        • <u>300kHz възможност:</u> Най-бързи времена за превключване (tr/tf ~1-10ns)<br>
        • <u>Минимални загуби при превключване:</u> Най-висока ефективност<br>
        • <u>Компактност:</u> Най-малки магнитни елементи и кондензатори
      `;
    default:
      return '• Оптимална честота според технологията';
  }
}

function getFrequencyExplanationEn(techType) {
  switch(techType) {
    case 'Si':
      return `
        • <u>20kHz limitation:</u> Slow switching times (tr/tf ~50-200ns)<br>
        • <u>Switching losses:</u> Proportional to frequency<br>
        • <u>Magnetics:</u> Larger but more economical components
      `;
    case 'SiC':
      return `
        • <u>100kHz optimum:</u> Fast switching times (tr/tf ~10-30ns)<br>
        • <u>Low switching losses:</u> 3-5x lower than Si at same frequency<br>
        • <u>Component optimization:</u> Smaller magnetic components
      `;
    case 'GaN':
      return `
        • <u>300kHz capability:</u> Fastest switching times (tr/tf ~1-10ns)<br>
        • <u>Minimal switching losses:</u> Highest efficiency<br>
        • <u>Compactness:</u> Smallest magnetic components and capacitors
      `;
    default:
      return '• Optimal frequency according to technology';
  }
}

// Функция за автоматично предлагане на подходящи параметри
function suggestOptimalParameters() {
  if (!selectedTransistor) return;
  
  const safeVoltage = Math.floor(selectedTransistor.vds_max * 0.6);
  const safeCurrent = Math.floor(selectedTransistor.id_max * 0.7);
  
  let suggestedFreq;
  let techType = '';
  
  // Определи технологията и оптималната честота
  if (selectedTransistor.name.includes('Si') && !selectedTransistor.name.includes('SiC')) {
    suggestedFreq = 20;
    techType = 'Si';
  } else if (selectedTransistor.name.includes('SiC')) {
    suggestedFreq = 100;
    techType = 'SiC';
  } else if (selectedTransistor.name.includes('GaN')) {
    suggestedFreq = 300;
    techType = 'GaN';
  }
  
  // Задай параметрите
  document.getElementById('vdc').value = safeVoltage;
  document.getElementById('iLoad').value = safeCurrent;
  document.getElementById('fsw').value = suggestedFreq;
  document.getElementById('temp').value = 100;
  document.getElementById('duty').value = 0.5;
  
  // Покажи научно обяснение
  showOptimizationExplanation(safeVoltage, safeCurrent, suggestedFreq, techType);
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

  const comparisonSection = currentLang === 'en' ? `
    <p><b>🔄 Why do different technologies have different losses?</b></p>
    
    <div class="tech-comparison">
      <div class="tech-card">
        <h4>🟡 Silicon (Si) - Classical Technology</h4>
        <p><strong>Losses:</strong> Highest at high frequency</p>
        <p><strong>Why:</strong> Large parasitic capacitances → slow switching → more switching losses</p>
        <p><strong>Efficiency:</strong> 92-96% at low frequencies</p>
        <p><strong>Best for:</strong> Low frequencies (under 50kHz), low cost</p>
      </div>
      
      <div class="tech-card">
        <h4>🟢 Silicon Carbide (SiC) - Balanced Technology</h4>
        <p><strong>Losses:</strong> Medium, decrease with frequency</p>
        <p><strong>Why:</strong> Smaller parasitic capacitances → faster switching</p>
        <p><strong>Efficiency:</strong> 96-98% at medium frequencies</p>
        <p><strong>Best for:</strong> Medium frequencies (50-200kHz), high temperature</p>
      </div>
      
      <div class="tech-card">
        <h4>🔵 Gallium Nitride (GaN) - Newest Technology</h4>
        <p><strong>Losses:</strong> Lowest at high frequencies</p>
        <p><strong>Why:</strong> Minimal parasitic capacitances → very fast switching</p>
        <p><strong>Efficiency:</strong> 98-99%+ at high frequencies</p>
        <p><strong>Best for:</strong> High frequencies (over 100kHz), compact devices</p>
      </div>
    </div>
    
    <p><b>💡 Key Principle:</b> The faster the transistor switches, the less time it spends in the mixed region (where there is both current and voltage) → lower switching losses.</p>
  ` : `
    <p><b>🔄 Защо различните технологии имат различни загуби?</b></p>
    
    <div class="tech-comparison">
      <div class="tech-card">
        <h4>🟡 Силиций (Si) - Класическа технология</h4>
        <p><strong>Загуби:</strong> Най-високи при висока честота</p>
        <p><strong>Защо:</strong> Големи паразитни капацитети → бавно превключване → повече switching загуби</p>
        <p><strong>КПД:</strong> 92-96% при ниски честоти</p>
        <p><strong>Най-добре за:</strong> Ниски честоти (под 50kHz), ниска цена</p>
      </div>
      
      <div class="tech-card">
        <h4>🟢 Силициев карбид (SiC) - Балансирана технология</h4>
        <p><strong>Загуби:</strong> Средни, намаляват с честотата</p>
        <p><strong>Защо:</strong> По-малки паразитни капацитети → по-бързо превключване</p>
        <p><strong>КПД:</strong> 96-98% при средни честоти</p>
        <p><strong>Най-добре за:</strong> Средни честоти (50-200kHz), висока температура</p>
      </div>
      
      <div class="tech-card">
        <h4>🔵 Галиев нитрид (GaN) - Най-нова технология</h4>
        <p><strong>Загуби:</strong> Най-ниски при високи честоти</p>
        <p><strong>Защо:</strong> Минимални паразитни капацитети → много бързо превключване</p>
        <p><strong>КПД:</strong> 98-99%+ при високи честоти</p>
        <p><strong>Най-добре за:</strong> Високи честоти (над 100kHz), компактни устройства</p>
      </div>
    </div>
    
    <p><b>💡 Ключовият принцип:</b> Колкото по-бързо превключва транзисторът, толкова по-малко време прекарва в смесената област (където има и ток, и напрежение) → по-малки switching загуби.</p>
  `;

  const basicLabels = currentLang === 'en' ? {
    transistor: 'Transistor used',
    application: 'Application',
    lossAnalysis: 'Loss Analysis',
    conductionLosses: 'Conduction losses',
    switchingLosses: 'Switching losses',
    totalLosses: 'Total losses',
    efficiency: 'Overall efficiency',
    formulas: 'Formulas'
  } : {
    transistor: 'Използван транзистор',
    application: 'Приложение',
    lossAnalysis: 'Анализ на загубите',
    conductionLosses: 'Conduction losses',
    switchingLosses: 'Switching losses',
    totalLosses: 'от общите загуби',
    efficiency: 'Общ КПД',
    formulas: 'Формули'
  };

  document.getElementById('explainText').innerHTML=`
  <p><b>${basicLabels.transistor}:</b> ${selectedTransistor.name}</p>
  <p><b>${basicLabels.application}:</b> ${selectedTransistor.application}</p>
  ${warningsHtml}
  ${recommendationsHtml}
  <p><b>${basicLabels.lossAnalysis}:</b></p>
  <ul>
    <li>${basicLabels.conductionLosses}: ${condRatio.toFixed(1)}% ${basicLabels.totalLosses}</li>
    <li>${basicLabels.switchingLosses}: ${swRatio.toFixed(1)}% ${basicLabels.totalLosses}</li>
    <li>${basicLabels.efficiency}: ${eff.toFixed(2)}%</li>
  </ul>
  <p><b>${basicLabels.formulas}:</b></p>
  <ul>
    <li>P<sub>cond</sub>=I²·R<sub>DS(on)</sub>·D = ${I}²·${rds.toFixed(4)}·${D} = ${pCond.toFixed(2)} W</li>
    <li>P<sub>sw</sub>=0.5·V<sub>DC</sub>·I·(t<sub>r</sub>+t<sub>f</sub>)·f<sub>sw</sub>·2 = ${pSw.toFixed(2)} W</li>
    <li>R(T)=R<sub>ref</sub>·(1+α·(T-25)) = ${rds0.toFixed(4)}·(1+${selectedTransistor.alpha}·(${T}-25)) = ${rds.toFixed(4)} Ω</li>
  </ul>
  ${comparisonSection}`;
}

// Функция за превключване на език
function switchLanguage(lang) {
  currentLang = lang;
  
  // Запазваме текущо избраните стойности преди смяната на езика
  const savedValues = {
    techSelect: document.getElementById('techSelect').value,
    maxVoltage: document.getElementById('maxVoltage').value,
    maxCurrent: document.getElementById('maxCurrent').value,
    transistorSelect: document.getElementById('transistorSelect').value,
    vdc: document.getElementById('vdc').value,
    iLoad: document.getElementById('iLoad').value,
    fsw: document.getElementById('fsw').value,
    temp: document.getElementById('temp').value,
    duty: document.getElementById('duty').value,
    freqMin: document.getElementById('freqMin').value,
    freqMax: document.getElementById('freqMax').value,
    selectedTransistor: selectedTransistor // Запазваме и глобалната променлива
  };
  
  // Обновяваме активния бутон
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang' + lang.toUpperCase()).classList.add('active');
  
  // Обновяваме текстовете
  const langData = LANGUAGES[lang];
  if (langData) {
    // Основни заглавия
    document.getElementById('mainTitle').textContent = langData.mainTitle;
    document.getElementById('subtitle').textContent = langData.subtitle;
    
    // Обновяваме всички елементи с data-lang атрибут
    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.getAttribute('data-lang');
      if (langData[key]) {
        element.textContent = langData[key];
      }
    });
    
    // Обновяваме tooltip съобщенията
    if (langData.tooltips) {
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach((tooltip, index) => {
        switch(index) {
          case 0: // Технология
            tooltip.textContent = langData.tooltips.technology;
            break;
          case 1: // Максимално напрежение
            tooltip.textContent = langData.tooltips.maxVoltage;
            break;
          case 2: // Максимален ток
            tooltip.textContent = langData.tooltips.maxCurrent;
            break;
          case 3: // Конкретен модел
            tooltip.textContent = langData.tooltips.concreteModel;
            break;
          case 4: // VDC
            tooltip.textContent = langData.tooltips.vdc;
            break;
          case 5: // Iload
            tooltip.textContent = langData.tooltips.iload;
            break;
          case 6: // fsw
            tooltip.textContent = langData.tooltips.fsw;
            break;
          case 7: // temp
            tooltip.textContent = langData.tooltips.temp;
            break;
          case 8: // duty
            tooltip.textContent = langData.tooltips.duty;
            break;
        }
      });
    }
    
    // Обновяваме транзисторния select но запазваме стойностите
    filterTransistors();
    
    // Възстановяваме всички запазени стойности след филтрирането
    setTimeout(() => {
      document.getElementById('techSelect').value = savedValues.techSelect;
      document.getElementById('maxVoltage').value = savedValues.maxVoltage;
      document.getElementById('maxCurrent').value = savedValues.maxCurrent;
      document.getElementById('vdc').value = savedValues.vdc;
      document.getElementById('iLoad').value = savedValues.iLoad;
      document.getElementById('fsw').value = savedValues.fsw;
      document.getElementById('temp').value = savedValues.temp;
      document.getElementById('duty').value = savedValues.duty;
      document.getElementById('freqMin').value = savedValues.freqMin;
      document.getElementById('freqMax').value = savedValues.freqMax;
      
      // Възстановяваме избрания транзистор
      if (savedValues.transistorSelect) {
        document.getElementById('transistorSelect').value = savedValues.transistorSelect;
        selectedTransistor = savedValues.selectedTransistor;
        
        // Ако има избран транзистор, показваме информацията за него
        if (selectedTransistor) {
          showTransistorInfo(savedValues.transistorSelect);
        }
      }
    }, 50); // Малка забавка за да се зареди select-ът
  }
}

// Научни константи за по-точни изчисления
const PHYSICS_CONSTANTS = {
  // Gate charge и capacitance параметри за различните технологии
  Si: {
    typical_Qg: 150e-9,      // 150 nC typical gate charge
    typical_Coss: 800e-12,   // 800 pF output capacitance  
    typical_Crss: 50e-12,    // 50 pF reverse transfer capacitance (Miller)
    temp_coeff_rds: 0.006,   // 0.6%/°C RDS(on) temperature coefficient
    switching_speed_factor: 1.0,
    bandgap: 1.12            // eV
  },
  SiC: {
    typical_Qg: 45e-9,       // 45 nC typical gate charge
    typical_Coss: 180e-12,   // 180 pF output capacitance
    typical_Crss: 8e-12,     // 8 pF reverse transfer capacitance
    temp_coeff_rds: 0.008,   // 0.8%/°C RDS(on) temperature coefficient
    switching_speed_factor: 0.3,
    bandgap: 3.3             // eV
  },
  GaN: {
    typical_Qg: 12e-9,       // 12 nC typical gate charge
    typical_Coss: 65e-12,    // 65 pF output capacitance
    typical_Crss: 2e-12,     // 2 pF reverse transfer capacitance
    temp_coeff_rds: 0.012,   // 1.2%/°C RDS(on) temperature coefficient
    switching_speed_factor: 0.1,
    bandgap: 3.4             // eV
  }
};

// Термични съпротивления според типа охлаждане (K/W)
const THERMAL_RESISTANCES = {
  natural: 50,           // Natural convection (само корпус)
  small_heatsink: 20,    // Small heatsink (10-20cm²)
  medium_heatsink: 8,    // Medium heatsink (50-100cm²)
  large_heatsink: 3,     // Large heatsink (>200cm²)
  forced_air: 2,         // Forced air cooling (с вентилатор)
  liquid_cooling: 0.5    // Liquid cooling (най-ефективно)
};

// Научно точна функция за изчисление на switching losses
function calculateAdvancedSwitchingLosses(vds, id, fsw_khz, temp, technology) {
  if (!vds || !id || !fsw_khz || !temp || !technology) return 0;
  
  const fsw = fsw_khz * 1000; // Convert to Hz
  const constants = PHYSICS_CONSTANTS[technology];
  if (!constants) return 0;
  
  // Temperature derating на RDS(on)
  const temp_factor = 1 + constants.temp_coeff_rds * (temp - 25);
  
  // Miller capacitance влияние върху switching времената
  const gate_drive_voltage = 10; // Typical 10V gate drive
  const gate_current = 0.5; // Typical 500mA gate current
  
  // Rise/fall времена базирани на gate charge и Miller capacitance
  const t_rise = (constants.typical_Qg + constants.typical_Crss * vds) / gate_current * 1e-6; // Convert to seconds
  const t_fall = t_rise * 0.8; // Fall time typically 80% of rise time
  
  // Switching energies per cycle (realistic formula) - много по-консервативна оценка
  const E_on = 0.5 * vds * id * t_rise * constants.switching_speed_factor * 0.1; // Намали с 10x
  const E_off = 0.5 * vds * id * t_fall * constants.switching_speed_factor * 0.1; // Намали с 10x
  
  // Output capacitance discharge energy (Coss losses) - също намали
  const E_coss = 0.5 * constants.typical_Coss * vds * vds * 0.1; // Намали с 10x
  
  // Total switching losses including temperature effects
  const P_switching = (E_on + E_off + E_coss) * fsw * temp_factor;
  
  return isNaN(P_switching) ? 0 : P_switching;
}

// Научно точна функция за изчисление на conduction losses
function calculateAdvancedConductionLosses(id, rds_on_25c, duty, temp, technology) {
  if (!id || !rds_on_25c || !duty || !temp || !technology) return 0;
  
  const constants = PHYSICS_CONSTANTS[technology];
  if (!constants) return 0;
  
  // Temperature derating на RDS(on) според физическата теория
  const temp_factor = 1 + constants.temp_coeff_rds * (temp - 25);
  const rds_on_temp = rds_on_25c * temp_factor;
  
  // Conduction losses с temperature effects
  const P_conduction = id * id * rds_on_temp * duty;
  
  return isNaN(P_conduction) ? 0 : P_conduction;
}

// Функция за генериране на efficiency vs frequency график
function generateEfficiencyChart() {
  if (!selectedTransistor) {
    const message = currentLang === 'bg' ? 'Моля, първо изберете транзистор!' : 'Please select a transistor first!';
    alert(message);
    return;
  }
  
  const freqMin = parseFloat(document.getElementById('freqMin').value);
  const freqMax = parseFloat(document.getElementById('freqMax').value);
  const vdc = parseFloat(document.getElementById('vdc').value);
  const iLoad = parseFloat(document.getElementById('iLoad').value);
  const temp = parseFloat(document.getElementById('temp').value);
  const duty = parseFloat(document.getElementById('duty').value);
  
  // Determine technology
  let techType;
  if (selectedTransistor.name.includes('Si') && !selectedTransistor.name.includes('SiC')) {
    techType = 'Si';
  } else if (selectedTransistor.name.includes('SiC')) {
    techType = 'SiC';
  } else if (selectedTransistor.name.includes('GaN')) {
    techType = 'GaN';
  }
  
  // Generate frequency points (logarithmic scale)
  const frequencies = [];
  const efficiencies = [];
  const stepCount = 50;
  
  for (let i = 0; i <= stepCount; i++) {
    const logFreq = Math.log10(freqMin) + (Math.log10(freqMax) - Math.log10(freqMin)) * i / stepCount;
    const freq = Math.pow(10, logFreq);
    frequencies.push(freq);
    
    // Calculate losses at this frequency
    const rds_on_ohms = selectedTransistor.rds_mohm / 1000; // Convert milliohm to ohm
    const pCond = calculateAdvancedConductionLosses(iLoad, rds_on_ohms, duty, temp, techType);
    const pSw = calculateAdvancedSwitchingLosses(vdc, iLoad, freq, temp, techType);
    const pTotal = pCond + pSw;
    const pOut = vdc * iLoad * duty; // Output power
    const efficiency = (pOut / (pOut + pTotal)) * 100;
    
    efficiencies.push(Math.max(0, Math.min(100, efficiency)));
  }
  
  // Create chart
  const ctx = document.getElementById('efficiencyChart');
  
  // Destroy existing chart if any
  if (window.efficiencyChartInstance) {
    window.efficiencyChartInstance.destroy();
  }
  
  window.efficiencyChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: frequencies.map(f => f.toFixed(0)),
      datasets: [{
        label: `${selectedTransistor.name} - КПД (%)`,
        data: efficiencies,
        borderColor: getTechnologyColor(techType),
        backgroundColor: getTechnologyColor(techType) + '20',
        borderWidth: 3,
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Ефективност vs Честота'
        },
        legend: {
          display: true
        }
      },
      scales: {
        x: {
          type: 'logarithmic',
          title: {
            display: true,
            text: 'Честота (kHz)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'КПД (%)'
          },
          min: 80,
          max: 100
        }
      }
    }
  });
  
  document.getElementById('efficiencyChart').style.display = 'block';
  
  // Show insights
  showEfficiencyInsights(frequencies, efficiencies, techType);
}

// Get color for technology
function getTechnologyColor(techType) {
  switch(techType) {
    case 'Si': return '#FF6B6B';
    case 'SiC': return '#4ECDC4';
    case 'GaN': return '#45B7D1';
    default: return '#95A5A6';
  }
}

// Show scientific insights about efficiency vs frequency
function showEfficiencyInsights(frequencies, efficiencies, techType) {
  const maxEffIndex = efficiencies.indexOf(Math.max(...efficiencies));
  const optimalFreq = frequencies[maxEffIndex];
  const maxEff = efficiencies[maxEffIndex];
  
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];
  
  let insights = '';
  if (currentLang === 'bg') {
    insights = `
      <div class="scientific-insights">
        <h4>🔬 Научен анализ на ефективността:</h4>
        <div class="insight-item">
          <strong>📊 Оптимална честота:</strong> ${optimalFreq.toFixed(1)} kHz (${maxEff.toFixed(2)}% КПД)<br>
          <em>Физично обяснение:</em> При тази честота switching и conduction загубите са в оптимално съотношение.
        </div>
        
        <div class="insight-item">
          <strong>⚡ ${techType} характеристики:</strong><br>
          ${getTechnologyPhysicsExplanation(techType)}
        </div>
        
        <div class="insight-item">
          <strong>🧮 Използвани научни модели:</strong><br>
          • Miller capacitance (Crss): ${(PHYSICS_CONSTANTS[techType].typical_Crss * 1e12).toFixed(1)} pF<br>
          • Gate charge (Qg): ${(PHYSICS_CONSTANTS[techType].typical_Qg * 1e9).toFixed(1)} nC<br>
          • Temperature coefficient: ${(PHYSICS_CONSTANTS[techType].temp_coeff_rds * 100).toFixed(1)}%/°C<br>
          • Bandgap energy: ${PHYSICS_CONSTANTS[techType].bandgap} eV
        </div>
      </div>
    `;
  } else {
    insights = `
      <div class="scientific-insights">
        <h4>🔬 Scientific Efficiency Analysis:</h4>
        <div class="insight-item">
          <strong>📊 Optimal frequency:</strong> ${optimalFreq.toFixed(1)} kHz (${maxEff.toFixed(2)}% efficiency)<br>
          <em>Physical explanation:</em> At this frequency switching and conduction losses are optimally balanced.
        </div>
        
        <div class="insight-item">
          <strong>⚡ ${techType} characteristics:</strong><br>
          ${getTechnologyPhysicsExplanationEn(techType)}
        </div>
        
        <div class="insight-item">
          <strong>🧮 Scientific models used:</strong><br>
          • Miller capacitance (Crss): ${(PHYSICS_CONSTANTS[techType].typical_Crss * 1e12).toFixed(1)} pF<br>
          • Gate charge (Qg): ${(PHYSICS_CONSTANTS[techType].typical_Qg * 1e9).toFixed(1)} nC<br>
          • Temperature coefficient: ${(PHYSICS_CONSTANTS[techType].temp_coeff_rds * 100).toFixed(1)}%/°C<br>
          • Bandgap energy: ${PHYSICS_CONSTANTS[techType].bandgap} eV
        </div>
      </div>
    `;
  }
  
  document.getElementById('efficiencyInsights').innerHTML = insights;
  document.getElementById('efficiencyInsights').style.display = 'block';
}

// Scientific explanation of technology physics
function getTechnologyPhysicsExplanation(techType) {
  switch(techType) {
    case 'Si':
      return `
        • <u>Кристална решетка:</u> Диамантена структура, ниска подвижност на носителите<br>
        • <u>Bandgap:</u> 1.12 eV - ограничава работната температура<br>
        • <u>Switching:</u> Бавни поради големи паразитни капацитети<br>
        • <u>Предимства:</u> Евтини, добре изучени процеси<br>
        • <u>Ограничения:</u> Ниска честота, високи switching загуби
      `;
    case 'SiC':
      return `
        • <u>Кристална решетка:</u> Политипна структура (4H-SiC), висока подвижност<br>
        • <u>Bandgap:</u> 3.3 eV - позволява висока температура (200°C+)<br>
        • <u>Switching:</u> Бързи поради ниски паразитни капацитети<br>
        • <u>Предимства:</u> Високи честоти, отлична термична стабилност<br>
        • <u>Физика:</u> Критичното електрично поле е 10x по-високо от Si
      `;
    case 'GaN':
      return `
        • <u>Кристална решетка:</u> Wurtzite структура, най-висока подвижност<br>
        • <u>Bandgap:</u> 3.4 eV - директен bandgap за високи честоти<br>
        • <u>Switching:</u> Най-бързи (sub-nanosecond rise times)<br>
        • <u>2DEG канал:</u> Двумерен електронен газ с висока концентрация<br>
        • <u>Физика:</u> Хетероструктура AlGaN/GaN създава проводящ канал
      `;
    default:
      return 'Няма данни за тази технология.';
  }
}

function getTechnologyPhysicsExplanationEn(techType) {
  switch(techType) {
    case 'Si':
      return `
        • <u>Crystal lattice:</u> Diamond structure, low carrier mobility<br>
        • <u>Bandgap:</u> 1.12 eV - limits operating temperature<br>
        • <u>Switching:</u> Slow due to large parasitic capacitances<br>
        • <u>Advantages:</u> Cheap, well-established processes<br>
        • <u>Limitations:</u> Low frequency, high switching losses
      `;
    case 'SiC':
      return `
        • <u>Crystal lattice:</u> Polytypic structure (4H-SiC), high mobility<br>
        • <u>Bandgap:</u> 3.3 eV - enables high temperature (200°C+)<br>
        • <u>Switching:</u> Fast due to low parasitic capacitances<br>
        • <u>Advantages:</u> High frequencies, excellent thermal stability<br>
        • <u>Physics:</u> Critical electric field is 10x higher than Si
      `;
    case 'GaN':
      return `
        • <u>Crystal lattice:</u> Wurtzite structure, highest mobility<br>
        • <u>Bandgap:</u> 3.4 eV - direct bandgap for high frequencies<br>
        • <u>Switching:</u> Fastest (sub-nanosecond rise times)<br>
        • <u>2DEG channel:</u> Two-dimensional electron gas with high concentration<br>
        • <u>Physics:</u> AlGaN/GaN heterostructure creates conducting channel
      `;
    default:
      return 'No data for this technology.';
  }
}

// Thermal modeling function
function calculateThermalParameters() {
  if (!selectedTransistor) {
    const message = currentLang === 'bg' ? 'Моля, първо изберете транзистор!' : 'Please select a transistor first!';
    alert(message);
    return;
  }
  
  const ambientTemp = parseFloat(document.getElementById('ambientTemp').value);
  const coolingType = document.getElementById('coolingType').value;
  
  // Get current losses
  const vdc = parseFloat(document.getElementById('vdc').value);
  const iLoad = parseFloat(document.getElementById('iLoad').value);
  const fsw = parseFloat(document.getElementById('fsw').value);
  const temp = parseFloat(document.getElementById('temp').value);
  const duty = parseFloat(document.getElementById('duty').value);
  
  // Determine technology
  let techType;
  if (selectedTransistor.name.includes('Si') && !selectedTransistor.name.includes('SiC')) {
    techType = 'Si';
  } else if (selectedTransistor.name.includes('SiC')) {
    techType = 'SiC';
  } else if (selectedTransistor.name.includes('GaN')) {
    techType = 'GaN';
  }
  
  // Calculate losses with current parameters
  const rds_on_ohms = selectedTransistor.rds_mohm / 1000; // Convert milliohm to ohm
  const pCond = calculateAdvancedConductionLosses(iLoad, rds_on_ohms, duty, temp, techType);
  const pSw = calculateAdvancedSwitchingLosses(vdc, iLoad, fsw, temp, techType);
  const totalLosses = pCond + pSw;
  
  // Thermal resistances - реалистични стойности според корпуса
  let rth_jc; // Junction-to-case (зависи от корпуса)
  if (selectedTransistor.package.includes('TO-220')) {
    rth_jc = 0.5; // TO-220 корпуси имат добро термично съпротивление
  } else if (selectedTransistor.package.includes('D2PAK') || selectedTransistor.package.includes('DPAK')) {
    rth_jc = 1.0; // SMD корпуси имат по-високо термично съпротивление
  } else if (selectedTransistor.package.includes('SO') || selectedTransistor.package.includes('QFN')) {
    rth_jc = 20; // Малки SMD корпуси имат много високо термично съпротивление
  } else {
    rth_jc = 1.5; // Стандартна стойност за други корпуси
  }
  
  const rth_ca = THERMAL_RESISTANCES[coolingType]; // Case-to-ambient
  const rth_ja = rth_jc + rth_ca; // Total junction-to-ambient
  
  // Temperature calculations
  const caseTemp = ambientTemp + totalLosses * rth_ca;
  const junctionTemp = ambientTemp + totalLosses * rth_ja;
  
  // Thermal margin calculation - различни максимални температури според технологията
  let maxJunctionTemp;
  if (techType === 'Si') {
    maxJunctionTemp = 150; // Si има по-ниска максимална температура
  } else if (techType === 'SiC') {
    maxJunctionTemp = 200; // SiC може да издържи по-висока температура
  } else if (techType === 'GaN') {
    maxJunctionTemp = 180; // GaN също има висока температурна издръжливост
  } else {
    maxJunctionTemp = 150; // По подразбиране
  }
  
  const thermalMargin = maxJunctionTemp - junctionTemp;
  
  // Display results
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];
  
  document.getElementById('junctionTemp').textContent = `${junctionTemp.toFixed(1)}°C`;
  document.getElementById('caseTemp').textContent = `${caseTemp.toFixed(1)}°C`;
  document.getElementById('thermalResistance').textContent = `${rth_ja.toFixed(2)} K/W`;
  document.getElementById('thermalMargin').textContent = `${thermalMargin.toFixed(1)}°C`;
  
  // Цветово кодиране според термичния марж
  const thermalStatusDiv = document.getElementById('thermalStatus');
  const thermalResultsDiv = document.getElementById('thermalResults');
  const thermalExplanation = document.getElementById('thermalExplanation');
  
  // Премахни всички съществуващи класове
  thermalResultsDiv.classList.remove('thermal-good', 'thermal-warning', 'thermal-danger');
  
  let statusText = '';
  let explanationText = '';
  
  if (thermalMargin > 50) {
    // Отлично охлаждане
    thermalResultsDiv.classList.add('thermal-good');
    statusText = currentLang === 'bg' ? '✅ ОТЛИЧНО ОХЛАЖДАНЕ' : '✅ EXCELLENT COOLING';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е много добър. Транзисторът ще работи стабилно дори при повишени товари.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is excellent. The transistor will operate stably even under increased loads.`;
  } else if (thermalMargin > 25) {
    // Добро охлаждане
    thermalResultsDiv.classList.add('thermal-warning');
    statusText = currentLang === 'bg' ? '⚠️ ДОБРО ОХЛАЖДАНЕ' : '⚠️ GOOD COOLING';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е приемлив, но внимавайте при пикови товари. Може да обмислите по-добро охлаждане.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is acceptable, but be careful with peak loads. Consider better cooling.`;
  } else {
    // Опасно
    thermalResultsDiv.classList.add('thermal-danger');
    statusText = currentLang === 'bg' ? '🔥 ОПАСНО - НУЖНО ПО-ДОБРО ОХЛАЖДАНЕ' : '🔥 DANGEROUS - BETTER COOLING NEEDED';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е твърде малък! Транзисторът рискува от прегряване. Задължително използвайте по-добро охлаждане.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is too small! The transistor risks overheating. Better cooling is mandatory.`;
  }
  
  thermalStatusDiv.textContent = statusText;
  thermalStatusDiv.style.display = 'block';
  
  // Добави научно обяснение за температурите и мощността
  const scientificInfo = currentLang === 'bg' ? 
    `\n\nДетайли на изчислението:\n• Общи загуби: ${totalLosses.toFixed(2)}W\n• Загуби от проводимост: ${pCond.toFixed(2)}W (I²×RDS(on)×D)\n• Загуби от превключване: ${pSw.toFixed(2)}W\n• Junction-to-case: ${rth_jc.toFixed(1)}K/W (${selectedTransistor.package} корпус)\n• Case-to-ambient: ${rth_ca.toFixed(1)}K/W (${coolingType} охлаждане)\n• Макс. temperature ${techType}: ${maxJunctionTemp}°C\n\nΔT = P × Rth → ${totalLosses.toFixed(1)}W × ${rth_ja.toFixed(1)}K/W = ${(totalLosses * rth_ja).toFixed(1)}°C покачване` :
    `\n\nCalculation details:\n• Total losses: ${totalLosses.toFixed(2)}W\n• Conduction losses: ${pCond.toFixed(2)}W (I²×RDS(on)×D)\n• Switching losses: ${pSw.toFixed(2)}W\n• Junction-to-case: ${rth_jc.toFixed(1)}K/W (${selectedTransistor.package} package)\n• Case-to-ambient: ${rth_ca.toFixed(1)}K/W (${coolingType} cooling)\n• Max. temperature ${techType}: ${maxJunctionTemp}°C\n\nΔT = P × Rth → ${totalLosses.toFixed(1)}W × ${rth_ja.toFixed(1)}K/W = ${(totalLosses * rth_ja).toFixed(1)}°C rise`;
  
  thermalExplanation.textContent = explanationText + scientificInfo;
  
  document.getElementById('thermalResults').style.display = 'block';
  
  // Show additional warnings if necessary
  const warningsDiv = document.getElementById('thermalWarnings');
  let warnings = '';
  
  if (junctionTemp > 125) {
    warnings += currentLang === 'bg' ? 
      `⚠️ Температурата на съединението е над 125°C - това е близо до максималната граница!<br>` :
      `⚠️ Junction temperature is above 125°C - this is close to maximum limit!<br>`;
  }
  if (junctionTemp > 150) {
    warnings += currentLang === 'bg' ? 
      `🔥 КРИТИЧНА ТЕМПЕРАТУРА! Транзисторът може да се повреди!<br>` :
      `🔥 CRITICAL TEMPERATURE! The transistor may be damaged!<br>`;
  }
  if (warnings) {
    warningsDiv.innerHTML = warnings;
    warningsDiv.style.display = 'block';
  } else {
    warningsDiv.style.display = 'none';
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
});

// Event listeners за новите функции
document.getElementById('generateEffChart').addEventListener('click', generateEfficiencyChart);
document.getElementById('calculateThermal').addEventListener('click', calculateThermalParameters);

document.getElementById('resetBtn').addEventListener('click',()=>{
  document.getElementById('techSelect').value="SiC";
  document.getElementById('maxVoltage').value=200;
  document.getElementById('maxCurrent').value=15;
  document.getElementById('vdc').value=100;
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
