import getAll from './get-all';

/** Get the {@link NameHttpClient} module for the presents CRUD provider. */
export default function getChildHttpClient(): NameHttpClient {
  return Object.freeze({
    getAll
  });
}

/** Http client interface for the name generator. */
export interface NameHttpClient {
  /** Gets all the names for the generator. */
  getAll(): Promise<NamesList>;
}

/** Represents the list of names. */
interface NamesList {
  /** List of first names. */
  firstNames: string[];

  /** List of last names. */
  lastNames: string[];
}