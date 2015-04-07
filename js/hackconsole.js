var sponsors = {
    "Cardiff University": {"url": "http://cs.cf.ac.uk", "logo": ""},
    "Linode": {"url": "https://linode.com/", "logo": ""},
}

if(document.cookie.indexOf("dead") == -1){
    jQuery(function($, undefined) {
        $('#hack_console').terminal(function(command, term) {
            if (command !== '') {
                switch(command){
                    case "help":
                        term.echo('type `ls` to list files.');
                        term.echo('type `cat <filename>` to view files.');
                        term.echo('type `register` to register.');
                        break;
                    case "ls":
                        term.echo('contacts.txt date.txt faq.txt location.txt previous.txt prizes.txt sponsors.txt');
                        break;
                    case "cat date.txt":
                        term.echo('The Open Sauce Hackathon is taking place on the 2nd and 3rd of May, from 9:00 to 18:00 on the Saturday, and from 9:00 to ~17:30 on the Sunday.');
                        break;
                    case "cat location.txt":
                        term.echo("The Open Sauce Hackathon is taking place in Seminar Rooms 1 \&amp; 2 of the Cardiff University Trevitick Building");
                        term.echo("<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=Trevithick%20Building%2C%20Cardiff&key=AIzaSyDRPV82axLe-dsGYrCPZfISL4jpQ39DGxU\"></iframe>", {raw:true});
                        break;
                    case "cat prizes.txt":
                        term.echo("To be announced!");
                        break;
                    case "cat sponsors.txt":
                        term.echo("The 2015 Open Sauce Hackathon has been sponsored by: ");
                        for(sponsor in sponsors){
                            term.echo("<a href=\""+sponsors[sponsor]["url"]+"\">"+sponsor, {raw:true});
                        }
                        break;
                    case "./register":
                        term.echo("Taking you to eventbrite...");
                        window.open("https://www.eventbrite.co.uk/e/open-sauce-hackathon-2015-tickets-16481042241");
                        break;
                    case "cat previous.txt":
                        term.echo("Previous Hackathons: ");
                        term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2012/\">2012 Open Sauce Hackathon</a>", {raw:true});
                        term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2013/\">2013 Open Sauce Hackathon</a>", {raw:true});
                        term.echo("<a href=\"https://www.cs.cf.ac.uk/hackathon/2014/\">2014 CyberSecurity Makespace</a>", {raw:true});
                        break;
                    case "cat contacts.txt":
                        term.echo("Twitter: <a href=\"https://twitter.com/cfhack/\">@cfhack</a>", {raw:true});
                        term.echo("IRC: <a href=\"irc://irc.freenode.net/#cscf\">Freenode #cscf</a>", {raw:true});
                        term.echo("E-mail: <a href=\"mailto:redfernjm@cf.ac.uk\">joseph@redfern.me</a>", {raw:true});
                        break;
                    case "cat faq.txt":
                        term.echo("* I have no team, can I still come?");
                        term.echo("    Of course! Just turn up on the day and we will be able to fit you into a team! Or get social before the event at @cfhack on Twitter, or via IRC by joining #cscf on Freenode.");
                        term.echo("* Shall I bring food and drink?");
                        term.echo("    Lunch and refreshments are provided on the day, so you are responsible for breakfast and dinner, you are more than welcome to bring any extra food or drink with you!");
                        term.echo("* Are you providing equipment?");
                        term.echo("    You will have to provide all laptops/equipment you require to complete your project.");
                        term.echo("* Is there a max team size? ");
                        term.echo("    We ask the you have no more than 5 team members, otherwise you might not all get prizes!");
                        term.echo("* Do I have to be a Student? No, this event is open to everyone!");
                        break;

                    case "rm -rf /":
                        term.echo("Ouch.");
                        document.cookie = "dead";
                        setTimeout(function(){term.echo("You'll regret that.")}, 2000);
                        setTimeout(function(){window.location.reload();}, 4000);
                        break;
                    default:
                        term.error("Unknown Command");
                        break;

                }
            } else {
               term.echo('');
            }
        }, {
            greetings: 'Welcome to the Open Source Hackathon console. Type help to view commands, or ./register to register for the event.',
            name: 'hack_console',
            height: 800,
            prompt: 'os-hack$ '});
    });
}else{
    document.location = "/404";
}
