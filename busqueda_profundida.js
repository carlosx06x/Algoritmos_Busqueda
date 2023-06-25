// Implementación de búsqueda en profundidad (DFS)

function buscarDFS(grafo, nodoInicial, nodoFinal, visitados = new Set()) {
  if (nodoInicial === nodoFinal) {
    return true;
  }

  visitados.add(nodoInicial);

  for (let vecino of grafo[nodoInicial]) {
    if (!visitados.has(vecino)) {
      // Condición: El vecino debe ser diferente del nodo inicial
      if (vecino !== nodoInicial) {
        if (buscarDFS(grafo, vecino, nodoFinal, visitados)) {
          return true;
        }
      }
    }
  }

  return false;
}

  module.exports = buscarDFS;