document.addEventListener('DOMContentLoaded', function () {
    
    // Zip code suggestions
    const zipInput = document.getElementById('zip');
    const zipCodes = ['0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009'];
    zipInput.addEventListener('input', function () {
      const value = zipInput.value;
      const suggestions = zipCodes.filter(zip => zip.startsWith(value));
      console.log('Zip Code Suggestions:', suggestions);
    });
  
    });
  