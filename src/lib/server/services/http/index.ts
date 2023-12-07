import { getChildHttpClient, getPresentHttpClient, type ChildHttpClient, type PresentHttpClient, getHeartHttpClient, type HeartHttpClient } from './modules';

/**
 * Creates a new readonly http client interface that allows you to access the
 * available http-client interfaces.
 */
export default function getHttpClient(): HttpClient {
	return Object.freeze({
		children: getChildHttpClient,
		present: getPresentHttpClient,
		heart: getHeartHttpClient
	});
}

/** Http client interface for creating the corresponding http requests. */
export interface HttpClient {
	/** Http client for the child module. */
	children(): ChildHttpClient;

	/** Http client for the present module. */
	present(): PresentHttpClient;

	/** Http client for the heart module. */
	heart(): HeartHttpClient;
}
