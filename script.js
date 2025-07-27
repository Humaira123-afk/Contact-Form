const form = document.getElementById("contactForm");

const fields = {
  name: {
    input: document.getElementById("name"),
    error: document.getElementById("nameError"),
    message: "Please enter your full name.",
    validate: (value) => /^[A-Za-z]{2,}( [A-Za-z]{2,})+$/.test(value.trim())
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
    message: "Enter a valid email address.",
    validate: (value) => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(value.trim())
  },
  subject: {
    input: document.getElementById("subject"),
    error: document.getElementById("subjectError"),
    message: "Subject can't be empty.",
  },
  message: {
    input: document.getElementById("message"),
    error: document.getElementById("messageError"),
    message: "Message is required.",
  }
};

// Show validation on blur
Object.values(fields).forEach(field => {
  field.input.addEventListener("blur", () => {
    validate(field);
  });
});

function validate(field) {
  const value = field.input.value.trim();
  const valid = field.validate ? field.validate(value) : value !== "";

  if (!valid) {
    field.error.textContent = field.message;
    field.input.style.borderColor = "#dc2626";
    return false;
  } else {
    field.error.textContent = "";
    field.input.style.borderColor = "#d1d5db";
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  Object.values(fields).forEach(field => {
    if (!validate(field)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    form.reset();
    Object.values(fields).forEach(field => {
      field.input.style.borderColor = "#d1d5db";
    });
  }
});
