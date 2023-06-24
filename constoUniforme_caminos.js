
// Implementación de búsqueda de costo uniforme
function buscarCostoUniforme(grafo, nodoInicial, nodoFinal) {
    const visitados = new Set();
    const colaPrioridad = new PriorityQueue();
    const caminoCosto = {}; // Almacena el costo acumulado para cada nodo visitado
  
    // Agregar el nodo inicial a la cola de prioridad con costo 0
    colaPrioridad.enqueue(nodoInicial, 0);
    caminoCosto[nodoInicial] = 0;
  
    while (!colaPrioridad.isEmpty()) {
      const { elemento: nodoActual, prioridad: costoActual } = colaPrioridad.dequeue();
  
      if (nodoActual === nodoFinal) {
        return caminoCosto[nodoActual];
      }
  
      if (!visitados.has(nodoActual)) {
        visitados.add(nodoActual);
  
        for (let vecino in grafo[nodoActual]) {
          const { nodo, costo } = grafo[nodoActual][vecino];
          const costoTotal = costoActual + costo;
  
          if (!caminoCosto.hasOwnProperty(nodo) || costoTotal < caminoCosto[nodo]) {
            caminoCosto[nodo] = costoTotal;
            colaPrioridad.enqueue(nodo, costoTotal);
          }
        }
      }
    }
  
    return -1; // No se encontró un camino válido
  }