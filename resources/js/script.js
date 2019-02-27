$(document).ready(function () {
    $('.js--features-section').waypoint(direction => {
        if (direction == 'down') {
            $('nav').addClass('stick-nav')
            console.log('running')
        } else if (direction == 'up') {
            $('nav').removeClass('stick-nav')
        }
    },
        {
            offset: '20%'
        })

})
