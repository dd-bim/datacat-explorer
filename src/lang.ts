export type Language = {
    id: string
    label: string
    labelInSelf: string
    required?: boolean
};

export type CatalogLanguages = { [id: string]: Language };

export const languages: CatalogLanguages = {
    'de': {id: 'de', label: 'German', labelInSelf: 'Deutsch', required: true},
    'en': {id: 'de', label: 'English', labelInSelf: 'English'},
};
