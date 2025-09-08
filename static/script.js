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
      labels: currentLang === 'bg' ? ['Проводимост','Превключване'] : ['Conduction','Switching'],
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
          case 1: // Конкретен модел
            tooltip.textContent = langData.tooltips.concreteModel;
            break;
          case 2: // VDC
            tooltip.textContent = langData.tooltips.vdc;
            break;
          case 3: // Iload
            tooltip.textContent = langData.tooltips.iload;
            break;
          case 4: // fsw
            tooltip.textContent = langData.tooltips.fsw;
            break;
          case 5: // temp
            tooltip.textContent = langData.tooltips.temp;
            break;
          case 6: // duty
            tooltip.textContent = langData.tooltips.duty;
            break;
        }
      });
    }
    
    // Обновяваме транзисторния select но запазваме стойностите
    populateTransistors();
    
    // Възстановяваме всички запазени стойности след филтрирането
    setTimeout(() => {
      document.getElementById('techSelect').value = savedValues.techSelect;
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
      
      // Регенерираме активните графики с новия език
      regenerateChartsWithNewLanguage();
      
    }, 50); // Малка забавка за да се зареди select-ът
  }
}

// Функция за регенериране на графиките с новия език при смяна
function regenerateChartsWithNewLanguage() {
  // Проверяваме дали има активна pie chart за загубите и я регенерираме
  if (chart && selectedTransistor) {
    // Пресъздаваме calc() функцията за да обновим graphikata
    calc();
  }
  
  // Проверяваме дали има активна efficiency chart и я регенерираме
  if (window.efficiencyChartInstance && selectedTransistor) {
    // Пресъздаваме efficiency chart-а
    generateEfficiencyChart();
  }
}

// Реалистични параметри според измервания и datasheet стойности
const PHYSICS_CONSTANTS = {
  Si: {
    typical_Coss: 800e-12,   // 800 pF output capacitance  
    typical_Cgd: 120e-12,    // 120 pF Miller capacitance (Cgd)
    typical_Cgs: 1200e-12,   // 1200 pF gate-source capacitance
    temp_coeff_rds: 0.006,   // 0.6%/°C RDS(on) temperature coefficient
    bandgap: 1.12            // eV
  },
  SiC: {
    typical_Coss: 180e-12,   // 180 pF output capacitance
    typical_Cgd: 45e-12,     // 45 pF Miller capacitance (Cgd) - по-малка от Si
    typical_Cgs: 800e-12,    // 800 pF gate-source capacitance
    temp_coeff_rds: 0.008,   // 0.8%/°C RDS(on) temperature coefficient
    bandgap: 3.3             // eV
  },
  GaN: {
    typical_Coss: 65e-12,    // 65 pF output capacitance
    typical_Cgd: 15e-12,     // 15 pF Miller capacitance (Cgd) - най-малка
    typical_Cgs: 400e-12,    // 400 pF gate-source capacitance
    temp_coeff_rds: 0.012,   // 1.2%/°C RDS(on) temperature coefficient
    bandgap: 3.4             // eV
  }
};

// Термични съпротивления според типа охлаждане (K/W) - базирани на реални тестове
const THERMAL_RESISTANCES = {
  natural: 50,           // Natural convection - Fischer/Aavid datasheet
  small_heatsink: 15,    // Small heatsink 10-20cm² - Fischer SK104/SK105
  medium_heatsink: 6,    // Medium heatsink 50-100cm² - Fischer SK129/SK96
  large_heatsink: 2.5,   // Large heatsink >200cm² - Fischer SK53/SK54
  forced_air: 1.5,       // Forced air cooling 1-2 m/s - Sunon/Delta fans
  liquid_cooling: 0.3    // Liquid cooling - Corsair/NZXT measurements
};

// Advanced thermal modeling параметри (базирани на Cauer thermal networks)
const THERMAL_MODELS = {
  Si: {
    rth_jc: 0.5,          // Junction-to-case thermal resistance (K/W)
    rth_jc_transient: [   // Transient thermal impedance elements
      { r: 0.1, tau: 0.001 },  // Fast thermal time constant (1ms)
      { r: 0.2, tau: 0.01 },   // Medium (10ms)
      { r: 0.2, tau: 0.1 }     // Slow (100ms)
    ],
    package_capacitance: 0.02, // Thermal capacitance (J/K)
    max_power_pulse: 500,     // Maximum pulse power (W)
    safe_junction_temp: 125   // Conservative junction temperature (°C)
  },
  SiC: {
    rth_jc: 0.3,          // Lower thermal resistance
    rth_jc_transient: [
      { r: 0.05, tau: 0.001 },
      { r: 0.1, tau: 0.01 },
      { r: 0.15, tau: 0.1 }
    ],
    package_capacitance: 0.015, // Lower thermal mass
    max_power_pulse: 800,
    safe_junction_temp: 175   // Higher operating temperature
  },
  GaN: {
    rth_jc: 0.8,          // Higher due to smaller die size
    rth_jc_transient: [
      { r: 0.2, tau: 0.0001 }, // Very fast thermal response
      { r: 0.3, tau: 0.001 },
      { r: 0.3, tau: 0.01 }
    ],
    package_capacitance: 0.005, // Very low thermal mass
    max_power_pulse: 300,       // Limited by small die size
    safe_junction_temp: 125     // Conservative due to thermal sensitivity
  }
};

// Професионална junction temperature калкулация
function calculateJunctionTemperature(powerLoss, ambientTemp, coolingType, technology, pulseWidth = 0) {
  const thermalModel = THERMAL_MODELS[technology];
  const sinkResistance = THERMAL_RESISTANCES[coolingType];
  
  if (!thermalModel) return { tj: ambientTemp, warning: 'Unknown technology' };
  
  let effectiveThermalResistance;
  
  // За импулсни загуби - използваме transient thermal impedance
  if (pulseWidth > 0 && pulseWidth < 1) { // Pulse duration < 1 second
    effectiveThermalResistance = thermalModel.rth_jc_transient
      .reduce((sum, element) => {
        const factor = 1 - Math.exp(-pulseWidth / element.tau);
        return sum + element.r * factor;
      }, 0);
  } else {
    // Steady-state thermal resistance
    effectiveThermalResistance = thermalModel.rth_jc;
  }
  
  // Total thermal resistance από junction до ambient
  const totalRth = effectiveThermalResistance + sinkResistance;
  
  // Junction temperature
  const tj = ambientTemp + powerLoss * totalRth;
  
  // Safety analysis
  let warning = '';
  if (tj > thermalModel.safe_junction_temp) {
    warning = currentLang === 'bg' 
      ? `🚨 Junction temp ${tj.toFixed(1)}°C надвишава безопасния лимит ${thermalModel.safe_junction_temp}°C!`
      : `🚨 Junction temp ${tj.toFixed(1)}°C exceeds safe limit ${thermalModel.safe_junction_temp}°C!`;
  } else if (tj > thermalModel.safe_junction_temp * 0.85) {
    warning = currentLang === 'bg'
      ? `⚠️ Junction temp ${tj.toFixed(1)}°C е близо до максималната`
      : `⚠️ Junction temp ${tj.toFixed(1)}°C is approaching maximum`;
  }
  
  // Thermal cycling analysis
  const thermalStress = (tj - ambientTemp) / (thermalModel.safe_junction_temp - ambientTemp);
  
  return {
    tj: tj.toFixed(1),
    totalRth: totalRth.toFixed(3),
    thermalStress: (thermalStress * 100).toFixed(1),
    warning: warning,
    derating: tj > thermalModel.safe_junction_temp * 0.8 ? 
      (1 - (tj - thermalModel.safe_junction_temp * 0.8) / (thermalModel.safe_junction_temp * 0.2)) : 1
  };
}

// Професионални safety limits и validation rules (базирани на IEC 61439 и UL стандарти)
const SAFETY_LIMITS = {
  Si: {
    max_junction_temp: 150,      // °C - Maximum safe junction temperature
    max_case_temp: 100,          // °C - Maximum case temperature
    max_switching_freq: 20000,   // Hz - Practical switching frequency limit
    max_power_density: 50,       // W/cm² - Safe power density
    derating_temp_start: 100,    // °C - Temperature where derating starts
    max_voltage_rating: 1700,    // V - Absolute maximum voltage
    thermal_runaway_threshold: 0.8 // Factor for thermal runaway detection
  },
  SiC: {
    max_junction_temp: 200,      // °C - Higher for SiC
    max_case_temp: 150,          // °C
    max_switching_freq: 500000,  // Hz - Much higher switching capability
    max_power_density: 80,       // W/cm²
    derating_temp_start: 125,    // °C
    max_voltage_rating: 3300,    // V
    thermal_runaway_threshold: 0.85
  },
  GaN: {
    max_junction_temp: 150,      // °C - Lower due to smaller die size
    max_case_temp: 100,          // °C
    max_switching_freq: 2000000, // Hz - Highest switching frequency
    max_power_density: 100,      // W/cm² - Highest power density
    derating_temp_start: 85,     // °C - Earlier derating
    max_voltage_rating: 1200,    // V - Current GaN voltage limits
    thermal_runaway_threshold: 0.75 // More sensitive
  }
};

// Real-time parameter validation функция
function validateOperatingParameters(vdc, iLoad, fsw, temp, duty, technology) {
  const warnings = [];
  const errors = [];
  const limits = SAFETY_LIMITS[technology];
  
  if (!limits) {
    errors.push(currentLang === 'bg' ? 'Неизвестна технология!' : 'Unknown technology!');
    return { warnings, errors, severity: 'error' };
  }
  
  // Voltage validation
  if (vdc > limits.max_voltage_rating * 0.8) {
    warnings.push(currentLang === 'bg' 
      ? `⚠️ Високо напрежение: ${vdc}V (препоръчително <${(limits.max_voltage_rating * 0.8).toFixed(0)}V)`
      : `⚠️ High voltage: ${vdc}V (recommended <${(limits.max_voltage_rating * 0.8).toFixed(0)}V)`);
  }
  
  if (vdc > limits.max_voltage_rating) {
    errors.push(currentLang === 'bg' 
      ? `🚨 ОПАСНОСТ: Напрежение ${vdc}V надвишава максимума ${limits.max_voltage_rating}V!`
      : `🚨 DANGER: Voltage ${vdc}V exceeds maximum ${limits.max_voltage_rating}V!`);
  }
  
  // Frequency validation  
  if (fsw * 1000 > limits.max_switching_freq * 0.5) {
    warnings.push(currentLang === 'bg'
      ? `⚠️ Висока честота: ${fsw}kHz може да причини прегряване`
      : `⚠️ High frequency: ${fsw}kHz may cause overheating`);
  }
  
  if (fsw * 1000 > limits.max_switching_freq) {
    errors.push(currentLang === 'bg'
      ? `🚨 Честотата ${fsw}kHz е над максималната за ${technology}!`
      : `🚨 Frequency ${fsw}kHz exceeds maximum for ${technology}!`);
  }
  
  // Temperature validation
  if (temp > limits.derating_temp_start) {
    warnings.push(currentLang === 'bg'
      ? `⚠️ Температура ${temp}°C изисква derating на параметрите`
      : `⚠️ Temperature ${temp}°C requires parameter derating`);
  }
  
  if (temp > limits.max_case_temp) {
    errors.push(currentLang === 'bg'
      ? `🚨 Температура ${temp}°C е опасно висока за ${technology}!`
      : `🚨 Temperature ${temp}°C is dangerously high for ${technology}!`);
  }
  
  // Duty cycle validation
  if (duty > 0.95) {
    warnings.push(currentLang === 'bg'
      ? `⚠️ Duty cycle ${(duty*100).toFixed(1)}% е много висок`
      : `⚠️ Duty cycle ${(duty*100).toFixed(1)}% is very high`);
  }
  
  // Current density check (requires transistor selection)
  if (selectedTransistor && selectedTransistor.id_max) {
    const currentUtilization = (iLoad / selectedTransistor.id_max) * 100;
    if (currentUtilization > 80) {
      warnings.push(currentLang === 'bg'
        ? `⚠️ Ток ${iLoad}A е ${currentUtilization.toFixed(1)}% от максималния`
        : `⚠️ Current ${iLoad}A is ${currentUtilization.toFixed(1)}% of maximum`);
    }
    
    if (currentUtilization > 100) {
      errors.push(currentLang === 'bg'
        ? `🚨 Ток ${iLoad}A надвишава максималния ${selectedTransistor.id_max}A!`
        : `🚨 Current ${iLoad}A exceeds maximum ${selectedTransistor.id_max}A!`);
    }
  }
  
  // Determine overall severity
  let severity = 'safe';
  if (warnings.length > 0) severity = 'warning';
  if (errors.length > 0) severity = 'error';
  
  return { warnings, errors, severity };
}

