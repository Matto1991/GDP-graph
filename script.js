const ApiUrl =
  "https://gist.githubusercontent.com/SuecoMarcus/23bcf8a786725f1b8335ec2dc2d90779/raw/f33d1058b878a7fc95ef202763d0067e8b436e54/uruguay_gdp.json";

fetch(ApiUrl)
  .then((response) => response.json())
  .then((data) => {
    let labels = [];
    let PBI = [];

    console.log(data.sort((a, b) => a.date - b.date));

    for (let i = 0; i < data.length; i++) {
      if (data[i].date % 2 === 0) {
        labels.push(data[i].date);
        PBI.push(data[i].value);
      }
    }

    new Chart("myChart", {
      type: "line",
      data: {
        labels: labels,

        datasets: [
          {
            label: "PBI Uruguay (USD)",
            data: PBI,
          },
        ],
      },
      options: {
        responsive: true,
        backgroundColor: "#00000057",
        fill: true,
      },
    });
  });
