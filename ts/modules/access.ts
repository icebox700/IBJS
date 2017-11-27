module Access {
    export function validateUser(event, email, pass): boolean | void {
        $.ajax({
            url: "https://icebox-coolstuff.herokuapp.com/sw/varify",
            type: "POST",
            crossDomain: true,
            data: { email: email, site: 'site' },
            dataType: "json",
            success: function(response) {
                if (response.success === true) {
                    return true;
                } else {
                    return false;
                }
            },
            error: function(xhr, status) {
                alert(status);
                return false;
            }
        });
    }
}