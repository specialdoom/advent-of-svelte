import Snowflakes from 'magic-snowflakes';

export default function getSnowflakes() {
	return createSnowflakes();
}

function createSnowflakes() {
	return new Snowflakes({ wind: true });
}