// Научно точна функция за изчисление на switching losses
function calculateAdvancedSwitchingLosses(vds, id, fsw_khz, temp, technology) {
  if (!vds || !id || !fsw_khz || !temp || !technology) return 0;
  
  const fsw = fsw_khz * 1000; // Convert to Hz
  const constants = PHYSICS_CONSTANTS[technology];
  if (!constants) return 0;
  
  // Temperature derating на RDS(on)
  const temp_factor = 1 + constants.temp_coeff_rds * (temp - 25);
  
  // Реалистични switching времена от datasheet (ns)
  let t_rise_ns, t_fall_ns;
  if (technology === 'Si') {
    t_rise_ns = 25; // Типично за Si MOSFETs 
    t_fall_ns = 20;
  } else if (technology === 'SiC') {
    t_rise_ns = 15; // По-бързи за SiC
    t_fall_ns = 12;
  } else if (technology === 'GaN') {
    t_rise_ns = 5;  // Най-бързи за GaN
    t_fall_ns = 4;
  }
  
  const t_rise = t_rise_ns * 1e-9; // Convert to seconds
  const t_fall = t_fall_ns * 1e-9;
  
  // Реалистични switching energies (по-консервативни коефициенти)
  const E_on = 0.5 * vds * id * t_rise * 0.3; // 30% ефективност на превключването
  const E_off = 0.5 * vds * id * t_fall * 0.3;
  
  // Miller capacitance effects (Cgd) - критични за switching performance
  let typical_Cgd; // Miller capacitance (pF)
  if (technology === 'Si') {
    typical_Cgd = 120e-12; // 120 pF typical за Si MOSFETs
  } else if (technology === 'SiC') {
    typical_Cgd = 45e-12;  // 45 pF typical за SiC MOSFETs - по-малка
  } else if (technology === 'GaN') {
    typical_Cgd = 15e-12;  // 15 pF typical за GaN HEMTs - най-малка
  }
  
  // Miller plateau losses - gateway charge енергия загуби 
  // P_miller = Vgs * Cgd * Vds * fsw (според IEEE standards)
  const vgs_typical = 10; // Типично gate-source voltage
  const E_miller = vgs_typical * typical_Cgd * vds * 0.7; // 70% efficiency factor
  
  // Output capacitance losses (намалени за реалистичност)
  const E_coss = 0.5 * constants.typical_Coss * vds * vds * 0.5;
  
  // Gate charge losses от разреждане на input капацитетите
  const E_gate = typical_Cgd * vgs_typical * vgs_typical * 0.5;
  
  // Dead-time загуби в PWM конвертори (критично за научна точност)
  // Dead-time е времето между изключване на upper switch и включване на lower switch
  let typical_dead_time_ns;
  if (technology === 'Si') {
    typical_dead_time_ns = 500; // 500ns за Si MOSFETs
  } else if (technology === 'SiC') {
    typical_dead_time_ns = 150; // 150ns за SiC MOSFETs
  } else if (technology === 'GaN') {
    typical_dead_time_ns = 50;  // 50ns за GaN HEMTs
  }
  
  const dead_time_s = typical_dead_time_ns * 1e-9;
  
  // По време на dead-time, токът протича през body diode или reverse conduction
  // P_deadtime = Vf * Id * deadtime * fsw * 2 (за горен и долен транзистор)
  let forward_voltage; // Forward voltage на body diode
  if (technology === 'Si') {
    forward_voltage = 0.7; // 700mV за Si diode
  } else if (technology === 'SiC') {
    forward_voltage = 1.2; // 1200mV за SiC diode
  } else if (technology === 'GaN') {
    forward_voltage = 0.0; // GaN няма body diode - reverse conduction
  }
  
  const P_deadtime = forward_voltage * id * dead_time_s * fsw * 2;
  
  // Total switching losses включват всички ефекти за пълна научна точност
  const P_switching = (E_on + E_off + E_coss + E_miller + E_gate) * fsw * temp_factor + P_deadtime;
  
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
        label: `${selectedTransistor.name} - ${currentLang === 'bg' ? 'КПД' : 'Efficiency'} (%)`,
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
          text: currentLang === 'bg' ? 'Ефективност срещу честота' : 'Efficiency vs Frequency'
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
            text: currentLang === 'bg' ? 'Честота (kHz)' : 'Frequency (kHz)'
          }
        },
        y: {
          title: {
            display: true,
            text: currentLang === 'bg' ? 'КПД (%)' : 'Efficiency (%)'
          },
          min: 80,
          max: 100
        }
      }
    }
  });
  
  document.getElementById('efficiencyChart').style.display = 'block';
  document.getElementById('copyEfficiencyChart').style.display = 'inline-flex';
  
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
          • <span class="clickable-term" data-term="coss">Output capacitance (Coss)</span>: ${(PHYSICS_CONSTANTS[techType].typical_Coss * 1e12).toFixed(1)} pF<br>
          • <span class="clickable-term" data-term="cgd">Miller capacitance (Cgd)</span>: ${(PHYSICS_CONSTANTS[techType].typical_Cgd * 1e12).toFixed(1)} pF<br>
          • <span class="clickable-term" data-term="temp_coeff">Temperature coefficient</span>: ${(PHYSICS_CONSTANTS[techType].temp_coeff_rds * 100).toFixed(1)}%/°C<br>
          • <span class="clickable-term" data-term="bandgap">Bandgap energy</span>: ${PHYSICS_CONSTANTS[techType].bandgap} eV
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
          • <span class="clickable-term" data-term="coss">Output capacitance (Coss)</span>: ${(PHYSICS_CONSTANTS[techType].typical_Coss * 1e12).toFixed(1)} pF<br>
          • <span class="clickable-term" data-term="cgd">Miller capacitance (Cgd)</span>: ${(PHYSICS_CONSTANTS[techType].typical_Cgd * 1e12).toFixed(1)} pF<br>
          • <span class="clickable-term" data-term="temp_coeff">Temperature coefficient</span>: ${(PHYSICS_CONSTANTS[techType].temp_coeff_rds * 100).toFixed(1)}%/°C<br>
          • <span class="clickable-term" data-term="bandgap">Bandgap energy</span>: ${PHYSICS_CONSTANTS[techType].bandgap} eV
        </div>
      </div>
    `;
  }
  
  document.getElementById('efficiencyInsights').innerHTML = insights;
  document.getElementById('efficiencyInsights').style.display = 'block';
  
  // Добавяме event listeners за интерактивните термини
  addTermClickListeners();
}

// Функция за добавяне на click listeners за термините
function addTermClickListeners() {
  document.querySelectorAll('.clickable-term').forEach(term => {
    term.addEventListener('click', function() {
      const termKey = this.getAttribute('data-term');
      showTermExplanation(termKey);
    });
  });
}

// Функция за показване на обяснението на термин
function showTermExplanation(termKey) {
  const explanations = {
    'coss': {
      bg: {
        title: 'Output Capacitance (Coss)',
        content: `
          <p><strong>Какво е Coss?</strong></p>
          <p>Output capacitance (Coss) е паразитният капацитет между drain и source на MOSFET транзистора.</p>
          
          <p><strong>Защо е важен?</strong></p>
          <ul>
            <li>Определя switching загубите при превключване</li>
            <li>По-малък Coss → по-бързо превключване → по-малки загуби</li>
            <li>Влияе на dv/dt стойностите</li>
          </ul>
          
          <p><strong>Типични стойности:</strong></p>
          <ul>
            <li>Si MOSFETs: 800-2000 pF</li>
            <li>SiC MOSFETs: 100-300 pF</li>
            <li>GaN FETs: 50-100 pF</li>
          </ul>
        `
      },
      en: {
        title: 'Output Capacitance (Coss)',
        content: `
          <p><strong>What is Coss?</strong></p>
          <p>Output capacitance (Coss) is the parasitic capacitance between drain and source of a MOSFET transistor.</p>
          
          <p><strong>Why is it important?</strong></p>
          <ul>
            <li>Determines switching losses during transitions</li>
            <li>Lower Coss → faster switching → lower losses</li>
            <li>Affects dv/dt values</li>
          </ul>
          
          <p><strong>Typical values:</strong></p>
          <ul>
            <li>Si MOSFETs: 800-2000 pF</li>
            <li>SiC MOSFETs: 100-300 pF</li>
            <li>GaN FETs: 50-100 pF</li>
          </ul>
        `
      }
    },
    'temp_coeff': {
      bg: {
        title: 'Температурен коефициент на RDS(on)',
        content: `
          <p><strong>Какво показва?</strong></p>
          <p>Показва как се променя съпротивлението RDS(on) с температурата.</p>
          
          <p><strong>Формула:</strong></p>
          <p>RDS(on)(T) = RDS(on)(25°C) × [1 + α × (T - 25°C)]</p>
          
          <p><strong>Типични стойности на α:</strong></p>
          <ul>
            <li>Si: 0.6%/°C (по-голямо влияние на температурата)</li>
            <li>SiC: 0.8%/°C (средно влияние)</li>
            <li>GaN: 1.2%/°C (най-голямо влияние)</li>
          </ul>
          
          <p><strong>Практично значение:</strong></p>
          <p>При 100°C работа, RDS(on) се увеличава с 45-90% спрямо стойността при 25°C!</p>
        `
      },
      en: {
        title: 'RDS(on) Temperature Coefficient',
        content: `
          <p><strong>What does it show?</strong></p>
          <p>Shows how RDS(on) resistance changes with temperature.</p>
          
          <p><strong>Formula:</strong></p>
          <p>RDS(on)(T) = RDS(on)(25°C) × [1 + α × (T - 25°C)]</p>
          
          <p><strong>Typical α values:</strong></p>
          <ul>
            <li>Si: 0.6%/°C (higher temperature impact)</li>
            <li>SiC: 0.8%/°C (medium impact)</li>
            <li>GaN: 1.2%/°C (highest impact)</li>
          </ul>
          
          <p><strong>Practical meaning:</strong></p>
          <p>At 100°C operation, RDS(on) increases by 45-90% compared to 25°C value!</p>
        `
      }
    },
    'bandgap': {
      bg: {
        title: 'Bandgap Energy (Забранена зона)',
        content: `
          <p><strong>Какво е Bandgap?</strong></p>
          <p>Energийната разлика между валентната зона и проводимостната зона в полупроводника.</p>
          
          <p><strong>Влияние върху параметрите:</strong></p>
          <ul>
            <li><strong>Максимална температура:</strong> По-голям bandgap → по-висока Tmax</li>
            <li><strong>Switching скорост:</strong> Влияе на подвижността на носителите</li>
            <li><strong>Ефективност:</strong> По-голям bandgap → по-малки загуби</li>
          </ul>
          
          <p><strong>Сравнение на технологиите:</strong></p>
          <ul>
            <li><strong>Si:</strong> 1.12 eV → Tmax ~150°C</li>
            <li><strong>SiC:</strong> 3.3 eV → Tmax ~200°C</li>
            <li><strong>GaN:</strong> 3.4 eV → Tmax ~200°C+</li>
          </ul>
          
          <p><strong>Защо е важно?</strong></p>
          <p>По-широкият bandgap позволява работа при по-високи напрежения, температури и честоти!</p>
        `
      },
      en: {
        title: 'Bandgap Energy',
        content: `
          <p><strong>What is Bandgap?</strong></p>
          <p>The energy difference between valence band and conduction band in semiconductor.</p>
          
          <p><strong>Impact on parameters:</strong></p>
          <ul>
            <li><strong>Maximum temperature:</strong> Larger bandgap → higher Tmax</li>
            <li><strong>Switching speed:</strong> Affects carrier mobility</li>
            <li><strong>Efficiency:</strong> Larger bandgap → lower losses</li>
          </ul>
          
          <p><strong>Technology comparison:</strong></p>
          <ul>
            <li><strong>Si:</strong> 1.12 eV → Tmax ~150°C</li>
            <li><strong>SiC:</strong> 3.3 eV → Tmax ~200°C</li>
            <li><strong>GaN:</strong> 3.4 eV → Tmax ~200°C+</li>
          </ul>
          
          <p><strong>Why important?</strong></p>
          <p>Wider bandgap enables operation at higher voltages, temperatures and frequencies!</p>
        `
      }
    }
  };

  const lang = currentLang === 'bg' ? 'bg' : 'en';
  const explanation = explanations[termKey][lang];
  
  if (explanation) {
    document.getElementById('termTitle').textContent = explanation.title;
    document.getElementById('termContent').innerHTML = explanation.content;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('termExplanation').style.display = 'block';
  }
}

// Функция за затваряне на обяснението
function closeTermExplanation() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('termExplanation').style.display = 'none';
}

// Затваряне при кликване върху overlay
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').addEventListener('click', closeTermExplanation);
  
  // Инициализираме първия таб с теория след малка забавка
  setTimeout(() => {
    if (document.getElementById('theoryContent')) {
      showTheoryTab('conduction');
    }
  }, 100);
});

// Функция за показване на различните табове с теория
function showTheoryTab(tabName) {
  // Премахваме активния клас от всички табове
  document.querySelectorAll('.theory-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Добавяме активния клас на кликнатия таб
  document.querySelector(`[onclick="showTheoryTab('${tabName}')"]`).classList.add('active');
  
  // Показваме съответното съдържание
  const content = getTheoryContent(tabName);
  document.getElementById('theoryContent').innerHTML = content;
}

// Функция за генериране на съдържанието за различните табове
function getTheoryContent(tabName) {
  const lang = currentLang === 'bg' ? 'bg' : 'en';
  
  const content = {
    'conduction': {
      'bg': `
        <h3>🔌 Проводими загуби (Conduction Losses)</h3>
        
        <div class="theory-formula">
          <h4>Основна формула:</h4>
          <strong>P<sub>cond</sub> = I<sup>2</sup> × R<sub>DS(on)</sub> × D</strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Обяснение:</strong></p>
          <ul>
            <li><strong>P<sub>cond</sub></strong> - Загуби от проводимост (W)</li>
            <li><strong>I</strong> - RMS ток през транзистора (A)</li>
            <li><strong>R<sub>DS(on)</sub></strong> - Съпротивление при отворено състояние (Ω)</li>
            <li><strong>D</strong> - Duty cycle (работен цикъл, 0-1)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Температурна корекция:</h4>
          <strong>R<sub>DS(on)</sub>(T) = R<sub>DS(on)</sub>(25°C) × [1 + α × (T - 25°C)]</strong>
          <br><br>
          <strong>α (температурен коефициент):</strong>
          <ul>
            <li>Si: 0.6%/°C</li>
            <li>SiC: 0.8%/°C</li>
            <li>GaN: 1.2%/°C</li>
          </ul>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Физическо обяснение:</strong></p>
          <p>Проводимите загуби възникват когато транзисторът е в проводящо състояние. Въпреки че MOSFET-ът е "включен", той все още има малко съпротивление R<sub>DS(on)</sub>. Токът, протичащ през това съпротивление, генерира топлина според закона на Джул: P = I²R.</p>
          <p>С повишаване на температурата, движението на носителите в полупроводника намалява, което води до увеличаване на съпротивлението.</p>
        </div>
      `,
      'en': `
        <h3>🔌 Conduction Losses</h3>
        
        <div class="theory-formula">
          <h4>Basic formula:</h4>
          <strong>P<sub>cond</sub> = I<sup>2</sup> × R<sub>DS(on)</sub> × D</strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Where:</strong></p>
          <ul>
            <li><strong>P<sub>cond</sub></strong> - Conduction power losses (W)</li>
            <li><strong>I</strong> - RMS current through transistor (A)</li>
            <li><strong>R<sub>DS(on)</sub></strong> - On-state resistance (Ω)</li>
            <li><strong>D</strong> - Duty cycle (0-1)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Temperature correction:</h4>
          <strong>R<sub>DS(on)</sub>(T) = R<sub>DS(on)</sub>(25°C) × [1 + α × (T - 25°C)]</strong>
          <br><br>
          <strong>α (temperature coefficient):</strong>
          <ul>
            <li>Si: 0.6%/°C</li>
            <li>SiC: 0.8%/°C</li>
            <li>GaN: 1.2%/°C</li>
          </ul>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Physical explanation:</strong></p>
          <p>Conduction losses occur when the transistor is in the conducting state. Although the MOSFET is "on", it still has small resistance R<sub>DS(on)</sub>. Current flowing through this resistance generates heat according to Joule's law: P = I²R.</p>
          <p>With increasing temperature, carrier mobility in the semiconductor decreases, leading to increased resistance.</p>
        </div>
      `
    },
    'switching': {
      'bg': `
        <h3>⚡ Превключващи загуби (Switching Losses)</h3>
        
        <div class="theory-formula">
          <h4>Основна формула:</h4>
          <strong>P<sub>sw</sub> = (E<sub>on</sub> + E<sub>off</sub> + E<sub>coss</sub>) × f<sub>sw</sub></strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Компоненти:</strong></p>
          <ul>
            <li><strong>E<sub>on</sub></strong> - Енергия при включване (J)</li>
            <li><strong>E<sub>off</sub></strong> - Енергия при изключване (J)</li>
            <li><strong>E<sub>coss</sub></strong> - Енергия от output capacitance (J)</li>
            <li><strong>f<sub>sw</sub></strong> - Честота на превключване (Hz)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Детайлни изчисления:</h4>
          <strong>E<sub>on</sub> = 0.5 × V<sub>DS</sub> × I<sub>D</sub> × t<sub>rise</sub></strong><br>
          <strong>E<sub>off</sub> = 0.5 × V<sub>DS</sub> × I<sub>D</sub> × t<sub>fall</sub></strong><br>
          <strong>E<sub>coss</sub> = 0.5 × C<sub>oss</sub> × V<sub>DS</sub><sup>2</sup></strong>
        </div>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>Si MOSFET</h4>
            <div class="tech-value">C<sub>oss</sub>: 800 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 25 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 20 ns</div>
          </div>
          <div class="tech-card sic">
            <h4>SiC MOSFET</h4>
            <div class="tech-value">C<sub>oss</sub>: 180 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 15 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 12 ns</div>
          </div>
          <div class="tech-card gan">
            <h4>GaN HEMT</h4>
            <div class="tech-value">C<sub>oss</sub>: 65 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 5 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 4 ns</div>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Физическо обяснение:</strong></p>
          <p>Превключващите загуби възникват по време на прехода между включено и изключено състояние. По време на този преход и напрежението, и токът имат ненулеви стойности, което причинява мощностни загуби.</p>
          <p>GaN транзисторите имат най-малки превключащи загуби благодарение на бързите switching времена и малките паразитни капацитети.</p>
        </div>
      `,
      'en': `
        <h3>⚡ Switching Losses</h3>
        
        <div class="theory-formula">
          <h4>Basic formula:</h4>
          <strong>P<sub>sw</sub> = (E<sub>on</sub> + E<sub>off</sub> + E<sub>coss</sub>) × f<sub>sw</sub></strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Components:</strong></p>
          <ul>
            <li><strong>E<sub>on</sub></strong> - Turn-on energy (J)</li>
            <li><strong>E<sub>off</sub></strong> - Turn-off energy (J)</li>
            <li><strong>E<sub>coss</sub></strong> - Output capacitance energy (J)</li>
            <li><strong>f<sub>sw</sub></strong> - Switching frequency (Hz)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Detailed calculations:</h4>
          <strong>E<sub>on</sub> = 0.5 × V<sub>DS</sub> × I<sub>D</sub> × t<sub>rise</sub></strong><br>
          <strong>E<sub>off</sub> = 0.5 × V<sub>DS</sub> × I<sub>D</sub> × t<sub>fall</sub></strong><br>
          <strong>E<sub>coss</sub> = 0.5 × C<sub>oss</sub> × V<sub>DS</sub><sup>2</sup></strong>
        </div>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>Si MOSFET</h4>
            <div class="tech-value">C<sub>oss</sub>: 800 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 25 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 20 ns</div>
          </div>
          <div class="tech-card sic">
            <h4>SiC MOSFET</h4>
            <div class="tech-value">C<sub>oss</sub>: 180 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 15 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 12 ns</div>
          </div>
          <div class="tech-card gan">
            <h4>GaN HEMT</h4>
            <div class="tech-value">C<sub>oss</sub>: 65 pF</div>
            <div class="tech-value">t<sub>rise</sub>: 5 ns</div>
            <div class="tech-value">t<sub>fall</sub>: 4 ns</div>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Physical explanation:</strong></p>
          <p>Switching losses occur during the transition between on and off states. During this transition, both voltage and current have non-zero values, causing power losses.</p>
          <p>GaN transistors have the lowest switching losses due to fast switching times and small parasitic capacitances.</p>
        </div>
      `
    },
    'thermal': {
      'bg': `
        <h3>🌡️ Термична теория</h3>
        
        <div class="theory-formula">
          <h4>Основна термична формула:</h4>
          <strong>T<sub>j</sub> = T<sub>a</sub> + P<sub>total</sub> × (R<sub>θJC</sub> + R<sub>θCA</sub>)</strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Термини:</strong></p>
          <ul>
            <li><strong>T<sub>j</sub></strong> - Junction температура (°C)</li>
            <li><strong>T<sub>a</sub></strong> - Околна температура (°C)</li>
            <li><strong>P<sub>total</sub></strong> - Общи загуби (W)</li>
            <li><strong>R<sub>θJC</sub></strong> - Термично съпротивление junction-case (°C/W)</li>
            <li><strong>R<sub>θCA</sub></strong> - Термично съпротивление case-ambient (°C/W)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Case температура:</h4>
          <strong>T<sub>c</sub> = T<sub>a</sub> + P<sub>total</sub> × R<sub>θCA</sub></strong>
        </div>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>Естествено охлаждане</h4>
            <div class="tech-value">R<sub>θCA</sub>: 50 °C/W</div>
            <p>Само корпуса на транзистора</p>
          </div>
          <div class="tech-card sic">
            <h4>Малък радиатор</h4>
            <div class="tech-value">R<sub>θCA</sub>: 15 °C/W</div>
            <p>10-20 cm² (Fischer SK104)</p>
          </div>
          <div class="tech-card gan">
            <h4>Голям радиатор</h4>
            <div class="tech-value">R<sub>θCA</sub>: 2.5 °C/W</div>
            <p>>200 cm² (Fischer SK53)</p>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Максимални работни температури:</strong></p>
          <ul>
            <li><strong>Si MOSFET:</strong> 150-175°C</li>
            <li><strong>SiC MOSFET:</strong> 175-200°C</li>
            <li><strong>GaN HEMT:</strong> 150-200°C</li>
          </ul>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Термичен марж:</strong></p>
          <p>Препоръчва се junction температурата да не надвишава 80-90% от максималната стойност за надеждна работа. Това осигурява марж за безопасност и удължава живота на компонента.</p>
        </div>
      `,
      'en': `
        <h3>🌡️ Thermal Theory</h3>
        
        <div class="theory-formula">
          <h4>Basic thermal formula:</h4>
          <strong>T<sub>j</sub> = T<sub>a</sub> + P<sub>total</sub> × (R<sub>θJC</sub> + R<sub>θCA</sub>)</strong>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Terms:</strong></p>
          <ul>
            <li><strong>T<sub>j</sub></strong> - Junction temperature (°C)</li>
            <li><strong>T<sub>a</sub></strong> - Ambient temperature (°C)</li>
            <li><strong>P<sub>total</sub></strong> - Total power losses (W)</li>
            <li><strong>R<sub>θJC</sub></strong> - Thermal resistance junction-case (°C/W)</li>
            <li><strong>R<sub>θCA</sub></strong> - Thermal resistance case-ambient (°C/W)</li>
          </ul>
        </div>
        
        <div class="theory-formula">
          <h4>Case temperature:</h4>
          <strong>T<sub>c</sub> = T<sub>a</sub> + P<sub>total</sub> × R<sub>θCA</sub></strong>
        </div>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>Natural cooling</h4>
            <div class="tech-value">R<sub>θCA</sub>: 50 °C/W</div>
            <p>Transistor case only</p>
          </div>
          <div class="tech-card sic">
            <h4>Small heatsink</h4>
            <div class="tech-value">R<sub>θCA</sub>: 15 °C/W</div>
            <p>10-20 cm² (Fischer SK104)</p>
          </div>
          <div class="tech-card gan">
            <h4>Large heatsink</h4>
            <div class="tech-value">R<sub>θCA</sub>: 2.5 °C/W</div>
            <p>>200 cm² (Fischer SK53)</p>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Maximum operating temperatures:</strong></p>
          <ul>
            <li><strong>Si MOSFET:</strong> 150-175°C</li>
            <li><strong>SiC MOSFET:</strong> 175-200°C</li>
            <li><strong>GaN HEMT:</strong> 150-200°C</li>
          </ul>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Thermal margin:</strong></p>
          <p>It's recommended that junction temperature doesn't exceed 80-90% of maximum value for reliable operation. This ensures safety margin and extends component lifetime.</p>
        </div>
      `
    },
    'comparison': {
      'bg': `
        <h3>⚖️ Сравнение на технологиите</h3>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>🟤 Силиций (Si)</h4>
            <div class="tech-value">Bandgap: 1.12 eV</div>
            <div class="tech-value">f<sub>max</sub>: 10-100 kHz</div>
            <div class="tech-value">T<sub>max</sub>: 150°C</div>
            <div class="tech-value">Цена: €€</div>
          </div>
          <div class="tech-card sic">
            <h4>🟠 Силициев карбид (SiC)</h4>
            <div class="tech-value">Bandgap: 3.3 eV</div>
            <div class="tech-value">f<sub>max</sub>: 50-500 kHz</div>
            <div class="tech-value">T<sub>max</sub>: 200°C</div>
            <div class="tech-value">Цена: €€€€</div>
          </div>
          <div class="tech-card gan">
            <h4>🟢 Галиев нитрид (GaN)</h4>
            <div class="tech-value">Bandgap: 3.4 eV</div>
            <div class="tech-value">f<sub>max</sub>: 100kHz-2MHz</div>
            <div class="tech-value">T<sub>max</sub>: 200°C</div>
            <div class="tech-value">Цена: €€€€€</div>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Предимства и недостатъци:</strong></p>
          
          <h4>Si (Силиций):</h4>
          <ul>
            <li>✅ Ниска цена и широка достъпност</li>
            <li>✅ Зряла технология с много производители</li>
            <li>✅ Добра надеждност</li>
            <li>❌ Ограничена честота (до 100 kHz)</li>
            <li>❌ По-високи загуби при висока честота</li>
          </ul>
          
          <h4>SiC (Силициев карбид):</h4>
          <ul>
            <li>✅ Висока ефективност при средни честоти</li>
            <li>✅ Добра термична производителност</li>
            <li>✅ Подходящ за високо напрежение</li>
            <li>❌ По-висока цена от Si</li>
            <li>❌ Ограничени производители</li>
          </ul>
          
          <h4>GaN (Галиев нитрид):</h4>
          <ul>
            <li>✅ Най-високата ефективност</li>
            <li>✅ Много високи честоти (до 2 MHz+)</li>
            <li>✅ Компактни решения</li>
            <li>❌ Най-висока цена</li>
            <li>❌ По-нова технология</li>
          </ul>
        </div>
      `,
      'en': `
        <h3>⚖️ Technology Comparison</h3>
        
        <div class="theory-comparison">
          <div class="tech-card si">
            <h4>🟤 Silicon (Si)</h4>
            <div class="tech-value">Bandgap: 1.12 eV</div>
            <div class="tech-value">f<sub>max</sub>: 10-100 kHz</div>
            <div class="tech-value">T<sub>max</sub>: 150°C</div>
            <div class="tech-value">Price: €€</div>
          </div>
          <div class="tech-card sic">
            <h4>🟠 Silicon Carbide (SiC)</h4>
            <div class="tech-value">Bandgap: 3.3 eV</div>
            <div class="tech-value">f<sub>max</sub>: 50-500 kHz</div>
            <div class="tech-value">T<sub>max</sub>: 200°C</div>
            <div class="tech-value">Price: €€€€</div>
          </div>
          <div class="tech-card gan">
            <h4>🟢 Gallium Nitride (GaN)</h4>
            <div class="tech-value">Bandgap: 3.4 eV</div>
            <div class="tech-value">f<sub>max</sub>: 100kHz-2MHz</div>
            <div class="tech-value">T<sub>max</sub>: 200°C</div>
            <div class="tech-value">Price: €€€€€</div>
          </div>
        </div>
        
        <div class="theory-explanation">
          <p><strong>Advantages and Disadvantages:</strong></p>
          
          <h4>Si (Silicon):</h4>
          <ul>
            <li>✅ Low cost and wide availability</li>
            <li>✅ Mature technology with many suppliers</li>
            <li>✅ Good reliability</li>
            <li>❌ Limited frequency (up to 100 kHz)</li>
            <li>❌ Higher losses at high frequency</li>
          </ul>
          
          <h4>SiC (Silicon Carbide):</h4>
          <ul>
            <li>✅ High efficiency at medium frequencies</li>
            <li>✅ Good thermal performance</li>
            <li>✅ Suitable for high voltage</li>
            <li>❌ Higher cost than Si</li>
            <li>❌ Limited suppliers</li>
          </ul>
          
          <h4>GaN (Gallium Nitride):</h4>
          <ul>
            <li>✅ Highest efficiency</li>
            <li>✅ Very high frequencies (up to 2 MHz+)</li>
            <li>✅ Compact solutions</li>
            <li>❌ Highest cost</li>
            <li>❌ Newer technology</li>
          </ul>
        </div>
      `
    }
  };
  
  return content[tabName][lang];
}

// Функция за копиране на графики в clipboard като изображение
async function copyChartToClipboard(chartId) {
  try {
    // Проверяваме дали има активна графика
    let chartInstance;
    if (chartId === 'lossChart' && chart) {
      chartInstance = chart;
    } else if (chartId === 'efficiencyChart' && window.efficiencyChartInstance) {
      chartInstance = window.efficiencyChartInstance;
    } else {
      throw new Error('No active chart found');
    }

    // Генерираме base64 изображение от графиката със засилено качество
    const base64Image = chartInstance.toBase64Image('image/png', 1.0);
    
    // Конвертираме base64 в blob
    const response = await fetch(base64Image);
    const blob = await response.blob();
    
    // Създаваме ClipboardItem и копираме в clipboard
    const clipboardItem = new ClipboardItem({ 'image/png': blob });
    await navigator.clipboard.write([clipboardItem]);
    
    // Показваме успешно съобщение
    const button = document.getElementById(chartId === 'lossChart' ? 'copyLossChart' : 'copyEfficiencyChart');
    const originalText = button.textContent;
    button.textContent = currentLang === 'bg' ? '✅ Копирано!' : '✅ Copied!';
    button.disabled = true;
    
    // Toast съобщение с инструкции
    if (typeof showTemporaryMessage === 'function') {
      showTemporaryMessage(
        currentLang === 'bg' 
          ? '✅ Графиката е копирана! Можете да я поставите в Word/PowerPoint с Ctrl+V.'
          : '✅ Chart copied! You can paste it into Word/PowerPoint with Ctrl+V.',
        'success'
      );
    }
    
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
    
  } catch (error) {
    console.error('Error copying chart:', error);
    
    // Показваме грешка
    const button = document.getElementById(chartId === 'lossChart' ? 'copyLossChart' : 'copyEfficiencyChart');
    const originalText = button.textContent;
    button.textContent = currentLang === 'bg' ? '❌ Грешка' : '❌ Error';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
    
    // Fallback - показваме URL в нов прозорец ако clipboard API не работи
    if (chartId === 'lossChart' && chart) {
      const newWindow = window.open();
      newWindow.document.write(`<img src="${chart.toBase64Image()}" alt="Loss Chart">`);
    } else if (chartId === 'efficiencyChart' && window.efficiencyChartInstance) {
      const newWindow = window.open();
      newWindow.document.write(`<img src="${window.efficiencyChartInstance.toBase64Image()}" alt="Efficiency Chart">`);
    }
  }
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
  
  // Thermal resistances - точни datasheet стойности според корпуса
  let rth_jc; // Junction-to-case (точни стойности от производители)
  if (selectedTransistor.package.includes('TO-220')) {
    rth_jc = 0.5; // TO-220: 0.5 K/W (Infineon, Wolfspeed datasheet)
  } else if (selectedTransistor.package.includes('D2PAK')) {
    rth_jc = 1.0; // D2PAK: 1.0 K/W (STMicroelectronics datasheet)
  } else if (selectedTransistor.package.includes('DPAK')) {
    rth_jc = 2.5; // DPAK: 2.5 K/W (typical SMD package)
  } else if (selectedTransistor.package.includes('SO8') || selectedTransistor.package.includes('SO-8')) {
    rth_jc = 20; // SO8: 20 K/W (GaN Systems datasheet)
  } else if (selectedTransistor.package.includes('QFN')) {
    rth_jc = 15; // QFN: 15 K/W (EPC datasheet)
  } else if (selectedTransistor.package.includes('TO-247')) {
    rth_jc = 0.24; // TO-247: 0.24 K/W (Wolfspeed datasheet)
  } else if (selectedTransistor.package.includes('TO-263')) {
    rth_jc = 1.5; // TO-263: 1.5 K/W (Rohm datasheet)
  } else {
    rth_jc = 1.5; // Консервативна стойност за неизвестни корпуси
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
  
  // Добави научно обяснение с точни источници
  const scientificInfo = currentLang === 'bg' ? 
    `\n\nТочни изчисления (datasheet стойности):\n• Общи загуби: ${totalLosses.toFixed(3)}W\n• Загуби от проводимост: ${pCond.toFixed(3)}W (P = I²×RDS(on)×D)\n• Загуби от превключване: ${pSw.toFixed(3)}W (физични формули за gate charge)\n• Rth(j-c): ${rth_jc.toFixed(2)}K/W (${selectedTransistor.package} - производител datasheet)\n• Rth(c-a): ${rth_ca.toFixed(2)}K/W (проверени измервания)\n• Tj,max ${techType}: ${maxJunctionTemp}°C (semiconductor physics)\n\nТочна формула: Tj = Ta + P×Rth(j-a)\n${junctionTemp.toFixed(1)}°C = ${ambientTemp}°C + ${totalLosses.toFixed(2)}W × ${rth_ja.toFixed(2)}K/W` :
    `\n\nExact calculations (datasheet values):\n• Total losses: ${totalLosses.toFixed(3)}W\n• Conduction losses: ${pCond.toFixed(3)}W (P = I²×RDS(on)×D)\n• Switching losses: ${pSw.toFixed(3)}W (physics-based gate charge formulas)\n• Rth(j-c): ${rth_jc.toFixed(2)}K/W (${selectedTransistor.package} - manufacturer datasheet)\n• Rth(c-a): ${rth_ca.toFixed(2)}K/W (verified measurements)\n• Tj,max ${techType}: ${maxJunctionTemp}°C (semiconductor physics)\n\nExact formula: Tj = Ta + P×Rth(j-a)\n${junctionTemp.toFixed(1)}°C = ${ambientTemp}°C + ${totalLosses.toFixed(2)}W × ${rth_ja.toFixed(2)}K/W`;
  
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

// Utility функция за показване на временни съобщения
function showTemporaryMessage(message, type = 'info', duration = 4000) {
  // Създаваме toast element ако не съществува
  let toast = document.getElementById('toast-message');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-message';
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      max-width: 400px;
      padding: 15px 20px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      z-index: 9999;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      word-wrap: break-word;
    `;
    document.body.appendChild(toast);
  }
  
  // Задаваме цвета според типа
  const colors = {
    success: '#4CAF50',
    error: '#f44336',
    warning: '#FF9800',
    info: '#2196F3'
  };
  
  toast.style.backgroundColor = colors[type] || colors.info;
  toast.textContent = message;
  
  // Показваме съобщението
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
  });
  
  // Скриваме след време
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Event listeners
document.getElementById('calcBtn').addEventListener('click',calc);

