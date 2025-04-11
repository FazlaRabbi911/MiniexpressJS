console.log('hello from script.js');
const nameobject = {
    name: 'image1',
    name2: 'image2',
    name3: 'image3'
 };
 let nameArry = Object.values(nameobject); // Array of names
 const namecall = () => {
    if(nameArry.length === 0) {
        nameArry = Object.values(nameobject); 
    }
     const randomIndex = Math.floor(Math.random() * nameArry.length); // Random index
     const name = nameArry[randomIndex]; 
     nameArry.splice(randomIndex, 1);
     return name;
 };
 
 const images = document.querySelectorAll('.image1'); // Get all images
 const button = document.querySelector('.button1'); // Get button
 const imgloc = document.querySelector('.location');

 button.addEventListener('click', () => {
    images.forEach((img) => {
        img.src = namecall();  // Set a new image src from namecall()
        imglocation = img.src;
    });
    imgloc.textContent = imglocation;
    
})

