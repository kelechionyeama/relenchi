function createImageBorder(imgElement) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;
  
  ctx.drawImage(imgElement, 0, 0);
  
  const opacity = 0.5; // You can adjust this value between 0 and 1
  const leftColor = getAverageColor(ctx, 0, 0, 1, canvas.height, opacity);
  const rightColor = getAverageColor(ctx, canvas.width - 1, 0, 1, canvas.height, opacity);
  
  const borderDiv = imgElement.parentElement;
  borderDiv.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
}

function getAverageColor(ctx, x, y, width, height, opacity) {
  const imageData = ctx.getImageData(x, y, width, height);
  const data = imageData.data;
  
  let r = 0, g = 0, b = 0;
  
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  
  const count = data.length / 4;
  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`; // Changed from rgb to rgba
}