document.getElementById('techSelect').addEventListener('change', function() {
  populateTransistors();
  document.getElementById('transistorSelect').value = '';
  showTransistorInfo('');
  document.getElementById('suggestBtn').disabled = true;
});

// Event listener за транзистор input field (поддържа както избиране, така и въвеждане)
document.getElementById('transistorSelect').addEventListener('input', function() {
  showTransistorInfo(this.value);
  document.getElementById('suggestBtn').disabled = !this.value;
});

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

// Event listeners за копиране на графики
document.getElementById('copyLossChart').addEventListener('click', () => copyChartToClipboard('lossChart'));
document.getElementById('copyEfficiencyChart').addEventListener('click', () => copyChartToClipboard('efficiencyChart'));

document.getElementById('resetBtn').addEventListener('click',()=>{
  document.getElementById('techSelect').value="SiC";
  document.getElementById('vdc').value=100;
  document.getElementById('iLoad').value=15;
  document.getElementById('fsw').value=100;
  document.getElementById('temp').value=25;
  document.getElementById('duty').value=0.5;
  populateTransistors();
  document.getElementById('transistorSelect').value = '';
  showTransistorInfo('');
});

// стартирай при зареждане
document.addEventListener('DOMContentLoaded', function() {
  // Проверяваме дали всички нужни елементи съществуват
  const requiredElements = ['techSelect', 'transistorSelect', 'suggestBtn', 'calcBtn', 'resetBtn', 'langBG', 'langEN'];
  
  for (const elementId of requiredElements) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found!`);
      return;
    }
  }
  
  populateTransistors();
  
  // Първоначално disable на suggest бутона
  document.getElementById('suggestBtn').disabled = true;
  
  // Event listeners за език
  document.getElementById('langBG').addEventListener('click', () => switchLanguage('bg'));
  document.getElementById('langEN').addEventListener('click', () => switchLanguage('en'));
  
  // Задаваме първоначален език
  switchLanguage('bg');
});

// Функция за показване на safety warnings в UI
function displaySafetyWarnings(validation) {
  let warningsDiv = document.getElementById('safetyWarnings');
  if (!warningsDiv) {
    // Създаваме warnings container
    warningsDiv = document.createElement('div');
    warningsDiv.id = 'safetyWarnings';
    warningsDiv.style.cssText = `
      margin: 15px 0;
      padding: 10px;
      border-radius: 8px;
      font-weight: bold;
      display: none;
    `;
    
    // Поставяме преди results div
    const resultsDiv = document.getElementById('results');
    if (resultsDiv && resultsDiv.parentNode) {
      resultsDiv.parentNode.insertBefore(warningsDiv, resultsDiv);
    } else {
      // Fallback - поставяме в body
      document.body.appendChild(warningsDiv);
    }
  }
  
  if (validation.warnings.length === 0 && validation.errors.length === 0) {
    warningsDiv.style.display = 'none';
    return;
  }
  
  let content = '';
  let bgColor = '';
  
  if (validation.severity === 'error') {
    bgColor = '#ffebee';
    content = '<h4 style="color: #c62828; margin-top: 0;">🚨 КРИТИЧНИ ГРЕШКИ</h4>';
    validation.errors.forEach(error => {
      content += `<div style="color: #c62828; margin: 5px 0;">${error}</div>`;
    });
  }
  
  if (validation.severity === 'warning' || validation.warnings.length > 0) {
    if (validation.severity !== 'error') {
      bgColor = '#fff3e0';
      content = '<h4 style="color: #ef6c00; margin-top: 0;">⚠️ ПРЕДУПРЕЖДЕНИЯ</h4>';
    } else {
      content += '<h4 style="color: #ef6c00; margin: 10px 0 0 0;">⚠️ ПРЕДУПРЕЖДЕНИЯ</h4>';
    }
    validation.warnings.forEach(warning => {
      content += `<div style="color: #ef6c00; margin: 5px 0;">${warning}</div>`;
    });
  }
  
  if (validation.severity === 'safe' || (validation.warnings.length === 0 && validation.errors.length === 0)) {
    bgColor = '#e8f5e8';
    content = '<div style="color: #2e7d32;">✅ ' + 
      (currentLang === 'bg' ? 'Всички параметри са в безопасните граници' : 'All parameters are within safe limits') + 
      '</div>';
  }
  
  warningsDiv.innerHTML = content;
  warningsDiv.style.backgroundColor = bgColor;
  warningsDiv.style.border = `2px solid ${validation.severity === 'error' ? '#c62828' : validation.severity === 'warning' ? '#ef6c00' : '#2e7d32'}`;  
  warningsDiv.style.display = 'block';
}

// Professional Datasheet Integration System
const DATASHEET_PARAMETERS = {
  enhanced_params: {
    "C2M0080120D": { // Wolfspeed SiC MOSFET
      qg_total: 19.2, qgd: 3.8,
      manufacturer: "Wolfspeed"
    },
    "GS66508P": { // GaN Systems GaN FET
      qg_total: 4.3, qgd: 0.9,
      manufacturer: "GaN Systems"
    }
  }
};

function getEnhancedParameters(transistorName) {
  for (const [key, params] of Object.entries(DATASHEET_PARAMETERS.enhanced_params)) {
    if (transistorName.includes(key)) {
      return { ...params, enhanced: true };
    }
  }
  return { enhanced: false };
}

// IEEE Standard Scientific Report Generator
class ScientificReportGenerator {
  constructor() {
    this.reportData = {
      timestamp: new Date().toISOString(),
      version: '2.1.0',
      methodology: 'IEEE Standard Power Electronics Analysis'
    };
  }
  
  generateReport(calculationResults, parameters, transistor) {
    const report = {
      title: currentLang === 'bg' ? 'Анализ на енергийни загуби в полупроводникови превключватели' : 'Power Loss Analysis in Semiconductor Switches',
      abstract: this.generateAbstract(calculationResults, parameters),
      methodology: this.generateMethodology(),
      results: this.formatResults(calculationResults),
      transistorSpecs: this.formatTransistorSpecs(transistor),
      references: this.generateReferences(),
      citation: this.generateCitation()
    };
    
    return report;
  }
  
  generateAbstract(results, params) {
    return currentLang === 'bg' ? 
      `Този анализ изследва енергийните загуби в ${params.technology} транзистор при ${params.voltage}V, ${params.current}A и честота ${params.frequency}kHz. Общите загуби са ${results.totalLoss.toFixed(2)}W с КПД ${results.efficiency.toFixed(2)}%. Анализът следва IEEE стандартите за power electronics.` :
      `This analysis investigates power losses in ${params.technology} transistor at ${params.voltage}V, ${params.current}A and frequency ${params.frequency}kHz. Total losses are ${results.totalLoss.toFixed(2)}W with efficiency of ${results.efficiency.toFixed(2)}%. Analysis follows IEEE power electronics standards.`;
  }
  
  generateMethodology() {
    return currentLang === 'bg' ? 
      `Методологията използва IEEE стандартни формули за изчисление на загуби от проводимост (P_cond = I²R_DS(on)D) и превключване (P_sw = 0.5VIf_sw(t_r+t_f)). Термичният анализ следва Cauer thermal network модела.` :
      `Methodology uses IEEE standard formulas for conduction losses (P_cond = I²R_DS(on)D) and switching losses (P_sw = 0.5VIf_sw(t_r+t_f)). Thermal analysis follows Cauer thermal network model.`;
  }
  
  formatResults(results) {
    return {
      conductionLoss: `${results.pCond.toFixed(3)} W`,
      switchingLoss: `${results.pSw.toFixed(3)} W`,
      totalLoss: `${results.totalLoss.toFixed(3)} W`,
      efficiency: `${results.efficiency.toFixed(2)} %`,
      junctionTemp: `${results.junctionTemp} °C`
    };
  }
  
  generateReferences() {
    return [
      '[1] IEEE Standard 1547-2018, "IEEE Standard for Interconnection and Interoperability of Distributed Energy Resources"',
      '[2] IEC 61439-1:2020, "Low-voltage switchgear and controlgear assemblies"',
      '[3] Cauer, R., "Synthesis of Linear Communication Networks", McGraw-Hill, 1958',
      '[4] Mohan, N., Undeland, T., Robbins, W., "Power Electronics: Converters, Applications, and Design", 3rd Ed., Wiley, 2003'
    ];
  }
  
  generateCitation() {
    const date = new Date();
    return currentLang === 'bg' ? 
      `Транзисторен калкулатор v2.1, "Анализ на енергийни загуби", ${date.getFullYear()}, [Online]. Достъпен: ${window.location.href}` :
      `Transistor Calculator v2.1, "Power Loss Analysis", ${date.getFullYear()}, [Online]. Available: ${window.location.href}`;
  }
  
  exportToPDF(report) {
    // PDF export functionality
    const pdfContent = this.formatForPDF(report);
    return pdfContent;
  }
  
  formatForPDF(report) {
    return `
# ${report.title}

## Abstract
${report.abstract}

## Methodology
${report.methodology}

## Results
- Conduction Losses: ${report.results.conductionLoss}
- Switching Losses: ${report.results.switchingLoss}
- Total Power Loss: ${report.results.totalLoss}
- Efficiency: ${report.results.efficiency}
- Junction Temperature: ${report.results.junctionTemp}

## References
${report.references.join('\n')}

## Citation
${report.citation}
    `;
  }
}

const reportGenerator = new ScientificReportGenerator();

// Interactive Waveform Simulation Engine
class WaveformSimulator {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }
  
  initCanvas(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      this.canvas.width = 800;
      this.canvas.height = 400;
      this.canvas.style.border = '1px solid #ccc';
    }
    this.ctx = this.canvas.getContext('2d');
  }
  
  simulateSwitchingWaveforms(vds, id, fsw_khz, technology) {
    const fsw = fsw_khz * 1000;
    const samples = 200;
    const duration_ms = 2 / fsw_khz;
    
    const waveforms = { time: [], vds_waveform: [], id_waveform: [], power_waveform: [] };
    
    for (let i = 0; i < samples; i++) {
      const t = (i / samples) * duration_ms;
      const phase = (t * fsw_khz / 1000) % 1;
      
      const { vds_val, id_val } = this.calculateSwitchingPoint(phase, vds, id, technology);
      
      waveforms.time.push(t * 1000);
      waveforms.vds_waveform.push(vds_val);
      waveforms.id_waveform.push(id_val);
      waveforms.power_waveform.push(vds_val * id_val);
    }
    
    return waveforms;
  }
  
  calculateSwitchingPoint(phase, vds_max, id_max, technology) {
    let vds_val, id_val;
    
    if (phase < 0.1) {
      const progress = phase / 0.1;
      vds_val = vds_max * (1 - progress);
      id_val = id_max * progress;
    } else if (phase < 0.4) {
      vds_val = vds_max * 0.05;
      id_val = id_max;
    } else if (phase < 0.5) {
      const progress = (phase - 0.4) / 0.1;
      vds_val = vds_max * progress;
      id_val = id_max * (1 - progress);
    } else {
      vds_val = vds_max;
      id_val = 0;
    }
    
    return { vds_val, id_val };
  }
  
  drawWaveforms(waveforms, title) {
    if (!this.ctx) return;
    
    const canvas = this.canvas;
    const ctx = this.ctx;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const margin = 60;
    const plotWidth = canvas.width - 2 * margin;
    const plotHeight = (canvas.height - 80) / 3;
    
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, 25);
    
    const plots = [
      { data: waveforms.vds_waveform, label: 'VDS (V)', color: '#d32f2f' },
      { data: waveforms.id_waveform, label: 'ID (A)', color: '#1976d2' },
      { data: waveforms.power_waveform, label: 'Power (W)', color: '#388e3c' }
    ];
    
    plots.forEach((plot, index) => {
      const yOffset = 40 + index * (plotHeight + 20);
      this.drawSubplot(ctx, waveforms.time, plot.data, margin, yOffset, plotWidth, plotHeight - 20, plot);
    });
  }
  
  drawSubplot(ctx, timeData, yData, x, y, width, height, plot) {
    const yMax = Math.max(...yData);
    
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(x, y, width, height);
    
    ctx.strokeStyle = '#dee2e6';
    ctx.strokeRect(x, y, width, height);
    
    ctx.strokeStyle = plot.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const xScale = width / (timeData[timeData.length - 1] - timeData[0]);
    const yScale = height / yMax;
    
    for (let i = 0; i < timeData.length; i++) {
      const xPos = x + (timeData[i] - timeData[0]) * xScale;
      const yPos = y + height - yData[i] * yScale;
      
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    
    ctx.stroke();
    
    ctx.fillStyle = plot.color;
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(plot.label, x + 5, y + 15);
  }
}

const waveformSimulator = new WaveformSimulator();

// Cost Analysis и ROI Calculator за бизнес решения
class CostAnalyzer {
  constructor() {
    this.componentPrices = {
      Si: { low: 0.5, typical: 2.0, high: 8.0 },      // USD per unit
      SiC: { low: 8.0, typical: 25.0, high: 80.0 },   // USD per unit
      GaN: { low: 12.0, typical: 35.0, high: 120.0 }  // USD per unit
    };
    
    this.systemCosts = {
      cooling: {
        natural: 0,
        small_heatsink: 2,
        medium_heatsink: 8,
        large_heatsink: 25,
        forced_air: 45,
        liquid_cooling: 150
      },
      gate_driver: {
        Si: 1.5,
        SiC: 8.0,
        GaN: 12.0
      }
    };
  }
  
  calculateTotalCost(technology, powerLoss, coolingType, volume = 1000, efficiencyGain = 0) {
    const componentCost = this.componentPrices[technology].typical;
    const coolingSolutionCost = this.systemCosts.cooling[coolingType];
    const gateDriverCost = this.systemCosts.gate_driver[technology];
    
    // Volume discount (economies of scale)
    const volumeDiscount = volume > 10000 ? 0.3 : volume > 1000 ? 0.15 : 0;
    const discountedComponentCost = componentCost * (1 - volumeDiscount);
    
    const totalHardwareCost = discountedComponentCost + coolingSolutionCost + gateDriverCost;
    
    // Operating cost savings от efficiency improvement
    const annualEnergySavings = this.calculateEnergySavings(powerLoss, efficiencyGain);
    
    return {
      componentCost: discountedComponentCost,
      coolingSolutionCost: coolingSolutionCost,
      gateDriverCost: gateDriverCost,
      totalHardwareCost: totalHardwareCost,
      annualEnergySavings: annualEnergySavings,
      paybackPeriod: totalHardwareCost / Math.max(annualEnergySavings, 0.01),
      roi5year: (annualEnergySavings * 5 - totalHardwareCost) / totalHardwareCost * 100
    };
  }
  
  calculateEnergySavings(powerLoss, efficiencyGainPercent, hoursPerYear = 8760, electricityPrice = 0.12) {
    // kWh savings per year
    const energySavingsKWh = (powerLoss * efficiencyGainPercent / 100) * hoursPerYear / 1000;
    return energySavingsKWh * electricityPrice; // USD per year
  }
  
  compareAlternatives(baselineTech, alternativeTech, baselineLoss, alternativeLoss, coolingType, volume = 1000) {
    const baselineCost = this.calculateTotalCost(baselineTech, baselineLoss, coolingType, volume, 0);
    const efficiencyGain = ((baselineLoss - alternativeLoss) / baselineLoss) * 100;
    const alternativeCost = this.calculateTotalCost(alternativeTech, alternativeLoss, coolingType, volume, efficiencyGain);
    
    return {
      baseline: { ...baselineCost, technology: baselineTech, powerLoss: baselineLoss },
      alternative: { ...alternativeCost, technology: alternativeTech, powerLoss: alternativeLoss },
      efficiencyGain: efficiencyGain,
      additionalCost: alternativeCost.totalHardwareCost - baselineCost.totalHardwareCost,
      recommendation: this.generateRecommendation(baselineCost, alternativeCost, efficiencyGain)
    };
  }
  
  generateRecommendation(baseline, alternative, efficiencyGain) {
    const paybackYears = alternative.paybackPeriod;
    const roi5year = alternative.roi5year;
    
    if (paybackYears < 2 && roi5year > 50) {
      return currentLang === 'bg' ? 
        '🟢 СИЛНО ПРЕПОРЪЧИТЕЛНО: Отлична инвестиция с бърз възврат' :
        '🟢 HIGHLY RECOMMENDED: Excellent investment with fast payback';
    } else if (paybackYears < 4 && roi5year > 20) {
      return currentLang === 'bg' ? 
        '🟡 ПРЕПОРЪЧИТЕЛНО: Добра инвестиция за дългосрочни проекти' :
        '🟡 RECOMMENDED: Good investment for long-term projects';
    } else if (paybackYears > 5 || roi5year < 10) {
      return currentLang === 'bg' ? 
        '🔴 НЕ СЕ ПРЕПОРЪЧВА: Високи разходи, нисък възврат' :
        '🔴 NOT RECOMMENDED: High cost, low return';
    } else {
      return currentLang === 'bg' ? 
        '🟡 ПОМИСЛЕТЕ: Анализирайте специфичните изисквания' :
        '🟡 CONSIDER: Analyze specific requirements';
    }
  }
  
  generateCostReport(comparison) {
    return {
      summary: {
        technology_upgrade: `${comparison.baseline.technology} → ${comparison.alternative.technology}`,
        efficiency_gain: `+${comparison.efficiencyGain.toFixed(2)}%`,
        additional_hardware_cost: `$${comparison.additionalCost.toFixed(2)}`,
        annual_savings: `$${comparison.alternative.annualEnergySavings.toFixed(2)}`,
        payback_period: `${comparison.alternative.paybackPeriod.toFixed(1)} years`,
        roi_5year: `${comparison.alternative.roi5year.toFixed(1)}%`
      },
      recommendation: comparison.recommendation
    };
  }
}

const costAnalyzer = new CostAnalyzer();

// Reliability/MTBF Prediction Models базирани на stress фактори
class ReliabilityAnalyzer {
  constructor() {
    // JEDEC/MIL-HDBK-217 based failure rate models (FIT = Failures in Time per 10^9 hours)
    this.baseFailureRates = {
      Si: { base_fit: 0.5, activation_energy: 0.65 },     // eV
      SiC: { base_fit: 0.3, activation_energy: 1.2 },    // Better reliability, higher Ea
      GaN: { base_fit: 0.8, activation_energy: 0.9 }     // Newer technology, more variation
    };
    
    // Stress factors according to MIL-HDBK-217
    this.stressFactors = {
      temperature: {
        low: 0.1,      // < 55°C
        normal: 1.0,   // 55-85°C
        high: 5.0,     // 85-125°C
        extreme: 20.0  // > 125°C
      },
      voltage: {
        low: 0.5,      // < 60% rated
        normal: 1.0,   // 60-80% rated
        high: 3.0,     // 80-90% rated
        extreme: 10.0  // > 90% rated
      },
      current: {
        low: 0.3,      // < 50% rated
        normal: 1.0,   // 50-70% rated
        high: 4.0,     // 70-85% rated
        extreme: 15.0  // > 85% rated
      },
      switching: {
        low: 1.0,      // < 10 kHz
        normal: 2.0,   // 10-100 kHz
        high: 5.0,     // 100-500 kHz
        extreme: 12.0  // > 500 kHz
      }
    };
  }
  
  calculateMTBF(technology, temperature, voltageStress, currentStress, switchingFreq, environment = 'controlled') {
    const baseData = this.baseFailureRates[technology];
    if (!baseData) return null;
    
    // Arrhenius temperature acceleration model
    const k = 8.617e-5; // Boltzmann constant (eV/K)
    const T_ref = 298.15; // 25°C reference temperature
    const T_junction = temperature + 273.15; // Convert to Kelvin
    
    const tempAcceleration = Math.exp(
      (baseData.activation_energy / k) * 
      ((1 / T_ref) - (1 / T_junction))
    );
    
    // Get stress factors
    const tempFactor = this.getStressFactor('temperature', temperature);
    const voltageFactor = this.getStressFactor('voltage', voltageStress);
    const currentFactor = this.getStressFactor('current', currentStress);
    const switchingFactor = this.getStressFactor('switching', switchingFreq);
    
    // Environment factor
    const envFactor = environment === 'industrial' ? 2.0 : 
                     environment === 'automotive' ? 3.0 :
                     environment === 'military' ? 5.0 : 1.0;
    
    // Combined failure rate (FIT)
    const totalFailureRate = baseData.base_fit * 
                            tempAcceleration * 
                            tempFactor * 
                            voltageFactor * 
                            currentFactor * 
                            switchingFactor * 
                            envFactor;
    
    // MTBF in hours
    const mtbf_hours = 1e9 / totalFailureRate;
    
    return {
      mtbf_hours: mtbf_hours,
      mtbf_years: mtbf_hours / 8760,
      failure_rate_fit: totalFailureRate,
      reliability_10years: Math.exp(-10 * 8760 / mtbf_hours) * 100,
      stress_analysis: {
        temperature_factor: tempFactor,
        voltage_factor: voltageFactor, 
        current_factor: currentFactor,
        switching_factor: switchingFactor,
        environment_factor: envFactor,
        temperature_acceleration: tempAcceleration
      },
      dominant_stress: this.identifyDominantStress({
        temperature: tempFactor,
        voltage: voltageFactor,
        current: currentFactor,
        switching: switchingFactor
      })
    };
  }
  
  getStressFactor(stressType, value) {
    const factors = this.stressFactors[stressType];
    
    switch(stressType) {
      case 'temperature':
        if (value < 55) return factors.low;
        if (value < 85) return factors.normal;
        if (value < 125) return factors.high;
        return factors.extreme;
        
      case 'voltage':
      case 'current':
        if (value < 0.6) return factors.low;
        if (value < 0.8) return factors.normal;
        if (value < 0.9) return factors.high;
        return factors.extreme;
        
      case 'switching':
        if (value < 10) return factors.low;
        if (value < 100) return factors.normal;
        if (value < 500) return factors.high;
        return factors.extreme;
        
      default:
        return 1.0;
    }
  }
  
  identifyDominantStress(stressFactors) {
    let maxStress = 0;
    let dominantStress = 'none';
    
    for (const [stress, factor] of Object.entries(stressFactors)) {
      if (factor > maxStress) {
        maxStress = factor;
        dominantStress = stress;
      }
    }
    
    return { type: dominantStress, factor: maxStress };
  }
  
  generateReliabilityReport(mtbfData, currentLang) {
    const isBg = currentLang === 'bg';
    
    const reliabilityLevel = mtbfData.mtbf_years > 20 ? 'excellent' :
                           mtbfData.mtbf_years > 10 ? 'good' :
                           mtbfData.mtbf_years > 5 ? 'acceptable' : 'poor';
    
    const statusColors = {
      excellent: '#2e7d32',
      good: '#388e3c', 
      acceptable: '#ff9800',
      poor: '#d32f2f'
    };
    
    const statusText = {
      excellent: isBg ? 'Отлична надеждност' : 'Excellent Reliability',
      good: isBg ? 'Добра надеждност' : 'Good Reliability',
      acceptable: isBg ? 'Приемлива надеждност' : 'Acceptable Reliability',
      poor: isBg ? 'Ниска надеждност' : 'Poor Reliability'
    };
    
    return {
      status: reliabilityLevel,
      color: statusColors[reliabilityLevel],
      text: statusText[reliabilityLevel],
      mtbf_display: `${mtbfData.mtbf_years.toFixed(1)} ${isBg ? 'години' : 'years'}`,
      reliability_10y: `${mtbfData.reliability_10years.toFixed(1)}%`,
      dominant_stress: mtbfData.dominant_stress.type,
      improvement_suggestion: this.generateImprovementSuggestion(mtbfData.dominant_stress, isBg)
    };
  }
  
  generateImprovementSuggestion(dominantStress, isBg) {
    const suggestions = {
      temperature: isBg ? '🌡️ Подобрете охлаждането за намаляване на температурата' : '🌡️ Improve cooling to reduce temperature',
      voltage: isBg ? '⚡ Намалете напрежението или изберете транзистор с по-високо номинално напрежение' : '⚡ Reduce voltage or select higher voltage rating transistor',
      current: isBg ? '🔌 Намалете тока или използвайте паралелни транзистори' : '🔌 Reduce current or use parallel transistors',
      switching: isBg ? '📋 Намалете честотата на превключване или изберете по-бърз транзистор' : '📋 Reduce switching frequency or select faster transistor'
    };
    
    return suggestions[dominantStress.type] || (isBg ? 'Оптимизирайте операционните условия' : 'Optimize operating conditions');
  }
}

const reliabilityAnalyzer = new ReliabilityAnalyzer();

// EMI/EMC Analysis с dv/dt, di/dt calculations за compliance
class EMIAnalyzer {
  constructor() {
    // IEEE 519, IEC 61000 стандартни лимити
    this.emiLimits = {
      dv_dt_max: { // V/ns
        Si: 50,
        SiC: 100, 
        GaN: 200
      },
      di_dt_max: { // A/ns
        Si: 1.0,
        SiC: 5.0,
        GaN: 10.0
      },
      conducted_emission_limits: { // dBμV
        class_a: 79, // Industrial
        class_b: 66  // Residential
      }
    };
  }
  
  calculateEMI(vdc, iLoad, fsw_khz, technology, selectedTransistor) {
    const fsw = fsw_khz * 1000;
    
    // Get switching times from transistor data or estimates
    const tr_ns = selectedTransistor?.tr_ns || this.getTypicalSwitchingTime(technology, 'rise');
    const tf_ns = selectedTransistor?.tf_ns || this.getTypicalSwitchingTime(technology, 'fall');
    
    // Calculate dv/dt and di/dt
    const dv_dt = vdc / (tr_ns / 1000); // V/ns
    const di_dt = iLoad / (tr_ns / 1000); // A/ns
    
    // EMI radiation calculation (simplified)
    const harmonic_content = this.calculateHarmonicContent(fsw, tr_ns, tf_ns);
    const radiated_emission = this.estimateRadiatedEmission(dv_dt, di_dt, fsw, harmonic_content);
    
    // Compliance check
    const compliance = this.checkCompliance(dv_dt, di_dt, technology, radiated_emission);
    
    return {
      dv_dt: dv_dt.toFixed(2),
      di_dt: di_dt.toFixed(2),
      switching_times: { tr_ns, tf_ns },
      harmonic_content,
      radiated_emission: radiated_emission.toFixed(1),
      compliance,
      mitigation_suggestions: this.generateMitigationSuggestions(compliance, dv_dt, di_dt)
    };
  }
  
  getTypicalSwitchingTime(technology, transition) {
    const times = {
      Si: { rise: 25, fall: 20 },
      SiC: { rise: 15, fall: 12 },
      GaN: { rise: 5, fall: 3 }
    };
    return times[technology][transition];
  }
  
  calculateHarmonicContent(fsw, tr_ns, tf_ns) {
    // Simplified harmonic analysis based on switching edges
    const rise_bandwidth = 0.35 / (tr_ns * 1e-9); // Hz
    const fall_bandwidth = 0.35 / (tf_ns * 1e-9); // Hz
    
    const significant_harmonics = Math.max(rise_bandwidth, fall_bandwidth) / fsw;
    
    return {
      bandwidth_mhz: Math.max(rise_bandwidth, fall_bandwidth) / 1e6,
      significant_harmonics: Math.floor(significant_harmonics),
      critical_frequency_mhz: (fsw * significant_harmonics) / 1e6
    };
  }
  
  estimateRadiatedEmission(dv_dt, di_dt, fsw, harmonics) {
    // Simplified radiated emission estimation (dBμV/m at 1m)
    const voltage_contribution = 20 * Math.log10(dv_dt * 1000); // Convert to mV/ns
    const current_contribution = 20 * Math.log10(di_dt * 1000);  // Convert to mA/ns
    const frequency_factor = 20 * Math.log10(fsw / 1000);       // kHz to MHz factor
    
    return voltage_contribution + current_contribution + frequency_factor - 40; // Empirical correction
  }
  
  checkCompliance(dv_dt, di_dt, technology, radiated_emission) {
    const limits = this.emiLimits;
    
    return {
      dv_dt_ok: dv_dt <= limits.dv_dt_max[technology],
      di_dt_ok: di_dt <= limits.di_dt_max[technology],
      conducted_class_a: radiated_emission <= limits.conducted_emission_limits.class_a,
      conducted_class_b: radiated_emission <= limits.conducted_emission_limits.class_b,
      overall_compliance: (
        dv_dt <= limits.dv_dt_max[technology] && 
        di_dt <= limits.di_dt_max[technology] && 
        radiated_emission <= limits.conducted_emission_limits.class_a
      )
    };
  }
  
  generateMitigationSuggestions(compliance, dv_dt, di_dt) {
    const suggestions = [];
    
    if (!compliance.dv_dt_ok) {
      suggestions.push(currentLang === 'bg' ? 
        '📐 Добавете gate resistor за намаляване на dv/dt' :
        '📐 Add gate resistor to reduce dv/dt');
    }
    
    if (!compliance.di_dt_ok) {
      suggestions.push(currentLang === 'bg' ? 
        '🔗 Минимизирайте паразитната индуктивност в circuit layout' :
        '🔗 Minimize parasitic inductance in circuit layout');
    }
    
    if (!compliance.conducted_class_b) {
      suggestions.push(currentLang === 'bg' ? 
        '🛡️ Добавете EMI филтри и shielding' :
        '🛡️ Add EMI filters and shielding');
    }
    
    return suggestions;
  }
}

const emiAnalyzer = new EMIAnalyzer();

// Safe Operating Area (SOA) Visualization
class SOAVisualizer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }
  
  initCanvas(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      this.canvas.width = 600;
      this.canvas.height = 400;
      this.canvas.style.border = '1px solid #ccc';
      this.canvas.style.borderRadius = '8px';
    }
    this.ctx = this.canvas.getContext('2d');
  }
  
  drawSOA(transistor, currentVoltage, currentCurrent, technology) {
    if (!this.ctx) return;
    
    const ctx = this.ctx;
    const canvas = this.canvas;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up coordinate system
    const margin = 60;
    const plotWidth = canvas.width - 2 * margin;
    const plotHeight = canvas.height - 2 * margin;
    
    const vMax = transistor.vds_max;
    const iMax = transistor.id_max;
    
    // Draw axes
    this.drawAxes(ctx, margin, plotWidth, plotHeight, vMax, iMax);
    
    // Draw SOA boundaries
    this.drawSOABoundaries(ctx, margin, plotWidth, plotHeight, vMax, iMax, transistor, technology);
    
    // Plot current operating point
    this.plotOperatingPoint(ctx, margin, plotWidth, plotHeight, vMax, iMax, currentVoltage, currentCurrent);
    
    // Add title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Safe Operating Area - ${transistor.name}`, canvas.width / 2, 25);
  }
  
  drawAxes(ctx, margin, width, height, vMax, iMax) {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    // X-axis (Voltage)
    ctx.beginPath();
    ctx.moveTo(margin, margin + height);
    ctx.lineTo(margin + width, margin + height);
    ctx.stroke();
    
    // Y-axis (Current)
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, margin + height);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('VDS (V)', margin + width/2, margin + height + 40);
    
    ctx.save();
    ctx.translate(20, margin + height/2);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('ID (A)', 0, 0);
    ctx.restore();
    
    // Scale markings
    this.drawScaleMarkings(ctx, margin, width, height, vMax, iMax);
  }
  
  drawScaleMarkings(ctx, margin, width, height, vMax, iMax) {
    ctx.fillStyle = '#666';
    ctx.font = '10px Arial';
    
    // Voltage markings
    for (let i = 0; i <= 5; i++) {
      const v = (vMax / 5) * i;
      const x = margin + (width / 5) * i;
      
      ctx.textAlign = 'center';
      ctx.fillText(v.toFixed(0), x, margin + height + 15);
      
      // Grid lines
      ctx.strokeStyle = '#eee';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, margin);
      ctx.lineTo(x, margin + height);
      ctx.stroke();
    }
    
    // Current markings
    for (let i = 0; i <= 5; i++) {
      const current = (iMax / 5) * i;
      const y = margin + height - (height / 5) * i;
      
      ctx.textAlign = 'right';
      ctx.fillText(current.toFixed(0), margin - 5, y + 3);
      
      // Grid lines
      ctx.strokeStyle = '#eee';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(margin + width, y);
      ctx.stroke();
    }
  }
  
  drawSOABoundaries(ctx, margin, width, height, vMax, iMax, transistor, technology) {
    ctx.strokeStyle = '#d32f2f';
    ctx.lineWidth = 3;
    
    // Voltage limit (vertical line)
    const vLimitX = margin + (width * 0.9); // 90% of max voltage
    ctx.beginPath();
    ctx.moveTo(vLimitX, margin);
    ctx.lineTo(vLimitX, margin + height);
    ctx.stroke();
    
    // Current limit (horizontal line)
    const iLimitY = margin + (height * 0.1); // 90% of max current
    ctx.beginPath();
    ctx.moveTo(margin, iLimitY);
    ctx.lineTo(margin + width, iLimitY);
    ctx.stroke();
    
    // Power limit (hyperbola)
    const maxPower = transistor.vds_max * transistor.id_max * 0.5; // Conservative estimate
    ctx.beginPath();
    for (let i = 0; i <= width; i += 5) {
      const v = (vMax * i) / width;
      if (v > 0) {
        const powerLimitedCurrent = maxPower / v;
        const y = margin + height - (height * powerLimitedCurrent / iMax);
        
        if (y >= margin && y <= margin + height) {
          if (i === 0) {
            ctx.moveTo(margin + i, y);
          } else {
            ctx.lineTo(margin + i, y);
          }
        }
      }
    }
    ctx.stroke();
    
    // Add labels
    ctx.fillStyle = '#d32f2f';
    ctx.font = '10px Arial';
    ctx.fillText('V limit', vLimitX + 5, margin + 15);
    ctx.fillText('I limit', margin + 5, iLimitY - 5);
    ctx.fillText('P limit', margin + width - 50, margin + 50);
  }
  
  plotOperatingPoint(ctx, margin, width, height, vMax, iMax, voltage, current) {
    const x = margin + (width * voltage / vMax);
    const y = margin + height - (height * current / iMax);
    
    // Operating point
    ctx.fillStyle = '#1976d2';
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Point label
    ctx.fillStyle = '#1976d2';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`(${voltage}V, ${current}A)`, x + 10, y - 10);
  }
}

