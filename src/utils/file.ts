import crypto from 'node:crypto';

/**
 * Generates a SHA256 hash from a given URL string.
 */
export function getHashFromURL(url: string) {
  const hash = crypto.createHash('sha256');
  hash.update(url);
  return hash.digest('hex');
}
