import getAll from './get-all';

/** Get the {@link ChildHttpClient} module for the children CRUD provider. */
export default function getChildHttpClient(): ChildHttpClient {
	return Object.freeze({
		getAll
	});
}

/** Http client interface for the children list provider. */
export interface ChildHttpClient {
	/** Gets all the children. */
	getAll(): Promise<Child[]>;
}

/** Represents the child details. */
export interface Child {
	/** Name of the child. */
	name: string;

	/** Score of the child based on it's activities during the year. */
	tally: number;
}
