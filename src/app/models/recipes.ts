export type Receta = {
    id_recipe?: number | string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    time_minutes: number | string;
    ingredients: string[];
    preparation: string[];
    severity: 'Fácil' | 'Media' | 'Difícil';
    keywords: string[];
    plated: string;
    creation_date: Date;
};
