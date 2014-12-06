function goToSelection(divID, divID2, divID3) {
    document.getElementById(divID).style.display = 'block';
    document.getElementById(divID2).style.display = 'none';
    document.getElementById(divID3).style.display = 'none';
    document.getElementById('googleChart').style.display = 'none';
}

function getChecked() {
    var checkedVals = $(':checkbox:checked').map(function() {
        return this.value;
    }).get();
    if (checkedVals.length > 0) {
        loadChart(checkedVals);
    } else {
        swal("Please select Toppings");
    }
}

/* Main Function */
function loadChart(myData) {
    document.getElementById('sizeAndCrust').style.display = 'none';
    document.getElementById('cheeseAndSauce').style.display = 'none';
    document.getElementById('toppings').style.display = 'none';
    document.getElementById('googleChart').style.display = 'block';
    google.load('visualization', '1', {
        callback: function() {
            drawChart(myData)
        },
        'packages': ['corechart']
    });

    function drawChart() {

        var arrayData = [];
        arrayData.push(['Item', 'Value']);
        for (i in myData) {
            arrayData.push([myData[i], 1]);
        }

        var data = google.visualization.arrayToDataTable(arrayData);
        var olddata = data;

        var options = {
            title: 'Pie Chart',
        };

        var donutoptions = {
            title: 'Donut Chart',
            pieHole: 0.4,
        };

        var diffoptions = {
            title: 'Difference Chart',
            pieSliceText: 'none',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var donutchart = new google.visualization.PieChart(document.getElementById('donutchart'));
        var diffchart = new google.visualization.PieChart(document.getElementById('diffchart'));

        var diffData = diffchart.computeDiff(olddata, data);

        chart.draw(data, options);
        donutchart.draw(data, donutoptions);
        diffchart.draw(diffData, diffoptions);
    }
}

function reload() {
    window.location.reload();
}
