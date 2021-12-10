export default function filterProduct(product, filter, reviews) {
  
  if (filter) {
    const { onSale, avgRating } = filter;
    
    if (onSale) product = product.filter(p => p.onSale);

    if ([1, 2, 3, 4, 5].includes(avgRating))
      product = product.filter(p => {
        let avgTotalRating, occurrences = 0;

        reviews.reduce((sum, r, i) => {
          if (r.productId === p.id) {
            sum += r.rating;
            occurrences++;
          }
          if (reviews.length - 1 === i) avgTotalRating = sum / occurrences;
          
          return sum;
        }, 0);

        return avgTotalRating >= avgRating;
      });
  }
  return product;
}