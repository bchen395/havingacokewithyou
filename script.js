document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the hover-image class
    const hoverElements = document.querySelectorAll('.hover-image');
    
    // Create a container for the image (to add padding)
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    popupContainer.style.display = 'none';
    popupContainer.style.position = 'absolute';
    popupContainer.style.padding = '15px'; // White padding
    popupContainer.style.background = 'white';
    popupContainer.style.border = '2px solid #333';
    popupContainer.style.borderRadius = '5px';
    popupContainer.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    popupContainer.style.zIndex = '100';
    
    // Create the image element
    const popupImage = document.createElement('img');
    popupImage.className = 'popup-image';
    popupImage.style.display = 'block';
    popupImage.style.width = '300px';
    popupImage.style.height = 'auto';
    popupImage.style.maxWidth = '100%';
    
    // Add the image to the container
    popupContainer.appendChild(popupImage);
    
    // Add the container to the document
    document.body.appendChild(popupContainer);
    
    // Add event listeners to each hover element
    hoverElements.forEach(element => {
        // Get the image URL and position offsets from data attributes
        const imageUrl = element.getAttribute('data-image');
        const positionX = parseInt(element.getAttribute('data-position-x') || '0');
        const positionY = parseInt(element.getAttribute('data-position-y') || '-220');
        
        element.addEventListener('mouseenter', function(e) {
            // Set the image source
            popupImage.src = imageUrl;
            
            // Calculate position with custom offsets
            // Account for padding in the position calculation
            const rect = element.getBoundingClientRect();
            popupContainer.style.left = rect.left + (rect.width / 2) + positionX - 15 + 'px'; // Adjust for padding
            popupContainer.style.top = rect.top + positionY - 15 + 'px'; // Adjust for padding
            
            // Show the container
            popupContainer.style.display = 'block';
        });
        
        element.addEventListener('mouseleave', function() {
            // Hide the container
            popupContainer.style.display = 'none';
        });
    });
});