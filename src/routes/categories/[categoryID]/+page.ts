import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ fetch, params, url} ) {
    const id = url.searchParams.get('id');

    async function fetchProduct(id: string | null){
        const res = await fetch(`${PUBLIC_API_URL}/categories/${id}`);
        const data = await res.json();
        return data;
    }

    return {
        category: params.categoryID,
        product: fetchProduct(id)
        
    }

    
}