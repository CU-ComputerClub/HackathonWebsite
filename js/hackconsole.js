var sponsors = {
    "Cardiff University": "http://cs.cf.ac.uk",
    "Linode": "https://linode.com/",
}

jQuery(function($, undefined) {
    $('#hack_console').terminal(function(command, term) {
        if (command !== '') {
            switch(command){
                case "ls":
                case "help":
                    term.echo('Possible Commands: ');
                    term.echo('help location prizes sponsors register previous');
                    break;
                case "location":
                    term.echo("The Open Sauce Hackathon is taking place in Seminar Rooms 1 \&amp; 2 of the Cardiff University Trevitick Building");
                    term.echo("<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=Trevithick%20Building%2C%20Cardiff&key=AIzaSyDRPV82axLe-dsGYrCPZfISL4jpQ39DGxU\"></iframe>", {raw:true});
                    break;
                case "prizes":
                    term.echo("To be announced!");
                    break;
                case "sponsors":
                    term.echo("The 2015 Open Sauce Hackathon has been sponsored by: ");
                    for(sponsor in sponsors){
                        term.echo("<a href=\""+sponsors[sponsor]+"\">"+sponsor, {raw:true});
                    }
                    break;
                case "register":
                    term.echo("Taking you to eventbrite...");
                    window.open("http://eventbrite.com");
                    break;
                case "previous":
                    term.echo("Previous Hackathons: ");
                    term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2012/\">2012 Open Sauce Hackathon</a>", {raw:true});
                    term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2013/\">2013 Open Sauce Hackathon</a>", {raw:true});
                    term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2014/\">2014 CyberSecurity Makespace</a>", {raw:true});
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
