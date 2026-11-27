
const listeners = new Set();

/**
 * Inscreve uma função para receber eventos.
 * @param {Function} callback
 * @returns {Function} função para cancelar a inscrição
 */
export function subscribe(callback) {
  listeners.add(callback);

  return () => {
    listeners.delete(callback);
  };
}

/**
 * Envia um evento para todos os inscritos.
 * @param {Object} event
 */
export function emit(event) {
  listeners.forEach((callback) => callback(event));
}
