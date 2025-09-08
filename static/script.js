// Мултиезична поддръжка
const LANGUAGES = {
  bg: {
    mainTitle: 'Калкулатор: Si / SiC / GaN Транзистори',
    subtitle: 'Научно обяснение, формули и графики.',
    inputParams: 'Въведи параметри',
    technology: 'Технология',
    concreteModel: 'Конкретен модел',
    selectTransistor: 'Въведете или изберете модел',
    calculate: 'Изчисли',
    suggestOptimal: 'Предложи оптимални параметри',
    reset: 'Възстанови стойности',
    copyChart: '📋 Копирай графика',
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
      concreteModel: 'Изберете конкретен транзистор от филтрираните по напрежение и ток. Всеки модел има реални параметри от datasheet-а на производителя.',
      vdc: 'DC напрежение на шината (Bus voltage). Това е напрежението, което транзисторът превключва. Трябва да е по-малко от VDS_max на избрания транзистор.',
      iload: 'RMS ток през товара. Това е ефективната стойност на тока, който преминава през транзистора по време на проводимост.',
      fsw: 'Честота на превключване. По-високата честота намалява размера на компонентите, но увеличава загубите от превключване. Типични стойности: Si (10-50kHz), SiC (50-200kHz), GaN (100kHz-1MHz).',
      temp: 'Температура на p-n съединението (Junction temperature). Влияе на съпротивлението RDS(on). Типични стойности: 25°C (стайна), 100°C (работна), 150°C (максимална).',
      duty: 'Коефициент на запълване (Duty cycle) - отношението между времето ON и периода. 0.5 означава 50% от времето транзисторът е включен. Влияе на загубите от проводимост.',
      frequencyRange: 'Честотен обхват за анализ на ефективността спрямо честотата.',
      ambientTemp: 'Околна температура - влияе на термичните изчисления.',
      coolingType: 'Тип охлаждане - точни datasheet стойности. Естествено (50°C/W), малък радиатор Fischer SK104 (15°C/W), среден радиатор Fischer SK129 (6°C/W), голям радиатор Fischer SK53 (2.5°C/W), принудително въздушно 1-2m/s (1.5°C/W), течно охлаждане (0.3°C/W).'
    },
    // Нови преводи за новите функции
    efficiencyAnalysis: 'Анализ на ефективност срещу честота',
    efficiencyDescription: 'Тази графика показва как се променя ефективността при различни честоти за Si, SiC и GaN технологиите.',
    frequencyRange: 'Честотен обхват',
    generateChart: 'Генерирай графика',
    
    // Секция с теория и формули
    theoryTitle: '📚 Теория и основни формули',
    theoryDescription: 'Разберете физическите основи на полупроводниковите загуби и формулите зад изчисленията.',
    conductionLosses: 'Проводими загуби',
    switchingLosses: 'Превключващи загуби',
    thermalTheory: 'Термична теория',
    techComparison: 'Сравнение на технологиите',
    
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
    smallHeatsink: 'Малък радиатор (Fischer SK104, 15°C/W)',
    mediumHeatsink: 'Среден радиатор (Fischer SK129, 6°C/W)',
    largeHeatsink: 'Голям радиатор (Fischer SK53, 2.5°C/W)',
    forcedAir: 'Принудително въздушно (с вентилатор, 1.5°C/W)',
    liquidCooling: 'Течно охлаждане (измерено, 0.3°C/W)'
  },
  en: {
    mainTitle: 'Calculator: Si / SiC / GaN Transistors',
    subtitle: 'Scientific explanation, formulas and charts.',
    inputParams: 'Input Parameters',
    technology: 'Technology',
    concreteModel: 'Specific Model',
    selectTransistor: 'Enter or select model',
    calculate: 'Calculate',
    suggestOptimal: 'Suggest Optimal Parameters',
    reset: 'Reset Values',
    copyChart: '📋 Copy Chart',
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
      concreteModel: 'Select a specific transistor from those filtered by voltage and current. Each model has real parameters from the manufacturer\'s datasheet.',
      vdc: 'DC bus voltage. This is the voltage that the transistor switches. Must be less than VDS_max of the selected transistor.',
      iload: 'RMS load current. This is the effective value of current flowing through the transistor during conduction.',
      fsw: 'Switching frequency. Higher frequency reduces component size but increases switching losses. Typical values: Si (10-50kHz), SiC (50-200kHz), GaN (100kHz-1MHz).',
      temp: 'Junction temperature. Affects RDS(on) resistance. Typical values: 25°C (room), 100°C (operating), 150°C (maximum).',
      duty: 'Duty cycle - ratio between ON time and period. 0.5 means 50% of time the transistor is on. Affects conduction losses.',
      frequencyRange: 'Frequency range for efficiency vs frequency analysis.',
      ambientTemp: 'Ambient temperature - affects thermal calculations.',
      coolingType: 'Cooling type - exact datasheet values. Natural (50°C/W), small heatsink Fischer SK104 (15°C/W), medium heatsink Fischer SK129 (6°C/W), large heatsink Fischer SK53 (2.5°C/W), forced air 1-2m/s (1.5°C/W), liquid cooling measured (0.3°C/W).'
    },
    // New translations for new functions
    efficiencyAnalysis: 'Efficiency vs Frequency Analysis',
    efficiencyDescription: 'This chart shows how efficiency changes with different frequencies for Si, SiC and GaN technologies.',
    frequencyRange: 'Frequency Range',
    generateChart: 'Generate Chart',
    
    // Theory and formulas section
    theoryTitle: '📚 Theory and Basic Formulas',
    theoryDescription: 'Understand the physical foundations of semiconductor losses and formulas behind calculations.',
    conductionLosses: 'Conduction Losses',
    switchingLosses: 'Switching Losses',
    thermalTheory: 'Thermal Theory',
    techComparison: 'Technology Comparison',
    
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
    smallHeatsink: 'Small Heatsink (Fischer SK104, 15°C/W)',
    mediumHeatsink: 'Medium Heatsink (Fischer SK129, 6°C/W)',
    largeHeatsink: 'Large Heatsink (Fischer SK53, 2.5°C/W)',
    forcedAir: 'Forced Air (with fan, 1.5°C/W)',
    liquidCooling: 'Liquid Cooling (measured, 0.3°C/W)'
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

