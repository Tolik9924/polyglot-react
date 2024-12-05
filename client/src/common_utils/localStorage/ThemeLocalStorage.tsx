export class LocalStorageTheme {
  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }
}