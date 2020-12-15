export async function fetchSession(id: string) {
  const response = await fetch(`/api/sessions/${id}`);

  if (response.ok) {
    return await response.json();
  } else {
    if(response.status === 404) {
      return null;
    }
    throw new Error("An error occured");
  }
}