 //Toogler Close Button
 const collapseElement = document.getElementById('navbar1');
 const toggleButton = document.getElementById('togglebutton');
 const icon = document.getElementById('icon');
 
 // Add event listener for collapse show/hide events
 collapseElement.addEventListener('show.bs.collapse', () => {
     icon.classList.remove('bi-list');
     icon.classList.add('bi-x-lg'); // Change to 'close' icon
 });
 
 collapseElement.addEventListener('hide.bs.collapse', () => {
     icon.classList.remove('bi-x-lg');
     icon.classList.add('bi-list'); // Change back to 'plus' icon
 });


//closes collapse upon clicking item
 document.querySelectorAll('.nav-link').forEach(item => {
   item.addEventListener('click', () => {
       let collapseElement = document.getElementById('navbar1');
       new bootstrap.Collapse(collapseElement, { toggle: false }).hide(); // Close the collapse
   });
});

//form validate on submit
function validate(){
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Example validation logic (can be more advanced):
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var notify =document.getElementById('modalmessage');
    // Basic validation: Check if all fields are filled
    if (name !== "" && email !== "" && subject !== "") {
        // Form is valid, show modal
        notify.textContent=`${name} ,Your message sent sucessfully`;
        successModal.show();
        return false; // Prevent actual form submission
    } 
    return true;
    }

//message letter count in the form
function updatecount(){
    const textarea = document.getElementById("subject");
      const charCountDisplay = document.getElementById("charCount");
      const maxLength = textarea.maxLength;
      const currentLength = textarea.value.length;

      charCountDisplay.textContent = `${currentLength}/${maxLength}  characters remaining`;
    }
