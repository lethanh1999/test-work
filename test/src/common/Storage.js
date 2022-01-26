export const STORAGE_KEYS = {
  todoList: 'todoList',
};

export default class StorageUtils {
  static setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key, defaultValue) {
    const result = window.localStorage.getItem(key);
    if (result === null || result === undefined) return defaultValue;
    return JSON.parse(result);
  }
}