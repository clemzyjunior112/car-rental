const modal = document.getElementById("bookingModal");
const selectedCar = document.getElementById("selectedCar");
const closeModal = document.getElementById("closeModal");
const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");
const pickup = document.getElementById("pickup");
const returnDate = document.getElementById("returnDate");

const today = new Date().toISOString().split("T")[0];

pickup.min = today;
returnDate.min = today;

function openBookingModal(carName) {
  selectedCar.textContent = carName;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  successMessage.classList.remove("show");

  setTimeout(() => {
    document.getElementById("name").focus();
  }, 80);
}

function closeBookingModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".book-btn").forEach((button) => {
  button.addEventListener("click", () => {
    openBookingModal(button.dataset.car || "Luxury Vehicle");
  });
});

closeModal.addEventListener("click", closeBookingModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeBookingModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeBookingModal();
  }
});

pickup.addEventListener("change", () => {
  returnDate.min = pickup.value || today;
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  successMessage.classList.add("show");
  bookingForm.reset();

  pickup.min = today;
  returnDate.min = today;
});