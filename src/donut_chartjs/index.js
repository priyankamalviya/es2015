var ctx = document.getElementById("charts");
				var data = {
					labels: ["Access Active", "Access Pending", "Access Deactivate", "Config Default", "Config Added"],
					datasets: [
						{
							fill: true,
              responsive: true,
							backgroundColor:["#46BFBD","#49A9EA","#9B59B6","#4D5360","#F7464A"],
							borderColor: "orange",
              borderWidth: 3,
							borderCapStyle: "butt",
							borderJoinStyle: "round",
							data: [7,14,21,8,5],
						}
					]
				};
				var myDoughnutChart = new Chart(ctx, {
					type: "doughnut",
					data: data,			
				});
				Chart.defaults.global.defaultColor = "#ff0000";
				Chart.defaults.global.defaultFontColor = "#ff0000";
				Chart.defaults.global.defaultFontSize = 11;
        Chart.defaults.global.elements.rectangle.borderColor = '#ff0000';
