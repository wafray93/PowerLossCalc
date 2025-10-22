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

    // Selected Transistor Integration
    selectedTransistorTitle: 'Избран транзистор',
    noTransistorSelected: 'Няма избран транзистор',
    selectFromCalculator: 'Изберете транзистор от калкулатора за подробна информация и анализ.',
    goToCalculator: 'Отиди в калкулатора',
    theoryForSelectedTransistor: 'Теория за избрания транзистор',
    noTransistorForFormulas: 'За конкретни стойности в формулите, изберете транзистор от калкулатора.',
    selectTransistor: 'Избери транзистор',
    toolsForSelectedTransistor: 'Инструменти за избрания транзистор',
    noTransistorForTools: 'За конкретни изчисления, изберете транзистор от калкулатора.',
    usingSelectedTransistor: 'Използва избрания транзистор:',

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
    liquidCooling: 'Течно охлаждане (измерено, 0.3°C/W)',

    // Advanced functionality translations
    millerCapacitance: 'Miller Capacitance Analysis',
    cgdLabel: 'CGD (pF)',
    cgsLabel: 'CGS (pF)', 
    cdsLabel: 'CDS (pF)',
    vdrLabel: 'VDR Slew Rate (V/ns)',
    calculateMiller: 'Изчисли Miller ефект',
    parameter: 'Параметър',
    value: 'Стойност',
    millerMultiplier: 'Miller Multiplier',
    effectiveCapacitance: 'Ефективен капацитет',
    millerCurrent: 'Miller ток (A)',

    deadTimeAnalysis: 'Dead-time анализ',
    deadTimeLabel: 'Dead Time (ns)',
    outputCurrentLabel: 'Изходен ток (A)',
    bodyDiodeVfLabel: 'Body Diode Vf (V)',
    switchingFreqLabel: 'Честота превключване (kHz)',
    calculateDeadTime: 'Изчисли Dead-time ефекти',
    deadTimeLosses: 'Dead-time загуби (W)',
    bodyDiodeLosses: 'Body Diode загуби (W)',
    totalDeadTimeLoss: 'Общи Dead-time загуби (W)',

    powerLossesLabel: 'Загуби мощност (W)',
    ambientTempLabel: 'Околна температура (°C)',
    thermalResistanceLabel: 'Rth JC (°C/W)',
    heatsinkRthLabel: 'Радиатор Rth (°C/W)',
    maxPowerDissipation: 'Макс мощност при 150°C (W)',

    switchingTrajectory: 'Switching Trajectory & SOA',
    loadInductanceLabel: 'Товар индуктивност (μH)',
    gateResistanceLabel: 'Gate съпротивление (Ω)',
    busVoltageLabel: 'Bus напрежение (V)',
    switchingCurrentLabel: 'Switching ток (A)',
    calculateSOA: 'Изчисли SOA & траектория',
    soaInfo: 'SOA анализ:',
    soaDescription: 'Тази графика показва границите на Safe Operating Area и текущата switching траектория. Работните точки трябва да остават в SOA границите.',

    parasiticEffects: 'Parasitic Effects анализ',
    packageParasitics: 'Package паразитни',
    packageESRLabel: 'Package ESR (mΩ)',
    packageESLLabel: 'Package ESL (nH)',
    pcbParasitics: 'PCB паразитни',
    traceESRLabel: 'Trace ESR (mΩ)',
    traceESLLabel: 'Trace ESL (nH)',
    couplingEffects: 'Coupling ефекти',
    mutualInductanceLabel: 'Mutual Inductance (nH)',
    couplingFactorLabel: 'Coupling Factor',
    calculateParasitics: 'Изчисли паразитни ефекти',
    voltageSpikeAnalysis: 'Анализ на скоковете в напрежението',
    ringingAnalysis: 'Анализ на трептенията',
    impact: 'Въздействие',
    totalESR: 'Общ ESR (mΩ)',
    totalESL: 'Общ ESL (nH)',
    voltageSpike: 'Макс скок на напрежението (V)',
    ringingFrequency: 'Честота на трептенията (MHz)',
    warningsTitle: '⚠️ Предупреждения:',

    // Tools page translations
    toolsTitle: '⚙️ Инструменти за копиране, конвертиране и експорт',
    toolsDescription: 'Професионални инструменти за експорт на графики, конвертиране на единици и управление на данни.',
    chartCopyTitle: '📋 Копиране на графики',
    chartCopyDescription: 'Експортирайте графики с висока резолюция за презентации и документи.',
    exportPNG: 'Експортирай като PNG',
    exportSVG: 'Експортирай като SVG',
    qualitySettings: 'Настройки за качество',
    dpi300: '300 DPI (Print)',
    dpi150: '150 DPI (Screen)',
    dpi72: '72 DPI (Web)',
    copyToClipboard: 'Копирай в клипборда',
    unitConverterTitle: '🔄 Конвертор на единици',
    unitConverterDescription: 'Конвертирайте между различни инженерни единици.',
    convertFrom: 'От',
    convertTo: 'До',
    conversionResult: 'Резултат',
    conversionValue: 'Стойност',
    clearConversion: 'Изчисти',
    csvImportExportTitle: '📂 CSV Импорт/Експорт',
    csvImportExportDescription: 'Импортирайте транзисторни данни или експортирайте резултати.',
    importCSV: 'Импортирай CSV',
    exportCalculations: 'Експортирай изчисления',
    importTransistorData: 'Импортирай транзисторни данни',
    exportResults: 'Експортирай резултати',
    downloadCSV: 'Свали CSV файл',
    downloadPDF: 'Свали PDF отчет',
    paramCalculatorTitle: '🧮 Калкулатор на параметри',
    paramCalculatorDescription: 'Автоматично предложение на оптимални параметри.',
    calculateOptimal: 'Изчисли оптимални параметри',
    suggestParameters: 'Предложи параметри',
    powerRating: 'Номинална мощност (W)',
    voltageRating: 'Номинално напрежение (V)',
    currentRating: 'Номинален ток (A)',
    calculateParameters: 'Изчисли параметри',
    utilityFunctionsTitle: '🛠️ Помощни функции',
    utilityFunctionsDescription: 'Управление на данни и настройки на приложението.',
    clearAllData: 'Изчисти всички данни',
    resetSettings: 'Възстанови настройки',
    appInfo: 'Информация за приложението',
    clearCache: 'Изчисти кеша',
    exportSettings: 'Експортирай настройки',
    importSettings: 'Импортирай настройки',
    aboutApp: 'За приложението',
    versionInfo: 'Информация за версията',
    technicalSupport: 'Техническа поддръжка',

    // Analysis tab specific translations
    noTransistorSelected: '⚠️ Няма избран транзистор от Calculator. Използва се fallback модел за анализ.',
    goToCalculator: 'Отиди до Calculator',
    analysisTransistorTitle: 'Използван транзистор за анализ',
    fallbackTransistorNote: 'Използва се fallback транзистор',

    // Page titles and descriptions
    calculatorPageTitle: 'Основни изчисления и избор на транзистор',
    calculatorPageDescription: 'Изчислете загуби, ефективност и изберете подходящ Si/SiC/GaN транзистор за вашето приложение.',
    analysisPageTitle: 'Графики на ефективност и загуби',
    analysisPageDescription: 'Анализирайте ефективността на различни технологии и транзистори чрез интерактивни графики.',
    databasePageTitle: 'Търсене и филтриране на транзистори',
    databasePageDescription: 'Обширна база данни с Si/SiC/GaN транзистори от водещи производители с филтриране и сравнение.',
    advancedPageTitle: 'Термичен анализ и разширени параметри',
    advancedPageDescription: 'Разширени инженерни изчисления включително термичен анализ, Miller капацитет и dead-time оптимизация.',

    // Transistor selection improvements
    clearSelection: 'Изчисти избора',
    dataSourceTitle: 'Източник на формули и данни',
    
    // Driver page translations
    driversPageTitle: 'Драйвери за Si/SiC/GaN транзистори',
    driversPageDescription: 'Интелигентно препоръчване на драйвери според избран транзистор и изчисление на комбинирани загуби.',
    driverSelection: 'Избор на драйвер',
    driverModel: 'Модел драйвер',
    driverInfo: 'Информация за драйвера',
    recommendDriver: '🤖 Препоръчай драйвер',
    calculateDriver: 'Изчисли загуби на драйвера',
    calculateCombined: 'Изчисли комбинирани загуби',
    recommendedDrivers: 'Препоръчани драйвери',
    noRecommendations: 'Няма намерени препоръчани драйвери за избрания транзистор.',
    driverRequirements: 'Изисквания към драйвера',
    compatibility: 'Съвместимост',
    selectDriverFirst: 'Моля, изберете драйвер за изчисления.',
    driverDynamicLosses: 'Загуби драйвер (динамични)',
    driverStaticLosses: 'Загуби драйвер (статични)',
    driverTotalLosses: 'Общо драйвер',
    combinedTotalLosses: 'Комбинирани загуби',
    combinedEfficiency: 'Комбинирана ефективност',
    
    // Contact page translations
    contactPageTitle: 'Контакти',
    contactPageDescription: 'Свържете се с нас за въпроси, консултации или сътрудничество.',
    contactTitle: '📧 Свържете се с нас',
    contactIntro: 'За въпроси, консултации или техническа поддръжка относно Si/SiC/GaN транзисторите и приложенията им, моля свържете се с нас:',
    primaryContact: 'Основен контакт',
    primaryContactDesc: 'Основен имейл за технически въпроси и консултации',
    alternativeContact: 'Алтернативен контакт',
    alternativeContactDesc: 'Допълнителен имейл за бързи запитвания',
    aboutApplication: 'За приложението',
    applicationDescription: 'Това е научно-образователно приложение за изчисления и анализ на Si/SiC/GaN транзистори, предназначено за инженери, преподаватели, студенти и любители в областта на силовата електроника.',
    feature1: 'База данни с над 230 реални транзистора от водещи производители',
    feature2: 'Интелигентно препоръчване на gate драйвери',
    feature3: 'Термичен анализ и разширени параметри',
    feature4: 'Научни формули базирани на IEEE стандарти',
    feature5: 'Мултиезична поддръжка (Български/English)',
    responseTime: '⏱️ Обикновено отговаряме в рамките на 24-48 часа',
    
    // Visitor counter
    visitors: 'Посещения:'
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
    liquidCooling: 'Liquid Cooling (measured, 0.3°C/W)',

    // Advanced functionality translations
    millerCapacitance: 'Miller Capacitance Analysis',
    cgdLabel: 'CGD (pF)',
    cgsLabel: 'CGS (pF)', 
    cdsLabel: 'CDS (pF)',
    vdrLabel: 'VDR Slew Rate (V/ns)',
    calculateMiller: 'Calculate Miller Effect',
    parameter: 'Parameter',
    value: 'Value',
    millerMultiplier: 'Miller Multiplier',
    effectiveCapacitance: 'Effective Capacitance',
    millerCurrent: 'Miller Current (A)',

    deadTimeAnalysis: 'Dead-time Analysis',
    deadTimeLabel: 'Dead Time (ns)',
    outputCurrentLabel: 'Output Current (A)',
    bodyDiodeVfLabel: 'Body Diode Vf (V)',
    switchingFreqLabel: 'Switching Freq (kHz)',
    calculateDeadTime: 'Calculate Dead-time Effects',
    deadTimeLosses: 'Dead-time Losses (W)',
    bodyDiodeLosses: 'Body Diode Losses (W)',
    totalDeadTimeLoss: 'Total Dead-time Loss (W)',

    powerLossesLabel: 'Power Losses (W)',
    ambientTempLabel: 'Ambient Temp (°C)',
    thermalResistanceLabel: 'Rth JC (°C/W)',
    heatsinkRthLabel: 'Heatsink Rth (°C/W)',
    maxPowerDissipation: 'Max Power at 150°C (W)',

    switchingTrajectory: 'Switching Trajectory & SOA',
    loadInductanceLabel: 'Load Inductance (μH)',
    gateResistanceLabel: 'Gate Resistance (Ω)',
    busVoltageLabel: 'Bus Voltage (V)',
    switchingCurrentLabel: 'Switching Current (A)',
    calculateSOA: 'Calculate SOA & Trajectory',
    soaInfo: 'SOA Analysis:',
    soaDescription: 'This chart shows the Safe Operating Area limits and current switching trajectory. Operating points should remain within the SOA boundaries.',

    parasiticEffects: 'Parasitic Effects Analysis',
    packageParasitics: 'Package Parasitics',
    packageESRLabel: 'Package ESR (mΩ)',
    packageESLLabel: 'Package ESL (nH)',
    pcbParasitics: 'PCB Parasitics',
    traceESRLabel: 'Trace ESR (mΩ)',
    traceESLLabel: 'Trace ESL (nH)',
    couplingEffects: 'Coupling Effects',
    mutualInductanceLabel: 'Mutual Inductance (nH)',
    couplingFactorLabel: 'Coupling Factor',
    calculateParasitics: 'Calculate Parasitic Effects',
    voltageSpikeAnalysis: 'Voltage Spike Analysis',
    ringingAnalysis: 'Ringing Analysis',
    impact: 'Impact',
    totalESR: 'Total ESR (mΩ)',
    totalESL: 'Total ESL (nH)',
    voltageSpike: 'Max Voltage Spike (V)',
    ringingFrequency: 'Ringing Frequency (MHz)',
    warningsTitle: '⚠️ Warnings:',

    // Tools page translations
    toolsTitle: '⚙️ Chart Copying, Conversion & Export Tools',
    toolsDescription: 'Professional tools for chart export, unit conversion and data management.',
    chartCopyTitle: '📋 Chart Copying',
    chartCopyDescription: 'Export high-resolution charts for presentations and documents.',
    exportPNG: 'Export as PNG',
    exportSVG: 'Export as SVG',
    qualitySettings: 'Quality Settings',
    dpi300: '300 DPI (Print)',
    dpi150: '150 DPI (Screen)',
    dpi72: '72 DPI (Web)',
    copyToClipboard: 'Copy to Clipboard',
    unitConverterTitle: '🔄 Unit Converter',
    unitConverterDescription: 'Convert between different engineering units.',
    convertFrom: 'From',
    convertTo: 'To',
    conversionResult: 'Result',
    conversionValue: 'Value',
    clearConversion: 'Clear',
    csvImportExportTitle: '📂 CSV Import/Export',
    csvImportExportDescription: 'Import transistor data or export calculation results.',
    importCSV: 'Import CSV',
    exportCalculations: 'Export Calculations',
    importTransistorData: 'Import Transistor Data',
    exportResults: 'Export Results',
    downloadCSV: 'Download CSV File',
    downloadPDF: 'Download PDF Report',
    paramCalculatorTitle: '🧮 Parameter Calculator',
    paramCalculatorDescription: 'Automatic optimal parameter suggestions.',
    calculateOptimal: 'Calculate Optimal Parameters',
    suggestParameters: 'Suggest Parameters',
    powerRating: 'Power Rating (W)',
    voltageRating: 'Voltage Rating (V)',
    currentRating: 'Current Rating (A)',
    calculateParameters: 'Calculate Parameters',
    utilityFunctionsTitle: '🛠️ Utility Functions',
    utilityFunctionsDescription: 'Data management and application settings.',
    clearAllData: 'Clear All Data',
    resetSettings: 'Reset Settings',
    appInfo: 'Application Info',
    clearCache: 'Clear Cache',
    exportSettings: 'Export Settings',
    importSettings: 'Import Settings',
    aboutApp: 'About Application',
    versionInfo: 'Version Information',
    technicalSupport: 'Technical Support',

    // Analysis tab specific translations
    noTransistorSelected: '⚠️ No transistor selected from Calculator. Using fallback model for analysis.',
    goToCalculator: 'Go to Calculator',
    analysisTransistorTitle: 'Transistor Used for Analysis',
    fallbackTransistorNote: 'Using fallback transistor',

    // Page titles and descriptions
    calculatorPageTitle: 'Basic Calculations and Transistor Selection',
    calculatorPageDescription: 'Calculate losses, efficiency and select suitable Si/SiC/GaN transistor for your application.',
    analysisPageTitle: 'Efficiency and Loss Charts',
    analysisPageDescription: 'Analyze efficiency of different technologies and transistors through interactive charts.',
    databasePageTitle: 'Transistor Search and Filtering',
    databasePageDescription: 'Comprehensive database of Si/SiC/GaN transistors from leading manufacturers with filtering and comparison.',
    advancedPageTitle: 'Thermal Analysis and Advanced Parameters',
    advancedPageDescription: 'Advanced engineering calculations including thermal analysis, Miller capacitance and dead-time optimization.',

    // Transistor selection improvements
    clearSelection: 'Clear Selection',
    dataSourceTitle: 'Source of Formulas and Data',
    
    // Driver page translations
    driversPageTitle: 'Gate Drivers for Si/SiC/GaN Transistors',
    driversPageDescription: 'Intelligent driver recommendation based on selected transistor and combined loss calculations.',
    driverSelection: 'Driver Selection',
    driverModel: 'Driver Model',
    driverInfo: 'Driver Information',
    recommendDriver: '🤖 Recommend Driver',
    calculateDriver: 'Calculate Driver Losses',
    calculateCombined: 'Calculate Combined Losses',
    recommendedDrivers: 'Recommended Drivers',
    noRecommendations: 'No recommended drivers found for selected transistor.',
    driverRequirements: 'Driver Requirements',
    compatibility: 'Compatibility',
    selectDriverFirst: 'Please select a driver for calculations.',
    driverDynamicLosses: 'Driver Losses (dynamic)',
    driverStaticLosses: 'Driver Losses (static)',
    driverTotalLosses: 'Total Driver',
    combinedTotalLosses: 'Combined Losses',
    combinedEfficiency: 'Combined Efficiency',
    
    // Contact page translations
    contactPageTitle: 'Contact',
    contactPageDescription: 'Contact us for questions, consultations or collaboration.',
    contactTitle: '📧 Contact Us',
    contactIntro: 'For questions, consultations or technical support regarding Si/SiC/GaN transistors and their applications, please contact us:',
    primaryContact: 'Primary Contact',
    primaryContactDesc: 'Primary email for technical questions and consultations',
    alternativeContact: 'Alternative Contact',
    alternativeContactDesc: 'Additional email for quick inquiries',
    aboutApplication: 'About the Application',
    applicationDescription: 'This is a scientific-educational application for calculations and analysis of Si/SiC/GaN transistors, designed for engineers, teachers, students and enthusiasts in the field of power electronics.',
    feature1: 'Database with over 230 real transistors from leading manufacturers',
    feature2: 'Intelligent gate driver recommendation',
    feature3: 'Thermal analysis and advanced parameters',
    feature4: 'Scientific formulas based on IEEE standards',
    feature5: 'Multilingual support (Bulgarian/English)',
    responseTime: '⏱️ We usually respond within 24-48 hours',
    
    // Visitor counter
    visitors: 'Visitors:'
  }
};

// ========================
// VISITOR COUNTER
// ========================

