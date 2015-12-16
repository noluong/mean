$(function () {

    /* LINE & BAR SWITCH CHART */
    var d1 = [
        [0, 1200], [1, 1280], [2, 1300], [3, 1400], [4, 1450], [5, 1600], [6, 1700], [7, 1750], [8, 1850], [9, 1890], [10, 1900], [11, 1950]
    ];
    var d2 = [
        [0, 550], [1, 550], [2, 700], [3, 650], [4, 700], [5, 900], [6, 950], [7, 900], [8, 950], [9, 930], [10, 1100], [11, 1250]
    ];

    var tickArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /****  Line Chart  ****/
    var graph_lines = [{
        label: "Line 1",
        data: d1,
        lines: {
            lineWidth: 2
        },
        shadowSize: 0,
        color: '#ffba00'
    }, {
        label: "Line 1",
        data: d1,
        points: {
            show: true,
            fill: true,
            radius: 7,
            fillColor: "#ffba00",
            lineWidth: 3
        },
        color: '#fff',
        shadowSize: 0
    }, {
        label: "Line 2",
        data: d2,
        animator: {
            steps: 300,
            duration: 1000,
            start: 0
        },
        lines: {
            fill: 1,
            lineWidth: 0
        },
        color: '#68b828'
    }, {
        label: "Line 2",
        data: d2,
        points: {
            show: true,
            fill: true,
            radius: 5,
            fillColor: "#68b828",
            lineWidth: 3
        },
        color: '#fff',
        shadowSize: 1
    } ];

    function lineCharts(){
        var line_chart = $.plotAnimator($('#graph-lines'), graph_lines, {
            xaxis: {
                tickLength: 0,
                tickDecimals: 0,
                min: 0,
                ticks: [
                    [0, 'Jan'], [1, 'Feb'], [2, 'Mar'], [3, 'Apr'], [4, 'May'], [5, 'Jun'], [6, 'Jul'], [7, 'Aug'], [8, 'Sep'],  [9, 'Oct'], [10, 'Nov'], [11, 'Dec']
                ],
                font: {
                    lineHeight: 12,
                    color: "#555555"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                tickColor: "#f3f3f3",
                font: {
                    lineHeight: 13,
                    color: "#555555"
                }
            },
            grid: {
                backgroundColor: {
                    colors: ["#fff", "#fff"]
                },
                borderColor: "transparent",
                margin: 0,
                minBorderMargin: 0,
                labelMargin: 15,
                hoverable: true,
                clickable: true,
                mouseActiveRadius: 4
            },
            legend: {
                show: false
            }
        });
    }
    //lineCharts();

    function showTooltip(x, y, contents) {
        $('<div id="flot-tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            color: '#fff',
            padding: '2px 5px',
            'background-color': '#000',
            opacity: 0.8
        }).appendTo("body").fadeIn(200);
    };

    $("#graph-lines").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(0));
        $("#y").text(pos.y.toFixed(0));
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#flot-tooltip").remove();
                var x = item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);
                showTooltip(item.pageX, item.pageY, y + " visitors");
            }
        } else {
            $("#flot-tooltip").remove();
            previousPoint = null;
        }
    });

    /* Begin jQuery Rickshaw Chart */
    var seriesData = [ [], [], [], [], [], [], [], [], [] ];
    // var random = new Rickshaw.Fixtures.RandomData(50);

    // for (var i = 0; i < 50; i++) {
    //     random.addData(seriesData);
    // }
    // var graph = new Rickshaw.Graph( {
    //     element: document.getElementById("graph-visitors"),
    //     width: 500,
    //     height: 200,
    //     renderer: 'area',
    //     stroke: false,
    //     preserve: true,
    //     series: [
    //         {
    //             color: '#7c38bc',
    //             data: seriesData[1],
    //             name: 'Unique Users'
    //         }, {
    //             color: '#e7e9ea',
    //             data: seriesData[2],
    //             name: 'Page Views'
    //         }
    //     ]
    // } );

    //graph.render();

    // var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    //     graph: graph,
    //     xFormatter: function(x) {
    //         return new Date(x * 1000).toString();
    //     }
    // } );

    // var legend = new Rickshaw.Graph.Legend( {
    //     graph: graph,
    //     element: document.getElementById('rickshaw-legend')

    // } );

    // setInterval( function() {
    //     random.removeData(seriesData);
    //     random.addData(seriesData);
    //     graph.update();

    // }, 1000 );
    /* End jQuery Rickshaw Chart */

    /* Begin jQuery Sparkline */
    $(".sparklines1").sparkline([251,933,353,1200,959,1022,1702,565,1913,889,674], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines2").sparkline([5,3,7,6,2,4,6,8,6,4], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines3").sparkline([1225,6533,2953,3469,21282,7354,1655,2567,1234,677], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines4").sparkline([1225,6533,2953,3469,21282,7354,1655,2567,1234,677], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    $(".sparklines5").sparkline([251,933,353,1200,959,1022,1702,565,1913,889,674], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    $(".sparklines6").sparkline([989,3533,5953,7469,1282,9354,4655,2567,1234,577], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    /* Begin jQuery Sparkline */

    /* Begin Tasks */
    var list = $("#widget-tasks-list");
    list.sortable();
    list.disableSelection();

    list.find('input[type="checkbox"]').live('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('li').addClass('task-completed');
            $(this).closest('li').find('a.edit').remove();
        } else {
            $(this).closest('li').removeClass('task-completed');
            $(this).closest('li').find('.actions').prepend("<a href='javascript:;' class='edit'><i class='icon-pencil'></i></a>");
        }
    });
    $('.remove-tasks-completed').live('click', function () {
        list.find('li.task-completed').remove();
    });

    list.find('a.edit').live('click', function () {
        var text = $(this).closest('li').find('.checkbox span').text();
        var input = $('<input id="attribute" class="form-control input-sm" type="text" value="' + text + '" />')
        $(this).closest('li').find('.checkbox span').text('').append(input);
        input.select();

        input.keypress(function(e) {
            var code = e.which;
            if((code==13)) {
                var text = $('#attribute').val();
                $('#attribute').parent().text(text);
                $('#attribute').remove();
            }
        });
    });

    list.find('a.delete').live('click', function () {
        $(this).closest('li').remove();
    });

    $('#text-add-task').keypress(function(e) {
        var code = e.which;
        if((code==13)){
            list.prepend("<li class='list-group-item'><span class='drag-drop'><i></i></span><div class='checkbox'><label><input type='checkbox'/><span>" + $(this).val() + "</span></label></div><div class='actions'><a href='javascript:;' class='edit'><i class='icon-pencil'></i></a><a href='javascript:;' class='delete'><i class='icon-close'></i></a></div><div class='clearfix'></div></li>");
            $('input[type="checkbox"]').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });
            $(this).val('');
        }
    });
    /* End Tasks */

});

