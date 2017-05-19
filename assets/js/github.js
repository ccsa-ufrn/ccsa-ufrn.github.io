/* requires jQuery */

// @brief request from gitHub API the user information
function mount_user(username, elem) {
    var request = $.ajax({
        url: "https://api.github.com/users/"+username,
        method: "GET"
    });

    /* it's done, decode and return it */
    request.done(function(user) {
        $("#members_loading").hide();
        var anchor = elem.append("\
        <div class=\"col-xs-6 col-md-2\">\
            <a href=\""+user.html_url+"\" target=\"_blank\" class=\"thumbnail\">\
                <img src=\""+user.avatar_url+"\">\
            </a>\
            <center><b>"+user.name+"</b><br>\
            "+user.location+"\
            </center>\
        </div>");
        anchor.append("");
    });

    /* foo and bar cuz I don't want to use this results*/
    request.fail(function(foo, bar) {
        return false;
    });
}

function mount_members(m_list, elem) {
    m_list.forEach(function(m) {
        var child = elem.append("<div data-user="+m+"></div>");
        var usr = mount_user(m, child);
    });
}
