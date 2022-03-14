$('.d-icon-close').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="#09121F"/> </svg> ');
$('.d-icon-modal-close').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="#FFFFFF"/> </svg> ');
$('.d-icon-toggle').html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#09121F"/> </svg> ');
$('.d-icon-play').html('<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 7L0.499999 13.0622L0.5 0.937822L11 7Z" fill="white"/> </svg> ');


function getIcon() {
    var icon = $('.d-icon');
    if(icon) {
        for (let i = 0; i < icon.length; i++) {
            var e = icon[i];
            var f = $(e).attr('fill');
            if(f) {
                $(e).children().children().attr('fill', '#' + $(e).attr('fill'))
            }
        }
    }
}
getIcon()