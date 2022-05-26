function compute() {
  var principal = document.getElementById("principal").value;

  //validate input
  if (principal < 1) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  //assemble result
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <span class="result-value">${principal}</span>,<br>
  at an interest rate of <span class="result-value">${rate}%</span>.<br>
  You will receive an amount of <span class="result-value">${interest}</span>,<br>
  in the year <span class="result-value">${year}</span>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
