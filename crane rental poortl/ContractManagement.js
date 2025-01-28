const firebaseConfig = {
    apiKey: "AIzaSyBvQ260rcH8V5eTW388EM-jQHF58mXUn4w",
    authDomain: "yantra-movers.firebaseapp.com",
    databaseURL: "https://yantra-movers-default-rtdb.firebaseio.com",
    projectId: "yantra-movers",
    storageBucket: "yantra-movers.firebasestorage.app",
    messagingSenderId: "4166237818",
    appId: "1:4166237818:web:52a2a28ad786a3419205c3",
    measurementId: "G-R43G5XCDDN"
  };
  firebase.initializeApp(firebaseConfig);
  var ContractDB = firebase.database().ref('contract')
  document.getElementById('contractForm').addEventListener("submit" submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var contractId = getElementVal("contractId");
    var contractType = getElementVal("contractType");
    var contractDate = getElementVal("contractDate");
    var contractDuration = getElementVal("contractDuration");
    var contractStatus = getElementVal("contractStatus");
    var clientName = getElementVal("clientName");
    var clientContact = getElementVal("clientContact");
    var projectName = getElementVal("projectName");
    var craneId = getElementVal("craneId");
    var craneType = getElementVal("craneType");
    var craneCapacity = getElementVal("craneCapacity");
    var craneCondition = getElementVal("craneCondition");
    var rentalRate = getElementVal("rentalRate");
    var usageRestrictions = getElementVal("usageRestrictions");
    var contractDate = getElementVal("contractDate");
    var contractDate = getElementVal("contractDate");
    var contractDate = getElementVal("contractDate");
    var contractDate = getElementVal("contractDate");
    var contractDate = getElementVal("contractDate");
    var totalValue = getElementVal("totalValue");
var paymentTerms = getElementVal("paymentTerms");
var taxes = getElementVal("taxes");
var deposit = getElementVal("deposit");
var penaltyClause = getElementVal("penaltyClause");
var discounts = getElementVal("discounts");

var workLocation = getElementVal("workLocation");
var deliveryMethod = getElementVal("deliveryMethod");
var deliveryDate = getElementVal("deliveryDate");
var pickupDate = getElementVal("pickupDate");
var operatorRequired = getElementVal("operatorRequired");
var operatorDetails = getElementVal("operatorDetails");
var serviceSchedule = getElementVal("serviceSchedule");

var attachedDocuments = getElementVal("attachedDocuments");
var insuranceDetails = getElementVal("insuranceDetails");
var permits = getElementVal("permits");
var clientAuthorization = getElementVal("clientAuthorization");

var usageGuidelines = getElementVal("usageGuidelines");
var liabilityClause = getElementVal("liabilityClause");
var terminationClause = getElementVal("terminationClause");
var renewalOptions = getElementVal("renewalOptions");

  
saveMessages("contractId", "contractType", "contractDate");
saveMessages("contractDuration", "contractStatus", "clientName");
saveMessages("clientContact", "projectName", "craneId");
saveMessages("craneType", "craneCapacity", "craneCondition");
saveMessages("rentalRate", "usageRestrictions", "totalValue");
saveMessages("paymentTerms", "taxes", "deposit");
saveMessages("penaltyClause", "discounts", "workLocation");
saveMessages("deliveryMethod", "deliveryDate", "pickupDate");
saveMessages("operatorRequired", "operatorDetails", "serviceSchedule");
saveMessages("attachedDocuments", "insuranceDetails", "permits");
saveMessages("clientAuthorization", "usageGuidelines", "liabilityClause");
saveMessages("terminationClause", "renewalOptions");

  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  
  // Signature functionality
const canvas = document.getElementById('signatureCanvas');
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(event) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function draw(event) {
    if (isDrawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.stroke();
    }
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        context.closePath();
    }
}

document.getElementById('clearButton').addEventListener('click', clearCanvas);

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