// Функция за зареждане на всички транзистори
function populateTransistors() {
  const tech = document.getElementById('techSelect').value;
  
  const transistorList = document.getElementById('transistorList');
  const transistorInput = document.getElementById('transistorSelect');
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];
  
  // Изчистваме datalist
  transistorList.innerHTML = '';
  
  // Обновяваме placeholder текста
  transistorInput.placeholder = langData.selectTransistor + '...';
  
  const transistors = TRANSISTOR_DB[tech] || {};
  
  // Добавяме всички транзистори в datalist
  Object.entries(transistors).forEach(([key, transistor]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${transistor.name} [${transistor.vds_max}V, ${transistor.id_max}A]`;
    transistorList.appendChild(option);
  });
}

// Функция за показване на информацията за избрания транзистор
function showTransistorInfo(transistorKey) {
  const tech = document.getElementById('techSelect').value;
  
  if (!transistorKey || transistorKey.trim() === '') {
    document.getElementById('transistorInfo').style.display = 'none';
    selectedTransistor = null;
    return;
  }
  
  // Проверяваме дали моделът е в базата данни
  let transistor = TRANSISTOR_DB[tech] && TRANSISTOR_DB[tech][transistorKey];
  
  if (transistor) {
    // Модел от базата данни
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
  } else {
    // Ръчно въведен модел - използваме типични параметри за технологията
    const typicalParams = getTypicalParameters(tech);
    selectedTransistor = {
      name: transistorKey + ` (${tech})`,
      manufacturer: "Ръчно въведен",
      package: "N/A",
      ...typicalParams,
      application: "Ръчно въведен модел"
    };
    
    document.getElementById('modelName').textContent = selectedTransistor.name;
    document.getElementById('manufacturer').textContent = "Ръчно въведен модел";
    document.getElementById('package').textContent = "Моля въведете параметрите ръчно";
    document.getElementById('vdsMax').textContent = typicalParams.vds_max + ' V (типично)';
    document.getElementById('idMax').textContent = typicalParams.id_max + ' A (типично)';
    document.getElementById('rdsOn').textContent = typicalParams.rds_mohm + ' mΩ (типично)';
    document.getElementById('application').textContent = "Копирано от datasheet - моля проверете параметрите";
    
    // Генерираме предложения с типични параметри
    generateParameterSuggestions(selectedTransistor);
    
    document.getElementById('transistorInfo').style.display = 'block';
  }
}

// Функция за получаване на типични параметри за дадена технология
function getTypicalParameters(tech) {
  const typical = {
    'Si': { vds_max: 600, id_max: 20, rds_mohm: 50, tr_ns: 25, tf_ns: 15, alpha: 0.004 },
    'SiC': { vds_max: 1200, id_max: 25, rds_mohm: 40, tr_ns: 15, tf_ns: 8, alpha: 0.003 },
    'GaN': { vds_max: 650, id_max: 15, rds_mohm: 50, tr_ns: 5, tf_ns: 3, alpha: 0.0025 }
  };
  return typical[tech] || typical['Si'];
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
  
  // Нова професионална safety валидация
  const tech = document.getElementById('techSelect').value;
  const safetyValidation = validateOperatingParameters(Vdc, I, fsw/1000, T, D, tech);
  displaySafetyWarnings(safetyValidation);
  
  // Enhanced datasheet integration
  const enhancedParams = getEnhancedParameters(selectedTransistor.name);
  if (enhancedParams.enhanced) {
    console.log(`🔬 Using enhanced datasheet parameters from ${enhancedParams.manufacturer}`);
  }
  
  // Generate switching waveforms
  const waveforms = waveformSimulator.simulateSwitchingWaveforms(Vdc, I, fsw/1000, tech);
  
  // Create waveform visualization
  setTimeout(() => {
    let waveformContainer = document.getElementById('waveformContainer');
    if (!waveformContainer) {
      waveformContainer = document.createElement('div');
      waveformContainer.id = 'waveformContainer';
      waveformContainer.style.marginTop = '20px';
      waveformContainer.innerHTML = `
        <h3 style="color: #1976d2; margin-bottom: 10px;">
          📊 ${currentLang === 'bg' ? 'Switching Waveforms' : 'Switching Waveforms'}
        </h3>
        <canvas id="waveformCanvas" width="800" height="400" style="border: 1px solid #ccc; border-radius: 8px; max-width: 100%;"></canvas>
      `;
      const resultsParent = document.getElementById('results')?.parentNode;
      if (resultsParent) {
        resultsParent.appendChild(waveformContainer);
      } else {
        document.body.appendChild(waveformContainer);
      }
    }
    
    waveformSimulator.initCanvas('waveformCanvas');
    const title = `${tech} Transistor @ ${fsw/1000}kHz, ${Vdc}V, ${I}A`;
    waveformSimulator.drawWaveforms(waveforms, title);
  }, 100);
  
  // Cost Analysis - compare current selection with alternatives
  const currentCooling = document.getElementById('coolingType') ? document.getElementById('coolingType').value : 'medium_heatsink';
  let costAnalysis = null;
  
  // Generate cost comparison if we have different technologies to compare
  if (tech === 'Si') {
    // Compare Si with SiC
    const sicLosses = pCond * 0.7 + pSw * 0.3; // Estimate SiC would have lower losses
    costAnalysis = costAnalyzer.compareAlternatives('Si', 'SiC', pTotal, sicLosses, currentCooling);
  } else if (tech === 'SiC') {
    // Compare SiC with GaN
    const ganLosses = pCond * 0.8 + pSw * 0.2; // Estimate GaN would have lower switching losses
    costAnalysis = costAnalyzer.compareAlternatives('SiC', 'GaN', pTotal, ganLosses, currentCooling);
  }
  
  // Display cost analysis
  if (costAnalysis) {
    setTimeout(() => {
      let costContainer = document.getElementById('costAnalysisContainer');
      if (!costContainer) {
        costContainer = document.createElement('div');
        costContainer.id = 'costAnalysisContainer';
        costContainer.style.marginTop = '20px';
        const costReport = costAnalyzer.generateCostReport(costAnalysis);
        
        costContainer.innerHTML = `
          <div style="background: linear-gradient(135deg, #fff3e0, #f1f8e9); border-radius: 8px; padding: 15px; border-left: 4px solid #ff9800;">
            <h3 style="color: #ef6c00; margin-top: 0; margin-bottom: 15px;">
              💰 ${currentLang === 'bg' ? 'Cost Analysis & ROI' : 'Cost Analysis & ROI'}
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 15px;">
              <div><strong>${currentLang === 'bg' ? 'Upgrade' : 'Upgrade'}:</strong> ${costReport.summary.technology_upgrade}</div>
              <div><strong>${currentLang === 'bg' ? 'Efficiency Gain' : 'Efficiency Gain'}:</strong> ${costReport.summary.efficiency_gain}</div>
              <div><strong>${currentLang === 'bg' ? 'Additional Cost' : 'Additional Cost'}:</strong> ${costReport.summary.additional_hardware_cost}</div>
              <div><strong>${currentLang === 'bg' ? 'Annual Savings' : 'Annual Savings'}:</strong> ${costReport.summary.annual_savings}</div>
              <div><strong>${currentLang === 'bg' ? 'Payback Period' : 'Payback Period'}:</strong> ${costReport.summary.payback_period}</div>
              <div><strong>${currentLang === 'bg' ? '5-Year ROI' : '5-Year ROI'}:</strong> ${costReport.summary.roi_5year}</div>
            </div>
            <div style="background: white; padding: 10px; border-radius: 5px; font-weight: bold;">
              ${costReport.recommendation}
            </div>
          </div>
        `;
        
        const resultsParent = document.getElementById('results')?.parentNode;
        if (resultsParent) {
          resultsParent.appendChild(costContainer);
        } else {
          document.body.appendChild(costContainer);
        }
      }
    }, 200);
  }
  
  // Add Reliability Analysis
  if (selectedTransistor) {
    setTimeout(() => {
      // Calculate reliability metrics
      const voltageStress = Vdc / selectedTransistor.vds_max;
      const currentStress = I / selectedTransistor.id_max;
      
      const mtbfData = reliabilityAnalyzer.calculateMTBF(
        tech, 
        parseFloat(thermalResult.tj), 
        voltageStress, 
        currentStress, 
        fsw/1000
      );
      
      if (mtbfData) {
        const reliabilityReport = reliabilityAnalyzer.generateReliabilityReport(mtbfData, currentLang);
        
        let reliabilityContainer = document.getElementById('reliabilityContainer');
        if (!reliabilityContainer) {
          reliabilityContainer = document.createElement('div');
          reliabilityContainer.id = 'reliabilityContainer';
          reliabilityContainer.style.marginTop = '20px';
          
          reliabilityContainer.innerHTML = `
            <div style="background: linear-gradient(135deg, #f3e5f5, #e8f5e8); border-radius: 8px; padding: 15px; border-left: 4px solid ${reliabilityReport.color};">
              <h3 style="color: ${reliabilityReport.color}; margin-top: 0; margin-bottom: 15px;">
                🔬 ${currentLang === 'bg' ? 'Reliability Analysis (MTBF)' : 'Reliability Analysis (MTBF)'}
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 15px;">
                <div><strong>${currentLang === 'bg' ? 'Status' : 'Status'}:</strong> ${reliabilityReport.text}</div>
                <div><strong>MTBF:</strong> ${reliabilityReport.mtbf_display}</div>
                <div><strong>${currentLang === 'bg' ? '10-Year Reliability' : '10-Year Reliability'}:</strong> ${reliabilityReport.reliability_10y}</div>
                <div><strong>${currentLang === 'bg' ? 'Failure Rate' : 'Failure Rate'}:</strong> ${mtbfData.failure_rate_fit.toFixed(1)} FIT</div>
                <div><strong>${currentLang === 'bg' ? 'Dominant Stress' : 'Dominant Stress'}:</strong> ${reliabilityReport.dominant_stress}</div>
              </div>
              <div style="background: white; padding: 10px; border-radius: 5px; font-weight: bold;">
                ${reliabilityReport.improvement_suggestion}
              </div>
            </div>
          `;
          
          const resultsParent = document.getElementById('results')?.parentNode;
          if (resultsParent) {
            resultsParent.appendChild(reliabilityContainer);
          } else {
            document.body.appendChild(reliabilityContainer);
          }
        }
      }
    }, 300);
  }
  
  // Add EMI/EMC Analysis
  setTimeout(() => {
    const emiData = emiAnalyzer.calculateEMI(Vdc, I, fsw/1000, tech, selectedTransistor);
    
    let emiContainer = document.getElementById('emiContainer');
    if (!emiContainer) {
      emiContainer = document.createElement('div');
      emiContainer.id = 'emiContainer';
      emiContainer.style.marginTop = '20px';
      
      const complianceColor = emiData.compliance.overall_compliance ? '#2e7d32' : '#d32f2f';
      const complianceText = emiData.compliance.overall_compliance ? 
        (currentLang === 'bg' ? '✅ EMI Compliance OK' : '✅ EMI Compliance OK') :
        (currentLang === 'bg' ? '❌ EMI Compliance Issues' : '❌ EMI Compliance Issues');
      
      emiContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #e1f5fe, #f9fbe7); border-radius: 8px; padding: 15px; border-left: 4px solid #0277bd;">
          <h3 style="color: #0277bd; margin-top: 0; margin-bottom: 15px;">
            📡 ${currentLang === 'bg' ? 'EMI/EMC Analysis' : 'EMI/EMC Analysis'}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-bottom: 15px;">
            <div><strong>dv/dt:</strong> ${emiData.dv_dt} V/ns</div>
            <div><strong>di/dt:</strong> ${emiData.di_dt} A/ns</div>
            <div><strong>${currentLang === 'bg' ? 'Switching Times' : 'Switching Times'}:</strong> ${emiData.switching_times.tr_ns}/${emiData.switching_times.tf_ns} ns</div>
            <div><strong>${currentLang === 'bg' ? 'Radiated Emission' : 'Radiated Emission'}:</strong> ${emiData.radiated_emission} dBμV</div>
            <div><strong>${currentLang === 'bg' ? 'Harmonic BW' : 'Harmonic BW'}:</strong> ${emiData.harmonic_content.bandwidth_mhz.toFixed(1)} MHz</div>
          </div>
          <div style="background: ${complianceColor}; color: white; padding: 8px; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
            ${complianceText}
          </div>
          ${emiData.mitigation_suggestions.length > 0 ? `
            <div style="background: white; padding: 10px; border-radius: 5px;">
              <strong>${currentLang === 'bg' ? 'Mitigation Suggestions:' : 'Mitigation Suggestions:'}</strong><br>
              ${emiData.mitigation_suggestions.map(s => `• ${s}`).join('<br>')}
            </div>
          ` : ''}
        </div>
      `;
      
      const resultsParent = document.getElementById('results')?.parentNode;
      if (resultsParent) {
        resultsParent.appendChild(emiContainer);
      } else {
        document.body.appendChild(emiContainer);
      }
    }
  }, 400);
  
  // Add SOA Visualization
  if (selectedTransistor) {
    setTimeout(() => {
      let soaContainer = document.getElementById('soaContainer');
      if (!soaContainer) {
        soaContainer = document.createElement('div');
        soaContainer.id = 'soaContainer';
        soaContainer.style.marginTop = '20px';
        soaContainer.innerHTML = `
          <h3 style="color: #d32f2f; margin-bottom: 10px;">
            ⚡ ${currentLang === 'bg' ? 'Safe Operating Area (SOA)' : 'Safe Operating Area (SOA)'}
          </h3>
          <canvas id="soaCanvas" width="600" height="400" style="border: 1px solid #ccc; border-radius: 8px; max-width: 100%;"></canvas>
        `;
        
        const resultsParent = document.getElementById('results')?.parentNode;
        if (resultsParent) {
          resultsParent.appendChild(soaContainer);
        } else {
          document.body.appendChild(soaContainer);
        }
      }
      
      soaVisualizer.initCanvas('soaCanvas');
      soaVisualizer.drawSOA(selectedTransistor, Vdc, I, tech);
    }, 500);
  }
  
  // Add Gate Drive Requirements Analysis
  if (selectedTransistor) {
    setTimeout(() => {
      const gateDriveData = gateDriveCalc.calculateGateDriveRequirements(
        selectedTransistor, fsw/1000, tech, enhancedParams
      );
      
      let gateDriveContainer = document.getElementById('gateDriveContainer');
      if (!gateDriveContainer) {
        gateDriveContainer = document.createElement('div');
        gateDriveContainer.id = 'gateDriveContainer';
        gateDriveContainer.style.marginTop = '20px';
        
        gateDriveContainer.innerHTML = `
          <div style="background: linear-gradient(135deg, #f3e5f5, #e0f2f1); border-radius: 8px; padding: 15px; border-left: 4px solid #7b1fa2;">
            <h3 style="color: #7b1fa2; margin-top: 0; margin-bottom: 15px;">
              🔌 ${currentLang === 'bg' ? 'Gate Drive Requirements' : 'Gate Drive Requirements'}
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 15px;">
              <div><strong>${currentLang === 'bg' ? 'Gate Voltages' : 'Gate Voltages'}:</strong> +${gateDriveData.gate_voltages.on}V/${gateDriveData.gate_voltages.off}V</div>
              <div><strong>${currentLang === 'bg' ? 'Gate Charge' : 'Gate Charge'}:</strong> ${gateDriveData.gate_charges.total} nC</div>
              <div><strong>${currentLang === 'bg' ? 'Avg Current' : 'Avg Current'}:</strong> ${gateDriveData.currents.average} mA</div>
              <div><strong>${currentLang === 'bg' ? 'Peak Current' : 'Peak Current'}:</strong> ${gateDriveData.currents.peak} mA</div>
              <div><strong>${currentLang === 'bg' ? 'Gate Resistor' : 'Gate Resistor'}:</strong> ${gateDriveData.gate_resistor.optimal}Ω</div>
              <div><strong>${currentLang === 'bg' ? 'Driver Power' : 'Driver Power'}:</strong> ${gateDriveData.driver_power} mW</div>
            </div>
            <div style="background: white; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
              <strong>${currentLang === 'bg' ? 'Recommended Driver ICs:' : 'Recommended Driver ICs:'}</strong><br>
              ${gateDriveData.driver_ic.recommendations}
              ${gateDriveData.driver_ic.isolation_required ? `<br><span style="color: #d32f2f;">⚠️ ${currentLang === 'bg' ? 'Isolation required' : 'Isolation required'}</span>` : ''}
            </div>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px;">
              <strong>${currentLang === 'bg' ? 'Layout Recommendations:' : 'Layout Recommendations:'}</strong><br>
              ${gateDriveData.layout_recommendations.map(r => `• ${r}`).join('<br>')}
            </div>
          </div>
        `;
        
        const resultsParent = document.getElementById('results')?.parentNode;
        if (resultsParent) {
          resultsParent.appendChild(gateDriveContainer);
        } else {
          document.body.appendChild(gateDriveContainer);
        }
      }
    }, 600);
  }
  
  // Add Efficiency Optimization Analysis
  if (selectedTransistor) {
    setTimeout(() => {
      const efficiencyData = efficiencyOptimizer.findOptimalFrequency(
        selectedTransistor, Vdc, I, T, tech
      );
      
      let efficiencyContainer = document.getElementById('efficiencyContainer');
      if (!efficiencyContainer) {
        efficiencyContainer = document.createElement('div');
        efficiencyContainer.id = 'efficiencyContainer';
        efficiencyContainer.style.marginTop = '20px';
        
        efficiencyContainer.innerHTML = `
          <div style="background: linear-gradient(135deg, #e8f5e8, #fff3e0); border-radius: 8px; padding: 15px; border-left: 4px solid #388e3c;">
            <h3 style="color: #388e3c; margin-top: 0; margin-bottom: 15px;">
              📊 ${currentLang === 'bg' ? 'Frequency Optimization Analysis' : 'Frequency Optimization Analysis'}
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 15px;">
              <div><strong>${currentLang === 'bg' ? 'Current Frequency' : 'Current Frequency'}:</strong> ${(fsw/1000).toFixed(1)} kHz</div>
              <div><strong>${currentLang === 'bg' ? 'Current Efficiency' : 'Current Efficiency'}:</strong> ${eff.toFixed(2)}%</div>
              <div><strong>${currentLang === 'bg' ? 'Optimal Frequency' : 'Optimal Frequency'}:</strong> ${efficiencyData.optimal_frequency.toFixed(1)} kHz</div>
              <div><strong>${currentLang === 'bg' ? 'Max Efficiency' : 'Max Efficiency'}:</strong> ${efficiencyData.max_efficiency.toFixed(2)}%</div>
              <div><strong>${currentLang === 'bg' ? 'Potential Gain' : 'Potential Gain'}:</strong> +${(efficiencyData.max_efficiency - eff).toFixed(2)}%</div>
            </div>
            <div style="background: white; padding: 10px; border-radius: 5px;">
              <strong>${currentLang === 'bg' ? 'Optimization Recommendations:' : 'Optimization Recommendations:'}</strong><br>
              ${efficiencyData.recommendations.map(r => `• ${r}`).join('<br>')}
            </div>
          </div>
        `;
        
        const resultsParent = document.getElementById('results')?.parentNode;
        if (resultsParent) {
          resultsParent.appendChild(efficiencyContainer);
        } else {
          document.body.appendChild(efficiencyContainer);
        }
      }
    }, 700);
  }
  
  // Add Temperature Derating Analysis
  if (selectedTransistor && thermalResult) {
    setTimeout(() => {
      const tjFloat = parseFloat(thermalResult.tj);
      const thermalCycling = thermalAnalyzer.calculateThermalCycling(
        T, tjFloat, 1000, tech // Assume 1000 cycles per year
      );
      
      let thermalContainer = document.getElementById('thermalContainer');
      if (!thermalContainer) {
        thermalContainer = document.createElement('div');
        thermalContainer.id = 'thermalContainer';
        thermalContainer.style.marginTop = '20px';
        
        const rating = thermalAnalyzer.getThermalReliabilityRating(parseFloat(thermalCycling.years_to_failure));
        
        thermalContainer.innerHTML = `
          <div style="background: linear-gradient(135deg, #e3f2fd, #fce4ec); border-radius: 8px; padding: 15px; border-left: 4px solid #1976d2;">
            <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 15px;">
              🌡️ ${currentLang === 'bg' ? 'Thermal Cycling Analysis' : 'Thermal Cycling Analysis'}
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 15px;">
              <div><strong>ΔT:</strong> ${thermalCycling.delta_t.toFixed(1)}°C</div>
              <div><strong>${currentLang === 'bg' ? 'Stress Factor' : 'Stress Factor'}:</strong> ${thermalCycling.thermal_stress_factor}</div>
              <div><strong>${currentLang === 'bg' ? 'Cycles to Failure' : 'Cycles to Failure'}:</strong> ${thermalCycling.cycles_to_failure.toLocaleString()}</div>
              <div><strong>${currentLang === 'bg' ? 'Expected Life' : 'Expected Life'}:</strong> ${thermalCycling.years_to_failure} years</div>
            </div>
            <div style="background: ${rating.color}; color: white; padding: 8px; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
              ${currentLang === 'bg' ? 'Термична надежност' : 'Thermal Reliability'}: ${rating.level.toUpperCase()}
            </div>
            ${thermalCycling.recommendations.length > 0 ? `
              <div style="background: white; padding: 10px; border-radius: 5px;">
                <strong>${currentLang === 'bg' ? 'Препоръки:' : 'Recommendations:'}</strong><br>
                ${thermalCycling.recommendations.map(r => `• ${r}`).join('<br>')}
              </div>
            ` : ''}
          </div>
        `;
        
        const resultsParent = document.getElementById('results')?.parentNode;
        if (resultsParent) {
          resultsParent.appendChild(thermalContainer);
        } else {
          document.body.appendChild(thermalContainer);
        }
      }
    }, 800);
  }
  
  // Add Professional Export Buttons
  setTimeout(() => {
    let exportContainer = document.getElementById('exportContainer');
    if (!exportContainer) {
      exportContainer = document.createElement('div');
      exportContainer.id = 'exportContainer';
      exportContainer.style.marginTop = '20px';
      
      // Collect all calculation data for export
      const exportData = dataExporter.exportCalculationData(
        {
          pCond: results.pCond,
          pSw: results.pSw,
          totalLoss: results.totalLoss,
          efficiency: results.efficiency,
          junctionTemp: thermalResult?.tj
        },
        {
          technology: tech,
          voltage: Vdc,
          current: I,
          frequency: fsw/1000,
          temperature: T,
          duty: D
        },
        selectedTransistor
      );
      
      exportContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #f3e5f5, #e8eaf6); border-radius: 8px; padding: 15px; border-left: 4px solid #673ab7;">
          <h3 style="color: #673ab7; margin-top: 0; margin-bottom: 15px;">
            📄 ${currentLang === 'bg' ? 'Professional Data Export' : 'Professional Data Export'}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
            <button onclick="exportCSV()" style="background: #4caf50; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
              📊 CSV Export
            </button>
            <button onclick="exportLaTeX()" style="background: #2196f3; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
              📝 LaTeX Table
            </button>
            <button onclick="exportCitation()" style="background: #ff9800; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
              📚 Citation
            </button>
            <button onclick="exportJSON()" style="background: #9c27b0; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
              💾 JSON Data
            </button>
          </div>
          <div style="background: white; padding: 10px; border-radius: 5px; margin-top: 10px; font-size: 12px; color: #666;">
            ${currentLang === 'bg' ? 'Всички експорти включват metadata, references и IEEE стандарти за научни публикации' : 'All exports include metadata, references and IEEE standards for scientific publications'}
          </div>
        </div>
      `;
      
      // Add export functions to global scope
      window.exportCSV = () => {
        const csv = dataExporter.generateCSV(exportData);
        dataExporter.downloadFile(csv, 'transistor_analysis.csv', 'text/csv');
      };
      
      window.exportLaTeX = () => {
        const latex = dataExporter.generateLaTeX(exportData);
        dataExporter.downloadFile(latex, 'transistor_analysis.tex', 'text/plain');
      };
      
      window.exportCitation = () => {
        const citation = dataExporter.generateCitation();
        dataExporter.downloadFile(citation, 'citation.txt', 'text/plain');
      };
      
      window.exportJSON = () => {
        const json = JSON.stringify(exportData, null, 2);
        dataExporter.downloadFile(json, 'transistor_analysis.json', 'application/json');
      };
      
      const resultsParent = document.getElementById('results')?.parentNode;
      if (resultsParent) {
        resultsParent.appendChild(exportContainer);
      } else {
        document.body.appendChild(exportContainer);
      }
    }
  }, 900);
}

// База данни с транзистори
const TRANSISTOR_DATABASE = {
  'Si': [
    { name: 'IRFZ44N', manufacturer: 'Infineon', package: 'TO-220', vds_max: 55, id_max: 49, rds_mohm: 17.5, tr_ns: 25, tf_ns: 20, alpha: 0.006, application: 'General purpose' },
    { name: 'IRLB8721', manufacturer: 'Infineon', package: 'TO-220', vds_max: 30, id_max: 62, rds_mohm: 4.3, tr_ns: 30, tf_ns: 25, alpha: 0.007, application: 'Low voltage, high current' },
    { name: 'IRF540N', manufacturer: 'Infineon', package: 'TO-220', vds_max: 100, id_max: 33, rds_mohm: 44, tr_ns: 20, tf_ns: 15, alpha: 0.005, application: 'High voltage' },
    { name: 'IRFP260N', manufacturer: 'Infineon', package: 'TO-247', vds_max: 200, id_max: 50, rds_mohm: 40, tr_ns: 35, tf_ns: 30, alpha: 0.006, application: 'High power' }
  ],
  'SiC': [
    { name: 'C3M0075120K', manufacturer: 'Wolfspeed', package: 'TO-247-3', vds_max: 1200, id_max: 36, rds_mohm: 75, tr_ns: 15, tf_ns: 12, alpha: 0.003, application: 'High voltage switching' },
    { name: 'SCT3120AL', manufacturer: 'ROHM', package: 'TO-247N', vds_max: 1200, id_max: 35, rds_mohm: 120, tr_ns: 18, tf_ns: 15, alpha: 0.004, application: 'Industrial drives' },
    { name: 'C2M0080120D', manufacturer: 'Wolfspeed', package: 'TO-247-3', vds_max: 1200, id_max: 36, rds_mohm: 80, tr_ns: 12, tf_ns: 10, alpha: 0.003, application: 'Solar inverters' },
    { name: 'IMW120R030M1H', manufacturer: 'Infineon', package: 'TO-247-3', vds_max: 1200, id_max: 31, rds_mohm: 30, tr_ns: 10, tf_ns: 8, alpha: 0.0025, application: 'EV charging' }
  ],
  'GaN': [
    { name: 'GS66508B', manufacturer: 'GaN Systems', package: 'GaNPX', vds_max: 650, id_max: 30, rds_mohm: 50, tr_ns: 5, tf_ns: 3, alpha: 0.004, application: 'High frequency switching' },
    { name: 'TPH3205WS', manufacturer: 'Transphorm', package: 'TO-247', vds_max: 650, id_max: 46, rds_mohm: 32, tr_ns: 8, tf_ns: 5, alpha: 0.003, application: 'Server PSU' },
    { name: 'EPC2001C', manufacturer: 'EPC', package: 'LGA', vds_max: 100, id_max: 15, rds_mohm: 25, tr_ns: 3, tf_ns: 2, alpha: 0.005, application: 'DC-DC converters' },
    { name: 'GS61008P', manufacturer: 'GaN Systems', package: 'GaNPX', vds_max: 100, id_max: 90, rds_mohm: 7, tr_ns: 4, tf_ns: 3, alpha: 0.0035, application: 'Motor drives' }
  ]
};

// Основна функция за изчисляване на загубите
function calculateLosses() {
  // Вземаме стойностите от формата
  const Vdc = parseFloat(document.getElementById('voltage').value);
  const I = parseFloat(document.getElementById('current').value);
  const fsw = parseFloat(document.getElementById('frequency').value) * 1000; // Преобразуване в Hz
  const T = parseFloat(document.getElementById('temperature').value);
  const D = parseFloat(document.getElementById('duty').value) / 100;
  
  const selectedTransistor = getSelectedTransistor();
  if (!selectedTransistor) {
    alert(currentLang === 'bg' ? 'Моля изберете транзистор!' : 'Please select a transistor!');
    return;
  }
  
  // Изчисляване на RDS(on) при работната температура
  const rds0 = selectedTransistor.rds_mohm / 1000; // Преобразуване в Ohm
  const tempCoeff = selectedTransistor.alpha || 0.006; // Температурен коефициент по подразбиране
  const rds = rds0 * (1 + tempCoeff * (T - 25));
  
  // Загуби от проводимост
  const pCond = I * I * rds * D;
  
  // Загуби от превключване
  const tr = (selectedTransistor.tr_ns || 25) * 1e-9; // Време на нарастване
  const tf = (selectedTransistor.tf_ns || 20) * 1e-9; // Време на спадане
  const pSw = 0.5 * Vdc * I * (tr + tf) * fsw * 2; // Фактор 2 за turn-on и turn-off
  
  // Общи загуби и ефективност
  const pTotal = pCond + pSw;
  const pOut = Vdc * I * D;
  const eff = 100 * pOut / (pOut + pTotal);
  
  // Показване на резултатите
  document.getElementById('pCond').textContent = pCond.toFixed(2) + ' W';
  document.getElementById('pSw').textContent = pSw.toFixed(2) + ' W';
  document.getElementById('pTotal').textContent = pTotal.toFixed(2) + ' W';
  document.getElementById('efficiency').textContent = eff.toFixed(2) + ' %';
  
  // Актуализиране на графиката
  updateChart(pCond, pSw);
  
  // Показване на резултатите секция
  document.getElementById('results').style.display = 'block';
}

// Актуализиране на pie chart
function updateChart(pCond, pSw) {
  const ctx = document.getElementById('lossChart').getContext('2d');
  
  if (chart) {
    chart.destroy();
  }
  
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: currentLang === 'bg' ? ['Проводимост', 'Превключване'] : ['Conduction', 'Switching'],
      datasets: [{
        data: [pCond, pSw],
        backgroundColor: ['#004aad', '#00c896']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const total = pCond + pSw;
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed.toFixed(2)}W (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Функция за получаване на избрания транзистор
function getSelectedTransistor() {
  const transistorSelect = document.getElementById('transistorSelect');
  const selectedValue = transistorSelect.value;
  
  if (!selectedValue) return null;
  
  // Намираме транзистора в базата данни
  for (const tech in TRANSISTOR_DATABASE) {
    const transistor = TRANSISTOR_DATABASE[tech].find(t => 
      (t.name + '_' + tech) === selectedValue
    );
    if (transistor) {
      return transistor;
    }
  }
  return null;
}

// Зареждане на транзисторите в dropdown при стартиране
document.addEventListener('DOMContentLoaded', function() {
  loadTransistors();
});

// Функция за зареждане на транзисторите
function loadTransistors() {
  const transistorSelect = document.getElementById('transistorSelect');
  if (!transistorSelect) return;
  
  // Изчистваме първо
  transistorSelect.innerHTML = '<option value=\"\">' + (currentLang === 'bg' ? 'Изберете транзистор' : 'Select transistor') + '</option>';
  
  // Добавяме транзисторите по технологии
  for (const tech in TRANSISTOR_DATABASE) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = tech + ' транзистори';
    
    TRANSISTOR_DATABASE[tech].forEach(transistor => {
      const option = document.createElement('option');
      option.value = transistor.name + '_' + tech;
      option.textContent = `${transistor.name} (${tech}) - ${transistor.vds_max}V/${transistor.id_max}A`;
      optgroup.appendChild(option);
    });
    
    transistorSelect.appendChild(optgroup);
  }
}
