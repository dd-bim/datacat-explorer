export const objects = [
    {
        label: 'Activity',
        title: 'Aktivitäten',
        description: 'Aktivitäten oder Prozesse, die auf Subjekte verändern',
        objectType: 'XtdActivity',
        subpath: 'activities'
    },
    {
        label: 'Actor',
        title: 'Akteure',
        description: 'Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt',
        objectType: 'XtdActor',
        subpath: 'actors'
    },
    // {
    //     label: 'Property',
    //     title: 'Merkmale',
    //     descriptions: 'Qualifiziert oder Quantifiziert Objekte',
    //     objectType: 'XtdProperty',
    //     subpath: 'properties'
    // },
    {
        label: 'Subject',
        title: 'Subjekte',
        description: 'Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden',
        objectType: 'XtdSubject',
        subpath: 'subjects'
    },
    {
        label: 'Unit',
        title: 'Einheiten',
        descriptions: 'Skale, anhand derer eine Wert gemessen werden kann',
        objectType: 'XtdUnit',
        subpath: 'units'
    },
];

export const collections = [
    {
        label: 'Bag',
        title: 'Sammlungen',
        description: '',
        collectionType: 'XtdBag',
        subpath: 'bags'
    },
    {
        label: 'Nest',
        title: 'Sammlungen gleicher Objekte',
        description: '',
        collectionType: 'XtdNest',
        subpath: 'nests'
    },
];
