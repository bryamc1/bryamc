window.onload = function(){
    var dChart = new Chart(document.getElementById("doughnut-chart"), {
        type: 'horizontalBar',
        data: {
        labels: ["Liam", "Jacob", "Dylan", "David", "Joseph", "Matthew", "Jacob" , "Esther", "Noah", "Sebastian"],
        datasets: [
            {
            label: "Amount",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3a4ba2","#e895ba","#c4c39f","#9fe35e","#5ea24c"],
            data: [407,290,287,282,279,276,264,260,255,253]
            }
        ]
        },
        options: {
        title: {
            display: true,
            text: 'NYCs Most Popular Baby Names by Bryam Cuzco(2017)'
        }
        }
    });
    var hChart = new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'doughnut',
        data: {
          labels: ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2738175,1550849,1960101,1451277,191555]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'NYC Population by Boroughs(1950)'
          }
        }
    });
}