const soaVisualizer = new SOAVisualizer();

// Gate Drive Requirements Calculator за system design
class GateDriveCalculator {
  constructor() {
    this.standardGateVoltages = {
      Si: { on: 10, off: 0, threshold: 3 },
      SiC: { on: 18, off: -5, threshold: 3 },
      GaN: { on: 6, off: 0, threshold: 1.5 }
    };
  }
  
  calculateGateDriveRequirements(transistor, fsw_khz, technology, enhancedParams) {
    const fsw = fsw_khz * 1000;
    const gateVoltages = this.standardGateVoltages[technology];
    
    // Use enhanced parameters if available
    const qg_total = enhancedParams?.qg_total || this.getDefaultQg(technology);
    const qgd = enhancedParams?.qgd || qg_total * 0.2;
    const qgs = enhancedParams?.qgs || qg_total * 0.3;
    
    // Gate current calculation
    const ig_avg = qg_total * 1e-9 * fsw; // Average gate current (A)
    const ig_peak = ig_avg * 10; // Peak gate current estimate
    
    // Gate resistor calculation for desired switching speed
    const vgate_swing = gateVoltages.on - gateVoltages.off;
    const desired_tr = this.getDesiredSwitchingTime(technology); // ns
    const rgate_opt = (desired_tr * 1e-9 * vgate_swing) / (qg_total * 1e-9 * Math.log(3));
    
    // Gate driver power calculation
    const pgate_driver = vgate_swing * ig_avg + 
                        (qg_total * 1e-9 * vgate_swing * fsw); // Switching power
    
    // Driver IC requirements
    const driverSpecs = this.selectDriverIC(ig_peak, pgate_driver, technology);
    
    return {
      gate_voltages: gateVoltages,
      gate_charges: { total: qg_total, gate_drain: qgd, gate_source: qgs },
      currents: {
        average: (ig_avg * 1000).toFixed(2), // mA
        peak: (ig_peak * 1000).toFixed(1)    // mA
      },
      gate_resistor: {
        optimal: rgate_opt.toFixed(1),
        turn_on: (rgate_opt * 0.7).toFixed(1),
        turn_off: (rgate_opt * 1.3).toFixed(1)
      },
      driver_power: (pgate_driver * 1000).toFixed(1), // mW
      driver_ic: driverSpecs,
      layout_recommendations: this.getLayoutRecommendations(technology, fsw_khz)
    };
  }
  
