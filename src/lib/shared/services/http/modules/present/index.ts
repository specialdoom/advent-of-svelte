import getAll from './get-all';

/** Get the {@link PresentHttpClient} module for the presents CRUD provider. */
export default function getChildHttpClient(): PresentHttpClient {
	return Object.freeze({
		getAll
	});
}

/** Http client interface for the children list provider. */
export interface PresentHttpClient {
	/** Gets all the children. */
	getAll(): Promise<Present[]>;
}

/** Represents the child details. */
export interface Present {
	/** Name of the child. */
	name: string;

	/** Weight of the present. */
	weight: number;
}
