$(document).ready((function(){"use strict";function e(){$("#ckbCheckAll").click((function(){$(".jobCheck").prop("checked",$(this).prop("checked"))})),$(".jobCheck").on("click",(function(){$(".jobCheck:checked").length==$(".jobCheck").length?$("#ckbCheckAll").prop("checked",!0):$("#ckbCheckAll").prop("checked",!1)}))}function t(e){return moment(e).fromNow()}$("#candidateId").select2({placeholder:"Select Candidate"}),$("#filter_employers").select2(),e(),$(document).on("change","#filter_employers",(function(){$(".job-notification-ul").empty(),$("#ckbCheckAll").prop("checked",!1);var o="",a=$(this).val();o=isEmpty(a)?jobNotification:getEmployerJobs+"/"+a,$.ajax({url:o,type:"get",success:function(o){if(o.success){var c,i,l="";if(isEmpty(a)){if(o.data.length>0)for(c=0;c<o.data.length;++c){var n=[{job_id:o.data[c].id,job_title:o.data[c].job_title,created_by:t(o.data[c].created_at),jobDetails:jobDetails+"/"+o.data[c].id}];l+=prepareTemplateRender("#jobNotificationTemplate",n)}}else if(o.data.jobs.length>0)for(i=0;i<o.data.jobs.length;++i){var r=[{job_id:o.data.jobs[i].id,job_title:o.data.jobs[i].job_title,created_by:t(o.data.jobs[i].created_at),jobDetails:jobDetails+"/"+o.data.jobs[i].id}];l+=prepareTemplateRender("#jobNotificationTemplate",r)}$(".job-notification-ul").append(""!=l?l:'<li class="no-job-available"><h4>No Jobs available</h4></li>'),e()}},error:function(e){manageAjaxErrors(e)}})})),$(document).on("submit","#createJobNotificationForm",(function(){if(0===$(".jobCheck:checked").length)return displayErrorMessage("Please select at job."),!1;screenLock(),startLoader()}))}));