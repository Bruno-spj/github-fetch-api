import { baseUrl, repositoriesQuantity } from '../variables.js'

async function getEvents(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`);
  const events = await response.json();
  
  // Filtrar apenas os eventos que são do tipo 'CreateEvent' ou 'PushEvent'
  const filteredEvents = events.filter(event => event.type === 'CreateEvent' || event.type === 'PushEvent');
  
  return filteredEvents;
}


export { getEvents }