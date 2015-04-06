var sponsors = {
    "Cardiff University": "http://cs.cf.ac.uk",
}

jQuery(function($, undefined) {
    $('#hack_console').terminal(function(command, term) {
        if (command !== '') {
            switch(command){
                case "help":
                    term.echo('Possible Commands: ');
                    term.echo('help location prizes sponsors register');
                    break;
                case "location":
                    term.echo("The Open Sauce Hackathon is taking place in Seminar Rooms 1 \&amp; 2 of the Cardiff University Trevitick Building");
                    term.echo("<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=Trevithick%20Building%2C%20Cardiff&key=AIzaSyDRPV82axLe-dsGYrCPZfISL4jpQ39DGxU\"></iframe>", {raw:true});
                    break;
                case "prizes":
                    term.echo("We don't know yet. A bucket load of cash, maybe?");
                    break;
                case "sponsors":
                    term.echo("We have been sponored by the likes of: ");
                    for(sponsor in sponsors){
                        term.echo("<a href=\""+sponsors[sponsor]+"\">"+sponsor, {raw:true});
                    }
                    break;
                case "register":
                    term.echo("Taking you to eventbrite...");
                    window.open("http://eventbrite.com");
                    break;
                default:
                    term.error("Unknown Command");
                    break;

            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'Welcome to the Open Source Hackathon console. Type help to view commands.',
        name: 'hack_console',
        height: 800,
        prompt: 'os-hack$ '});
});
