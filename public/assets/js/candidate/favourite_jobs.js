(()=>{"use strict";$(document).ready((function(){$("#favouriteJobsId").on("change",(function(){e=$(this).val(),window.livewire.emit("changeFilter","filterFavouriteJobs",$(this).val())}))}));var e=null;document.addEventListener("livewire:load",(function(t){window.livewire.hook("message.processed",(function(){$("#favouriteJobsId").select2({width:"100%"}),$("#favouriteJobsId").val(e).trigger("change.select2"),setTimeout((function(){$(".alert").fadeOut("fast")}),4e3)}))})),$(document).on("click",".removeJob",(function(e){var t=$(e.currentTarget).attr("data-id");swal({title:Lang.get("messages.common.delete")+" !",text:Lang.get("messages.common.are_you_sure_want_to_delete")+'"'+Lang.get("messages.job.favourite_job")+'" ?',type:"warning",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0,confirmButtonColor:"#6777ef",cancelButtonColor:"#d33",cancelButtonText:Lang.get("messages.common.no"),confirmButtonText:Lang.get("messages.common.yes")},(function(){window.livewire.emit("removeJob",t)}))})),document.addEventListener("deleted",(function(){swal({title:Lang.get("messages.common.deleted")+" !",text:Lang.get("messages.job.favourite_job")+Lang.get("messages.common.has_been_deleted"),type:"success",confirmButtonColor:"#6777ef",timer:2e3})})),$(document).ready((function(){$("#favouriteJobsId").select2({width:"100%"})}))})();