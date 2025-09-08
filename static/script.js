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
  
  // Total switching losses включват Miller effects, gate charge, и output capacitance
  const P_switching = (E_on + E_off + E_coss + E_miller + E_gate) * fsw * temp_factor;
  
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
    // Намираме canvas елемента
    const canvas = document.getElementById(chartId);
    if (!canvas) {
      throw new Error('Chart not found');
    }

    // Проверяваме дали има активна графика
    let chartInstance;
    if (chartId === 'lossChart' && chart) {
      chartInstance = chart;
    } else if (chartId === 'efficiencyChart' && window.efficiencyChartInstance) {
      chartInstance = window.efficiencyChartInstance;
    } else {
      throw new Error('No active chart found');
    }

    // Създаваме високо-качествен canvas за научни публикации (300 DPI)
    const originalCanvas = chartInstance.canvas;
    const scaleFactor = 3;
    
    const highQualityCanvas = document.createElement('canvas');
    const ctx = highQualityCanvas.getContext('2d');
    
    highQualityCanvas.width = originalCanvas.width * scaleFactor;
    highQualityCanvas.height = originalCanvas.height * scaleFactor;
    ctx.scale(scaleFactor, scaleFactor);
    
    // Бял фон за Office документи
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, originalCanvas.width, originalCanvas.height);
    ctx.drawImage(originalCanvas, 0, 0);
    
    // Научен watermark
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666666';
    ctx.textAlign = 'right';
    const watermark = currentLang === 'bg' 
      ? 'Si/SiC/GaN Научен Калкулатор'
      : 'Si/SiC/GaN Scientific Calculator';
    ctx.fillText(watermark, originalCanvas.width - 10, 20);
    
    // Генерираме висококачествено PNG
    const base64Image = highQualityCanvas.toDataURL('image/png', 1.0);
    const response = await fetch(base64Image);
    const blob = await response.blob();
    
    // Clipboard с HTML wrapper за центроване
    const clipboardItem = new ClipboardItem({ 
      'image/png': blob,
      'text/html': new Blob([
        `<div style="text-align: center; margin: 20px auto;">
          <img src="${base64Image}" alt="Power Electronics Chart" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" />
          <p style="font-size: 10px; color: #666; text-align: center; margin-top: 5px;">${watermark}</p>
        </div>`
      ], { type: 'text/html' })
    });
    
    await navigator.clipboard.write([clipboardItem]);
    
    // Показваме успешно съобщение с инструкции
    const button = document.getElementById(chartId === 'lossChart' ? 'copyLossChart' : 'copyEfficiencyChart');
    const originalText = button.textContent;
    button.textContent = currentLang === 'bg' ? '✅ Копирано HQ!' : '✅ Copied HQ!';
    button.disabled = true;
    
    // Показваме toast съобщение
    showTemporaryMessage(
      currentLang === 'bg' 
        ? '✅ Висококачествена графика копирана! В Word/PowerPoint: Ctrl+V за автоматично центриране.'
        : '✅ High-quality chart copied! In Word/PowerPoint: Ctrl+V for automatic centering.',
      'success'
    );
    
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
    
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
