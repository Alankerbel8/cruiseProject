function check_value(curElem, id) {
            

            // calculate Total
            var total = 0;
            var controls = document.getElementsByTagName('input');
            for (var i = 0; i < controls.length; i++) {
                if ((controls[i].type === 'radio' || controls[i].type === 'checkbox') && controls[i].checked)
                    total = total + parseFloat(controls[i].value);
            }
            document.getElementById("total").innerHTML = total;
            //alert("Total: " + total);
        }   


