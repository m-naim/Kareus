export function supportsCrypto() {
  return Boolean(window.crypto && crypto.subtle && window.TextEncoder);
}

export function hash(algo: 'SHA-256'|'SHA-384'|'SHA-512', str: string) {
  return crypto.subtle.digest(algo, new TextEncoder().encode(str));
}

export function encode64(buff: ArrayBuffer): string {
  return btoa(new Uint8Array(buff).reduce((s, b) => s + String.fromCharCode(b), ''));
}

export function hex(buff: ArrayBuffer) {
  return [].map.call(new Uint8Array(buff), (b: number) => (`00${b.toString(16)}`).slice(-2)).join('');
}
