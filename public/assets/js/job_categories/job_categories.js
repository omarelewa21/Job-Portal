(()=>{"use strict";$(document).ready((function(){$("#filterFeatured").select2()})),$(document).ready((function(){$("#filterFeatured").on("change",(function(e){var t=$("#filterFeatured").select2("val");window.livewire.emit("changeFilter","filterFeatured",t)}))})),$(document).on("click",".addJobCategoryModal",(function(){$("#addJobCategoryModal").appendTo("body").modal("show")})),$(document).on("submit","#addJobCategoryForm",(function(e){if(e.preventDefault(),processingBtn("#addJobCategoryForm","#jobCategoryBtnSave","loading"),!checkSummerNoteEmpty("#jobCategoryDescription","Description field is required."))return processingBtn("#addJobCategoryForm","#jobCategoryBtnSave"),!0;$.ajax({url:jobCategorySaveUrl,type:"POST",data:$(this).serialize(),success:function(e){e.success&&(displaySuccessMessage(e.message),$("#addJobCategoryModal").modal("hide"),window.livewire.emit("refresh"))},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){processingBtn("#addJobCategoryForm","#jobCategoryBtnSave")}})})),$(document).on("click",".edit-btn",(function(e){if(!ajaxCallIsRunning){ajaxCallInProgress();var t=$(e.currentTarget).attr("data-id");renderData(t)}})),window.renderData=function(e){$.ajax({url:jobCategoryUrl+e+"/edit",type:"GET",success:function(e){if(e.success){var t=document.createElement("textarea");t.innerHTML=e.data.name,$("#jobCategoryId").val(e.data.id),$("#editName").val(t.value),$("#editDescription").summernote("code",e.data.description),1==e.data.is_featured?$("#editIsFeatured").prop("checked",!0):$("#editIsFeatured").prop("checked",!1),$("#editModal").appendTo("body").modal("show"),ajaxCallCompleted()}},error:function(e){displayErrorMessage(e.responseJSON.message)}})},$(document).on("submit","#editForm",(function(e){if(e.preventDefault(),processingBtn("#editForm","#btnEditSave","loading"),!checkSummerNoteEmpty("#editDescription","Description field is required."))return processingBtn("#editForm","#btnEditSave"),!0;var t=$("#jobCategoryId").val();$.ajax({url:jobCategoryUrl+t,type:"put",data:$(this).serialize(),success:function(e){e.success&&(displaySuccessMessage(e.message),$("#editModal").modal("hide"),window.livewire.emit("refresh"))},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){processingBtn("#editForm","#btnEditSave")}})})),$(document).on("click",".show-btn",(function(e){if(!ajaxCallIsRunning){ajaxCallInProgress();var t=$(e.currentTarget).attr("data-id");$.ajax({url:jobCategoryUrl+t,type:"GET",success:function(e){e.success&&($("#showName").html(""),$("#showDescription").html(""),$("#showIsFeatured").html(""),$("#showName").append(e.data.name),(isEmpty(e.data.description)?$("#showDescription").append("N/A"):$("#showDescription").append(e.data.description))&&(1==e.data.is_featured?$("#showIsFeatured").append("Yes"):$("#showIsFeatured").append("No")),$("#showModal").appendTo("body").modal("show"),ajaxCallCompleted())},error:function(e){displayErrorMessage(e.responseJSON.message)}})}})),$(document).on("click",".delete-btn",(function(e){var t=$(e.currentTarget).attr("data-id");swal({title:Lang.get("messages.common.delete")+" !",text:Lang.get("messages.common.are_you_sure_want_to_delete")+'"'+Lang.get("messages.job_category.job_category")+'" ?',type:"warning",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#6777ef",cancelButtonColor:"#d33",cancelButtonText:Lang.get("messages.common.no"),confirmButtonText:Lang.get("messages.common.yes")},(function(){$.ajax({url:jobCategoryUrl+t,type:"DELETE",success:function(e){e.success&&window.livewire.emit("refresh"),swal({title:Lang.get("messages.common.deleted")+" !",text:Lang.get("messages.job_category.job_category")+Lang.get("messages.common.has_been_deleted"),type:"success",confirmButtonColor:"#6777ef",timer:2e3})},error:function(e){swal({title:"",text:e.responseJSON.message,type:"error",confirmButtonColor:"#6777ef",timer:2e3})}})}))})),$("#addJobCategoryModal").on("hidden.bs.modal",(function(){resetModalForm("#addJobCategoryForm","#jobCategoryValidationErrorsBox"),$("#jobCategoryDescription").summernote("code","")})),$("#editModal").on("hidden.bs.modal",(function(){resetModalForm("#editForm","#editValidationErrorsBox")})),$(document).on("change",".isFeatured",(function(e){var t=$(e.currentTarget).attr("data-id");activeIsFeatured(t)})),window.activeIsFeatured=function(e){$.ajax({url:jobCategoryUrl+e+"/change-status",method:"post",cache:!1,success:function(e){e.success&&(displaySuccessMessage(e.message),window.livewire.emit("refresh"))}})},$("#jobCategoryDescription, #editDescription").summernote({minHeight:200,height:200,toolbar:[["style",["bold","italic","underline","clear"]],["font",["strikethrough"]],["para",["paragraph"]]]})})();