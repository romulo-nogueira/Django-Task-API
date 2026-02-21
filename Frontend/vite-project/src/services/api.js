const API_URL = 'http://localhost:8000/api';

export async function getTasks(){
  const response=await fetch (`${API_URL}/tasks/`);
  return response.json();
   
}

export async function createTask(task) {
  
  
}