export const endpoint = `http://localhost:4444`;
export const prodEndpoint = ``;
export const host = `https://hkvanities.dieres.com`;
export const host_dev = `https://hkvanitiesdev.dieres.com`;

export const hostname = process.env.NODE_ENV === 'development' ? host_dev: host

export const perPage = 18;