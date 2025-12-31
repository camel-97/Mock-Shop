export default async function productFetcher() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
            throw new Error(`HTTP errr! status: ${response.status}`)
        }

        const productData = await response.json();
        return productData;
    }
    catch (error) {
        console.error('❌ Failed to fetch product:', error.message)
        return null;
    }
    
}