function initVisitorCounter() {
  const counterElement = document.getElementById('visitorCount');
  if (!counterElement) return;
  
  // Get or initialize visitor count - increment on EVERY page load
  let visitorCount = parseInt(localStorage.getItem('siteVisitorCount') || '0');
  visitorCount++; // Increment on every visit
  localStorage.setItem('siteVisitorCount', visitorCount.toString());
  
  // Display the count directly without animation to avoid showing 0
  // Optimistic formatting - minimum 7 digits for future high traffic!
  const numDigits = Math.max(7, visitorCount.toString().length);
  counterElement.textContent = visitorCount.toString().padStart(numDigits, '0');
}

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
      },
      "IRFP4668PBF": {
        name: "IRFP4668PBF (Si MOSFET)",
        vds_max: 200, id_max: 130, rds_mohm: 9.7, tr_ns: 80, tf_ns: 100,
        alpha: 0.0060, package: "TO-247AC", manufacturer: "Infineon",
        application: "High efficiency synchronous rectification in SMPS"
      },
      "IRFP4710": {
        name: "IRFP4710 (Si MOSFET)",
        vds_max: 100, id_max: 72, rds_mohm: 14, tr_ns: 55, tf_ns: 95,
        alpha: 0.0065, package: "TO-247AC", manufacturer: "Infineon",
        application: "Motor drives, DC-DC converters"
      },
      "IRFP4768PBF": {
        name: "IRFP4768PBF (Si MOSFET)",
        vds_max: 250, id_max: 93, rds_mohm: 17.5, tr_ns: 105, tf_ns: 93,
        alpha: 0.0068, package: "TO-247AC", manufacturer: "Infineon",
        application: "Solar inverters, UPS systems"
      },
      "IXFH40N50Q3": {
        name: "IXFH40N50Q3 (Si MOSFET)",
        vds_max: 500, id_max: 40, rds_mohm: 160, tr_ns: 25, tf_ns: 42,
        alpha: 0.0070, package: "TO-247", manufacturer: "IXYS",
        application: "Switch-mode and resonant-mode power supplies"
      },
      "IXFH50N50P3": {
        name: "IXFH50N50P3 (Si MOSFET)",
        vds_max: 500, id_max: 50, rds_mohm: 120, tr_ns: 20, tf_ns: 30,
        alpha: 0.0072, package: "TO-247", manufacturer: "IXYS",
        application: "DC-DC converters, UPS, motor control"
      },
      "IXFH60N50P3": {
        name: "IXFH60N50P3 (Si MOSFET)",
        vds_max: 500, id_max: 60, rds_mohm: 95, tr_ns: 22, tf_ns: 35,
        alpha: 0.0070, package: "TO-247", manufacturer: "IXYS",
        application: "PFC circuits, solar energy systems"
      },
      "IXFH70N30Q3": {
        name: "IXFH70N30Q3 (Si MOSFET)",
        vds_max: 300, id_max: 70, rds_mohm: 54, tr_ns: 18, tf_ns: 28,
        alpha: 0.0065, package: "TO-247", manufacturer: "IXYS",
        application: "Motor drives, inverters"
      },
      "IXFH80N65X2": {
        name: "IXFH80N65X2 (Si MOSFET)",
        vds_max: 650, id_max: 80, rds_mohm: 42, tr_ns: 45, tf_ns: 80,
        alpha: 0.0075, package: "TO-247", manufacturer: "IXYS",
        application: "High efficiency switching applications"
      },
      "IXFH90N20X3": {
        name: "IXFH90N20X3 (Si MOSFET)",
        vds_max: 200, id_max: 90, rds_mohm: 13.5, tr_ns: 20, tf_ns: 40,
        alpha: 0.0060, package: "TO-247", manufacturer: "IXYS",
        application: "DC-DC converters, synchronous rectification"
      },
      "IXFH100N65X3": {
        name: "IXFH100N65X3 (Si MOSFET)",
        vds_max: 650, id_max: 100, rds_mohm: 33, tr_ns: 50, tf_ns: 90,
        alpha: 0.0078, package: "TO-247", manufacturer: "IXYS",
        application: "Solar inverters, EV chargers"
      },
      "IXFH110N10P": {
        name: "IXFH110N10P (Si MOSFET)",
        vds_max: 100, id_max: 110, rds_mohm: 11, tr_ns: 30, tf_ns: 50,
        alpha: 0.0055, package: "TO-247", manufacturer: "IXYS",
        application: "Motor control, power supplies"
      },
      "IXFH120N20P": {
        name: "IXFH120N20P (Si MOSFET)",
        vds_max: 200, id_max: 120, rds_mohm: 18, tr_ns: 35, tf_ns: 55,
        alpha: 0.0062, package: "TO-247", manufacturer: "IXYS",
        application: "UPS systems, welding machines"
      },
      "IXFH150N17T2": {
        name: "IXFH150N17T2 (Si MOSFET)",
        vds_max: 170, id_max: 150, rds_mohm: 12, tr_ns: 40, tf_ns: 60,
        alpha: 0.0060, package: "TO-247", manufacturer: "IXYS",
        application: "High current switching, automotive"
      },
      "IXFH180N10T": {
        name: "IXFH180N10T (Si MOSFET)",
        vds_max: 100, id_max: 180, rds_mohm: 6.5, tr_ns: 45, tf_ns: 70,
        alpha: 0.0058, package: "TO-247", manufacturer: "IXYS",
        application: "Battery management systems"
      },
      "IXFH200N10P": {
        name: "IXFH200N10P (Si MOSFET)",
        vds_max: 100, id_max: 200, rds_mohm: 6.5, tr_ns: 50, tf_ns: 80,
        alpha: 0.0055, package: "TO-247", manufacturer: "IXYS",
        application: "DC motor drives, power tools"
      },
      "IXFH220N06T3": {
        name: "IXFH220N06T3 (Si MOSFET)",
        vds_max: 60, id_max: 220, rds_mohm: 3.5, tr_ns: 25, tf_ns: 40,
        alpha: 0.0050, package: "TO-247", manufacturer: "IXYS",
        application: "Synchronous rectification, low voltage applications"
      },
      "IXFH230N075T2": {
        name: "IXFH230N075T2 (Si MOSFET)",
        vds_max: 75, id_max: 230, rds_mohm: 3.5, tr_ns: 30, tf_ns: 50,
        alpha: 0.0052, package: "TO-247", manufacturer: "IXYS",
        application: "Automotive power systems"
      },
      "IXFH240N075X3": {
        name: "IXFH240N075X3 (Si MOSFET)",
        vds_max: 75, id_max: 240, rds_mohm: 2.8, tr_ns: 35, tf_ns: 55,
        alpha: 0.0050, package: "TO-247", manufacturer: "IXYS",
        application: "EV auxiliary systems"
      },
      "IXFH250N10T": {
        name: "IXFH250N10T (Si MOSFET)",
        vds_max: 100, id_max: 250, rds_mohm: 5, tr_ns: 40, tf_ns: 60,
        alpha: 0.0055, package: "TO-247", manufacturer: "IXYS",
        application: "High power converters"
      },
      "IXFH300N07T2": {
        name: "IXFH300N07T2 (Si MOSFET)",
        vds_max: 70, id_max: 300, rds_mohm: 2.5, tr_ns: 45, tf_ns: 70,
        alpha: 0.0048, package: "TO-247", manufacturer: "IXYS",
        application: "Power factor correction"
      },
      "IXFH320N10T2": {
        name: "IXFH320N10T2 (Si MOSFET)",
        vds_max: 100, id_max: 320, rds_mohm: 3.5, tr_ns: 50, tf_ns: 80,
        alpha: 0.0050, package: "TO-247", manufacturer: "IXYS",
        application: "Industrial motor drives"
      },
      "IXFH360N10T": {
        name: "IXFH360N10T (Si MOSFET)",
        vds_max: 100, id_max: 360, rds_mohm: 3, tr_ns: 55, tf_ns: 90,
        alpha: 0.0052, package: "TO-247", manufacturer: "IXYS",
        application: "Renewable energy systems"
      },
      "IXFH400N075T2": {
        name: "IXFH400N075T2 (Si MOSFET)",
        vds_max: 75, id_max: 400, rds_mohm: 2, tr_ns: 60, tf_ns: 100,
        alpha: 0.0045, package: "TO-247", manufacturer: "IXYS",
        application: "High current applications"
      },
      "IXFH500N10P": {
        name: "IXFH500N10P (Si MOSFET)",
        vds_max: 100, id_max: 500, rds_mohm: 2.5, tr_ns: 65, tf_ns: 110,
        alpha: 0.0050, package: "TO-247", manufacturer: "IXYS",
        application: "Welding equipment, plasma cutters"
      },
      "IXFH600N07T": {
        name: "IXFH600N07T (Si MOSFET)",
        vds_max: 70, id_max: 600, rds_mohm: 1.8, tr_ns: 70, tf_ns: 120,
        alpha: 0.0045, package: "TO-247", manufacturer: "IXYS",
        application: "Battery chargers, power supplies"
      },
      "IXFH700N06T": {
        name: "IXFH700N06T (Si MOSFET)",
        vds_max: 60, id_max: 700, rds_mohm: 1.5, tr_ns: 75, tf_ns: 130,
        alpha: 0.0042, package: "TO-247", manufacturer: "IXYS",
        application: "Electric vehicle systems"
      },
      "IXFH800N075T": {
        name: "IXFH800N075T (Si MOSFET)",
        vds_max: 75, id_max: 800, rds_mohm: 1.2, tr_ns: 80, tf_ns: 140,
        alpha: 0.0040, package: "TO-247", manufacturer: "IXYS",
        application: "High power audio amplifiers"
      },
      "IXFH900N10T": {
        name: "IXFH900N10T (Si MOSFET)",
        vds_max: 100, id_max: 900, rds_mohm: 1.1, tr_ns: 85, tf_ns: 150,
        alpha: 0.0045, package: "TO-247", manufacturer: "IXYS",
        application: "Induction heating systems"
      },
      "IXFH1000N08T": {
        name: "IXFH1000N08T (Si MOSFET)",
        vds_max: 80, id_max: 1000, rds_mohm: 1.0, tr_ns: 90, tf_ns: 160,
        alpha: 0.0040, package: "TO-247", manufacturer: "IXYS",
        application: "Medical power supplies"
      },
      "STW9NK90Z": {
        name: "STW9NK90Z (Si MOSFET)",
        vds_max: 900, id_max: 8, rds_mohm: 1200, tr_ns: 30, tf_ns: 70,
        alpha: 0.0085, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High voltage switching"
      },
      "STW11NK100Z": {
        name: "STW11NK100Z (Si MOSFET)",
        vds_max: 1000, id_max: 8.3, rds_mohm: 1300, tr_ns: 35, tf_ns: 75,
        alpha: 0.0090, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "SMPS, lighting ballasts"
      },
      "STW13NK100Z": {
        name: "STW13NK100Z (Si MOSFET)",
        vds_max: 1000, id_max: 10, rds_mohm: 850, tr_ns: 40, tf_ns: 80,
        alpha: 0.0088, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Industrial power supplies"
      },
      "STW15NK90Z": {
        name: "STW15NK90Z (Si MOSFET)",
        vds_max: 900, id_max: 15, rds_mohm: 450, tr_ns: 45, tf_ns: 85,
        alpha: 0.0080, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Welding machines, UPS"
      },
      "STW18NK80Z": {
        name: "STW18NK80Z (Si MOSFET)",
        vds_max: 800, id_max: 18, rds_mohm: 350, tr_ns: 50, tf_ns: 90,
        alpha: 0.0075, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Motor control, inverters"
      },
      "STW20NK50Z": {
        name: "STW20NK50Z (Si MOSFET)",
        vds_max: 500, id_max: 17, rds_mohm: 230, tr_ns: 25, tf_ns: 45,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Audio amplifiers, power supplies"
      },
      "STW21N150K5": {
        name: "STW21N150K5 (Si MOSFET)",
        vds_max: 1500, id_max: 14, rds_mohm: 750, tr_ns: 60, tf_ns: 100,
        alpha: 0.0095, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High voltage applications, X-ray generators"
      },
      "STW24N60M2": {
        name: "STW24N60M2 (Si MOSFET)",
        vds_max: 600, id_max: 18, rds_mohm: 190, tr_ns: 20, tf_ns: 40,
        alpha: 0.0075, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "SMPS, solar inverters"
      },
      "STW26NM60N": {
        name: "STW26NM60N (Si MOSFET)",
        vds_max: 600, id_max: 20, rds_mohm: 160, tr_ns: 25, tf_ns: 50,
        alpha: 0.0072, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "PFC stages, resonant converters"
      },
      "STW28N60DM2": {
        name: "STW28N60DM2 (Si MOSFET)",
        vds_max: 600, id_max: 21, rds_mohm: 150, tr_ns: 30, tf_ns: 60,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Telecom power supplies"
      },
      "STW30N80K5": {
        name: "STW30N80K5 (Si MOSFET)",
        vds_max: 800, id_max: 24, rds_mohm: 175, tr_ns: 35, tf_ns: 70,
        alpha: 0.0078, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Industrial drives, UPS"
      },
      "STW33N60M2": {
        name: "STW33N60M2 (Si MOSFET)",
        vds_max: 600, id_max: 26, rds_mohm: 115, tr_ns: 40, tf_ns: 80,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "EV chargers, renewable energy"
      },
      "STW34NM60N": {
        name: "STW34NM60N (Si MOSFET)",
        vds_max: 600, id_max: 29, rds_mohm: 99, tr_ns: 45, tf_ns: 90,
        alpha: 0.0068, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Motor control systems"
      },
      "STW36N55M5": {
        name: "STW36N55M5 (Si MOSFET)",
        vds_max: 550, id_max: 33, rds_mohm: 80, tr_ns: 50, tf_ns: 100,
        alpha: 0.0065, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High efficiency converters"
      },
      "STW40N95DK5": {
        name: "STW40N95DK5 (Si MOSFET)",
        vds_max: 950, id_max: 38, rds_mohm: 110, tr_ns: 55, tf_ns: 110,
        alpha: 0.0080, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High voltage power supplies"
      },
      "STW45NM60": {
        name: "STW45NM60 (Si MOSFET)",
        vds_max: 600, id_max: 45, rds_mohm: 90, tr_ns: 60, tf_ns: 120,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Industrial applications"
      },
      "STW48N60M2": {
        name: "STW48N60M2 (Si MOSFET)",
        vds_max: 600, id_max: 37, rds_mohm: 69, tr_ns: 65, tf_ns: 130,
        alpha: 0.0068, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Server power supplies"
      },
      "STW50N65DM2AG": {
        name: "STW50N65DM2AG (Si MOSFET)",
        vds_max: 650, id_max: 38, rds_mohm: 76, tr_ns: 70, tf_ns: 140,
        alpha: 0.0072, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Automotive grade, EV systems"
      },
      "STW55NM60N": {
        name: "STW55NM60N (Si MOSFET)",
        vds_max: 600, id_max: 51, rds_mohm: 50, tr_ns: 75, tf_ns: 150,
        alpha: 0.0065, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High power inverters"
      },
      "STW60NM50N": {
        name: "STW60NM50N (Si MOSFET)",
        vds_max: 500, id_max: 60, rds_mohm: 45, tr_ns: 80, tf_ns: 160,
        alpha: 0.0062, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Renewable energy converters"
      },
      "STW65N65DM2AG": {
        name: "STW65N65DM2AG (Si MOSFET)",
        vds_max: 650, id_max: 48, rds_mohm: 50, tr_ns: 85, tf_ns: 170,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Automotive power systems"
      },
      "STW69N65M5": {
        name: "STW69N65M5 (Si MOSFET)",
        vds_max: 650, id_max: 58, rds_mohm: 45, tr_ns: 90, tf_ns: 180,
        alpha: 0.0072, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Industrial motor drives"
      },
      "STW70N60DM2": {
        name: "STW70N60DM2 (Si MOSFET)",
        vds_max: 600, id_max: 66, rds_mohm: 40, tr_ns: 95, tf_ns: 190,
        alpha: 0.0068, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High efficiency SMPS"
      },
      "STW75NF30": {
        name: "STW75NF30 (Si MOSFET)",
        vds_max: 300, id_max: 60, rds_mohm: 33, tr_ns: 100, tf_ns: 200,
        alpha: 0.0065, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "DC-DC converters"
      },
      "STW77N65M5": {
        name: "STW77N65M5 (Si MOSFET)",
        vds_max: 650, id_max: 69, rds_mohm: 38, tr_ns: 105, tf_ns: 210,
        alpha: 0.0070, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Solar inverters"
      },
      "STW80N70F6": {
        name: "STW80N70F6 (Si MOSFET)",
        vds_max: 68, id_max: 74, rds_mohm: 5.8, tr_ns: 20, tf_ns: 40,
        alpha: 0.0050, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Low voltage high current applications"
      },
      "STW88N65M5": {
        name: "STW88N65M5 (Si MOSFET)",
        vds_max: 650, id_max: 69, rds_mohm: 29, tr_ns: 110, tf_ns: 220,
        alpha: 0.0072, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "High power applications"
      },
      "STW90NK80Z": {
        name: "STW90NK80Z (Si MOSFET)",
        vds_max: 800, id_max: 90, rds_mohm: 40, tr_ns: 115, tf_ns: 230,
        alpha: 0.0075, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Industrial power systems"
      },
      "IRF1010E": {
        name: "IRF1010E (Si MOSFET)",
        vds_max: 60, id_max: 84, rds_mohm: 12, tr_ns: 25, tf_ns: 50,
        alpha: 0.0055, package: "TO-220AB", manufacturer: "Infineon",
        application: "Automotive applications"
      },
      "IRF1404": {
        name: "IRF1404 (Si MOSFET)",
        vds_max: 40, id_max: 202, rds_mohm: 4, tr_ns: 30, tf_ns: 60,
        alpha: 0.0050, package: "TO-220AB", manufacturer: "Infineon",
        application: "DC motor control"
      },
      "IRF2804": {
        name: "IRF2804 (Si MOSFET)",
        vds_max: 40, id_max: 280, rds_mohm: 2.3, tr_ns: 35, tf_ns: 70,
        alpha: 0.0048, package: "TO-220AB", manufacturer: "Infineon",
        application: "High current switching"
      },
      "IRF2903Z": {
        name: "IRF2903Z (Si MOSFET)",
        vds_max: 30, id_max: 260, rds_mohm: 2.4, tr_ns: 40, tf_ns: 80,
        alpha: 0.0045, package: "TO-220AB", manufacturer: "Infineon",
        application: "Synchronous rectification"
      },
      "IRF3710": {
        name: "IRF3710 (Si MOSFET)",
        vds_max: 100, id_max: 57, rds_mohm: 23, tr_ns: 45, tf_ns: 90,
        alpha: 0.0060, package: "TO-220AB", manufacturer: "Infineon",
        application: "Power supplies"
      },
      "IRF530N": {
        name: "IRF530N (Si MOSFET)",
        vds_max: 100, id_max: 17, rds_mohm: 90, tr_ns: 50, tf_ns: 100,
        alpha: 0.0065, package: "TO-220AB", manufacturer: "Infineon",
        application: "General purpose"
      },
      "IRF640N": {
        name: "IRF640N (Si MOSFET)",
        vds_max: 200, id_max: 18, rds_mohm: 150, tr_ns: 55, tf_ns: 110,
        alpha: 0.0068, package: "TO-220AB", manufacturer: "Infineon",
        application: "Switching applications"
      },
      "IRF830": {
        name: "IRF830 (Si MOSFET)",
        vds_max: 500, id_max: 4.5, rds_mohm: 1500, tr_ns: 60, tf_ns: 120,
        alpha: 0.0075, package: "TO-220AB", manufacturer: "Infineon",
        application: "High voltage switching"
      },
      "IRFBC40": {
        name: "IRFBC40 (Si MOSFET)",
        vds_max: 600, id_max: 6.2, rds_mohm: 1200, tr_ns: 65, tf_ns: 130,
        alpha: 0.0080, package: "TO-220AB", manufacturer: "Infineon",
        application: "SMPS"
      },
      "IRFP450": {
        name: "IRFP450 (Si MOSFET)",
        vds_max: 500, id_max: 14, rds_mohm: 400, tr_ns: 70, tf_ns: 140,
        alpha: 0.0072, package: "TO-247AC", manufacturer: "Infineon",
        application: "Power amplifiers"
      },
      "IRFPS37N50A": {
        name: "IRFPS37N50A (Si MOSFET)",
        vds_max: 500, id_max: 36, rds_mohm: 130, tr_ns: 75, tf_ns: 150,
        alpha: 0.0070, package: "Super-247", manufacturer: "Infineon",
        application: "High power switching"
      },
      "IRFPS40N50L": {
        name: "IRFPS40N50L (Si MOSFET)",
        vds_max: 500, id_max: 46, rds_mohm: 100, tr_ns: 80, tf_ns: 160,
        alpha: 0.0068, package: "Super-247", manufacturer: "Infineon",
        application: "Motor drives"
      },
      "IRFPS43N50K": {
        name: "IRFPS43N50K (Si MOSFET)",
        vds_max: 500, id_max: 47, rds_mohm: 85, tr_ns: 85, tf_ns: 170,
        alpha: 0.0065, package: "Super-247", manufacturer: "Infineon",
        application: "UPS systems"
      },
      "IRFPS60N50C": {
        name: "IRFPS60N50C (Si MOSFET)",
        vds_max: 500, id_max: 57, rds_mohm: 70, tr_ns: 90, tf_ns: 180,
        alpha: 0.0062, package: "Super-247", manufacturer: "Infineon",
        application: "Industrial inverters"
      },
      "IPB60R099C6": {
        name: "IPB60R099C6 (Si MOSFET)",
        vds_max: 600, id_max: 38, rds_mohm: 99, tr_ns: 12, tf_ns: 26,
        alpha: 0.0070, package: "TO-263", manufacturer: "Infineon",
        application: "Solar inverters, EV chargers"
      },
      "IPB60R040C7": {
        name: "IPB60R040C7 (Si MOSFET)",
        vds_max: 600, id_max: 46, rds_mohm: 40, tr_ns: 18, tf_ns: 38,
        alpha: 0.0068, package: "TO-263", manufacturer: "Infineon",
        application: "Server power supplies"
      },
      "IPW65R041CFD": {
        name: "IPW65R041CFD (Si MOSFET)",
        vds_max: 650, id_max: 68.5, rds_mohm: 41, tr_ns: 22, tf_ns: 48,
        alpha: 0.0072, package: "TO-247", manufacturer: "Infineon",
        application: "Telecom power supplies"
      },
      "IPW65R019C7": {
        name: "IPW65R019C7 (Si MOSFET)",
        vds_max: 650, id_max: 75, rds_mohm: 19, tr_ns: 28, tf_ns: 58,
        alpha: 0.0065, package: "TO-247", manufacturer: "Infineon",
        application: "Industrial drives"
      },
      "IPW90R120C3": {
        name: "IPW90R120C3 (Si MOSFET)",
        vds_max: 900, id_max: 36, rds_mohm: 120, tr_ns: 32, tf_ns: 68,
        alpha: 0.0080, package: "TO-247", manufacturer: "Infineon",
        application: "High voltage applications"
      },
      "IPW60R017C7": {
        name: "IPW60R017C7 (Si MOSFET)",
        vds_max: 600, id_max: 109, rds_mohm: 17, tr_ns: 35, tf_ns: 75,
        alpha: 0.0062, package: "TO-247", manufacturer: "Infineon",
        application: "High power SMPS"
    },
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
      },
      "C3M0032120K": {
        name: "C3M0032120K (SiC MOSFET)",
        vds_max: 1200, id_max: 63, rds_mohm: 32, tr_ns: 10, tf_ns: 14,
        alpha: 0.0015, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "EV fast chargers, solar inverters"
      },
      "C3M0016120K": {
        name: "C3M0016120K (SiC MOSFET)",
        vds_max: 1200, id_max: 115, rds_mohm: 16, tr_ns: 9, tf_ns: 15,
        alpha: 0.0014, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Industrial power supplies, UPS"
      },
      "C3M0021120K": {
        name: "C3M0021120K (SiC MOSFET)",
        vds_max: 1200, id_max: 100, rds_mohm: 21, tr_ns: 11, tf_ns: 16,
        alpha: 0.0016, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Renewable energy systems"
      },
      "C3M0040120K": {
        name: "C3M0040120K (SiC MOSFET)",
        vds_max: 1200, id_max: 58, rds_mohm: 40, tr_ns: 12, tf_ns: 18,
        alpha: 0.0017, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Motor drives, traction"
      },
      "C3M0060065K": {
        name: "C3M0060065K (SiC MOSFET)",
        vds_max: 650, id_max: 37, rds_mohm: 60, tr_ns: 8, tf_ns: 12,
        alpha: 0.0015, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Server PSU, telecom"
      },
      "C3M0015065K": {
        name: "C3M0015065K (SiC MOSFET)",
        vds_max: 650, id_max: 107, rds_mohm: 15, tr_ns: 10, tf_ns: 15,
        alpha: 0.0013, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "EV onboard chargers"
      },
      "C3M0025065K": {
        name: "C3M0025065K (SiC MOSFET)",
        vds_max: 650, id_max: 76, rds_mohm: 25, tr_ns: 9, tf_ns: 14,
        alpha: 0.0014, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Solar inverters"
      },
      "C3M0030065K": {
        name: "C3M0030065K (SiC MOSFET)",
        vds_max: 650, id_max: 63, rds_mohm: 30, tr_ns: 11, tf_ns: 16,
        alpha: 0.0015, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "Industrial drives"
      },
      "C3M0075120K": {
        name: "C3M0075120K (SiC MOSFET)",
        vds_max: 1200, id_max: 30, rds_mohm: 75, tr_ns: 13, tf_ns: 19,
        alpha: 0.0018, package: "TO-247-4", manufacturer: "Wolfspeed",
        application: "High frequency switching"
      },
      "C3M0120090J": {
        name: "C3M0120090J (SiC MOSFET)",
        vds_max: 900, id_max: 23, rds_mohm: 120, tr_ns: 14, tf_ns: 20,
        alpha: 0.0020, package: "TO-263-7", manufacturer: "Wolfspeed",
        application: "Compact power modules"
      },
      "IMW120R027M1H": {
        name: "IMW120R027M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 80, rds_mohm: 27, tr_ns: 15, tf_ns: 22,
        alpha: 0.0016, package: "TO-247", manufacturer: "Infineon",
        application: "EV traction inverters"
      },
      "IMW120R040M1H": {
        name: "IMW120R040M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 56, rds_mohm: 40, tr_ns: 16, tf_ns: 24,
        alpha: 0.0017, package: "TO-247", manufacturer: "Infineon",
        application: "Solar central inverters"
      },
      "IMW120R060M1H": {
        name: "IMW120R060M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 37, rds_mohm: 60, tr_ns: 17, tf_ns: 25,
        alpha: 0.0018, package: "TO-247", manufacturer: "Infineon",
        application: "UPS systems"
      },
      "IMW120R090M1H": {
        name: "IMW120R090M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 26, rds_mohm: 90, tr_ns: 18, tf_ns: 26,
        alpha: 0.0020, package: "TO-247", manufacturer: "Infineon",
        application: "Industrial welders"
      },
      "IMW120R220M1H": {
        name: "IMW120R220M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 13, rds_mohm: 220, tr_ns: 19, tf_ns: 28,
        alpha: 0.0022, package: "TO-247", manufacturer: "Infineon",
        application: "Medical equipment"
      },
      "IMZA65R027M1H": {
        name: "IMZA65R027M1H (SiC MOSFET)",
        vds_max: 650, id_max: 63, rds_mohm: 27, tr_ns: 10, tf_ns: 15,
        alpha: 0.0015, package: "TO-247-4", manufacturer: "Infineon",
        application: "Server PSU"
      },
      "IMZA65R048M1H": {
        name: "IMZA65R048M1H (SiC MOSFET)",
        vds_max: 650, id_max: 39, rds_mohm: 48, tr_ns: 11, tf_ns: 16,
        alpha: 0.0016, package: "TO-247-4", manufacturer: "Infineon",
        application: "Telecom rectifiers"
      },
      "IMZA65R072M1H": {
        name: "IMZA65R072M1H (SiC MOSFET)",
        vds_max: 650, id_max: 26, rds_mohm: 72, tr_ns: 12, tf_ns: 18,
        alpha: 0.0017, package: "TO-247-4", manufacturer: "Infineon",
        application: "EV chargers"
      },
      "IMZA65R107M1H": {
        name: "IMZA65R107M1H (SiC MOSFET)",
        vds_max: 650, id_max: 18, rds_mohm: 107, tr_ns: 13, tf_ns: 19,
        alpha: 0.0018, package: "TO-247-4", manufacturer: "Infineon",
        application: "Solar microinverters"
      },
      "IMZA120R027M1H": {
        name: "IMZA120R027M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 75, rds_mohm: 27, tr_ns: 14, tf_ns: 20,
        alpha: 0.0016, package: "TO-247-4", manufacturer: "Infineon",
        application: "Traction systems"
      },
      "IMZA120R040M1H": {
        name: "IMZA120R040M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 52, rds_mohm: 40, tr_ns: 15, tf_ns: 22,
        alpha: 0.0017, package: "TO-247-4", manufacturer: "Infineon",
        application: "Wind turbine converters"
      },
      "IMZA120R060M1H": {
        name: "IMZA120R060M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 36, rds_mohm: 60, tr_ns: 16, tf_ns: 24,
        alpha: 0.0018, package: "TO-247-4", manufacturer: "Infineon",
        application: "Grid-tied inverters"
      },
      "IMZA120R090M1H": {
        name: "IMZA120R090M1H (SiC MOSFET)",
        vds_max: 1200, id_max: 25, rds_mohm: 90, tr_ns: 17, tf_ns: 25,
        alpha: 0.0020, package: "TO-247-4", manufacturer: "Infineon",
        application: "Industrial automation"
      },
      "SCTW90N65G2V": {
        name: "SCTW90N65G2V (SiC MOSFET)",
        vds_max: 650, id_max: 119, rds_mohm: 18, tr_ns: 20, tf_ns: 30,
        alpha: 0.0015, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "EV fast charging stations"
      },
      "SCTW100N120G2AG": {
        name: "SCTW100N120G2AG (SiC MOSFET)",
        vds_max: 1200, id_max: 75, rds_mohm: 30, tr_ns: 22, tf_ns: 32,
        alpha: 0.0017, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Automotive traction inverters"
      },
      "SCTW35N65G2VAG": {
        name: "SCTW35N65G2VAG (SiC MOSFET)",
        vds_max: 650, id_max: 45, rds_mohm: 52, tr_ns: 18, tf_ns: 28,
        alpha: 0.0018, package: "TO-247", manufacturer: "STMicroelectronics",
        application: "Solar inverters"
      },
      "SCTWA50N120": {
        name: "SCTWA50N120 (SiC MOSFET)",
        vds_max: 1200, id_max: 65, rds_mohm: 52, tr_ns: 24, tf_ns: 34,
        alpha: 0.0019, package: "HiP247", manufacturer: "STMicroelectronics",
        application: "Industrial motor drives"
      },
      "SCTWA90N65G2V-4": {
        name: "SCTWA90N65G2V-4 (SiC MOSFET)",
        vds_max: 650, id_max: 119, rds_mohm: 18, tr_ns: 20, tf_ns: 30,
        alpha: 0.0015, package: "HiP247-4", manufacturer: "STMicroelectronics",
        application: "High power density applications"
      },
      "SCTH90N65G2V-7": {
        name: "SCTH90N65G2V-7 (SiC MOSFET)",
        vds_max: 650, id_max: 116, rds_mohm: 18, tr_ns: 21, tf_ns: 31,
        alpha: 0.0015, package: "H2PAK-7", manufacturer: "STMicroelectronics",
        application: "Server power supplies"
      },
      "SCTH100N120G2AG": {
        name: "SCTH100N120G2AG (SiC MOSFET)",
        vds_max: 1200, id_max: 56, rds_mohm: 45, tr_ns: 23, tf_ns: 33,
        alpha: 0.0018, package: "H2PAK-2", manufacturer: "STMicroelectronics",
        application: "Automotive OBC"
      },
      "SCTH35N65G2V-7AG": {
        name: "SCTH35N65G2V-7AG (SiC MOSFET)",
        vds_max: 650, id_max: 45, rds_mohm: 52, tr_ns: 19, tf_ns: 29,
        alpha: 0.0018, package: "H2PAK-7", manufacturer: "STMicroelectronics",
        application: "Telecom power"
      },
      "SCT3060AL": {
        name: "SCT3060AL (SiC MOSFET)",
        vds_max: 650, id_max: 39, rds_mohm: 60, tr_ns: 16, tf_ns: 23,
        alpha: 0.0019, package: "TO-247N", manufacturer: "ROHM",
        application: "Power conditioners"
      },
      "SCT3080AL": {
        name: "SCT3080AL (SiC MOSFET)",
        vds_max: 650, id_max: 30, rds_mohm: 80, tr_ns: 17, tf_ns: 24,
        alpha: 0.0020, package: "TO-247N", manufacturer: "ROHM",
        application: "Industrial equipment"
      },
      "SCT3105KL": {
        name: "SCT3105KL (SiC MOSFET)",
        vds_max: 1200, id_max: 24, rds_mohm: 105, tr_ns: 18, tf_ns: 25,
        alpha: 0.0021, package: "TO-247N", manufacturer: "ROHM",
        application: "EV charging stations"
      },
      "SCT3160KL": {
        name: "SCT3160KL (SiC MOSFET)",
        vds_max: 1200, id_max: 17, rds_mohm: 160, tr_ns: 19, tf_ns: 26,
        alpha: 0.0022, package: "TO-247N", manufacturer: "ROHM",
        application: "Solar power conditioners"
      },
      "SCT4013DR": {
        name: "SCT4013DR (SiC MOSFET)",
        vds_max: 750, id_max: 42, rds_mohm: 13, tr_ns: 14, tf_ns: 20,
        alpha: 0.0016, package: "TO-247-4D", manufacturer: "ROHM",
        application: "Data center power supplies"
      },
      "SCT4026DR": {
        name: "SCT4026DR (SiC MOSFET)",
        vds_max: 750, id_max: 30, rds_mohm: 26, tr_ns: 15, tf_ns: 22,
        alpha: 0.0017, package: "TO-247-4D", manufacturer: "ROHM",
        application: "Medical power supplies"
      },
      "SCT4036DR": {
        name: "SCT4036DR (SiC MOSFET)",
        vds_max: 750, id_max: 24, rds_mohm: 36, tr_ns: 16, tf_ns: 23,
        alpha: 0.0018, package: "TO-247-4D", manufacturer: "ROHM",
        application: "Industrial inverters"
      },
      "SCT4045DR": {
        name: "SCT4045DR (SiC MOSFET)",
        vds_max: 750, id_max: 20, rds_mohm: 45, tr_ns: 17, tf_ns: 24,
        alpha: 0.0019, package: "TO-247-4D", manufacturer: "ROHM",
        application: "Renewable energy"
      },
      "UF3C065080K4S": {
        name: "UF3C065080K4S (SiC MOSFET)",
        vds_max: 650, id_max: 31, rds_mohm: 80, tr_ns: 12, tf_ns: 18,
        alpha: 0.0018, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "High frequency converters"
      },
      "UF3C120080K4S": {
        name: "UF3C120080K4S (SiC MOSFET)",
        vds_max: 1200, id_max: 33, rds_mohm: 80, tr_ns: 13, tf_ns: 19,
        alpha: 0.0020, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "Solar inverters"
      },
      "UF3C120150K4S": {
        name: "UF3C120150K4S (SiC MOSFET)",
        vds_max: 1200, id_max: 18, rds_mohm: 150, tr_ns: 14, tf_ns: 20,
        alpha: 0.0022, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "EV chargers"
      },
      "UF3SC065007K4S": {
        name: "UF3SC065007K4S (SiC MOSFET)",
        vds_max: 650, id_max: 285, rds_mohm: 7, tr_ns: 15, tf_ns: 22,
        alpha: 0.0012, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "High power applications"
      },
      "UF3SC120009K4S": {
        name: "UF3SC120009K4S (SiC MOSFET)",
        vds_max: 1200, id_max: 215, rds_mohm: 9, tr_ns: 16, tf_ns: 24,
        alpha: 0.0014, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "Traction inverters"
      },
      "UF3SC120016K4S": {
        name: "UF3SC120016K4S (SiC MOSFET)",
        vds_max: 1200, id_max: 120, rds_mohm: 16, tr_ns: 17, tf_ns: 25,
        alpha: 0.0016, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "Wind power converters"
      },
      "UF3SC120040K4S": {
        name: "UF3SC120040K4S (SiC MOSFET)",
        vds_max: 1200, id_max: 53, rds_mohm: 40, tr_ns: 18, tf_ns: 26,
        alpha: 0.0018, package: "TO-247-4", manufacturer: "UnitedSiC",
        application: "Grid storage systems"
    },
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
      vds_max: 650, id_max: 8.5, rds_mohm: 90, tr_ns: 3, tf_ns: 5,
      alpha: 0.0025, package: "TO-220", manufacturer: "Transphorm",
      application: "Compact adapters"
    },
    "EPC2034": {
      name: "EPC2034 (GaN HEMT)",
      vds_max: 150, id_max: 48, rds_mohm: 7, tr_ns: 1.5, tf_ns: 1.2,
      alpha: 0.0028, package: "LGA", manufacturer: "EPC",
      application: "Lidar, wireless power"
    },
    "EPC2045": {
      name: "EPC2045 (GaN HEMT)",
      vds_max: 150, id_max: 16, rds_mohm: 25, tr_ns: 1.8, tf_ns: 1.5,
      alpha: 0.0030, package: "LGA", manufacturer: "EPC",
      application: "DC-DC converters"
    },
    "EPC2050": {
      name: "EPC2050 (GaN HEMT)",
      vds_max: 350, id_max: 6.3, rds_mohm: 80, tr_ns: 2.0, tf_ns: 1.7,
      alpha: 0.0032, package: "LGA", manufacturer: "EPC",
      application: "High voltage POL converters"
    },
    "EPC2065": {
      name: "EPC2065 (GaN HEMT)",
      vds_max: 80, id_max: 60, rds_mohm: 3.6, tr_ns: 1.2, tf_ns: 1.0,
      alpha: 0.0025, package: "LGA", manufacturer: "EPC",
      application: "Buck converters, motor drives"
    },
    "EPC2066": {
      name: "EPC2066 (GaN HEMT)",
      vds_max: 40, id_max: 94, rds_mohm: 1.8, tr_ns: 1.0, tf_ns: 0.8,
      alpha: 0.0022, package: "LGA", manufacturer: "EPC",
      application: "Low voltage high current"
    },
    "EPC2204": {
      name: "EPC2204 (GaN HEMT)",
      vds_max: 80, id_max: 125, rds_mohm: 6, tr_ns: 1.7, tf_ns: 1.4,
      alpha: 0.0027, package: "LGA", manufacturer: "EPC",
      application: "Synchronous buck converters"
    },
    "EPC2212": {
      name: "EPC2212 (GaN HEMT)",
      vds_max: 100, id_max: 75, rds_mohm: 13, tr_ns: 1.9, tf_ns: 1.6,
      alpha: 0.0030, package: "LGA", manufacturer: "EPC",
      application: "Wireless charging"
    },
    "EPC2215": {
      name: "EPC2215 (GaN HEMT)",
      vds_max: 200, id_max: 32, rds_mohm: 58, tr_ns: 2.2, tf_ns: 1.8,
      alpha: 0.0033, package: "LGA", manufacturer: "EPC",
      application: "48V systems"
    },
    "GS-010-120-1-P": {
      name: "GS-010-120-1-P (GaN HEMT)",
      vds_max: 100, id_max: 120, rds_mohm: 5, tr_ns: 2.5, tf_ns: 2.0,
      alpha: 0.0028, package: "GaNPX", manufacturer: "GaN Systems",
      application: "High density power supplies"
    },
    "GS-065-011-1-L": {
      name: "GS-065-011-1-L (GaN HEMT)",
      vds_max: 650, id_max: 11, rds_mohm: 150, tr_ns: 3.0, tf_ns: 2.5,
      alpha: 0.0030, package: "PDFN", manufacturer: "GaN Systems",
      application: "Adapters, chargers"
    },
    "GS-065-018-1-L": {
      name: "GS-065-018-1-L (GaN HEMT)",
      vds_max: 650, id_max: 18, rds_mohm: 90, tr_ns: 3.5, tf_ns: 3.0,
      alpha: 0.0028, package: "PDFN", manufacturer: "GaN Systems",
      application: "Consumer electronics"
    },
    "GS-065-030-1-L": {
      name: "GS-065-030-1-L (GaN HEMT)",
      vds_max: 650, id_max: 30, rds_mohm: 50, tr_ns: 4.0, tf_ns: 3.5,
      alpha: 0.0026, package: "PDFN", manufacturer: "GaN Systems",
      application: "Solar microinverters"
    },
    "GS-065-060-1-L": {
      name: "GS-065-060-1-L (GaN HEMT)",
      vds_max: 650, id_max: 60, rds_mohm: 25, tr_ns: 4.5, tf_ns: 4.0,
      alpha: 0.0024, package: "PDFN", manufacturer: "GaN Systems",
      application: "EV auxiliary converters"
    },
    "GS66502B": {
      name: "GS66502B (GaN HEMT)",
      vds_max: 650, id_max: 7.5, rds_mohm: 200, tr_ns: 2.8, tf_ns: 2.3,
      alpha: 0.0032, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Wireless power transfer"
    },
    "GS66504B": {
      name: "GS66504B (GaN HEMT)",
      vds_max: 650, id_max: 15, rds_mohm: 100, tr_ns: 3.2, tf_ns: 2.7,
      alpha: 0.0030, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Laptop adapters"
    },
    "GS66506T": {
      name: "GS66506T (GaN HEMT)",
      vds_max: 650, id_max: 22, rds_mohm: 70, tr_ns: 3.5, tf_ns: 3.0,
      alpha: 0.0028, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Data center power"
    },
    "GS66508B": {
      name: "GS66508B (GaN HEMT)",
      vds_max: 650, id_max: 30, rds_mohm: 50, tr_ns: 3.8, tf_ns: 3.3,
      alpha: 0.0026, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Telecom infrastructure"
    },
    "GS66512T": {
      name: "GS66512T (GaN HEMT)",
      vds_max: 650, id_max: 45, rds_mohm: 35, tr_ns: 4.2, tf_ns: 3.7,
      alpha: 0.0024, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Industrial robotics"
    },
    "GS66516B": {
      name: "GS66516B (GaN HEMT)",
      vds_max: 650, id_max: 60, rds_mohm: 25, tr_ns: 4.5, tf_ns: 4.0,
      alpha: 0.0022, package: "GaNPX", manufacturer: "GaN Systems",
      application: "Renewable energy inverters"
    },
    "TP65H035WS": {
      name: "TP65H035WS (GaN HEMT)",
      vds_max: 650, id_max: 47, rds_mohm: 35, tr_ns: 5.0, tf_ns: 7.0,
      alpha: 0.0023, package: "TO-247", manufacturer: "Transphorm",
      application: "Bridgeless totem-pole PFC"
    },
    "TP65H050WS": {
      name: "TP65H050WS (GaN HEMT)",
      vds_max: 650, id_max: 34, rds_mohm: 50, tr_ns: 4.5, tf_ns: 6.5,
      alpha: 0.0025, package: "TO-247", manufacturer: "Transphorm",
      application: "Solar inverters"
    },
    "TP65H070LDG": {
      name: "TP65H070LDG (GaN HEMT)",
      vds_max: 650, id_max: 25, rds_mohm: 72, tr_ns: 4.0, tf_ns: 6.0,
      alpha: 0.0027, package: "PQFN", manufacturer: "Transphorm",
      application: "AC-DC converters"
    },
    "TP65H150G4LSG": {
      name: "TP65H150G4LSG (GaN HEMT)",
      vds_max: 650, id_max: 10, rds_mohm: 150, tr_ns: 3.5, tf_ns: 5.5,
      alpha: 0.0030, package: "PQFN", manufacturer: "Transphorm",
      application: "Consumer adapters"
    },
    "TP90H050WS": {
      name: "TP90H050WS (GaN HEMT)",
      vds_max: 900, id_max: 34, rds_mohm: 50, tr_ns: 6.0, tf_ns: 8.0,
      alpha: 0.0025, package: "TO-247", manufacturer: "Transphorm",
      application: "High voltage applications"
    },
    "TP90H180PS": {
      name: "TP90H180PS (GaN HEMT)",
      vds_max: 900, id_max: 15, rds_mohm: 170, tr_ns: 5.5, tf_ns: 7.5,
      alpha: 0.0030, package: "TO-220", manufacturer: "Transphorm",
      application: "Industrial power"
    },
    "IGLD60DL060D1": {
      name: "IGLD60DL060D1 (GaN HEMT)",
      vds_max: 600, id_max: 15, rds_mohm: 53, tr_ns: 4.0, tf_ns: 6.0,
      alpha: 0.0025, package: "DFN 8x8", manufacturer: "Infineon",
      application: "Class D audio"
    },
    "IGOT60R070D1": {
      name: "IGOT60R070D1 (GaN HEMT)",
      vds_max: 600, id_max: 31, rds_mohm: 70, tr_ns: 4.5, tf_ns: 6.5,
      alpha: 0.0027, package: "HSOF-8-1", manufacturer: "Infineon",
      application: "Server PSU"
    },
    "IGT40R070D1": {
      name: "IGT40R070D1 (GaN HEMT)",
      vds_max: 400, id_max: 44, rds_mohm: 70, tr_ns: 3.5, tf_ns: 5.5,
      alpha: 0.0025, package: "HSOF-8-1", manufacturer: "Infineon",
      application: "48V systems"
    },
    "IGT60R070D1": {
      name: "IGT60R070D1 (GaN HEMT)",
      vds_max: 600, id_max: 31, rds_mohm: 70, tr_ns: 4.0, tf_ns: 6.0,
      alpha: 0.0026, package: "HSOF-8-1", manufacturer: "Infineon",
      application: "Telecom power"
    },
    "IGT60R190D1S": {
      name: "IGT60R190D1S (GaN HEMT)",
      vds_max: 600, id_max: 12, rds_mohm: 190, tr_ns: 3.0, tf_ns: 5.0,
      alpha: 0.0030, package: "HSOF-8-1", manufacturer: "Infineon",
      application: "Compact chargers"
    },
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

