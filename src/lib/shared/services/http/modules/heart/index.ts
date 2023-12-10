import getRate from './get-rate';

/** Get the {@link HeartHttpClient} module for the presents CRUD provider. */
export default function getChildHttpClient(): HeartHttpClient {
  return Object.freeze({
    getRate
  });
}

/** Http client interface for the heart tracking provider. */
export interface HeartHttpClient {
  /** Gets all the children. */
  getRate(): Promise<HeartTracker>;
}

/** Represents the Santa's heart rate details. */
export interface HeartTracker {
  /** Santa's current heart rate. */
  heartRate: number;
}