  // Create the popup container
  const popup = document.createElement('div');
  popup.id = 'imagePopup';

  // ✅ Initial hidden style
  popup.style.display = 'none';
  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.right = '0';
  popup.style.bottom = '0';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.style.zIndex = '9999';

  // Create the image inside popup
  const popupImg = document.createElement('img');
  popupImg.style.maxWidth = '90%';
  popupImg.style.maxHeight = '90%';
  popupImg.style.border = '5px solid white';
  popupImg.style.borderRadius = '10px';

  popup.appendChild(popupImg);
  document.body.appendChild(popup);

  // Add event to thumbnails
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.style.display = 'flex';
    });
  });

  // Click anywhere to close
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });