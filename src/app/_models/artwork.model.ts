export class Artwork {

    title: string;
    description: string;
    dimensions: string;
    year: string;
    price: string;
    category: string;
  
    constructor(title: string, description: string, dimensions: string, year: string, price: string, category: string) {
        this.title = title;
        this.description = description;
        this.dimensions = dimensions;
        this.year = year;
        this.price = price;
        this.category = category;

    }

  }
  