const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getDogs() {
    // from the dogs table, select all items
    const response = await client.from('dogs').select('*');
    // and return the response (checking for errors)
    return checkError(response);
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id
    const dog = await client.from('dogs').select('*').eq('id', id).single();
    // and return the response (checking for errors)
    return checkError(dog);
}