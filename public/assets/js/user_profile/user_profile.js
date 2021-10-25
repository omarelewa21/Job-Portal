(()=>{"use strict";$(document).on("submit","#editProfileForm",(function(e){e.preventDefault();var a=jQuery(this).find("#btnPrEditSave");a.button("loading"),$.ajax({url:profileUpdateUrl,type:"post",data:new FormData($(this)[0]),processData:!1,contentType:!1,success:function(e){displaySuccessMessage(e.message),$("#editProfileModal").modal("hide"),location.reload()},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){a.button("reset")}})})),$("#changePasswordModal").on("shown.bs.modal",(function(){$(this).find("[autofocus]").focus()})),$(document).on("submit","#changePasswordForm",(function(e){e.preventDefault();var a=function(){var e=$("#pfCurrentPassword").val().trim(),a=$("#pfNewPassword").val().trim(),o=$("#pfNewConfirmPassword").val().trim();if(""==e||""==a||""==o)return $("#editPasswordValidationErrorsBox").show().html(Lang.get("messages.user.required_field_messages")),!1;return!0}();if(console.log(a),!a)return!1;var o=jQuery(this).find("#btnPrPasswordEditSave");o.button("loading"),$.ajax({url:changePasswordUrl,type:"post",data:new FormData($(this)[0]),processData:!1,contentType:!1,success:function(e){e.success&&($("#changePasswordModal").modal("hide"),displaySuccessMessage(e.message))},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){o.button("reset")}})})),$("#editProfileModal").on("hidden.bs.modal",(function(){resetModalForm("#editProfileForm","#profilePictureValidationErrorsBox"),$("#btnPrEditSave").prop("disabled",!1)})),$("#changeLanguageModal").on("hide.bs.modal",(function(){resetModalForm("#changeLanguageForm","#editProfileValidationErrorsBox"),$("#language").trigger("change.select2")})),$(document).on("click",".editProfileModal",(function(e){renderProfileData()})),window.renderProfileData=function(){$.ajax({url:profileUrl,type:"GET",success:function(e){if(e.success){var a=e.data;$("#editUserId").val(a.id),$("#firstName").val(a.first_name),$("#lastName").val(a.last_name),$("#userEmail").val(a.email),$("#phone").val(a.phone),$("#profilePicturePreview").attr("src",a.avatar),$("#editProfileModal").appendTo("body").modal("show")}}})},$(document).on("change","#profilePicture",(function(){isValidFile($(this),"#profilePictureValidationErrorsBox")?(validatePhoto(this,"#profilePicturePreview"),$("#btnPrEditSave").prop("disabled",!1)):$("#btnPrEditSave").prop("disabled",!0)})),window.validatePhoto=function(e,a){var o=!0;if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){var t=new Image;t.src=e.target.result,t.onload=function(){if(t.height/t.width!=1)return $("#profilePictureValidationErrorsBox").removeClass("d-none"),$("#profilePictureValidationErrorsBox").html(Lang.get("messages.common.image_aspect_ratio")).show(),$("#btnPrEditSave").prop("disabled",!0),!1;$(a).attr("src",e.target.result),o=!0}},o&&(t.readAsDataURL(e.files[0]),$(a).show())}},window.isValidFile=function(e,a){var o=$(e).val().split(".").pop().toLowerCase();return-1==$.inArray(o,["png","jpg","jpeg"])?($(e).val(""),$(a).removeClass("d-none"),$(a).html(Lang.get("messages.common.image_file_type")).show(),$(a).delay(5e3).slideUp(300),!1):($(a).hide(),!0)},$("#changePasswordModal").on("hidden.bs.modal",(function(){resetModalForm("#changePasswordForm","#editPasswordValidationErrorsBox")})),$(document).on("submit","#changeLanguageForm",(function(e){e.preventDefault();var a=jQuery(this).find("#btnLanguageChange");a.button("loading"),$.ajax({url:updateLanguageURL,type:"post",data:new FormData($(this)[0]),processData:!1,contentType:!1,success:function(e){$("#changePasswordModal").modal("hide"),displaySuccessMessage(e.message),setTimeout((function(){location.reload()}),1500)},error:function(e){manageAjaxErrors(e,"editProfileValidationErrorsBox")},complete:function(){a.button("reset")}})})),$(document).on("click",".changePasswordModal",(function(){$("#changePasswordModal").appendTo("body").modal("show")})),$(document).on("click",".changeLanguageModal",(function(){$("#changeLanguageModal").appendTo("body").modal("show")})),$(document).ready((function(){$("#language").select2({width:"100%"})}))})();