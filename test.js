 $(document).ready(function() {
            $("#Q1submit").click(function() {
                var radioValue = $("input[name='Q1']:checked").val();
                if (radioValue == "New York") {
                    document.getElementById("feedback1").innerHTML = "That’s right."
                }
                else {
                    document.getElementById("feedback1").innerHTML = "That’s not it."
                }
            });

            function containsAny(answer, favorite) {
                var result = answer.filter(function(item) { return favorite.indexOf(item) > -1 });
                return (result.length > 0);
            }
            $("#Q2submit").click(function() {
                var answer = ['Processor', 'Memory', 'Hard Disk', 'CD-ROM Drive']
                var favorite = [];
                $.each($("input[name='Q2']:checked"), function() {
                    favorite.push($(this).val());

                });
                var check = containsAny(answer, favorite)


                if (!Array.isArray(answer) || !Array.isArray(favorite) || answer.length !== favorite.length) {
                    if (check) {
                        document.getElementById("feedback2").innerHTML = "Your partly right."
                    }
                    else {

                        document.getElementById("feedback2").innerHTML = "That’s not it."
                    }
                }

                else {
                    document.getElementById("feedback2").innerHTML = "That’s right."

                }
            });
             $("#Q3submit").click(function() {
                var radioValue = $("input[name='Q3']:checked").val();
                if (radioValue == "Neo") {
                    document.getElementById("feedback3").innerHTML = "That’s right."
                }
                else {
                    document.getElementById("feedback3").innerHTML = "That’s not it."
                }
            });


        });