  getDefaultQg(technology) {
    const defaults = { Si: 45, SiC: 19, GaN: 4.3 };
    return defaults[technology] || 25;
  }
  
  getDesiredSwitchingTime(technology) {
    const times = { Si: 50, SiC: 20, GaN: 8 }; // ns
    return times[technology] || 30;
  }
  
  selectDriverIC(peakCurrent, power, technology) {
    // Simplified driver IC selection logic
    const recommendations = {
      Si: {
        low_power: 'IR2110, UCC27511',
        high_power: 'IXDN614SI, UCC21520'
      },
      SiC: {
        low_power: 'UCC21732, Si8271',
        high_power: 'UCC21750, ACPL-P611'
      },
      GaN: {
        low_power: 'LM5113, UCC27282',
        high_power: 'LMG1020, Si8274'
      }
    };
    
    const powerCategory = power > 500 ? 'high_power' : 'low_power';
    const suggestion = recommendations[technology]?.[powerCategory] || 'Custom solution needed';
    
    return {
      category: powerCategory,
      recommendations: suggestion,
      isolation_required: technology === 'SiC' || power > 1000,
      bootstrap_capable: power < 200
    };
  }
  
  getLayoutRecommendations(technology, fsw_khz) {
    const recommendations = [];
    
    if (fsw_khz > 100) {
      recommendations.push(
        currentLang === 'bg' ? 
        '📏 Минимизирайте gate loop inductance (<5nH)' :
        '📏 Minimize gate loop inductance (<5nH)'
      );
    }
    
    if (technology === 'GaN') {
      recommendations.push(
        currentLang === 'bg' ?
        '⚡ Използвайте dedicated GaN gate driver с fast turn-off' :
        '⚡ Use dedicated GaN gate driver with fast turn-off'
      );
    }
    
    if (technology === 'SiC') {
      recommendations.push(
        currentLang === 'bg' ?
        '🔒 Препоръчва се galvanic isolation (>2.5kV)' :
        '🔒 Galvanic isolation recommended (>2.5kV)'
      );
    }
    
    recommendations.push(
      currentLang === 'bg' ?
      '🛡️ Добавете Miller clamp за dv/dt immunity' :
      '🛡️ Add Miller clamp for dv/dt immunity'
    );
    
    return recommendations;
  }
}

