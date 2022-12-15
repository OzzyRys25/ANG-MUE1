export interface CarouselModel {
	marcations?: MarcationModel[];
	destinations?: DestinyModel[];
}

export interface MarcationModel {
	image: string;
	tag: string;
}

export interface DestinyModel {
	image: string;
	locale: string;
	distance: number;
}