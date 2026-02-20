const API_URL = 'http://locahost:8000/api';

export async function getTasks(){
  const response=await fetch (`${api_url}/tasks/`);
  return Response.json();
   
}