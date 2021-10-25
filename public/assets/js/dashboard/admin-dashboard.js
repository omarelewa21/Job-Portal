$(document).ready((function(){"use strict";var a=$("#timeRange"),t=moment(),e=t.clone().startOf("week"),s=t.clone().endOf("week");a.on("apply.daterangepicker",(function(a,t){e=t.startDate.format("YYYY-MM-D  H:mm:ss"),s=t.endDate.format("YYYY-MM-D  H:mm:ss"),loadDashboardData(e,s)})),moment().startOf("month").subtract(1,"days"),moment().startOf("week"),moment().endOf("week"),window.cb=function(t,e){a.find("span").html(t.format("MMM D, YYYY")+" - "+e.format("MMM D, YYYY"))},a.daterangepicker({startDate:e,endDate:s,opens:"left",showDropdowns:!0,autoUpdateInput:!1,ranges:{"This Week":[moment().startOf("week"),moment().endOf("week")],"Last Week":[moment().startOf("week").subtract(7,"days"),moment().startOf("week").subtract(1,"days")]}},cb),cb(e,s),window.loadDashboardData=function(a,t){$.ajax({type:"GET",url:adminDashboardChartData,dataType:"json",data:{start_date:a,end_date:t},cache:!1}).done(WeeklyBarChart,PostStatistics)},window.WeeklyBarChart=function(a){$("#weeklyUserBarChartContainer").html(""),$("canvas#weeklyUserBarChart").remove(),$("#weeklyUserBarChartContainer").append('<canvas id="weeklyUserBarChart" width="515" height="413"></canvas>');var t=a.data.weeklyChartData,e={labels:t.weeklyLabels,datasets:[{label:"Employees",backgroundColor:"#6777ef",data:t.totalEmployerCount},{label:"Candidates",backgroundColor:"#3abaf4",data:t.totalCandidateCount}]},s=$("#weeklyUserBarChart");new Chart(s,{type:"bar",data:e,options:{scales:{xAxes:[{stacked:!0,gridLines:{display:!1}}],yAxes:[{stacked:!0,ticks:{min:0,precision:0},type:"linear"}]}}})},window.PostStatistics=function(a){$("#postStatisticsChartContainer").html(""),$("canvas#postStatisticsChart").remove(),$("#postStatisticsChartContainer").append('<canvas id="postStatisticsChart" width="1031" height="400"></canvas>');var t=a.data.postStatisticsChartData,e={labels:t.weeklyPostLabels,datasets:[{label:"Posts",data:t.totalPostCount,backgroundColor:"#6777ef",borderColor:"#6777ef",hoverOffset:4,pointRadius:5,pointHoverRadius:5,fill:!1,tension:.1}]},s=$("#postStatisticsChart");new Chart(s,{type:"line",data:e,options:{legend:!1,scales:{xAxes:[{stacked:!0,gridLines:{display:!1}}],yAxes:[{stacked:!0,ticks:{min:0,precision:0},type:"linear"}]}}})},loadDashboardData(e.format("YYYY-MM-D H:mm:ss"),s.format("YYYY-MM-D H:mm:ss"))})),$(document).ready((function(){var a=$(".range_inputs > button.applyBtn");$(document).on("click",".ranges li",(function(){"Custom Range"===$(this).data("range-key")?a.css("display","initial"):a.css("display","none")})),a.css("display","none")})),$(document).ready((function(){$("#recent-employee-scroll").niceScroll({touchbehavior:!0})}));