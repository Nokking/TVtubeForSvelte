import TVTubeSvelte from '../pages/TVTubeSvelte.svelte'
import DetailsBook from '../pages/DetailsBook.svelte'
export const routes = {
    '/': TVTubeSvelte,
    '/books/:id': DetailsBook,
}