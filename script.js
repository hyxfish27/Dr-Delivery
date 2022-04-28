const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let template = `感謝訂閱我們!\n以下為您的訂閱資訊:\n
  姓名: ${name.value}\n
  電話: ${phone.value}\n
  信箱: ${email.value}`;
  alert(template);
});
