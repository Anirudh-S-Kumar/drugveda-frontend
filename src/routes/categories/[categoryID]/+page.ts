export async function load({ fetch, url} ) {
    const id = url.searchParams.get('id');

    async function fetchProduct(id: string | null){
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return data;
    }

    return {
        product: fetchProduct(id)
    }

    
}