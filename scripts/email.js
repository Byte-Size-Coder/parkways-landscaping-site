document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Access data by field name
    const userName = formData.get("name");
    const userEmail = formData.get("email");
    const userPhone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!userEmail && !userPhone) {
      alert("Please fill out one of email or phone number");
      return;
    }

    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log(subject);
    console.log("Message:", message);

    alert("Your message was succefully sent!");
    // You can now use these values however you need,
    // for example sending them to an API with fetch or emailjs.sendForm
  });
});
