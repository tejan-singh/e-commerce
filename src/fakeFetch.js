export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                {
                  _id: 1,
                  title: "Black tshirt",
                  image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
                  brand: "levis",
                  price: "5000",
                  categoryName: "men",
                  rating:5
                },
                {
                  _id: 2,
                  title: "Pink tshirt",
                  image: "https://i.postimg.cc/Gmgg9zDX/LS3712-B-2.jpg",
                  brand: "h&m",
                  price: "4000",
                  categoryName: "women",
                  rating:4
                },
                {
                  _id: 3,
                  title: "White shirt",
                  image: "https://i.postimg.cc/v8vzc3F5/MS3773-A-1.jpg",
                  brand: "arrow",
                  price: "3000",
                  categoryName: "men",
                  rating:3
                },
                
                {
                  _id: 4,
                  title: "White shirt",
                  image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
                  brand: "arrow",
                  price: "2000",
                  categoryName: "men",
                  rating:2
                },
                {
                  _id: 5,
                  title: "White shirt",
                  image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
                  brand: "arrow",
                  price: "1000",
                  categoryName: "men",
                  rating:1
                },
                {
                  _id: 6,
                  title: "Pink tshirt",
                  image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
                  brand: "h&m",
                  price: "4000",
                  categoryName: "women",
                  rating:4
                },
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Product list not found."
          });
        }
      }, 2000);
    });
  };
  