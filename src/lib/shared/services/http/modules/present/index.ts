import getAll from './get-all';
import getPositions from './get-positions';

/** Get the {@link PresentHttpClient} module for the presents CRUD provider. */
export default function getChildHttpClient(): PresentHttpClient {
	return Object.freeze({
		getAll,
		getPositions
	});
}

/** Http client interface for the present list provider. */
export interface PresentHttpClient {
	/** Gets all the present and the weight. */
	getAll(): Promise<Present[]>;

	/** Gets all the presents and their position in 20x20 hangar. */
	getPositions(): Promise<PresentPosition[]>
}

/** Represents the present details. */
export interface Present extends BasePresent {
	/** Weight of the present. */
	weight: number;
}

/** Represent the present details with positions inside the 20x20 hangar. */
export interface PresentPosition extends BasePresent {
	/** Number of row in the hangar. */
	x: number;

	/** Number of column in the hangar. */
	y: number;
}

/** Base interface for a present interface. */
interface BasePresent {
	/** Name of the child. */
	name: string;
}