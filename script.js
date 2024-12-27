document.addEventListener('DOMContentLoaded', function() {
  // Личный кабинет - имитация загрузки игры
  const uploadGameBtn = document.getElementById('uploadGameBtn');
  const uploadForm = document.getElementById('uploadForm');
    if (uploadGameBtn && uploadForm) {
         uploadGameBtn.addEventListener('click', function(){
               uploadForm.style.display = uploadForm.style.display === 'none' ? 'block' : 'none';
         });
    }
  // Личный кабинет - имитация отправки формы
  const submitGameBtn = document.getElementById('submitGameBtn');
  if (submitGameBtn) {
        submitGameBtn.addEventListener('click', function (event) {
        event.preventDefault();
           const gameName = document.getElementById('gameName').value;
           const gameFile = document.getElementById('gameFile').files[0];
           if (gameName && gameFile) {
               alert(`Имитация загрузки игры "${gameName}"`);
          } else {
             alert("Пожалуйста, заполните все поля.");
         }
     });
  }
    // Личный кабинет - имитация кошелька
  const balance = document.getElementById('balance');
   const transactBtn = document.getElementById('getTransact');
    const transactionList = document.getElementById('transactionList');
    if (transactBtn) {
        transactBtn.addEventListener('click', function(event) {
           event.preventDefault();
              const transactions = [
              { id:1, type: 'credit', amount: 5, date: '2024-05-28'},
              { id:2, type: 'debit', amount: -1, date: '2024-05-29'}
              ]
              transactionList.innerHTML = ""; // clear the table
              transactions.forEach(transaction => {
                const transactionItem = document.createElement('div');
                transactionItem.classList.add('transaction-item');
                transactionItem.innerHTML = `<p>ID: ${transaction.id} type:${transaction.type} amount: ${transaction.amount} date:${transaction.date}</p>`;
                 transactionList.appendChild(transactionItem);
              });
        });
    }
//   Имитация выхода
 const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
       logoutBtn.addEventListener('click', function(event){
        event.preventDefault();
        alert('Имитация выхода')
         window.location.href="/index.html"
     });
  }
});