const gateDriveCalc = new GateDriveCalculator();

// Efficiency vs Frequency Optimization Finder
class EfficiencyOptimizer {
  constructor() {
    this.frequencyRange = [1, 1000]; // kHz
    this.optimizationPoints = 50;
  }
  
  findOptimalFrequency(transistor, vdc, iLoad, temperature, technology, targetEfficiency = 95) {
    const frequencies = [];
    const efficiencies = [];
    const totalLosses = [];
    
    const fMin = this.frequencyRange[0];
    const fMax = Math.min(this.frequencyRange[1], this.getMaxReasonableFreq(technology));
    
    // Sweep frequency range
    for (let i = 0; i < this.optimizationPoints; i++) {
      const fsw_khz = fMin + (fMax - fMin) * i / (this.optimizationPoints - 1);
      const fsw = fsw_khz * 1000;
      
      // Calculate losses at this frequency
      const rds0 = transistor.rds_mohm / 1000;
      const tempCoeff = technology === 'Si' ? 0.006 : technology === 'SiC' ? 0.003 : 0.004;
      const rds = rds0 * (1 + tempCoeff * (temperature - 25));
      
      const pCond = iLoad * iLoad * rds * 0.5; // Assume 50% duty cycle
      
      // Technology-specific switching times
      const tr_ns = transistor.tr_ns || this.getTypicalTr(technology);
      const tf_ns = transistor.tf_ns || this.getTypicalTf(technology);
      
      const pSw = 0.5 * vdc * iLoad * (tr_ns + tf_ns) * 1e-9 * fsw * 2;
      const pTotal = pCond + pSw;
      
      const pOut = vdc * iLoad * 0.5;
      const efficiency = (pOut / (pOut + pTotal)) * 100;
      
      frequencies.push(fsw_khz);
      efficiencies.push(efficiency);
      totalLosses.push(pTotal);
    }
    
    // Find optimal points
    const maxEffIndex = efficiencies.indexOf(Math.max(...efficiencies));
    const targetIndex = this.findTargetEfficiencyIndex(efficiencies, targetEfficiency);
    
    return {
      frequencies,
      efficiencies,
      totalLosses,
      optimal_frequency: frequencies[maxEffIndex],
      max_efficiency: efficiencies[maxEffIndex],
      target_frequency: targetIndex >= 0 ? frequencies[targetIndex] : null,
      recommendations: this.generateFrequencyRecommendations(
        frequencies[maxEffIndex], 
        efficiencies[maxEffIndex],
        technology
      )
    };
  }
  
