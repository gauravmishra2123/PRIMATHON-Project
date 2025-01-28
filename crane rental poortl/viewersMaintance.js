// Sample dummy data representing maintenance records
const maintenanceRecords = [
    { equipmentId: "EQ006", name: "Excavator", status: "Completed", lastMaintenance: "2024-10-10", nextMaintenance: "2025-01-10", remarks: "Routine checkup completed." },
    { equipmentId: "EQ006", name: "Excavator", status: "In Progress", lastMaintenance: "2024-09-20", nextMaintenance: "2024-12-20", remarks: "Engine repair in progress." },
    { equipmentId: "EQ006", name: "Excavator", status: "Pending", lastMaintenance: "2024-08-15", nextMaintenance: "2024-11-15", remarks: "Scheduled maintenance." },
    { equipmentId: "EQ006", name: "Excavator", status: "Completed", lastMaintenance: "2024-10-05", nextMaintenance: "2025-02-10", remarks: "Hydraulic oil changed." },
    { equipmentId: "EQ006", name: "Excavator", status: "In Progress", lastMaintenance: "2024-09-01", nextMaintenance: "2024-11-30", remarks: "Brake inspection." },
    { equipmentId: "EQ006", name: "Excavator", status: "Pending", lastMaintenance: "2024-07-15", nextMaintenance: "2024-10-15", remarks: "Tire replacement." },
    { equipmentId: "EQ006", name: "Excavator", status: "Completed", lastMaintenance: "2024-08-20", nextMaintenance: "2025-03-20", remarks: "Engine check and tuning." },
    { equipmentId: "EQ006", name: "Excavator", status: "Pending", lastMaintenance: "2024-06-10", nextMaintenance: "2024-09-10", remarks: "Scheduled tire change." },
    { equipmentId: "EQ006", name: "Excavator", status: "In Progress", lastMaintenance: "2024-07-22", nextMaintenance: "2024-12-22", remarks: "Motor replacement." },
    { equipmentId: "EQ006", name: "Excavator", status: "Completed", lastMaintenance: "2024-05-30", nextMaintenance: "2024-10-30", remarks: "Engine overhaul." }
  ];
  
  // Pagination Variables
  let currentPage = 1;
  const recordsPerPage = 5;
  
  // Function to display maintenance records
  function populateRecords() {
    const tableBody = document.querySelector("#records-table tbody");
    tableBody.innerHTML = ""; // Clear previous records
  
    // Calculate the starting index for records on the current page
    const startIndex = (currentPage - 1) * recordsPerPage;
    const selectedRecords = maintenanceRecords.slice(startIndex, startIndex + recordsPerPage);
  
    // Display records in the table
    selectedRecords.forEach(record => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${record.equipmentId}</td>
        <td>${record.name}</td>
        <td><span class="status ${record.status.toLowerCase().replace(" ", "-")}">${record.status}</span></td>
        <td>${record.lastMaintenance}</td>
        <td>${record.nextMaintenance}</td>
        <td>${record.remarks}</td>
      `;
  
      tableBody.appendChild(row);
    });
  
    // Update pagination buttons
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage * recordsPerPage >= maintenanceRecords.length;
  }
  
  // Event Listeners for Pagination
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) currentPage--;
    populateRecords();
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage * recordsPerPage < maintenanceRecords.length) currentPage++;
    populateRecords();
  });
  
  // Initialize the page by displaying the first set of records
  document.addEventListener("DOMContentLoaded", populateRecords);
  