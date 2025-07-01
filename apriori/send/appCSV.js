function checkCSV() {
  // Get the user input
  const userInput = document.getElementById("userBox").value;

  // Fetch the CSV file
  fetch("D:\\SEM 8\\College Project\\dataset\\fp_combined.csv")
    .then(response => response.text())
    .then(data => {
      // Split the data into rows
      const rows = data.split(/\r?\n/);

      // Loop through the rows and find the matching input
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].split(",");
        if (row[0] === userInput) {
          // If a match is found, display the corresponding value
          document.getElementById("chatLog").textContent = row[1];
          return;
        }
      }

      // If no match is found, display an error message
      document.getElementById("chatLog").textContent = "மன்னிக்கவும், பரிந்துரைகள் இல்லை ";
    })
    .catch(error => {
      console.error("Error fetching CSV file:", error);
      document.getElementById("chatLog").textContent = "Error fetching CSV file";
    });
}
