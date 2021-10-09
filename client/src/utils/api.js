export const getAllProjects = () => {
  return fetch('/api/project', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
