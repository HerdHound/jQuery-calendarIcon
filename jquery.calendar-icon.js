(function ($) {
    var dateIconClasses = 'calendar-icon-container';
    var dateIconMonthClasses = 'calendar-icon-month calendar-icon-top';
    var dateIconYearClasses = 'calendar-icon-year calendar-icon-top';
    var dateIconDateClasses = 'calendar-icon-date';
    var dateIconDayClasses = 'calendar-icon-day';

    $.fn.calendarIcon = function(date) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year, day, month, dayOfWeek, dateIcon;
        var currentYear = (new Date()).getFullYear();

        if (typeof date === 'string') {
            date = Date.parse(date);
        }

        year = date.getFullYear() !== currentYear && '`' + (date.getFullYear() + '').slice(2) || '';
        day = '' + date.getDate();
        month = months[date.getMonth()];
        dayOfWeek = daysOfWeek[date.getDay()];

        dateIcon = $('<div>')
        .addClass(dateIconClasses)
        .appendTo(this);

        $('<span>')
        .addClass(dateIconMonthClasses)
        .text(month)
        .appendTo(dateIcon);

        $('<span>')
        .addClass(dateIconYearClasses)
        .text(year)
        .appendTo(dateIcon);

        $('<span>')
        .addClass(dateIconDateClasses)
        .text(day)
        .appendTo(dateIcon);

        $('<span>')
        .addClass(dateIconDayClasses)
        .text(dayOfWeek)
        .appendTo(dateIcon);

        return this;

    };
})(jQuery);