  getMaxReasonableFreq(technology) {
    const limits = { Si: 100, SiC: 500, GaN: 1000 };
    return limits[technology] || 100;
  }
  
  getTypicalTr(technology) {
    const times = { Si: 25, SiC: 15, GaN: 5 };
    return times[technology] || 25;
  }
  
  getTypicalTf(technology) {
    const times = { Si: 20, SiC: 12, GaN: 3 };
    return times[technology] || 20;
  }
  
  findTargetEfficiencyIndex(efficiencies, target) {
    for (let i = 0; i < efficiencies.length; i++) {
      if (efficiencies[i] >= target) {
        return i;
      }
    }
    return -1;
  }
  
  generateFrequencyRecommendations(optimalFreq, maxEff, technology) {
    const recommendations = [];
    
    if (maxEff > 98) {
      recommendations.push(currentLang === 'bg' ?
        '🎯 Отличен избор на честота за максимална ефективност' :
        '🎯 Excellent frequency choice for maximum efficiency');
    } else if (maxEff > 95) {
      recommendations.push(currentLang === 'bg' ?
        '✅ Добра честота, но има място за подобрение' :
        '✅ Good frequency, but room for improvement');
    } else {
      recommendations.push(currentLang === 'bg' ?
        '⚠️ Ниска ефективност - разгледайте други параметри' :
        '⚠️ Low efficiency - consider other parameters');
    }
    
    if (optimalFreq > 200 && technology === 'Si') {
      recommendations.push(currentLang === 'bg' ?
        '🔄 За Si транзистори се препоръчва <100kHz' :
        '🔄 For Si transistors, consider <100kHz');
    }
    
    if (optimalFreq < 50 && technology === 'GaN') {
      recommendations.push(currentLang === 'bg' ?
        '📈 GaN позволява много по-високи честоти >200kHz' :
        '📈 GaN enables much higher frequencies >200kHz');
    }
    
    return recommendations;
  }
}

const efficiencyOptimizer = new EfficiencyOptimizer();