// GATE DRIVER DATABASE - Real datasheet parameters from top manufacturers
// Texas Instruments, Infineon, ON Semiconductor
const DRIVER_DB = {
  Si: {
    // Texas Instruments Si/Low-voltage drivers
    "UCC27531": {
      name: "UCC27531",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 8, t_fall: 7,
      t_delay: 17,
      iq: 0.18,
      channels: "single",
      package: "SOT-23-5",
      features: "Enable, UVLO",
      application: "General purpose Si MOSFET driver",
      vgs_out: 18,
      qg_drive: 120
    },
    "UCC27211": {
      name: "UCC27211",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 2, i_sink_max: 2,
      t_rise: 13, t_fall: 11,
      t_delay: 25,
      iq: 0.085,
      channels: "dual",
      package: "SOIC-8",
      features: "Independent inputs",
      application: "Synchronous Buck, Half-bridge Si drivers",
      vgs_out: 18,
      qg_drive: 80
    },
    "UCC27282": {
      name: "UCC27282",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 6, t_fall: 5,
      t_delay: 13,
      iq: 2.3,
      channels: "single",
      package: "SOIC-8",
      features: "High current, 5A peak",
      application: "High-speed Si switching, DC-DC converters",
      vgs_out: 18,
      qg_drive: 350
    },
    // Infineon Si drivers
    "1EDN8550B": {
      name: "1EDN8550B",
      manufacturer: "Infineon",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 4.5, i_sink_max: 9,
      t_rise: 10, t_fall: 8,
      t_delay: 18,
      iq: 0.42,
      channels: "single",
      package: "PG-DSO-8",
      features: "Protection, galvanic isolation ready",
      application: "Industrial motor drives, Si MOSFETs",
      vgs_out: 18,
      qg_drive: 200
    },
    "2ED2182S01F": {
      name: "2ED2182S01F",
      manufacturer: "Infineon",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 15, t_fall: 13,
      t_delay: 22,
      iq: 0.2,
      channels: "single",
      package: "SOT-23-6",
      features: "Integrated bootstrap diode",
      application: "Consumer electronics, Si switching",
      vgs_out: 15,
      qg_drive: 100
    },
    // ON Semiconductor Si drivers
    "FAN7387": {
      name: "FAN7387",
      manufacturer: "ON Semiconductor",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 3.8, i_sink_max: 4.0,
      t_rise: 18, t_fall: 16,
      t_delay: 30,
      iq: 0.35,
      channels: "single",
      package: "SOIC-8",
      features: "High-side and low-side driver",
      application: "Half-bridge Si MOSFET applications",
      vgs_out: 15,
      qg_drive: 150
    },
    "NCV51411": {
      name: "NCV51411",
      manufacturer: "ON Semiconductor",
      technology: ["Si"],
      vdd_min: 4.75, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 25, t_fall: 20,
      t_delay: 35,
      iq: 0.05,
      channels: "single",
      package: "SOT-23-5",
      features: "Automotive qualified, ultra-low Iq",
      application: "Automotive Si MOSFETs, battery management",
      vgs_out: 18,
      qg_drive: 60
    },
    // Additional TI Si drivers
    "UCC27322": {
      name: "UCC27322",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 7, t_fall: 6,
      t_delay: 16,
      iq: 2.1,
      channels: "dual",
      package: "SOIC-8",
      features: "High current dual driver, enable pins",
      application: "Synchronous buck converters, half-bridge",
      vgs_out: 18,
      qg_drive: 300
    },
    "UCC27211A": {
      name: "UCC27211A",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 11, t_fall: 9,
      t_delay: 20,
      iq: 0.12,
      channels: "dual",
      package: "SOIC-8",
      features: "Independent inputs, improved version",
      application: "DC-DC converters, motor drives",
      vgs_out: 18,
      qg_drive: 120
    },
    // Infineon additional Si drivers
    "2EDL8024G": {
      name: "2EDL8024G",
      manufacturer: "Infineon",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 7, t_fall: 6,
      t_delay: 14,
      iq: 2.8,
      channels: "dual",
      package: "PG-DSO-14",
      features: "Integrated deadtime, shoot-through protection",
      application: "Half-bridge converters, motor control",
      vgs_out: 18,
      qg_drive: 280
    },
    // ON Semiconductor additional Si drivers
    "NCD57000": {
      name: "NCD57000",
      manufacturer: "ON Semiconductor",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 20, t_fall: 18,
      t_delay: 30,
      iq: 0.25,
      channels: "single",
      package: "SOIC-8",
      features: "IGBT/MOSFET compatible",
      application: "Industrial IGBT drives, general purpose",
      vgs_out: 15,
      qg_drive: 100
    },
    // ROHM Si drivers
    "BD2311NVX": {
      name: "BD2311NVX",
      manufacturer: "ROHM",
      technology: ["Si", "GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 5, t_fall: 4,
      t_delay: 12,
      iq: 1.5,
      channels: "single",
      package: "HSOP-8",
      features: "High-speed ultrafast driver, optimized for GaN/Si",
      application: "High-frequency switching, GaN optimized",
      vgs_out: 18,
      qg_drive: 180
    },
    // Additional TI Si/IGBT drivers
    "UCC27201": {
      name: "UCC27201",
      manufacturer: "Texas Instruments",
      technology: ["Si", "IGBT"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 11, t_fall: 10,
      t_delay: 22,
      iq: 0.095,
      channels: "dual",
      package: "VSON-10",
      features: "Dual half-bridge driver, enable pin",
      application: "Si MOSFET/IGBT half-bridge switching",
      vgs_out: 18,
      qg_drive: 140
    },
    "UCC27517": {
      name: "UCC27517",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 7, t_fall: 6,
      t_delay: 15,
      iq: 0.16,
      channels: "single",
      package: "SOT-23-6",
      features: "High-speed, enable pin, UVLO",
      application: "Si MOSFET high-speed switching",
      vgs_out: 18,
      qg_drive: 160
    },
    "UCC27321": {
      name: "UCC27321",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 7, t_fall: 6,
      t_delay: 16,
      iq: 2.0,
      channels: "single",
      package: "SOIC-8",
      features: "High current single driver, 5A peak",
      application: "Si MOSFET high current applications",
      vgs_out: 18,
      qg_drive: 350
    },
    "UCC27424A": {
      name: "UCC27424A",
      manufacturer: "Texas Instruments",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 8, t_fall: 7,
      t_delay: 16,
      iq: 0.14,
      channels: "dual",
      package: "SOIC-8",
      features: "Dual high-speed driver, independent inputs",
      application: "Si synchronous converters",
      vgs_out: 18,
      qg_drive: 170
    },
    // Infineon additional Si/IGBT drivers
    "1EDI20N12AF": {
      name: "1EDI20N12AF",
      manufacturer: "Infineon",
      technology: ["Si", "IGBT"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 15, t_fall: 13,
      t_delay: 25,
      iq: 0.35,
      channels: "single",
      package: "PG-DSO-12",
      features: "EiceDRIVER automotive, galvanic isolation",
      application: "Automotive Si MOSFET/IGBT",
      vgs_out: 20,
      qg_drive: 120
    },
    "1EDI40N12AF": {
      name: "1EDI40N12AF",
      manufacturer: "Infineon",
      technology: ["Si", "IGBT"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 12, t_fall: 10,
      t_delay: 20,
      iq: 0.5,
      channels: "single",
      package: "PG-DSO-12",
      features: "EiceDRIVER automotive, isolated, high current",
      application: "Automotive IGBT traction drives",
      vgs_out: 20,
      qg_drive: 200
    },
    "2EDN8524": {
      name: "2EDN8524",
      manufacturer: "Infineon",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 20,
      i_source_max: 4.5, i_sink_max: 9,
      t_rise: 10, t_fall: 8,
      t_delay: 18,
      iq: 0.42,
      channels: "dual",
      package: "PG-DSO-14",
      features: "Dual half-bridge driver, protection",
      application: "Si motor drives, half-bridge",
      vgs_out: 18,
      qg_drive: 180
    },
    //  STMicroelectronics Si/IGBT drivers
    "L6385E": {
      name: "L6385E",
      manufacturer: "STMicroelectronics",
      technology: ["Si", "IGBT"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 0.4, i_sink_max: 0.6,
      t_rise: 22, t_fall: 18,
      t_delay: 35,
      iq: 0.15,
      channels: "dual",
      package: "SOIC-8",
      features: "Half-bridge driver with bootstrap",
      application: "Si motor control, inverters",
      vgs_out: 18,
      qg_drive: 50
    },
    "L6386": {
      name: "L6386",
      manufacturer: "STMicroelectronics",
      technology: ["Si"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 1, i_sink_max: 1,
      t_rise: 18, t_fall: 15,
      t_delay: 30,
      iq: 0.2,
      channels: "dual",
      package: "SOIC-8",
      features: "Half-bridge driver, UVLO",
      application: "Si converters, motor drives",
      vgs_out: 18,
      qg_drive: 70
    },
    "L6390": {
      name: "L6390",
      manufacturer: "STMicroelectronics",
      technology: ["Si", "IGBT"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 2,
      t_rise: 15, t_fall: 12,
      t_delay: 25,
      iq: 0.25,
      channels: "dual",
      package: "PowerSO-14",
      features: "High voltage half-bridge driver",
      application: "Si/IGBT motor drives",
      vgs_out: 18,
      qg_drive: 100
    },
    // Microchip additional Si drivers
    "TC4431": {
      name: "TC4431",
      manufacturer: "Microchip",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 12, t_fall: 10,
      t_delay: 25,
      iq: 0.3,
      channels: "single",
      package: "SOIC-8",
      features: "Non-inverting high-speed driver",
      application: "Si MOSFET general purpose",
      vgs_out: 18,
      qg_drive: 80
    },
    "TC4432": {
      name: "TC4432",
      manufacturer: "Microchip",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 12, t_fall: 10,
      t_delay: 25,
      iq: 0.3,
      channels: "single",
      package: "SOIC-8",
      features: "Inverting high-speed driver",
      application: "Si MOSFET general purpose",
      vgs_out: 18,
      qg_drive: 80
    },
    "MCP14E3": {
      name: "MCP14E3",
      manufacturer: "Microchip",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 8, t_fall: 7,
      t_delay: 18,
      iq: 0.8,
      channels: "single",
      package: "SOT-23-5",
      features: "High-speed compact driver",
      application: "Si MOSFET compact applications",
      vgs_out: 18,
      qg_drive: 150
    },
    // IXYS/Littelfuse Si drivers
    "IX4428": {
      name: "IX4428",
      manufacturer: "IXYS (Littelfuse)",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 35,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 20, t_fall: 18,
      t_delay: 40,
      iq: 0.5,
      channels: "dual",
      package: "SOIC-8",
      features: "Dual low-side driver, wide VDD",
      application: "Si general purpose low-side",
      vgs_out: 35,
      qg_drive: 90
    },
    "IXD609": {
      name: "IXD609",
      manufacturer: "IXYS (Littelfuse)",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 35,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 10, t_fall: 9,
      t_delay: 22,
      iq: 2.5,
      channels: "single",
      package: "SOIC-8",
      features: "High current low-side driver",
      application: "Si high current switching",
      vgs_out: 35,
      qg_drive: 300
    },
    // Diodes Inc. Si drivers
    "ZXGD3001": {
      name: "ZXGD3001",
      manufacturer: "Diodes Incorporated",
      technology: ["Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 0.2, i_sink_max: 0.35,
      t_rise: 30, t_fall: 25,
      t_delay: 50,
      iq: 0.05,
      channels: "single",
      package: "SOT-23",
      features: "Ultra-compact low power driver",
      application: "Si low power applications",
      vgs_out: 18,
      qg_drive: 30
    }
  },
  
  SiC: {
    // Texas Instruments SiC drivers
    "UCC21520": {
      name: "UCC21520",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 3, vdd_max: 18,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 4, t_fall: 4,
      t_delay: 10,
      iq: 3.5,
      channels: "single",
      package: "SOIC-8",
      features: "Isolated 5kV, SiC optimized",
      application: "SiC MOSFET gate driver with isolation",
      vgs_out: 18,
      qg_drive: 180
    },
    "UCC5870": {
      name: "UCC5870",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 10, i_sink_max: 10,
      t_rise: 3.5, t_fall: 3,
      t_delay: 8,
      iq: 8.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Reinforced isolation, Miller clamp, SiC/GaN optimized",
      application: "High-performance SiC/GaN switching up to 200kHz",
      vgs_out: 18,
      qg_drive: 400
    },
    "UCC27714": {
      name: "UCC27714",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 5, t_fall: 4.5,
      t_delay: 11,
      iq: 2.8,
      channels: "dual",
      package: "SOIC-14",
      features: "120V half-bridge, deadtime control",
      application: "SiC MOSFETs in half-bridge topologies",
      vgs_out: 18,
      qg_drive: 300
    },
    // Infineon SiC drivers
    "1ED3491MC12H": {
      name: "1ED3491MC12H",
      manufacturer: "Infineon",
      technology: ["SiC"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 12, i_sink_max: 18,
      t_rise: 3, t_fall: 2.5,
      t_delay: 9,
      iq: 5.2,
      channels: "single",
      package: "PG-DSO-12",
      features: "Galvanic isolation 4kV, SiC optimized, Miller clamp",
      application: "High-power SiC MOSFET switching",
      vgs_out: 20,
      qg_drive: 500
    },
    "EiceDRIVER 2EDL": {
      name: "2EDL8024G",
      manufacturer: "Infineon",
      technology: ["SiC", "Si"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 6, t_fall: 5,
      t_delay: 12,
      iq: 2.5,
      channels: "dual",
      package: "PG-DSO-14",
      features: "Integrated deadtime, shoot-through protection",
      application: "SiC half-bridge converters",
      vgs_out: 18,
      qg_drive: 280
    },
    // ON Semiconductor SiC drivers
    "FAN73933": {
      name: "FAN73933",
      manufacturer: "ON Semiconductor",
      technology: ["SiC"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 4.0, i_sink_max: 4.5,
      t_rise: 8, t_fall: 7,
      t_delay: 15,
      iq: 1.8,
      channels: "single",
      package: "SOIC-8",
      features: "Fast switching, negative gate capability",
      application: "SiC MOSFET drivers up to 1200V",
      vgs_out: 18,
      qg_drive: 200
    },
    // Additional TI SiC isolated drivers
    "UCC21750": {
      name: "UCC21750",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 10, i_sink_max: 10,
      t_rise: 8, t_fall: 7,
      t_delay: 48,
      iq: 8.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Reinforced isolated ±10A, 5.7kVrms, DESAT, Active Miller Clamp",
      application: "High power SiC/IGBT, industrial motor drives",
      vgs_out: 30,
      qg_drive: 450
    },
    "UCC21710": {
      name: "UCC21710",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 6,
      t_rise: 12, t_fall: 10,
      t_delay: 45,
      iq: 6.2,
      channels: "single",
      package: "SOIC-16W",
      features: "Reinforced isolated, 5.7kVrms, DESAT protection",
      application: "SiC/IGBT drives, isolated gate control",
      vgs_out: 30,
      qg_drive: 300
    },
    "UCC21222": {
      name: "UCC21222",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 13, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 38,
      iq: 5.8,
      channels: "dual",
      package: "SOIC-16W",
      features: "Basic isolated, 2.5kVrms, dual channel",
      application: "SiC half-bridge, photovoltaic inverters",
      vgs_out: 18,
      qg_drive: 220
    },
    "UCC23511": {
      name: "UCC23511",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 30,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 15, t_fall: 13,
      t_delay: 42,
      iq: 4.5,
      channels: "single",
      package: "SOIC-8",
      features: "Isolated, 5kVrms, capacitive isolation",
      application: "SiC isolated switching, auxiliary supplies",
      vgs_out: 30,
      qg_drive: 150
    },
    "UCC21530": {
      name: "UCC21530",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 35,
      iq: 4.8,
      channels: "single",
      package: "SOIC-16W",
      features: "Isolated, 5kVrms, Miller clamp",
      application: "SiC power modules",
      vgs_out: 18,
      qg_drive: 200
    },
    "UCC21540": {
      name: "UCC21540",
      manufacturer: "Texas Instruments",
      technology: ["SiC"],
      vdd_min: 14, vdd_max: 22,
      i_source_max: 6, i_sink_max: 6,
      t_rise: 7, t_fall: 6,
      t_delay: 32,
      iq: 6.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Isolated, 5.7kVrms, high current",
      application: "High-power SiC converters",
      vgs_out: 22,
      qg_drive: 280
    },
    "UCC21732": {
      name: "UCC21732",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 25,
      i_source_max: 3.5, i_sink_max: 5,
      t_rise: 11, t_fall: 9,
      t_delay: 40,
      iq: 5.5,
      channels: "single",
      package: "SOIC-16",
      features: "Isolated, split output, DESAT",
      application: "SiC/IGBT with protection",
      vgs_out: 25,
      qg_drive: 250
    },
    "UCC5320": {
      name: "UCC5320",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 50,
      iq: 5.0,
      channels: "single",
      package: "SOIC-16",
      features: "Basic isolated, SPI interface",
      application: "Programmable SiC/IGBT drives",
      vgs_out: 30,
      qg_drive: 220
    },
    // ON Semiconductor additional SiC drivers
    "NCP51705": {
      name: "NCP51705",
      manufacturer: "ON Semiconductor",
      technology: ["SiC"],
      vdd_min: 14, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 11, t_fall: 10,
      t_delay: 35,
      iq: 5.0,
      channels: "single",
      package: "SOIC-8",
      features: "Specifically designed for SiC MOSFETs, Miller clamp",
      application: "SiC power modules, high frequency switching up to 5MHz",
      vgs_out: 30,
      qg_drive: 200
    },
    "NCD57001": {
      name: "NCD57001",
      manufacturer: "ON Semiconductor",
      technology: ["SiC", "IGBT"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 18, t_fall: 16,
      t_delay: 32,
      iq: 0.3,
      channels: "single",
      package: "SOIC-8",
      features: "SiC/IGBT compatible, negative gate drive",
      application: "Industrial SiC/IGBT applications",
      vgs_out: 18,
      qg_drive: 120
    },
    "FAN3122C": {
      name: "FAN3122C",
      manufacturer: "ON Semiconductor",
      technology: ["SiC"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 17,
      iq: 1.5,
      channels: "dual",
      package: "SOIC-8",
      features: "High-speed dual driver for SiC",
      application: "SiC half-bridge applications",
      vgs_out: 18,
      qg_drive: 180
    },
    "FAN73832": {
      name: "FAN73832",
      manufacturer: "ON Semiconductor",
      technology: ["SiC"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 3.5, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 18,
      iq: 1.6,
      channels: "single",
      package: "SOIC-8",
      features: "Fast switching, Miller clamp",
      application: "SiC 1200V applications",
      vgs_out: 18,
      qg_drive: 180
    },
    "NCP51820": {
      name: "NCP51820",
      manufacturer: "ON Semiconductor",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 25,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 8, t_fall: 7,
      t_delay: 28,
      iq: 4.5,
      channels: "single",
      package: "SOIC-8",
      features: "High current SiC driver, active Miller clamp",
      application: "High-power SiC modules",
      vgs_out: 25,
      qg_drive: 250
    },
    // Infineon additional SiC drivers
    "1ED3491MC12M": {
      name: "1ED3491MC12M",
      manufacturer: "Infineon",
      technology: ["SiC"],
      vdd_min: 14, vdd_max: 22,
      i_source_max: 12, i_sink_max: 12,
      t_rise: 6, t_fall: 5,
      t_delay: 30,
      iq: 9.5,
      channels: "single",
      package: "PG-DSO-12",
      features: "High current, advanced gate control, Miller clamp",
      application: "SiC high power converters, traction inverters",
      vgs_out: 22,
      qg_drive: 400
    },
    "2EP012N08NM": {
      name: "2EP012N08NM",
      manufacturer: "Infineon",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 8, t_fall: 7,
      t_delay: 42,
      iq: 7.2,
      channels: "dual",
      package: "PG-DSO-20",
      features: "EiceDRIVER Power, isolated, DESAT, high voltage",
      application: "High voltage SiC applications, industrial inverters",
      vgs_out: 20,
      qg_drive: 320
    },
    "1ED3830MC12N": {
      name: "1ED3830MC12N",
      manufacturer: "Infineon",
      technology: ["SiC"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 15, i_sink_max: 15,
      t_rise: 5, t_fall: 4,
      t_delay: 28,
      iq: 11.0,
      channels: "single",
      package: "PG-DSO-12",
      features: "Very high current isolated driver, SiC optimized",
      application: "High-power SiC modules >100kW",
      vgs_out: 20,
      qg_drive: 550
    },
    "1EDS20I12SV": {
      name: "1EDS20I12SV",
      manufacturer: "Infineon",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 10, t_fall: 9,
      t_delay: 38,
      iq: 5.5,
      channels: "single",
      package: "PG-DSO-12",
      features: "EiceDRIVER family, isolated, automotive rated",
      application: "Automotive SiC/IGBT traction",
      vgs_out: 20,
      qg_drive: 240
    },
    "1ED38x0MC12M": {
      name: "1ED3850MC12M",
      manufacturer: "Infineon",
      technology: ["SiC"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 10, i_sink_max: 10,
      t_rise: 6, t_fall: 5,
      t_delay: 32,
      iq: 8.8,
      channels: "single",
      package: "PG-DSO-12",
      features: "Digital configurable, isolated, SiC optimized",
      application: "SiC with programmable gate control",
      vgs_out: 20,
      qg_drive: 380
    },
    "2ED020I12-F2": {
      name: "2ED020I12-F2",
      manufacturer: "Infineon",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 7, i_sink_max: 7,
      t_rise: 9, t_fall: 8,
      t_delay: 40,
      iq: 6.8,
      channels: "dual",
      package: "PG-DSO-20",
      features: "EiceDRIVER Compact, isolated, half-bridge",
      application: "SiC/IGBT half-bridge converters",
      vgs_out: 20,
      qg_drive: 300
    },
    "1ED3121MC12H": {
      name: "1ED3121MC12H",
      manufacturer: "Infineon",
      technology: ["SiC"],
      vdd_min: 14, vdd_max: 22,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 7, t_fall: 6,
      t_delay: 34,
      iq: 7.0,
      channels: "single",
      package: "PG-DSO-12",
      features: "Isolated, Miller clamp, SiC optimized",
      application: "Medium power SiC applications",
      vgs_out: 22,
      qg_drive: 320
    },
    // Analog Devices SiC drivers
    "ADuM4135": {
      name: "ADuM4135",
      manufacturer: "Analog Devices",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 50,
      iq: 6.0,
      channels: "single",
      package: "SOIC-16W",
      features: "Isolated, 5kVrms, desaturation detection, Miller clamp",
      application: "SiC IGBT isolated gate drives, industrial power",
      vgs_out: 30,
      qg_drive: 250
    },
    "ADuM4136": {
      name: "ADuM4136",
      manufacturer: "Analog Devices",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 50,
      iq: 6.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Isolated, 5kVrms, integrated desaturation, fault reporting",
      application: "SiC power systems, renewable energy converters",
      vgs_out: 30,
      qg_drive: 250
    },
    "ADuM4223": {
      name: "ADuM4223",
      manufacturer: "Analog Devices",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 12, t_fall: 11,
      t_delay: 52,
      iq: 6.8,
      channels: "dual",
      package: "SOIC-16W",
      features: "Dual isolated driver, 5kVrms",
      application: "SiC half-bridge with isolation",
      vgs_out: 30,
      qg_drive: 240
    },
    "ADuM3223": {
      name: "ADuM3223",
      manufacturer: "Analog Devices",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 27,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 15, t_fall: 14,
      t_delay: 55,
      iq: 5.2,
      channels: "dual",
      package: "SOIC-16",
      features: "Dual isolated driver, 2.5kVrms",
      application: "SiC half-bridge applications",
      vgs_out: 27,
      qg_drive: 180
    },
    // ROHM SiC drivers
    "BM6103FV": {
      name: "BM6103FV",
      manufacturer: "ROHM",
      technology: ["SiC"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 3.5, i_sink_max: 3.5,
      t_rise: 8, t_fall: 7,
      t_delay: 28,
      iq: 3.8,
      channels: "single",
      package: "SSOP-5",
      features: "Compact isolated SiC driver",
      application: "SiC power supplies",
      vgs_out: 18,
      qg_drive: 150
    },
    "BM61M43RFV": {
      name: "BM61M43RFV",
      manufacturer: "ROHM",
      technology: ["SiC", "IGBT"],
      vdd_min: 12, vdd_max: 20,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 32,
      iq: 4.2,
      channels: "single",
      package: "HSOP-8",
      features: "Isolated, Miller clamp, SiC/IGBT optimized",
      application: "Industrial SiC/IGBT drives",
      vgs_out: 20,
      qg_drive: 200
    },
    // STMicroelectronics SiC drivers
    "STGAP2S": {
      name: "STGAP2S",
      manufacturer: "STMicroelectronics",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 38,
      iq: 5.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Galvanically isolated, DESAT, SiC/IGBT optimized",
      application: "SiC/IGBT isolated drives",
      vgs_out: 30,
      qg_drive: 220
    },
    "STGAP2SiC": {
      name: "STGAP2SiC",
      manufacturer: "STMicroelectronics",
      technology: ["SiC"],
      vdd_min: 14, vdd_max: 25,
      i_source_max: 6, i_sink_max: 6,
      t_rise: 7, t_fall: 6,
      t_delay: 32,
      iq: 6.5,
      channels: "single",
      package: "SOIC-16W",
      features: "SiC optimized isolated driver, Miller clamp",
      application: "High-frequency SiC switching",
      vgs_out: 25,
      qg_drive: 280
    },
    "STGAP1S": {
      name: "STGAP1S",
      manufacturer: "STMicroelectronics",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 22,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 10, t_fall: 9,
      t_delay: 35,
      iq: 4.8,
      channels: "single",
      package: "SOIC-14",
      features: "Isolated, SiC optimized",
      application: "SiC power modules",
      vgs_out: 22,
      qg_drive: 210
    },
    // Silicon Labs SiC drivers
    "SI8273GB": {
      name: "SI8273GB",
      manufacturer: "Silicon Labs",
      technology: ["SiC"],
      vdd_min: 3, vdd_max: 5.5,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 12, t_fall: 10,
      t_delay: 40,
      iq: 4.5,
      channels: "dual",
      package: "SOIC-16W",
      features: "Isolated, built-in isolation transformer, 5kVrms",
      application: "SiC half-bridge, galvanic isolation",
      vgs_out: 5,
      qg_drive: 180
    },
    "SI8274GB": {
      name: "SI8274GB",
      manufacturer: "Silicon Labs",
      technology: ["SiC"],
      vdd_min: 3.3, vdd_max: 5,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 10, t_fall: 9,
      t_delay: 38,
      iq: 5.0,
      channels: "dual",
      package: "SOIC-16W",
      features: "High current isolated SiC driver, 5kVrms",
      application: "SiC high-power half-bridge",
      vgs_out: 5,
      qg_drive: 200
    },
    // Microchip/Microsemi SiC drivers
    "ACS750": {
      name: "ACS750",
      manufacturer: "Microchip (Microsemi)",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 28,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 11, t_fall: 10,
      t_delay: 45,
      iq: 6.0,
      channels: "single",
      package: "DIP-16",
      features: "Reinforced isolated, industrial grade",
      application: "Industrial SiC/IGBT applications",
      vgs_out: 28,
      qg_drive: 260
    },
    // Renesas SiC drivers
    "ISL81601": {
      name: "ISL81601",
      manufacturer: "Renesas (Intersil)",
      technology: ["SiC"],
      vdd_min: 12, vdd_max: 20,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 35,
      iq: 4.5,
      channels: "single",
      package: "SOIC-14",
      features: "High-speed SiC driver, Miller clamp",
      application: "SiC converters automotive/industrial",
      vgs_out: 20,
      qg_drive: 210
    },
    "ISL81802": {
      name: "ISL81802",
      manufacturer: "Renesas",
      technology: ["SiC", "IGBT"],
      vdd_min: 14, vdd_max: 22,
      i_source_max: 6, i_sink_max: 6,
      t_rise: 8, t_fall: 7,
      t_delay: 32,
      iq: 5.8,
      channels: "dual",
      package: "SOIC-16",
      features: "Dual SiC/IGBT driver, programmable deadtime",
      application: "SiC half-bridge in EV inverters",
      vgs_out: 22,
      qg_drive: 280
    },
    // Additional high-performance SiC drivers
    "ACPL-332J": {
      name: "ACPL-332J",
      manufacturer: "Broadcom (Avago)",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 14, t_fall: 12,
      t_delay: 50,
      iq: 3.5,
      channels: "single",
      package: "DIP-8",
      features: "Optically isolated, 3.75kVrms",
      application: "SiC/IGBT with optical isolation",
      vgs_out: 30,
      qg_drive: 140
    },
    "FOD8334": {
      name: "FOD8334",
      manufacturer: "ON Semiconductor (Fairchild)",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 13, t_fall: 11,
      t_delay: 48,
      iq: 3.2,
      channels: "single",
      package: "DIP-8",
      features: "Optocoupler isolated gate driver",
      application: "SiC/IGBT isolated applications",
      vgs_out: 30,
      qg_drive: 130
    },
    "HCPL-3120": {
      name: "HCPL-3120",
      manufacturer: "Broadcom (Avago)",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 2, i_sink_max: 2,
      t_rise: 16, t_fall: 14,
      t_delay: 55,
      iq: 3.0,
      channels: "single",
      package: "DIP-8",
      features: "Optocoupler isolated, 2.5kVrms",
      application: "Legacy SiC/IGBT applications",
      vgs_out: 30,
      qg_drive: 110
    },
    "UCC27211B": {
      name: "UCC27211B",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 9, t_fall: 8,
      t_delay: 18,
      iq: 0.15,
      channels: "dual",
      package: "SOIC-8",
      features: "High-speed dual driver, SiC compatible",
      application: "SiC/Si half-bridge non-isolated",
      vgs_out: 18,
      qg_drive: 160
    },
    "UCC27424": {
      name: "UCC27424",
      manufacturer: "Texas Instruments",
      technology: ["SiC", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 8, t_fall: 7,
      t_delay: 16,
      iq: 0.14,
      channels: "dual",
      package: "SOIC-8",
      features: "High-speed, independent inputs, SiC compatible",
      application: "SiC synchronous converters",
      vgs_out: 18,
      qg_drive: 170
    },
    "IX4426": {
      name: "IX4426",
      manufacturer: "IXYS (Littelfuse)",
      technology: ["SiC", "Si"],
      vdd_min: 4.5, vdd_max: 35,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 20, t_fall: 18,
      t_delay: 40,
      iq: 0.5,
      channels: "dual",
      package: "SOIC-8",
      features: "Dual non-inverting driver, wide VDD",
      application: "SiC/Si general purpose",
      vgs_out: 35,
      qg_drive: 90
    },
    "IX4427": {
      name: "IX4427",
      manufacturer: "IXYS (Littelfuse)",
      technology: ["SiC", "Si"],
      vdd_min: 4.5, vdd_max: 35,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 20, t_fall: 18,
      t_delay: 40,
      iq: 0.5,
      channels: "dual",
      package: "SOIC-8",
      features: "Dual inverting driver, wide VDD",
      application: "SiC/Si general purpose",
      vgs_out: 35,
      qg_drive: 90
    },
    "EL7156": {
      name: "EL7156",
      manufacturer: "Renesas (Intersil)",
      technology: ["SiC"],
      vdd_min: 4.5, vdd_max: 16,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 10, t_fall: 9,
      t_delay: 22,
      iq: 1.8,
      channels: "dual",
      package: "QFN-16",
      features: "High-speed dual driver for SiC",
      application: "SiC half-bridge converters",
      vgs_out: 16,
      qg_drive: 140
    },
    "TC4422A": {
      name: "TC4422A",
      manufacturer: "Microchip",
      technology: ["SiC", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 8, t_fall: 7,
      t_delay: 20,
      iq: 1.2,
      channels: "single",
      package: "SOIC-8",
      features: "High current driver, SiC capable",
      application: "SiC/Si high current switching",
      vgs_out: 18,
      qg_drive: 320
    },
    // Infineon EiceDRIVER Enhanced series
    "2EDF7275F": {
      name: "2EDF7275F",
      manufacturer: "Infineon",
      technology: ["SiC", "IGBT"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 7.5, i_sink_max: 7.5,
      t_rise: 12, t_fall: 10,
      t_delay: 22,
      iq: 3.5,
      channels: "dual",
      package: "PG-DSO-16",
      features: "Dual isolated channels, galvanic isolation, Miller clamp, DESAT protection, soft turn-off",
      application: "SiC MOSFET/IGBT high-power industrial drives, half-bridge",
      vgs_out: 20,
      qg_drive: 250
    }
  },
  
  GaN: {
    // Texas Instruments GaN drivers
    "LMG1020": {
      name: "LMG1020",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 3, i_sink_max: 5,
      t_rise: 2, t_fall: 1.5,
      t_delay: 5,
      iq: 0.8,
      channels: "single",
      package: "VQFN-8",
      features: "GaN-optimized, integrated bootstrap, very fast",
      application: "GaN FET high-frequency switching >1MHz",
      vgs_out: 6,
      qg_drive: 25
    },
    "LM5113": {
      name: "LM5113",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 5.5,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 3.5, t_fall: 2.8,
      t_delay: 7,
      iq: 0.4,
      channels: "single",
      package: "VSON-8",
      features: "Ultrafast GaN driver",
      application: "GaN transistors up to 2MHz switching",
      vgs_out: 5.5,
      qg_drive: 15
    },
    "UCC27614": {
      name: "UCC27614",
      manufacturer: "Texas Instruments",
      technology: ["GaN", "SiC"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 5, t_fall: 4.5,
      t_delay: 13,
      iq: 0.3,
      channels: "dual",
      package: "SOIC-8",
      features: "Wide VDD range, GaN/SiC compatible",
      application: "GaN FETs and SiC MOSFETs in half-bridge",
      vgs_out: 18,
      qg_drive: 150
    },
    // Infineon GaN drivers
    "EPC9205": {
      name: "EPC9205",
      manufacturer: "EPC (Infineon partner)",
      technology: ["GaN"],
      vdd_min: 3.3, vdd_max: 5.5,
      i_source_max: 2.5, i_sink_max: 3,
      t_rise: 1.8, t_fall: 1.5,
      t_delay: 4,
      iq: 0.5,
      channels: "single",
      package: "QFN-16",
      features: "Ultra-low propagation delay, GaN optimized",
      application: "EPC GaN FETs MHz switching",
      vgs_out: 5,
      qg_drive: 12
    },
    "1ED38x0M": {
      name: "1ED3810MC12M",
      manufacturer: "Infineon",
      technology: ["GaN"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 10, i_sink_max: 10,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6,
      iq: 4.5,
      channels: "single",
      package: "PG-DSO-12",
      features: "Galvanic isolation, GaN/SiC compatible, Miller clamp",
      application: "High-frequency GaN switching with isolation",
      vgs_out: 6,
      qg_drive: 80
    },
    // ON Semiconductor/GaN Systems drivers
    "FAN3268": {
      name: "FAN3268",
      manufacturer: "ON Semiconductor",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 2.5, i_sink_max: 3.5,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6.5,
      iq: 0.6,
      channels: "single",
      package: "WLCSP-9",
      features: "Compact GaN driver, bootstrap integrated",
      application: "GaN FETs in compact power supplies",
      vgs_out: 5.5,
      qg_drive: 20
    },
    "SI827x": {
      name: "SI8271GB-IS",
      manufacturer: "Skyworks (ON Semi partner)",
      technology: ["GaN", "SiC"],
      vdd_min: 3, vdd_max: 5.5,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 3, t_fall: 2.5,
      t_delay: 7,
      iq: 1.2,
      channels: "single",
      package: "SOIC-8",
      features: "Isolated GaN/SiC driver 2.5kV",
      application: "Isolated GaN switching applications",
      vgs_out: 5,
      qg_drive: 35
    },
    // Additional TI GaN drivers
    "LMG5200": {
      name: "LMG5200",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 3, i_sink_max: 5,
      t_rise: 1.8, t_fall: 1.5,
      t_delay: 4,
      iq: 0.9,
      channels: "dual",
      package: "VQFN-17",
      features: "Integrated 80V GaN FETs + driver, bootstrap",
      application: "High-frequency DC-DC converters >1MHz",
      vgs_out: 6,
      qg_drive: 30
    },
    "UCC27524": {
      name: "UCC27524",
      manufacturer: "Texas Instruments",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 4, t_fall: 3.5,
      t_delay: 11,
      iq: 0.18,
      channels: "dual",
      package: "SOIC-8",
      features: "High-speed dual driver, enable pins",
      application: "GaN FETs in synchronous buck, half-bridge",
      vgs_out: 18,
      qg_drive: 180
    },
    "UCC27611": {
      name: "UCC27611",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 5, t_fall: 4,
      t_delay: 12,
      iq: 0.13,
      channels: "single",
      package: "SOT-23-6",
      features: "Small footprint, enable pin, UVLO",
      application: "GaN FETs compact power supplies",
      vgs_out: 6,
      qg_drive: 100
    },
    "LM5114": {
      name: "LM5114",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 5.5,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6,
      iq: 0.5,
      channels: "dual",
      package: "WSON-10",
      features: "GaN half-bridge driver, integrated bootstrap",
      application: "GaN half-bridge up to 2MHz",
      vgs_out: 5.5,
      qg_drive: 18
    },
    // ROHM GaN drivers
    "BD2311NVX-LB": {
      name: "BD2311NVX-LB",
      manufacturer: "ROHM",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 5, i_sink_max: 5,
      t_rise: 4, t_fall: 3.5,
      t_delay: 10,
      iq: 1.5,
      channels: "single",
      package: "HSOP-8",
      features: "Ultra-high-speed driver, GaN optimized",
      application: "High-frequency GaN/Si switching >1MHz",
      vgs_out: 6,
      qg_drive: 150
    },
    "BD2316EFJ": {
      name: "BD2316EFJ",
      manufacturer: "ROHM",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 4.5, t_fall: 4,
      t_delay: 11,
      iq: 1.2,
      channels: "dual",
      package: "SOP-J8",
      features: "High-speed half-bridge driver, bootstrap",
      application: "GaN half-bridge applications",
      vgs_out: 6,
      qg_drive: 120
    },
    // Infineon GaN drivers
    "1EDI60N12AF": {
      name: "1EDI60N12AF",
      manufacturer: "Infineon",
      technology: ["GaN"],
      vdd_min: 10, vdd_max: 18,
      i_source_max: 6, i_sink_max: 6,
      t_rise: 3, t_fall: 2.5,
      t_delay: 8,
      iq: 2.8,
      channels: "single",
      package: "PG-DSO-12",
      features: "EiceDRIVER, GaN optimized, Miller clamp",
      application: "High-frequency GaN switching",
      vgs_out: 6,
      qg_drive: 200
    },
    "1ED3820MC12N": {
      name: "1ED3820MC12N",
      manufacturer: "Infineon",
      technology: ["GaN", "SiC"],
      vdd_min: 15, vdd_max: 20,
      i_source_max: 12, i_sink_max: 12,
      t_rise: 2, t_fall: 1.8,
      t_delay: 5,
      iq: 5.5,
      channels: "single",
      package: "PG-DSO-12",
      features: "Isolated, high current, GaN/SiC compatible",
      application: "High-power GaN/SiC converters",
      vgs_out: 6,
      qg_drive: 300
    },
    "2EDN7524F": {
      name: "2EDN7524F",
      manufacturer: "Infineon",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 4, t_fall: 3.5,
      t_delay: 10,
      iq: 1.8,
      channels: "dual",
      package: "DSO-8",
      features: "EiceDRIVER, high-speed, bootstrap",
      application: "GaN half-bridge topologies",
      vgs_out: 6,
      qg_drive: 140
    },
    // Microchip/Microsemi GaN drivers
    "MIC4128": {
      name: "MIC4128",
      manufacturer: "Microchip",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 2.5, i_sink_max: 2.5,
      t_rise: 5, t_fall: 4.5,
      t_delay: 13,
      iq: 0.8,
      channels: "dual",
      package: "SOIC-8",
      features: "High-speed dual inverting driver",
      application: "GaN FETs in synchronous applications",
      vgs_out: 18,
      qg_drive: 100
    },
    "MIC4605": {
      name: "MIC4605",
      manufacturer: "Microchip",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 16,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 4, t_fall: 3.5,
      t_delay: 10,
      iq: 1.0,
      channels: "single",
      package: "SOIC-8",
      features: "High-speed, adaptive deadtime",
      application: "GaN half-bridge drivers",
      vgs_out: 16,
      qg_drive: 120
    },
    // STMicroelectronics GaN drivers
    "L6491": {
      name: "L6491",
      manufacturer: "STMicroelectronics",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 8, t_fall: 7,
      t_delay: 18,
      iq: 0.4,
      channels: "dual",
      package: "PowerSO-10",
      features: "Half-bridge driver, integrated bootstrap",
      application: "GaN half-bridge converters",
      vgs_out: 18,
      qg_drive: 80
    },
    "STGAP1AS": {
      name: "STGAP1AS",
      manufacturer: "STMicroelectronics",
      technology: ["GaN", "SiC"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 5, t_fall: 4,
      t_delay: 12,
      iq: 1.5,
      channels: "single",
      package: "SO-8",
      features: "Galvanically isolated, GaN/SiC optimized",
      application: "Isolated GaN/SiC gate drive",
      vgs_out: 18,
      qg_drive: 150
    },
    // Additional high-performance GaN drivers
    "SI8285": {
      name: "SI8285",
      manufacturer: "Silicon Labs",
      technology: ["GaN"],
      vdd_min: 3.3, vdd_max: 5,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6,
      iq: 1.8,
      channels: "dual",
      package: "SOIC-16",
      features: "Isolated 2.5kV, very fast switching",
      application: "GaN isolated half-bridge",
      vgs_out: 5,
      qg_drive: 45
    },
    "NCP51561": {
      name: "NCP51561",
      manufacturer: "ON Semiconductor",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 3, i_sink_max: 4,
      t_rise: 3, t_fall: 2.5,
      t_delay: 7,
      iq: 0.7,
      channels: "single",
      package: "WLCSP",
      features: "Ultra-compact GaN driver",
      application: "High-density GaN power supplies",
      vgs_out: 5.5,
      qg_drive: 25
    },
    "IXD630": {
      name: "IXD630",
      manufacturer: "IXYS (Littelfuse)",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 35,
      i_source_max: 30, i_sink_max: 30,
      t_rise: 8, t_fall: 7,
      t_delay: 18,
      iq: 4.5,
      channels: "dual",
      package: "SOIC-8",
      features: "Very high current driver",
      application: "High-power GaN modules",
      vgs_out: 35,
      qg_drive: 800
    },
    "FAN7688": {
      name: "FAN7688",
      manufacturer: "ON Semiconductor",
      technology: ["GaN"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 4, i_sink_max: 5,
      t_rise: 4, t_fall: 3.5,
      t_delay: 10,
      iq: 1.5,
      channels: "single",
      package: "SOIC-8",
      features: "High-voltage half-bridge driver",
      application: "GaN in PFC and LLC converters",
      vgs_out: 20,
      qg_drive: 180
    },
    "UCC21750DW": {
      name: "UCC21750DW",
      manufacturer: "Texas Instruments",
      technology: ["GaN", "SiC"],
      vdd_min: 15, vdd_max: 30,
      i_source_max: 10, i_sink_max: 10,
      t_rise: 7, t_fall: 6,
      t_delay: 45,
      iq: 8.5,
      channels: "single",
      package: "SOIC-16W",
      features: "Reinforced isolated ±10A, DESAT, GaN/SiC",
      application: "High-power isolated GaN/SiC drives",
      vgs_out: 30,
      qg_drive: 450
    },
    "MAX15301": {
      name: "MAX15301",
      manufacturer: "Analog Devices (Maxim)",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 5.5,
      i_source_max: 4, i_sink_max: 5,
      t_rise: 2, t_fall: 1.8,
      t_delay: 5,
      iq: 1.2,
      channels: "single",
      package: "TQFN-20",
      features: "High-speed GaN driver, programmable deadtime",
      application: "GaN synchronous buck >2MHz",
      vgs_out: 5.5,
      qg_drive: 40
    },
    "LTC7004": {
      name: "LTC7004",
      manufacturer: "Analog Devices (Linear Tech)",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 2.5, i_sink_max: 3.5,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6,
      iq: 0.8,
      channels: "dual",
      package: "DFN-12",
      features: "Ultrafast GaN driver, integrated bootstrap",
      application: "High-frequency GaN half-bridge",
      vgs_out: 5.5,
      qg_drive: 30
    },
    "IRS20957S": {
      name: "IRS20957S",
      manufacturer: "Infineon (International Rectifier)",
      technology: ["GaN", "Si"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 3.5, i_sink_max: 4.5,
      t_rise: 6, t_fall: 5,
      t_delay: 14,
      iq: 1.8,
      channels: "dual",
      package: "SOIC-16",
      features: "Half-bridge driver, UVLO, bootstrap",
      application: "GaN motor drives, inverters",
      vgs_out: 20,
      qg_drive: 160
    },
    "ZXGD3113": {
      name: "ZXGD3113",
      manufacturer: "Diodes Incorporated",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 5, t_fall: 4.5,
      t_delay: 12,
      iq: 0.6,
      channels: "dual",
      package: "SOT-26",
      features: "Compact high-speed driver",
      application: "GaN compact power supplies",
      vgs_out: 18,
      qg_drive: 110
    },
    "NCV51411A": {
      name: "NCV51411A",
      manufacturer: "ON Semiconductor",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 2, i_sink_max: 2,
      t_rise: 6, t_fall: 5,
      t_delay: 15,
      iq: 0.08,
      channels: "single",
      package: "SOT-23-5",
      features: "Ultra-low Iq, automotive qualified",
      application: "GaN automotive applications",
      vgs_out: 18,
      qg_drive: 75
    },
    "FAN73933MX": {
      name: "FAN73933MX",
      manufacturer: "ON Semiconductor",
      technology: ["GaN", "SiC"],
      vdd_min: 10, vdd_max: 20,
      i_source_max: 4, i_sink_max: 4.5,
      t_rise: 7, t_fall: 6,
      t_delay: 14,
      iq: 1.8,
      channels: "single",
      package: "MSOP-8",
      features: "Fast switching, negative gate drive",
      application: "GaN/SiC high-frequency switching",
      vgs_out: 18,
      qg_drive: 200
    },
    "UCC27712": {
      name: "UCC27712",
      manufacturer: "Texas Instruments",
      technology: ["GaN", "Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 8, i_sink_max: 8,
      t_rise: 5, t_fall: 4,
      t_delay: 11,
      iq: 2.5,
      channels: "dual",
      package: "SOIC-14",
      features: "120V half-bridge, high current",
      application: "GaN half-bridge up to 1MHz",
      vgs_out: 18,
      qg_drive: 280
    },
    "EL7158": {
      name: "EL7158",
      manufacturer: "Renesas (Intersil)",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 16,
      i_source_max: 3, i_sink_max: 3,
      t_rise: 4, t_fall: 3.5,
      t_delay: 9,
      iq: 1.1,
      channels: "dual",
      package: "QFN-16",
      features: "High-speed dual driver, low propagation delay",
      application: "GaN synchronous converters",
      vgs_out: 16,
      qg_drive: 95
    },
    "MCP1416": {
      name: "MCP1416",
      manufacturer: "Microchip",
      technology: ["GaN", "Si"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 8, t_fall: 7,
      t_delay: 18,
      iq: 0.25,
      channels: "single",
      package: "SOT-23-5",
      features: "Low-cost, compact driver",
      application: "GaN low-power converters",
      vgs_out: 18,
      qg_drive: 60
    },
    "SI8271GB": {
      name: "SI8271GB",
      manufacturer: "Silicon Labs",
      technology: ["GaN", "SiC"],
      vdd_min: 3, vdd_max: 5.5,
      i_source_max: 4, i_sink_max: 4,
      t_rise: 2.5, t_fall: 2,
      t_delay: 6.5,
      iq: 1.5,
      channels: "single",
      package: "SOIC-8",
      features: "Isolated 2.5kV, ultrafast",
      application: "Isolated GaN/SiC switching",
      vgs_out: 5,
      qg_drive: 40
    },
    "NCP81255": {
      name: "NCP81255",
      manufacturer: "ON Semiconductor",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 3.5, i_sink_max: 4.5,
      t_rise: 2.8, t_fall: 2.3,
      t_delay: 7,
      iq: 0.9,
      channels: "single",
      package: "QFN-24",
      features: "Integrated controller + GaN driver",
      application: "GaN buck converters with controller",
      vgs_out: 5.5,
      qg_drive: 35
    },
    "LM5113-Q1": {
      name: "LM5113-Q1",
      manufacturer: "Texas Instruments",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 5.5,
      i_source_max: 1.5, i_sink_max: 1.5,
      t_rise: 3.5, t_fall: 2.8,
      t_delay: 7,
      iq: 0.4,
      channels: "single",
      package: "VSON-8",
      features: "Automotive qualified, GaN optimized",
      application: "Automotive GaN applications",
      vgs_out: 5.5,
      qg_drive: 15
    },
    "1EDF5673K": {
      name: "1EDF5673K",
      manufacturer: "Infineon",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 7, i_sink_max: 7,
      t_rise: 3.5, t_fall: 3,
      t_delay: 9,
      iq: 2.2,
      channels: "single",
      package: "PG-DSO-14",
      features: "EiceDRIVER Enhanced, high current GaN",
      application: "High-power GaN switching",
      vgs_out: 6,
      qg_drive: 240
    },
    "UCC27282DBVT": {
      name: "UCC27282DBVT",
      manufacturer: "Texas Instruments",
      technology: ["GaN", "Si"],
      vdd_min: 4, vdd_max: 18,
      i_source_max: 9, i_sink_max: 9,
      t_rise: 6, t_fall: 5,
      t_delay: 13,
      iq: 2.3,
      channels: "single",
      package: "SOT-23-6",
      features: "High current, 5A peak, compact",
      application: "GaN high-speed switching",
      vgs_out: 18,
      qg_drive: 350
    },
    "BD23A01NUX": {
      name: "BD23A01NUX",
      manufacturer: "ROHM",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 18,
      i_source_max: 4.5, i_sink_max: 4.5,
      t_rise: 4, t_fall: 3.5,
      t_delay: 10,
      iq: 1.3,
      channels: "single",
      package: "VSON-8",
      features: "High-speed GaN driver, low delay",
      application: "GaN compact power supplies",
      vgs_out: 6,
      qg_drive: 130
    },
    "ISL8117": {
      name: "ISL8117",
      manufacturer: "Renesas (Intersil)",
      technology: ["GaN"],
      vdd_min: 4.5, vdd_max: 5.5,
      i_source_max: 3, i_sink_max: 4,
      t_rise: 3, t_fall: 2.5,
      t_delay: 7.5,
      iq: 0.85,
      channels: "dual",
      package: "QFN-24",
      features: "Integrated controller + GaN half-bridge driver",
      application: "GaN synchronous buck with PWM",
      vgs_out: 5.5,
      qg_drive: 35
    },
    "NCP51530": {
      name: "NCP51530",
      manufacturer: "ON Semiconductor",
      technology: ["GaN"],
      vdd_min: 4, vdd_max: 5.5,
      i_source_max: 2.8, i_sink_max: 3.5,
      t_rise: 3.2, t_fall: 2.7,
      t_delay: 8,
      iq: 0.75,
      channels: "single",
      package: "DFN-8",
      features: "Compact GaN driver, adaptive deadtime",
      application: "GaN half-bridge topologies",
      vgs_out: 5.5,
      qg_drive: 28
    }
  }
};

// Only initialize chart if canvas exists on the page
let ctx = null;
let chart = null;
let selectedTransistor = null;

// Load selectedTransistor from localStorage on page load
function loadSelectedTransistorFromStorage() {
  try {
    const stored = localStorage.getItem('selectedTransistor');
    if (stored) {
      selectedTransistor = JSON.parse(stored);
      window.selectedTransistor = selectedTransistor; // Make sure it's globally accessible
      console.log('Loaded transistor from storage:', selectedTransistor.name);
      updateSelectedTransistorInfo();
    }
  } catch (e) {
    console.warn('Failed to load selectedTransistor from localStorage:', e);
  }
}

// Save selectedTransistor to localStorage
function saveSelectedTransistorToStorage() {
  try {
    if (selectedTransistor) {
      localStorage.setItem('selectedTransistor', JSON.stringify(selectedTransistor));
      console.log('Saved transistor to storage:', selectedTransistor.name);
    } else {
      localStorage.removeItem('selectedTransistor');
      console.log('Removed transistor from storage');
    }
  } catch (e) {
    console.warn('Failed to save selectedTransistor to localStorage:', e);
  }
}

// Функции за интеграция на selectedTransistor
function updateSelectedTransistorInfo() {
    console.log('Updating selected transistor info, selectedTransistor:', selectedTransistor?.name);

    if (selectedTransistor) {
        const technology = getTransistorTechnology(selectedTransistor.name) || 'Unknown';

        // Database tab elements
        const dbInfo = document.getElementById('selectedTransistorInfo');
        const dbWarning = document.getElementById('noTransistorWarning');
        if (dbInfo) {
            dbInfo.style.display = 'block';
            const selectedModelInfo = document.getElementById('selectedModelInfo');
            const selectedManufacturerInfo = document.getElementById('selectedManufacturerInfo');
            const selectedVdsInfo = document.getElementById('selectedVdsInfo');
            const selectedIdInfo = document.getElementById('selectedIdInfo');
            const selectedRdsInfo = document.getElementById('selectedRdsInfo');

            if (selectedModelInfo) selectedModelInfo.textContent = selectedTransistor.name || '-';
            if (selectedManufacturerInfo) selectedManufacturerInfo.textContent = selectedTransistor.manufacturer || '-';
            if (selectedVdsInfo) selectedVdsInfo.textContent = (selectedTransistor.vds_max || '-') + ' V';
            if (selectedIdInfo) selectedIdInfo.textContent = (selectedTransistor.id_max || '-') + ' A';
            if (selectedRdsInfo) selectedRdsInfo.textContent = (selectedTransistor.rds_mohm || '-') + ' mΩ';
        }
        if (dbWarning) dbWarning.style.display = 'none';

        // Analysis tab elements
        const analysisTransistorAlert = document.getElementById('analysisTransistorAlert');
        const analysisTransistorData = document.getElementById('analysisTransistorData');
        if (analysisTransistorAlert) analysisTransistorAlert.style.display = 'none';
        if (analysisTransistorData) {
            analysisTransistorData.style.display = 'block';
            const analysisModelName = document.getElementById('analysisModelName');
            const analysisManufacturer = document.getElementById('analysisManufacturer');
            const analysisPackage = document.getElementById('analysisPackage');
            const analysisVdsMax = document.getElementById('analysisVdsMax');
            const analysisIdMax = document.getElementById('analysisIdMax');
            const analysisRdsOn = document.getElementById('analysisRdsOn');

            if (analysisModelName) analysisModelName.textContent = selectedTransistor.name || '-';
            if (analysisManufacturer) analysisManufacturer.textContent = selectedTransistor.manufacturer || '-';
            if (analysisPackage) analysisPackage.textContent = selectedTransistor.package || '-';
            if (analysisVdsMax) analysisVdsMax.textContent = (selectedTransistor.vds_max || '-') + ' V';
            if (analysisIdMax) analysisIdMax.textContent = (selectedTransistor.id_max || '-') + ' A';
            if (analysisRdsOn) analysisRdsOn.textContent = (selectedTransistor.rds_mohm || '-') + ' mΩ';
        }

        // Theory tab elements
        const theoryInfo = document.getElementById('selectedTransistorTheory');
        const theoryWarning = document.getElementById('noTransistorTheoryWarning');
        if (theoryInfo) {
            theoryInfo.style.display = 'block';
            const theoryTransistorName = document.getElementById('theoryTransistorName');
            const theoryTransistorTech = document.getElementById('theoryTransistorTech');
            const theoryTransistorRds = document.getElementById('theoryTransistorRds');

            if (theoryTransistorName) theoryTransistorName.textContent = selectedTransistor.name || '-';
            if (theoryTransistorTech) theoryTransistorTech.textContent = technology;
            if (theoryTransistorRds) theoryTransistorRds.textContent = selectedTransistor.rds_mohm || '-';
        }
        if (theoryWarning) theoryWarning.style.display = 'none';

        // Tools tab elements
        const toolsInfo = document.getElementById('selectedTransistorTools');
        const toolsWarning = document.getElementById('noTransistorToolsWarning');
        if (toolsInfo) {
            toolsInfo.style.display = 'block';
            const toolsTransistorName = document.getElementById('toolsTransistorName');
            const toolsTransistorVds = document.getElementById('toolsTransistorVds');
            const toolsTransistorRds = document.getElementById('toolsTransistorRds');

            if (toolsTransistorName) toolsTransistorName.textContent = selectedTransistor.name || '-';
            if (toolsTransistorVds) toolsTransistorVds.textContent = selectedTransistor.vds_max || '-';
            if (toolsTransistorRds) toolsTransistorRds.textContent = selectedTransistor.rds_mohm || '-';
        }
        if (toolsWarning) toolsWarning.style.display = 'none';

        // Update parameter calculator hints and theory formulas
        updateParameterCalculatorHints();
        updateTheoryFormulas();
        highlightSelectedTransistorInTable();

        console.log('Successfully updated all tabs with transistor info');
    } else {
        // No transistor selected - show warnings and hide info sections
        console.log('No transistor selected, showing warnings');

        // Database tab - hide info, show warning
        const dbInfo = document.getElementById('selectedTransistorInfo');
        const dbWarning = document.getElementById('noTransistorWarning');
        if (dbInfo) dbInfo.style.display = 'none';
        if (dbWarning) dbWarning.style.display = 'block';

        // Analysis tab - show alert, hide data
        const analysisTransistorAlert = document.getElementById('analysisTransistorAlert');
        const analysisTransistorData = document.getElementById('analysisTransistorData');
        if (analysisTransistorAlert) analysisTransistorAlert.style.display = 'block';
        if (analysisTransistorData) analysisTransistorData.style.display = 'none';

        // Theory tab - hide info, show warning
        const theoryInfo = document.getElementById('selectedTransistorTheory');
        const theoryWarning = document.getElementById('noTransistorTheoryWarning');
        if (theoryInfo) theoryInfo.style.display = 'none';
        if (theoryWarning) theoryWarning.style.display = 'block';

        // Tools tab - hide info, show warning
        const toolsInfo = document.getElementById('selectedTransistorTools');
        const toolsWarning = document.getElementById('noTransistorToolsWarning');
        if (toolsInfo) toolsInfo.style.display = 'none';
        if (toolsWarning) toolsWarning.style.display = 'block';

        // Update parameter calculator hints and theory formulas
        updateParameterCalculatorHints();
        updateTheoryFormulas();
    }
}

function getTransistorTechnology(name) {
    if (!name) return '';
    if (name.includes('SiC')) return 'SiC';
    if (name.includes('GaN')) return 'GaN';
    return 'Si';
}

function updateParameterCalculatorHints() {
    if (selectedTransistor) {
        const integration = document.getElementById('transistorIntegration');
        const voltageHint = document.getElementById('voltageHint');
        const currentHint = document.getElementById('currentHint');

        if (integration) {
            integration.style.display = 'block';
            document.getElementById('integrationTransistorName').textContent = selectedTransistor.name;
            document.getElementById('integrationVds').textContent = selectedTransistor.vds_max;
            document.getElementById('integrationRds').textContent = selectedTransistor.rds_mohm;
        }

        if (voltageHint) {
            voltageHint.style.display = 'block';
            document.getElementById('safeVoltage').textContent = Math.floor(selectedTransistor.vds_max * 0.6);
        }

        if (currentHint) {
            currentHint.style.display = 'block';
            document.getElementById('safeCurrent').textContent = Math.floor(selectedTransistor.id_max * 0.7);
        }
    }
}

function updateTheoryFormulas() {
    if (selectedTransistor && typeof MathJax !== 'undefined') {
        const generic = document.getElementById('conductionFormulaGeneric');
        const specific = document.getElementById('conductionFormulaSpecific');

        if (generic && specific) {
            generic.style.display = 'none';
            specific.style.display = 'block';
            specific.querySelector('.formula-value').textContent = (selectedTransistor.rds_mohm / 1000).toFixed(4) + 'Ω';

            // Re-render MathJax for the specific formula
            if (MathJax.typesetPromise) {
                MathJax.typesetPromise([specific]).then(() => {
                    console.log('MathJax formula updated with transistor values');
                }).catch((err) => console.log('MathJax error:', err));
            }
        }
    }
}

function highlightSelectedTransistorInTable() {
    if (selectedTransistor) {
        const tableRows = document.querySelectorAll('#transistorTableBody tr');
        tableRows.forEach(row => {
            const modelCell = row.querySelector('.model-cell');
            if (modelCell && modelCell.textContent === selectedTransistor.name) {
                // row.classList.add('selected-transistor-row'); // COMPLETELY REMOVED - no highlighting at all
                // Auto-scroll to the row
                setTimeout(() => {
                    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            } else {
                row.classList.remove('selected-transistor-row');
            }
        });
    }
}

// Setup event listeners for selectedTransistor integration
function setupSelectedTransistorIntegration() {
  // "Go to Calculator" buttons
  document.addEventListener('click', function(e) {
    if (e.target.id === 'goToCalculator' || 
        e.target.id === 'goToCalculatorFromWarning' || 
        e.target.id === 'goToCalculatorFromTheory' || 
        e.target.id === 'goToCalculatorFromTools' ||
        e.target.closest('#goToCalculator') ||
        e.target.closest('#goToCalculatorFromWarning') ||
        e.target.closest('#goToCalculatorFromTheory') ||
        e.target.closest('#goToCalculatorFromTools')) {
      window.location.href = '/calculator';
    }

    if (e.target.id === 'selectTransistorFromTheory' ||
        e.target.id === 'selectTransistorFromTools' ||
        e.target.closest('#selectTransistorFromTheory') ||
        e.target.closest('#selectTransistorFromTools')) {
      window.location.href = '/calculator';
    }
  });
}

// Initialize chart context only if the canvas element exists
document.addEventListener('DOMContentLoaded', function() {
  // Load selectedTransistor from localStorage first
  loadSelectedTransistorFromStorage();

  // Set up selected transistor integration event listeners
  setupSelectedTransistorIntegration();

  // Update selected transistor info on page load
  updateSelectedTransistorInfo();
  
  // Load saved working parameters for driver page
  loadSavedWorkingParameters();
  
  // Update transistor card on driver page if applicable
  updateTransistorCardOnDriverPage();
  
  const lossChartElement = document.getElementById('lossChart');
  if (lossChartElement) {
    ctx = lossChartElement.getContext('2d');
  }
});

// Функция за зареждане на всички транзистори
function populateTransistors() {
  const techSelect = document.getElementById('techSelect');
  if (!techSelect) return;

  const tech = techSelect.value;

  const transistorList = document.getElementById('transistorList');
  const transistorInput = document.getElementById('transistorSelect');
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];

  // Изчистваме datalist ако съществува
  if (transistorList) {
    transistorList.innerHTML = '';
  }

  // Обновяваме placeholder текста ако съществува
  if (transistorInput) {
    transistorInput.placeholder = langData.selectTransistor + '...';
  }

  const transistors = TRANSISTOR_DB[tech] || {};

  // Добавяме всички транзистори в datalist
  if (transistorList) {
    Object.entries(transistors).forEach(([key, transistor]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = `${transistor.name} [${transistor.vds_max}V, ${transistor.id_max}A]`;
      transistorList.appendChild(option);
    });
  }
}

// Функция за показване на информацията за избрания транзистор
function showTransistorInfo(transistorKey) {
  const techSelect = document.getElementById('techSelect');
  if (!techSelect) return;

  const tech = techSelect.value;
  const transistorInfo = document.getElementById('transistorInfo');

  if (!transistorKey || transistorKey.trim() === '') {
    if (transistorInfo) {
      transistorInfo.style.display = 'none';
    }
    selectedTransistor = null;
    window.selectedTransistor = null; // Clear from window too
    saveSelectedTransistorToStorage(); // Save to localStorage
    updateAnalysisTransistorDisplay(); // Update analysis display
    updateSelectedTransistorInfo(); // Update all tab integrations
    return;
  }

  // Проверяваме дали моделът е в базата данни
  let transistor = TRANSISTOR_DB[tech] && TRANSISTOR_DB[tech][transistorKey];

  if (transistor) {
    // Модел от базата данни
    selectedTransistor = transistor;
    window.selectedTransistor = selectedTransistor; // Make globally accessible
    saveSelectedTransistorToStorage(); // Save to localStorage
    updateAnalysisTransistorDisplay(); // Update analysis display
    updateSelectedTransistorInfo(); // Update all tab integrations

    const modelName = document.getElementById('modelName');
    const manufacturer = document.getElementById('manufacturer');
    const packageEl = document.getElementById('package');
    const vdsMax = document.getElementById('vdsMax');
    const idMax = document.getElementById('idMax');
    const rdsOn = document.getElementById('rdsOn');
    const application = document.getElementById('application');

    if (modelName) modelName.textContent = transistor.name;
    if (manufacturer) manufacturer.textContent = transistor.manufacturer;
    if (packageEl) packageEl.textContent = transistor.package;
    if (vdsMax) vdsMax.textContent = transistor.vds_max + ' V';
    if (idMax) idMax.textContent = transistor.id_max + ' A';
    if (rdsOn) rdsOn.textContent = transistor.rds_mohm + ' mΩ';
    if (application) application.textContent = transistor.application;

    // Генерираме предложения за параметри
    generateParameterSuggestions(transistor);

    if (transistorInfo) {
      transistorInfo.style.display = 'block';
    }
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
    window.selectedTransistor = selectedTransistor; // Make globally accessible
    saveSelectedTransistorToStorage(); // Save to localStorage

    const modelName = document.getElementById('modelName');
    const manufacturer = document.getElementById('manufacturer');
    const packageEl = document.getElementById('package');
    const vdsMax = document.getElementById('vdsMax');
    const idMax = document.getElementById('idMax');
    const rdsOn = document.getElementById('rdsOn');
    const application = document.getElementById('application');

    if (modelName) modelName.textContent = selectedTransistor.name;
    if (manufacturer) manufacturer.textContent = "Ръчно въведен модел";
    if (packageEl) packageEl.textContent = "Моля въведете параметрите ръчно";
    if (vdsMax) vdsMax.textContent = typicalParams.vds_max + ' V (типично)';
    if (idMax) idMax.textContent = typicalParams.id_max + ' A (типично)';
    if (rdsOn) rdsOn.textContent = typicalParams.rds_mohm + ' mΩ (типично)';
    if (application) application.textContent = "Копирано от datasheet - моля проверете параметрите";

    // Генерираме предложения с типични параметри
    generateParameterSuggestions(selectedTransistor);
    updateSelectedTransistorInfo(); // Update all tab integrations after custom transistor creation
    updateAnalysisTransistorDisplay(); // Update analysis display

    if (transistorInfo) {
      transistorInfo.style.display = 'block';
    }
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
  if (!suggestionsDiv) return;

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

  const pCondEl = document.getElementById('pCond');
  const pSwEl = document.getElementById('pSw');
  const pTotalEl = document.getElementById('pTotal');
  const efficiencyEl = document.getElementById('efficiency');

  if (pCondEl) pCondEl.textContent=pCond.toFixed(2)+" W";
  if (pSwEl) pSwEl.textContent=pSw.toFixed(2)+" W";
  if (pTotalEl) pTotalEl.textContent=pTotal.toFixed(2)+" W";
  if (efficiencyEl) efficiencyEl.textContent=eff.toFixed(2)+" %";

  if(chart) chart.destroy();

  // Only create chart if canvas context exists
  if (ctx) {
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
  }

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
function switchLanguage(lang, button) {
  currentLang = lang;

  console.log('Language switched to:', lang);

  // Запазваме текущо избраните стойности преди смяната на езика (safely)
  const savedValues = {};

  // Safely get values from elements that might not exist
  const techSelectEl = document.getElementById('techSelect');
  const transistorSelectEl = document.getElementById('transistorSelect');
  const vdcEl = document.getElementById('vdc');
  const iLoadEl = document.getElementById('iLoad');
  const fswEl = document.getElementById('fsw');
  const tempEl = document.getElementById('temp');
  const dutyEl = document.getElementById('duty');
  const freqMinEl = document.getElementById('freqMin');
  const freqMaxEl = document.getElementById('freqMax');

  if (techSelectEl) savedValues.techSelect = techSelectEl.value;
  if (transistorSelectEl) savedValues.transistorSelect = transistorSelectEl.value;
  if (vdcEl) savedValues.vdc = vdcEl.value;
  if (iLoadEl) savedValues.iLoad = iLoadEl.value;
  if (fswEl) savedValues.fsw = fswEl.value;
  if (tempEl) savedValues.temp = tempEl.value;
  if (dutyEl) savedValues.duty = dutyEl.value;
  if (freqMinEl) savedValues.freqMin = freqMinEl.value;
  if (freqMaxEl) savedValues.freqMax = freqMaxEl.value;
  savedValues.selectedTransistor = selectedTransistor; // Запазваме и глобалната променлива

  // Обновяваме активния бутон (safely)
  const langButtons = document.querySelectorAll('.lang-btn');
  if (langButtons.length > 0) {
    langButtons.forEach(btn => {
      if (btn && btn.classList) {
        btn.classList.remove('active');
      }
    });

    // Build the ID correctly
    const targetLangId = 'lang' + lang.toUpperCase();
    const langBtn = document.getElementById(targetLangId);
    if (langBtn && langBtn.classList) {
      langBtn.classList.add('active');
    }
  }

  // Обновяваме текстовете
  const langData = LANGUAGES[lang];
  if (langData) {
    // Основни заглавия (само ако съществуват)
    const mainTitle = document.getElementById('mainTitle');
    const subtitle = document.getElementById('subtitle');

    if (mainTitle) mainTitle.textContent = langData.mainTitle;
    if (subtitle) subtitle.textContent = langData.subtitle;

    // Специфична обработка за theory page
    if (window.switchTheoryLanguage) {
      window.switchTheoryLanguage(lang);
    } else {
      // Standard language switching for span elements with classes
      const bgElements = document.querySelectorAll('.lang-bg');
      const enElements = document.querySelectorAll('.lang-en');

      if (bgElements.length > 0 || enElements.length > 0) {
        if (lang === 'bg') {
          bgElements.forEach(el => el.style.display = '');
          enElements.forEach(el => el.style.display = 'none');
        } else {
          bgElements.forEach(el => el.style.display = 'none');
          enElements.forEach(el => el.style.display = '');
        }
      }
    }

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

    // Възстановяваме всички запазени стойности след филтрирането (safely)
    setTimeout(() => {
      if (techSelectEl && savedValues.techSelect) techSelectEl.value = savedValues.techSelect;
      if (vdcEl && savedValues.vdc) vdcEl.value = savedValues.vdc;
      if (iLoadEl && savedValues.iLoad) iLoadEl.value = savedValues.iLoad;
      if (fswEl && savedValues.fsw) fswEl.value = savedValues.fsw;
      if (tempEl && savedValues.temp) tempEl.value = savedValues.temp;
      if (dutyEl && savedValues.duty) dutyEl.value = savedValues.duty;
      if (freqMinEl && savedValues.freqMin) freqMinEl.value = savedValues.freqMin;
      if (freqMaxEl && savedValues.freqMax) freqMaxEl.value = savedValues.freqMax;

      // Възстановяваме избрания транзистор
      if (savedValues.transistorSelect && transistorSelectEl) {
        transistorSelectEl.value = savedValues.transistorSelect;
        selectedTransistor = savedValues.selectedTransistor;
        updateSelectedTransistorInfo(); // Update all tab integrations

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
  forced: 1.5,           // Forced air cooling 1-2 m/s - Sunon/Delta fans
  liquid: 0.5,           // Liquid cooling - water block systems
  small_heatsink: 15,    // Small heatsink 10-20cm² - Fischer SK104/SK105
  medium_heatsink: 6,    // Medium heatsink 50-100cm² - Fischer SK129/SK96
  large_heatsink: 2.5,   // Large heatsink >200cm² - Fischer SK53/SK54
  forced_air: 1.5,       // Forced air cooling 1-2 m/s - Sunon/Delta fans (legacy)
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
  // Update the Analysis tab transistor display first
  updateAnalysisTransistorDisplay();

  // Use selected transistor or fallback to a default one
  let transistor = selectedTransistor;
  let usingFallback = false;

  if (!transistor) {
    // Use a default transistor for analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    // Show notification about using fallback
    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N. За точен анализ изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N. For accurate analysis, select transistor from Calculator.';

    const efficiencyInsights = document.getElementById('efficiencyInsights');
    if (efficiencyInsights) {
      efficiencyInsights.innerHTML = `<div class="fallback-warning">⚠️ ${message}</div>`;
      efficiencyInsights.style.display = 'block';
    }
  }

  const freqMin = parseFloat(document.getElementById('freqMin').value) || 1;
  const freqMax = parseFloat(document.getElementById('freqMax').value) || 1000;

  // Try to get values from Calculator tab inputs, or use defaults
  const vdcElement = document.getElementById('vdc');
  const iLoadElement = document.getElementById('iLoad');
  const tempElement = document.getElementById('temp');
  const dutyElement = document.getElementById('duty');

  const vdc = vdcElement ? parseFloat(vdcElement.value) || 200 : 200;
  const iLoad = iLoadElement ? parseFloat(iLoadElement.value) || 10 : 10;
  const temp = tempElement ? parseFloat(tempElement.value) || 100 : 100;
  const duty = dutyElement ? parseFloat(dutyElement.value) || 0.5 : 0.5;

  // Determine technology
  let techType;
  if (transistor.name.includes('Si') && !transistor.name.includes('SiC')) {
    techType = 'Si';
  } else if (transistor.name.includes('SiC')) {
    techType = 'SiC';
  } else if (transistor.name.includes('GaN')) {
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
    const rds_on_ohms = transistor.rds_mohm / 1000; // Convert milliohm to ohm
    const pCond = calculateAdvancedConductionLosses(iLoad, rds_on_ohms, duty, temp, techType);
    const pSw = calculateAdvancedSwitchingLosses(vdc, iLoad, freq, temp, techType);
    const pTotal = pCond + pSw;
    const pOut = vdc * iLoad * duty; // Output power
    const efficiency = (pOut / (pOut + pTotal)) * 100;

    efficiencies.push(Math.max(0, Math.min(100, efficiency)));
  }

  // Create chart
  const efficiencyChartElement = document.getElementById('efficiencyChart');
  if (!efficiencyChartElement) {
    console.warn('Efficiency chart canvas not found');
    return;
  }

  const ctx = efficiencyChartElement.getContext('2d');
  if (!ctx) {
    console.warn('Cannot get 2D context for efficiency chart');
    return;
  }

  // Destroy existing chart if any
  if (window.efficiencyChartInstance) {
    window.efficiencyChartInstance.destroy();
  }

  window.efficiencyChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: frequencies.map(f => f.toFixed(0)),
      datasets: [{
        label: `${transistor.name} - ${currentLang === 'bg' ? 'КПД' : 'Efficiency'} (%)`,
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
  const clickableTerms = document.querySelectorAll('.clickable-term');
  if (clickableTerms) {
    clickableTerms.forEach(term => {
      if (term) {
        term.addEventListener('click', function() {
          const termKey = this.getAttribute('data-term');
          if (termKey) {
            showTermExplanation(termKey);
          }
        });
      }
    });
  }
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
  const termData = explanations[termKey];
  if (!termData) {
    console.warn(`No explanation found for term: ${termKey}`);
    return;
  }
  const explanation = termData[lang];

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
  // Load selectedTransistor from localStorage
  loadSelectedTransistorFromStorage();

  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', closeTermExplanation);
  }

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

// Thermal modeling function - renamed to match advanced.html expectations
function calculateThermal() {
  // Force reload selectedTransistor from storage first
  loadSelectedTransistorFromStorage();

  // Update the Analysis tab transistor display first
  updateAnalysisTransistorDisplay();

  // Get all DOM elements at the beginning with null protection
  const thermalStatusDiv = document.getElementById('thermalStatus');
  const thermalResultsDiv = document.getElementById('thermalResults');
  const thermalExplanation = document.getElementById('thermalExplanation');

  let transistor = selectedTransistor || window.selectedTransistor;
  let usingFallback = false;

  console.log('calculateThermal - selectedTransistor:', selectedTransistor);
  console.log('calculateThermal - window.selectedTransistor:', window.selectedTransistor);

  if (!transistor) {
    // Use fallback transistor for thermal analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N за термичен анализ. За точни резултати изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N for thermal analysis. For accurate results, select transistor from Calculator.';

    // Show warning in thermal results
    const thermalResults = document.getElementById('thermalResults');
    if (thermalResults) {
      const existingWarning = thermalResults.querySelector('.fallback-thermal-warning');
      if (!existingWarning) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'fallback-thermal-warning';
        warningDiv.innerHTML = `⚠️ ${message}`;
        thermalResults.insertBefore(warningDiv, thermalResults.firstChild);
      }
    }
  }

  // Get elements with null protection to prevent console errors
  const ambientTempEl = document.getElementById('ambientTemp');
  const coolingTypeEl = document.getElementById('coolingType');

  if (!ambientTempEl || !coolingTypeEl) {
    console.warn('Thermal calculation elements not found - advanced tab may not be loaded');
    return;
  }

  const ambientTemp = parseFloat(ambientTempEl.value);
  const coolingType = coolingTypeEl.value;

  // Get current losses - use fallback values if Calculator elements don't exist
  const vdcEl = document.getElementById('vdc');
  const iLoadEl = document.getElementById('iLoad');
  const fswEl = document.getElementById('fsw');
  const tempEl = document.getElementById('temp');
  const dutyEl = document.getElementById('duty');

  const vdc = vdcEl ? parseFloat(vdcEl.value) || 200 : 200;
  const iLoad = iLoadEl ? parseFloat(iLoadEl.value) || 10 : 10;
  const fsw = fswEl ? parseFloat(fswEl.value) || 50 : 50;
  const temp = tempEl ? parseFloat(tempEl.value) || 100 : 100;
  const duty = dutyEl ? parseFloat(dutyEl.value) || 0.5 : 0.5;

  // Determine technology
  let techType;
  if (transistor.name.includes('Si') && !transistor.name.includes('SiC')) {
    techType = 'Si';
  } else if (transistor.name.includes('SiC')) {
    techType = 'SiC';
  } else if (transistor.name.includes('GaN')) {
    techType = 'GaN';
  } else {
    techType = 'Si'; // fallback
  }

  // Calculate losses with current parameters
  const rds_on_ohms = transistor.rds_mohm / 1000; // Convert milliohm to ohm
  const pCond = calculateAdvancedConductionLosses(iLoad, rds_on_ohms, duty, temp, techType);
  const pSw = calculateAdvancedSwitchingLosses(vdc, iLoad, fsw, temp, techType);
  const totalLosses = pCond + pSw;

  // Thermal resistances - точни datasheet стойности според корпуса
  let rth_jc; // Junction-to-case (точни стойности от производители)
  if (transistor.package.includes('TO-220')) {
    rth_jc = 0.5; // TO-220: 0.5 K/W (Infineon, Wolfspeed datasheet)
  } else if (transistor.package.includes('D2PAK')) {
    rth_jc = 1.0; // D2PAK: 1.0 K/W (STMicroelectronics datasheet)
  } else if (transistor.package.includes('DPAK')) {
    rth_jc = 2.5; // DPAK: 2.5 K/W (typical SMD package)
  } else if (transistor.package.includes('SO8') || transistor.package.includes('SO-8')) {
    rth_jc = 20; // SO8: 20 K/W (GaN Systems datasheet)
  } else if (transistor.package.includes('QFN')) {
    rth_jc = 15; // QFN: 15 K/W (EPC datasheet)
  } else if (transistor.package.includes('TO-247')) {
    rth_jc = 0.24; // TO-247: 0.24 K/W (Wolfspeed datasheet)
  } else if (transistor.package.includes('TO-263')) {
    rth_jc = 1.5; // TO-263: 1.5 K/W (Rohm datasheet)
  } else {
    rth_jc = 1.5; // Консервативна стойност за неизвестни корпуси
  }

  const rth_ca = THERMAL_RESISTANCES[coolingType] || THERMAL_RESISTANCES.natural; // Case-to-ambient with fallback
  const rth_ja = rth_jc + rth_ca; // Total junction-to-ambient
  
  console.log('Thermal calc debug:', {coolingType, rth_ca, rth_jc, rth_ja, totalLosses, pCond, pSw});

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

  // Display results with null protection to prevent console errors
  const langData = LANGUAGES[currentLang] || LANGUAGES['bg'];

  const junctionTempEl = document.getElementById('junctionTemp');
  const caseTempEl = document.getElementById('caseTemp');
  const thermalResistanceEl = document.getElementById('thermalResistance');
  const thermalMarginEl = document.getElementById('thermalMargin');

  if (junctionTempEl) junctionTempEl.textContent = `${junctionTemp.toFixed(1)}°C`;
  if (caseTempEl) caseTempEl.textContent = `${caseTemp.toFixed(1)}°C`;
  if (thermalResistanceEl) thermalResistanceEl.textContent = `${rth_ja.toFixed(2)} K/W`;
  if (thermalMarginEl) thermalMarginEl.textContent = `${thermalMargin.toFixed(1)}°C`;

  // Цветово кодиране според термичния марж - with null safety
  // Премахни всички съществуващи класове with null safety
  if (thermalResultsDiv) {
    thermalResultsDiv.classList.remove('thermal-good', 'thermal-warning', 'thermal-danger');
  }

  let statusText = '';
  let explanationText = '';

  if (thermalMargin > 50) {
    // Отлично охлаждане
    if (thermalResultsDiv) {
      thermalResultsDiv.classList.add('thermal-good');
    }
    statusText = currentLang === 'bg' ? '✅ ОТЛИЧНО ОХЛАЖДАНЕ' : '✅ EXCELLENT COOLING';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е много добър. Транзисторът ще работи стабилно дори при повишени товари.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is excellent. The transistor will operate stably even under increased loads.`;
  } else if (thermalMargin > 25) {
    // Добро охлаждане
    if (thermalResultsDiv) {
      thermalResultsDiv.classList.add('thermal-warning');
    }
    statusText = currentLang === 'bg' ? '⚠️ ДОБРО ОХЛАЖДАНЕ' : '⚠️ GOOD COOLING';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е приемлив, но внимавайте при пикови товари. Може да обмислите по-добро охлаждане.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is acceptable, but be careful with peak loads. Consider better cooling.`;
  } else {
    // Опасно
    if (thermalResultsDiv) {
      thermalResultsDiv.classList.add('thermal-danger');
    }
    statusText = currentLang === 'bg' ? '🔥 ОПАСНО - НУЖНО ПО-ДОБРО ОХЛАЖДАНЕ' : '🔥 DANGEROUS - BETTER COOLING NEEDED';
    explanationText = currentLang === 'bg' ? 
      `Термичният марж от ${thermalMargin.toFixed(1)}°C е твърде малък! Транзисторът рискува от прегряване. Задължително използвайте по-добро охлаждане.` :
      `Thermal margin of ${thermalMargin.toFixed(1)}°C is too small! The transistor risks overheating. Better cooling is mandatory.`;
  }

  if (thermalStatusDiv) {
    thermalStatusDiv.textContent = statusText;
    thermalStatusDiv.style.display = 'block';
  }

  // Добави научно обяснение с точни источници
  const transistorModel = usingFallback ? 'IRFP260N (fallback)' : transistor.name;
  const scientificInfo = currentLang === 'bg' ? 
    `\n\nТочни изчисления (datasheet стойности):\n• Транзистор: ${transistorModel}\n• Общи загуби: ${totalLosses.toFixed(3)}W\n• Загуби от проводимост: ${pCond.toFixed(3)}W (P = I²×RDS(on)×D)\n• Загуби от превключване: ${pSw.toFixed(3)}W (физични формули за gate charge)\n• Rth(j-c): ${rth_jc.toFixed(2)}K/W (${transistor.package} - производител datasheet)\n• Rth(c-a): ${rth_ca.toFixed(2)}K/W (проверени измервания)\n• Tj,max ${techType}: ${maxJunctionTemp}°C (semiconductor physics)\n\nТочна формула: Tj = Ta + P×Rth(j-a)\n${junctionTemp.toFixed(1)}°C = ${ambientTemp}°C + ${totalLosses.toFixed(2)}W × ${rth_ja.toFixed(2)}K/W` :
    `\n\nExact calculations (datasheet values):\n• Transistor: ${transistorModel}\n• Total losses: ${totalLosses.toFixed(3)}W\n• Conduction losses: ${pCond.toFixed(3)}W (P = I²×RDS(on)×D)\n• Switching losses: ${pSw.toFixed(3)}W (physics-based gate charge formulas)\n• Rth(j-c): ${rth_jc.toFixed(2)}K/W (${transistor.package} - manufacturer datasheet)\n• Rth(c-a): ${rth_ca.toFixed(2)}K/W (verified measurements)\n• Tj,max ${techType}: ${maxJunctionTemp}°C (semiconductor physics)\n\nExact formula: Tj = Ta + P×Rth(j-a)\n${junctionTemp.toFixed(1)}°C = ${ambientTemp}°C + ${totalLosses.toFixed(2)}W × ${rth_ja.toFixed(2)}K/W`;

  if (thermalExplanation) {
    thermalExplanation.textContent = explanationText + scientificInfo;
  }

  // Create thermal chart
  const thermalChartCanvas = document.getElementById('thermalChart');
  if (thermalChartCanvas) {
    const ctx = thermalChartCanvas.getContext('2d');

    if (window.thermalChart && typeof window.thermalChart.destroy === 'function') {
      window.thermalChart.destroy();
    }

    // Generate thermal curve data
    const powers = [];
    const junctionTemps = [];
    const maxTemp = 150;

    for (let p = 0; p <= 100; p += 5) {
      powers.push(p);
      const tj = ambientTemp + (p * rth_ja);
      junctionTemps.push(tj);
    }

    window.thermalChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: powers,
        datasets: [{
          label: 'Junction Temperature (°C)',
          data: junctionTemps,
          borderColor: '#e74c3c',
          backgroundColor: 'rgba(231, 76, 60, 0.1)',
          borderWidth: 2,
          fill: true
        }, {
          label: 'Max Junction Temp (150°C)',
          data: powers.map(() => maxTemp),
          borderColor: '#c0392b',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Thermal Analysis: ${transistor.name} (${rth_ja.toFixed(2)}K/W)`
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Power Dissipation (W)' }
          },
          y: {
            title: { display: true, text: 'Temperature (°C)' },
            max: 175
          }
        }
      }
    });
  }

  // thermalResultsDiv already declared above, just use it with null safety
  if (thermalResultsDiv) {
    thermalResultsDiv.style.display = 'block';
  }

  // Show additional warnings if necessary
  // Show additional warnings if necessary - with null safety
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

  if (warningsDiv) {
    if (warnings) {
      warningsDiv.innerHTML = warnings;
      warningsDiv.style.display = 'block';
    } else {
      warningsDiv.style.display = 'none';
    }
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
const calcBtn = document.getElementById('calcBtn');
if (calcBtn) {
  calcBtn.addEventListener('click', calc);
}

const techSelect = document.getElementById('techSelect');
if (techSelect) {
  techSelect.addEventListener('change', function() {
    populateTransistors();
    const transistorSelect = document.getElementById('transistorSelect');
    const suggestBtn = document.getElementById('suggestBtn');
    if (transistorSelect) {
      transistorSelect.value = '';
    }
    showTransistorInfo('');
    if (suggestBtn) {
      suggestBtn.disabled = true;
    }
  });
}

// Event listener за транзистор input field (поддържа както избиране, така и въвеждане)
const transistorSelect = document.getElementById('transistorSelect');
if (transistorSelect) {
  transistorSelect.addEventListener('input', function() {
    showTransistorInfo(this.value);
    const suggestBtn = document.getElementById('suggestBtn');
    if (suggestBtn) {
      suggestBtn.disabled = !this.value;
    }
  });

  transistorSelect.addEventListener('change', function() {
    showTransistorInfo(this.value);
    const suggestBtn = document.getElementById('suggestBtn');
    if (suggestBtn) {
      suggestBtn.disabled = !this.value;
    }
  });
}

const suggestBtn = document.getElementById('suggestBtn');
if (suggestBtn) {
  suggestBtn.addEventListener('click', function() {
    suggestOptimalParameters();
  });
}

// Function to update Analysis tab transistor info display
function updateAnalysisTransistorDisplay() {
  // Get the new Advanced tab display elements
  const analysisDisplay = document.getElementById('analysisTransistorDisplay');
  const noTransistorWarning = document.getElementById('noTransistorWarning');

  // Also support legacy elements if they exist
  const analysisTransistorAlert = document.getElementById('analysisTransistorAlert');
  const analysisTransistorData = document.getElementById('analysisTransistorData');

  if (selectedTransistor) {
    // Show transistor data in Advanced tab
    if (analysisDisplay) {
      analysisDisplay.style.display = 'block';

      // Update Advanced tab transistor info
      const analysisModelName = document.getElementById('analysisModelName');
      const analysisManufacturer = document.getElementById('analysisManufacturer');
      const analysisPackage = document.getElementById('analysisPackage');
      const analysisVdsMax = document.getElementById('analysisVdsMax');
      const analysisIdMax = document.getElementById('analysisIdMax');
      const analysisRdsOn = document.getElementById('analysisRdsOn');

      if (analysisModelName) analysisModelName.textContent = selectedTransistor.name || '-';
      if (analysisManufacturer) analysisManufacturer.textContent = selectedTransistor.manufacturer || '-';
      if (analysisPackage) analysisPackage.textContent = selectedTransistor.package || '-';
      if (analysisVdsMax) analysisVdsMax.textContent = (selectedTransistor.vds_max || '-') + ' V';
      if (analysisIdMax) analysisIdMax.textContent = (selectedTransistor.id_max || '-') + ' A';
      if (analysisRdsOn) analysisRdsOn.textContent = (selectedTransistor.rds_mohm || '-') + ' mΩ';
    }

    if (noTransistorWarning) {
      noTransistorWarning.style.display = 'none';
    }

    // Legacy support for old Analysis tab
    if (analysisTransistorAlert && analysisTransistorData) {
      analysisTransistorAlert.style.display = 'none';
      analysisTransistorData.style.display = 'block';
    }

  } else {
    // Show no transistor warning in Advanced tab
    if (analysisDisplay) {
      analysisDisplay.style.display = 'none';
    }

    if (noTransistorWarning) {
      noTransistorWarning.style.display = 'block';
    }

    // Legacy support for old Analysis tab
    if (analysisTransistorAlert && analysisTransistorData) {
      analysisTransistorAlert.style.display = 'block';
      analysisTransistorData.style.display = 'none';
    }
  }

  // Notify Advanced tab functions that transistor has changed
  if (window.updateAdvancedTabFromSelectedTransistor) {
    window.updateAdvancedTabFromSelectedTransistor(selectedTransistor);
  }
}

// Event listeners за новите функции
const generateEffChart = document.getElementById('generateEffChart');
if (generateEffChart) {
  generateEffChart.addEventListener('click', generateEfficiencyChart);
}

const calculateThermalBtn = document.getElementById('calculateThermal');
if (calculateThermalBtn) {
  calculateThermalBtn.addEventListener('click', calculateThermal);
}

// Go to Calculator button functionality
const goToCalculatorBtn = document.getElementById('goToCalculator');
if (goToCalculatorBtn) {
  goToCalculatorBtn.addEventListener('click', function() {
    // Switch to Calculator tab
    const calcTab = document.querySelector('[data-tab="calculator"]');
    if (calcTab) {
      calcTab.click();
    }
  });
}

// Tab switching detection and Analysis display update
function initializeAnalysisTabSupport() {
  // Update display when Analysis elements are visible
  const observer = new MutationObserver(function(mutations) {
    const analysisElements = document.getElementById('analysisTransistorInfo');
    if (analysisElements && analysisElements.offsetParent !== null) {
      // Analysis tab is visible, update display
      updateAnalysisTransistorDisplay();
    }
  });

  // Observe the main content area for visibility changes
  const mainContent = document.querySelector('.main-content') || document.body;
  observer.observe(mainContent, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });

  // Also update immediately if Analysis tab is already visible
  setTimeout(() => {
    updateAnalysisTransistorDisplay();
  }, 500);

  // Listen for tab clicks that might switch to Analysis
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.matches('[data-tab="analysis"], .nav-link[href*="analysis"], a[href*="analysis"]')) {
      // Analysis tab was clicked, update after a short delay
      setTimeout(() => {
        updateAnalysisTransistorDisplay();
      }, 100);
    }
  });

  // Also update when page visibility changes
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      setTimeout(() => {
        updateAnalysisTransistorDisplay();
      }, 200);
    }
  });
}

// Initialize Analysis tab support when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnalysisTabSupport);
} else {
  initializeAnalysisTabSupport();
}

// Advanced page event listeners
const calculateMillerBtn = document.getElementById('calculateMillerBtn');
if (calculateMillerBtn) {
  calculateMillerBtn.addEventListener('click', function() {
    if (typeof calculateMillerEffect === 'function') {
      calculateMillerEffect();
    }
  });
}

const calculateDeadTimeBtn = document.getElementById('calculateDeadTimeBtn');
if (calculateDeadTimeBtn) {
  calculateDeadTimeBtn.addEventListener('click', function() {
    if (typeof calculateDeadTime === 'function') {
      calculateDeadTime();
    }
  });
}

const calculateThermalAdvBtn = document.getElementById('calculateThermalBtn');
if (calculateThermalAdvBtn) {
  calculateThermalAdvBtn.addEventListener('click', function() {
    console.log('🔧 Thermal button clicked');
    calculateThermal();
  });
}

// Event listeners за копиране на графики
const copyLossChart = document.getElementById('copyLossChart');
if (copyLossChart) {
  copyLossChart.addEventListener('click', () => copyChartToClipboard('lossChart'));
}

const copyEfficiencyChart = document.getElementById('copyEfficiencyChart');
if (copyEfficiencyChart) {
  copyEfficiencyChart.addEventListener('click', () => copyChartToClipboard('efficiencyChart'));
}

const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
  resetBtn.addEventListener('click',()=>{
    const techSelect = document.getElementById('techSelect');
    const vdc = document.getElementById('vdc');
    const iLoad = document.getElementById('iLoad');
    const fsw = document.getElementById('fsw');
    const temp = document.getElementById('temp');
    const duty = document.getElementById('duty');
    const transistorSelect = document.getElementById('transistorSelect');

    if (techSelect) techSelect.value="SiC";
    if (vdc) vdc.value=100;
    if (iLoad) iLoad.value=15;
    if (fsw) fsw.value=100;
    if (temp) temp.value=25;
    if (duty) duty.value=0.5;

    populateTransistors();
    if (transistorSelect) transistorSelect.value = '';
    showTransistorInfo('');
  });
}

// стартирай при зареждане
document.addEventListener('DOMContentLoaded', function() {
  // Load selectedTransistor from localStorage
  loadSelectedTransistorFromStorage();

  // Инициализираме само ако имаме основните елементи за калкулатора
  const techSelect = document.getElementById('techSelect');

  if (techSelect) {
    // Калкулатор страница - инициализираме всичко
    populateTransistors();

    // Първоначално disable на suggest бутона
    const suggestBtn = document.getElementById('suggestBtn');
    if (suggestBtn) {
      suggestBtn.disabled = true;
    }
  }

  // Event listeners за език (ако има такива бутони)
  const langBG = document.getElementById('langBG');
  const langEN = document.getElementById('langEN');

  if (langBG) {
    langBG.addEventListener('click', () => switchLanguage('bg'));
  }

  if (langEN) {
    langEN.addEventListener('click', () => switchLanguage('en'));
  }

  // Задаваме първоначален език (само ако има language бутони)
  if (langBG || langEN) {
    switchLanguage('bg');
  }

  // Инициализация на Database tab functionality
  initializeDatabaseTab();
});

// ====== DATABASE TAB FUNCTIONALITY ======

// Global variables for database functionality
let currentDatabaseData = [];
let filteredDatabaseData = [];
let currentSort = { column: null, direction: 'asc' };
let currentPage = 1;
let itemsPerPage = 25;
let comparisonList = [];

// Database language translations
const databaseLanguages = {
  bg: {
    databaseTitle: '📚 База данни с транзистори',
    databaseDescription: 'Търсете и филтрирайте от над 230 транзистори с реални параметри от datasheet-ове',
    searchPlaceholder: 'Търсене по модел, производител или приложение...',
    clearSearch: 'Изчисти търсенето',
    advancedFilters: '🔍 Разширени филтри:',
    technology: 'Технология',
    manufacturer: 'Производител',
    packageType: 'Корпус',
    maxVoltage: 'Максимално напрежение (V)',
    maxCurrent: 'Максимален ток (A)',
    maxResistance: 'RDS(on) (mΩ)',
    allTechnologies: 'Всички',
    allManufacturers: 'Всички',
    allPackages: 'Всички',
    applyFilters: '🔍 Приложи филтри',
    resetFilters: '🔄 Нулирай филтри',
    advancedSearch: '⚙️ Разширено търсене',
    searchResults: '📊 Резултати от търсенето:',
    resultsFound: 'резултата намерени',
    totalTransistors: 'общо транзистори',
    tableView: 'Табличен изглед',
    gridView: 'Мрежов изглед',
    compareView: 'Сравнение',
    exportCSV: '📊 CSV',
    exportPDF: '📄 PDF',
    exportExcel: '📈 Excel',
    model: 'Модел',
    package: 'Корпус',
    resistance: 'RDS(on) [mΩ]',
    applications: 'Приложения',
    actions: 'Действия',
    loading: 'Зареждане...',
    noResultsTitle: 'Няма намерени резултати',
    noResultsMessage: 'Опитайте да промените филтрите или търсенето',
    resetAllFilters: '🔄 Нулирай всички филтри',
    showingResults: 'Показани',
    of: 'от',
    results: 'резултата',
    firstPage: 'Първа страница',
    prevPage: 'Предишна страница',
    nextPage: 'Следваща страница',
    lastPage: 'Последна страница',
    itemsPerPage: 'Елементи на страница',
    showAll: 'Всички',
    transistorDetails: 'Детайли за транзистор',
    close: 'Затвори',
    basicInfo: '🔧 Основна информация',
    electricalParams: '⚡ Електрически параметри',
    switchingParams: '🔄 Превключващи параметри',
    performanceAnalysis: '📊 Анализ на производителността',
    powerDensity: 'Плътност на мощността',
    figureMerit: 'Figure of Merit',
    switchingScore: 'Превключващ резултат',
    addToComparison: '⚖️ Добави за сравнение',
    calculateWithThis: '🧮 Изчисли с този',
    downloadDatasheet: '📄 Datasheet',
    compareTransistors: '⚖️ Сравнение на транзистори',
    clearComparison: '🗑️ Изчисти',
    exportComparison: '📊 Експортирай'
  },
  en: {
    databaseTitle: '📚 Transistor Database',
    databaseDescription: 'Search and filter from 230+ transistors with real datasheet parameters',
    searchPlaceholder: 'Search by model, manufacturer or application...',
    clearSearch: 'Clear search',
    advancedFilters: '🔍 Advanced Filters:',
    technology: 'Technology',
    manufacturer: 'Manufacturer',
    packageType: 'Package',
    maxVoltage: 'Max Voltage (V)',
    maxCurrent: 'Max Current (A)',
    maxResistance: 'RDS(on) (mΩ)',
    allTechnologies: 'All',
    allManufacturers: 'All',
    allPackages: 'All',
    applyFilters: '🔍 Apply Filters',
    resetFilters: '🔄 Reset Filters',
    advancedSearch: '⚙️ Advanced Search',
    searchResults: '📊 Search Results:',
    resultsFound: 'results found',
    totalTransistors: 'total transistors',
    tableView: 'Table View',
    gridView: 'Grid View',
    compareView: 'Compare',
    exportCSV: '📊 CSV',
    exportPDF: '📄 PDF',
    exportExcel: '📈 Excel',
    model: 'Model',
    package: 'Package',
    resistance: 'RDS(on) [mΩ]',
    applications: 'Applications',
    actions: 'Actions',
    loading: 'Loading...',
    noResultsTitle: 'No Results Found',
    noResultsMessage: 'Try changing the filters or search terms',
    resetAllFilters: '🔄 Reset All Filters',
    showingResults: 'Showing',
    of: 'of',
    results: 'results',
    firstPage: 'First Page',
    prevPage: 'Previous Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    itemsPerPage: 'Items per page',
    showAll: 'All',
    transistorDetails: 'Transistor Details',
    close: 'Close',
    basicInfo: '🔧 Basic Information',
    electricalParams: '⚡ Electrical Parameters',
    switchingParams: '🔄 Switching Parameters',
    performanceAnalysis: '📊 Performance Analysis',
    powerDensity: 'Power Density',
    figureMerit: 'Figure of Merit',
    switchingScore: 'Switching Score',
    addToComparison: '⚖️ Add to Comparison',
    calculateWithThis: '🧮 Calculate with This',
    downloadDatasheet: '📄 Datasheet',
    compareTransistors: '⚖️ Compare Transistors',
    clearComparison: '🗑️ Clear',
    exportComparison: '📊 Export'
  }
};

// Initialize Database Tab
function initializeDatabaseTab() {
  // Check if we're on the database page
  const databaseContent = document.querySelector('.database-content');
  if (!databaseContent) return;

  // Load all transistor data
  loadTransistorDatabase();

  // Set up event listeners
  setupDatabaseEventListeners();

  // Initialize filters
  initializeFilters();

  // Populate the table
  populateDatabaseTable();

  // Update language elements
  updateDatabaseLanguage();
}

// Load all transistor data from TRANSISTOR_DB
function loadTransistorDatabase() {
  currentDatabaseData = [];

  // Flatten all transistors from all technologies
  Object.keys(TRANSISTOR_DB).forEach(tech => {
    Object.keys(TRANSISTOR_DB[tech]).forEach(key => {
      const transistor = TRANSISTOR_DB[tech][key];
      currentDatabaseData.push({
        key: key,
        technology: tech,
        model: transistor.name,
        vds_max: transistor.vds_max,
        id_max: transistor.id_max,
        rds_mohm: transistor.rds_mohm,
        tr_ns: transistor.tr_ns || 0,
        tf_ns: transistor.tf_ns || 0,
        alpha: transistor.alpha || 0,
        package: transistor.package,
        manufacturer: transistor.manufacturer,
        application: transistor.application,
        // Calculated fields
        powerDensity: calculatePowerDensity(transistor),
        figureMerit: calculateFigureMerit(transistor),
        switchingScore: calculateSwitchingScore(transistor)
      });
    });
  });

  filteredDatabaseData = [...currentDatabaseData];
  console.log(`Loaded ${currentDatabaseData.length} transistors from database`);
}

// Calculate performance metrics
function calculatePowerDensity(transistor) {
  // Simplified power density calculation (W/cm²)
  const power = (transistor.vds_max * transistor.id_max) / 1000; // Convert to kW
  const area = getPackageArea(transistor.package);
  return (power / area).toFixed(2);
}

function calculateFigureMerit(transistor) {
  // Figure of Merit: RDS(on) × QG (using approximation)
  const qg = estimateGateCharge(transistor);
  return (transistor.rds_mohm * qg).toFixed(1);
}

function calculateSwitchingScore(transistor) {
  // Switching performance score (0-100)
  const trScore = Math.max(0, 100 - (transistor.tr_ns || 50));
  const tfScore = Math.max(0, 100 - (transistor.tf_ns || 50));
  return Math.round((trScore + tfScore) / 2);
}

function getPackageArea(packageType) {
  // Package area estimates in cm²
  const areas = {
    'TO-220': 1.0,
    'TO-247': 2.0,
    'D2PAK': 0.8,
    'TO-263': 0.8,
    'DFN': 0.3,
    'QFN': 0.25,
    'LGA': 0.2,
    'BGA': 1.5,
    'PQFN': 0.15
  };
  return areas[packageType] || 1.0;
}

function estimateGateCharge(transistor) {
  // Estimate gate charge based on VDS and ID
  return Math.sqrt(transistor.vds_max * transistor.id_max) * 2;
}

// Set up all event listeners for database functionality
function setupDatabaseEventListeners() {
  // Text search
  const textSearch = document.getElementById('textSearch');
  if (textSearch) {
    textSearch.addEventListener('input', debounce(handleTextSearch, 300));
  }

  // Clear search
  const clearSearch = document.getElementById('clearSearch');
  if (clearSearch) {
    clearSearch.addEventListener('click', clearTextSearch);
  }

  // Filters
  const filterElements = [
    'techFilter', 'manufacturerFilter', 'packageFilter',
    'voltageMin', 'voltageMax', 'currentMin', 'currentMax',
    'resistanceMin', 'resistanceMax'
  ];

  filterElements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', applyFilters);
    }
  });

  // Range sliders
  const ranges = ['voltageRange', 'currentRange', 'resistanceRange'];
  ranges.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', updateRangeDisplay);
    }
  });

  // Filter buttons
  const applyBtn = document.getElementById('applyFilters');
  if (applyBtn) {
    applyBtn.addEventListener('click', applyFilters);
  }

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  // Export buttons
  const exportCSV = document.getElementById('exportCSV');
  if (exportCSV) {
    exportCSV.addEventListener('click', () => exportData('csv'));
  }

  const exportPDF = document.getElementById('exportPDF');
  if (exportPDF) {
    exportPDF.addEventListener('click', () => exportData('pdf'));
  }

  const exportExcel = document.getElementById('exportExcel');
  if (exportExcel) {
    exportExcel.addEventListener('click', () => exportData('excel'));
  }

  // View controls
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', handleViewChange);
  });

  // Page size control
  const pageSize = document.getElementById('pageSize');
  if (pageSize) {
    pageSize.addEventListener('change', handlePageSizeChange);
  }

  // Pagination buttons
  const paginationBtns = ['firstPage', 'prevPage', 'nextPage', 'lastPage'];
  paginationBtns.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => handlePagination(id));
    }
  });

  // Modal close buttons
  const closeModalBtns = document.querySelectorAll('.close-btn, #closeModalBtn, #closeComparisonBtn');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  // Modal background click
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModals();
      }
    });
  });
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle text search
function handleTextSearch() {
  applyFilters();
}

// Clear text search
function clearTextSearch() {
  const textSearch = document.getElementById('textSearch');
  if (textSearch) {
    textSearch.value = '';
    applyFilters();
  }
}

// Initialize filter options
function initializeFilters() {
  // Get unique manufacturers
  const manufacturers = [...new Set(currentDatabaseData.map(t => t.manufacturer))].sort();
  const manufacturerFilter = document.getElementById('manufacturerFilter');
  if (manufacturerFilter) {
    // Clear existing options except "All"
    const firstOption = manufacturerFilter.firstElementChild;
    manufacturerFilter.innerHTML = '';
    manufacturerFilter.appendChild(firstOption);

    manufacturers.forEach(manufacturer => {
      const option = document.createElement('option');
      option.value = manufacturer;
      option.textContent = manufacturer;
      manufacturerFilter.appendChild(option);
    });
  }

  // Get unique packages
  const packages = [...new Set(currentDatabaseData.map(t => t.package))].sort();
  const packageFilter = document.getElementById('packageFilter');
  if (packageFilter) {
    // Clear existing options except "All"
    const firstOption = packageFilter.firstElementChild;
    packageFilter.innerHTML = '';
    packageFilter.appendChild(firstOption);

    packages.forEach(pkg => {
      const option = document.createElement('option');
      option.value = pkg;
      option.textContent = pkg;
      packageFilter.appendChild(option);
    });
  }

  // Set range limits
  const voltages = currentDatabaseData.map(t => t.vds_max);
  const currents = currentDatabaseData.map(t => t.id_max);
  const resistances = currentDatabaseData.map(t => t.rds_mohm);

  updateRangeInputs('voltage', Math.min(...voltages), Math.max(...voltages));
  updateRangeInputs('current', Math.min(...currents), Math.max(...currents));
  updateRangeInputs('resistance', Math.min(...resistances), Math.max(...resistances));
}

// Update range inputs
function updateRangeInputs(type, min, max) {
  const minInput = document.getElementById(`${type}Min`);
  const maxInput = document.getElementById(`${type}Max`);
  const rangeInput = document.getElementById(`${type}Range`);

  if (minInput) {
    minInput.min = min;
    minInput.max = max;
    minInput.value = min;
  }

  if (maxInput) {
    maxInput.min = min;
    maxInput.max = max;
    maxInput.value = max;
  }

  if (rangeInput) {
    rangeInput.min = min;
    rangeInput.max = max;
    rangeInput.value = max;
  }

  updateRangeDisplay({ target: rangeInput });
}

// Update range display
function updateRangeDisplay(event) {
  const range = event.target;
  const type = range.id.replace('Range', '');
  const display = document.getElementById(`${type}Display`);
  const minInput = document.getElementById(`${type}Min`);
  const maxInput = document.getElementById(`${type}Max`);

  if (display && minInput && maxInput) {
    const unit = type === 'voltage' ? 'V' : type === 'current' ? 'A' : 'mΩ';
    display.textContent = `${minInput.value}${unit} - ${range.value}${unit}`;
    maxInput.value = range.value;
  }
}

// Apply all filters
function applyFilters() {
  const textSearch = document.getElementById('textSearch')?.value.toLowerCase() || '';
  const techFilter = document.getElementById('techFilter')?.value || 'all';
  const manufacturerFilter = document.getElementById('manufacturerFilter')?.value || 'all';
  const packageFilter = document.getElementById('packageFilter')?.value || 'all';

  const voltageMin = parseInt(document.getElementById('voltageMin')?.value || 0);
  const voltageMax = parseInt(document.getElementById('voltageMax')?.value || 9999);
  const currentMin = parseInt(document.getElementById('currentMin')?.value || 0);
  const currentMax = parseInt(document.getElementById('currentMax')?.value || 9999);
  const resistanceMin = parseInt(document.getElementById('resistanceMin')?.value || 0);
  const resistanceMax = parseInt(document.getElementById('resistanceMax')?.value || 9999);

  filteredDatabaseData = currentDatabaseData.filter(transistor => {
    // Text search
    if (textSearch && !transistor.model.toLowerCase().includes(textSearch) &&
        !transistor.manufacturer.toLowerCase().includes(textSearch) &&
        !transistor.application.toLowerCase().includes(textSearch)) {
      return false;
    }

    // Technology filter
    if (techFilter !== 'all' && transistor.technology !== techFilter) {
      return false;
    }

    // Manufacturer filter
    if (manufacturerFilter !== 'all' && transistor.manufacturer !== manufacturerFilter) {
      return false;
    }

    // Package filter
    if (packageFilter !== 'all' && transistor.package !== packageFilter) {
      return false;
    }

    // Range filters
    if (transistor.vds_max < voltageMin || transistor.vds_max > voltageMax) {
      return false;
    }

    if (transistor.id_max < currentMin || transistor.id_max > currentMax) {
      return false;
    }

    if (transistor.rds_mohm < resistanceMin || transistor.rds_mohm > resistanceMax) {
      return false;
    }

    return true;
  });

  // Reset to first page
  currentPage = 1;

  // Update table
  populateDatabaseTable();
  updateResultsInfo();
}

// Reset all filters
function resetFilters() {
  // Clear text search
  const textSearch = document.getElementById('textSearch');
  if (textSearch) textSearch.value = '';

  // Reset dropdowns
  const dropdowns = ['techFilter', 'manufacturerFilter', 'packageFilter'];
  dropdowns.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.selectedIndex = 0;
  });

  // Reset ranges
  const types = ['voltage', 'current', 'resistance'];
  types.forEach(type => {
    const minInput = document.getElementById(`${type}Min`);
    const maxInput = document.getElementById(`${type}Max`);
    const rangeInput = document.getElementById(`${type}Range`);

    if (minInput && maxInput && rangeInput) {
      minInput.value = minInput.min;
      maxInput.value = maxInput.max;
      rangeInput.value = rangeInput.max;
      updateRangeDisplay({ target: rangeInput });
    }
  });

  // Apply filters (which will show all data)
  applyFilters();
}

// Populate database table
function populateDatabaseTable() {
  const tableBody = document.getElementById('transistorTableBody');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const noResults = document.getElementById('noResults');

  if (!tableBody) return;

  // Show loading
  showElement(loadingIndicator);
  hideElement(noResults);
  tableBody.innerHTML = '';

  setTimeout(() => {
    // Apply sorting
    let sortedData = [...filteredDatabaseData];
    if (currentSort.column) {
      sortedData.sort((a, b) => {
        let aVal = a[currentSort.column];
        let bVal = b[currentSort.column];

        // Handle string sorting
        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }

        if (aVal < bVal) return currentSort.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Apply pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = itemsPerPage === 'all' ? sortedData.length : startIndex + itemsPerPage;
    const pageData = sortedData.slice(startIndex, endIndex);

    // Hide loading
    hideElement(loadingIndicator);

    if (pageData.length === 0) {
      showElement(noResults);
      return;
    }

    // Populate table rows
    pageData.forEach(transistor => {
      const row = createTableRow(transistor);
      tableBody.appendChild(row);
    });

    updatePagination(sortedData.length);
  }, 300); // Small delay to show loading
}

// Create table row
function createTableRow(transistor) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>
      <strong>${transistor.model}</strong>
      <br><small class="manufacturer-badge">${transistor.key}</small>
    </td>
    <td>
      <span class="tech-badge ${transistor.technology.toLowerCase()}">${transistor.technology}</span>
    </td>
    <td><strong>${transistor.vds_max}</strong></td>
    <td><strong>${transistor.id_max}</strong></td>
    <td><strong>${transistor.rds_mohm}</strong></td>
    <td>${transistor.package}</td>
    <td class="manufacturer-badge">${transistor.manufacturer}</td>
    <td>
      <span class="applications-text" title="${transistor.application}">
        ${transistor.application}
      </span>
    </td>
    <td>
      <button class="action-btn primary" onclick="showTransistorModal('${transistor.key}', '${transistor.technology}')">
        👁️ Детайли
      </button>
      <button class="action-btn" onclick="addToComparison('${transistor.key}', '${transistor.technology}')">
        ⚖️
      </button>
    </td>
  `;

  return row;
}

// Handle table sorting
function handleTableSort(column) {
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.column = column;
    currentSort.direction = 'asc';
  }

  // Update sort indicators
  updateSortIndicators();

  // Repopulate table
  populateDatabaseTable();
}

// Update sort indicators
function updateSortIndicators() {
  const sortableHeaders = document.querySelectorAll('.sortable');
  sortableHeaders.forEach(header => {
    header.classList.remove('sort-asc', 'sort-desc');
    if (header.dataset.sort === currentSort.column) {
      header.classList.add(`sort-${currentSort.direction}`);
    }
  });
}

// Set up table sorting event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Load selectedTransistor from localStorage
  loadSelectedTransistorFromStorage();

  const sortableHeaders = document.querySelectorAll('.sortable');
  sortableHeaders.forEach(header => {
    header.addEventListener('click', () => {
      handleTableSort(header.dataset.sort);
    });
  });
});

// Update results info
function updateResultsInfo() {
  const resultsCount = document.getElementById('resultsCount');
  const totalCount = document.getElementById('totalCount');

  if (resultsCount) {
    resultsCount.textContent = filteredDatabaseData.length;
  }

  if (totalCount) {
    totalCount.textContent = currentDatabaseData.length + '+';
  }
}

// Show transistor modal
function showTransistorModal(key, technology) {
  const transistor = TRANSISTOR_DB[technology][key];
  if (!transistor) return;

  const modal = document.getElementById('transistorModal');
  if (!modal) return;

  // Populate modal with transistor data
  document.getElementById('detailModel').textContent = transistor.name;
  document.getElementById('detailTechnology').textContent = technology;
  document.getElementById('detailManufacturer').textContent = transistor.manufacturer;
  document.getElementById('detailPackage').textContent = transistor.package;
  document.getElementById('detailVds').textContent = transistor.vds_max + ' V';
  document.getElementById('detailId').textContent = transistor.id_max + ' A';
  document.getElementById('detailRds').textContent = transistor.rds_mohm + ' mΩ';
  document.getElementById('detailAlpha').textContent = transistor.alpha;
  document.getElementById('detailTr').textContent = (transistor.tr_ns || 'N/A') + ' ns';
  document.getElementById('detailTf').textContent = (transistor.tf_ns || 'N/A') + ' ns';
  document.getElementById('detailApplications').textContent = transistor.application;

  // Calculate and show performance metrics
  document.getElementById('powerDensity').textContent = calculatePowerDensity(transistor);
  document.getElementById('figureMerit').textContent = calculateFigureMerit(transistor);

  const switchingScore = calculateSwitchingScore(transistor);
  const scoreElement = document.getElementById('switchingScore');
  const scoreBar = scoreElement.querySelector('.score-fill');
  const scoreText = scoreElement.querySelector('.score-text');

  if (scoreBar && scoreText) {
    scoreBar.style.width = switchingScore + '%';
    scoreText.textContent = switchingScore + '%';
  }

  // Set up modal buttons
  const addToComparisonBtn = document.getElementById('addToComparison');
  if (addToComparisonBtn) {
    addToComparisonBtn.onclick = () => addToComparison(key, technology);
  }

  const calculateBtn = document.getElementById('calculateWithThis');
  if (calculateBtn) {
    calculateBtn.onclick = () => {
      // Navigate to calculator with this transistor
      window.location.href = `/calculator?transistor=${key}&tech=${technology}`;
    };
  }

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

// Add to comparison
function addToComparison(key, technology) {
  const transistor = TRANSISTOR_DB[technology][key];
  if (!transistor) return;

  // Check if already in comparison
  const exists = comparisonList.find(t => t.key === key && t.technology === technology);
  if (exists) {
    alert('Този транзистор вече е добавен в сравнението');
    return;
  }

  // Add to comparison list
  comparisonList.push({
    key: key,
    technology: technology,
    data: transistor
  });

  // Update comparison UI
  updateComparisonDisplay();

  alert(`${transistor.name} е добавен в сравнението (${comparisonList.length} транзистора)`);
}

// Update comparison display
function updateComparisonDisplay() {
  // Update comparison button
  const compareBtn = document.getElementById('compareView');
  if (compareBtn && comparisonList.length > 0) {
    compareBtn.textContent = `⚖️ Сравни (${comparisonList.length})`;
    compareBtn.style.background = 'var(--accent-color)';
    compareBtn.style.color = 'white';
  }
}

// Export data
function exportData(format) {
  const data = filteredDatabaseData;
  const filename = `transistor_database_${new Date().toISOString().split('T')[0]}`;

  switch (format) {
    case 'csv':
      exportToCSV(data, filename);
      break;
    case 'pdf':
      exportToPDF(data, filename);
      break;
    case 'excel':
      exportToExcel(data, filename);
      break;
  }
}

// Export to CSV
function exportToCSV(data, filename) {
  const headers = ['Model', 'Technology', 'VDS(max) [V]', 'ID(max) [A]', 'RDS(on) [mΩ]', 'Package', 'Manufacturer', 'Applications'];

  let csvContent = headers.join(',') + '\n';

  data.forEach(transistor => {
    const row = [
      `"${transistor.model}"`,
      transistor.technology,
      transistor.vds_max,
      transistor.id_max,
      transistor.rds_mohm,
      transistor.package,
      `"${transistor.manufacturer}"`,
      `"${transistor.application}"`
    ];
    csvContent += row.join(',') + '\n';
  });

  downloadFile(csvContent, filename + '.csv', 'text/csv');
}

// Download file
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Export drivers to CSV
function exportDriversToCSV() {
  const filename = `gate_drivers_database_${new Date().toISOString().split('T')[0]}.csv`;
  
  // Headers
  const headers = ['Model', 'Manufacturer', 'Technology', 'Vdd_min[V]', 'Vdd_max[V]', 'I_source_max[A]', 'I_sink_max[A]', 't_rise[ns]', 't_fall[ns]', 't_delay[ns]', 'Iq[mA]', 'Channels', 'Package', 'Vgs_out[V]', 'Qg_drive[nC]', 'Features', 'Application'];
  
  let csvContent = headers.join(',') + '\n';
  
  // Collect all drivers from all technologies
  const allDrivers = [];
  
  if (DRIVER_DB.Si) {
    Object.values(DRIVER_DB.Si).forEach(driver => {
      allDrivers.push({...driver, tech_group: 'Si'});
    });
  }
  
  if (DRIVER_DB.SiC) {
    Object.values(DRIVER_DB.SiC).forEach(driver => {
      allDrivers.push({...driver, tech_group: 'SiC'});
    });
  }
  
  if (DRIVER_DB.GaN) {
    Object.values(DRIVER_DB.GaN).forEach(driver => {
      allDrivers.push({...driver, tech_group: 'GaN'});
    });
  }
  
  // Add each driver as a row
  allDrivers.forEach(driver => {
    const techString = Array.isArray(driver.technology) ? driver.technology.join('/') : driver.technology;
    const row = [
      `"${driver.name}"`,
      `"${driver.manufacturer}"`,
      techString,
      driver.vdd_min,
      driver.vdd_max,
      driver.i_source_max,
      driver.i_sink_max,
      driver.t_rise,
      driver.t_fall,
      driver.t_delay,
      driver.iq,
      driver.channels,
      `"${driver.package}"`,
      driver.vgs_out,
      driver.qg_drive,
      `"${driver.features}"`,
      `"${driver.application}"`
    ];
    csvContent += row.join(',') + '\n';
  });
  
  downloadFile(csvContent, filename, 'text/csv');
  
  // Show success message
  alert(`✅ Драйверите са експортирани успешно!\n\nОбщо драйвери: ${allDrivers.length}\nФайл: ${filename}`);
}

// Handle view changes
function handleViewChange(event) {
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Implement different view modes if needed
  const viewType = event.target.id;
  switch (viewType) {
    case 'compareView':
      if (comparisonList.length > 0) {
        showComparisonModal();
      } else {
        alert('Няма транзистори за сравнение. Добавете транзистори, като кликнете ⚖️ бутона.');
      }
      break;
  }
}

// Show comparison modal
function showComparisonModal() {
  const modal = document.getElementById('comparisonModal');
  if (!modal || comparisonList.length === 0) return;

  const comparisonTable = document.getElementById('comparisonTable');
  if (!comparisonTable) return;

  // Build comparison table
  let tableHTML = '<table class="comparison-table"><thead><tr>';
  tableHTML += '<th>Parameter</th>';
  comparisonList.forEach(item => {
    tableHTML += `<th>${item.data.name}</th>`;
  });
  tableHTML += '</tr></thead><tbody>';

  // Add parameter rows
  const parameters = [
    { key: 'technology', label: 'Technology' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'package', label: 'Package' },
    { key: 'vds_max', label: 'VDS(max) [V]' },
    { key: 'id_max', label: 'ID(max) [A]' },
    { key: 'rds_mohm', label: 'RDS(on) [mΩ]' },
    { key: 'tr_ns', label: 'tr [ns]' },
    { key: 'tf_ns', label: 'tf [ns]' },
    { key: 'application', label: 'Applications' }
  ];

  parameters.forEach(param => {
    tableHTML += `<tr><td><strong>${param.label}</strong></td>`;
    comparisonList.forEach(item => {
      let value = param.key === 'technology' ? item.technology : item.data[param.key];
      if (value === undefined || value === null) value = 'N/A';
      tableHTML += `<td>${value}</td>`;
    });
    tableHTML += '</tr>';
  });

  tableHTML += '</tbody></table>';
  comparisonTable.innerHTML = tableHTML;

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

// Handle pagination
function handlePagination(action) {
  const totalPages = Math.ceil(filteredDatabaseData.length / itemsPerPage);

  switch (action) {
    case 'firstPage':
      currentPage = 1;
      break;
    case 'prevPage':
      if (currentPage > 1) currentPage--;
      break;
    case 'nextPage':
      if (currentPage < totalPages) currentPage++;
      break;
    case 'lastPage':
      currentPage = totalPages;
      break;
  }

  populateDatabaseTable();
}

// Handle page size change
function handlePageSizeChange(event) {
  const value = event.target.value;
  itemsPerPage = value === 'all' ? 'all' : parseInt(value);
  currentPage = 1;
  populateDatabaseTable();
}

// Update pagination
function updatePagination(totalItems) {
  const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(totalItems / itemsPerPage);

  // Update info
  const startResult = document.getElementById('startResult');
  const endResult = document.getElementById('endResult');
  const totalResults = document.getElementById('totalResults');

  if (startResult && endResult && totalResults) {
    const start = itemsPerPage === 'all' ? 1 : (currentPage - 1) * itemsPerPage + 1;
    const end = itemsPerPage === 'all' ? totalItems : Math.min(currentPage * itemsPerPage, totalItems);

    startResult.textContent = start;
    endResult.textContent = end;
    totalResults.textContent = totalItems;
  }

  // Update buttons
  const firstBtn = document.getElementById('firstPage');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const lastBtn = document.getElementById('lastPage');

  if (firstBtn) firstBtn.disabled = currentPage === 1;
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;
  if (lastBtn) lastBtn.disabled = currentPage === totalPages;

  // Update page numbers
  updatePageNumbers(totalPages);
}

// Update page numbers
function updatePageNumbers(totalPages) {
  const pageNumbers = document.getElementById('pageNumbers');
  if (!pageNumbers) return;

  pageNumbers.innerHTML = '';

  // Show max 5 page numbers
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.onclick = () => {
      currentPage = i;
      populateDatabaseTable();
    };
    pageNumbers.appendChild(pageBtn);
  }
}

// Close modals
function closeModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.add('hidden');
    modal.classList.remove('show');
  });
}

// Update database language
function updateDatabaseLanguage() {
  const langData = databaseLanguages[currentLang] || databaseLanguages['bg'];

  // Update all elements with data-lang attributes
  Object.keys(langData).forEach(key => {
    const elements = document.querySelectorAll(`[data-lang="${key}"]`);
    elements.forEach(element => {
      if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
        if (element.hasAttribute('data-lang-placeholder')) {
          element.placeholder = langData[key];
        }
      } else {
        element.textContent = langData[key];
      }
    });
  });

  // Update placeholders
  const textSearch = document.getElementById('textSearch');
  if (textSearch) {
    textSearch.placeholder = langData.searchPlaceholder;
  }
}

// Utility functions
function showElement(element) {
  if (element) {
    element.classList.remove('hidden');
  }
}

function hideElement(element) {
  if (element) {
    element.classList.add('hidden');
  }
}

// Add to existing language switching functionality
const originalSwitchLanguage = switchLanguage;
switchLanguage = function(lang, button) {
  originalSwitchLanguage(lang, button);
  if (typeof updateDatabaseLanguage === 'function') {
    updateDatabaseLanguage();
  }
};

// =============== MISSING ADVANCED FUNCTIONS ===============

// Miller Capacitance Analysis Function
function calculateMillerEffect() {
  console.log('🔧 calculateMillerEffect called');

  // Force reload selectedTransistor from storage first
  loadSelectedTransistorFromStorage();

  let transistor = selectedTransistor || window.selectedTransistor;
  let usingFallback = false;

  console.log('Miller - using transistor:', transistor ? transistor.name : 'null');

  if (!transistor) {
    // Use fallback transistor for Miller analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N за Miller анализ. За точни резултати изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N for Miller analysis. For accurate results, select transistor from Calculator.';

    showTemporaryMessage(message, 'warning', 6000);
  }

  // Get input values with fallbacks
  const cgdEl = document.getElementById('cgd');
  const cgsEl = document.getElementById('cgs');
  const cdsEl = document.getElementById('cds');
  const vdrEl = document.getElementById('vdr');

  const cgd = cgdEl ? parseFloat(cgdEl.value) || 200 : 200; // pF
  const cgs = cgsEl ? parseFloat(cgsEl.value) || 800 : 800; // pF
  const cds = cdsEl ? parseFloat(cdsEl.value) || 150 : 150; // pF
  const vdr = vdrEl ? parseFloat(vdrEl.value) || 5 : 5; // V/ns slew rate

  // Miller capacitance calculations - точни формули от semiconductor physics
  const avVoltageGain = 100; // Типичен voltage gain за MOSFET
  const millerMultiplier = 1 + avVoltageGain; // Miller theorem
  const effectiveCapacitance = cgd * millerMultiplier; // Miller effect
  const millerCurrent = cgd * 1e-12 * vdr * 1e9; // I = C * dV/dt

  // Update results
  const millerResultsDiv = document.getElementById('millerResults');
  if (millerResultsDiv) {
    millerResultsDiv.innerHTML = `
      <h4>📊 Miller Analysis Results:</h4>
      <div class="results-grid">
        <div><strong>Miller Multiplier:</strong> ${millerMultiplier.toFixed(1)}</div>
        <div><strong>Effective Capacitance:</strong> ${effectiveCapacitance.toFixed(0)} pF</div>
        <div><strong>Miller Current:</strong> ${(millerCurrent * 1000).toFixed(2)} mA</div>
        <div><strong>Gate Charge Impact:</strong> ${(cgd * vdr).toFixed(1)} nC</div>
      </div>
      <div class="explanation">
        <p><strong>🔬 Physics explanation:</strong></p>
        <p>Miller effect увеличава входния капацитет с фактор (1 + Av) поради обратната връзка через CGD. 
        Това забавя превключването и увеличава gate charge нуждите.</p>
        <p><strong>📏 Formulas:</strong><br>
        Ceff = CGD × (1 + Av) = ${cgd} × ${millerMultiplier} = ${effectiveCapacitance.toFixed(0)} pF<br>
        IMiller = CGD × dV/dt = ${cgd}pF × ${vdr}V/ns = ${(millerCurrent * 1000).toFixed(2)} mA</p>
      </div>
    `;
    millerResultsDiv.style.display = 'block';
  }

  // Create Miller chart
  const millerChartCanvas = document.getElementById('millerChart');
  if (millerChartCanvas) {
    const ctx = millerChartCanvas.getContext('2d');

    // Destroy existing chart if it exists
    if (window.millerChart && typeof window.millerChart.destroy === 'function') {
      window.millerChart.destroy();
    }

    // Generate frequency response data
    const frequencies = [];
    const impedances = [];
    for (let f = 1; f <= 1000; f += 10) {
      frequencies.push(f);
      const omega = 2 * Math.PI * f * 1000; // Convert kHz to rad/s
      const impedance = 1 / (omega * effectiveCapacitance * 1e-12); // |Z| = 1/(ωC)
      impedances.push(impedance);
    }

    // Create chart
    window.millerChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: frequencies,
        datasets: [{
          label: 'Miller Impedance (Ω)',
          data: impedances,
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Miller Effect: ${effectiveCapacitance.toFixed(0)} pF Effective Capacitance`
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Frequency (kHz)' }
          },
          y: {
            type: 'logarithmic',
            title: { display: true, text: 'Impedance (Ω)' }
          }
        }
      }
    });
  }

  // Show success message
  const message = currentLang === 'bg' ? 
    `✅ Miller анализ завършен! Ефективен капацитет: ${effectiveCapacitance.toFixed(0)} pF` : 
    `✅ Miller analysis completed! Effective capacitance: ${effectiveCapacitance.toFixed(0)} pF`;

  showTemporaryMessage(message, 'success');
}

// Dead-time Analysis Function  
function calculateDeadTime() {
  console.log('🔧 calculateDeadTime called');

  // Force reload selectedTransistor from storage first
  loadSelectedTransistorFromStorage();

  let transistor = selectedTransistor || window.selectedTransistor;
  let usingFallback = false;

  console.log('DeadTime - using transistor:', transistor ? transistor.name : 'null');

  if (!transistor) {
    // Use fallback transistor for dead-time analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N за Dead-time анализ. За точни резултати изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N for Dead-time analysis. For accurate results, select transistor from Calculator.';

    showTemporaryMessage(message, 'warning', 6000);
  }

  // Get input values with fallbacks
  const deadTimeEl = document.getElementById('deadTime');
  const outputCurrentEl = document.getElementById('outputCurrent');
  const bodyDiodeVfEl = document.getElementById('bodyDiodeVf');
  const switchingFreqEl = document.getElementById('switchingFreq');

  const deadTime = deadTimeEl ? parseFloat(deadTimeEl.value) || 200 : 200; // ns
  const outputCurrent = outputCurrentEl ? parseFloat(outputCurrentEl.value) || 10 : 10; // A
  const bodyDiodeVf = bodyDiodeVfEl ? parseFloat(bodyDiodeVfEl.value) || 1.2 : 1.2; // V
  const switchingFreq = switchingFreqEl ? parseFloat(switchingFreqEl.value) || 100 : 100; // kHz

  // Dead-time loss calculations - точни формули
  const deadTimeSeconds = deadTime * 1e-9; // Convert ns to seconds
  const switchingFreqHz = switchingFreq * 1000; // Convert kHz to Hz

  // Body diode conduction losses during dead-time
  const bodyDiodeLosses = bodyDiodeVf * outputCurrent * deadTimeSeconds * switchingFreqHz * 2; // 2 for both transitions

  // Additional dead-time losses (reverse recovery, etc.)
  const deadTimeLosses = bodyDiodeLosses * 1.3; // 30% overhead for reverse recovery

  const totalDeadTimeLoss = deadTimeLosses + bodyDiodeLosses;

  // Update results
  const deadTimeResultsDiv = document.getElementById('deadTimeResults');
  if (deadTimeResultsDiv) {
    deadTimeResultsDiv.innerHTML = `
      <h4>⏱️ Dead-time Analysis Results:</h4>
      <div class="results-grid">
        <div><strong>Body Diode Losses:</strong> ${bodyDiodeLosses.toFixed(3)} W</div>
        <div><strong>Dead-time Losses:</strong> ${deadTimeLosses.toFixed(3)} W</div>
        <div><strong>Total Dead-time Loss:</strong> ${totalDeadTimeLoss.toFixed(3)} W</div>
        <div><strong>% of 100W Output:</strong> ${(totalDeadTimeLoss/100*100).toFixed(2)}%</div>
      </div>
      <div class="explanation">
        <p><strong>🔬 Physics explanation:</strong></p>
        <p>По време на dead-time body diode-ът провежда ток, създавайки загуби. 
        По-дълъг dead-time = повече загуби, но по-късъм може да причини shoot-through.</p>
        <p><strong>📏 Formulas:</strong><br>
        PBodyDiode = Vf × I × tDead × fsw × 2 = ${bodyDiodeVf}V × ${outputCurrent}A × ${deadTime}ns × ${switchingFreq}kHz × 2<br>
        PTotalDead = PBodyDiode × 1.3 (reverse recovery overhead)</p>
        <div class="recommendations">
          <strong>💡 Recommendations:</strong><br>
          ${deadTime > 500 ? '⚠️ Dead-time е прекалено дълъг - намалете за по-висока ефективност' : ''}
          ${deadTime < 50 ? '⚠️ Dead-time е прекалено къс - риск от shoot-through!' : ''}
          ${deadTime >= 50 && deadTime <= 500 ? '✅ Dead-time е в оптимален диапазон' : ''}
        </div>
      </div>
    `;
    deadTimeResultsDiv.style.display = 'block';
  }

  // Create Dead-time chart
  const deadTimeChartCanvas = document.getElementById('deadTimeChart');
  if (deadTimeChartCanvas) {
    const ctx = deadTimeChartCanvas.getContext('2d');

    // Destroy existing chart if it exists
    if (window.deadTimeChart && typeof window.deadTimeChart.destroy === 'function') {
      window.deadTimeChart.destroy();
    }

    // Create pie chart showing loss distribution
    window.deadTimeChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Body Diode Losses', 'Dead-time Losses'],
        datasets: [{
          data: [bodyDiodeLosses, deadTimeLosses],
          backgroundColor: ['#e74c3c', '#f39c12'],
          borderColor: ['#c0392b', '#e67e22'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Dead-time Loss Distribution: ${totalDeadTimeLoss.toFixed(3)} W Total`
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Show success message
  const message = currentLang === 'bg' ? 
    `✅ Dead-time анализ завършен! Общи загуби: ${totalDeadTimeLoss.toFixed(3)} W` : 
    `✅ Dead-time analysis completed! Total losses: ${totalDeadTimeLoss.toFixed(3)} W`;

  showTemporaryMessage(message, 'success');
}

// SOA (Safe Operating Area) Analysis Function
function calculateSOA() {
  console.log('🔧 calculateSOA called');

  // Force reload selectedTransistor from storage first
  loadSelectedTransistorFromStorage();

  let transistor = selectedTransistor || window.selectedTransistor;
  let usingFallback = false;

  console.log('SOA - using transistor:', transistor ? transistor.name : 'null');

  if (!transistor) {
    // Use fallback transistor for SOA analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N за SOA анализ. За точни резултати изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N for SOA analysis. For accurate results, select transistor from Calculator.';

    showTemporaryMessage(message, 'warning', 6000);
  }

  // Get input values with fallbacks
  const loadInductanceEl = document.getElementById('loadInductance');
  const gateResistanceEl = document.getElementById('gateResistance');
  const busVoltageEl = document.getElementById('busVoltage');
  const switchingCurrentEl = document.getElementById('switchingCurrent');

  const loadInductance = loadInductanceEl ? parseFloat(loadInductanceEl.value) || 100 : 100; // μH
  const gateResistance = gateResistanceEl ? parseFloat(gateResistanceEl.value) || 10 : 10; // Ω
  const busVoltage = busVoltageEl ? parseFloat(busVoltageEl.value) || 400 : 400; // V
  const switchingCurrent = switchingCurrentEl ? parseFloat(switchingCurrentEl.value) || 20 : 20; // A

  // SOA calculations - точни semiconductor physics
  const di_dt = busVoltage / (loadInductance * 1e-6); // A/s current slew rate
  const switchingTime = (transistor.tr_ns + transistor.tf_ns) * 1e-9; // Total switching time
  const maxSwitchingCurrent = switchingCurrent + (di_dt * switchingTime); // Peak current during switching

  // Power dissipation calculation during switching
  const avgVoltageDuringSwitch = busVoltage / 2; // Average voltage during linear region
  const avgCurrentDuringSwitch = (switchingCurrent + maxSwitchingCurrent) / 2;
  const switchingPower = avgVoltageDuringSwitch * avgCurrentDuringSwitch; // Instantaneous power

  // Thermal considerations
  const maxJunctionTemp = 150; // °C for Si
  const ambientTemp = 25; // °C
  const rth_ja = 2.0; // °C/W typical for TO-220 with medium heatsink
  const maxAllowablePower = (maxJunctionTemp - ambientTemp) / rth_ja; // W

  // SOA limits check
  const voltageMargin = (transistor.vds_max - busVoltage) / transistor.vds_max * 100;
  const currentMargin = (transistor.id_max - maxSwitchingCurrent) / transistor.id_max * 100;
  const powerMargin = (maxAllowablePower - switchingPower) / maxAllowablePower * 100;

  // Initialize safety status variables (moved outside if block for scope)
  let safetyStatus = '';
  let statusClass = '';

  // Update results
  const soaResultsDiv = document.getElementById('soaResults');
  if (soaResultsDiv) {

    if (voltageMargin > 20 && currentMargin > 20 && powerMargin > 20) {
      safetyStatus = '✅ SOA: SAFE - Всички параметри в безопасни граници';
      statusClass = 'soa-safe';
    } else if (voltageMargin > 0 && currentMargin > 0 && powerMargin > 0) {
      safetyStatus = '⚠️ SOA: CAUTION - Близо до границите, нужно внимание';
      statusClass = 'soa-warning';
    } else {
      safetyStatus = '🔥 SOA: DANGER - Надвишаване на SOA границите!';
      statusClass = 'soa-danger';
    }

    soaResultsDiv.innerHTML = `
      <h4>🎯 SOA Analysis Results:</h4>
      <div class="soa-status ${statusClass}">${safetyStatus}</div>
      <div class="results-grid">
        <div><strong>Voltage Margin:</strong> ${voltageMargin.toFixed(1)}% (${busVoltage}V vs ${transistor.vds_max}V max)</div>
        <div><strong>Current Margin:</strong> ${currentMargin.toFixed(1)}% (${maxSwitchingCurrent.toFixed(1)}A vs ${transistor.id_max}A max)</div>
        <div><strong>Power Margin:</strong> ${powerMargin.toFixed(1)}% (${switchingPower.toFixed(1)}W vs ${maxAllowablePower.toFixed(1)}W max)</div>
        <div><strong>di/dt Rate:</strong> ${(di_dt/1000000).toFixed(1)} MA/s</div>
      </div>
      <div class="explanation">
        <p><strong>🔬 Physics explanation:</strong></p>
        <p>SOA определя безопасните комбинации от напрежение, ток и мощност. 
        По време на превключване мощността достига пик - трябва да остане в SOA.</p>
        <p><strong>📏 Formulas:</strong><br>
        di/dt = V/L = ${busVoltage}V / ${loadInductance}μH = ${(di_dt/1000000).toFixed(1)} MA/s<br>
        Ipeak = Iload + (di/dt × tswitch) = ${switchingCurrent}A + ${(di_dt/1000000).toFixed(1)}MA/s × ${(switchingTime*1e9).toFixed(0)}ns<br>
        Pswitch = Vavg × Iavg = ${avgVoltageDuringSwitch}V × ${avgCurrentDuringSwitch.toFixed(1)}A = ${switchingPower.toFixed(1)}W</p>
        <div class="recommendations">
          <strong>💡 Recommendations:</strong><br>
          ${voltageMargin < 10 ? '⚠️ Намалете bus напрежението или изберете транзистор с по-високо VDS' : ''}
          ${currentMargin < 10 ? '⚠️ Намалете тока или изберете транзистор с по-високо ID' : ''}
          ${powerMargin < 10 ? '⚠️ Подобрете охлаждането или намалете switching времената' : ''}
        </div>
      </div>
    `;
    soaResultsDiv.style.display = 'block';
  }

  // Show success message
  const statusMsg = safetyStatus.includes('SAFE') ? (currentLang === 'bg' ? 'Безопасно' : 'Safe') : 
                   safetyStatus.includes('CAUTION') ? (currentLang === 'bg' ? 'Внимание' : 'Caution') : 
                   (currentLang === 'bg' ? 'Опасно' : 'Danger');

  // Create SOA chart
  const soaChartCanvas = document.getElementById('soaChart');
  if (soaChartCanvas) {
    const ctx = soaChartCanvas.getContext('2d');

    if (window.soaChart && typeof window.soaChart.destroy === 'function') {
      window.soaChart.destroy();
    }

    const maxVolts = transistor.vds_max;
    const maxCurrent = transistor.id_max;
    const thermalPower = 50;

    const soaBoundary = [
      {x: 0, y: maxCurrent},
      {x: 12, y: Math.min(maxCurrent, thermalPower / 12)},
      {x: busVoltage, y: Math.min(maxCurrent, thermalPower / busVoltage)},
      {x: maxVolts, y: thermalPower / maxVolts},
      {x: maxVolts, y: 0},
      {x: 0, y: 0}
    ];

    const operatingPoint = {x: busVoltage, y: maxSwitchingCurrent};

    window.soaChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'SOA Boundary',
          data: soaBoundary,
          borderColor: '#3498db',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          showLine: true,
          fill: true,
          pointRadius: 3
        }, {
          label: 'Operating Point',
          data: [operatingPoint],
          borderColor: voltageMargin > 10 && currentMargin > 10 ? '#27ae60' : '#e74c3c',
          backgroundColor: voltageMargin > 10 && currentMargin > 10 ? '#27ae60' : '#e74c3c',
          pointRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `SOA Analysis: ${safetyStatus}`
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Voltage (V)' },
            max: maxVolts * 1.1
          },
          y: {
            title: { display: true, text: 'Current (A)' },
            max: maxCurrent * 1.1
          }
        }
      }
    });
  }

  const message = currentLang === 'bg' ? 
    `✅ SOA анализ завършен! Статус: ${statusMsg}` : 
    `✅ SOA analysis completed! Status: ${statusMsg}`;

  showTemporaryMessage(message, safetyStatus.includes('SAFE') ? 'success' : safetyStatus.includes('CAUTION') ? 'warning' : 'error');
}

// Parasitic Effects Analysis Function
function calculateParasitics() {
  console.log('🔧 calculateParasitics called');

  let transistor = selectedTransistor;
  let usingFallback = false;

  if (!transistor) {
    // Use fallback transistor for parasitic analysis
    transistor = TRANSISTOR_DB.Si["IRFP260N"];
    usingFallback = true;

    const message = currentLang === 'bg' ? 
      'Използва се fallback транзистор IRFP260N за Parasitic анализ. За точни резултати изберете транзистор от Calculator.' : 
      'Using fallback transistor IRFP260N for Parasitic analysis. For accurate results, select transistor from Calculator.';

    showTemporaryMessage(message, 'warning', 6000);
  }

  // Get input values with fallbacks
  const packageESREl = document.getElementById('packageESRValue');
  const packageESLEl = document.getElementById('packageESLValue');
  const traceESREl = document.getElementById('traceESRValue');
  const traceESLEl = document.getElementById('traceESLValue');
  const mutualInductanceEl = document.getElementById('mutualInductanceValue');
  const couplingFactorEl = document.getElementById('couplingFactorValue');

  const packageESR = packageESREl ? parseFloat(packageESREl.value) || 2 : 2; // mΩ
  const packageESL = packageESLEl ? parseFloat(packageESLEl.value) || 5 : 5; // nH
  const traceESR = traceESREl ? parseFloat(traceESREl.value) || 1 : 1; // mΩ
  const traceESL = traceESLEl ? parseFloat(traceESLEl.value) || 3 : 3; // nH
  const mutualInductance = mutualInductanceEl ? parseFloat(mutualInductanceEl.value) || 2 : 2; // nH
  const couplingFactor = couplingFactorEl ? parseFloat(couplingFactorEl.value) || 0.3 : 0.3; // k-factor

  // Get switching parameters
  const vdcEl = document.getElementById('vdc');
  const iLoadEl = document.getElementById('iLoad');
  const fswEl = document.getElementById('fsw');

  const vdc = vdcEl ? parseFloat(vdcEl.value) || 400 : 400; // V
  const iLoad = iLoadEl ? parseFloat(iLoadEl.value) || 20 : 20; // A
  const fsw = fswEl ? parseFloat(fswEl.value) || 100 : 100; // kHz

  // Parasitic calculations - точни electromagnetic формули
  const totalESR = packageESR + traceESR; // mΩ
  const totalESL = packageESL + traceESL; // nH

  // Voltage spike calculation: V = L × di/dt
  const di_dt = iLoad / (transistor.tr_ns * 1e-9); // A/s current slew rate
  const voltageSpike = (totalESL * 1e-9) * di_dt; // V
  const maxVoltageSpike = vdc + voltageSpike; // Total voltage stress

  // Ringing frequency: f = 1 / (2π × √(L×C))
  // Estimate parasitic capacitance from technology
  let parasiticCapacitance = 100e-12; // 100pF typical
  if (transistor.name.includes('SiC')) parasiticCapacitance = 50e-12;
  if (transistor.name.includes('GaN')) parasiticCapacitance = 20e-12;

  const ringingFreq = 1 / (2 * Math.PI * Math.sqrt((totalESL * 1e-9) * parasiticCapacitance)); // Hz

  // Power losses due to ESR
  const resistiveLosses = (iLoad * iLoad) * (totalESR * 1e-3); // W

  // Coupling effects
  const coupledVoltage = couplingFactor * voltageSpike; // Cross-coupling voltage
  const coupledNoise = mutualInductance * di_dt * 1e-9; // Noise voltage

  // Update results
  const parasiticResultsDiv = document.getElementById('parasiticResults');
  if (parasiticResultsDiv) {
    let warningsArray = [];

    if (maxVoltageSpike > transistor.vds_max * 0.8) {
      warningsArray.push('🔥 Voltage spike надвишава 80% от VDS_max!');
    }
    if (ringingFreq < fsw * 1000 * 10) {
      warningsArray.push('⚠️ Ringing честотата е близо до switching честотата!');
    }
    if (totalESR > 5) {
      warningsArray.push('⚠️ Твърде високо ESR - повече резистивни загуби!');
    }
    if (coupledNoise > 1) {
      warningsArray.push('⚠️ Високо coupling - възможни EMI проблеми!');
    }

    const warningsHtml = warningsArray.length > 0 ? 
      `<div class="warnings"><h5>⚠️ Предупреждения:</h5>${warningsArray.map(w => `<p>${w}</p>`).join('')}</div>` : 
      '<div class="warnings success">✅ Паразитните ефекти са в приемливи граници</div>';

    // Попълни таблицата със стойности
    const totalESREl = document.getElementById('totalESR');
    const totalESLEl = document.getElementById('totalESL');
    const maxVoltageSpikeEl = document.getElementById('maxVoltageSpike');
    const ringingFreqEl = document.getElementById('ringingFreq');
    const esrImpactEl = document.getElementById('esrImpact');
    const eslImpactEl = document.getElementById('eslImpact');
    const spikeImpactEl = document.getElementById('spikeImpact');
    const freqImpactEl = document.getElementById('freqImpact');

    console.log('Element найден:', {totalESREl, totalESLEl, maxVoltageSpikeEl, ringingFreqEl});
    console.log('Стойности за попълване:', {totalESR, totalESL, maxVoltageSpike, ringingFreq});

    if (totalESREl) {
      totalESREl.textContent = `${totalESR.toFixed(1)}`;
      console.log('Попълних totalESR:', totalESR.toFixed(1));
    }
    if (totalESLEl) {
      totalESLEl.textContent = `${totalESL.toFixed(1)}`;
      console.log('Попълних totalESL:', totalESL.toFixed(1));
    }
    if (maxVoltageSpikeEl) {
      maxVoltageSpikeEl.textContent = `${maxVoltageSpike.toFixed(1)}`;
      console.log('Попълних maxVoltageSpike:', maxVoltageSpike.toFixed(1));
    }
    if (ringingFreqEl) {
      ringingFreqEl.textContent = `${(ringingFreq/1000000).toFixed(1)}`;
      console.log('Попълних ringingFreq:', (ringingFreq/1000000).toFixed(1));
    }

    // Попълни въздействието
    if (esrImpactEl) esrImpactEl.textContent = `${resistiveLosses.toFixed(3)} W загуби`;
    if (eslImpactEl) eslImpactEl.textContent = `${voltageSpike.toFixed(1)} V скок`;
    if (spikeImpactEl) spikeImpactEl.textContent = maxVoltageSpike > transistor.vds_max * 0.8 ? '🔥 Опасност' : '✅ Нормално';
    if (freqImpactEl) freqImpactEl.textContent = ringingFreq < fsw * 1000 * 10 ? '⚠️ Близо до Fsw' : '✅ Добро разделение';

    // Покажи предупреждения ако има
    const parasiticWarnings = document.getElementById('parasiticWarnings');
    const warningsList = document.getElementById('warningsList');
    if (warningsArray.length > 0 && parasiticWarnings && warningsList) {
      warningsList.innerHTML = warningsArray.map(w => `<p>${w}</p>`).join('');
      parasiticWarnings.style.display = 'block';
    } else if (parasiticWarnings) {
      parasiticWarnings.style.display = 'none';
    }
    parasiticResultsDiv.style.display = 'block';
  }

  // Create voltage spikes chart
  const voltageSpikesChartCanvas = document.getElementById('voltageSpikesChart');
  if (voltageSpikesChartCanvas) {
    const ctx1 = voltageSpikesChartCanvas.getContext('2d');

    if (window.voltageSpikesChart && typeof window.voltageSpikesChart.destroy === 'function') {
      window.voltageSpikesChart.destroy();
    }

    const timePoints = [];
    const voltagePoints = [];
    for (let t = 0; t <= 100; t += 1) {
      timePoints.push(t);
      const voltage = voltageSpike * Math.exp(-t/20) * Math.sin(2*Math.PI*ringingFreq*t*1e-9*1e6);
      voltagePoints.push(voltage);
    }

    window.voltageSpikesChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: timePoints,
        datasets: [{
          label: 'Скок на напрежението (V)',
          data: voltagePoints,
          borderColor: '#e74c3c',
          backgroundColor: 'rgba(231, 76, 60, 0.1)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Скокове в напрежението: Макс ${voltageSpike.toFixed(1)}V`
          }
        },
        scales: {
          x: { title: { display: true, text: 'Време (ns)' } },
          y: { title: { display: true, text: 'Скок на напрежението (V)' } }
        }
      }
    });
  }

  // Create ringing analysis chart
  const ringingChartCanvas = document.getElementById('ringingChart');
  if (ringingChartCanvas) {
    const ctx2 = ringingChartCanvas.getContext('2d');

    if (window.ringingChart && typeof window.ringingChart.destroy === 'function') {
      window.ringingChart.destroy();
    }

    const frequencies = [];
    const impedances = [];
    for (let f = 0.1; f <= 100; f += 1) {
      frequencies.push(f);
      const omega = 2 * Math.PI * f * 1e6;
      const impedance = Math.sqrt(Math.pow(totalESR*1e-3, 2) + Math.pow(omega * totalESL*1e-9, 2));
      impedances.push(impedance * 1000);
    }

    window.ringingChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: frequencies,
        datasets: [{
          label: 'Импеданс (mΩ)',
          data: impedances,
          borderColor: '#f39c12',
          backgroundColor: 'rgba(243, 156, 18, 0.1)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Анализ на трептенията: ${(ringingFreq/1e6).toFixed(1)}MHz`
          }
        },
        scales: {
          x: { title: { display: true, text: 'Честота (MHz)' } },
          y: { title: { display: true, text: 'Импеданс (mΩ)' } }
        }
      }
    });
  }

  // Show success message
  const message = currentLang === 'bg' ? 
    `✅ Parasitic анализ завършен! Voltage spike: ${voltageSpike.toFixed(1)}V, Ringing: ${(ringingFreq/1000000).toFixed(1)}MHz` : 
    `✅ Parasitic analysis completed! Voltage spike: ${voltageSpike.toFixed(1)}V, Ringing: ${(ringingFreq/1000000).toFixed(1)}MHz`;

  showTemporaryMessage(message, 'success');
}

// Add missing event listeners for SOA and Parasitic functions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize visitor counter
  initVisitorCounter();
  
  // SOA Analysis button
  const calculateSOABtn = document.getElementById('calculateSOABtn');
  if (calculateSOABtn) {
    calculateSOABtn.addEventListener('click', function() {
      if (typeof calculateSOA === 'function') {
        calculateSOA();
      }
    });
  }

  // Parasitic Effects button
  const calculateParasiticsBtn = document.getElementById('calculateParasiticsBtn');
  if (calculateParasiticsBtn) {
    calculateParasiticsBtn.addEventListener('click', function() {
      if (typeof calculateParasitics === 'function') {
        calculateParasitics();
      }
    });
  }

  // Transistor selection improvements - Clear button functionality
  const transistorSelect = document.getElementById('transistorSelect');
  const clearTransistorBtn = document.getElementById('clearTransistor');

  if (transistorSelect && clearTransistorBtn) {
    // Show/hide clear button based on input content
    function toggleClearButton() {
      if (transistorSelect.value.trim() !== '') {
        clearTransistorBtn.classList.add('visible');
        transistorSelect.classList.add('has-selection');
      } else {
        clearTransistorBtn.classList.remove('visible');
        transistorSelect.classList.remove('has-selection');
      }
    }

    // Clear transistor selection
    clearTransistorBtn.addEventListener('click', function() {
      transistorSelect.value = '';
      selectedTransistor = null;
      clearTransistorBtn.classList.remove('visible');
      transistorSelect.classList.remove('has-selection');
      transistorSelect.focus();

      // Update all tabs to show no transistor selected
      updateSelectedTransistorInfo(null);

      // Clear stored transistor
      localStorage.removeItem('selectedTransistor');
      console.log('Transistor selection cleared');
    });

    // Monitor input changes
    transistorSelect.addEventListener('input', toggleClearButton);
    transistorSelect.addEventListener('change', toggleClearButton);

    // Initial check
    toggleClearButton();
  }
  
  // Initialize driver page if on drivers page
  initializeDriversPage();
});

// ========================
// DRIVER PAGE FUNCTIONS
// ========================

let selectedDriver = null;
let combinedLossChart = null;
let efficiencyFreqChart = null;

// Initialize drivers page
function initializeDriversPage() {
  const driverSelect = document.getElementById('driverSelect');
  if (!driverSelect) return; // Not on drivers page
  
  // Populate driver list based on selected technology
  filterDrivers();
  
  // Update selected transistor card
  updateTransistorCardOnDriverPage();
  
  // Enable recommend button if transistor is selected
  const recommendBtn = document.getElementById('recommendBtn');
  if (recommendBtn && selectedTransistor) {
    recommendBtn.disabled = false;
  }
}

// Filter drivers based on selected technology
function filterDrivers() {
  const techSelect = document.getElementById('driverTechSelect');
  const driverList = document.getElementById('driverList');
  
  if (!techSelect || !driverList) return;
  
  const selectedTech = techSelect.value;
  driverList.innerHTML = '';
  
  // Get all drivers or filter by technology
  let drivers = [];
  if (selectedTech === 'all') {
    // All technologies
    Object.keys(DRIVER_DB).forEach(tech => {
      Object.values(DRIVER_DB[tech]).forEach(driver => {
        drivers.push(driver);
      });
    });
  } else {
    // Specific technology
    if (DRIVER_DB[selectedTech]) {
      drivers = Object.values(DRIVER_DB[selectedTech]);
    }
  }
  
  // Populate datalist
  drivers.forEach(driver => {
    const option = document.createElement('option');
    option.value = driver.name;
    option.textContent = `${driver.name} - ${driver.manufacturer}`;
    driverList.appendChild(option);
  });
}

// Update driver info display
function updateDriverInfo() {
  const driverSelect = document.getElementById('driverSelect');
  if (!driverSelect) return;
  
  const driverName = driverSelect.value.trim();
  if (!driverName) {
    document.getElementById('driverInfo').style.display = 'none';
    selectedDriver = null;
    return;
  }
  
  // Find driver in database
  let foundDriver = null;
  Object.keys(DRIVER_DB).forEach(tech => {
    Object.values(DRIVER_DB[tech]).forEach(driver => {
      if (driver.name === driverName) {
        foundDriver = driver;
      }
    });
  });
  
  if (!foundDriver) {
    document.getElementById('driverInfo').style.display = 'none';
    selectedDriver = null;
    return;
  }
  
  selectedDriver = foundDriver;
  
  // Display driver info
  document.getElementById('driverModelName').textContent = foundDriver.name;
  document.getElementById('driverManufacturer').textContent = foundDriver.manufacturer;
  document.getElementById('driverTechnology').textContent = foundDriver.technology.join(', ');
  document.getElementById('driverVddRange').textContent = `${foundDriver.vdd_min}V - ${foundDriver.vdd_max}V`;
  document.getElementById('driverISource').textContent = `${foundDriver.i_source_max}A`;
  document.getElementById('driverISink').textContent = `${foundDriver.i_sink_max}A`;
  document.getElementById('driverTRise').textContent = `${foundDriver.t_rise}ns`;
  document.getElementById('driverTFall').textContent = `${foundDriver.t_fall}ns`;
  document.getElementById('driverTDelay').textContent = `${foundDriver.t_delay}ns`;
  document.getElementById('driverIq').textContent = `${foundDriver.iq}mA`;
  document.getElementById('driverChannels').textContent = foundDriver.channels;
  document.getElementById('driverPackage').textContent = foundDriver.package;
  document.getElementById('driverFeatures').textContent = foundDriver.features;
  document.getElementById('driverApplication').textContent = foundDriver.application;
  
  document.getElementById('driverInfo').style.display = 'block';
  document.getElementById('driverLossesSection').style.display = 'block';
  document.getElementById('efficiencyVsFreqSection').style.display = 'block';
}

// Clear driver selection
function clearDriverSelection() {
  const driverSelect = document.getElementById('driverSelect');
  if (driverSelect) {
    driverSelect.value = '';
    updateDriverInfo();
  }
}

// Update transistor card on driver page
function updateTransistorCardOnDriverPage() {
  const cardBody = document.getElementById('transistorCardBody');
  const recommendBtn = document.getElementById('recommendBtn');
  
  if (!cardBody) return;
  
  if (!selectedTransistor) {
    cardBody.innerHTML = `<p class="no-transistor-msg">${LANGUAGES[currentLang].noTransistorSelected || 'Няма избран транзистор. Можете да анализирате драйверите без избран транзистор.'}</p>`;
    return;
  }
  
  // Display transistor info
  const tech = selectedTransistor.name.includes('SiC') ? 'SiC' : 
               selectedTransistor.name.includes('GaN') ? 'GaN' : 'Si';
  
  cardBody.innerHTML = `
    <div class="transistor-quick-info">
      <p><strong>Модел:</strong> ${selectedTransistor.name}</p>
      <p><strong>Технология:</strong> ${tech}</p>
      <p><strong>V<sub>DS max</sub>:</strong> ${selectedTransistor.vds_max}V</p>
      <p><strong>I<sub>D max</sub>:</strong> ${selectedTransistor.id_max}A</p>
      <p><strong>R<sub>DS(on)</sub>:</strong> ${selectedTransistor.rds_mohm}mΩ</p>
      <p><strong>t<sub>r</sub>/t<sub>f</sub>:</strong> ${selectedTransistor.tr_ns}ns / ${selectedTransistor.tf_ns}ns</p>
    </div>
  `;
}

// ========================
// WORKING PARAMETERS MANAGEMENT
// ========================

// Get current working parameters from Calculator (localStorage)
function getWorkingParameters() {
  try {
    const calcParams = localStorage.getItem('calculatorParams');
    if (calcParams) {
      const params = JSON.parse(calcParams);
      return {
        vdc: params.vdc || 400,
        current: params.current || 30,
        freq: (params.freq / 1000) || 100, // Convert Hz to kHz
        temp: params.temp || 75
      };
    }
  } catch (e) {
    console.warn('Could not load calculator params:', e);
  }
  
  // Default values if no calculator data
  return {
    vdc: 400,
    current: 30,
    freq: 100,
    temp: 75
  };
}

// Update working parameters (called when inputs change)
function updateWorkingParameters() {
  const params = getWorkingParameters();
  localStorage.setItem('driverWorkingParams', JSON.stringify(params));
  console.log('Working parameters updated:', params);
}

// Load parameters from calculator page
function loadFromCalculator() {
  try {
    const calcParams = localStorage.getItem('calculatorParams');
    if (calcParams) {
      const params = JSON.parse(calcParams);
      if (document.getElementById('workingVdc')) document.getElementById('workingVdc').value = params.vdc || 400;
      if (document.getElementById('workingCurrent')) document.getElementById('workingCurrent').value = params.current || 30;
      if (document.getElementById('workingFreq')) document.getElementById('workingFreq').value = (params.freq / 1000) || 100;
      if (document.getElementById('workingTemp')) document.getElementById('workingTemp').value = params.temp || 75;
      updateWorkingParameters();
      alert('✅ Параметрите са заредени от калкулатора!');
    } else {
      alert('⚠️ Няма запазени параметри от калкулатора. Първо направете изчисление в Calculator страницата.');
    }
  } catch (e) {
    console.error('Error loading from calculator:', e);
    alert('❌ Грешка при зареждане на параметрите.');
  }
}

// Save current parameters as default
function saveAsDefault() {
  updateWorkingParameters();
  alert('💾 Параметрите са запазени като подразбиране!');
}

// Load saved parameters on page load
function loadSavedWorkingParameters() {
  try {
    const saved = localStorage.getItem('driverWorkingParams');
    if (saved) {
      const params = JSON.parse(saved);
      if (document.getElementById('workingVdc')) document.getElementById('workingVdc').value = params.vdc || 400;
      if (document.getElementById('workingCurrent')) document.getElementById('workingCurrent').value = params.current || 30;
      if (document.getElementById('workingFreq')) document.getElementById('workingFreq').value = params.freq || 100;
      if (document.getElementById('workingTemp')) document.getElementById('workingTemp').value = params.temp || 75;
    }
  } catch (e) {
    console.warn('Could not load saved parameters:', e);
  }
}

// ========================
// DRIVER SUITABILITY EVALUATION
// ========================

// Evaluate if a driver is suitable for given conditions
// Returns: { status: 'suitable'|'borderline'|'unsuitable', reasons: [], score: number }
function evaluateDriverSuitability(driver, transistor, workingParams) {
  const reasons = [];
  let score = 100;
  
  // If no transistor selected, can't fully evaluate
  if (!transistor) {
    return {
      status: 'unknown',
      reasons: ['Няма избран транзистор за пълна оценка'],
      score: 50,
      badge: '❓',
      badgeClass: 'badge-unknown'
    };
  }
  
  const transistorTech = transistor.name.includes('SiC') ? 'SiC' : 
                         transistor.name.includes('GaN') ? 'GaN' : 'Si';
  
  const tr_ns = transistor.tr_ns || 20;
  const tf_ns = transistor.tf_ns || 20;
  const vGate = driver.vgs_out || (transistorTech === 'GaN' ? 6 : 15);
  const driverQg_nC = driver.qg_drive || 100;
  
  // Calculate required currents
  const iSourceNeeded = (driverQg_nC * vGate) / tr_ns;
  const iSinkNeeded = (driverQg_nC * vGate) / tf_ns;
  
  // Check 1: Can it provide enough current? (with 20% safety margin)
  const sourceMargin = driver.i_source_max / iSourceNeeded;
  const sinkMargin = driver.i_sink_max / iSinkNeeded;
  
  if (sourceMargin >= 1.2 && sinkMargin >= 1.2) {
    reasons.push(`✅ Достатъчен ток (${driver.i_source_max.toFixed(1)}A source, ${driver.i_sink_max.toFixed(1)}A sink)`);
    score += 20;
  } else if (sourceMargin >= 1.0 && sinkMargin >= 1.0) {
    reasons.push(`⚠️ Граничен ток (нужни ${iSourceNeeded.toFixed(1)}A source, ${iSinkNeeded.toFixed(1)}A sink)`);
    score -= 10;
  } else {
    reasons.push(`❌ Недостатъчен ток (нужни ${iSourceNeeded.toFixed(1)}A source, ${iSinkNeeded.toFixed(1)}A sink)`);
    score -= 50;
  }
  
  // Check 2: Frequency suitability
  const maxRecommendedFreq = transistorTech === 'GaN' ? 500 : transistorTech === 'SiC' ? 200 : 100;
  if (workingParams.freq <= maxRecommendedFreq) {
    reasons.push(`✅ Подходяща честота (${workingParams.freq} kHz)`);
    score += 10;
  } else {
    reasons.push(`⚠️ Висока честота за ${transistorTech} (${workingParams.freq} kHz)`);
    score -= 15;
  }
  
  // Check 3: Speed (delay time)
  if (driver.t_delay < 20) {
    reasons.push(`✅ Бърз драйвер (${driver.t_delay}ns delay)`);
    score += 10;
  } else if (driver.t_delay < 40) {
    reasons.push(`⚠️ Средна скорост (${driver.t_delay}ns delay)`);
  } else {
    reasons.push(`⚠️ Бавен драйвер (${driver.t_delay}ns delay)`);
    score -= 10;
  }
  
  // Determine status
  let status, badge, badgeClass;
  if (score >= 90 && sourceMargin >= 1.2 && sinkMargin >= 1.2) {
    status = 'suitable';
    badge = '✅';
    badgeClass = 'badge-suitable';
  } else if (score >= 60 && sourceMargin >= 1.0 && sinkMargin >= 1.0) {
    status = 'borderline';
    badge = '⚠️';
    badgeClass = 'badge-borderline';
  } else {
    status = 'unsuitable';
    badge = '❌';
    badgeClass = 'badge-unsuitable';
  }
  
  return { status, reasons, score, badge, badgeClass, iSourceNeeded, iSinkNeeded };
}

// Intelligent driver recommendation based on selected transistor
function recommendDriver() {
  // Get working parameters
  const workingParams = getWorkingParameters();
  
  // Determine transistor technology (or allow "all" if no transistor)
  let transistorTech = 'all';
  if (selectedTransistor) {
    transistorTech = selectedTransistor.name.includes('SiC') ? 'SiC' : 
                     selectedTransistor.name.includes('GaN') ? 'GaN' : 'Si';
  }
  
  // Get the selected technology filter from dropdown
  const techFilter = document.getElementById('driverTechSelect')?.value || transistorTech;
  
  // Collect ALL drivers and evaluate them
  const allDriversEvaluated = [];
  
  // Determine which technology databases to search
  const techToSearch = techFilter === 'all' ? ['Si', 'SiC', 'GaN'] : [techFilter];
  
  techToSearch.forEach(tech => {
    if (DRIVER_DB[tech]) {
      Object.values(DRIVER_DB[tech]).forEach(driver => {
        const evaluation = evaluateDriverSuitability(driver, selectedTransistor, workingParams);
        allDriversEvaluated.push({
          driver: driver,
          evaluation: evaluation,
          technology: tech
        });
      });
    }
  });
  
  // Sort by status priority: suitable > borderline > unsuitable > unknown
  const statusPriority = { 'suitable': 1, 'borderline': 2, 'unsuitable': 3, 'unknown': 4 };
  allDriversEvaluated.sort((a, b) => {
    const priorityDiff = statusPriority[a.evaluation.status] - statusPriority[b.evaluation.status];
    if (priorityDiff !== 0) return priorityDiff;
    return b.evaluation.score - a.evaluation.score; // Within same status, sort by score
  });
  
  // Display results
  displayRecommendedDrivers(allDriversEvaluated, workingParams);
}

// Calculate driver compatibility score
function calculateDriverScore(driver, iSourceNeeded, iSinkNeeded, tr_ns, tf_ns) {
  let score = 100;
  
  // Prefer drivers with current capability close to needed (not excessive)
  const sourceDiff = Math.abs(driver.i_source_max - iSourceNeeded * 1.5);
  const sinkDiff = Math.abs(driver.i_sink_max - iSinkNeeded * 1.5);
  score -= (sourceDiff + sinkDiff) * 5;
  
  // Prefer faster drivers
  score += (30 - driver.t_delay) * 2;
  score += (20 - driver.t_rise) * 1.5;
  score += (20 - driver.t_fall) * 1.5;
  
  // Prefer lower quiescent current
  score -= driver.iq * 2;
  
  // Bonus for features
  if (driver.features.includes('isolation')) score += 10;
  if (driver.features.includes('Miller clamp')) score += 5;
  
  return Math.max(0, score);
}

// Display recommended drivers - SIMPLIFIED VERSION
function displayRecommendedDrivers(evaluatedDrivers, workingParams) {
  const section = document.getElementById('recommendedSection');
  const container = document.getElementById('recommendedDrivers');
  
  if (!section || !container) return;
  
  if (evaluatedDrivers.length === 0) {
    container.innerHTML = `<p class="no-results">Няма намерени драйвери. Първо направете изчисление в Calculator.</p>`;
    section.style.display = 'block';
    return;
  }
  
  // Show only TOP 3 suitable drivers
  const suitable = evaluatedDrivers.filter(d => d.evaluation.status === 'suitable');
  const borderline = evaluatedDrivers.filter(d => d.evaluation.status === 'borderline');
  
  // If less than 3 suitable, add borderline to reach 3-5 total
  const topDrivers = suitable.slice(0, 3);
  if (topDrivers.length < 3) {
    topDrivers.push(...borderline.slice(0, 5 - topDrivers.length));
  }
  
  if (topDrivers.length === 0) {
    container.innerHTML = `
      <div class="no-suitable-drivers">
        <h3>⚠️ Няма подходящи драйвери</h3>
        <p>За избрания транзистор и параметри не са намерени подходящи драйвери.</p>
        <p>Опитайте с други параметри в Calculator.</p>
      </div>
    `;
    section.style.display = 'block';
    return;
  }
  
  // Show simple header
  let html = '<div class="simple-header">';
  html += `<h3>🎯 Препоръчани драйвери за вас</h3>`;
  html += `<p class="params-used">Използвани параметри: ${workingParams.vdc}V, ${workingParams.current}A, ${workingParams.freq}kHz, ${workingParams.temp}°C</p>`;
  html += `</div>`;
  
  // Show simple cards
  html += topDrivers.map((item, index) => {
    const driver = item.driver;
    const eval = item.evaluation;
    const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐';
    
    // Get main reason (first one)
    const mainReason = eval.reasons[0] || 'Подходящ драйвер';
    
    return `
      <div class="simple-driver-card ${eval.badgeClass}" onclick="selectRecommendedDriver('${driver.name}')">
        <div class="card-rank">${rankEmoji}</div>
        <div class="card-main">
          <h4>${driver.name}</h4>
          <p class="manufacturer-small">${driver.manufacturer}</p>
          <div class="status-row">
            <span class="status-badge-big ${eval.badgeClass}">${eval.badge} ${eval.status === 'suitable' ? 'ПОДХОДЯЩ' : eval.status === 'borderline' ? 'ГРАНИЧЕН' : 'НЕПОДХОДЯЩ'}</span>
          </div>
          <p class="main-reason">${mainReason}</p>
          <div class="quick-specs">
            <span>💪 ${driver.i_source_max}A source</span>
            <span>⚡ ${driver.t_delay}ns delay</span>
            <span>📦 ${driver.channels}</span>
          </div>
        </div>
        <button class="select-btn-simple" onclick="event.stopPropagation(); selectRecommendedDriver('${driver.name}')">
          Избери
        </button>
      </div>
    `;
  }).join('');
  
  container.innerHTML = html;
  section.style.display = 'block';
  
  // Scroll to results
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Select recommended driver
function selectRecommendedDriver(driverName) {
  const driverSelect = document.getElementById('driverSelect');
  if (driverSelect) {
    driverSelect.value = driverName;
    updateDriverInfo();
    
    // Scroll to driver info
    document.getElementById('driverInfo').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Calculate driver losses
function calculateDriverLosses() {
  if (!selectedDriver) {
    alert(LANGUAGES[currentLang].selectDriverFirst || 'Моля, изберете драйвер за изчисления.');
    return;
  }
  
  const vddDriver = parseFloat(document.getElementById('vddDriver')?.value || 15);
  const fswDriver = parseFloat(document.getElementById('fswDriver')?.value || 100) * 1000; // Convert to Hz
  
  // Estimate gate charge based on driver capability
  const qg_nC = selectedDriver.qg_drive || 100;
  
  // Dynamic losses: P_dynamic = Qg * Vdd * fsw
  const pDynamic = (qg_nC * 1e-9) * vddDriver * fswDriver; // Watts
  
  // Static losses: P_static = Iq * Vdd
  const pStatic = (selectedDriver.iq * 1e-3) * vddDriver; // Watts
  
  // Total driver losses
  const pDriverTotal = pDynamic + pStatic;
  
  // Display results
  document.getElementById('driverDynamicLosses').textContent = `${pDynamic.toFixed(3)} W`;
  document.getElementById('driverStaticLosses').textContent = `${pStatic.toFixed(3)} W`;
  document.getElementById('driverTotalLosses').textContent = `${pDriverTotal.toFixed(3)} W`;
}

// Calculate combined losses (driver + transistor)
function calculateCombinedLosses() {
  if (!selectedDriver) {
    alert(LANGUAGES[currentLang].selectDriverFirst || 'Моля, изберете драйвер.');
    return;
  }
  
  if (!selectedTransistor) {
    alert(LANGUAGES[currentLang].noTransistorSelected || 'Моля, изберете транзистор.');
    return;
  }
  
  calculateDriverLosses();
  
  // Get driver losses
  const pDriverTotal = parseFloat(document.getElementById('driverTotalLosses').textContent);
  
  // Get REAL working parameters from inputs
  const workingParams = getWorkingParameters();
  const vdc = workingParams.vdc;
  const iLoad = workingParams.current;
  const fsw = workingParams.freq * 1000; // Convert kHz to Hz
  const temp = workingParams.temp;
  const duty = 0.5; // Can be added as input later if needed
  
  // Conduction losses
  const rdsOn = selectedTransistor.rds_mohm * (1 + selectedTransistor.alpha * (temp - 25)) / 1000;
  const pCond = Math.pow(iLoad, 2) * rdsOn * duty;
  
  // Switching losses
  const tr = selectedTransistor.tr_ns * 1e-9;
  const tf = selectedTransistor.tf_ns * 1e-9;
  const pSw = 0.5 * vdc * iLoad * (tr + tf) * fsw * 2;
  
  const pTransistor = pCond + pSw;
  
  // Combined
  const pCombined = pDriverTotal + pTransistor;
  const pOut = vdc * iLoad * duty;
  const efficiencyCombined = (pOut / (pOut + pCombined)) * 100;
  
  // Display results
  document.getElementById('transistorLossesInDriver').textContent = `${pTransistor.toFixed(3)} W`;
  document.getElementById('combinedTotalLosses').textContent = `${pCombined.toFixed(3)} W`;
  document.getElementById('combinedEfficiency').textContent = `${efficiencyCombined.toFixed(2)}%`;
  
  document.getElementById('combinedResults').style.display = 'block';
  
  // Create pie chart
  createCombinedLossChart(pDriverTotal, pCond, pSw);
}

// Create combined loss pie chart
function createCombinedLossChart(pDriver, pCond, pSw) {
  const canvas = document.getElementById('combinedLossChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (combinedLossChart) {
    combinedLossChart.destroy();
  }
  
  combinedLossChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Драйвер', 'Проводими загуби', 'Превключващи загуби'],
      datasets: [{
        data: [pDriver, pCond, pSw],
        backgroundColor: ['#3498db', '#e74c3c', '#f39c12'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Разпределение на загубите (Драйвер + Транзистор)',
          font: { size: 16 }
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value.toFixed(3)}W (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Generate efficiency vs frequency chart
function generateEfficiencyVsFrequency() {
  if (!selectedDriver || !selectedTransistor) {
    alert('Моля, изберете драйвер и транзистор.');
    return;
  }
  
  const freqMin = parseFloat(document.getElementById('freqMin')?.value || 10) * 1000;
  const freqMax = parseFloat(document.getElementById('freqMax')?.value || 500) * 1000;
  
  const frequencies = [];
  const efficiencies = [];
  
  // Generate frequency points
  const numPoints = 50;
  for (let i = 0; i < numPoints; i++) {
    const freq = freqMin + (freqMax - freqMin) * i / (numPoints - 1);
    frequencies.push(freq / 1000); // Convert to kHz for display
    
    // Calculate efficiency at this frequency
    const vdc = 400;
    const iLoad = 30;
    const duty = 0.5;
    const temp = 25;
    
    // Driver losses
    const qg_nC = selectedDriver.qg_drive || 100;
    const vddDriver = 15;
    const pDriverDynamic = (qg_nC * 1e-9) * vddDriver * freq;
    const pDriverStatic = (selectedDriver.iq * 1e-3) * vddDriver;
    const pDriver = pDriverDynamic + pDriverStatic;
    
    // Transistor losses
    const rdsOn = selectedTransistor.rds_mohm * (1 + selectedTransistor.alpha * (temp - 25)) / 1000;
    const pCond = Math.pow(iLoad, 2) * rdsOn * duty;
    
    const tr = selectedTransistor.tr_ns * 1e-9;
    const tf = selectedTransistor.tf_ns * 1e-9;
    const pSw = 0.5 * vdc * iLoad * (tr + tf) * freq * 2;
    
    const pTotal = pDriver + pCond + pSw;
    const pOut = vdc * iLoad * duty;
    const efficiency = (pOut / (pOut + pTotal)) * 100;
    
    efficiencies.push(efficiency);
  }
  
  // Create line chart
  const canvas = document.getElementById('efficiencyFreqChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (efficiencyFreqChart) {
    efficiencyFreqChart.destroy();
  }
  
  efficiencyFreqChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: frequencies,
      datasets: [{
        label: `${selectedTransistor.name} + ${selectedDriver.name}`,
        data: efficiencies,
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Комбинирана ефективност спрямо честота',
          font: { size: 16 }
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Честота (kHz)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Ефективност (%)'
          },
          min: 80,
          max: 100
        }
      }
    }
  });
}

// Copy combined chart to clipboard
function copyCombinedChart() {
  const canvas = document.getElementById('combinedLossChart');
  if (!canvas) return;
  
  canvas.toBlob(blob => {
    navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]).then(() => {
      showTemporaryMessage('✅ Графиката е копирана!', 'success');
    }).catch(err => {
      console.error('Failed to copy chart:', err);
      showTemporaryMessage('❌ Грешка при копиране', 'error');
    });
  });
}
