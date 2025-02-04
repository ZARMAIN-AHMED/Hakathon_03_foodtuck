import { createClient } from '@sanity/client';
import { client } from './client';

const sanityClient = createClient({
  projectId: "0av6w099", // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // Enable CDN for faster response
  apiVersion: '2023-01-01', // Specify the API version
});

export default sanityClient;


