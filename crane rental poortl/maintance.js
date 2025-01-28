function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
  }
  
  function openForm() {
    document.getElementById('add-equipment-form').classList.remove('hidden');
  }
  
  function closeForm() {
    document.getElementById('add-equipment-form').classList.add('hidden');
  }
  