"use strict";$((function(){var t=$(".basic-ratings"),r=$(".custom-svg-ratings"),i=$(".multi-color-ratings"),a=$(".half-star-ratings"),n=$(".full-star-ratings"),e=$(".read-only-ratings"),s=$(".onset-event-ratings"),l=$(".onChange-event-ratings"),o=$(".methods-ratings"),g=$(".btn-initialize"),c=$(".btn-destroy"),h=$(".btn-get-rating"),f=$(".btn-set-rating");if(t&&t.rateYo({rating:3.6,rtl:isRtl}),r&&r.rateYo({rating:3.2,starSvg:"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'-></path>",rtl:isRtl}),i&&i.rateYo({rtl:isRtl,multiColor:{startColor:"#fffca0",endColor:"#ffab00"}}),a&&a.rateYo({rtl:isRtl,rating:2}),n&&n.rateYo({rtl:isRtl,rating:2}),e&&e.rateYo({rating:2,rtl:isRtl}),s&&s.rateYo({rtl:isRtl}).on("rateyo.set",(function(t,r){alert("The rating is set to "+r.rating+"!")})),l&&l.rateYo({rtl:isRtl}).on("rateyo.change",(function(t,r){var i=r.rating;$(this).parent().find(".counter").text(i)})),o){var u=o.rateYo({rtl:isRtl});g&&g.on("click",(function(){u.rateYo({rtl:isRtl})})),c&&c.on("click",(function(){u.hasClass("jq-ry-container")?u.rateYo("destroy"):window.alert("Please Initialize Ratings First")})),h&&h.on("click",(function(){if(u.hasClass("jq-ry-container")){var t=u.rateYo("rating");window.alert("Current Ratings are "+t)}else window.alert("Please Initialize Ratings First")})),f&&f.on("click",(function(){u.hasClass("jq-ry-container")?u.rateYo("rating",1):window.alert("Please Initialize Ratings First")}))}}));