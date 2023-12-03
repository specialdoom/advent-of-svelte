import { getChildHttpClient, type ChildHttpClient } from './modules';

/**
 * Creates a new readonly http client interface that allows you to access the
 * available http-client interfaces.
 */
export default function getHttpClient(): HttpClient {
	return Object.freeze({
		children: getChildHttpClient
	});
}

/** Http client interface for creating the corresponding http requests. */
export interface HttpClient {
	/** Http client for the child module. */
	children(): ChildHttpClient;
}
