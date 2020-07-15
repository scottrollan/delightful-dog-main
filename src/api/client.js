const sanityClient = require('@sanity/client');
export const client = sanityClient({
  projectId: 'iln0s9zc',
  dataset: 'production',
  token: '',
  useCdn: false,
});

export const fetchTrainers = client.fetch(
  '*[category == "permanent trainer"] | order(displayOrder asc)'
);

export const fetchServices = client.fetch(
  '*[_type == "service"] | order(displayOrder asc)'
);

export const fetchGuestTrainers = client.fetch(
  '*[category == "guest trainer"] | order(displayOrder asc)'
);

export const fetchTrainingCourses = client.fetch(
  '*[_type == "training"] | order(displayOrder asc)'
);
