
document.addEventListener('DOMContentLoaded', function() {
/* modal popup variables */
   const modal_button = document.querySelector('.write-us');
   const popup = document.querySelector('.modal-window');
   const close_popup = document.querySelector('.close-popup');
   const form = popup.querySelector('.feedback-form');
   const input = popup.querySelector('.text-forms');
   const submit_button = document.querySelector('.submit-button');

   const user_name = popup.querySelector('[name=user-name]');
   const email = popup.querySelector('[name=e-mail]');
   const overlay = document.querySelector('.modal-overlay');
   const storage = localStorage.getItem('user_name');

   /* map variables */
   const map = document.querySelector('.map-compact');
   const big_map = document.querySelector('.map-popup');
   const close_map = document.querySelector('.close-map')

   ////////////////////////////////////////////////////////////////////////////////

   // modal popup - BEGIN
   modal_button.addEventListener('click', function (evt) { 
      evt.preventDefault();
      popup.classList.add('modal-window_show');
      overlay.classList.add('overlay_show');
      user_name.focus(); //автофокус

   });

   // form actions - BEGIN
   submit_button.addEventListener('click', function(evt) { //submit вешается только на формы      
      if (!user_name.value || !email.value) {
         evt.preventDefault(); 
         popup.classList.remove('modal-window_shake');
         popup.offsetWidth = popup.offsetWidth;
         popup.classList.add('modal-window_shake');

      } 
   });
   // form actions - END
   //////////////////////////////////////////////////////////////////////////////

   close_popup.addEventListener('click', function (evt) { 
      evt.preventDefault();
      popup.classList.remove('modal-window_show');  // закрытие модалки крестиком
      overlay.classList.remove('overlay_show');
      popup.classList.remove('modal-window_shake');
   });

   window.addEventListener('keydown', function (evt){
      if (evt.code === 'Escape') {    
         evt.preventDefault();
         
         if (popup.classList.contains('modal-window_show')) { // закрытие модалки клавишей ESC
            popup.classList.remove('modal-window_show');
            overlay.classList.remove('overlay_show');
            popup.classList.remove('modal-window_shake');

            
         }
      }
   });

   overlay.addEventListener('click', function (evt){
         evt.preventDefault();
         
         if (popup.classList.contains('modal-window_show')) { // закрытие модалки кликом по Overlay
            popup.classList.remove('modal-window_show');
            overlay.classList.remove('overlay_show');
            
         }

   });
   // modal popup - END
   ////////////////////////////////////////////////////////////////////////////////

   
   
   // map popup - BEGIN
   map.addEventListener('click', function (evt) { 
      evt.preventDefault();
      big_map.classList.remove('visually-hidden');
   });

   close_map.addEventListener('click', function (evt) { 
      evt.preventDefault();
      big_map.classList.add('visually-hidden');
   });
   // map popup - END

});
