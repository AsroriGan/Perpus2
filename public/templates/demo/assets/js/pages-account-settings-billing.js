"use strict";document.addEventListener("DOMContentLoaded",(function(e){!function(){const e=document.querySelector(".credit-card-mask"),t=document.querySelector(".expiry-date-mask"),n=document.querySelector(".cvv-code-mask");e&&new Cleave(e,{creditCard:!0,onCreditCardTypeChanged:function(e){document.querySelector(".card-type").innerHTML=""!=e&&"unknown"!=e?'<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" height="28"/>':""}}),t&&new Cleave(t,{date:!0,delimiter:"/",datePattern:["m","y"]}),n&&new Cleave(n,{numeral:!0,numeralPositiveOnly:!0});const o=document.getElementById("formAccountSettings"),i=document.querySelector(".mobile-number"),a=document.querySelector(".zip-code"),s=document.getElementById("creditCardForm");if(o){FormValidation.formValidation(o,{fields:{companyName:{validators:{notEmpty:{message:"Please enter company name"}}},billingEmail:{validators:{notEmpty:{message:"Please enter billing email"},emailAddress:{message:"Please enter valid email address"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}})}s&&FormValidation.formValidation(s,{fields:{paymentCard:{validators:{notEmpty:{message:"Please enter your credit card number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:""}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus},init:e=>{e.on("plugins.message.placed",(function(e){e.element.parentElement.classList.contains("input-group")&&e.element.parentElement.insertAdjacentElement("afterend",e.messageElement)}))}});const l=document.querySelector(".cancel-subscription");l&&(l.onclick=function(){Swal.fire({text:"Are you sure you would like to cancel your subscription?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary me-2",cancelButton:"btn btn-label-secondary"},buttonsStyling:!1}).then((function(e){e.value?Swal.fire({icon:"success",title:"Unsubscribed!",text:"Your subscription cancelled successfully.",customClass:{confirmButton:"btn btn-success"}}):e.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"Unsubscription Cancelled!!",icon:"error",customClass:{confirmButton:"btn btn-success"}})}))}),i&&new Cleave(i,{phone:!0,phoneRegionCode:"US"}),a&&new Cleave(a,{delimiter:"",numeral:!0})}()})),$((function(){var e=$(".select2");e.length&&e.each((function(){var e=$(this);e.wrap('<div class="position-relative"></div>'),e.select2({dropdownParent:e.parent()})}))}));
