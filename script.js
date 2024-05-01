// Write a query selector that selects #imageContainer
let container=
document.querySelector("#imageContainer");
// Add at least four (4) image urls to this array
let imageUrls = [
"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/110329-science-probo-6p.jpg",
 "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12yjKHjN4gqkN03wSt-fxZCcu5wCFZrP0cUNGZFxGKOcv2Z3LiS8ZbLmiVjRL0K6x1-Y&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dsHekDUyxqOvmhNddK36VHq1fbIT7uZe6BxxC4YcEIgxN-GwMpJN-8Xse_HG5dpatZ4&usqp=CAU"
];

// Write your for of loop using .insertAdjacentHTML below
for (let image of imageUrls) {
    container.insertAdjacentHTML("beforeend","<img src='" + image + "'>");

}