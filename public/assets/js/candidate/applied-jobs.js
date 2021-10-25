(()=>{"use strict";var e=null;document.addEventListener("livewire:load",(function(t){window.livewire.hook("message.processed",(function(){$("#jobApplicationStatus").select2({width:"100%"}),$("#jobApplicationStatus").val(e).trigger("change.select2"),setTimeout((function(){$(".alert").fadeOut("fast")}),4e3)}))})),$(document).on("click",".apply-job-note",(function(e){var t=$(e.currentTarget).attr("data-id");$.ajax({url:candidateAppliedJobUrl+"/"+t,type:"GET",success:function(e){e.success&&($("#showNote").html(""),(isEmpty(e.data.notes)?$("#showNote").append("N/A"):$("#showNote").append(e.data.notes))&&$("#showModal").appendTo("body").modal("show"))},error:function(e){displayErrorMessage(e.responseJSON.message)}})})),$(document).on("click",".remove-applied-jobs",(function(e){var t=$(e.currentTarget).attr("data-id");swal({title:Lang.get("messages.common.delete")+" !",text:Lang.get("messages.common.are_you_sure_want_to_delete")+'"'+Lang.get("messages.applied_job.applied_jobs")+'" ?',type:"warning",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#6777ef",cancelButtonColor:"#d33",cancelButtonText:Lang.get("messages.common.no"),confirmButtonText:Lang.get("messages.common.yes")},(function(){window.livewire.emit("removeAppliedJob",t)}))})),document.addEventListener("deleted",(function(){swal({title:Lang.get("messages.common.deleted")+" !",text:Lang.get("messages.applied_job.applied_jobs")+Lang.get("messages.common.has_been_deleted"),type:"success",confirmButtonColor:"#6777ef",timer:2e3})})),$(document).ready((function(){$("#jobApplicationStatus").on("change",(function(){e=$(this).val(),window.livewire.emit("changeFilter","jobApplicationStatus",$(this).val())})),$("#jobApplicationStatus").select2({width:"100%"})})),$(document).on("click",".schedule-slot-book",(function(e){var t=$(e.currentTarget).attr("data-id");$.ajax({url:candidateAppliedJobUrl+"/"+t+"/schedule-slot-book",type:"POST",success:function(e){if(e.success){if(!isEmpty(e.data)){if(e.data.rejectedSlot&&(isEmpty(e.data.employer_cancel_note)?($("#scheduleSlotBookValidationErrorsBox").removeClass("d-none").html(Lang.get("messages.job_stage.you_have_rejected_all_slot")),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").addClass("d-none")):($("#scheduleSlotBookValidationErrorsBox").removeClass("d-none").html(e.data.employer_fullName+Lang.get("messages.job_stage.cancel_your_selected_slot")+"<br><b>Reason</b>:- "+e.data.employer_cancel_note),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").addClass("d-none")),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").addClass("d-none")),e.data.scheduleSelect>=0&&$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").addClass("d-none"),!e.data.rejectedSlot){$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").removeClass("d-none");var t=0;$.each(e.data,(function(e,o){if(!isEmpty(o.job_Schedule_Id)){var a={index:++t,notes:o.notes,schedule_date:o.schedule_date,schedule_time:o.schedule_time,schedule_id:o.job_Schedule_Id};$(".slot-main-div").append(prepareTemplateRender("#scheduleSlotBookHtmlTemplate",a)),$(".choose-slot-textarea").removeClass("d-none"),$("#scheduleSlotBookValidationErrorsBox").addClass("d-none")}}))}0!=e.data.selectSlot.length&&($.each(e.data.selectSlot,(function(e,t){var o={notes:t.notes,schedule_date:t.date,schedule_time:t.time};$(".slot-main-div").append(prepareTemplateRender("#selectedSlotBookHtmlTemplate",o))})),$("#selectedSlotBookValidationErrorsBox").removeClass("d-none").html(Lang.get("messages.job_stage.you_have_selected_this_slot"))),isEmpty(e.data)?$("#historyMainDiv").addClass("d-none"):($("#historyMainDiv").removeClass("d-none"),$.each(e.data,(function(e,t){if("object"==$.type(t)&&isEmpty(t.job_Schedule_Id)){var o={notes:t.notes,companyName:t.company_name,schedule_created_at:t.schedule_created_at};$("#historyDiv").prepend(prepareTemplateRender("#chooseSlotHistoryHtmlTemplate",o))}}))),1==e.data.scheduleSelect&&$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").addClass("d-none")}$("#scheduleSlotBookModal").appendTo("body").modal("show")}},error:function(e){displayErrorMessage(e.responseJSON.message)}})})),$("#scheduleSlotBookModal").on("hidden.bs.modal",(function(){$(".slot-main-div").html(""),$(".choose-slot-textarea textarea").val(""),$(".choose-slot-textarea").addClass("d-none"),$("#selectedSlotBookValidationErrorsBox").addClass("d-none"),$("#historyDiv").html(""),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").attr("disabled",!1),$("#rejectSlotBtnSave").val("")})),$("#rejectSlotBtnSave").click((function(){$(this).val("rejectSlot")})),$("#scheduleInterviewBtnSave").click((function(){$("#rejectSlotBtnSave").val("")})),$(document).on("submit","#scheduleSlotBookForm",(function(e){e.preventDefault(),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").attr("disabled",!0);var t,o=$(".schedule-slot-book").attr("data-id"),a=new FormData($(this)[0]);$.each($(".slot-book"),(function(e){$(this).prop("checked")&&(t=$(this).data("schedule"))})),a.append("rejectSlot",$("#rejectSlotBtnSave").val()),a.append("schedule_id",t),$.ajax({url:candidateAppliedJobUrl+"/"+o+"/choose-preference",type:"POST",data:a,processData:!1,contentType:!1,success:function(e){e.success&&(displaySuccessMessage(e.message),$("#scheduleSlotBookModal").modal("hide"))},error:function(e){displayErrorMessage(e.responseJSON.message),$("#scheduleInterviewBtnSave,#rejectSlotBtnSave").attr("disabled",!1)},complete:function(){processingBtn("#scheduleSlotBookForm","#scheduleInterviewBtnSave")}})}))})();