const imageFiles = [
    'clear d', 'clear n', 'clouds d', 'clouds n',
    'clouds', 'thunderstorm', 'rain', 'drizzle',
    'snow', 'atmosphere',
];
  
const weatherImages = {};
  
imageFiles.forEach((key) => {
    weatherImages[key] = require(`./weather/${key}.svg`);
});

console.log(weatherImages)
  
export default weatherImages;