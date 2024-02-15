// Initialize Firebase Authentication
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
const auth = getAuth();

// Show Modal
function showModal(contentType) {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  if (contentType === 'signIn') {
    loadSignInForm();
  } else if (contentType === 'signUp') {
    loadSignUpForm();
  }
}

// Hide Modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Load Sign-In Form
function loadSignInForm() {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = document.getElementById('part1').innerHTML;
  document.getElementById('sign-in-button').addEventListener('click', signIn);
}

// Load Sign-Up Form
function loadSignUpForm() {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = document.getElementById('part2').innerHTML;
  document.getElementById('sign-up-button').addEventListener('click', signUp);
}

// Sign In
function signIn() {
  const email = document.getElementById('lemail').value;
  const password = document.getElementById('lpassword').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.replace('end.html');
    })
    .catch((error) => {
      document.getElementById('errormessage').innerHTML = "" + error.message;
    });
}

// Sign Up
function signUp() {
  const email = document.getElementById('lemail1').value;
  const password = document.getElementById('lpassword1').value;
  const confirmPass = document.getElementById('confirm_password').value;
  if (password !== confirmPass) {
    document.getElementById('errormessage1').innerHTML = "Passwords do not match!";
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.replace('end.html');
    })
    .catch((error) => {
      document.getElementById('errormessage1').innerHTML = "" + error.message;
    });
}

// Event Listener for Get Started Button
document.getElementById('get-started').addEventListener('click', () => showModal('signIn'));

// Event Listener for Close Button
document.getElementById('close-modal').addEventListener('click', hideModal);

// Event Listener for Clicking Outside Modal
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    hideModal();
  }
}
